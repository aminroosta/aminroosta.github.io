(window.webpackJsonp = window.webpackJsonp || []).push([
    ["restricted-toolset", "series-icons-map"], {
        "+l9v": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'
        },
        "1Tx8": function(e, t, n) {
            e.exports = {
                button: "button-YsN2vRuA",
                withText: "withText-JhQdRoPu",
                withoutText: "withoutText-f6SoijeW"
            }
        },
        "1uoO": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>'
        },
        "23di": function(e, t, n) {
            e.exports = {
                wrap: "wrap-3OynVXTx",
                titleWrap: "titleWrap-yVINuOIC",
                indicators: "indicators-CRJ2i71K",
                title: "title-Iod5hZQV",
                icon: "icon-3bTRbX0U",
                text: "text-2BJe_3ce",
                labelRow: "labelRow-2Vs9IqnP",
                label: "label-1LxfyrID"
            }
        },
        "2xRE": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>'
        },
        "4hTN": function(e, t, n) {
            e.exports = {
                value: "value-DWZXOdoK",
                selected: "selected-2V87KUXm"
            }
        },
        "8RO/": function(e, t, n) {
            "use strict";

            function a(e, t) {
                return {
                    indicators: e.orderedDataSources(!0).filter(function(e) {
                        return Object(o.isStudy)(e) && !Object(o.isESDStudy)(e)
                    }).map(function(e) {
                        return {
                            id: e.metaInfo().id,
                            description: e.title(!0, void 0, !0)
                        }
                    }),
                    interval: t
                }
            }

            function i(e) {
                var t = new Map;
                return e.forEach(function(e) {
                    var n = t.get(e.id) || [e.description, 0],
                        a = n[0],
                        i = n[1];
                    t.set(e.id, [a, i + 1])
                }), Array.from(t.values()).map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return t + (n > 1 ? " x " + n : "")
                }).join(", ")
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var o = n("3ClC")
        },
        "8d0Q": function(e, t, n) {
            "use strict";

            function a() {
                var e = Object(o.useState)(!1),
                    t = e[0],
                    n = e[1],
                    a = {
                        onMouseOver: function(e) {
                            i(e) && n(!0)
                        },
                        onMouseOut: function(e) {
                            i(e) && n(!1)
                        }
                    };
                return [t, a]
            }

            function i(e) {
                return !e.currentTarget.contains(e.relatedTarget)
            }
            var o;
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            }), o = n("q1tI")
        },
        "93f4": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
        },
        "9NBK": function(e, t, n) {
            e.exports = {
                item: "item-b8AKccvl",
                round: "round-2UQxqNA1"
            }
        },
        CX26: function(e, t, n) {
            e.exports = {
                form: "form-2itceCqS",
                interacting: "interacting-3joY26dg",
                input: "input-z46tLQgj",
                menu: "menu-35lWsSKr",
                add: "add-1NrfSAvb",
                hovered: "hovered-1nwOcWv8",
                hover: "hover-2JY1kj4n",
                wrap: "wrap-1oB2WI2R"
            }
        },
        EsZh: function(e, t, n) {
            "use strict";
            var a, i, o, r, s, l, c, h, u, d;
            n.r(t), n.d(t, "SERIES_ICONS", function() {
                return d
            }), a = n("G2sT"), i = n("Jtxf"), o = n("pqsj"), r = n("1uoO"), s = n("FO3N"), l = n("t2Sj"), c = n("fD7T"), h = n("VgwI"), (u = {})[3] = a, u[0] = i, u[1] = o, u[8] = r, u[9] = s, u[2] = l, u[10] = c, u[12] = h, d = u
        },
        EvtC: function(e, t, n) {
            e.exports = {
                button: "button-2-lC3gh4"
            }
        },
        FO3N: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>'
        },
        G2sT: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>'
        },
        GWvR: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        GgvM: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M21 7v4h1V6h-5v1z"/><path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"/><path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"/><path d="M16.854 16.146l5 5-.708.708-5-5z"/><g><path d="M7 21v-4H6v5h5v-1z"/><path d="M11.146 16.146l-5 5 .708.708 5-5z"/></g></g></svg>'
        },
        HBiQ: function(e, t, n) {
            e.exports = {
                button: "button-1IIz2ju4",
                first: "first-bfrNico9",
                last: "last-3h-LFsOr"
            }
        },
        HHbT: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        Jtxf: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>'
        },
        K5ke: function(e, t, n) {
            e.exports = {
                loader: "loader-3Pj8ExOX",
                item: "item-2n55_7om",
                "tv-button-loader": "tv-button-loader-SKpJjjYw",
                black: "black-eFIQWyf4",
                white: "white-2Ma0ajvT",
                gray: "gray-24fvVR0S"
            }
        },
        Oy6E: function(e, t, n) {
            e.exports = {
                spinnerWrap: "spinnerWrap-EgWaITv6"
            }
        },
        RGo6: function(e, t, n) {
            e.exports = {
                opened: "opened-GQFVkrpV",
                hover: "hover-1s0KqpdE",
                autoSaveWrapper: "autoSaveWrapper-1MJY41zr",
                sharingWrapper: "sharingWrapper-2a3BKnuf",
                button: "button-X9fdkr3t",
                buttonSmallPadding: "buttonSmallPadding-3OtdkF4f",
                hintPlaceHolder: "hintPlaceHolder-3xGrUHN7",
                smallHintPlaceHolder: "smallHintPlaceHolder-3ftZG2PP"
            }
        },
        RYBj: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>'
        },
        "S+Ii": function(e, t, n) {
            e.exports = {
                buttonUndo: "buttonUndo-342XpPC1",
                buttonRedo: "buttonRedo-3o_XdU_J"
            }
        },
        S0BX: function(e, t, n) {
            e.exports = {
                dropdown: "dropdown-3caJUCGx",
                label: "label-3vchy5zS"
            }
        },
        SchQ: function(e, t, n) {
            e.exports = {
                button: "button-1EU5-JL7",
                isDisabled: "isDisabled-1RjJSnJ7",
                text: "text-1HWeUAzA"
            }
        },
        UJ4t: function(e, t, n) {
            e.exports = {
                wrap: "wrap-18oKCBRc"
            }
        },
        VgwI: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>'
        },
        X7WP: function(e, t, n) {
            e.exports = {
                wrap: "wrap-CUt4Mg1V",
                inner: "inner-32OP7ejC",
                actions: "actions-1cGPn1dW",
                hover: "hover-3dmVjFov",
                input: "input-3lfOzLDc",
                isExpanded: "isExpanded-1pdStI5Z"
            }
        },
        XWsk: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.526 9.465a1.5 1.5 0 0 0-2.2-.084l-4.472 4.473-.708-.707L7.62 8.674a2.5 2.5 0 0 1 3.666.14l3.19 3.72a1.5 1.5 0 0 0 2.199.085l4.473-4.473.707.708-4.473 4.472a2.5 2.5 0 0 1-3.666-.14l-3.189-3.72zM20 21h-4v-1h4v-4h1v4h4v1h-4v4h-1v-4z"/></svg>'
        },
        YEs3: function(e, t, n) {
            e.exports = {
                button: "button-1F3Go35E",
                menu: "menu-16FRUKka"
            }
        },
        aVq2: function(e, t, n) {
            e.exports = {
                button: "button-1XkSWU32",
                first: "first-2UbSFGzF",
                last: "last-1rdUnwE6",
                menu: "menu-1fA401bY",
                dropdown: "dropdown-1zOBoqnG",
                menuContent: "menuContent-1vyIDg3J",
                section: "section-1p7gLxC9"
            }
        },
        emGF: function(e, t, n) {
            "use strict";

            function a(e, t) {
                var n, a, o, s;
                return 0 === e.length ? Promise.resolve([]) : (r.logNormal("Requesting favorites info"), n = [], a = new Map, o = new Map, s = new Map, e.forEach(function(e) {
                    switch (e.type) {
                        case "java":
                            s.set(e.studyId, e);
                            break;
                        case "pine":
                            isPublisedPineId(e.pineId) ? a.set(e.pineId, e) : o.set(e.pineId, e);
                            break;
                        default:
                            Object(i.assert)(!1, "unknown favorite type " + JSON.stringify(e))
                    }
                }), 0 !== s.size && n.push(t.findAllJavaStudies().then(function(e) {
                    var t, n, a, i = new Map;
                    for (t = 0, n = e; t < n.length; t++) a = n[t], s.has(a.id) && i.set(a.id, {
                        name: a.description,
                        localizedName: a.description_localized,
                        studyMarketShittyObject: a
                    });
                    return i
                }).then(function(e) {
                    var t, n, a, i = (n = e, a = {
                        items: [],
                        notFoundItems: []
                    }, s.forEach(function(e, t) {
                        var i = n.get(t);
                        void 0 !== i ? a.items.push({
                            item: e,
                            info: i
                        }) : a.notFoundItems.push(e)
                    }), a);
                    return 0 !== i.notFoundItems.length && (t = i.notFoundItems.map(function(e) {
                        return e.studyId
                    }), r.logWarn("Cannot find java scripts: " + JSON.stringify(t))), i.items
                })), Promise.all(n).then(function(e) {
                    return r.logNormal("Requesting favorites info finished"), e.reduce(function(e, t) {
                        return e.concat(t)
                    }, [])
                }))
            }
            var i, o, r;
            n.r(t), n.d(t, "getFavoritesInfo", function() {
                return a
            }), i = n("Eyy1"), o = n("uOxu"), r = Object(o.getLogger)("FavoritesInfo")
        },
        fD7T: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>'
        },
        fESK: function(e, t, n) {
            e.exports = {
                labelRow: "labelRow-1loM6nbt",
                toolbox: "toolbox-3y2qhvbG",
                description: "description-UeULl1bt",
                item: "item-GOMwFObW",
                titleItem: "titleItem-3OGNprLt",
                wrap: "wrap-3ulNVWio",
                hovered: "hovered-tcAOA2o_"
            }
        },
        fEjm: function(e, t, n) {
            e.exports = {
                star: "star-uhAI7sV4",
                checked: "checked-2bhy04CF"
            }
        },
        fioS: function(e, t, n) {
            e.exports = {
                summary: "summary-3_6tmh1R",
                hovered: "hovered-1yGmee-_",
                caret: "caret-1v4NzWzm"
            }
        },
        gla1: function(e, t, n) {
            "use strict";
            var a, i;
            n.d(t, "a", function() {
                return i
            }), a = n("q1tI"), i = function() {
                return Object(a.useReducer)(function(e, t) {
                    return e + 1
                }, 0)[1]
            }
        },
        "i/MG": function(e, t, n) {
            "use strict";
            var a, i, o, r, s, l, c;
            n.d(t, "a", function() {
                return c
            }), a = n("mrSG"), n("YFKU"), i = n("q1tI"), o = n("TSYQ"), r = n("kXJy"), s = n("+l9v"), l = {
                remove: window.t("Remove")
            }, c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function(e) {
                        var n = t.props,
                            a = n.onClick,
                            i = n.onClickArg;
                        a && a(i, e)
                    }, t
                }
                return Object(a.__extends)(t, e), t.prototype.render = function() {
                    return i.createElement("span", {
                        className: o(r.button, "apply-common-tooltip", this.props.hidden && r.hidden),
                        dangerouslySetInnerHTML: {
                            __html: s
                        },
                        onClick: this._handleClick,
                        title: l.remove,
                        "data-name": "remove-button"
                    })
                }, t
            }(i.PureComponent)
        },
        jKyl: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>'
        },
        kXJy: function(e, t, n) {
            e.exports = {
                button: "button-1scLo53s",
                hidden: "hidden-2GRQzIQ1"
            }
        },
        "koZ+": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>'
        },
        lAXe: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>'
        },
        miV2: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = e.text,
                    n = e.className,
                    a = e.displayMode,
                    i = e.collapseWhen,
                    o = void 0 === i ? q : i,
                    r = Object(b.__rest)(e, ["text", "className", "displayMode", "collapseWhen"]),
                    s = !o.includes(a);
                return y.createElement(F.a, Object(b.__assign)({}, r, {
                    text: s ? t : void 0,
                    className: z(n, K.button, s ? K.withText : K.withoutText)
                }))
            }

            function i(e) {
                var t = e.className,
                    n = Object(b.__rest)(e, ["className"]);
                return y.createElement(F.a, Object(b.__assign)({}, n, {
                    className: z(t, X.button)
                }))
            }

            function o(e) {
                return y.createElement("div", {
                    className: se.spinnerWrap
                }, y.createElement(re.a, null))
            }

            function r(e) {
                return y.createElement("div", {
                    className: le.title
                }, e.children)
            }

            function s(e) {
                return e.info.localizedName || Object(G.t)(e.info.name, {
                    context: "study"
                })
            }

            function l(e) {
                var t;
                return y.createElement("div", {
                    className: z(fe.value, (t = {}, t[fe.selected] = e.isSelected, t))
                }, e.value, e.metric)
            }

            function c(e) {
                var t, n, a, i, o, r, s = e.interval,
                    l = e.hint,
                    c = e.isActive,
                    h = e.isDisabled,
                    u = e.isFavorite,
                    d = e.isSignaling,
                    v = e.onClick,
                    p = Object(N.a)(e),
                    m = Object(xe.b)(),
                    f = m[0],
                    g = m[1];
                return y.createElement("div", Object(b.__assign)({}, g), y.createElement(A.b, Object(b.__assign)({}, p, {
                    isActive: c,
                    isDisabled: h,
                    isHovered: d,
                    onClick: v,
                    onClickArg: s,
                    toolbox: (t = e.isRemovable, n = e.isFavoritingAllowed, a = e.onClickFavorite, i = e.onClickRemove, o = y.createElement(ke.a, {
                        key: "remove",
                        hidden: !Modernizr.touch && !f,
                        onClick: i,
                        onClickArg: s
                    }), r = y.createElement(O.a, {
                        key: "favorite",
                        isFilled: u,
                        onClick: a,
                        onClickArg: s
                    }), [t && o, !h && n && r]),
                    showToolboxOnHover: !u,
                    label: l
                })))
            }

            function h(e, t) {
                return void 0 === t && (t = !1), {
                    id: e,
                    name: Oe[e],
                    items: [],
                    mayOmitSeparator: t
                }
            }

            function u(e) {
                return w.a.createElement(w.a.Fragment, null, w.a.createElement("div", {
                    className: j()(e.className, Ee.summary, Ee.item),
                    onClick: function() {
                        e.onStateChange && e.onStateChange(!e.open)
                    },
                    "data-open": e.open
                }, e.summary, w.a.createElement(_e.a, {
                    className: Ee.caret,
                    dropped: Boolean(e.open)
                })), e.open && e.children)
            }

            function d(e) {
                var t = e.onClick;
                return w.a.createElement(A.b, {
                    theme: St,
                    className: wt.wrap,
                    label: w.a.createElement("div", {
                        className: wt.titleWrap
                    }, w.a.createElement("div", {
                        className: wt.title
                    }, w.a.createElement(E.a, {
                        className: wt.icon,
                        icon: yt
                    }), w.a.createElement("div", {
                        className: wt.text
                    }, kt.text))),
                    onClick: t
                })
            }

            function v(e) {
                return y.createElement("div", {
                    className: z(Mt.description, e.className)
                }, e.children)
            }

            function p(e) {
                function t() {
                    (0, e.onApply)(n)
                }
                var n = e.item,
                    a = e.onFavor,
                    i = e.favorite,
                    o = e.isFavoritingAllowed,
                    r = Object(xe.b)(),
                    s = r[0],
                    l = r[1],
                    c = n.meta_info,
                    h = c ? Object(xt.b)(c.indicators) : void 0;
                return w.a.createElement("div", Object(b.__assign)({}, l, {
                    className: Ot.wrap,
                    "data-name": n.name,
                    "data-id": n.id,
                    "data-is-default": Boolean(n.is_default)
                }), w.a.createElement(A.b, {
                    theme: Et,
                    label: n.name,
                    isHovered: s,
                    showToolboxOnHover: !i && !s,
                    onClick: t,
                    toolbox: w.a.createElement(w.a.Fragment, null, !n.is_default && w.a.createElement(ke.a, {
                        key: "remove",
                        hidden: !Modernizr.touch && !s,
                        onClick: function() {
                            (0, e.onRemove)(n)
                        }
                    }), Boolean(a) && o && w.a.createElement(O.a, {
                        key: "favorite",
                        isFilled: Boolean(i),
                        onClick: function() {
                            a && a(n)
                        }
                    }))
                }), h && w.a.createElement(A.b, {
                    theme: At,
                    label: w.a.createElement(v, {
                        className: Ot.description
                    }, h),
                    onClick: t,
                    isHovered: s
                }))
            }

            function m(e) {
                var t, n = e.id,
                    i = e.className,
                    o = e.mode,
                    r = e.favorites,
                    s = e.templates,
                    l = e.isMenuOpen,
                    c = j()(i, Ft.wrap, ((t = {})[Ft.full] = "full" === o, t[Ft.medium] = "medium" === o, t)),
                    h = s.filter(function(e) {
                        return r.includes(e.name)
                    }),
                    u = "small" !== o && e.onTemplateFavorite && h.length > 0;
                return w.a.createElement(R, {
                    id: n,
                    className: c
                }, w.a.createElement(I.a, {
                    onOpen: e.onMenuOpen,
                    content: w.a.createElement(a, {
                        className: j()(u && Ft.buttonWithFavorites),
                        displayMode: o,
                        isOpened: l,
                        icon: Rt,
                        text: Nt.title,
                        title: Nt.tooltip,
                        forceInteractive: !0
                    }),
                    arrow: !1
                }, w.a.createElement("div", {
                    className: Ft.menu
                }, w.a.createElement(d, {
                    onClick: e.onTemplateSave
                }), s.length > 0 && w.a.createElement(L.a, null), w.a.createElement(g, {
                    favorites: h.map(function(e) {
                        return e.name
                    }),
                    templates: s,
                    onTemplateSelect: e.onTemplateSelect,
                    onTemplateRemove: e.onTemplateRemove,
                    onTemplateFavorite: e.onTemplateFavorite
                }))), u && w.a.createElement(f, {
                    favorites: h,
                    onTemplateSelect: e.onTemplateSelect
                }))
            }

            function f(e) {
                return w.a.createElement(w.a.Fragment, null, e.favorites.map(function(t, n, a) {
                    var i;
                    return w.a.createElement(zt, {
                        key: t.name,
                        item: t,
                        onApply: e.onTemplateSelect,
                        className: j()((i = {}, i[Ft.first] = 0 === n, i[Ft.last] = n === a.length - 1, i))
                    })
                }))
            }

            function g(e) {
                var t, n = e.templates.filter(function(e) {
                        return e.is_default
                    }),
                    a = e.templates.filter(function(e) {
                        return !e.is_default
                    }),
                    i = Object(y.useContext)(Ht),
                    o = Object(y.useContext)(Tt.a),
                    r = Object(jt.a)();
                return Object(y.useEffect)(function() {
                    if (null !== i) {
                        var e = {};
                        return i.getOnChange().subscribe(e, function() {
                                r(), o && o.update()
                            }),
                            function() {
                                return i.getOnChange().unsubscribeAll(e)
                            }
                    }
                    return function() {}
                }, []), t = function(t) {
                    return w.a.createElement(p, {
                        key: t.name,
                        item: t,
                        isFavoritingAllowed: Boolean(e.onTemplateFavorite),
                        favorite: e.favorites.includes(t.name),
                        onApply: e.onTemplateSelect,
                        onFavor: e.onTemplateFavorite,
                        onRemove: e.onTemplateRemove
                    })
                }, w.a.createElement(w.a.Fragment, null, a.map(t), i && n.length > 0 && a.length > 0 && w.a.createElement(w.a.Fragment, null, w.a.createElement(L.a, null), w.a.createElement(u, {
                    summary: Object(G.t)("Default templates"),
                    open: !i.get().defaultsCollapsed,
                    onStateChange: function(e) {
                        return i.set({
                            defaultsCollapsed: !e
                        })
                    }
                }, n.map(t))), i && n.length > 0 && 0 === a.length && n.map(t))
            }

            function _() {
                return {
                    Bars: C.enabled("header_chart_type") ? B : void 0,
                    Compare: C.enabled("header_compare") ? Y : void 0,
                    Custom: Yt,
                    Fullscreen: C.enabled("header_fullscreen_button") ? ee : void 0,
                    Indicators: C.enabled("header_indicators") ? ve : void 0,
                    Intervals: C.enabled("header_resolutions") ? je : void 0,
                    OpenPopup: Ne,
                    Properties: C.enabled("header_settings") && C.enabled("show_chart_property_page") ? Le : void 0,
                    SaveLoad: C.enabled("header_saveload") ? ut : void 0,
                    Screenshot: C.enabled("header_screenshot") ? ft : void 0,
                    SymbolSearch: C.enabled("header_symbol_search") ? bt : void 0,
                    Templates: C.enabled("study_templates") ? Wt : void 0,
                    UndoRedo: C.enabled("header_undo_redo") ? qt : void 0,
                    Layout: void 0
                }
            }
            var C, b, y, w, S, k, x, M, O, E, A, I, z, j, T, R, F, N, H, W, L, P, D, V, U, B, G, K, q, Q, J, Y, X, Z, $, ee, te, ne, ae, ie, oe, re, se, le, ce, he, ue, de, ve, pe, me, fe, ge, _e, Ce, be, ye, we, Se, ke, xe, Me, Oe, Ee, Ae, Ie, ze, je, Te, Re, Fe, Ne, He, We, Le, Pe, De, Ve, Ue, Be, Ge, Ke, qe, Qe, Je, Ye, Xe, Ze, $e, et, tt, nt, at, it, ot, rt, st, lt, ct, ht, ut, dt, vt, pt, mt, ft, gt, _t, Ct, bt, yt, wt, St, kt, xt, Mt, Ot, Et, At, It, zt, jt, Tt, Rt, Ft, Nt, Ht, Wt, Lt, Pt, Dt, Vt, Ut, Bt, Gt, Kt, qt, Qt, Jt, Yt, Xt, Zt;
            n.r(t), C = n("Kxc7"), b = n("mrSG"), y = n("q1tI"), w = n.n(y), S = n("17x9"), k = n.n(S), x = n("dfhE"), M = n("EsZh"), O = n("pr86"), E = n("jjrI"), A = n("N5tr"), I = n("82wv"), z = n("TSYQ"), j = n.n(z), T = n("UJ4t"), R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className,
                        a = Object(b.__rest)(e, ["children", "className"]);
                    return y.createElement("div", Object(b.__assign)({
                        className: z(n, T.wrap)
                    }, a), t)
                }, t
            }(y.PureComponent), F = n("tU7i"), N = n("QpNh"), H = n("HBiQ"), W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function() {
                        var e = t.props,
                            n = e.onClick,
                            a = e.onClickArg;
                        n && n(a)
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e, t = this.props,
                        n = t.isFirst,
                        a = t.isLast,
                        i = t.hint,
                        o = t.text,
                        r = t.icon,
                        s = t.isActive,
                        l = t.isDisabled,
                        c = t.className,
                        h = Object(N.a)(this.props);
                    return y.createElement(F.a, Object(b.__assign)({}, h, {
                        icon: r,
                        text: o,
                        title: i,
                        isDisabled: l,
                        isActive: s,
                        isGrouped: !0,
                        onClick: this._handleClick,
                        className: z(c, H.button, (e = {}, e[H.first] = n, e[H.last] = a, e))
                    }))
                }, t
            }(y.PureComponent), L = n("KKsp"), P = n("YEs3"), (D = {})[0] = window.t("Bars"), D[1] = window.t("Candles"), D[9] = window.t("Hollow Candles"), D[8] = window.t("Heikin Ashi"), D[2] = window.t("Line"), D[3] = window.t("Area"), D[10] = window.t("Baseline"), D[12] = window.t("High-Low"), V = D, U = {
                barsStyle: window.t("Bar's Style"),
                labels: V
            }, B = function(e) {
                function t(t, n) {
                    var a, i, o, r, s, l = e.call(this, t, n) || this;
                    return l._handleChangeStyle = function(e) {
                        var t = l.state,
                            n = t.favorites,
                            a = t.lastSelectedNotFavorite,
                            i = t.activeStyle;
                        l.setState({
                            activeStyle: e,
                            lastSelectedNotFavorite: n.includes(i) ? a : i
                        })
                    }, l._handleSelectStyle = function(e) {
                        var t = l.context.chartWidgetCollection;
                        e !== t.activeChartStyle.value() && t.trySetChartStyleToActiveWidget(e)
                    }, l._handleClickFavorite = function(e) {
                        l._isStyleFavorited(e) ? l._handleRemoveFavorite(e) : l._handleAddFavorite(e)
                    }, a = n.chartWidgetCollection, i = n.favoriteChartStylesService, o = a.activeChartStyle.value(), r = i.get(), C.enabled("japanese_chart_styles"), s = [], l.state = {
                        activeStyle: o,
                        favorites: r,
                        styles: [0, 1, 9, 8, 2, 3, 10],
                        japaneseStyles: s
                    }, C.enabled("chart_style_hilo") && l.state.styles.push(12), l
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context,
                        t = e.chartWidgetCollection,
                        n = e.favoriteChartStylesService;
                    t.activeChartStyle.subscribe(this._handleChangeStyle), n.getOnChange().subscribe(this, this._handleChangeSettings)
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.context,
                        t = e.chartWidgetCollection,
                        n = e.favoriteChartStylesService;
                    t.activeChartStyle.unsubscribe(this._handleChangeStyle), n.getOnChange().unsubscribe(this, this._handleChangeSettings)
                }, t.prototype.render = function() {
                    var e, t, n, a = this,
                        i = this.props,
                        o = i.isShownQuicks,
                        r = i.displayMode,
                        s = void 0 === r ? "full" : r,
                        l = i.id,
                        c = this.state,
                        h = c.activeStyle,
                        u = c.favorites,
                        d = c.styles,
                        v = c.japaneseStyles,
                        p = c.lastSelectedNotFavorite,
                        m = "small" !== s && o && 0 !== u.length,
                        f = Object(b.__spreadArrays)(u);
                    return f.includes(h) ? void 0 !== p && f.push(p) : f.push(h), e = m && f.length > 1, t = d.map(function(e) {
                        return a._renderPopupMenuItem(e, e === h)
                    }), n = v.map(function(e) {
                        return a._renderPopupMenuItem(e, e === h)
                    }), y.createElement(R, {
                        id: l
                    }, e && f.map(function(e, t) {
                        return y.createElement(W, {
                            className: P.button,
                            icon: M.SERIES_ICONS[e],
                            isActive: m && h === e,
                            key: t,
                            hint: U.labels[e],
                            isFirst: 0 === t,
                            isLast: t === f.length - 1,
                            onClick: m ? a._handleSelectStyle : void 0,
                            onClickArg: e,
                            "data-value": x.STYLE_SHORT_NAMES[e]
                        })
                    }), y.createElement(I.a, {
                        arrow: Boolean(e),
                        content: e ? void 0 : y.createElement(R, null, y.createElement(E.a, {
                            icon: M.SERIES_ICONS[h]
                        })),
                        title: e ? U.barsStyle : U.labels[h],
                        className: P.menu
                    }, t, !!n.length && y.createElement(L.a, null), n))
                }, t.prototype._renderPopupMenuItem = function(e, t) {
                    var n = this.props.isFavoritingAllowed,
                        a = this._isStyleFavorited(e);
                    return y.createElement(A.b, {
                        key: e,
                        icon: M.SERIES_ICONS[e],
                        isActive: t,
                        label: U.labels[e] || "",
                        onClick: this._handleSelectStyle,
                        onClickArg: e,
                        showToolboxOnHover: !a,
                        toolbox: n && y.createElement(O.a, {
                            isFilled: a,
                            onClick: this._handleClickFavorite,
                            onClickArg: e
                        }),
                        "data-value": x.STYLE_SHORT_NAMES[e]
                    })
                }, t.prototype._handleChangeSettings = function(e) {
                    this.setState({
                        lastSelectedNotFavorite: void 0,
                        favorites: e
                    })
                }, t.prototype._isStyleFavorited = function(e) {
                    return -1 !== this.state.favorites.indexOf(e)
                }, t.prototype._handleAddFavorite = function(e) {
                    var t = this.state.favorites,
                        n = this.context.favoriteChartStylesService;
                    n.set(Object(b.__spreadArrays)(t, [e]))
                }, t.prototype._handleRemoveFavorite = function(e) {
                    var t = this.state.favorites,
                        n = this.context.favoriteChartStylesService;
                    n.set(t.filter(function(t) {
                        return t !== e
                    }))
                }, t.contextTypes = {
                    chartWidgetCollection: S.any.isRequired,
                    favoriteChartStylesService: S.any.isRequired
                }, t
            }(y.PureComponent), G = n("YFKU"), K = n("1Tx8"), q = ["medium", "small"], Q = n("RYBj"), J = {
                compare: window.t("Compare"),
                compareOrAddSymbol: window.t("Compare or Add Symbol")
            }, Y = function(e) {
                function t(t, n) {
                    var a = e.call(this, t, n) || this;
                    return a._handleClick = function() {
                        a.setState({
                            isActive: !0
                        }), a.context.chartWidgetCollection.showAddCompareDialog().then(function(e) {
                            e.on("afterOpen", function() {
                                return a.setState({
                                    isActive: !0
                                })
                            }), e.on("beforeClose", function() {
                                return a.setState({
                                    isActive: !1
                                })
                            })
                        })
                    }, a.state = {
                        isActive: !1
                    }, a
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.state.isActive;
                    return y.createElement(a, Object(b.__assign)({}, this.props, {
                        icon: Q,
                        isOpened: e,
                        onClick: this._handleClick,
                        text: J.compare,
                        title: J.compareOrAddSymbol
                    }))
                }, t.contextTypes = {
                    chartWidgetCollection: S.any.isRequired
                }, t
            }(y.PureComponent), X = n("EvtC"), Z = n("GgvM"), $ = {
                hint: window.t("Fullscreen mode")
            }, ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function() {
                        t.context.chartWidgetCollection.startFullscreen()
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.id;
                    return y.createElement(i, {
                        id: n,
                        icon: Z,
                        onClick: this._handleClick,
                        title: $.hint,
                        className: z(t)
                    })
                }, t.contextTypes = {
                    chartWidgetCollection: S.any.isRequired
                }, t
            }(y.PureComponent), te = n("Eyy1"), ne = n("ei7k"), ae = n("emGF"), ie = n("CW80"), oe = n("mMWL"), re = n("ntfI"), se = n("Oy6E"), le = n("sHKj"), ce = n("XWsk"), he = n("S0BX"), ue = {
                text: window.t("Indicators"),
                hint: C.enabled("study_dialog_fundamentals_economy_addons") ? window.t("Indicators & Strategies") : window.t("Indicators"),
                favorites: window.t("Favorites")
            }, de = Object(ne.b)({
                keys: ["/"],
                text: "{0}"
            }), ve = function(e) {
                function t(t, n) {
                    var a, i, o = e.call(this, t, n) || this;
                    return o._promise = null, o._menu = w.a.createRef(), o._handleClick = function() {
                        var e = o.props.studyMarket;
                        o.setState({
                            isActive: !0
                        }, function() {
                            e.isVisible() ? e.hide() : e.show()
                        })
                    }, o._handleSelectIndicator = function(e) {
                        var t, n;
                        e = Object(te.ensureDefined)(e), t = o.context.chartWidgetCollection, "java" !== e.type || null === (n = Object(ie.tryFindStudyLineToolNameByStudyId)(e.studyId)) ? t.activeChartWidget.value().insertStudy(e) : oe.tool.setValue(n)
                    }, o._handleFavoriteIndicatorsChange = function() {
                        var e = o.context.favoriteScriptsModel,
                            t = Object(b.__spreadArrays)(Object(te.ensureDefined)(e).favorites());
                        o.setState({
                            favorites: t
                        }), o._clearCache()
                    }, o._handleMouseEnter = function() {
                        o._prefetchFavorites()
                    }, o._handleWrapClick = function() {
                        o._prefetchFavorites()
                    }, o._handleChangeActiveWidget = function() {
                        o._clearCache()
                    }, o._clearCache = function() {
                        o._promise = null, o.setState({
                            infos: []
                        })
                    }, i = void 0 !== (a = n.favoriteScriptsModel) ? a.favorites() : [], o.state = {
                        isActive: !1,
                        isLoading: !1,
                        favorites: i,
                        infos: []
                    }, o
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                        var e = this.props.studyMarket,
                            t = this.context,
                            n = t.favoriteScriptsModel,
                            a = t.chartWidgetCollection;
                        e.visibilityChanged.subscribe(this, this._setActiveState), void 0 !== n && (n.favoritesChanged().subscribe(this, this._handleFavoriteIndicatorsChange), a.activeChartWidget.subscribe(this._handleChangeActiveWidget))
                    }, t.prototype.componentWillUnmount = function() {
                        var e = this.props.studyMarket,
                            t = this.context,
                            n = t.favoriteScriptsModel,
                            a = t.chartWidgetCollection;
                        e.visibilityChanged.unsubscribe(this, this._setActiveState), void 0 !== n && (n.favoritesChanged().unsubscribe(this, this._handleFavoriteIndicatorsChange), a.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)), this._promise = null
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.state,
                            n = t.isActive,
                            i = t.favorites,
                            l = t.isLoading,
                            c = this.props,
                            h = c.className,
                            u = c.displayMode,
                            d = c.id,
                            v = this.context.chartWidgetCollection;
                        return w.a.createElement(R, {
                            id: d,
                            onMouseEnter: this._handleMouseEnter,
                            onClick: this._handleWrapClick
                        }, w.a.createElement(a, {
                            displayMode: u,
                            className: h,
                            icon: ce,
                            isOpened: n,
                            onClick: this._handleClick,
                            text: ue.text,
                            title: ue.hint,
                            "data-role": "button",
                            "data-name": "open-indicators-dialog",
                            "data-tooltip-hotkey": de
                        }), i.length > 0 && w.a.createElement(I.a, {
                            key: v.activeChartWidget.value().id(),
                            arrow: !0,
                            closeOnClickOutside: !0,
                            title: ue.favorites,
                            ref: this._menu,
                            "data-name": "show-favorite-indicators"
                        }, w.a.createElement("div", {
                            className: j()(he.dropdown)
                        }, w.a.createElement(r, null, window.t("Favorite Indicators")), l && w.a.createElement(o, null), !l && w.a.createElement(w.a.Fragment, null, this.state.infos.length > 0 ? this.state.infos.map(function(t) {
                            return w.a.createElement(A.b, {
                                key: "java" === t.item.type ? t.item.studyId : t.item.pineId,
                                onClick: e._handleSelectIndicator,
                                onClickArg: t.item,
                                label: w.a.createElement("span", {
                                    className: j()(he.label, "apply-overflow-tooltip")
                                }, s(t))
                            })
                        }) : null !== this._promise && w.a.createElement(A.b, {
                            isDisabled: !0,
                            label: window.t("You have no Favorites Indicators yet")
                        })))))
                    }, t.prototype._setActiveState = function(e) {
                        this.setState({
                            isActive: e
                        })
                    }, t.prototype._prefetchFavorites = function() {
                        var e, t, n = this,
                            a = this.context.chartWidgetCollection;
                        null === this._promise && (e = a.activeChartWidget.value().model().model().studyMetaInfoRepository(), this.setState({
                            isLoading: !0
                        }), t = this._promise = Object(ae.getFavoritesInfo)(this.state.favorites, e).then(function(e) {
                            if (t === n._promise) {
                                e = Object(b.__spreadArrays)(e).sort(function(e, t) {
                                    return s(e).localeCompare(s(t))
                                }), n.setState({
                                    infos: e,
                                    isLoading: !1
                                }, function() {
                                    n._menu.current && n._menu.current.update()
                                })
                            }
                        }))
                    },
                    t.contextTypes = {
                        favoriteScriptsModel: k.a.any,
                        chartWidgetCollection: k.a.any.isRequired
                    }, t
            }(w.a.PureComponent), pe = n("PT1i"), me = n("pPtI"), fe = n("4hTN"), ge = n("9dlw"), _e = n("ML8+"), Ce = n("LxhU"), be = n("CX26"), ye = {
                add: window.t("Add")
            }, we = [{
                name: "1",
                label: window.t("minutes", {
                    context: "interval"
                })
            }, {
                name: "1H",
                label: window.t("hours", {
                    context: "interval"
                })
            }, {
                name: "1D",
                label: window.t("days", {
                    context: "interval"
                })
            }, {
                name: "1W",
                label: window.t("weeks", {
                    context: "interval"
                })
            }, {
                name: "1M",
                label: window.t("months", {
                    context: "interval"
                })
            }], Se = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._timeMenu = null, n._setMenuRef = function(e) {
                        n._timeMenu = e
                    }, n._handleChangeInput = function(e) {
                        var t = e.currentTarget.value;
                        /^[0-9]*$/.test(t) && n.setState({
                            inputValue: t
                        })
                    }, n._handleSelectTime = function(e) {
                        n.setState({
                            selectedTime: e
                        }), n._closeMenu()
                    }, n._handleClickAdd = function() {
                        var e, t, a, i, o = n.state,
                            r = o.inputValue,
                            s = o.selectedTime,
                            l = parseInt(r);
                        l === (a = l, i = s, Math.max(1, Math.min(a, Object(me.getMaxResolutionValue)(i)))) && (e = Ce.Interval.parse(s), t = new Ce.Interval(e.kind(), l), n.props.onAdd(t.value()))
                    }, n._toggleMenu = function() {
                        n.state.isOpenedMenu ? n._closeMenu() : n._openMenu()
                    }, n._closeMenu = function() {
                        n.props.onCloseMenu(), n.setState({
                            isOpenedMenu: !1
                        })
                    }, n._openMenu = function() {
                        n.props.onOpenMenu(), n.setState({
                            isOpenedMenu: !0
                        })
                    }, n._getMenuPosition = function() {
                        var e = Object(te.ensureNotNull)(n._timeMenu),
                            t = e.getBoundingClientRect();
                        return {
                            overrideWidth: t.width,
                            x: t.left,
                            y: t.bottom + 1
                        }
                    }, n.state = {
                        inputValue: "1",
                        isOpenedMenu: !1,
                        selectedTime: we[0].name
                    }, n
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e, t = this,
                        n = this.state,
                        a = n.inputValue,
                        i = n.isOpenedMenu,
                        o = n.menuWidth,
                        r = n.selectedTime;
                    return y.createElement("div", {
                        className: z(be.form, (e = {}, e[be.interacting] = i, e))
                    }, y.createElement("input", {
                        className: be.input,
                        maxLength: 4,
                        onChange: this._handleChangeInput,
                        value: a
                    }), y.createElement("div", {
                        className: be.menu,
                        onClick: this._toggleMenu,
                        ref: this._setMenuRef
                    }, we.find(function(e) {
                        return e.name === r
                    }).label, y.createElement(_e.a, {
                        dropped: i
                    })), y.createElement("div", {
                        className: be.add,
                        onClick: this._handleClickAdd
                    }, ye.add), y.createElement(ge.a, {
                        doNotCloseOn: this,
                        isOpened: i,
                        minWidth: o,
                        onClose: this._closeMenu,
                        position: this._getMenuPosition
                    }, we.map(function(e) {
                        return y.createElement(A.b, {
                            dontClosePopup: !0,
                            key: e.name,
                            label: e.label,
                            onClick: t._handleSelectTime,
                            onClickArg: e.name
                        })
                    })))
                }, t
            }(y.PureComponent), n("bf9a"), ke = n("i/MG"), xe = n("8d0Q"), (Me = {})[Ce.ResolutionKind.Seconds] = window.t("Seconds", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Minutes] = window.t("Minutes", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Hours] = window.t("Hours", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Days] = window.t("Days", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Weeks] = window.t("Weeks", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Months] = window.t("Months", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Range] = window.t("Ranges", {
                context: "interval_group_name"
            }), Me[Ce.ResolutionKind.Invalid] = "", Oe = Me, Ee = n("fioS"), Ae = n("aVq2"), Ie = {
                openDialog: window.t("Open Interval Dialog"),
                timeInterval: window.t("Time Interval")
            }, ze = Object(ne.b)({
                keys: [","],
                text: window.t("Number or {0}")
            }), je = function(e) {
                function t(t, n) {
                    var a, i, o, r, s, l, c, h, u, d = e.call(this, t, n) || this;
                    return d._menu = w.a.createRef(), d._handleChangeInterval = function(e) {
                        var t = d.state,
                            n = t.activeInterval,
                            a = t.lastNotQuicked,
                            i = d._getQuicks();
                        d.setState({
                            activeInterval: Object(me.normalizeIntervalString)(e),
                            lastNotQuicked: void 0 === n || i.includes(n) ? a : n
                        })
                    }, d._handleCloseMenu = function() {
                        d.setState({
                            isOpenedFormMenu: !1
                        })
                    }, d._handleOpenMenu = function() {
                        d.setState({
                            isOpenedFormMenu: !0
                        })
                    }, d._bindedForceUpdate = function() {
                        d.forceUpdate()
                    }, d._handleSelectInterval = function(e) {
                        void 0 !== e && e !== pe.linking.interval.value() && (Object(me.setLastUsedResolution)(e), pe.linking.interval.setValue(e))
                    }, d._handleClickFavorite = function(e) {
                        e = Object(te.ensureDefined)(e), d._isIntervalFavorite(e) ? d._handleRemoveFavorite(e) : d._handleAddFavorite(e)
                    }, d._handleAddFavorite = function(e) {
                        var t = d.state.favorites;
                        d.context.favoriteIntervalsService.set(Object(b.__spreadArrays)(t, [e]))
                    }, d._handleRemoveFavorite = function(e) {
                        var t = d.state.favorites;
                        d.context.favoriteIntervalsService.set(t.filter(function(t) {
                            return t !== e
                        }))
                    }, d._handleAddInterval = function(e) {
                        var t = d.state.customs,
                            n = d.context.customIntervalsService,
                            a = Object(me.normalizeIntervalString)(e);
                        void 0 !== n && (d._isIntervalDefault(a) || t.includes(a) || n.set(Object(me.sortResolutions)(Object(b.__spreadArrays)(t, [a])))), d.setState({
                            lastAddedInterval: a
                        })
                    }, d._handleRemoveInterval = function(e) {
                        var t = d.context.customIntervalsService,
                            n = d.state.customs;
                        void 0 !== t && (t.set(n.filter(function(t) {
                            return t !== e
                        })), d._handleRemoveFavorite(e))
                    }, d._getHandleSectionStateChange = function(e) {
                        return function(t) {
                            var n, a = d.state.menuViewState,
                                i = d.context.intervalsMenuViewStateService;
                            i.set(Object(b.__assign)(Object(b.__assign)({}, a), ((n = {})[e] = !t, n)))
                        }
                    }, a = n.chartApiInstance, i = n.favoriteIntervalsService, o = n.customIntervalsService, r = n.intervalsMenuViewStateService, d._customIntervals = C.enabled("custom_resolutions"), l = (s = pe.linking.interval.value()) && Object(me.normalizeIntervalString)(s), c = i.get(), h = void 0 !== o ? o.get() : [], u = r.get(), d._defaultsIntervals = a.defaultResolutions().map(me.normalizeIntervalString), d.state = {
                        isOpenedFormMenu: !1,
                        activeInterval: l,
                        favorites: c,
                        customs: h,
                        menuViewState: u
                    }, d
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context,
                        t = e.favoriteIntervalsService,
                        n = e.customIntervalsService,
                        a = e.intervalsMenuViewStateService;
                    t.getOnChange().subscribe(this, this._handleChangeFavorites), a.getOnChange().subscribe(this, this._handleChangeMenuViewState), void 0 !== n && n.getOnChange().subscribe(this, this._handleChangeCustoms), pe.linking.interval.subscribe(this._handleChangeInterval), pe.linking.intraday.subscribe(this._bindedForceUpdate), pe.linking.supportedResolutions.subscribe(this._bindedForceUpdate)
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.context,
                        t = e.favoriteIntervalsService,
                        n = e.customIntervalsService,
                        a = e.intervalsMenuViewStateService;
                    t.getOnChange().unsubscribe(this, this._handleChangeFavorites), a.getOnChange().unsubscribe(this, this._handleChangeMenuViewState), n && n.getOnChange().unsubscribe(this, this._handleChangeCustoms), pe.linking.interval.unsubscribe(this._handleChangeInterval), pe.linking.intraday.unsubscribe(this._bindedForceUpdate), pe.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate)
                }, t.prototype.componentDidUpdate = function(e, t) {
                    var n = this;
                    this.state.lastAddedInterval && setTimeout(function() {
                        return n.setState({
                            lastAddedInterval: void 0
                        })
                    }, 400)
                }, t.prototype.render = function() {
                    var e, t, n, a, i, o = this,
                        r = this.props,
                        s = r.isShownQuicks,
                        c = r.id,
                        h = this.state,
                        u = h.activeInterval,
                        d = h.customs,
                        v = h.lastNotQuicked,
                        p = this._defaultsIntervals,
                        m = this._getQuicks(),
                        f = Object(me.sortResolutions)(Object(b.__spreadArrays)(m));
                    return void 0 !== u && f.includes(u) ? void 0 !== v && f.push(v) : void 0 !== u && f.push(u), e = (!(!s || 0 === m.length) || void 0) && f.length > 1, t = {}, n = Object(me.mergeResolutions)(p, d), (void 0 !== u ? n.concat(u) : n).filter(me.isAvailable).forEach(function(e) {
                        return t[e] = !0
                    }), a = Object(b.__spreadArrays)(this._createMenuItems(n), this._createIntervalForm()), i = void 0 !== u ? Object(me.getTranslatedResolutionModel)(u) : null, w.a.createElement(R, {
                        id: c
                    }, e && f.map(function(e, n) {
                        var a, i = Object(me.getTranslatedResolutionModel)(e);
                        return w.a.createElement(W, {
                            key: n,
                            className: z(Ae.button, (a = {}, a[Ae.first] = 0 === n, a[Ae.last] = n === f.length - 1, a)),
                            text: w.a.createElement(l, {
                                value: i.mayOmitMultiplier ? void 0 : i.multiplier,
                                metric: i.shortKind
                            }),
                            hint: i.hint,
                            isActive: u === e,
                            isDisabled: !t[e] && e !== v,
                            onClick: o._handleSelectInterval,
                            onClickArg: e,
                            "data-value": e
                        })
                    }), w.a.createElement(I.a, {
                        arrow: Boolean(e),
                        closeOnClickOutside: !0,
                        content: e || null === i ? void 0 : w.a.createElement(R, {
                            className: Ae.menuContent
                        }, w.a.createElement(l, {
                            value: i.mayOmitMultiplier ? void 0 : i.multiplier,
                            metric: i.shortKind
                        })),
                        title: e || null === i ? Ie.timeInterval : i.hint,
                        hotKey: e ? ze : void 0,
                        className: Ae.menu,
                        ref: this._menu
                    }, w.a.createElement("div", {
                        className: Ae.dropdown
                    }, a)))
                }, t.prototype._createMenuItems = function(e) {
                    var t, n, a, i, o, r, s, l, c = this,
                        u = (n = e, a = h(Ce.ResolutionKind.Seconds), i = h(Ce.ResolutionKind.Minutes), o = h(Ce.ResolutionKind.Hours), r = h(Ce.ResolutionKind.Days), s = h(Ce.ResolutionKind.Range), n.forEach(function(e) {
                            var t = Ce.Interval.parse(e);
                            t.isHours() ? o.items.push(e) : t.isMinutes() ? Object(Ce.isHour)(Number(t.multiplier())) ? o.items.push(e) : i.items.push(e) : t.isSeconds() ? a.items.push(e) : t.isDWM() ? r.items.push(e) : t.isRange() && s.items.push(e)
                        }), [a, i, o, r, s].filter(function(e) {
                            return 0 !== e.items.length
                        })).map(function(e, t, n) {
                            return c._renderResolutionsGroup(e, 1 === n.length)
                        }),
                        d = (t = []).concat.apply(t, u);
                    return l = !1, d.filter(function(e, t, n) {
                        var a = !0;
                        return e.type === L.a && (0 !== t && t !== n.length - 1 || (a = !1), l && (a = !1)), l = e.type === L.a, a
                    })
                }, t.prototype._createIntervalForm = function() {
                    return this._customIntervals ? [w.a.createElement(L.a, {
                        key: "custom-interval-separator"
                    }), w.a.createElement(Se, {
                        key: "add-form",
                        onAdd: this._handleAddInterval,
                        onCloseMenu: this._handleCloseMenu,
                        onOpenMenu: this._handleOpenMenu
                    })] : []
                }, t.prototype._renderResolutionsGroup = function(e, t) {
                    var n, a, i, o, r, s = this;
                    if (void 0 === t && (t = !1), n = [], a = e.items.map(function(e) {
                            return s._renderPopupMenuItem(e)
                        }), t) n.push.apply(n, a);
                    else {
                        if (i = this.context.intervalsMenuViewStateService, o = this.state.menuViewState, !i.isAllowed(e.id)) return [];
                        r = w.a.createElement(u, {
                            key: e.id,
                            className: Ae.section,
                            summary: e.name,
                            open: !o[e.id],
                            onStateChange: this._getHandleSectionStateChange(e.id)
                        }, a), n.push(r)
                    }
                    return (!e.mayOmitSeparator || e.items.length > 1) && (n.unshift(w.a.createElement(L.a, {
                        key: "begin-" + e.name
                    })), n.push(w.a.createElement(L.a, {
                        key: "end-" + e.name
                    }))), n
                }, t.prototype._handleChangeFavorites = function(e) {
                    this.setState({
                        lastNotQuicked: void 0,
                        favorites: e
                    })
                }, t.prototype._handleChangeCustoms = function(e) {
                    this.setState({
                        customs: e
                    })
                }, t.prototype._handleChangeMenuViewState = function(e) {
                    var t = this;
                    this.setState({
                        menuViewState: e
                    }, function() {
                        t._menu.current && t._menu.current.update()
                    })
                }, t.prototype._renderPopupMenuItem = function(e) {
                    var t = this.props.isFavoritingAllowed,
                        n = this.state,
                        a = n.activeInterval,
                        i = n.lastAddedInterval,
                        o = e === a,
                        r = Object(me.isAvailable)(e),
                        s = this._isIntervalFavorite(e),
                        l = this._isIntervalDefault(e),
                        h = Object(me.getTranslatedResolutionModel)(e);
                    return w.a.createElement(c, {
                        key: e,
                        interval: e,
                        hint: h.hint,
                        isSignaling: i === e,
                        isFavoritingAllowed: t,
                        isDisabled: !r,
                        isFavorite: s,
                        isRemovable: !l,
                        isActive: o,
                        onClick: this._handleSelectInterval,
                        onClickRemove: this._handleRemoveInterval,
                        onClickFavorite: this._handleClickFavorite,
                        "data-value": e
                    })
                }, t.prototype._isIntervalDefault = function(e) {
                    return this._defaultsIntervals.includes(e)
                }, t.prototype._isIntervalFavorite = function(e) {
                    return this.state.favorites.includes(e)
                }, t.prototype._getQuicks = function(e) {
                    return this.props.isShownQuicks && "small" !== this.props.displayMode ? void 0 === e ? this.state.favorites : e : []
                }, t.contextTypes = {
                    chartApiInstance: S.any.isRequired,
                    favoriteIntervalsService: S.any.isRequired,
                    intervalsMenuViewStateService: S.any.isRequired,
                    customIntervalsService: S.any
                }, t
            }(w.a.PureComponent), Te = n("sbT4"), Re = n("lAXe"), Fe = {
                hint: window.t("Open chart in popup")
            }, Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function() {
                        var e = t.context,
                            n = e.chartWidgetCollection,
                            a = e.windowMessageService,
                            i = e.isFundamental,
                            o = n.activeChartWidget.value();
                        o.withModel(null, function() {
                            a.post(parent, "openChartInPopup", {
                                symbol: o.model().mainSeries().actualSymbol(),
                                interval: o.model().mainSeries().interval(),
                                fundamental: i
                            })
                        })
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.props.className;
                    return y.createElement(i, {
                        className: z(e, Te.button),
                        icon: Re,
                        onClick: this._handleClick,
                        title: Fe.hint
                    })
                }, t.contextTypes = {
                    isFundamental: S.any,
                    chartWidgetCollection: S.any.isRequired,
                    windowMessageService: S.any.isRequired
                }, t
            }(y.PureComponent), He = n("uafl"), We = {
                hint: window.t("Chart Properties")
            }, Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function() {
                        var e = t.context.chartWidgetCollection,
                            n = e.activeChartWidget.value();
                        n.showGeneralChartProperties()
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    return y.createElement(i, Object(b.__assign)({}, this.props, {
                        icon: He,
                        title: We.hint,
                        onClick: this._handleClick
                    }))
                }, t.contextTypes = {
                    chartWidgetCollection: S.any.isRequired
                }, t
            }(y.PureComponent), Pe = n("lxNp"), n("bSeV"), De = n("beCu"), Ve = n("j1f4"), Ue = n("nrMg"), Be = "M21.5 21.5h-14a5 5 0 1 1 .42-9.983 7.5 7.5 0 0 1 14.57 2.106 4.002 4.002 0 0 1-.99 7.877z", Je = {
                strokeDashOffset: Qe = .79 * (Ge = 62.332908630371094),
                strokeDash: Ke = .8 * Ge,
                strokeGap: qe = .21 * Ge,
                strokeDashCheck: 0
            }, Ye = {
                strokeDashOffset: qe + Ke,
                strokeGap: 0,
                strokeDash: Ke + qe,
                strokeDashCheck: 200
            }, Xe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = Je, n
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                        "saved" === this.props.state ? this.setState(Ye) : this._goToNextState(this.props.state)
                    }, t.prototype.componentWillUnmount = function() {
                        this._currentAnimation = void 0
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.state !== e.state && this._goToNextState(e.state)
                    }, t.prototype.render = function() {
                        var e, t = this.state,
                            n = t.strokeDashOffset,
                            a = t.strokeDash,
                            i = t.strokeGap,
                            o = t.strokeDashCheck,
                            r = this.props,
                            s = r.className,
                            l = r.size,
                            c = r.onClick,
                            h = r.state,
                            u = r.isHovered,
                            d = void 0 !== u && u,
                            v = z(Ue.container, s, d && Ue.hovered, ((e = {})[Ue.unsaved] = "unsaved" === h, e[Ue.saving] = "saving" === h, e[Ue.saved] = "saved" === h, e));
                        return y.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: v,
                            version: "1.1",
                            width: l,
                            height: l,
                            viewBox: "0 0 28 28",
                            onClick: c
                        }, y.createElement("g", {
                            fill: "none"
                        }, y.createElement("path", {
                            className: Ue.dottedCloud,
                            stroke: "currentColor",
                            strokeDasharray: "3.5,2.5",
                            d: Be
                        }), y.createElement("path", {
                            className: Ue.spinningCloud,
                            stroke: "currentColor",
                            strokeDasharray: a + " " + i,
                            strokeDashoffset: n,
                            d: Be
                        }), y.createElement("path", {
                            className: Ue.arrowGap,
                            d: "M11 20h6v5h-6z"
                        }), y.createElement("g", {
                            className: Ue.arrow,
                            stroke: "currentColor"
                        }, y.createElement("path", {
                            strokeLinecap: "square",
                            d: "M14.5 14.5v10"
                        }), y.createElement("path", {
                            d: "M11 17l3.5-3.5L18 17"
                        })), y.createElement("g", {
                            className: Ue.check,
                            stroke: "currentColor"
                        }, y.createElement("path", {
                            strokeDasharray: o + "% " + (200 - o) + "%",
                            d: "M10 15l2.5 2.5L18 12"
                        }))))
                    }, t.prototype._goToNextState = function(e) {
                        var t = this;
                        switch (e) {
                            case "unsaved":
                                this.setState(Je);
                                break;
                            case "saving":
                                "unsaved" !== this.props.state && this.setState(Je), this._currentAnimation = Promise.resolve(this._currentAnimation).then(function() {
                                    return t._createSpinAnimationWhile(function() {
                                        return "saving" === t.props.state
                                    })
                                });
                                break;
                            case "saved":
                                this._currentAnimation = Promise.resolve(this._currentAnimation).then(this._createFillGapAnimation.bind(this)).then(this._createCheckAnimation.bind(this))
                        }
                    }, t.prototype._createSpinAnimationWhile = function(e) {
                        var t = this;
                        return this._createSpinAnimation().then(function() {
                            return e() ? t._createSpinAnimationWhile(e) : Promise.resolve()
                        })
                    }, t.prototype._createSpinAnimation = function() {
                        var e = this;
                        return new Promise(function(t) {
                            Object(De.doAnimate)({
                                onStep: function(t, n) {
                                    void 0 !== e._currentAnimation && e.setState({
                                        strokeDashOffset: n
                                    })
                                },
                                onComplete: function() {
                                    return t()
                                },
                                from: Qe,
                                to: Qe + Ge,
                                easing: Ve.easingFunc.linear,
                                duration: 1e3
                            })
                        })
                    },
                    t.prototype._createCheckAnimation = function() {
                        var e = this;
                        return new Promise(function(t) {
                            Object(De.doAnimate)({
                                onStep: function(t, n) {
                                    void 0 !== e._currentAnimation && e.setState({
                                        strokeDashCheck: Math.round(n)
                                    })
                                },
                                onComplete: function() {
                                    return t()
                                },
                                from: 0,
                                to: 200,
                                easing: Ve.easingFunc.linear,
                                duration: 1e3
                            })
                        })
                    }, t.prototype._createFillGapAnimation = function() {
                        var e = this;
                        return new Promise(function(t) {
                            Object(De.doAnimate)({
                                onStep: function(t, n) {
                                    void 0 !== e._currentAnimation && e.setState({
                                        strokeDashOffset: qe + Ke - n,
                                        strokeGap: n,
                                        strokeDash: Ke + qe - n
                                    })
                                },
                                onComplete: function() {
                                    return t()
                                },
                                from: qe,
                                to: 0,
                                easing: Ve.easingFunc.linear,
                                duration: 200
                            })
                        })
                    }, t
            }(y.PureComponent), Ze = n("nPPD"), $e = n("93f4"), et = n("RGo6"), tt = n("bQ7Y"), nt = n("SchQ"), at = C.enabled("widget"), it = Object(Ze.b)(tt, nt), ot = Object(b.__assign)(Object(b.__assign)({}, tt), it), rt = {
                copy: window.t("Copy"),
                makeCopy: window.t("Make a Copy"),
                newChartLayout: window.t("New Chart Layout"),
                loadChartLayout: window.t("Load Chart Layout..."),
                rename: window.t("Rename..."),
                renameChartLayout: window.t("Rename Chart Layout"),
                saveAs: window.t("Make a Copy..."),
                saveChartLayout: window.t("Save"),
                saveChartLayoutLong: window.t("Save all charts for all symbols and intervals on your layout"),
                manageChartLayouts: window.t("Manage Chart Layouts")
            }, st = [], lt = Object(ne.b)({
                keys: ["Ctrl", "S"],
                text: "{0} + {1}"
            }), ct = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._toolWidgetMenuRef = y.createRef(), n._handleTooltipWizardClick = function() {
                        0
                    }, n._handleSaveHoverBegin = function() {
                        n.setState({
                            iconHovered: !0
                        })
                    }, n._handleSaveHoverEnd = function() {
                        n.setState({
                            iconHovered: !1
                        })
                    }, n.state = {
                        iconHovered: !1
                    }, n
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.id,
                        n = e.isReadOnly,
                        i = e.displayMode,
                        o = e.isProcessing,
                        r = e.title,
                        s = e.chartId,
                        l = e.wasChanges,
                        c = e.onCloneChart,
                        h = e.onSaveChart,
                        u = e.hideMenu,
                        d = this.state.iconHovered,
                        v = !n && !u,
                        p = "saved";
                    return !l && r || (p = "unsaved"), o && (p = "saving"), y.createElement(R, null, n ? y.createElement(R, null, y.createElement(a, {
                        id: t,
                        displayMode: i,
                        icon: y.createElement(E.a, {
                            icon: $e
                        }),
                        isDisabled: o,
                        onClick: c,
                        text: rt.copy,
                        title: rt.makeCopy,
                        onMouseEnter: this._handleSaveHoverBegin,
                        onMouseLeave: this._handleSaveHoverEnd,
                        collapseWhen: st
                    })) : y.createElement(R, null, y.createElement(a, {
                        id: t,
                        className: z(et.button, v && et.buttonSmallPadding),
                        displayMode: i,
                        icon: y.createElement(Xe, {
                            size: 28,
                            state: p,
                            isHovered: d
                        }),
                        isDisabled: s && !l || o,
                        onClick: h,
                        text: r || rt.saveChartLayout,
                        title: rt.saveChartLayoutLong,
                        onMouseEnter: this._handleSaveHoverBegin,
                        onMouseLeave: this._handleSaveHoverEnd,
                        theme: ot,
                        collapseWhen: st,
                        "data-tooltip-hotkey": at ? "" : lt
                    }), v && y.createElement(I.a, {
                        ref: this._toolWidgetMenuRef,
                        className: "js-save-load-menu-open-button",
                        arrow: !0,
                        title: rt.manageChartLayouts
                    }, !1, this._renderMenuItems())))
                }, t.prototype._renderMenuItems = function() {
                    var e = this.props,
                        t = e.wasChanges,
                        n = e.isProcessing,
                        a = e.chartId,
                        i = e.onSaveChartFromMenu,
                        o = e.onRenameChart,
                        r = e.onSaveAsChart,
                        s = e.onLoadChart,
                        l = (e.onNewChart, e.isAutoSaveEnabled, e.autoSaveId, e.sharingId, e.onAutoSaveChanged, e.isSharingEnabled, e.onSharingChanged, []);
                    return l.push(y.createElement(A.b, {
                        key: "save",
                        isDisabled: Boolean(n || !t && a),
                        label: rt.saveChartLayout,
                        onClick: i,
                        shortcut: "Ctrl+S"
                    })), void 0 !== a && (l.push(y.createElement(L.a, {
                        key: "existing-chart-section-begin"
                    })), l.push.apply(l, [y.createElement(A.b, {
                        key: "rename",
                        label: rt.rename,
                        onClick: o
                    }), y.createElement(A.b, {
                        key: "save-as",
                        label: rt.saveAs,
                        onClick: r
                    })])), l.push(y.createElement(L.a, {
                        key: "platform-section-begin"
                    })), l.push(y.createElement(A.b, {
                        key: "load-chart",
                        className: "js-save-load-menu-item-load-chart",
                        label: rt.loadChartLayout,
                        onClick: s
                    })), l
                }, t
            }(y.PureComponent), ht = n("PC8g"), ut = function(e) {
                function t(t, n) {
                    var a, i, o = e.call(this, t, n) || this;
                    return o._syncState = function(e) {
                        o.setState(e)
                    }, o._onChangeHasChanges = function(e) {
                        o.setState({
                            wasChanges: e
                        })
                    }, o._onChangeAutoSaveEnabled = function(e) {
                        0
                    }, o._onChangeSharingEnabled = function(e) {
                        o.setState({
                            isSharingEnabled: e
                        })
                    }, o._onChangeTitle = function(e) {
                        o.setState({
                            title: e
                        })
                    }, o._onChangeId = function(e) {
                        o.setState({
                            id: e
                        })
                    }, o._onChartAboutToBeSaved = function() {
                        o.setState({
                            isProcessing: !0
                        })
                    }, o._onChartSaved = function() {
                        o.setState({
                            isProcessing: !1
                        })
                    }, o._handleAutoSaveEnabled = function(e) {
                        0
                    }, o._handleSharingEnabled = function(e) {}, o._handleClickSave = function() {
                        o.context.saveChartService.saveChartOrShowTitleDialog(), o._trackEvent("Save click")
                    }, o._handleClickSaveFromMenu = function() {
                        o.context.saveChartService.saveChartOrShowTitleDialog(), o._trackEvent("Save From Menu")
                    }, o._handleClickClone = function() {
                        o.context.saveChartService.cloneChart()
                    }, o._handleClickSaveAs = function() {
                        o.context.saveChartService.saveChartAs(), o._trackEvent("Make a copy")
                    }, o._handleClickNew = function() {
                        o._trackEvent("New chart layout")
                    }, o._handleClickLoad = function() {
                        o.context.loadChartService.showLoadDialog(), o._trackEvent("Load chart layout")
                    }, o._handleHotkey = function() {
                        o.context.loadChartService.showLoadDialog()
                    }, o._handleClickRename = function() {
                        o.context.saveChartService.renameChart(), o._trackEvent("Rename")
                    }, a = n.chartWidgetCollection, i = n.chartChangesWatcher, n.saveChartService, n.sharingChartService, o.state = {
                        isAuthenticated: window.is_authenticated,
                        isProcessing: !1,
                        id: a.metaInfo.id.value(),
                        title: a.metaInfo.name.value(),
                        wasChanges: i.hasChanges(),
                        iconHovered: !1
                    }, o
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                        var e = this.props,
                            t = e.chartSaver,
                            n = e.isFake,
                            a = e.stateSyncEmitter,
                            i = this.context,
                            o = i.chartWidgetCollection,
                            r = i.chartChangesWatcher;
                        i.saveChartService, i.sharingChartService;
                        n ? a.on("change", this._syncState) : (r.getOnChange().subscribe(this, this._onChangeHasChanges), o.metaInfo.name.subscribe(this._onChangeTitle), o.metaInfo.id.subscribe(this._onChangeId), this._hotkeys = Object(Pe.createGroup)({
                            desc: "Save/Load"
                        }), this._hotkeys.add({
                            desc: window.t("Load Chart Layout"),
                            handler: this._handleHotkey,
                            hotkey: 190
                        }), t.chartSaved().subscribe(this, this._onChartSaved), t.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.subscribe(this, this._onLoginStateChange))
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        this.props.isFake || t !== this.state && this.props.stateSyncEmitter.emit("change", this.state)
                    },
                    t.prototype.componentWillUnmount = function() {
                        var e = this.props,
                            t = e.chartSaver,
                            n = e.isFake,
                            a = e.stateSyncEmitter,
                            i = this.context,
                            o = i.chartWidgetCollection,
                            r = i.chartChangesWatcher;
                        i.saveChartService, i.sharingChartService;
                        n ? a.off("change", this._syncState) : (r.getOnChange().unsubscribe(this, this._onChangeHasChanges), o.metaInfo.name.unsubscribe(this._onChangeTitle), o.metaInfo.id.unsubscribe(this._onChangeId), Object(te.ensureDefined)(this._hotkeys).destroy(), t.chartSaved().unsubscribe(this, this._onChartSaved), t.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.unsubscribe(this, this._onLoginStateChange))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.isReadOnly,
                            n = e.displayMode,
                            a = e.id,
                            i = (e.isFake, this.state),
                            o = i.isProcessing,
                            r = i.isAuthenticated,
                            s = i.title,
                            l = i.id,
                            c = i.wasChanges,
                            h = (i.isAutoSaveEnabled, i.isSharingEnabled, {
                                displayMode: n,
                                isReadOnly: t,
                                isAuthenticated: r,
                                isProcessing: o,
                                wasChanges: c,
                                title: s,
                                id: a,
                                chartId: null !== l ? l : void 0,
                                onCloneChart: this._handleClickClone,
                                onSaveChart: this._handleClickSave,
                                onSaveChartFromMenu: this._handleClickSaveFromMenu,
                                onRenameChart: this._handleClickRename,
                                onSaveAsChart: this._handleClickSaveAs,
                                onLoadChart: this._handleClickLoad
                            });
                        return y.createElement(ct, Object(b.__assign)({}, h))
                    }, t.prototype._onLoginStateChange = function() {
                        this.setState({
                            isAuthenticated: window.is_authenticated
                        })
                    }, t.prototype._trackEvent = function(e) {
                        0
                    }, t.contextTypes = {
                        chartWidgetCollection: S.any.isRequired,
                        chartChangesWatcher: S.any.isRequired,
                        saveChartService: S.any.isRequired,
                        sharingChartService: S.any,
                        loadChartService: S.any.isRequired
                    }, t
            }(y.PureComponent), dt = n("FQhm"), vt = {
                takeSnapshot: window.t("Take a snapshot")
            }, pt = Object(ne.b)({
                keys: ["Alt", "S"],
                text: "{0} + {1}"
            }), mt = n("koZ+"), Xt = function(e) {
                return y.createElement(F.a, {
                    id: e.id,
                    className: e.className,
                    isDisabled: e.isProcessing,
                    onClick: e.onClick,
                    title: e.tooltip,
                    "data-tooltip-hotkey": e.hotkey,
                    icon: mt
                })
            }, (Zt = function(e) {
                function t(t, n) {
                    var a = e.call(this, t, n) || this;
                    return a._handleClick = function(e) {
                        if (!C.enabled("show_dialog_on_snapshot_ready")) {
                            if (a.state.isProcessing) return;
                            a.setState({
                                isProcessing: !0
                            }), dt.subscribe("onScreenshotReady", function() {
                                return a.setState({
                                    isProcessing: !1
                                })
                            }, null, !0)
                        }
                        a.context.chartWidgetCollection.takeScreenshot()
                    }, a.state = {
                        isProcessing: !1
                    }, a
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.id,
                        a = this.state.isProcessing;
                    return y.createElement(Xt, {
                        id: n,
                        className: t,
                        isProcessing: a,
                        onClick: this._handleClick,
                        tooltip: vt.takeSnapshot,
                        hotkey: pt
                    })
                }, t
            }(y.PureComponent)).contextTypes = {
                chartWidgetCollection: S.any.isRequired
            }, ft = Zt, gt = n("pZll"), _t = n("h24c"), Ct = n("X7WP"), bt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._actions = null, t._input = null, t._promise = null, t._preventDefault = function(e) {
                        e.preventDefault()
                    }, t._trackSymbolSearchOpenEvent = function() {
                        Object(ht.trackEvent)("GUI", "SS", "main search")
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                    var e = this,
                        t = Object(te.ensureNotNull)(this._input),
                        n = this._promise = Object(gt.symbolSearchUIService)().bindToInput(t, {
                            spreadActions: this._actions || void 0,
                            syncWithChartWidget: !0,
                            syncOnBlur: !0,
                            onPopupOpen: this._trackSymbolSearchOpenEvent
                        }).then(function() {
                            n === e._promise && null !== e._actions && Array.from(e._actions.querySelectorAll("button")).forEach(function(e) {
                                return e.tabIndex = -1
                            })
                        })
                }, t.prototype.componentWillUnmount = function() {
                    this._promise = null
                }, t.prototype.render = function() {
                    var e, t = this,
                        n = this.props,
                        a = n.isActionsVisible,
                        i = n.isExpanded,
                        o = n.onFocus,
                        r = n.onBlur,
                        s = n.id,
                        l = n.className;
                    return y.createElement("div", {
                        id: s,
                        className: z(Ct.wrap, l)
                    }, y.createElement("div", {
                        className: z(Ct.inner, (e = {}, e[Ct.isExpanded] = i, e))
                    }, y.createElement("input", {
                        className: Ct.input,
                        maxLength: 1e3,
                        onBlur: r,
                        onFocus: o,
                        ref: function(e) {
                            return t._input = e
                        },
                        type: "text",
                        tabIndex: -1
                    }), Object(_t.canShowSpreadActions)() && a && y.createElement("div", {
                        className: Ct.actions,
                        onMouseDown: this._preventDefault,
                        ref: function(e) {
                            return t._actions = e
                        }
                    })))
                }, t
            }(y.PureComponent), yt = n("jKyl"), wt = n("23di"), St = Object(Ze.a)(A.a, wt), kt = {
                text: window.t("Save Indicator template...")
            }, xt = n("8RO/"), Mt = n("s0T6"), Ot = n("fESK"), Et = Object(Ze.a)(A.a, {
                labelRow: Ot.labelRow,
                toolbox: Ot.toolbox,
                item: Ot.titleItem
            }), At = Object(Ze.a)(A.a, {
                item: Ot.item
            }), It = n("9NBK"), zt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function(e) {
                        e.stopPropagation();
                        var n = t.props;
                        (0, n.onApply)(n.item)
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.item;
                    return y.createElement("div", {
                        className: z(t, It.item, "apply-common-tooltip"),
                        onClick: this._handleClick,
                        title: n.name
                    }, y.createElement("div", {
                        className: It.round
                    }, n.name.length > 0 ? n.name[0].toUpperCase() : " "))
                }, t
            }(y.PureComponent), jt = n("gla1"), Tt = n("PN6A"), Rt = n("zgWb"), Ft = n("yGrx"), Nt = {
                title: Object(G.t)("Templates"),
                tooltip: Object(G.t)("Indicator Templates")
            }, Ht = w.a.createContext(null), Wt = function(e) {
                function t(t, n) {
                    var a, i, o, r, s = e.call(this, t) || this;
                    return s._handleFavorTemplate = function(e) {
                        if (s.props.isShownQuicks) {
                            var t = e.name;
                            s._isTemplateFavorite(t) ? s._removeFavoriteTemplate(t) : s._addFavoriteTemplate(t)
                        }
                    }, s._handleSaveTemplate = function() {
                        s.context.studyTemplates.showSaveAsDialog()
                    }, s._handleApplyTemplate = function(e) {
                        s._handleClose(), s.context.studyTemplates.applyTemplate(e.name)
                    }, s._handleRemoveTemplate = function(e) {
                        s._handleClose(), s.context.studyTemplates.deleteStudyTemplate(e.name)
                    }, s._handleClose = function() {
                        s._handleToggleDropdown(!1)
                    }, s._handleToggleDropdown = function(e) {
                        var t = s.state.isActive,
                            n = "boolean" == typeof e ? e : !t;
                        s.setState({
                            isActive: n
                        })
                    }, s._handleDropdownOpen = function() {
                        var e = s.context.chartWidgetCollection,
                            t = e.activeChartWidget.value().model(),
                            n = Object(xt.a)(t);
                        s.setState({
                            indicatorNames: Object(xt.b)(n.indicators)
                        })
                    }, a = n.favoriteStudyTemplatesService, i = n.studyTemplates, o = void 0 !== a ? a.get() : [], r = i.list(), s.state = {
                        isActive: !1,
                        studyTemplatesList: r,
                        favorites: o
                    }, s
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context,
                        t = e.favoriteStudyTemplatesService,
                        n = e.studyTemplates;
                    n.getOnChange().subscribe(this, this._handleTemplatesChange), n.refreshStudyTemplateList(), void 0 !== t && t.getOnChange().subscribe(this, this._handleFavoritesChange)
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.context,
                        t = e.favoriteStudyTemplatesService;
                    e.studyTemplates.getOnChange().unsubscribe(this, this._handleTemplatesChange), void 0 !== t && t.getOnChange().unsubscribe(this, this._handleFavoritesChange)
                }, t.prototype.render = function() {
                    var e = this.state,
                        t = e.studyTemplatesList,
                        n = e.favorites,
                        a = this.props,
                        i = a.isShownQuicks,
                        o = a.className,
                        r = a.displayMode,
                        s = a.id;
                    return w.a.createElement(Ht.Provider, {
                        value: this.context.templatesMenuViewStateService || null
                    }, w.a.createElement(m, {
                        id: s,
                        className: o,
                        mode: r,
                        templates: t,
                        favorites: n,
                        onMenuOpen: this._handleDropdownOpen,
                        onTemplateFavorite: i ? this._handleFavorTemplate : void 0,
                        onTemplateSelect: this._handleApplyTemplate,
                        onTemplateRemove: this._handleRemoveTemplate,
                        onTemplateSave: this._handleSaveTemplate
                    }))
                }, t.prototype._handleTemplatesChange = function() {
                    this.setState({
                        studyTemplatesList: this.context.studyTemplates.list()
                    })
                }, t.prototype._handleFavoritesChange = function(e) {
                    this.props.isShownQuicks && this.setState({
                        favorites: e
                    })
                }, t.prototype._removeFavoriteTemplate = function(e) {
                    var t, n = this.context.favoriteStudyTemplatesService;
                    void 0 !== n && (t = this.state.favorites, n.set(t.filter(function(t) {
                        return t !== e
                    })))
                }, t.prototype._addFavoriteTemplate = function(e) {
                    var t, n = this.context.favoriteStudyTemplatesService;
                    void 0 !== n && (t = this.state.favorites, n.set(Object(b.__spreadArrays)(t, [e])))
                }, t.prototype._isTemplateFavorite = function(e) {
                    return this.state.favorites.includes(e)
                }, t.contextTypes = {
                    favoriteStudyTemplatesService: k.a.any,
                    studyTemplates: k.a.any.isRequired,
                    chartWidgetCollection: k.a.any.isRequired,
                    templatesMenuViewStateService: k.a.any
                }, t
            }(w.a.PureComponent), n("HbRj"), Lt = n("S+Ii"), Pt = n("wnRL"), Dt = n("2xRE"), Vt = {
                undoHint: window.t("Undo {0}"),
                redoHint: window.t("Redo {0}")
            }, Ut = {
                undoHotKey: Object(ne.b)({
                    keys: ["Ctrl", "Z"],
                    text: "{0} + {1}"
                }),
                redoHotKey: Object(ne.b)({
                    keys: ["Ctrl", "Y"],
                    text: "{0} + {1}"
                })
            }, Bt = Object(Ze.b)(tt, Lt, {
                buttonUndo: "button",
                buttonRedo: "button"
            }), Gt = Object(b.__assign)(Object(b.__assign)({}, tt), {
                button: Bt.buttonUndo
            }), Kt = Object(b.__assign)(Object(b.__assign)({}, tt), {
                button: Bt.buttonRedo
            }), qt = function(e) {
                function t(t, n) {
                    var a = e.call(this, t, n) || this;
                    return a._handleClickUndo = function() {
                        Object(ht.trackEvent)("GUI", "Undo"), a.context.chartWidgetCollection.undoHistory.undo()
                    }, a._handleClickRedo = function() {
                        Object(ht.trackEvent)("GUI", "Redo"), a.context.chartWidgetCollection.undoHistory.redo()
                    }, a.state = a._getStateFromUndoHistory(), a
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.chartWidgetCollection;
                    e.undoHistory.redoStack().onChange().subscribe(this, this._onChangeStack), e.undoHistory.undoStack().onChange().subscribe(this, this._onChangeStack)
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.context.chartWidgetCollection;
                    e.undoHistory.redoStack().onChange().unsubscribe(this, this._onChangeStack), e.undoHistory.undoStack().onChange().unsubscribe(this, this._onChangeStack)
                }, t.prototype.render = function() {
                    var e = this.props.id,
                        t = this.state,
                        n = t.isEnabledRedo,
                        a = t.isEnabledUndo,
                        i = t.redoStack,
                        o = t.undoStack;
                    return y.createElement(R, {
                        id: e
                    }, y.createElement(F.a, {
                        icon: Pt,
                        isDisabled: !a,
                        onClick: this._handleClickUndo,
                        title: a ? Vt.undoHint.format(o) : void 0,
                        "data-tooltip-hotkey": a ? Ut.undoHotKey : void 0,
                        theme: Gt
                    }), y.createElement(F.a, {
                        icon: Dt,
                        isDisabled: !n,
                        onClick: this._handleClickRedo,
                        title: n ? Vt.redoHint.format(i) : void 0,
                        "data-tooltip-hotkey": n ? Ut.redoHotKey : void 0,
                        theme: Kt
                    }))
                }, t.prototype._onChangeStack = function() {
                    var e = this._getStateFromUndoHistory();
                    this.setState(e)
                }, t.prototype._getStateFromUndoHistory = function() {
                    var e = this.context.chartWidgetCollection,
                        t = e.undoHistory.undoStack(),
                        n = e.undoHistory.redoStack(),
                        a = n.head(),
                        i = t.head();
                    return {
                        isEnabledRedo: !n.isEmpty(),
                        isEnabledUndo: !t.isEmpty(),
                        redoStack: a ? a.text() : "",
                        undoStack: i ? i.text() : ""
                    }
                }, t.contextTypes = {
                    chartWidgetCollection: S.any.isRequired
                }, t
            }(y.PureComponent), Qt = n("i8i4"), Jt = n("XmVn"), Yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._ref = null, t._update = function() {
                        t.forceUpdate()
                    }, t._setRef = function(e) {
                        t._ref = e
                    }, t._handleMeasure = function(e) {
                        var n = e.width;
                        t.props.width.setValue(n)
                    }, t
                }
                return Object(b.__extends)(t, e), t.prototype.componentDidMount = function() {
                    var e, t = this.props,
                        n = t.element,
                        a = t.isFake,
                        i = t.width;
                    a ? i.subscribe(this._update) : (e = Object(te.ensureNotNull)(this._ref), Qt.findDOMNode(e).appendChild(n))
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.props,
                        t = e.width;
                    e.isFake && t.unsubscribe(this._update)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.isFake,
                        n = void 0 !== t && t,
                        a = e.width;
                    return y.createElement(Jt, {
                        shouldMeasure: !n,
                        whitelist: ["width"],
                        onMeasure: this._handleMeasure
                    }, y.createElement(R, {
                        ref: this._setRef,
                        style: n ? {
                            width: a.value()
                        } : void 0
                    }))
                }, t
            }(y.PureComponent), n.d(t, "getRestrictedToolSet", function() {
                return _
            })
        },
        nrMg: function(e, t, n) {
            e.exports = {
                dottedCloud: "dottedCloud-1Vw3lVny",
                check: "check-3V48_rMp",
                spinningCloud: "spinningCloud-2fkbB-rw",
                arrow: "arrow-1zkKEROH",
                arrowGap: "arrowGap-gjAe6jEn",
                container: "container-riYIb01a",
                unsaved: "unsaved-2Kg_w3Vw",
                hovered: "hovered-18DzoW0E",
                saving: "saving-31YVVfHU",
                saved: "saved-2kLd4nmd"
            }
        },
        ntfI: function(e, t, n) {
            "use strict";
            var a, i, o, r, s, l, c;
            n.d(t, "a", function() {
                    return c
                }), a = n("mrSG"), i = n("q1tI"), o = n("TSYQ"), r = n("j1f4"), s = n("K5ke"),
                function(e) {
                    e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
                }(l || (l = {})), c = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n._stateChangeTimeout = null, n.state = {
                            state: l.Initial
                        }, n
                    }
                    return Object(a.__extends)(t, e), t.prototype.render = function() {
                            var e, t = this.props,
                                n = t.className,
                                a = t.color,
                                r = void 0 === a ? "black" : a,
                                l = o(s.item, ((e = {})[s[r]] = Boolean(r), e));
                            return i.createElement("span", {
                                className: o(s.loader, n, this._getStateClass())
                            }, i.createElement("span", {
                                className: l
                            }), i.createElement("span", {
                                className: l
                            }), i.createElement("span", {
                                className: l
                            }))
                        },
                        t.prototype.componentDidMount = function() {
                            var e = this;
                            this.setState({
                                state: l.Appear
                            }), this._stateChangeTimeout = setTimeout(function() {
                                e.setState({
                                    state: l.Active
                                })
                            }, 2 * r.dur)
                        }, t.prototype.componentWillUnmount = function() {
                            this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                        }, t.prototype._getStateClass = function() {
                            switch (this.state.state) {
                                case l.Initial:
                                    return "loader-initial";
                                case l.Appear:
                                    return "loader-appear";
                                default:
                                    return ""
                            }
                        }, t
                }(i.PureComponent)
        },
        pqsj: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>'
        },
        pr86: function(e, t, n) {
            "use strict";
            var a, i, o, r, s, l, c, h;
            n.d(t, "a", function() {
                return h
            }), a = n("mrSG"), n("YFKU"), i = n("q1tI"), o = n("TSYQ"), r = n("fEjm"), s = n("HHbT"), l = n("GWvR"), c = {
                add: window.t("Add to favorites"),
                remove: window.t("Remove from favorites")
            }, h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function(e) {
                        var n = t.props,
                            a = n.onClick,
                            i = n.onClickArg;
                        a && a(i, e)
                    }, t
                }
                return Object(a.__extends)(t, e), t.prototype.render = function() {
                    var e, t = this.props.isFilled;
                    return i.createElement("span", {
                        className: o(r.star, "apply-common-tooltip", (e = {}, e[r.checked] = t, e)),
                        dangerouslySetInnerHTML: {
                            __html: t ? s : l
                        },
                        onClick: this._handleClick,
                        title: t ? c.remove : c.add
                    })
                }, t
            }(i.PureComponent)
        },
        s0T6: function(e, t, n) {
            e.exports = {
                description: "description-3yVDcIyu"
            }
        },
        sHKj: function(e, t, n) {
            e.exports = {
                title: "title-17mjZSJk"
            }
        },
        sbT4: function(e, t, n) {
            e.exports = {
                button: "button-3wAyKO3i"
            }
        },
        t2Sj: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>'
        },
        uafl: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>'
        },
        wnRL: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>'
        },
        yGrx: function(e, t, n) {
            e.exports = {
                wrap: "wrap-15BhAobm",
                full: "full-2VMT2UlC",
                first: "first-1vAzGgSq",
                last: "last-xMjAcadb",
                medium: "medium-1BEsHMFf",
                loader: "loader-1uURoPBh",
                buttonWithFavorites: "buttonWithFavorites-3S-vuMxR",
                menu: "menu-pdQdEiwV"
            }
        },
        zgWb: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18.268 9.44l4.586-4.586-.708-.708-4.585 4.586a1.5 1.5 0 0 1-2.122 0l-3.171-3.171a2.5 2.5 0 0 0-3.536 0l-4.586 4.585.708.708 4.585-4.586a1.5 1.5 0 0 1 2.122 0l3.171 3.171a2.5 2.5 0 0 0 3.536 0zm0 5l4.586-4.586-.708-.708-4.585 4.586a1.5 1.5 0 0 1-2.122 0l-3.171-3.171a2.5 2.5 0 0 0-3.536 0l-4.586 4.585.708.708 4.585-4.586a1.5 1.5 0 0 1 2.122 0l3.171 3.171a2.5 2.5 0 0 0 3.536 0zM11 24v-6h-1v6h1zm-3 0v-4H7v4h1zm6 0v-4h-1v4h1zm-9 0v-1H4v1h1zm15-3h-4v-1h4v-4h1v4h4v1h-4v4h-1v-4z"/></svg>'
        }
    }
]);