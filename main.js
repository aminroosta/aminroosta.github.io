// Datafeed implementation, will be added later
import Datafeed from './datafeed.js';

window.tvWidget = new TradingView.widget({
    symbol: 'فرابورس-بازاردوم:ذوب', // default symbol
    interval: '1D', // default interval
    fullscreen: true, // displays the chart in the fullscreen mode
    container_id: 'tv_chart_container',
    datafeed: Datafeed,
    locale: 'fa',
    library_path: '../charting_library/',
});