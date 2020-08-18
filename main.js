/// <reference path="./charting_library/charting_library.min.d.ts" />

import Datafeed from './datafeed.js';

window.tvWidget = new TradingView.widget({
    // symbol: 'فرابورس-بازاردوم:ذوب',
    symbol: 'بورس-بازاردوم:تکشاح',
    interval: '1D',
    fullscreen: true,
    container_id: 'tv_chart_container',
    library_path: '../charting_library/',
    timezone: 'Asia/Tehran',
    datafeed: Datafeed,
    disabled_features: [],
    locale: 'fa',
    // https://github.com/mmmy/css3demos/wiki/Overrides
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
                const {jy, jm, jd} = decript_jalali(e);
                return `${jy}/${jm}/${jd}`;
            }
        }
    },
});
