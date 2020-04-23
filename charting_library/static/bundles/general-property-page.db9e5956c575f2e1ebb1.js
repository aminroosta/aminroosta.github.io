(window.webpackJsonp = window.webpackJsonp || []).push([
    ["general-property-page"], {
        "1ANp": function(e, t, i) {
            "use strict";

            function r(e) {
                return e === h.AlwaysOn || e === h.AlwaysOff ? e : h.VisibleOnMouseOver
            }

            function a() {
                if (!d) {
                    (d = Object(l.a)()).setValue(r(c.getValue("NavigationButtons.visibility"))), d.subscribe(d, function(e) {
                        c.setValue("NavigationButtons.visibility", r(e.value()))
                    })
                }
                return d
            }

            function s() {
                return [{
                    value: h.VisibleOnMouseOver,
                    title: window.t("Visible on Mouse Over")
                }, {
                    value: h.AlwaysOn,
                    title: window.t("Always Visible")
                }, {
                    value: h.AlwaysOff,
                    title: window.t("Always Invisible")
                }]
            }

            function o() {
                var e, t;
                return p || (p = Object(l.a)(), t = function() {
                    var t = e.value();
                    t !== h.AlwaysOn && t !== h.AlwaysOff && (t = Modernizr.mobiletouch ? h.AlwaysOn : h.VisibleOnMouseOver), p && p.setValue(t)
                }, (e = a()).subscribe(p, t), t()), p
            }
            var n, l, c, h, d, p;
            i.r(t), i.d(t, "VisibilityType", function() {
                    return h
                }), i.d(t, "property", function() {
                    return a
                }), i.d(t, "availableValues", function() {
                    return s
                }), i.d(t, "actualBehavior", function() {
                    return o
                }), i("YFKU"), n = i("bf9a"), l = i("m/cY"), c = i("Vdly"),
                function(e) {
                    e.AlwaysOn = "alwaysOn", e.VisibleOnMouseOver = "visibleOnMouseOver", e.AlwaysOff = "alwaysOff"
                }(h || (h = {}))
        },
        "34BO": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 7H7v14h2v3h1v-3h2V7h-2V4H9v3zM8 8v12h3V8H8zm9 1h-2v10h2v3h1v-3h2V9h-2V6h-1v3zm-1 1v8h3v-8h-3z"/></svg>'
        },
        "5lPo": function(e, t, i) {
            "use strict";
            var r, a, s, o, n, l, c, h, d, p, u, b, g, w, y, O, v, m, P, f, j, _, C, S, V, L, M, k, x, A, B, z, T, D, H, N, R, F, G, I, W, E, q, K, U, Z, Q, Y, J, X, $, ee, te, ie, re, ae, se, oe, ne, le, ce, he, de, pe, ue, be, ge, we;
            i.r(t), r = i("mrSG"), a = i("Eyy1"), s = i("Kxc7"), o = i("N22A"), n = i("hY0g"), l = i.n(n), c = i("HSjo"), h = i("1yQO"), d = i("1ANp"), p = i("MWAT"), u = i("zqjM"), b = i("qFKp"), g = window.t("Symbol"), w = window.t("OHLC Values"), y = window.t("Bar Change Values"), O = window.t("Indicator Titles"), v = window.t("Indicator Arguments"), m = window.t("Indicator Values"), P = window.t("Background"), f = window.t("Wrap text"), j = b.CheckMobile.any(), _ = i("oXaB"), C = i("Z5lT"), S = window.t("Symbol Name Label"), V = window.t("Symbol Last Value Label"), window.t("Symbol Previous Close Value Label (Intraday Only)"), L = window.t("Indicator Name Label"), M = window.t("Indicator Last Value Label"), window.t("Financials Name Label"), window.t("Financials Last Value Label"), k = window.t("Countdown To Bar Close"), x = window.t("Currency"), A = window.t("Scales Placement"), B = window.t("Date Format"), z = window.t("Lock Price to Bar Ratio"), T = window.t("No Overlapping Labels"), D = [{
                    value: _.PriceAxisLastValueMode.LastPriceAndPercentageValue,
                    title: window.t("Price and Percentage Value")
                }, {
                    value: _.PriceAxisLastValueMode.LastValueAccordingToScale,
                    title: window.t("Value according to Scale")
                }], H = window.t("Background"), N = window.t("Vert Grid Lines"), R = window.t("Horz Grid Lines"), F = window.t("Session Breaks"), G = window.t("Scales text"), I = window.t("Scales lines"), W = window.t("Crosshair"), E = window.t("Watermark"), q = window.t("Top Margin"), K = window.t("Navigation Buttons"), U = window.t("Bottom Margin"), Z = window.t("Right Margin"),
                Q = window.t("bars", {
                    context: "unit"
                }), Y = i("e1ZQ"), J = i("ZZnO"), X = i("gQ5K"), $ = i("+6ja"), ee = i("34BO"), te = i("ggCF"), ie = i("Iilx"), re = i("DyO1"), ae = i("iUxq"), se = i("WS5G"), (oe = {}).symbol = ee, oe.legend = te, oe.scales = ie, oe.appearance = re, oe.events = ae, oe.trading = se, ne = oe, i.d(t, "ChartPropertyDefinitionsViewModel", function() {
                    return we
                }), le = window.t("Symbol"), ce = window.t("Status line"), he = window.t("Scales"), de = window.t("Appearance"), window.t("Events"), pe = window.t("Trading"), be = null, (ue = !1) && (be = Object(o.a)()), ge = [{
                    value: "description",
                    title: window.t("Description")
                }, {
                    value: "ticker",
                    title: window.t("Ticker")
                }], we = function() {
                    function e(e, t, i) {
                        this._propertyPages = null, this._maxRightOffsetPropertyObject = null, this._isDestroyed = !1, this._undoModel = e, this._model = this._undoModel.model(), this._series = this._model.mainSeries(), this._chartWidgetProperties = t, this._options = i, this._seriesPropertyDefinitionViewModel = this._createSeriesViewModel(), this._legendPropertyPage = this._createLegendPropertyPage(), this._scalesPropertyPage = this._createScalesPropertyPage(), this._appearancePropertyPage = this._createAppearancePropertyPage(), this._tradingPropertyPage = this._createTradingPropertyPage(), this._eventsPropertyPage = this._createEventsPropertyPage(), this._series.onStyleChanged().subscribe(this, this._updateDefinitions), this._series.priceScaleChanged().subscribe(this, this._updateDefinitions)
                    }
                    return e.prototype.destroy = function() {
                        null !== this._propertyPages && this._propertyPages.filter(function(e, t) {
                            return 0 !== t
                        }).forEach(function(e) {
                            Object(c.t)(e.definitions.value())
                        }), this._seriesPropertyDefinitionViewModel.destroy(), this._series.onStyleChanged().unsubscribe(this, this._updateDefinitions), this._series.priceScaleChanged().unsubscribe(this, this._updateDefinitions), Object(a.ensureNotNull)(this._model.timeScale()).maxRightOffsetChanged().unsubscribeAll(this), this._isDestroyed = !0
                    }, e.prototype.propertyPages = function() {
                        var e = this;
                        return null === this._propertyPages ? this._seriesPropertyDefinitionViewModel.propertyPages().then(function(t) {
                            if (e._isDestroyed) throw new Error("ChartPropertyDefinitionsViewModel already destroyed");
                            return null === e._propertyPages && (e._propertyPages = Object(r.__spreadArrays)(t), e._propertyPages.push(e._legendPropertyPage, e._scalesPropertyPage, e._appearancePropertyPage), null !== e._tradingPropertyPage && e._propertyPages.push(e._tradingPropertyPage), null !== e._eventsPropertyPage && e._propertyPages.push(e._eventsPropertyPage)), e._propertyPages
                        }) : Promise.resolve(this._propertyPages)
                    }, e.prototype._updateDefinitions = function() {
                        Object(c.t)(this._scalesPropertyPage.definitions.value());
                        var e = this._createScalesDefinitions();
                        this._scalesPropertyPage.definitions.setValue(e)
                    }, e.prototype._createSeriesViewModel = function() {
                        var e = {
                            property: this._model.properties().timezone,
                            values: $.availableTimezones.map(function(e) {
                                return {
                                    value: e.id,
                                    title: e.title
                                }
                            })
                        };
                        return new u.a(this._series, this._undoModel, "symbol", le, ne.symbol, e)
                    }, e.prototype._createLegendPropertyPage = function() {
                        var e = this._chartWidgetProperties.childs().paneProperties.childs().legendProperties.childs(),
                            t = {
                                property: this._series.properties().childs().statusViewStyle.childs().symbolTextSource,
                                values: ge
                            },
                            i = function(e, t, i) {
                                var a, s, o, n, h, d, p, u, b = [],
                                    _ = Object(c.j)({
                                        checked: Object(c.b)(e, t.showSeriesTitle, "Change Symbol Description Visibility"),
                                        option: Object(c.b)(e, i.property, "Change Symbol Legend Format")
                                    }, {
                                        id: "symbolTextSource",
                                        title: g,
                                        options: new l.a(i.values)
                                    });
                                return b.push(_), a = Object(c.c)({
                                    checked: Object(c.b)(e, t.showSeriesOHLC, "Change OHLC Values Visibility")
                                }, {
                                    id: "ohlcTitle",
                                    title: w
                                }), b.push(a), s = Object(c.c)({
                                    checked: Object(c.b)(e, t.showBarChange, "Change Bar Change Visibility")
                                }, {
                                    id: "barChange",
                                    title: y
                                }), b.push(s), o = Object(c.c)({
                                    checked: Object(c.b)(e, t.showStudyArguments, "Change Indicator Arguments Visibility")
                                }, {
                                    id: "studyArguments",
                                    title: v
                                }), n = Object(c.d)({
                                    checked: Object(c.b)(e, t.showStudyTitles, "Change Indicator Titles Visibility")
                                }, {
                                    id: "studyTitles",
                                    title: O
                                }, [o]), b.push(n), h = Object(c.c)({
                                    checked: Object(c.b)(e, t.showStudyValues, "Change Indicator Values Visibility")
                                }, {
                                    id: "studyValues",
                                    title: m
                                }), b.push(h), d = [], p = Object(c.q)({
                                    checked: Object(c.b)(e, t.showBackground, "Change Legend Background Visibility"),
                                    transparency: Object(c.b)(e, t.backgroundTransparency, "Change Legend Background Transparency")
                                }, {
                                    id: "legendBgTransparency",
                                    title: P
                                }), d.push(p), j || (u = Object(c.c)({
                                    checked: Object(c.b)(e, t.wrapText, "Change wrap text")
                                }, {
                                    id: "wrapText",
                                    title: f
                                }), d.push(u)), Object(r.__spreadArrays)([Object(c.k)(b, "generalLegendVisibilityGroup")], d)
                            }(this._undoModel, e, t);
                        return Object(h.a)(i, "legend", ce, ne.legend)
                    }, e.prototype._createScalesPropertyPage = function() {
                        var e = this._createScalesDefinitions();
                        return Object(h.a)(e, "scales", he, ne.scales)
                    }, e.prototype._createScalesDefinitions = function() {
                        var e, t, i, r, a, o, n, h, d, u, b, g, w, y, O, v, m, P, f = this._chartWidgetProperties.childs(),
                            j = f.scalesProperties.childs(),
                            _ = {
                                property: this._model.properties().priceScaleSelectionStrategyName,
                                values: Object(p.allPriceScaleSelectionStrategyInfo)().map(function(e) {
                                    return {
                                        value: e.name,
                                        title: e.title
                                    }
                                })
                            },
                            H = {
                                property: J.dateFormatProperty,
                                values: (e = new Date(Date.UTC(1997, 8, 29)), Y.availableDateFormats.map(function(t) {
                                    return {
                                        value: t,
                                        title: new X.DateFormatter(t).format(e)
                                    }
                                }))
                            },
                            N = this._model.mainSeriesScaleRatioProperty();
                        return t = this._undoModel, i = this._series.properties().childs(), r = j, a = {
                            disableSeriesPrevCloseValueProperty: this._series.isDWMProperty(),
                            seriesHasClosePrice: this._series.hasClosePrice(),
                            seriesPriceScale: this._series.priceScale(),
                            mainSeriesScaleRatioProperty: N,
                            scalesPlacementPropertyObj: _,
                            dateFormatPropertyObj: H,
                            currencyLabelEnabled: this._options.currencyLabelEnabled
                        }, v = a.seriesPriceScale.properties().childs(), m = [], P = [], a.seriesHasClosePrice && (o = Object(c.c)({
                            checked: Object(c.b)(t, r.showSymbolLabels, "Show Symbol Labels")
                        }, {
                            id: "symbolNameLabel",
                            title: S
                        }), n = Object(c.j)({
                            checked: Object(c.b)(t, r.showSeriesLastValue, "Change Symbol Last Value Visibility"),
                            option: Object(c.b)(t, r.seriesLastValueMode, "Change Symbol Last Value Mode")
                        }, {
                            id: "symbolLastValueLabel",
                            title: V,
                            options: new l.a(D)
                        }), P.push(o, n)), h = Object(c.c)({
                            checked: Object(c.b)(t, r.showStudyPlotLabels, "Show Study Plots Labels")
                        }, {
                            id: "studyNameLabel",
                            title: L
                        }), d = Object(c.c)({
                            checked: Object(c.b)(t, r.showStudyLastValue, "Change Indicator Last Value Visibility")
                        }, {
                            id: "studyLastValueLabel",
                            title: M
                        }), P.push(h, d), u = Object(c.c)({
                            checked: Object(c.b)(t, v.alignLabels, "Change No Overlapping Labels")
                        }, {
                            id: "noOverlappingLabels",
                            title: T
                        }), P.push(u), s.enabled("countdown") && (b = Object(c.c)({
                            checked: Object(c.b)(t, i.showCountdown, "Change Show Countdown")
                        }, {
                            id: "countdown",
                            title: k
                        }), P.push(b)), a.currencyLabelEnabled && (g = Object(c.c)({
                            checked: Object(c.b)(t, r.showCurrency, "Change Currency Label Visibility")
                        }, {
                            id: "scalesCurrency",
                            title: x
                        }), P.push(g)), m.push(Object(c.k)(P, "generalScalesLabelsGroup")), w = Object(c.i)({
                            checked: Object(c.v)(t, v.lockScale, a.seriesPriceScale, "Change lock scale"),
                            value: Object(c.x)(t, a.mainSeriesScaleRatioProperty, "Change Price to Bar Ratio", [Object(C.c)(7), function(e) {
                                return e
                            }])
                        }, {
                            id: "lockScale",
                            title: z,
                            min: new l.a(a.mainSeriesScaleRatioProperty.getMinValue()),
                            max: new l.a(a.mainSeriesScaleRatioProperty.getMaxValue()),
                            step: new l.a(a.mainSeriesScaleRatioProperty.getStepChangeValue())
                        }), y = Object(c.j)({
                            option: Object(c.w)(t, a.scalesPlacementPropertyObj.property)
                        }, {
                            id: "scalesPlacement",
                            title: A,
                            options: new l.a(a.scalesPlacementPropertyObj.values)
                        }), O = Object(c.j)({
                            option: Object(c.b)(t, a.dateFormatPropertyObj.property, "Change Date Format")
                        }, {
                            id: "dateFormat",
                            title: B,
                            options: new l.a(a.dateFormatPropertyObj.values)
                        }), m.push(w, y, O), m
                    }, e.prototype._createMaxOffsetPropertyObject = function() {
                        var e = Object(a.ensureNotNull)(this._model.timeScale()),
                            t = new l.a(Math.floor(e.maxRightOffset()));
                        e.maxRightOffsetChanged().subscribe(this, function(e) {
                            t.setValue(Math.floor(e))
                        }), this._maxRightOffsetPropertyObject = {
                            property: e.defaultRightOffsetProperty(),
                            min: new l.a(0),
                            max: t
                        }
                    }, e.prototype._createAppearancePropertyPage = function() {
                        var e, t, i, r, o = this._chartWidgetProperties.childs(),
                            n = o.paneProperties.childs(),
                            p = o.scalesProperties.childs(),
                            u = this._model.watermarkSource(),
                            b = null;
                        return null !== u && (b = u.properties().childs()), e = {
                            property: d.property(),
                            values: d.availableValues()
                        }, t = this._model.sessions().properties().childs().graphics.childs().vertlines.childs().sessBreaks.childs(), null === this._maxRightOffsetPropertyObject && this._createMaxOffsetPropertyObject(), i = Object(a.ensureNotNull)(this._maxRightOffsetPropertyObject), r = function(e, t, i, r, a, o, n, h) {
                            var d, p, u, b, g, w, y = [],
                                O = Object(c.e)({
                                    color: Object(c.u)(e, t.background, null, "Change Chart Background Color")
                                }, {
                                    id: "chartBackground",
                                    title: H,
                                    noAlpha: !0
                                }),
                                v = t.vertGridProperties.childs(),
                                m = Object(c.h)({
                                    color: Object(c.u)(e, v.color, null, "Change Vert Grid Lines Color"),
                                    style: Object(c.b)(e, v.style, "Change Vert Grid Lines Style")
                                }, {
                                    id: "vertGridLine",
                                    title: N
                                }),
                                P = t.horzGridProperties.childs(),
                                f = Object(c.h)({
                                    color: Object(c.u)(e, P.color, null, "Change Horz Grid Lines Color"),
                                    style: Object(c.b)(e, P.style, "Change Horz Grid Lines Style")
                                }, {
                                    id: "horizGridLine",
                                    title: R
                                }),
                                j = Object(c.h)({
                                    disabled: Object(c.b)(e, o, "Change Intraday Interval Property"),
                                    checked: Object(c.b)(e, a.visible, "Change Sessions Breaks Visibility"),
                                    color: Object(c.u)(e, a.color, null, "Change Sessions Breaks Color"),
                                    width: Object(c.b)(e, a.width, "Change Sessions Breaks Width"),
                                    style: Object(c.b)(e, a.style, "Change Sessions Breaks Style")
                                }, {
                                    id: "sessionBeaks",
                                    title: F
                                }),
                                _ = Object(c.p)({
                                    color: Object(c.u)(e, r.textColor, null, "Change Scales Text Color"),
                                    size: Object(c.b)(e, r.fontSize, "Change Scales Font Size")
                                }, {
                                    id: "scalesText",
                                    title: G
                                }),
                                S = Object(c.h)({
                                    color: Object(c.u)(e, r.lineColor, null, "Change Scales Lines Color")
                                }, {
                                    id: "scalesLine",
                                    title: I
                                }),
                                V = t.crossHairProperties.childs(),
                                L = Object(c.h)({
                                    color: Object(c.u)(e, V.color, V.transparency, "Change Crosshair Color"),
                                    width: Object(c.b)(e, V.width, "Change Crosshair Width"),
                                    style: Object(c.b)(e, V.style, "Change Crosshair Style")
                                }, {
                                    id: "crossHair",
                                    title: W
                                });
                            return y.push(O, m, f, j, _, S, L), null !== i && (d = Object(c.e)({
                                checked: Object(c.b)(e, i.visibility, "Change Symbol Watermark Visibility"),
                                color: Object(c.u)(e, i.color, null, "Change Symbol Watermark Color")
                            }, {
                                id: "watermark",
                                title: E
                            }), y.push(d)), p = Object(c.j)({
                                option: Object(c.b)(e, h.property, "Change Navigation Buttons Visibility")
                            }, {
                                id: "navButtons",
                                title: K,
                                options: new l.a(h.values)
                            }), y.push(p), u = Object(c.i)({
                                value: Object(c.b)(e, t.topMargin, "Change Top Margin", [C.b])
                            }, {
                                type: 0,
                                id: "paneTopMargin",
                                title: q,
                                min: new l.a(0),
                                max: new l.a(25),
                                step: new l.a(1),
                                unit: new l.a("%")
                            }), b = Object(c.i)({
                                value: Object(c.b)(e, t.bottomMargin, "Change Bottom Margin", [C.b])
                            }, {
                                type: 0,
                                id: "paneBottomMargin",
                                title: U,
                                min: new l.a(0),
                                max: new l.a(25),
                                step: new l.a(1),
                                unit: new l.a("%")
                            }), g = Object(c.i)({
                                value: Object(c.b)(e, n.property, "Change Right Margin", [C.b])
                            }, {
                                type: 0,
                                id: "paneRightMargin",
                                title: Z,
                                min: n.min,
                                max: n.max,
                                step: new l.a(1),
                                unit: new l.a(Q)
                            }), w = [Object(c.k)(y, "generalAppearanceGroup"), u, b], s.enabled("chart_property_page_right_margin_editor") && w.push(g), w
                        }(this._undoModel, n, b, p, t, this._series.isDWMProperty(), i, e), Object(h.a)(r, "appearance", de, ne.appearance)
                    }, e.prototype._createTradingPropertyPage = function() {
                        var e, t;
                        return ue ? null === be ? null : (e = this._model.properties().tradingProperties.childs(), t = getTradingPropertiesDefinitions(this._undoModel, e, be), Object(h.a)(t, "trading", pe, ne.trading)) : null
                    }, e.prototype._createEventsPropertyPage = function() {
                        return null
                    }, e
                }()
        },
        DyO1: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 16.5l-1 1v4h4l1-1m-4-4l2 2m-2-2l9-9m-5 13l-2-2m2 2l9-9m-11 7l9-9m0 0l-2-2m2 2l2 2m-4-4l.94-.94a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-.94.94"/></svg>'
        },
        Iilx: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5L12 8M8.5 4.5L5 8"/></svg>'
        },
        WS5G: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M24.068 9a.569.569 0 0 1 .73.872L19 14.842l-5.798-4.97a.569.569 0 0 1 .73-.872l4.751 3.887.317.26.317-.26L24.068 9zm1.47-.67a1.569 1.569 0 0 0-2.103-.104L19 11.854l-4.435-3.628a1.569 1.569 0 0 0-2.014 2.405l6.124 5.249.325.279.325-.28 6.124-5.248a1.569 1.569 0 0 0 .088-2.3zm-11.484 9.728a.57.57 0 0 0 .688-.91L9 12.636l-5.742 4.512a.57.57 0 0 0 .688.91l4.76-3.462.294-.214.294.214 4.76 3.462zm1.446.649a1.57 1.57 0 0 1-2.034.16L9 15.618l-4.466 3.249a1.57 1.57 0 0 1-1.894-2.505l6.051-4.755.309-.243.309.243 6.051 4.755c.74.581.806 1.68.14 2.345z"/></svg>'
        },
        ggCF: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M6 13h12v1H6zM6 17h12v1H6zM6 21h12v1H6z"/><rect width="17" height="3" stroke="currentColor" rx="1.5" x="5.5" y="6.5"/></svg>'
        },
        iUxq: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5A1.5 1.5 0 0 0 6 8.5v11A1.5 1.5 0 0 0 7.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 7H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>'
        }
    }
]);