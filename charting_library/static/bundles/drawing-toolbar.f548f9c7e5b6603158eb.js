(window.webpackJsonp = window.webpackJsonp || []).push([
    ["drawing-toolbar"], {
        "5f7t": function(e, t, o) {
            "use strict";

            function n(e) {
                var t, o = e.id,
                    n = e.activeClass,
                    i = e.children,
                    a = e.className,
                    r = e.icon,
                    s = e.isActive,
                    l = e.isGrayed,
                    d = e.isHidden,
                    p = e.isTransparent,
                    h = e.theme,
                    m = void 0 === h ? R : h,
                    g = e.onClick,
                    v = e.title,
                    f = e.buttonHotKey;
                return u.createElement("div", Object(c.__assign)({
                    id: o,
                    className: b(m.button, a, s && n, (t = {}, t["apply-common-tooltip common-tooltip-vertical"] = Boolean(v), t[m.isActive] = s, t[m.isGrayed] = l, t[m.isHidden] = d, t[m.isTransparent] = p, t)),
                    onClick: g,
                    title: v,
                    "data-role": "button",
                    "data-tooltip-hotkey": f
                }, Object(z.a)(e)), u.createElement("div", {
                    className: m.bg
                }, r && ("string" == typeof r ? u.createElement(j.a, {
                    className: m.icon,
                    icon: r
                }) : u.createElement("span", {
                    className: m.icon
                }, r)), i))
            }

            function i(e) {
                var t = e.id,
                    o = e.action,
                    i = e.isActive,
                    a = e.isHidden,
                    r = e.isTransparent,
                    s = e.toolName;
                return u.createElement(n, {
                    id: t,
                    icon: O.a[s].icon,
                    isActive: i,
                    isHidden: a,
                    isTransparent: r,
                    onClick: o,
                    title: O.a[s].localizedName,
                    "data-name": s
                })
            }

            function a(e) {
                var t = e.direction,
                    o = e.theme,
                    n = void 0 === o ? Ce : o;
                return u.createElement("svg", {
                    xmlns: Oe,
                    width: "9",
                    height: "27",
                    viewBox: "0 0 9 27",
                    className: b(n.container, "right" === t ? n.mirror : null),
                    onContextMenu: _e.a
                }, u.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, u.createElement("path", {
                    className: n.background,
                    d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z"
                }), u.createElement("path", {
                    className: n.arrow,
                    d: "M5.5 10l-2 3.5 2 3.5"
                })))
            }

            function r() {
                Object(ee.saveDefaultProperties)(!0), _.properties().childs().magnet.setValue(!_.properties().childs().magnet.value()), Object(ee.saveDefaultProperties)(!1)
            }

            function s() {
                Object(be.trackEvent)("GUI", "Magnet mode", "Weak"), Object(ee.saveDefaultProperties)(!0), _.properties().childs().magnetMode.setValue(ge.MagnetMode.WeakMagnet), _.properties().childs().magnet.setValue(!0), Object(ee.saveDefaultProperties)(!1)
            }

            function l() {
                Object(be.trackEvent)("GUI", "Magnet mode", "Strong"), Object(ee.saveDefaultProperties)(!0), _.properties().childs().magnetMode.setValue(ge.MagnetMode.StrongMagnet), _.properties().childs().magnet.setValue(!0), Object(ee.saveDefaultProperties)(!1)
            }
            var c, u, d, p, h, m, b, g, v, f, _, T, y, w, C, k, O, S, E, M, L, N, A, j, D, P, x, B, W, V, F, I, z, R, G, H, U, K, Q, q, J, Y, X, Z, $, ee, te, oe, ne, ie, ae, re, se, le, ce, ue, de, pe, he, me, be, ge, ve, fe, _e, Te, ye, we, Ce, ke, Oe, Se, Ee, Me, Le, Ne, Ae, je, De, Pe, xe;
            o.r(t), c = o("mrSG"), u = o("q1tI"), d = o.n(u), p = o("i8i4"), h = o("Eyy1"), o("YFKU"), o("bf9a"), m = o("17x9"), b = o("TSYQ"), g = o.n(b), v = o("Vdly"), f = o("Kxc7"), _ = o("mMWL"), T = o("zL3Q"), y = o("FQhm"), w = o("aIyQ"), C = o.n(w), k = o("qFKp"), O = o("MP+M"), S = function() {
                    function e(e) {
                        this._drawingsAccess = e || {
                            tools: [],
                            type: "black"
                        }
                    }
                    return e.prototype.isToolEnabled = function(e) {
                        var t = this._findTool(e);
                        return !(!t || !t.grayed) || ("black" === this._drawingsAccess.type ? !t : !!t)
                    }, e.prototype.isToolGrayed = function(e) {
                        var t = this._findTool(e);
                        return Boolean(t && t.grayed)
                    }, e.prototype._findTool = function(e) {
                        return this._drawingsAccess.tools.find(function(t) {
                            return t.name === e
                        })
                    }, e
                }(), E = o("/3z9"), M = o("+GxX"), L = [{
                    id: "linetool-group-cursors",
                    title: window.t("Cursors"),
                    items: [{
                        name: "cursor"
                    }, {
                        name: "dot"
                    }, {
                        name: "arrow"
                    }, {
                        name: "eraser"
                    }]
                }, {
                    id: "linetool-group-trend-line",
                    title: window.t("Trend Line Tools"),
                    items: [{
                        name: "LineToolTrendLine"
                    }, {
                        name: "LineToolInfoLine"
                    }, {
                        name: "LineToolTrendAngle"
                    }, {
                        name: "LineToolHorzLine",
                        hotkeyHash: E.Modifiers.Alt + 72
                    }, {
                        name: "LineToolHorzRay"
                    }, {
                        name: "LineToolVertLine",
                        hotkeyHash: E.Modifiers.Alt + 86
                    }, {
                        name: "LineToolCrossLine",
                        hotkeyHash: E.Modifiers.Alt + 67
                    }, {
                        name: "LineToolArrow"
                    }, {
                        name: "LineToolRay"
                    }, {
                        name: "LineToolExtended"
                    }, {
                        name: "LineToolParallelChannel"
                    }, {
                        name: "LineToolDisjointAngle"
                    }, {
                        name: "LineToolFlatBottom"
                    }, null].filter(Boolean)
                }, {
                    id: "linetool-group-gann-and-fibonacci",
                    title: window.t("Gann and Fibonacci Tools"),
                    items: [{
                        name: "LineToolPitchfork"
                    }, {
                        name: "LineToolSchiffPitchfork2"
                    }, {
                        name: "LineToolSchiffPitchfork"
                    }, {
                        name: "LineToolInsidePitchfork"
                    }, {
                        name: "LineToolPitchfan"
                    }, {
                        name: "LineToolGannSquare"
                    }, {
                        name: "LineToolGannComplex"
                    }, {
                        name: "LineToolGannFixed"
                    }, {
                        name: "LineToolGannFan"
                    }, {
                        name: "LineToolFibRetracement"
                    }, {
                        name: "LineToolTrendBasedFibExtension"
                    }, {
                        name: "LineToolFibSpeedResistanceFan"
                    }, {
                        name: "LineToolFibTimeZone"
                    }, {
                        name: "LineToolTrendBasedFibTime"
                    }, {
                        name: "LineToolFibCircles"
                    }, {
                        name: "LineToolFibSpiral"
                    }, {
                        name: "LineToolFibSpeedResistanceArcs"
                    }, {
                        name: "LineToolFibWedge"
                    }, {
                        name: "LineToolFibChannel"
                    }]
                }, {
                    id: "linetool-group-geometric-shapes",
                    title: window.t("Geometric Shapes"),
                    items: [{
                        name: "LineToolBrush"
                    }, {
                        name: "LineToolRectangle"
                    }, {
                        name: "LineToolRotatedRectangle"
                    }, {
                        name: "LineToolEllipse"
                    }, {
                        name: "LineToolTriangle"
                    }, {
                        name: "LineToolPolyline"
                    }, {
                        name: "LineToolBezierQuadro"
                    }, {
                        name: "LineToolBezierCubic"
                    }, {
                        name: "LineToolArc"
                    }]
                }, {
                    id: "linetool-group-annotation",
                    title: window.t("Annotation Tools"),
                    items: [{
                        name: "LineToolText"
                    }, {
                        name: "LineToolTextAbsolute"
                    }, {
                        name: "LineToolNote"
                    }, {
                        name: "LineToolNoteAbsolute"
                    }, {
                        name: "LineToolCallout"
                    }, {
                        name: "LineToolBalloon"
                    }, {
                        name: "LineToolPriceLabel"
                    }, {
                        name: "LineToolArrowMarkLeft"
                    }, {
                        name: "LineToolArrowMarkRight"
                    }, {
                        name: "LineToolArrowMarkUp"
                    }, {
                        name: "LineToolArrowMarkDown"
                    }, {
                        name: "LineToolFlagMark"
                    }]
                }, {
                    id: "linetool-group-patterns",
                    title: window.t("Patterns"),
                    items: [{
                        name: "LineTool5PointsPattern"
                    }, {
                        name: "LineToolCypherPattern"
                    }, {
                        name: "LineToolABCD"
                    }, {
                        name: "LineToolTrianglePattern"
                    }, {
                        name: "LineToolThreeDrivers"
                    }, {
                        name: "LineToolHeadAndShoulders"
                    }, {
                        name: "LineToolElliottImpulse"
                    }, {
                        name: "LineToolElliottTriangle"
                    }, {
                        name: "LineToolElliottTripleCombo"
                    }, {
                        name: "LineToolElliottCorrection"
                    }, {
                        name: "LineToolElliottDoubleCombo"
                    }, {
                        name: "LineToolCircleLines"
                    }, {
                        name: "LineToolTimeCycles"
                    }, {
                        name: "LineToolSineLine"
                    }]
                }, {
                    id: "linetool-group-prediction-and-measurement",
                    title: window.t("Prediction and Measurement Tools"),
                    items: [{
                        name: "LineToolRiskRewardLong"
                    }, {
                        name: "LineToolRiskRewardShort"
                    }, {
                        name: "LineToolPrediction"
                    }, {
                        name: "LineToolDateRange"
                    }, {
                        name: "LineToolPriceRange"
                    }, {
                        name: "LineToolDateAndPriceRange"
                    }, {
                        name: "LineToolBarsPattern"
                    }, Object(M.isFeatureEnabled)("remove-line-tool-ghost-feed") ? null : {
                        name: "LineToolGhostFeed"
                    }, {
                        name: "LineToolProjection"
                    }].filter(Boolean)
                }], N = o("OiSa"), A = o("XmVn"), j = o("jjrI"), D = o("beCu"), P = o("j1f4"), x = o("uJ8n"), B = o("Vike"), W = {
                    isVisibleScrollbar: !0
                }, V = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._scroll = null, o._handleScrollTop = function() {
                            o.animateTo(Math.max(0, o.currentPosition() - (o.state.heightWrap - 50)))
                        }, o._handleScrollBot = function() {
                            o.animateTo(Math.min((o.state.heightContent || 0) - (o.state.heightWrap || 0), o.currentPosition() + (o.state.heightWrap - 50)))
                        }, o._handleResizeWrap = function(e) {
                            var t = e.height;
                            o.setState({
                                heightWrap: t
                            })
                        }, o._handleResizeContent = function(e) {
                            var t = e.height;
                            o.setState({
                                heightContent: t
                            })
                        }, o._handleScroll = function() {
                            var e = o.props.onScroll;
                            e && e(o.currentPosition(), o.isAtTop(), o.isAtBot()), o._checkButtonsVisibility()
                        }, o._checkButtonsVisibility = function() {
                            var e = o.state,
                                t = e.isVisibleTopButton,
                                n = e.isVisibleBotButton,
                                i = o.isAtTop(),
                                a = o.isAtBot();
                            i || t ? i && t && o.setState({
                                isVisibleTopButton: !1
                            }) : o.setState({
                                isVisibleTopButton: !0
                            }), a || n ? a && n && o.setState({
                                isVisibleBotButton: !1
                            }) : o.setState({
                                isVisibleBotButton: !0
                            })
                        }, o.state = {
                            heightContent: 0,
                            heightWrap: 0,
                            isVisibleBotButton: !1,
                            isVisibleTopButton: !1
                        }, o
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                        this._checkButtonsVisibility()
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        t.heightWrap === this.state.heightWrap && t.heightContent === this.state.heightContent || this._handleScroll()
                    }, t.prototype.currentPosition = function() {
                        return this._scroll ? this._scroll.scrollTop : 0
                    }, t.prototype.isAtTop = function() {
                        return this.currentPosition() <= 1
                    }, t.prototype.isAtBot = function() {
                        return this.currentPosition() + this.state.heightWrap >= this.state.heightContent - 1
                    }, t.prototype.animateTo = function(e, t) {
                        void 0 === t && (t = P.dur);
                        var o = this._scroll;
                        o && Object(D.doAnimate)({
                            onStep: function(e, t) {
                                o.scrollTop = t
                            },
                            from: o.scrollTop,
                            to: Math.round(e),
                            easing: P.easingFunc.easeInOutCubic,
                            duration: t
                        })
                    }, t.prototype.render = function() {
                        var e, t, o, n, i, a = this,
                            r = this.props,
                            s = r.children,
                            l = r.isVisibleScrollbar,
                            c = r.isVisibleFade,
                            u = r.isVisibleButtons,
                            p = r.onMouseOver,
                            h = r.onMouseOut,
                            m = this.state,
                            b = m.heightContent,
                            v = m.heightWrap,
                            f = m.isVisibleBotButton,
                            _ = m.isVisibleTopButton;
                        return d.a.createElement(A, {
                            whitelist: ["height"],
                            onMeasure: this._handleResizeWrap
                        }, d.a.createElement("div", {
                            className: x.wrap,
                            onMouseOver: p,
                            onMouseOut: h
                        }, d.a.createElement("div", {
                            className: g()(x.scrollWrap, (e = {}, e[x.noScrollBar] = !l, e)),
                            onScroll: this._handleScroll,
                            ref: function(e) {
                                return a._scroll = e
                            }
                        }, d.a.createElement(A, {
                            onMeasure: this._handleResizeContent,
                            whitelist: ["height"]
                        }, d.a.createElement("div", {
                            className: x.content
                        }, s))), c && d.a.createElement("div", {
                            className: g()(x.fadeTop, (t = {}, t[x.isVisible] = _ && b > v, t))
                        }), c && d.a.createElement("div", {
                            className: g()(x.fadeBot, (o = {}, o[x.isVisible] = f && b > v, o))
                        }), u && d.a.createElement("div", {
                            className: g()(x.scrollTop, (n = {}, n[x.isVisible] = _ && b > v, n)),
                            onClick: this._handleScrollTop
                        }, d.a.createElement("div", {
                            className: x.iconWrap
                        }, d.a.createElement(j.a, {
                            icon: B,
                            className: x.icon
                        }))), u && d.a.createElement("div", {
                            className: g()(x.scrollBot, (i = {}, i[x.isVisible] = f && b > v, i)),
                            onClick: this._handleScrollBot
                        }, d.a.createElement("div", {
                            className: x.iconWrap
                        }, d.a.createElement(j.a, {
                            icon: B,
                            className: x.icon
                        })))))
                    }, t.defaultProps = W, t
                }(d.a.PureComponent), F = o("lxNp"), I = o("tWVy"),
                z = o("QpNh"), R = o("gb5g"), G = o("wZIs"), H = o("3mf1"), U = o("9dlw"), K = o("hn2c"), Q = o("KmEK"), q = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._toggleDropdown = function(e) {
                            o.setState({
                                isOpened: void 0 !== e ? e : !o.state.isOpened
                            })
                        }, o._handleClose = function() {
                            o._toggleDropdown(!1)
                        }, o._getDropdownPosition = function() {
                            if (!o._control) return {
                                x: 0,
                                y: 0
                            };
                            var e = o._control.getBoundingClientRect();
                            return {
                                x: e.left + e.width + 1,
                                y: e.top - 6
                            }
                        }, o._handleClickArrow = function() {
                            o._toggleDropdown()
                        }, o._handleTouchStart = function() {
                            o.props.onClickButton(), o._toggleDropdown()
                        }, o._handlePressStart = function() {
                            if (Modernizr.mobiletouch && !o.props.checkable) o._longPressDelay || o.props.onClickButton();
                            else {
                                if (o._doubleClickDelay) return clearTimeout(o._doubleClickDelay), delete o._doubleClickDelay, void o._toggleDropdown(!0);
                                o._doubleClickDelay = setTimeout(function() {
                                    delete o._doubleClickDelay, o._longPressDelay || o.props.onClickButton()
                                }, 175)
                            }
                            o._longPressDelay = setTimeout(function() {
                                delete o._longPressDelay, o._toggleDropdown(!0)
                            }, 300)
                        }, o._handlePressEnd = function() {
                            o._longPressDelay && (clearTimeout(o._longPressDelay), delete o._longPressDelay, o.state.isOpened ? o._toggleDropdown(!1) : o.props.checkable || o.state.isOpened || !o.props.isActive || Modernizr.mobiletouch || o._toggleDropdown(!0))
                        }, o.state = {
                            isOpened: !1
                        }, o
                    }
                    return Object(c.__extends)(t, e), t.prototype.render = function() {
                        var e, t = this,
                            o = this.props,
                            i = o.buttonActiveClass,
                            a = o.buttonClass,
                            r = o.buttonIcon,
                            s = o.buttonTitle,
                            l = o.buttonHotKey,
                            d = o.dropdownTooltip,
                            p = o.children,
                            h = o.isActive,
                            m = o.isGrayed,
                            g = o.onClickWhenGrayed,
                            v = o.checkable,
                            f = this.state.isOpened,
                            _ = Object(z.a)(this.props);
                        return u.createElement("div", {
                            className: b(Q.dropdown, (e = {}, e[Q.isGrayed] = m, e[Q.isActive] = h, e[Q.isOpened] = f, e)),
                            onClick: m ? g : void 0
                        }, u.createElement("div", Object(c.__assign)({}, _, {
                            ref: function(e) {
                                return t._control = e
                            },
                            className: Q.control
                        }), u.createElement("div", {
                            className: b(Q.buttonWrap, {
                                "apply-common-tooltip common-tooltip-vertical": Boolean(s || l)
                            }),
                            "data-tooltip-hotkey": l,
                            "data-tooltip-delay": 1500,
                            "data-role": "button",
                            title: s,
                            onMouseDown: m || Modernizr.mobiletouch ? void 0 : this._handlePressStart,
                            onMouseUp: m || Modernizr.mobiletouch ? void 0 : this._handlePressEnd,
                            onTouchStart: !m && v && Modernizr.mobiletouch ? this._handlePressStart : void 0,
                            onTouchEnd: !m && v && Modernizr.mobiletouch ? this._handlePressEnd : void 0,
                            onClick: m || v || !Modernizr.mobiletouch ? void 0 : this._handleTouchStart
                        }, u.createElement(n, {
                            activeClass: i,
                            className: a,
                            icon: r,
                            isActive: h,
                            isGrayed: m,
                            isTransparent: !v
                        })), !m && !Modernizr.mobiletouch && u.createElement("div", {
                            className: b(Q.arrow, d && "apply-common-tooltip common-tooltip-vertical"),
                            title: d,
                            onClick: this._handleClickArrow,
                            "data-role": "menu-handle"
                        }, u.createElement(j.a, {
                            className: Q.arrowIcon,
                            icon: K
                        }))), !m && u.createElement(U.a, {
                            doNotCloseOn: this,
                            isOpened: f,
                            onClose: this._handleClose,
                            position: this._getDropdownPosition
                        }, p))
                    }, t
                }(u.PureComponent), J = o("KKsp"), Y = o("EA32"), X = {
                    icon: window.t("Icon"),
                    dropdownTooltip: window.t("Icons")
                }, Z = 10, $ = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._renderItem = function(e) {
                            return u.createElement("div", {
                                className: Y.item,
                                key: e,
                                onClick: function() {
                                    o._handleSelect(e), Object(I.b)()
                                }
                            }, String.fromCharCode(e))
                        }, o._onChangeDrawingState = function() {
                            o.setState({
                                isActive: o._isActive()
                            })
                        }, o._handleSelect = function(e) {
                            var t, n;
                            Object(G.saveDefaults)("linetoolicon", Object(c.__assign)(Object(c.__assign)({}, Object(G.defaults)("linetoolicon")), {
                                icon: e
                            })), _.tool.setValue("LineToolIcon"), -1 !== (n = (t = o.state.recents).indexOf(e)) && t.splice(n, 1), t = Object(c.__spreadArrays)([e], t.slice(0, Z - 1)), Object(v.setJSON)("linetoolicon.recenticons", t), o.setState({
                                current: e,
                                recents: t
                            })
                        }, o.state = {
                            current: Object(G.defaults)("linetoolicon").icon,
                            recents: Object(v.getJSON)("linetoolicon.recenticons") || []
                        }, o
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                        _.tool.subscribe(this._onChangeDrawingState), v.onSync.subscribe(this, this._onSyncSettings)
                    }, t.prototype.componentWillUnmount = function() {
                        _.tool.unsubscribe(this._onChangeDrawingState), v.onSync.unsubscribe(this, this._onSyncSettings)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            o = t.isGrayed,
                            n = t.toolName,
                            i = this.state,
                            a = i.current,
                            r = i.isActive,
                            s = i.recents,
                            l = Object(z.a)(this.props);
                        return u.createElement(q, Object(c.__assign)({
                            buttonClass: Y.button,
                            buttonIcon: u.createElement("div", {
                                className: Y.buttonIcon
                            }, String.fromCharCode(a || H.availableIcons[0])),
                            buttonTitle: X.icon,
                            dropdownTooltip: X.dropdownTooltip,
                            isActive: r,
                            isGrayed: o,
                            onClickButton: function() {
                                return e._handleSelect(a || H.availableIcons[0])
                            },
                            onClickWhenGrayed: function() {
                                return Object(y.emit)("onGrayedObjectClicked", {
                                    type: "drawing",
                                    name: O.a[n].localizedName
                                })
                            }
                        }, l), s && [u.createElement("div", {
                            key: "recent",
                            className: Y.wrap
                        }, s.map(this._renderItem)), u.createElement(J.a, {
                            key: "separator"
                        })], u.createElement("div", {
                            key: "all",
                            className: Y.wrap
                        }, H.availableIcons.map(this._renderItem)))
                    }, t.prototype._isActive = function() {
                        return _.tool.value() === this.props.toolName
                    }, t.prototype._onSyncSettings = function() {
                        this.setState({
                            recents: Object(v.getJSON)("linetoolicon.recenticons")
                        })
                    }, t
                }(u.Component), ee = o("Ocx9"), te = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._handleClick = function() {
                            o.props.saveDefaultOnChange && Object(ee.saveDefaultProperties)(!0), o.props.property.setValue(!o.props.property.value()), o.props.saveDefaultOnChange && Object(ee.saveDefaultProperties)(!1)
                        }, o.state = {
                            isActive: o.props.property.value()
                        }, o
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                        this.props.property.subscribe(this, this._onChange)
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.property.unsubscribe(this, this._onChange)
                    }, t.prototype.render = function() {
                        var e = this.props.toolName,
                            t = this.state.isActive,
                            o = O.a[e];
                        return u.createElement(n, {
                            icon: t && o.iconActive ? o.iconActive : o.icon,
                            isActive: t,
                            onClick: this._handleClick,
                            title: o.localizedName,
                            "data-name": e
                        })
                    }, t.prototype._onChange = function(e) {
                        this.setState({
                            isActive: e.value()
                        })
                    }, t
                }(u.PureComponent), oe = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._handleClick = function() {
                            _.tool.setValue(o.props.toolName)
                        }, o._onChange = function() {
                            o.setState({
                                isActive: _.tool.value() === o.props.toolName
                            })
                        }, o.state = {
                            isActive: _.tool.value() === o.props.toolName
                        }, o
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                        _.tool.subscribe(this._onChange)
                    }, t.prototype.componentWillUnmount = function() {
                        _.tool.unsubscribe(this._onChange)
                    }, t.prototype.render = function() {
                        var e = this.props.toolName,
                            t = this.state.isActive,
                            o = O.a[e];
                        return u.createElement(n, {
                            icon: O.a[e].icon,
                            isActive: t,
                            isTransparent: !0,
                            onClick: this._handleClick,
                            title: o.localizedName,
                            buttonHotKey: o.hotKey,
                            "data-name": e
                        })
                    }, t
                }(u.PureComponent), ne = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._boundUndoModel = null, o._handleClick = function() {
                            var e = o._activeChartWidget().model();
                            e && e.zoomFromViewport()
                        }, o._syncUnzoomButton = function() {
                            var e = o._activeChartWidget(),
                                t = e.model(),
                                n = !1;
                            t ? (o._boundUndoModel !== t && (o._boundUndoModel && o._boundUndoModel.zoomStack().onChange().unsubscribe(null, o._syncUnzoomButton), t.zoomStack().onChange().subscribe(null, o._syncUnzoomButton), o._boundUndoModel = t), n = !t.zoomStack().isEmpty()) : e.withModel(null, o._syncUnzoomButton), o.setState({
                                isVisible: n
                            })
                        }, o.state = {
                            isVisible: !1
                        }, o
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                        this.props.chartWidgetCollection.activeChartWidget.subscribe(this._syncUnzoomButton, {
                            callWithLast: !0
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._syncUnzoomButton)
                    }, t.prototype.render = function() {
                        return this.state.isVisible ? u.createElement(i, {
                            action: this._handleClick,
                            isTransparent: !0,
                            toolName: "zoom-out"
                        }) : u.createElement("div", null)
                    }, t.prototype._activeChartWidget = function() {
                        return this.props.chartWidgetCollection.activeChartWidget.value()
                    }, t
                }(u.PureComponent), ie = o("b2d7"), ae = o("pr86"), re = o("N5tr"), se = function(e) {
                    function t(t) {
                        var o, n = e.call(this, t) || this;
                        return n._onChangeDrawingState = function() {
                            var e = n._getActiveToolIndex();
                            n.setState({
                                current: -1 !== e ? e : n.state.current,
                                isActive: -1 !== e
                            })
                        }, n._handleClickButton = function() {
                            if (!k.CheckMobile.any()) {
                                var e = n._getCurrentToolName();
                                n._selectTool(e)
                            }
                        }, n._handleClickItem = function(e) {
                            n._selectTool(e)
                        }, n._handleGrayedClick = function(e) {
                            Object(y.emit)("onGrayedObjectClicked", {
                                type: "drawing",
                                name: O.a[e].localizedName
                            })
                        }, n._handleClickFavorite = function(e) {
                            n.state.favState && n.state.favState[e] ? ie.a.removeFavorite(e) : ie.a.addFavorite(e)
                        }, n._onAddFavorite = function(e) {
                            var t;
                            n.setState({
                                favState: Object(c.__assign)(Object(c.__assign)({}, n.state.favState), (t = {}, t[e] = !0, t))
                            })
                        }, n._onRemoveFavorite = function(e) {
                            var t;
                            n.setState({
                                favState: Object(c.__assign)(Object(c.__assign)({}, n.state.favState), (t = {}, t[e] = !1, t))
                            })
                        }, n._onSyncFavorites = function() {
                            n.setState({
                                favState: n._composeFavState()
                            })
                        }, o = n._getActiveToolIndex(), n.state = {
                            current: -1 === o ? n._firstNonGrayedTool() : o,
                            favState: n._composeFavState(),
                            isActive: -1 !== o
                        }, n
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                            _.tool.subscribe(this._onChangeDrawingState), ie.a.favoriteAdded.subscribe(null, this._onAddFavorite), ie.a.favoriteRemoved.subscribe(null, this._onRemoveFavorite), ie.a.favoritesSynced.subscribe(null, this._onSyncFavorites)
                        },
                        t.prototype.componentWillUnmount = function() {
                            _.tool.unsubscribe(this._onChangeDrawingState), ie.a.favoriteAdded.unsubscribe(null, this._onAddFavorite), ie.a.favoriteRemoved.unsubscribe(null, this._onRemoveFavorite), ie.a.favoritesSynced.unsubscribe(null, this._onSyncFavorites)
                        }, t.prototype.componentDidUpdate = function(e, t) {
                            e.lineTools !== this.props.lineTools && this.setState({
                                favState: this._composeFavState()
                            })
                        }, t.prototype.render = function() {
                            var e = this,
                                t = this.props,
                                o = t.favoriting,
                                n = t.grayedTools,
                                i = t.lineTools,
                                a = t.dropdownTooltip,
                                r = this.state,
                                s = r.current,
                                l = r.favState,
                                d = r.isActive,
                                p = this._getCurrentToolName(),
                                h = O.a[p],
                                m = this._showShortcuts(),
                                b = Object(z.a)(this.props);
                            return u.createElement("span", null, u.createElement(q, Object(c.__assign)({
                                buttonIcon: h.icon,
                                buttonTitle: h.localizedName,
                                buttonHotKey: h.hotKey,
                                dropdownTooltip: a,
                                isActive: d,
                                onClickButton: this._handleClickButton
                            }, b), i.map(function(t, i) {
                                var a = t.name,
                                    r = O.a[a],
                                    c = n[a];
                                return u.createElement(re.b, {
                                    key: a,
                                    "data-name": t.name,
                                    dontClosePopup: c,
                                    forceShowShortcuts: m,
                                    shortcut: t.hotkeyHash ? Object(E.humanReadableHash)(t.hotkeyHash) : void 0,
                                    icon: r.icon,
                                    isActive: d && s === i,
                                    appearAsDisabled: c,
                                    label: r.localizedName,
                                    onClick: c ? e._handleGrayedClick : e._handleClickItem,
                                    onClickArg: a,
                                    showToolboxOnHover: !l[a],
                                    toolbox: o && !c ? u.createElement(ae.a, {
                                        isFilled: l[a],
                                        onClick: e._handleClickFavorite,
                                        onClickArg: a
                                    }) : void 0
                                })
                            })))
                        }, t.prototype._getCurrentToolName = function() {
                            var e = this.state.current,
                                t = this.props.lineTools;
                            return t[e || 0].name
                        }, t.prototype._firstNonGrayedTool = function() {
                            var e = this.props,
                                t = e.grayedTools;
                            return e.lineTools.findIndex(function(e) {
                                return !t[e.name]
                            })
                        }, t.prototype._getActiveToolIndex = function() {
                            return this.props.lineTools.findIndex(function(e) {
                                return e.name === _.tool.value()
                            })
                        }, t.prototype._showShortcuts = function() {
                            return this.props.lineTools.some(function(e) {
                                return "shortcut" in e
                            })
                        }, t.prototype._selectTool = function(e) {
                            _.tool.setValue(e)
                        }, t.prototype._composeFavState = function() {
                            var e = {};
                            return this.props.lineTools.forEach(function(t) {
                                e[t.name] = ie.a.isFavorite(t.name)
                            }), e
                        }, t
                }(u.PureComponent), le = {
                    all: window.t("Remove Drawing Tools & Indicators"),
                    drawings: window.t("Remove Drawing Tools"),
                    studies: window.t("Remove Indicators")
                }, ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._handleRemoveToolClick = function() {
                            Modernizr.mobiletouch || t._handleRemoveDrawings()
                        }, t._handleRemoveDrawings = function() {
                            t.props.chartWidgetCollection.activeChartWidget.value().removeAllDrawingTools()
                        }, t._handleRemoveStudies = function() {
                            t.props.chartWidgetCollection.activeChartWidget.value().removeAllStudies()
                        }, t._handleRemoveAll = function() {
                            t.props.chartWidgetCollection.activeChartWidget.value().removeAllStudiesDrawingTools()
                        }, t
                    }
                    return Object(c.__extends)(t, e), t.prototype.render = function() {
                        return u.createElement(q, {
                            buttonIcon: O.a[this.props.toolName].icon,
                            buttonTitle: le.drawings,
                            onClickButton: this._handleRemoveToolClick,
                            "data-name": this.props.toolName
                        }, u.createElement(re.b, {
                            "data-name": "remove-drawing-tools",
                            label: le.drawings,
                            onClick: this._handleRemoveDrawings
                        }), u.createElement(re.b, {
                            "data-name": "remove-studies",
                            label: le.studies,
                            onClick: this._handleRemoveStudies
                        }), u.createElement(re.b, {
                            "data-name": "remove-all",
                            label: le.all,
                            onClick: this._handleRemoveAll
                        }))
                    }, t
                }(u.PureComponent), ue = o("g5Qf"), de = o("85c9"), pe = window.t("Show Favorite Drawings Toolbar"), he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._instance = null, t._promise = null, t._bindedForceUpdate = function() {
                            return t.forceUpdate()
                        }, t._handleClick = function() {
                            null !== t._instance && (t._instance.isVisible() ? t._instance.hide() : t._instance.show())
                        }, t
                    }
                    return Object(c.__extends)(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = this._promise = Object(h.ensureNotNull)(Object(ue.getFavoriteDrawingToolbarPromise)());
                        t.then(function(o) {
                            e._promise === t && (e._instance = o, e._instance.canBeShown().subscribe(e._bindedForceUpdate), e._instance.visibility().subscribe(e._bindedForceUpdate), e.forceUpdate())
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this._promise = null, null !== this._instance && (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate), this._instance.visibility().unsubscribe(this._bindedForceUpdate), this._instance = null)
                    }, t.prototype.render = function() {
                        return null !== this._instance && this._instance.canBeShown().value() ? u.createElement(n, {
                            id: this.props.id,
                            icon: de,
                            isActive: this._instance.isVisible(),
                            onClick: this._handleClick,
                            title: pe
                        }) : null
                    }, t
                }(u.PureComponent), me = o("Ijvb"), be = o("PC8g"), ge = o("4o++"),
                function(e) {
                    e.Screenshot = "drawing-toolbar-screenshot", e.FavoriteDrawings = "drawing-toolbar-favorite-drawings", e.ObjectTree = "drawing-toolbar-object-tree"
                }(ve || (ve = {})), fe = o("8d0Q"), _e = o("XAms"), Te = o("7RN7"), ye = o("X0gx"), we = o("nPPD"), ke = Ce = o("Wz44"), Oe = "http://www.w3.org/2000/svg", Se = o("ybOa"), Ee = Object(we.a)(ke, Se), Me = {
                    hide: window.t("Hide Drawings Toolbar"),
                    show: window.t("Show Drawings Toolbar")
                }, Le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t._toggleVisibility = function() {
                            N.isDrawingToolbarVisible.setValue(!N.isDrawingToolbarVisible.value())
                        }, t
                    }
                    return Object(c.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props.toolbarVisible;
                        return u.createElement("div", {
                            className: b(Ee.toggleButton, "apply-common-tooltip common-tooltip-vertical", !e && Ee.collapsed),
                            onClick: this._toggleVisibility,
                            title: e ? Me.hide : Me.show
                        }, u.createElement(a, {
                            direction: e ? "left" : "right",
                            theme: e ? void 0 : Ee
                        }))
                    }, t
                }(u.PureComponent), Ne = o("JQKp"), Ae = {
                    weakMagnet: window.t("Weak Magnet"),
                    strongMagnet: window.t("Strong Magnet")
                }, je = Object(k.onWidget)(), De = new C.a, Pe = function(e) {
                    function t(t) {
                        var o = e.call(this, t) || this;
                        return o._grayedTools = {}, o._handleMouseOver = function(e) {
                                Object(fe.a)(e) && o.setState({
                                    isHovered: !0
                                })
                            }, o._handleMouseOut = function(e) {
                                Object(fe.a)(e) && o.setState({
                                    isHovered: !1
                                })
                            }, o._handleChangeVisibility = function(e) {
                                o.setState({
                                    isVisible: e
                                })
                            }, o._handleEsc = function() {
                                _.resetToCursor(!0)
                            }, o._updateMagnetEnabled = function() {
                                var e = {
                                    magnet: Object(T.a)().value()
                                };
                                o.setState(e)
                            }, o._updateMagnetMode = function() {
                                var e = {
                                    magnetMode: Object(T.b)().value()
                                };
                                o.setState(e)
                            }, _.init(), o._toolsFilter = new S(o.props.drawingsAccess),
                            o._filteredLineTools = L.map(function(e) {
                                return {
                                    id: e.id,
                                    title: e.title,
                                    items: e.items.filter(function(e) {
                                        return o._toolsFilter.isToolEnabled(O.a[e.name].localizedName)
                                    })
                                }
                            }).filter(function(e) {
                                return 0 !== e.items.length
                            }), o._filteredLineTools.forEach(function(e) {
                                return e.items.forEach(function(e) {
                                    o._grayedTools[e.name] = o._toolsFilter.isToolGrayed(O.a[e.name].localizedName)
                                })
                            }), o.state = {
                                isHovered: !1,
                                isVisible: N.isDrawingToolbarVisible.value(),
                                magnet: _.properties().childs().magnet.value(),
                                magnetMode: _.properties().childs().magnetMode.value()
                            }, o._features = {
                                favoriting: !je && f.enabled("items_favoriting"),
                                multicharts: f.enabled("support_multicharts"),
                                tools: !je || f.enabled("charting_library_base")
                            }, o._negotiateResizer(), o
                    }
                    return Object(c.__extends)(t, e), t.prototype.getChildContext = function() {
                        return {
                            chartWidgetCollection: this.props.chartWidgetCollection
                        }
                    }, t.prototype.componentDidMount = function() {
                        N.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility), I.a.subscribe(this, this._handleGlobalClose), Object(T.a)().subscribe(this._updateMagnetEnabled), Object(T.b)().subscribe(this._updateMagnetMode), this._tool = _.tool.spawn(), this._tool.subscribe(this._updateHotkeys.bind(this)), this._initHotkeys()
                    }, t.prototype.componentWillUnmount = function() {
                        N.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility), I.a.unsubscribe(this, this._handleGlobalClose), Object(T.a)().unsubscribe(this._updateMagnetEnabled), Object(T.b)().unsubscribe(this._updateMagnetMode), this._tool.destroy(), this._hotkeys.destroy()
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        var o = this.state.isVisible;
                        o !== t.isVisible && (y.emit("toggle_sidebar", !o), v.setValue("ChartDrawingToolbarWidget.visible", o), this._negotiateResizer())
                    }, t.prototype.render = function() {
                        var e, t, o = this,
                            n = this.props,
                            a = n.bgColor,
                            c = n.chartWidgetCollection,
                            d = n.readOnly,
                            p = this.state,
                            h = p.isHovered,
                            m = p.isVisible,
                            g = p.magnet,
                            v = p.magnetMode,
                            f = {
                                backgroundColor: a && "#" + a
                            };
                        return t = u.createElement(Le, {
                            toolbarVisible: m
                        }), u.createElement(ye.a.Provider, {
                            value: De
                        }, u.createElement("div", {
                            className: b(Ne.drawingToolbar, (e = {}, e[Ne.isHidden] = !m, e)),
                            style: f,
                            onClick: this.props.onClick,
                            onContextMenu: _e.b
                        }, u.createElement(V, {
                            onScroll: this._handleGlobalClose,
                            isVisibleFade: Modernizr.mobiletouch,
                            isVisibleButtons: !Modernizr.mobiletouch && h,
                            isVisibleScrollbar: !1,
                            onMouseOver: this._handleMouseOver,
                            onMouseOut: this._handleMouseOut
                        }, u.createElement("div", {
                            className: Ne.inner
                        }, !d && u.createElement("div", {
                            className: Ne.group,
                            style: f
                        }, this._filteredLineTools.map(function(e, t) {
                            return u.createElement(se, {
                                "data-name": e.id,
                                chartWidgetCollection: c,
                                favoriting: o._features.favoriting,
                                grayedTools: o._grayedTools,
                                key: t,
                                dropdownTooltip: e.title,
                                lineTools: e.items
                            })
                        }), this._toolsFilter.isToolEnabled("Font Icons") && u.createElement($, {
                            "data-name": "linetool-group-font-icons",
                            isGrayed: this._grayedTools["Font Icons"],
                            toolName: "LineToolIcon"
                        })), !d && u.createElement("div", {
                            className: Ne.group,
                            style: f
                        }, u.createElement(oe, {
                            toolName: "measure"
                        }), u.createElement(oe, {
                            toolName: "zoom"
                        }), u.createElement(ne, {
                            chartWidgetCollection: c
                        })), !d && u.createElement("div", {
                            className: Ne.group,
                            style: f
                        }, u.createElement(q, {
                            "data-name": "magnet-button",
                            buttonIcon: v === ge.MagnetMode.StrongMagnet ? me.a.strongMagnet : me.a.magnet,
                            buttonTitle: O.a.magnet.localizedName,
                            isActive: g,
                            onClickButton: r,
                            buttonHotKey: O.a.magnet.hotKey,
                            checkable: !0
                        }, u.createElement(re.b, {
                            key: "weakMagnet",
                            "data-name": "weakMagnet",
                            icon: me.a.magnet,
                            isActive: g && v !== ge.MagnetMode.StrongMagnet,
                            label: Ae.weakMagnet,
                            onClick: s
                        }), u.createElement(re.b, {
                            key: "strongMagnet",
                            "data-name": "strongMagnet",
                            icon: me.a.strongMagnet,
                            isActive: g && v === ge.MagnetMode.StrongMagnet,
                            label: Ae.strongMagnet,
                            onClick: l
                        })), this._features.tools && u.createElement(te, {
                            property: _.properties().childs().stayInDrawingMode,
                            saveDefaultOnChange: !0,
                            toolName: "drawginmode"
                        }), this._features.tools && u.createElement(te, {
                            property: _.lockDrawings(),
                            toolName: "lockAllDrawings"
                        }), this._features.tools && u.createElement(te, {
                            property: _.hideAllDrawings(),
                            toolName: "hideAllDrawings"
                        }), !1), !d && this._features.tools && u.createElement("div", {
                            className: Ne.group,
                            style: f
                        }, u.createElement(ce, {
                            chartWidgetCollection: c,
                            toolName: "removeAllDrawingTools"
                        })), u.createElement("div", {
                            className: Ne.fill,
                            style: f
                        }), !d && (this._features.tools || !1) && u.createElement("div", {
                            className: b(Ne.group, Ne.lastGroup),
                            style: f
                        }, !1, this._features.tools && this._features.favoriting && u.createElement(he, {
                            id: ve.FavoriteDrawings
                        }), this._features.tools && u.createElement(i, {
                            id: ve.ObjectTree,
                            action: function() {
                                return o._activeChartWidget().showObjectsTreeDialog()
                            },
                            toolName: "showObjectsTree"
                        })))), t))
                    }, t.prototype._activeChartWidget = function() {
                        return this.props.chartWidgetCollection.activeChartWidget.value()
                    }, t.prototype._negotiateResizer = function() {
                        var e = Te.a;
                        this.props.resizerBridge.negotiateWidth(this.state.isVisible ? Te.b : e)
                    }, t.prototype._handleGlobalClose = function() {
                        De.fire()
                    }, t.prototype._updateHotkeys = function() {
                        this._hotkeys.promote()
                    }, t.prototype._initHotkeys = function() {
                        var e = this;
                        this._hotkeys = F.createGroup({
                            desc: "Drawing Toolbar"
                        }), this._hotkeys.add({
                            desc: "Reset",
                            hotkey: 27,
                            handler: function() {
                                return e._handleEsc()
                            },
                            isDisabled: function() {
                                return _.toolIsCursor(_.tool.value())
                            }
                        })
                    }, t.childContextTypes = {
                        chartWidgetCollection: m.any.isRequired
                    }, t
                }(u.PureComponent), o.d(t, "DrawingToolbarRenderer", function() {
                    return xe
                }), xe = function() {
                    function e(e, t) {
                        var o = this;
                        this._component = null, this._handleRef = function(e) {
                            o._component = e
                        }, this._container = e, p.render(u.createElement(Pe, Object(c.__assign)({}, t, {
                            ref: this._handleRef
                        })), this._container)
                    }
                    return e.prototype.destroy = function() {
                        p.unmountComponentAtNode(this._container)
                    }, e.prototype.getComponent = function() {
                        return Object(h.ensureNotNull)(this._component)
                    }, e
                }()
        },
        "85c9": function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>'
        },
        "8d0Q": function(e, t, o) {
            "use strict";

            function n() {
                var e = Object(a.useState)(!1),
                    t = e[0],
                    o = e[1],
                    n = {
                        onMouseOver: function(e) {
                            i(e) && o(!0)
                        },
                        onMouseOut: function(e) {
                            i(e) && o(!1)
                        }
                    };
                return [t, n]
            }

            function i(e) {
                return !e.currentTarget.contains(e.relatedTarget)
            }
            var a;
            o.d(t, "b", function() {
                return n
            }), o.d(t, "a", function() {
                return i
            }), a = o("q1tI")
        },
        "9dlw": function(e, t, o) {
            "use strict";

            function n(e) {
                var t = e.controller,
                    o = e.children,
                    n = e.isOpened,
                    s = e.closeOnClickOutside,
                    c = void 0 === s || s,
                    m = e.doNotCloseOn,
                    b = e.onClickOutside,
                    g = e.onClose,
                    v = Object(i.__rest)(e, ["controller", "children", "isOpened", "closeOnClickOutside", "doNotCloseOn", "onClickOutside", "onClose"]),
                    f = Object(a.useContext)(p.a),
                    _ = Object(h.a)({
                        handler: function(e) {
                            if (b && b(e), c) {
                                if (m && e.target instanceof Node) {
                                    var t = l.a.findDOMNode(m);
                                    if (t instanceof Node && t.contains(e.target)) return
                                }
                                g()
                            }
                        },
                        mouseDown: !0,
                        touchStart: !0
                    });
                return n ? r.a.createElement(u.a, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, r.a.createElement("span", {
                    ref: _,
                    style: {
                        pointerEvents: "auto"
                    }
                }, r.a.createElement(d.a, Object(i.__assign)({}, v, {
                    isOpened: n,
                    onClose: g,
                    onScroll: function(t) {
                        var o = e.onScroll;
                        o && o(t), t.stopPropagation()
                    },
                    customCloseDelegate: f,
                    ref: t
                }), o))) : null
            }
            var i, a, r, s, l, c, u, d, p, h;
            o.d(t, "a", function() {
                return n
            }), i = o("mrSG"), a = o("q1tI"), r = o.n(a), s = o("i8i4"), l = o.n(s), c = o("bf9a"), u = o("AiMB"), d = o("DTHj"), p = o("X0gx"), h = o("8Rai")
        },
        EA32: function(e, t, o) {
            e.exports = {
                wrap: "wrap-2I6DAtXG",
                buttonIcon: "buttonIcon-2rBwJ1QM",
                item: "item-31XunD5q",
                hovered: "hovered-2A1Cpat5",
                button: "button-21ihqWJ8"
            }
        },
        GWvR: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        HHbT: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        JQKp: function(e, t, o) {
            e.exports = {
                drawingToolbar: "drawingToolbar-U3_QXRof",
                isHidden: "isHidden-2d-PYkzV",
                inner: "inner-1xuW-gY4",
                group: "group-2JyOhh7Z",
                noGroupPadding: "noGroupPadding-1TTjVKWk",
                lastGroup: "lastGroup-O75UB5Xa",
                fill: "fill-1djIbBXv",
                separator: "separator-1BAqp1-l"
            }
        },
        KKsp: function(e, t, o) {
            "use strict";

            function n(e) {
                return i.createElement("div", {
                    className: a.separator
                })
            }
            var i, a;
            o.d(t, "a", function() {
                return n
            }), i = o("q1tI"), a = o("NOPy")
        },
        KmEK: function(e, t, o) {
            e.exports = {
                dropdown: "dropdown-3_ASLzSj",
                buttonWrap: "buttonWrap-3fZWypJl",
                control: "control-1TyEfSIx",
                arrow: "arrow-1cFKS5Ok",
                arrowIcon: "arrowIcon-2wA7q8om",
                isOpened: "isOpened-22vLOY9o",
                hover: "hover-2eKqN_v0",
                isGrayed: "isGrayed-xr-mULNo"
            }
        },
        N5tr: function(e, t, o) {
            "use strict";

            function n(e) {
                var t = e.reference,
                    o = Object(r.__rest)(e, ["reference"]),
                    n = Object(r.__assign)(Object(r.__assign)({}, o), {
                        ref: t
                    });
                return l.a.createElement(e.href ? "a" : "div", n)
            }

            function i(e) {
                e.stopPropagation()
            }

            function a(e) {
                var t, o, a, m = e.className,
                    b = e.title,
                    g = e.labelRowClassName,
                    v = e.shortcut,
                    f = e.forceShowShortcuts,
                    _ = e.icon,
                    T = e.isActive,
                    y = e.isDisabled,
                    w = e.isHovered,
                    C = e.appearAsDisabled,
                    k = e.label,
                    O = e.link,
                    S = e.showToolboxOnHover,
                    E = e.target,
                    M = e.toolbox,
                    L = e.reference,
                    N = e.onMouseOut,
                    A = e.onMouseOver,
                    j = e.theme,
                    D = void 0 === j ? h : j,
                    P = Object(p.a)(e),
                    x = Object(s.useRef)(null);
                return l.a.createElement(n, Object(r.__assign)({}, P, {
                    className: c(m, D.item, _ && D.withIcon, (t = {}, t[D.isActive] = T, t[D.isDisabled] = y || C, t[D.hovered] = w, t)),
                    title: b,
                    href: O,
                    target: E,
                    reference: function(e) {
                        x.current = e, L && L(e)
                    },
                    onClick: function(t) {
                        var o = e.dontClosePopup,
                            n = e.onClick,
                            i = e.onClickArg,
                            a = e.trackEventObject;
                        y || (a && Object(d.trackEvent)(a.category, a.event, a.label), n && n(i, t), o || Object(u.b)())
                    },
                    onContextMenu: function(t) {
                        var o = e.trackEventObject,
                            n = e.trackRightClick;
                        o && n && Object(d.trackEvent)(o.category, o.event, o.label + "_rightClick")
                    },
                    onMouseUp: function(t) {
                        var o, n = e.trackEventObject,
                            i = e.trackMouseWheelClick;
                        1 === t.button && O && n && (o = n.label, i && (o += "_mouseWheelClick"), Object(d.trackEvent)(n.category, n.event, o))
                    },
                    onMouseOver: A,
                    onMouseOut: N
                }), void 0 !== _ && l.a.createElement("div", {
                    className: D.icon,
                    dangerouslySetInnerHTML: {
                        __html: _
                    }
                }), l.a.createElement("div", {
                    className: c(D.labelRow, g)
                }, l.a.createElement("div", {
                    className: D.label
                }, k)), (void 0 !== v || f) && l.a.createElement("div", {
                    className: D.shortcut
                }, (a = v) && a.split("+").join(" + ")), void 0 !== M && l.a.createElement("div", {
                    onClick: i,
                    className: c(D.toolbox, (o = {}, o[D.showOnHover] = S, o))
                }, M))
            }
            var r, s, l, c, u, d, p, h, m;
            o.d(t, "a", function() {
                return m
            }), o.d(t, "b", function() {
                return a
            }), r = o("mrSG"), s = o("q1tI"), l = o.n(s), c = o("TSYQ"), u = o("tWVy"), d = o("PC8g"), p = o("QpNh"), h = o("v1bN"), m = h
        },
        NOPy: function(e, t, o) {
            e.exports = {
                separator: "separator-25lkUpN-"
            }
        },
        Vike: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
        },
        Wz44: function(e, t, o) {
            e.exports = {
                container: "container-3_8ayT2Q",
                mirror: "mirror-crJbq8d0",
                background: "background-Q1Fcmxly",
                arrow: "arrow-WcYWFXUn"
            }
        },
        X0gx: function(e, t, o) {
            "use strict";
            var n, i, a, r;
            o.d(t, "a", function() {
                return r
            }), n = o("q1tI"), i = o.n(n), a = o("tWVy"), r = i.a.createContext(a.a)
        },
        fEjm: function(e, t, o) {
            e.exports = {
                star: "star-uhAI7sV4",
                checked: "checked-2bhy04CF"
            }
        },
        gb5g: function(e, t, o) {
            e.exports = {
                button: "button-263WXsg-",
                hover: "hover-6KHfIHhL",
                bg: "bg-1kRv1Pf2",
                icon: "icon-1Y-3MM9F",
                isActive: "isActive-2mI1-NUL",
                isTransparent: "isTransparent-sRmateFl",
                isGrayed: "isGrayed-1kWObWVr",
                isHidden: "isHidden-2VzaskeU"
            }
        },
        hn2c: function(e, t) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'
        },
        nPPD: function(e, t, o) {
            "use strict";

            function n(e, t, o) {
                var n, i, a, r, s;
                for (void 0 === o && (o = {}), n = Object.assign({}, t), i = 0, a = Object.keys(t); i < a.length; i++)(s = o[r = a[i]] || r) in e && (n[r] = [e[s], t[r]].join(" "));
                return n
            }

            function i(e, t, o) {
                return void 0 === o && (o = {}), Object.assign({}, e, n(e, t, o))
            }
            o.d(t, "b", function() {
                return n
            }), o.d(t, "a", function() {
                return i
            })
        },
        pr86: function(e, t, o) {
            "use strict";
            var n, i, a, r, s, l, c, u;
            o.d(t, "a", function() {
                return u
            }), n = o("mrSG"), o("YFKU"), i = o("q1tI"), a = o("TSYQ"), r = o("fEjm"), s = o("HHbT"), l = o("GWvR"), c = {
                add: window.t("Add to favorites"),
                remove: window.t("Remove from favorites")
            }, u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._handleClick = function(e) {
                        var o = t.props,
                            n = o.onClick,
                            i = o.onClickArg;
                        n && n(i, e)
                    }, t
                }
                return Object(n.__extends)(t, e), t.prototype.render = function() {
                    var e, t = this.props.isFilled;
                    return i.createElement("span", {
                        className: a(r.star, "apply-common-tooltip", (e = {}, e[r.checked] = t, e)),
                        dangerouslySetInnerHTML: {
                            __html: t ? s : l
                        },
                        onClick: this._handleClick,
                        title: t ? c.remove : c.add
                    })
                }, t
            }(i.PureComponent)
        },
        uJ8n: function(e, t, o) {
            e.exports = {
                wrap: "wrap-1h7U5nKd",
                scrollWrap: "scrollWrap-3gtPS0Fe",
                noScrollBar: "noScrollBar-ieMwbfur",
                content: "content-YhoA_L2m",
                icon: "icon-2xObs8DI",
                scrollBot: "scrollBot-2HHpZNuf",
                scrollTop: "scrollTop-1eXi8ltS",
                isVisible: "isVisible-3zZOL3TO",
                iconWrap: "iconWrap-2Q69rfEO",
                fadeBot: "fadeBot-3JstnoWq",
                fadeTop: "fadeTop-3oJzNyTq"
            }
        },
        v1bN: function(e, t, o) {
            e.exports = {
                item: "item-2xPVYue0",
                hovered: "hovered-1uf45E05",
                isDisabled: "isDisabled-1wLqKupj",
                isActive: "isActive-2j-GhQs_",
                shortcut: "shortcut-30pveiCO",
                toolbox: "toolbox-3ulPxfe-",
                withIcon: "withIcon-1xBjf-oB",
                icon: "icon-2Qm7YIcz",
                labelRow: "labelRow-3Q0rdE8-",
                label: "label-3Xqxy756",
                showOnHover: "showOnHover-1q6ySzZc"
            }
        },
        ybOa: function(e, t, o) {
            e.exports = {
                toggleButton: "toggleButton-3TAD9tll",
                collapsed: "collapsed-2PwwPYYB",
                background: "background-1bSnR2Ey",
                arrow: "arrow-liYbPQ3o"
            }
        }
    }
]);