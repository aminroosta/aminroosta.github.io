// Datafeed implementation, will be added later
import Datafeed from './datafeed.js';

window.tvWidget = new TradingView.widget({
    symbol: 'فرابورس-بازاردوم:ذوب',
    interval: '1D',
    fullscreen: true,
    container_id: 'tv_chart_container',
    library_path: '../charting_library/',
    timezone: 'Asia/Tehran',
    datafeed: Datafeed,
    disabled_features: ['use_localstorage_for_settings'], // TODO: only for debugging
    locale: 'fa',
    overrides: {
        // "paneProperties.background": "#131722",
        // "paneProperties.vertGridProperties.color": "#363c4e",
        // "paneProperties.horzGridProperties.color": "#363c4e",
        // "symbolWatermarkProperties.transparency": 90,
        // "scalesProperties.textColor": "#AAA",
        // "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
        // "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
    },
    customFormatters: {
        timeFormatter: {
            format: (e) => {
                return e.toLocaleTimeString('fa-IR')
                    + '  ' + e.toLocaleDateString('fa-IR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    });
            }
        },
        dateFormatter: {
            format: (e) => {
                return e.toLocaleDateString('fa-IR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    });
            }
        }
    },
});