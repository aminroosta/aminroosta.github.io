const lastBarsCache = new Map();

// current public ip address - needs to be made static.
const ip = '202.185.36.83';
// for more info see https://cors-anywhere.herokuapp.com/http://api.catphotos.io/
const endpoint = `https://cors-anywhere.herokuapp.com/http://${ip}:80`;

async function get_all_symbols() {
    const resp = await fetch(`${endpoint}/assets`);
    const assets = await resp.json()
    for (let asset of assets) {
        asset.description = asset.name;
        asset.full_name = `${asset.exchange}:${asset.symbol}`;
    }
    window.assets = assets;
    return assets;
}
const symbolsCache = get_all_symbols();

const configurationData = {
    supported_resolutions: ['1D', '1W', '1M'],
    exchanges: [],
    symbols_types: [],
};

export default {
    onReady: async (callback) => {
        console.log('[onReady]: Method call');
        const symbols = await symbolsCache;
        const exchanges = [... new Set(symbols.map(s => s.exchange))].sort()
            .map(e => ({ name: e, description: e, value: e }));
        const sybmol_types = [... new Set(symbols.map(s => s.type))]
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
        console.log('[searchSymbols]: Method call');
        const symbols = await symbolsCache;
        const newSymbols = symbols.filter(symbol => {
            userInput = userInput.toLowerCase();
            return !userInput ||
                symbol.description.indexOf(userInput) !== -1 ||
                symbol.symbol.indexOf(userInput) !== -1 ||
                symbol.type.indexOf(userInput) !== -1;
        });
        const cmp = (a, b) => a < b ? -1 : a > b ? +1 : 0;
        newSymbols.sort((a, b) => {
            if (a.exchange === exchange) { return -1; }
            if (b.exchange === exchange) { return +1; }
            return cmp(a.exchange, b.exchange) || cmp(a.symbol, b.symbol);
        });
        onResultReadyCallback(newSymbols);
    },

    resolveSymbol: async (
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback,
    ) => {
        const symbols = await symbolsCache;
        const symbolItem = symbols.find(
            ({ full_name }) => full_name === symbolName
        );

        if (!symbolItem) {
            console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
            onResolveErrorCallback('cannot resolve symbol');
            return;
        }
        const symbolInfo = {
            name: symbolItem.symbol,
            description: symbolItem.description,
            type: symbolItem.type,
            session: '24x7',
            timezone: 'Asia/Tehran',
            exchange: symbolItem.exchange,
            minmov: 1,
            pricescale: 100,
            has_intraday: false,
            has_no_volume: true,
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: 'streaming',
        };

        window.symbolInfo = symbolInfo;
        onSymbolResolvedCallback(symbolInfo);
    },

    getBars: async (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
        const symbol = symbolInfo.ticker;
        const resp = await fetch(`${endpoint}/bars/${symbol}/${resolution}/${from}/${to}`);

        try {
            const bars = await resp.json();
            for (let bar of bars) {
                bar.time = Date.parse(bar.date_en);
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
