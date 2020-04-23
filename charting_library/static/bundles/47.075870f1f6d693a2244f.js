(window.webpackJsonp = window.webpackJsonp || []).push([
    [47], {
        "1yQO": function(e, i, t) {
            "use strict";

            function o(e, i, t, o) {
                void 0 === o && (o = null);
                var n = {
                    id: i,
                    title: t,
                    definitions: new r.a(e)
                };
                return null !== o && (n.icon = o), n
            }
            var n, r;
            t.d(i, "a", function() {
                return o
            }), n = t("hY0g"), r = t.n(n)
        },
        Equz: function(e, i, t) {
            "use strict";

            function o(e, i, t, o) {
                var n = Object(h.c)(t),
                    r = Object(s.r)({
                        color1: Object(s.u)(e, i.upColor, null, "Change " + t + " Up Color"),
                        color2: Object(s.u)(e, i.downColor, null, "Change " + t + " Down Color")
                    }, {
                        id: o + "Symbol" + n + "CandlesColor",
                        title: C
                    }),
                    l = Object(s.r)({
                        checked: Object(s.b)(e, i.drawBorder, "Change " + t + " Border Visibility"),
                        color1: Object(s.u)(e, i.borderUpColor, null, "Change " + t + " Up Border Color"),
                        color2: Object(s.u)(e, i.borderDownColor, null, "Change " + t + " Down Border Color")
                    }, {
                        id: o + "Symbol" + n + "BordersColor",
                        title: v
                    }),
                    c = Object(s.r)({
                        checked: Object(s.b)(e, i.drawWick, "Change " + t + " Wick Visibility"),
                        color1: Object(s.u)(e, i.wickUpColor, null, "Change " + t + " Wick Up Color"),
                        color2: Object(s.u)(e, i.wickDownColor, null, "Change " + t + " Wick Down Color")
                    }, {
                        id: o + "Symbol" + n + "WickColors",
                        title: j
                    });
                return [r, l, c]
            }

            function n(e, i, t, n, a) {
                var h, C, v;
                switch (t) {
                    case 0:
                        return function(e, i, t) {
                            var o = Object(s.c)({
                                    checked: Object(s.b)(e, i.barColorsOnPrevClose, "Change Color Bars Based on Previous Close")
                                }, {
                                    id: t + "SymbolBarStyleBarColorsOnPrevClose",
                                    title: p
                                }),
                                n = Object(s.c)({
                                    checked: Object(s.b)(e, i.dontDrawOpen, "Change HLC Bars")
                                }, {
                                    id: t + "SymbolDontDrawOpen",
                                    title: w
                                }),
                                r = Object(s.e)({
                                    color: Object(s.u)(e, i.upColor, null, "Change Bar Up Color")
                                }, {
                                    id: t + "SymbolUpColor",
                                    title: y
                                }),
                                l = Object(s.e)({
                                    color: Object(s.u)(e, i.downColor, null, "Change Bar Down Color")
                                }, {
                                    id: t + "SymbolDownColor",
                                    title: f
                                }),
                                c = Object(s.c)({
                                    checked: Object(s.b)(e, i.thinBars, "Change Thin Bars")
                                }, {
                                    id: t + "SymbolBarThinBars",
                                    title: S
                                });
                            return [o, n, r, l, c]
                        }(e, i.barStyle.childs(), a);
                    case 1:
                        return function(e, i, t) {
                            var n = Object(s.c)({
                                checked: Object(s.b)(e, i.barColorsOnPrevClose, "Change Color Bars Based on Previous Close")
                            }, {
                                id: t + "SymbolCandleStyleBarColorsOnPrevClose",
                                title: p
                            });
                            return Object(r.__spreadArrays)([n], o(e, i, "Candle", t))
                        }(e, i.candleStyle.childs(), a);
                    case 2:
                        return function(e, i, t, o, n) {
                            var r = Object(s.j)({
                                    option: Object(s.b)(e, i.priceSource, "Change Price Source")
                                }, {
                                    id: n + "SymbolLinePriceSource",
                                    title: O,
                                    options: new u.a(t)
                                }),
                                l = Object(s.j)({
                                    option: Object(s.b)(e, i.styleType, "Change Line Type")
                                }, {
                                    id: n + "SymbolStyleType",
                                    title: m,
                                    options: new u.a(o)
                                }),
                                c = Object(s.h)({
                                    color: Object(s.u)(e, i.color, null, "Change Line Color"),
                                    width: Object(s.b)(e, i.linewidth, "Change Line Width")
                                }, {
                                    id: n + "SymbolLineStyle",
                                    title: _
                                });
                            return [r, l, c]
                        }(e, i.lineStyle.childs(), n.seriesPriceSources, n.lineStyleTypes, a);
                    case 3:
                        return function(e, i, t, o) {
                            var n = Object(s.j)({
                                    option: Object(s.b)(e, i.priceSource, "Change Area Price Source")
                                }, {
                                    id: o + "SymbolAreaPriceSource",
                                    title: O,
                                    options: new u.a(t)
                                }),
                                r = Object(s.h)({
                                    color: Object(s.u)(e, i.linecolor, null, "Change Area Line Color"),
                                    width: Object(s.b)(e, i.linewidth, "Change Area Line Width")
                                }, {
                                    id: o + "SymbolAreaLineStyle",
                                    title: _
                                }),
                                l = Object(s.r)({
                                    color1: Object(s.u)(e, i.color1, i.transparency, "Change Area Fill Color"),
                                    color2: Object(s.u)(e, i.color2, i.transparency, "Change Area Fill Color")
                                }, {
                                    id: o + "SymbolAreaFills",
                                    title: L
                                });
                            return [n, r, l]
                        }(e, i.areaStyle.childs(), n.seriesPriceSources, a);
                    case 9:
                        return o(e, i.hollowCandleStyle.childs(), "Hollow Candles", a);
                    case 10:
                        return function(e, i, t, o) {
                            var n = Object(s.j)({
                                    option: Object(s.b)(e, i.priceSource, "Change Baseline Price Source")
                                }, {
                                    id: o + "SymbolBaseLinePriceSource",
                                    title: O,
                                    options: new u.a(t)
                                }),
                                r = Object(s.h)({
                                    color: Object(s.u)(e, i.topLineColor, null, "Change Baseline Top Line Color"),
                                    width: Object(s.b)(e, i.topLineWidth, "Change Baseline Top Line Width")
                                }, {
                                    id: o + "SymbolBaseLineTopLine",
                                    title: g
                                }),
                                l = Object(s.h)({
                                    color: Object(s.u)(e, i.bottomLineColor, null, "Change Baseline Bottom Line Color"),
                                    width: Object(s.b)(e, i.bottomLineWidth, "Change Baseline Bottom Line Width")
                                }, {
                                    id: o + "SymbolBaseLineBottomLine",
                                    title: P
                                }),
                                c = Object(s.r)({
                                    color1: Object(s.u)(e, i.topFillColor1, null, "Change Baseline Fill Top Area Color"),
                                    color2: Object(s.u)(e, i.topFillColor2, null, "Change Baseline Fill Top Area Color")
                                }, {
                                    id: o + "SymbolBaseLineTopFills",
                                    title: B
                                }),
                                a = Object(s.r)({
                                    color1: Object(s.u)(e, i.bottomFillColor1, null, "Change Baseline Fill Bottom Area Color"),
                                    color2: Object(s.u)(e, i.bottomFillColor2, null, "Change Baseline Fill Bottom Area Color")
                                }, {
                                    id: o + "SymbolBaseLineBottomFills",
                                    title: M
                                }),
                                d = Object(s.i)({
                                    value: Object(s.b)(e, i.baseLevelPercentage, "Change Base Level", [b.b])
                                }, {
                                    id: o + "SymbolBaseLevelPercentage",
                                    title: D,
                                    type: 0,
                                    min: new u.a(0),
                                    max: new u.a(100),
                                    step: new u.a(1),
                                    unit: new u.a("%")
                                });
                            return [n, r, l, c, a, d]
                        }(e, i.baselineStyle.childs(), n.seriesPriceSources, a)
                }
                return h = i, n.isJapaneseChartsAvailable && 8 === t ? function(e, i, t) {
                    var n = Object(s.c)({
                            checked: Object(s.b)(e, i.showRealLastPrice, "Change Show real prices on price scale (instead of Heiken-Ashi price)")
                        }, {
                            id: t + "SymbolRealLastPrice",
                            title: T
                        }),
                        l = Object(s.c)({
                            checked: Object(s.b)(e, i.barColorsOnPrevClose, "Change Color Bars Based on Previous Close")
                        }, {
                            id: t + "SymbolHAStyleBarColorsOnPrevClose",
                            title: p
                        });
                    return Object(r.__spreadArrays)([n, l], o(e, i, "Heikin Ashi", t))
                }(e, h.haStyle.childs(), a) : (n.isJapaneseChartsAvailable && d.enabled("japanese_chart_styles"), d.enabled("chart_style_hilo") && 12 === t ? (C = h.hiloStyle.childs(), v = Object(c.chartStyleStudyId)(12), function(e, i, t, o) {
                    var n = Object(s.e)({
                            color: Object(s.u)(e, i.color, null, "Change High-Low Bodies Color")
                        }, {
                            id: o + "SymbolBodiesColor",
                            title: k
                        }),
                        r = Object(s.e)({
                            checked: Object(s.b)(e, i.showBorders, "Change Show High-Low Borders"),
                            color: Object(s.u)(e, i.borderColor, null, "Change High-Low Border Color")
                        }, {
                            id: o + "SymbolBorderColor",
                            title: A
                        }),
                        l = t.map(function(e) {
                            return {
                                title: String(e),
                                value: e
                            }
                        }),
                        c = Object(s.p)({
                            checked: Object(s.b)(e, i.showLabels, "Change Show High-Low Labels"),
                            color: Object(s.u)(e, i.labelColor, null, "Change High-Low Labels Color"),
                            size: Object(s.b)(e, i.fontSize, "Change High-Low Labels Font Size")
                        }, {
                            id: o + "SymbolLabels",
                            title: I,
                            isEditable: !1,
                            isMultiLine: !1,
                            sizeItems: l
                        });
                    return [n, r, c]
                }(e, C, Object(l.ensure)(n.defaultSeriesFontSizes)[v], a)) : [])
            }
            var r, l, s, c, a, u, d, b, h, p, w, y, f, S, C, v, j, O, m, _, g, P, L, B, M, T, D, k, A, I;
            t.d(i, "a", function() {
                    return n
                }), r = t("mrSG"), l = t("Eyy1"),
                s = t("HSjo"), c = t("n5al"), a = t("hY0g"), u = t.n(a), d = t("Kxc7"), b = t("Z5lT"), h = t("LIFs"), p = window.t("Color Bars Based on Previous Close"), w = window.t("HLC Bars"), y = window.t("Up Color"), f = window.t("Down Color"), S = window.t("Thin Bars"), C = window.t("Candles"), v = window.t("Borders"), j = window.t("Wick"), O = window.t("Price Source"), m = window.t("Type"), _ = window.t("Line"), g = window.t("Top Line"), P = window.t("Bottom Line"), L = window.t("Fill"), B = window.t("Fill Top Area"), M = window.t("Fill Bottom Area"), window.t("Up bars"), window.t("Down bars"), window.t("Projection up bars"), window.t("Projection down bars"), T = window.t("Show real prices on price scale (instead of Heikin-Ashi price)"), D = window.t("Base Level"), k = window.t("Bodies"), A = window.t("Borders"), I = window.t("Labels")
        },
        LIFs: function(e, i, t) {
            "use strict";

            function o(e) {
                return e.replace(l, s)
            }

            function n(e) {
                return void 0 === e && (e = ""), e.replace(/\s+/g, "")
            }

            function r(e) {
                return void 0 === e && (e = ""), e.replace(/\b\w/g, function(e) {
                    return e.toUpperCase()
                })
            }
            var l, s;
            t.d(i, "b", function() {
                return o
            }), t.d(i, "c", function() {
                return n
            }), t.d(i, "a", function() {
                return r
            }), l = /[<"'&>]/g, s = function(e) {
                return "&#" + e.charCodeAt(0) + ";"
            }
        },
        Z5lT: function(e, i, t) {
            "use strict";

            function o(e) {
                return Math.floor(e)
            }

            function n(e) {
                return parseInt(String(e))
            }

            function r(e) {
                var i = new l.LimitedPrecisionNumericFormatter(e);
                return function(e) {
                    if (null === e) return e;
                    var t = i.parse(i.format(e));
                    return t.res ? t.price : null
                }
            }
            t.d(i, "b", function() {
                return o
            }), t.d(i, "a", function() {
                return n
            }), t.d(i, "c", function() {
                return r
            });
            var l = t("T6Of")
        },
        zqjM: function(e, i, t) {
            "use strict";

            function o(e, i, t, o, n, r, l) {
                var s = [];
                return t.forEach(function(t) {
                    var c, a, u, d, b;
                    if (function(e, i) {
                            return !e.isHidden && (void 0 === e.visible || function(e, i) {
                                var t;
                                return !e || !((t = e.split("==")).length < 2) && i[t[0]].value() === t[1]
                            }(e.visible, i))
                        }(t, o) && (c = t.id, o.hasOwnProperty(c))) {
                        if (a = o[c], u = function(e, i) {
                                return "style" === e.id ? window.t("Box size assignment method") : "boxSize" === e.id ? window.t("Box Size") : window.t(i.childs().name.value())
                            }(t, n[c]), "options" in t) return d = Object(L.ensure)(t.options), void s.push(Object(B.j)({
                            option: Object(B.b)(e, a, "Change " + u)
                        }, {
                            id: "" + l + t.name,
                            title: u,
                            options: new T.a(function(e) {
                                return e.map(function(e) {
                                    return {
                                        value: e,
                                        title: window.t(e)
                                    }
                                })
                            }(d))
                        }));
                        if ("integer" !== t.type) return "float" === t.type ? (b = void 0, b = function(e, i) {
                            return !((i === Object(D.chartStyleStudyId)(4) || i === Object(D.chartStyleStudyId)(6)) && "boxSize" === e || i === Object(D.chartStyleStudyId)(5) && "reversalAmount" === e)
                        }(c, i) || null === r.value() ? new T.a(t.min) : r, void s.push(Object(B.i)({
                            value: Object(B.b)(e, a, "Change " + u)
                        }, {
                            id: "" + l + t.name,
                            title: u,
                            type: 1,
                            min: b,
                            max: new T.a(t.max),
                            defval: t.defval
                        }))) : void("text" !== t.type ? "bool" !== t.type || s.push(Object(B.c)({
                            checked: Object(B.b)(e, a, "Change " + u)
                        }, {
                            id: "" + l + t.name,
                            title: u
                        })) : s.push(Object(B.p)({
                            text: Object(B.b)(e, a, "Change " + u)
                        }, {
                            id: "" + l + t.name,
                            title: u,
                            isEditable: !0,
                            isMultiLine: !1
                        })));
                        s.push(Object(B.i)({
                            value: Object(B.b)(e, a, "Change " + u, [I.b])
                        }, {
                            id: "" + l + t.name,
                            title: u,
                            type: 0,
                            min: new T.a(t.min),
                            max: new T.a(t.max),
                            defval: t.defval
                        }))
                    }
                }), s
            }

            function n() {
                var e, i = [{
                    title: C,
                    value: "default"
                }];
                for (e = 0; e < j.length; e++) i.push({
                    title: j[e].minMove + "/" + j[e].priceScale,
                    value: j[e].priceScale + "," + j[e].minMove + "," + j[e].frac
                });
                return i
            }
            var r, l, s, c, a, u, d, b, h, p, w, y, f, S, C, v, j, O, m, _, g, P = t("mrSG"),
                L = t("Eyy1"),
                B = t("HSjo"),
                M = t("hY0g"),
                T = t.n(M),
                D = t("n5al"),
                k = t("dfhE"),
                A = t("Equz"),
                I = t("Z5lT");
            t.d(i, "d", function() {
                return O
            }), t.d(i, "b", function() {
                return m
            }), t.d(i, "c", function() {
                return n
            }), t.d(i, "a", function() {
                return g
            }), window.t("Adjust Data for Dividends"), window.t("Extended Hours (Intraday Only)"), l = window.t("Last value line"), window.t("Previous close value line"), s = window.t("Precision"), c = window.t("Time Zone"), a = window.t("Open"), u = window.t("High"), d = window.t("Low"), b = window.t("Close"), h = window.t("(H + L)/2"), p = window.t("(H + L + C)/3"), w = window.t("(O + H + L + C)/4"), y = window.t("Simple"), f = window.t("With Markers"), S = window.t("Step"), C = window.t("Default"), (r = {})[Object(D.chartStyleStudyId)(12)] = [7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 40], v = r, j = [{
                priceScale: 1,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 10,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 100,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 1e3,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 1e4,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 1e5,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 1e6,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 1e7,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 1e8,
                minMove: 1,
                frac: !1
            }, {
                priceScale: 2,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 4,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 8,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 16,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 32,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 64,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 128,
                minMove: 1,
                frac: !0
            }, {
                priceScale: 320,
                minMove: 1,
                frac: !0
            }], O = [{
                title: a,
                value: "open"
            }, {
                title: u,
                value: "high"
            }, {
                title: d,
                value: "low"
            }, {
                title: b,
                value: "close"
            }, {
                title: h,
                value: "hl2"
            }, {
                title: p,
                value: "hlc3"
            }, {
                title: w,
                value: "ohlc4"
            }], m = [{
                title: y,
                value: k.STYLE_LINE_TYPE_SIMPLE
            }, {
                title: f,
                value: k.STYLE_LINE_TYPE_MARKERS
            }, {
                title: S,
                value: k.STYLE_LINE_TYPE_STEP
            }], _ = !0, g = function() {
                function e(e, i, t, o, n, r) {
                    this._definitions = null, this._inputsSubscriptions = null, this._isDestroyed = !1, this._propertyPages = null, this._seriesMinTickWV = null, this._series = e, this._undoModel = i, this._model = this._undoModel.model(), this._propertyPageId = t, this._propertyPageName = o, this._propertyPageIcon = n, this._timezonePropertyObj = r, this._series.onStyleChanged().subscribe(this, this._updateDefinitions), this._series.dataEvents().symbolResolved().subscribe(this, this._updateSeriesMinTickWV), this._updateSeriesMinTickWV()
                }
                return e.prototype.destroy = function() {
                    null !== this._propertyPages && this._propertyPages.forEach(function(e) {
                        Object(B.t)(e.definitions.value())
                    }), this._series.onStyleChanged().unsubscribe(this, this._updateDefinitions), this._series.dataEvents().symbolResolved().unsubscribeAll(this), this._unsubscribeInputsUpdate(), this._isDestroyed = !0
                }, e.prototype.propertyPages = function() {
                    var e = this;
                    return null === this._propertyPages ? this._getDefinitions().then(function(i) {
                        if (e._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
                        return null === e._propertyPages && (e._propertyPages = [{
                            id: e._propertyPageId,
                            title: e._propertyPageName,
                            icon: e._propertyPageIcon,
                            definitions: new T.a(i)
                        }]), e._propertyPages
                    }) : Promise.resolve(this._propertyPages)
                }, e.prototype._seriesMinTick = function() {
                    var e = this._series.symbolInfo();
                    return null !== e ? e.minmov / e.pricescale : null
                }, e.prototype._updateSeriesMinTickWV = function() {
                    null === this._seriesMinTickWV ? this._seriesMinTickWV = new T.a(this._seriesMinTick()) : this._seriesMinTickWV.setValue(this._seriesMinTick())
                }, e.prototype._updateDefinitions = function() {
                    var e = this;
                    null !== this._definitions && Object(B.t)(this._definitions), this._definitions = null, this._unsubscribeInputsUpdate(), this._createSeriesDefinitions().then(function(i) {
                        if (e._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
                        Object(L.ensureNotNull)(e._propertyPages)[0].definitions.setValue(i)
                    })
                }, e.prototype._getDefinitions = function() {
                    return null === this._definitions ? this._createSeriesDefinitions() : Promise.resolve(this._definitions)
                }, e.prototype._unsubscribeInputsUpdate = function() {
                    var e = this;
                    null !== this._inputsSubscriptions && (this._inputsSubscriptions.forEach(function(i) {
                        i.unsubscribeAll(e)
                    }), this._inputsSubscriptions = null)
                }, e.prototype._subscribeInputsUpdate = function(e, i) {
                    var t = this,
                        o = [];
                    e.forEach(function(e) {
                        var n, r;
                        void 0 !== e.visible && 2 === (n = e.visible.split("==")).length && (r = i[n[0]], -1 === o.indexOf(r) && (r.subscribe(t, t._updateDefinitions), o.push(r)))
                    }), o.length > 0 ? this._inputsSubscriptions = o : this._inputsSubscriptions = null
                }, e.prototype._createSeriesDefinitions = function() {
                    var e = this,
                        i = this._series.properties().childs(),
                        t = this._series.getInputsProperties(),
                        r = this._series.getInputsInfoProperties(),
                        l = i.style.value(),
                        a = this._series.getStyleShortName();
                    return new Promise(function(i) {
                        var n = Object(D.chartStyleStudyId)(l);
                        null !== n ? e._model.studyMetaInfoRepository().findById({
                            type: "java",
                            studyId: n
                        }).then(function(n) {
                            var l, s;
                            if (e._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
                            null === e._definitions ? (l = Object(L.ensureNotNull)(e._seriesMinTickWV), s = o(e._undoModel, n.id, n.inputs, t, r, l, a), e._subscribeInputsUpdate(n.inputs, t), i(s)) : i(null)
                        }) : i(null)
                    }).then(function(t) {
                        var o, r, u;
                        if (e._isDestroyed) throw new Error("SeriesPropertyDefinitionsViewModel already destroyed");
                        return null !== e._definitions ? e._definitions : (o = Object(A.a)(e._undoModel, i, l, {
                            seriesPriceSources: O,
                            lineStyleTypes: m,
                            isJapaneseChartsAvailable: _,
                            defaultSeriesFontSizes: v
                        }, "mainSeries"), null !== t && o.push.apply(o, t), r = Object(B.j)({
                            option: Object(B.b)(e._undoModel, i.minTick, "Change Decimal Places")
                        }, {
                            id: a + "SymbolMinTick",
                            title: s,
                            options: new T.a(n())
                        }), u = Object(B.j)({
                            option: Object(B.b)(e._undoModel, e._timezonePropertyObj.property, "Change Timezone")
                        }, {
                            id: a + "SymbolTimezone",
                            title: c,
                            options: new T.a(e._timezonePropertyObj.values)
                        }), e._definitions = Object(P.__spreadArrays)([Object(B.k)(o, "generalSymbolStylesGroup")], e._seriesPriceLinesDefinitions(a), e._seriesDataDefinitions(a), [r, u]), e._definitions)
                    })
                }, e.prototype._seriesDataDefinitions = function(e) {
                    var i = [];
                    this._series.dividendsAdjustmentProperty();
                    return i
                }, e.prototype._seriesPriceLinesDefinitions = function(e) {
                    var i, t = [],
                        o = this._series.properties().childs();
                    return this._series.hasClosePrice() && (i = Object(B.h)({
                        checked: Object(B.b)(this._undoModel, o.showPriceLine, "Change Price Price Line"),
                        color: Object(B.u)(this._undoModel, o.priceLineColor, null, "Change Price Line Color"),
                        width: Object(B.b)(this._undoModel, o.priceLineWidth, "Change Price Line Width")
                    }, {
                        id: e + "SymbolLastValuePriceLine",
                        title: l
                    }), t.push(i)), this._series.hasClosePrice(), t
                }, e
            }()
        }
    }
]);