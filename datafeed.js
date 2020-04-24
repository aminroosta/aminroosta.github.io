import persianJs from './persian.js';
import jalaali from './jalali.js';
const lastBarsCache = new Map();

// current public ip address - needs to be made static.
const ip = '202.185.36.83';
// for more info see https://cors-anywhere.herokuapp.com/http://api.catphotos.io/
let endpoint = `https://cors-anywhere.herokuapp.com/http://${ip}:80`;

if(window.location.href.startsWith('http://localhost:')) {
    endpoint = 'http://localhost:80'
}

// chart time series are in gregorian format
// we need a 1-to-1 mapping to jalai.
window.encript_jalali =
function encript_jalali({jy, jm, jd}) {
    let {gy, gm, gd} = jalaali.toGregorian(jy, jm, 1);
    // because stock market is closed on friday
    // we can safely ignore it.
    let k = new Date(Date.UTC(gy, gm - 1, gd)).getDay();
    k = (6 - k) || 7; // the first friday in the month

    if(jd > k) {
        jd -=  Math.floor((jd-k)/7) + 1;
    }
    return new Date(Date.UTC(jy, jm - 1, jd));
}
window.decript_jalali =
function decript_jalali(date) {
    let jy = date.getUTCFullYear();
    let jm = date.getUTCMonth() + 1;
    let jd = date.getUTCDate();

    let {gy, gm, gd} = jalaali.toGregorian(jy, jm, 1);
    let k = new Date(Date.UTC(gy, gm - 1, gd)).getDay();
    k = (6 - k) || 7; // the first friday in the month
    if(jd >= k) {
        jd += Math.floor((jd - k) / 6) + 1;
    }
    return {jy, jm, jd};
}

function decript_epoch(epoch) {
    // negative numbers are before 1970
    // fortunately all persian years (1399) are before that.
    if(epoch < 0) {
        const {jy, jm, jd} = decript_jalali(new Date(epoch * 1000));
        const {gy, gm, gd} = jalaali.toGregorian(jy, jm, jd);
        return new Date(Date.UTC(gy, gm, gd)).getTime() / 1000;
    }
    return epoch;
}


function farsi(input) {
    return persianJs(input)
        .arabicChar().englishNumber().arabicNumber().halfSpace().toString();
}

async function get_all_assets() {
    const resp = await fetch(`${endpoint}/assets`);
    const assets = await resp.json()
    for (let asset of assets) {
        asset.the_symbol = asset.symbol; // orginal symbol, used to send rest api's.
        asset.symbol = farsi(asset.symbol);
        asset.name = farsi(asset.name);
        asset.exchange = farsi(asset.exchange);
        asset.type = farsi(asset.type);

        asset.description = asset.name;
        asset.full_name = `${asset.exchange}:${asset.symbol}`;
    }
    window.assets = assets;
    return assets;
}
const assetsCache = get_all_assets();

const configurationData = {
    supported_resolutions: ['1D', '1W', '1M'],
    exchanges: [],
    symbols_types: [],
};

export default {
    onReady: async (callback) => {
        console.log('[onReady]: Method call');
        const assets = await assetsCache;
        const exchanges = [... new Set(assets.map(s => s.exchange))].sort()
            .map(e => ({ name: e, description: e, value: e }));
        const sybmol_types = [... new Set(assets.map(s => s.type))]
            .map(t => ({ name: t, value: t }));
        configurationData.exchanges = exchanges;
        callback(configurationData);
    },

    searchSymbols: async (
        userInput,
        exchange,
        symbolType,
        onResultReadyCallback,
    ) => {
        const assets = await assetsCache;
        const newAssets = assets.filter(asset => {
            userInput = userInput && farsi(userInput);
            return !userInput ||
                asset.description.indexOf(userInput) !== -1 ||
                asset.symbol.indexOf(userInput) !== -1 ||
                asset.type.indexOf(userInput) !== -1;
        });
        const cmp = (a, b) => a < b ? -1 : a > b ? +1 : 0;
        newAssets.sort((a, b) => {
            if (a.exchange === exchange) { return -1; }
            if (b.exchange === exchange) { return +1; }
            return cmp(a.exchange, b.exchange) || cmp(a.symbol, b.symbol);
        });
        onResultReadyCallback(newAssets);
    },

    resolveSymbol: async (
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback,
    ) => {
        const assets = await assetsCache;
        window.symbolName = symbolName;
        const asset = assets.find(({ full_name, symbol }) => {
            return full_name === symbolName || symbol === symbolName;
        });

        if (!asset) {
            console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
            onResolveErrorCallback('cannot resolve symbol');
            return;
        }
        const symbolInfo = {
            name: asset.symbol,
            description: asset.description,
            type: asset.type,
            session: '24x7',
            timezone: 'Asia/Tehran',
            exchange: asset.exchange,
            the_symbol: asset.the_symbol,
            minmov: 1,
            pricescale: 1,
            has_intraday: false,
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: 'streaming',
        };

        onSymbolResolvedCallback(symbolInfo);
    },

    getBars: async (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
        from = decript_epoch(from);
        to = decript_epoch(to);
        const the_symbol = symbolInfo.the_symbol;
        const resp = await fetch(`${endpoint}/bars/${the_symbol}/${resolution}/${from}/${to}`);

        try {
            const bars = await resp.json();
            for (let bar of bars) {
                let [jy, jm, jd] = bar.date_fa.split('/');
                bar.time = encript_jalali({
                    jy: +jy, jm: +jm, jd: +jd
                });
            }
            onHistoryCallback(
                bars, { noData: bars.length === 0 }
            );
            if (firstDataRequest) {
                lastBarsCache.set(
                    symbolInfo.full_name, {
                    ...bars[bars.length - 1],
                });
            }
            window.bars = bars;
        } catch (error) {
            console.error('[getBars]: Get error', error);
            onErrorCallback(error);
        }

    },

    subscribeBars: (
        symbolInfo,
        resolution,
        onRealtimeCallback,
        subscribeUID,
        onResetCacheNeededCallback,
    ) => {
        // TODO:
        // console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);
        // subscribeOnStream(
        //     symbolInfo,
        //     resolution,
        //     onRealtimeCallback,
        //     subscribeUID,
        //     onResetCacheNeededCallback,
        //     lastBarsCache.get(symbolInfo.full_name),
        // );
    },

    unsubscribeBars: (subscriberUID) => {
        // TODO:
        // console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
        // unsubscribeFromStream(subscriberUID);
    },
};
