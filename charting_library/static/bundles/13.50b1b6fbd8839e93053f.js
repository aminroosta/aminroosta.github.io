(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        HSjo: function(e, n, t) {
            "use strict";

            function r(e, n) {
                return Object(D.__assign)({
                    propType: "checkable",
                    properties: e
                }, n)
            }

            function i(e, n, t) {
                return Object(D.__assign)({
                    propType: "checkableSet",
                    properties: e,
                    childrenDefinitions: t
                }, n)
            }

            function o(e, n) {
                return Object(D.__assign)({
                    propType: "color",
                    properties: e,
                    noAlpha: !1
                }, n)
            }

            function u(e, n) {
                var t = Object(D.__assign)({
                    propType: "line",
                    properties: e
                }, n);
                return void 0 !== t.properties.style && (t.styleValues = k), void 0 !== t.properties.width && (t.widthValues = z), void 0 === t.properties.leftEnd && void 0 === t.properties.rightEnd || void 0 !== t.endsValues || (t.endsValues = N), void 0 !== t.properties.value && void 0 === t.valueType && (t.valueType = 1), t
            }

            function s(e, n) {
                var t = Object(D.__assign)({
                    propType: "leveledLine",
                    properties: e
                }, n);
                return void 0 !== t.properties.style && (t.styleValues = P), void 0 !== t.properties.width && (t.widthValues = M), t
            }

            function c(e, n) {
                return Object(D.__assign)({
                    propType: "number",
                    properties: e,
                    type: 1
                }, n)
            }

            function a(e, n) {
                return Object(D.__assign)({
                    propType: "options",
                    properties: e
                }, n)
            }

            function p(e, n) {
                return Object(D.__assign)({
                    propType: "twoOptions",
                    properties: e
                }, n)
            }

            function l(e, n) {
                var t = Object(D.__assign)(Object(D.__assign)({
                    propType: "text",
                    properties: e
                }, n), {
                    isEditable: n.isEditable || !1
                });
                return void 0 !== t.properties.size && void 0 === t.sizeItems && (t.sizeItems = C), void 0 !== t.properties.alignmentVertical && void 0 === t.alignmentVerticalItems && (t.alignmentVerticalItems = x), void 0 !== t.properties.alignmentHorizontal && void 0 === t.alignmentHorizontalItems && (t.alignmentHorizontalItems = W), (t.alignmentVerticalItems || t.alignmentHorizontalItems) && void 0 === t.alignmentTitle && (t.alignmentTitle = R), void 0 !== t.properties.borderWidth && void 0 === t.borderWidthItems && (t.borderWidthItems = J), t
            }

            function f(e, n) {
                return Object(D.__assign)({
                    propType: "twoColors",
                    properties: e,
                    noAlpha1: !1,
                    noAlpha2: !1
                }, n)
            }

            function d(e, n) {
                return Object(D.__assign)({
                    propType: "coordinates",
                    properties: e
                }, n)
            }

            function v(e, n) {
                return Object(D.__assign)({
                    propType: "range",
                    properties: e
                }, n)
            }

            function b(e, n) {
                return Object(D.__assign)({
                    propType: "transparency",
                    properties: e
                }, n)
            }

            function g(e, n) {
                return Object(D.__assign)({
                    propType: "symbol",
                    properties: e
                }, n)
            }

            function y(e, n) {
                return Object(D.__assign)({
                    propType: "session",
                    properties: e
                }, n)
            }

            function _(e, n, t) {
                return {
                    id: n,
                    title: t,
                    groupType: "general",
                    definitions: new q.a(e)
                }
            }

            function T(e, n, t) {
                return {
                    id: n,
                    title: t,
                    groupType: "leveledLines",
                    definitions: new q.a(e)
                }
            }

            function w(e, n) {
                var t = new Map,
                    r = void 0 !== n ? n[0] : function(e) {
                        return e
                    },
                    i = void 0 !== n ? void 0 !== n[1] ? n[1] : n[0] : function(e) {
                        return e
                    },
                    o = {
                        value: function() {
                            return r(e.value())
                        },
                        setValue: function(n) {
                            e.setValue(i(n))
                        },
                        subscribe: function(n, r) {
                            var i = function(e) {
                                r(o)
                            };
                            t.set(r, i), e.subscribe(n, i)
                        },
                        unsubscribe: function(n, r) {
                            var i = t.get(r);
                            i && (e.unsubscribe(n, i), t.delete(r))
                        },
                        unsubscribeAll: function(n) {
                            e.unsubscribeAll(n), t.clear()
                        }
                    };
                return o
            }

            function m(e, n, t, r) {
                var i = w(n, r),
                    o = void 0 !== r ? void 0 !== r[1] ? r[1] : r[0] : function(e) {
                        return e
                    };
                return i.setValue = function(r) {
                    return e.setProperty(n, o(r), t)
                }, i
            }

            function h(e, n, t, r) {
                var i = function(e, n) {
                        var t = new Map,
                            r = void 0 !== n ? n[0] : function(e) {
                                return e
                            },
                            i = void 0 !== n ? void 0 !== n[1] ? n[1] : n[0] : function(e) {
                                return e
                            },
                            o = {
                                value: function() {
                                    return r(e.value())
                                },
                                setValue: function(n) {
                                    e.setValue(i(n))
                                },
                                subscribe: function(n, r) {
                                    var i = function() {
                                            r(o)
                                        },
                                        u = t.get(n);
                                    void 0 === u ? ((u = new Map).set(r, i), t.set(n, u)) : u.set(r, i), e.subscribe(i)
                                },
                                unsubscribe: function(n, r) {
                                    var i, o = t.get(n);
                                    void 0 !== o && void 0 !== (i = o.get(r)) && (e.unsubscribe(i), o.delete(r))
                                },
                                unsubscribeAll: function(n) {
                                    var r = t.get(n);
                                    void 0 !== r && (r.forEach(function(n, t) {
                                        e.unsubscribe(n)
                                    }), r.clear())
                                }
                            };
                        return o
                    }(n, r),
                    o = void 0 !== r ? void 0 !== r[1] ? r[1] : r[0] : function(e) {
                        return e
                    };
                return i.setValue = function(r) {
                    return e.undoHistory().setWatchedValue(n, o(r), t)
                }, i
            }

            function O(e, n) {
                var t = w(n);
                return t.setValue = function(n) {
                    return e.setPriceScaleSelectionStrategy(n)
                }, t
            }

            function E(e, n, t, r) {
                var i = w(n);
                return i.setValue = function(n) {
                    var i = {
                        lockScale: n
                    };
                    e.setPriceScaleMode(i, t, r)
                }, i
            }

            function j(e, n, t, r) {
                var i = w(n, r);
                return i.setValue = function(r) {
                    e.setScaleRatioProperty(n, r, t)
                }, i
            }

            function V(e, n) {
                if (Object(F.isHexColor)(e)) {
                    var t = Object(B.parseRgb)(e);
                    return Object(B.rgbaToString)(Object(B.rgba)(t, (100 - n) / 100))
                }
                return e
            }

            function S(e, n, t, r) {
                var i;
                return (i = null !== t ? function(e) {
                    var n = w(e);
                    return n.destroy = function() {
                        e.destroy()
                    }, n
                }(function(e) {
                    var n, t, r, i, o, u, s, c = [];
                    for (n = 1; n < arguments.length; n++) c[n - 1] = arguments[n];
                    for (t = function() {
                            return e.apply(void 0, c.map(function(e) {
                                return e.value()
                            }))
                        }, r = Object(G.a)(t()), i = function() {
                            return r.setValue(t())
                        }, o = {}, u = 0, s = c; u < s.length; u++) s[u].subscribe(o, i);
                    return r.destroy = function() {
                        c.forEach(function(e) {
                            return e.unsubscribeAll(o)
                        })
                    }, r
                }(V, n, t)) : w(n, [function() {
                    return V(n.value(), 0)
                }, function(e) {
                    return e
                }])).setValue = function(t) {
                    e.setProperty(n, t, r)
                }, i
            }

            function L(e, n, t, r, i) {
                var o, u, s, c = m(e, n, i, [(u = t, s = n, function(e) {
                        var n, t = u(s);
                        return e === s.value() && null !== t && (n = t.ticker || t.full_name) ? n : e
                    }), function(e) {
                        return e
                    }]),
                    a = new Map;
                return c.subscribe = function(e, t) {
                    var r = function(e) {
                        t(c)
                    };
                    a.set(t, r), n.subscribe(e, r)
                }, c.unsubscribe = function(e, t) {
                    var r = a.get(t);
                    r && (n.unsubscribe(e, r), a.delete(t))
                }, o = {}, r.subscribe(o, function() {
                    a.forEach(function(e, n) {
                        e(c)
                    })
                }), c.destroy = function() {
                    r.unsubscribeAll(o), a.clear()
                }, c
            }

            function I(e) {
                return e.hasOwnProperty("groupType")
            }

            function A(e) {
                e.forEach(function(e) {
                    e.hasOwnProperty("propType") ? Object.keys(e.properties).forEach(function(n) {
                        var t = e.properties[n];
                        void 0 !== t && void 0 !== t.destroy && t.destroy()
                    }) : A(e.definitions.value())
                })
            }
            var D = t("mrSG"),
                H = t("a7Ha"),
                Y = t("8Uy/"),
                k = [Y.LINESTYLE_SOLID, Y.LINESTYLE_DOTTED, Y.LINESTYLE_DASHED],
                z = [1, 2, 3, 4],
                N = [H.LineEnd.Normal, H.LineEnd.Arrow],
                P = [Y.LINESTYLE_SOLID, Y.LINESTYLE_DOTTED, Y.LINESTYLE_DASHED],
                M = [1, 2, 3, 4],
                x = (t("YFKU"), [{
                    value: "bottom",
                    title: window.t("Top")
                }, {
                    value: "middle",
                    title: window.t("Middle")
                }, {
                    value: "top",
                    title: window.t("Bottom")
                }]),
                W = [{
                    value: "left",
                    title: window.t("Left")
                }, {
                    value: "center",
                    title: window.t("Center")
                }, {
                    value: "right",
                    title: window.t("Right")
                }],
                C = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map(function(e) {
                    return {
                        title: String(e),
                        value: e
                    }
                }),
                J = [1, 2, 3, 4],
                R = window.t("Text alignment"),
                U = t("hY0g"),
                q = t.n(U),
                B = t("eJTA"),
                F = t("Tmoa"),
                G = t("m/cY");
            t.d(n, "z", function() {
                return I
            }), t.d(n, "t", function() {
                return A
            }), t.d(n, "c", function() {
                return r
            }), t.d(n, "d", function() {
                return i
            }), t.d(n, "e", function() {
                return o
            }), t.d(n, "h", function() {
                return u
            }), t.d(n, "g", function() {
                return s
            }), t.d(n, "i", function() {
                return c
            }), t.d(n, "j", function() {
                return a
            }), t.d(n, "s", function() {
                return p
            }), t.d(n, "p", function() {
                return l
            }), t.d(n, "r", function() {
                return f
            }), t.d(n, "f", function() {
                return d
            }), t.d(n, "m", function() {
                return v
            }), t.d(n, "q", function() {
                return b
            }), t.d(n, "o", function() {
                return g
            }), t.d(n, "n", function() {
                return y
            }), t.d(n, "k", function() {
                return _
            }), t.d(n, "l", function() {
                return T
            }), t.d(n, "b", function() {
                return m
            }), t.d(n, "a", function() {
                return h
            }), t.d(n, "w", function() {
                return O
            }), t.d(n, "v", function() {
                return E
            }), t.d(n, "x", function() {
                return j
            }), t.d(n, "u", function() {
                return S
            }), t.d(n, "y", function() {
                return L
            })
        }
    }
]);