(window.webpackJsonp = window.webpackJsonp || []).push([
    ["dialogs-core"], {
        "6aJD": function(t, e, o) {
            "use strict";
            var n = o("APlX");
            o.d(e, "a", function() {
                return n.TVModal
            })
        },
        APlX: function(t, e, o) {
            "use strict";
            (function(t) {
                function n(t) {
                    var e, o;
                    if (t && t.__esModule) return t;
                    if (e = {}, null != t)
                        for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e.default = t, e
                }
                var i, s, r, a, l, c, u, d, h, p, f, g, v, b, y;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TVModal = void 0, i = Object.assign || function(t) {
                    var e, o, n;
                    for (e = 1; e < arguments.length; e++)
                        for (n in o = arguments[e]) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                    return t
                }, s = function() {
                    function t(t, e) {
                        var o, n;
                        for (o = 0; o < e.length; o++)(n = e[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(), e.isOpenedModals = function() {
                    return 0 !== v.length
                }, r = o("j1f4"), a = n(r), l = o("33OQ"), c = (y = l) && y.__esModule ? y : {
                    default: y
                }, u = o("KHon"), d = o("c2JX"), h = o("6et/"), p = n(h), f = o("lxNp"), g = n(f), v = [], b = {
                    ajax: {},
                    closingDuration: a.dur / 2,
                    fixBodyState: !0,
                    overlayTemplate: '<div class="tv-dialog__overlay"></div>',
                    containerTemplate: '<div class="tv-dialog__modal-wrap"><div class="tv-dialog__modal-container"><div class="tv-dialog__modal-body"></div></div></div>',
                    ajaxErrorTemplate: '<div class="tv-dialog__error js-dialog__close">' + window.t("Error") + "</div>"
                }, e.TVModal = function(e) {
                    function o() {
                        var t, e, n, s, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), (t = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, i({}, b, r)))).$overlay = $(t.options.overlayTemplate), t.$modalWrap = $(t.options.containerTemplate), t.$body = t.$modalWrap.find(".tv-dialog__modal-body").append(t.$el), t.options.closeOnOutsideClick && t.$overlay.add(t.$modalWrap).click(function(e) {
                            t.isEventOut(e) && t.close()
                        }), t.on("change:zIndex", function() {
                            t.$overlay.css("z-index", t.zIndex), t.$modalWrap.css("z-index", t.zIndex)
                        }), t.on("destroy", function() {
                            var e = function() {
                                t.$overlay.remove(), t.$modalWrap.remove()
                            };
                            t.opened ? (t.close(), setTimeout(e, t.options.closingDuration)) : e()
                        }), t.on("beforeOpen", function() {
                            v.push(t)
                        }), t.options.ajax.url && (e = t.options.ajax.beforeSend || $.noop, n = t.options.ajax.success || !1, s = t.options.ajax.error || $.noop, $.extend(t.options.ajax, {
                            beforeSend: function() {
                                t.trigger("beforeLoading", [t]), t.startSpinner(), e(t)
                            },
                            success: function(e) {
                                t.trigger("afterLoading", [t]), t.renderContent(n ? n(t, e) : e).showContent(), t.trigger("afterLoadingShow", [t])
                            },
                            error: function() {
                                t.renderContent(t.options.ajaxErrorTemplate), s(t), t.trigger("errorLoading", [t])
                            }
                        })), t.on("error", function(e, o) {
                            t.$modalWrap[0].getBoundingClientRect().height < t.$content[0].getBoundingClientRect().height && o.addClass("i-fixed").css({
                                width: t.$el.width()
                            })
                        }), t._keyboardBinderLockId = null, t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(o, u.TVDialogAbstract), s(o, [{
                        key: "open",
                        value: function() {
                            var t, e = this;
                            if (!this.opened) return this.opened = !0, this._keyboardBinderLockId = p.disable(), this.options.fixBodyState && c.default.setFixedBodyState(!0), this._hotkeys || (this._hotkeys = g.createGroup({
                                desc: "Modal Dialog",
                                isDisabled: function() {
                                    return !e.opened
                                },
                                modal: !0
                            }), this.options.closeOnEsc && this._hotkeys.add({
                                desc: "close",
                                hotkey: 27,
                                handler: function() {
                                    return e.close()
                                }
                            })), t = function() {
                                e.focus(), e.toTop(), e.trigger("beforeOpen", [e]), $(e.$wrap).append(e.$overlay.addClass("i-hidden i-closed").css("z-index", e.zIndex)).append(e.$modalWrap.addClass("i-hidden i-closed").css("z-index", e.zIndex)), e.$overlay.removeClass("i-hidden"), setTimeout(function() {
                                    e.$overlay.removeClass("i-closed")
                                }, 20), e.options.ajax.url ? e.ajaxRequest = $.ajax(e.options.ajax) : e.showContent()
                            }, c.default.isSafari ? setTimeout(function() {
                                return t()
                            }, 50) : t(), this
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var e = this;
                            if (this.opened) return this.opened = !1, this._keyboardBinderLockId && p.enable(this._keyboardBinderLockId), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), this.trigger("beforeClose", [this]), this.ajaxRequest && (this.ajaxRequest.abort(), delete this.ajaxRequest), this.hideContent(), this.$overlay.addClass("i-closed"), setTimeout(function() {
                                e.$modalWrap.addClass("i-hidden").detach(), e.$overlay.addClass("i-hidden").detach(), v = t.without(v, e), e.options.fixBodyState && c.default.setFixedBodyState(!1), e.trigger("afterClose", [e]), e.unfocus(), v.length > 0 && v[v.length - 1].focus(), e.options.destroyOnClose && e.destroy()
                            }, this.options.closingDuration), this
                        }
                    }, {
                        key: "showContent",
                        value: function() {
                            var t = this;
                            return this.$modalWrap.removeClass("i-hidden"), setTimeout(function() {
                                t.$modalWrap.removeClass("i-closed")
                            }, 20), setTimeout(function() {
                                t.trigger("afterOpen", [t]), t.spinner && t.stopSpinner()
                            }, .75 * a.dur + 20), this
                        }
                    }, {
                        key: "hideContent",
                        value: function() {
                            if (this.$el) return this.$modalWrap.addClass("i-closed"), this.unfocus(), this
                        }
                    }, {
                        key: "startSpinner",
                        value: function() {
                            return this.spinner = new d.Spinner("large"), this.spinner.spin(this.$overlay[0]), this
                        }
                    }, {
                        key: "stopSpinner",
                        value: function() {
                            if (this.spinner) return this.spinner.stop(), delete this.spinner, this
                        }
                    }]), o
                }()
            }).call(this, o("F/us"))
        },
        KHon: function(t, e, o) {
            "use strict";
            var n;
            o.r(e), n = o("v2PZ"), o.d(e, "TVDialogAbstract", function() {
                return n.TVDialogAbstract
            }), o.d(e, "closeAllDialogs", function() {
                return n.closeAllDialogs
            })
        },
        nZrM: function(t, e, o) {},
        nbyR: function(t, e, o) {
            "use strict";

            function n(t) {
                var e, o;
                if (t && t.__esModule) return t;
                if (e = {}, null != t)
                    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e.default = t, e
            }
            var i, s, r, a, l, c, u, d, h, p, f, g, v, b, y, _, m, k;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TVPopup = void 0, i = Object.assign || function(t) {
                var e, o, n;
                for (e = 1; e < arguments.length; e++)
                    for (n in o = arguments[e]) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                return t
            }, s = function() {
                function t(t, e) {
                    var o, n;
                    for (o = 0; o < e.length; o++)(n = e[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
                return function(e, o, n) {
                    return o && t(e.prototype, o), n && t(e, n), e
                }
            }(), r = o("j1f4"), a = n(r), l = o("33OQ"), c = (k = l) && k.__esModule ? k : {
                default: k
            }, u = o("KHon"), d = o("sFgq"), h = o("5qpw"), p = o("lxNp"), f = n(p), g = $("body"), v = $(window), b = {
                closeOnClickAtOtherDialogs: !0,
                draggable: !0,
                scrollWrap: '<div class="tv-dialog__scroll-wrap">',
                scrollWrapInner: '<div class="tv-dialog__scroll-wrap-inner">',
                withScroll: !0
            }, y = "js-dialog__scroll-wrap", _ = 10, m = 10, e.TVPopup = function(t) {
                function e() {
                    var t, o, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (t = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, i({}, b, n)))).$scrollWrap = t.$content.hasClass(y) ? t.$content : t.$content.find("." + y), t.$scrollWrap.length ? t.$scrollWrapInner = t.$scrollWrap.children().first() : (t.$scrollWrap = t.$content.wrap($(t.options.scrollWrap)).parent(), t.$scrollWrapInner = t.$content.wrap($(t.options.scrollWrapInner)).parent()), t.$actions && t.$scrollWrap.addClass("i-with-actions"), t.options.withScroll && (t.scroll = new d.SidebarCustomScroll(t.$scrollWrap, t.$scrollWrapInner), t.scroll.scrolled.subscribe(null, function() {
                        return t.trigger("scroll")
                    })), t.$scrollWrap.css("overflow", ""), o = t.getDialogId(), t.$el.addClass("tv-dialog--popup i-closed i-hidden"), t.options.width && t.$el.css({
                        width: "calc(100% - " + 2 * m + "px)",
                        "max-width": t.options.width
                    }), t._hotkeys = f.createGroup({
                        desc: "Dialog",
                        isDisabled: function() {
                            return !t.opened
                        },
                        modal: !1
                    }), t.options.closeOnEsc && t._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: function() {
                            return t.close()
                        }
                    }), t.$el.on("mousedown touchstart", t.toTop.bind(t)), t.options.closeOnOutsideClick && (t._preventClick = !0, t.on("beforeOpen", function() {
                        setTimeout(function() {
                            t.opened && ($(document).on("mousedown touchstart", function() {
                                t._preventClick = !1
                            }), $(document).on("click.tv-popup-" + o, function(e) {
                                if (!t._preventClick) {
                                    var o = $(e.target).closest(".js-dialog");
                                    (t.options.closeOnClickAtOtherDialogs || 0 === o.length) && t.isEventOut(e) && t.close()
                                }
                            }))
                        }, 0)
                    }), t.on("beforeClose", function() {
                        return $(document).off("click.tv-popup-" + o)
                    })), t.on("change:zIndex", function() {
                        t.$el.css("z-index", t.zIndex)
                    }), t.on("destroy", function() {
                        var e = function() {
                            t.$el.remove(), t._hotkeys.destroy()
                        };
                        t.opened ? (t.close(), setTimeout(e, a.dur / 2)) : e()
                    }), t
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, u.TVDialogAbstract), s(e, [{
                    key: "open",
                    value: function() {
                        var t, e, o, n, i, s = this;
                        return this.opened ? this : (this.opened = !0, this.trigger("beforeOpen", [this]), this.$el.appendTo(this.$wrap).removeClass("i-hidden").css((s.calcHeight(), t = v.height(), e = v.width(), o = s.$el.height(), n = s.$el.width(), (i = s.options.position) || (i = {
                            top: t / 2 - o / 2,
                            left: e / 2 - n / 2
                        }), i.top > t - o && (i.top = t - o), i.left > e - n && (i.left = e - n), i.top < _ && (i.top = _), i.left < m && (i.left = m), i)), this.focus(), this.toTop(), this._doOpenAnimation().then(function() {
                            s.opened && (s.$el.removeClass("i-closed"), s.options.draggable && ((0, h.lazyJqueryUI)(s.$el).draggable({
                                handle: ".js-dialog__drag",
                                cancel: "input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close",
                                containment: "window",
                                cursor: "-webkit-grabbing"
                            }), s.$el.find(".js-dialog__drag").addClass("tv-dialog__grab")), s.trigger("afterOpen", [s]))
                        }), v.on("resize.tv-popup-" + this.getDialogId(), function() {
                            s.calcHeight(), s.fixPos()
                        }), this)
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = this;
                        if (this.opened) return this.trigger("beforeClose", [this]), this.$el.addClass("i-closed"), this.opened = !1, this._doCloseAnimation().then(function() {
                            t.opened || ((0, h.lazyJqueryUI)(t.$el).draggable("instance").then(function(t) {
                                t && t.destroy()
                            }), t.$el.addClass("i-hidden").detach(), g.css("cursor", "auto"), t.trigger("afterClose", [t]), t.options.destroyOnClose && t.destroy())
                        }), v.off("resize.tv-popup-" + this.getDialogId()), this
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$el.addClass("i-hidden")
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.$el.removeClass("i-hidden")
                    }
                }, {
                    key: "fixPos",
                    value: function() {
                        var t = this.$el[0].getBoundingClientRect(),
                            e = {};
                        t.bottom > c.default.height - _ && (e.top = c.default.height - _ - t.height, e.top < _ && (e.top = _)), t.right > c.default.width - m && (e.left = c.default.width - m - t.width, e.left < m && (e.left = m)), (e.top || e.left) && this.$el.css(e)
                    }
                }, {
                    key: "calcHeight",
                    value: function() {
                        var t, e, o = this.$el[0].getBoundingClientRect(),
                            n = this.$scrollWrapInner[0].getBoundingClientRect(),
                            i = this.$scrollWrap[0].getBoundingClientRect(),
                            s = this.options.height && this.options.height < c.default.height - 2 * _ ? this.options.height : c.default.height - 2 * _;
                        this.$scrollWrap.css({
                            height: ""
                        }).removeClass("i-scrollable"), t = this.$el[0].getBoundingClientRect(), (this.options.height || t.height > s) && ((s -= o.height - i.height) < 60 && (s = 60), this.$scrollWrap.css({
                            height: s
                        })), this.options.withScroll && this.scroll.resize(), (e = s < n.height) || this.$scrollWrapInner.css("top", 0), this.$scrollWrap.toggleClass("i-scrollable", e), this.$actions && this.$actions.toggleClass("tv-dialog__section--actions_with-border", e)
                    }
                }, {
                    key: "updateScroll",
                    value: function() {
                        this.scroll && (this.scroll.updateScroll(), this.scroll.updateScrollBar())
                    }
                }, {
                    key: "scrollToStart",
                    value: function() {
                        this.scroll && this.scroll.scrollToStart()
                    }
                }, {
                    key: "_doOpenAnimation",
                    value: function() {
                        return Promise.resolve()
                    }
                }, {
                    key: "_doCloseAnimation",
                    value: function() {
                        return Promise.resolve()
                    }
                }]), e
            }()
        },
        qNVo: function(t, e, o) {
            "use strict";
            var n, i, s, r, a;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ButtonLoader = void 0, n = function() {
                function t(t, e) {
                    var o, n;
                    for (o = 0; o < e.length; o++)(n = e[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
                return function(e, o, n) {
                    return o && t(e.prototype, o), n && t(e, n), e
                }
            }(), o("IwoD"), i = o("29gu"), s = o("j1f4"), r = function(t) {
                var e, o;
                if (t && t.__esModule) return t;
                if (e = {}, null != t)
                    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e.default = t, e
            }(s), $.fn.tvButtonLoader = (0, i.createTvBlockWithInstance)("tv-button-loader", function(t, e) {
                return new a(t, e)
            }), a = e.ButtonLoader = function() {
                function t(e, o) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.$btn = $(e).addClass("tv-button--loader"), 0 === this.$btn.find(".tv-button__loader").length && this.$btn.html('<span class="tv-button__text">' + this.$btn.html() + '</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span>'), this.loading = this.$btn.hasClass("i-loading")
                }
                return n(t, [{
                    key: "_start",
                    value: function() {
                        var t = this;
                        this.starting = !0, this.$btn.addClass("i-start-load"), this.$btn.trigger("tv-button-loader:start"), setTimeout(function() {
                            t.loading = !0, t.starting = !1, t._startPromise = !1, t.$btn.addClass("i-loading"), t.$btn.removeClass("i-start-load"), t._stopPromise && t._stop()
                        }, 2 * r.dur)
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.starting || (this.stopping ? this._startPromise = !0 : this._start())
                    }
                }, {
                    key: "_stop",
                    value: function() {
                        var t = this;
                        this.stopping = !0, this.$btn.addClass("i-stop-load"), this.$btn.trigger("tv-button-loader:stop"), setTimeout(function() {
                            t.loading = !1, t.stopping = !1, t._stopPromise = !1, t.$btn.removeClass("i-loading i-start-load i-stop-load"), t._startPromise && t._start()
                        }, r.dur)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.stopping || (this.starting ? this._stopPromise = !0 : this._stop())
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.loading ? this.stop() : this.start()
                    }
                }, {
                    key: "contentHtml",
                    value: function(t) {
                        return t ? (this.$btn.find(".tv-button__text").html(t), t) : this.$btn.find(".tv-button__text").html()
                    }
                }, {
                    key: "contentNojQuery",
                    value: function() {
                        return this.$btn.get(0)
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.stop(), this.$btn.addClass("i-disabled")
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.$btn.removeClass("i-disabled")
                    }
                }]), t
            }()
        },
        tKRU: function(t, e, o) {
            "use strict";
            var n = o("nbyR");
            o.d(e, "a", function() {
                return n.TVPopup
            })
        },
        v2PZ: function(t, e, o) {
            "use strict";
            (function(t, n) {
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var s, r, a, l, c, u, d, h, p, f, g, v, b, y, _, m, k, w;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TVDialogAbstract = void 0, s = function() {
                    return function(t, e) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return function(t, e) {
                            var o, n, i = [],
                                s = !0,
                                r = !1,
                                a = void 0;
                            try {
                                for (o = t[Symbol.iterator](); !(s = (n = o.next()).done) && (i.push(n.value), !e || i.length !== e); s = !0);
                            } catch (t) {
                                r = !0, a = t
                            } finally {
                                try {
                                    !s && o.return && o.return()
                                } finally {
                                    if (r) throw a
                                }
                            }
                            return i
                        }(t, e);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(), r = Object.assign || function(t) {
                    var e, o, n;
                    for (e = 1; e < arguments.length; e++)
                        for (n in o = arguments[e]) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                    return t
                }, a = function() {
                    function t(t, e) {
                        var o, n;
                        for (o = 0; o < e.length; o++)(n = e[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(), e.closeAllDialogs = function() {
                    g.forEach(function(t) {
                        return t.close()
                    })
                }, l = o("j1f4"), c = function(t) {
                    var e, o;
                    if (t && t.__esModule) return t;
                    if (e = {}, null != t)
                        for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e.default = t, e
                }(l), o("qNVo"), u = o("QwKQ"), d = i(u), o("nZrM"), o("nec0"), o("IwoD"), h = i(o("4O8T")), p = o("jAh7"), f = 0, g = [], v = void 0, b = 110, y = $(document), _ = {
                    closeOnEsc: !0,
                    closeButton: !0,
                    focusFirstControl: !0,
                    closeOnOutsideClick: !0,
                    closeButtonAddClass: "",
                    focusClass: "i-focused",
                    template: '<div class="tv-dialog" tabindex="-1">',
                    errorTemplate: '<div class="tv-dialog__error i-slided{{# errorMod }} tv-dialog__error--{{ errorMod }}{{/ errorMod }}">{{{ error }}}</div>',
                    titleTemplate: '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag"><div class="js-title-text tv-dialog__title">{{{ title }}}</div></div>',
                    contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border">',
                    actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
                    closeButtonTemplate: '<div class="tv-dialog__close js-dialog__close">' + o("uo4K") + "</div>",
                    helpButtonTemplate: '<a href="{{{ link }}}" target="_blank" class="tv-dialog__help apply-common-tooltip" title="{{{ title }}}"></a>',
                    helpActionsMod: "tv-dialog__section--actions_with-help"
                }, m = {
                    default: "tv-button tv-button--default",
                    primary: "tv-button tv-button--primary",
                    success: "tv-button tv-button--success",
                    danger: "tv-button tv-button--danger",
                    warning: "tv-button tv-button--warning",
                    link: "tv-button tv-button--link",
                    checkbox: "tv-control-checkbox tv-control-checkbox--in-actions",
                    "default-ghost": "tv-button tv-button--default_ghost",
                    "primary-ghost": "tv-button tv-button--primary_ghost",
                    "success-ghost": "tv-button tv-button--success_ghost",
                    "danger-ghost": "tv-button tv-button--danger_ghost",
                    "warning-ghost": "tv-button tv-button--warning_ghost"
                }, k = {
                    _default: '<div data-name="{{ name }}" class="js-dialog__action-click js-dialog__no-drag {{ class }}">{{ text }}</div>',
                    "submit-primary": '<button type="submit" class="tv-button tv-button--primary">{{ text }}</button>',
                    "submit-success": '<button type="submit" class="tv-button tv-button--success">{{ text }}</button>'
                }, w = function(e) {
                    function o() {
                        var e, n, i, a, l, c, u, h, v, w, C, O, x, T, j = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, o), (e = function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" != typeof e && "function" != typeof e ? t : e
                            }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this))).manager = j.manager || (0, p.getRootOverlapManager)(j.ownerDocument), e._id = f++,
                            e.loadingActions = [], e.disabledActions = [], e.firstFocusControl = null, e.options = r({}, _, j), e.$el = $(t.render(e.options.template, {
                                title: e.options.title,
                                closeButton: e.options.closeButton
                            })), e.$el.addClass("js-dialog"), e.el = e.$el[0], e.options.dataset) {
                            n = !0, i = !1, a = void 0;
                            try {
                                for (l = Object.entries(e.options.dataset)[Symbol.iterator](); !(n = (c = l.next()).done); n = !0) u = c.value, v = (h = s(u, 2))[0], "string" == typeof(w = h[1]) && e.el.setAttribute("data-" + v, w)
                            } catch (t) {
                                i = !0, a = t
                            } finally {
                                try {
                                    !n && l.return && l.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                        }
                        for (e.options.addClass && e.$el.addClass(e.options.addClass), e.options.width && e.$el.css({
                                width: "100%",
                                "max-width": e.options.width
                            }), e.on("beforeOpen", function() {
                                e.$wrap = e.manager.ensureWindow(e._id)
                            }), e.on("afterClose", function() {
                                e.$wrap = null, e.manager.unregisterWindow(e._id)
                            }), e.options.title && (e.$title = $(t.render(e.options.titleTemplate, {
                                title: e.options.title
                            })).appendTo(e.$el)), e.$content = $(e.options.contentWrapTemplate).appendTo(e.$el), e.$contentIn = e.$content; e.$contentIn.length;) e.$contentIn = e.$contentIn.children();
                        if (e.$contentIn = e.$contentIn.end(), e.options.content && e.renderContent(e.options.content), (e.options.actions || e.options.help) && (e.$content.hasClass("tv-dialog__section") && e.$content.addClass("tv-dialog__section--no-padding_bottom"), e.$actions = $(e.options.actionsWrapTemplate).appendTo(e.$el)), e.options.actions)
                            for (e.actions = {}, e.$el.on("click touchend", ".js-dialog__action-click", function(t) {
                                    t.preventDefault(), e.actionDispatcher($(t.currentTarget).data("name"))
                                }), C = function(o) {
                                    var n, i, s, r, a, l, c = e.options.actions[o];
                                    c.type || (c.type = "default"), c.class || (c.class = m[c.type] ? m[c.type] : m.default), "checkbox" === c.type ? (n = new d.default({
                                        labelRight: c.text,
                                        name: c.name,
                                        checked: c.checked
                                    }), e.actions[c.name] = n.$el.appendTo(e.$actions), e.actions[c.name].on("change", function() {
                                        setTimeout(function() {
                                            return e.actionDispatcher(c.name, n.checked)
                                        })
                                    })) : e.actions[c.name] = $(t.render(c.template ? c.template : k[c.type] || k._default, c, c)).appendTo(e.$actions), c.method && "function" == typeof e[c.method] && e.on("action:" + c.name, e[c.method].bind(e)), c.addClass && e.actions[c.name].addClass(c.addClass), c.key && (i = void 0, "string" == typeof c.key && c.key.split("+").length > 1 ? (s = [], r = c.key.split("+"), i = function(t) {
                                        s = []
                                    }, a = function(t) {
                                        var o = "" + t.keyCode; - 1 !== r.indexOf(o) && s.indexOf(o) && s.push(o), e._focused && s.length === r.length && (s = [], e.actionDispatcher(c.name))
                                    }, e.on("afterOpen", function() {
                                        y.on("keydown", a), y.on("keyup", i)
                                    }), e.on("beforeClose", function() {
                                        y.off("keydown", a), y.off("keyup", i)
                                    })) : (l = $.isArray(c.key) ? c.key : [c.key], i = function(t) {
                                        !t.isDefaultPrevented() && e._focused && -1 !== l.indexOf(t.keyCode) && e.actionDispatcher(c.name)
                                    }, e.on("afterOpen", function() {
                                        return y.on("keyup", i)
                                    }), e.on("beforeClose", function() {
                                        return y.off("keyup", i)
                                    })))
                                }, O = e.options.actions.length - 1; O >= 0; O--) C(O);
                        return e.options.help && $(t.render(e.options.helpButtonTemplate, e.options.help)).prependTo(e.$actions.addClass(e.options.helpActionsMod)), e.options.closeButton && ((x = $(e.options.closeButtonTemplate)).addClass(e.options.closeButtonAddClass || ""), T = e.$el,
                            1 === e.$el.find(".js-close-button-place").length && (T = e.$el.find(".js-close-button-place")), x.appendTo(T)), e.setZIndex(b + g.length), j.errorMod && (e.errorMod = j.errorMod), e.on("afterOpen", function() {
                            e.$el.focus(), e.options.focusFirstControl && !Modernizr.mobiletouch && (e.firstFocusControl || e.$el.find('input:not([type="hidden"]), textarea').first()).focus()
                        }), e.$el.on("click", ".js-dialog__close", e.close.bind(e)), e.$el.on("mousedown touchstart", e.focus.bind(e)), g.push(e), e
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(o, h.default), a(o, [{
                        key: "renderContent",
                        value: function(t) {
                            return this.$contentIn.html("function" == typeof t ? t(this) : t), this
                        }
                    }, {
                        key: "setDestroyOnClose",
                        value: function(t) {
                            this.options.destroyOnClose = t
                        }
                    }, {
                        key: "setZIndex",
                        value: function(t) {
                            return this.zIndex = t, this.trigger("change:zIndex", [this]), this
                        }
                    }, {
                        key: "toTop",
                        value: function() {
                            for (var t = g.length - 1; t >= 0; t--) g[t].zIndex > this.zIndex && g[t].setZIndex(g[t].zIndex - 1);
                            return this.setZIndex(b + g.length), this.manager.moveToTop(this._id), this._hotkeys && this._hotkeys.promote(), this
                        }
                    }, {
                        key: "isEventOut",
                        value: function(t) {
                            var e, o, n;
                            return this.options.isClickOutFn && void 0 !== (e = this.options.isClickOutFn(t)) ? e : (o = !0, (n = $(t.target)).get(0) !== this.$el.get(0) && ($(">*", this.$el).each(function() {
                                n.get(0) === $(this).get(0) && (o = !1), 0 === n.closest("HTML", $(this).get(0)).length && (o = !1)
                            }), o))
                        }
                    }, {
                        key: "focus",
                        value: function() {
                            var t = this;
                            v && v !== this && v.unfocus(), this._setFocused(), this._focused = !0, this.$el.addClass(this.options.focusClass), this.trigger("focus", [this]), setTimeout(function() {
                                y.on("mousedown.tv-dialog-unfocus-" + t._id, function(e) {
                                    t.isEventOut(e) && (t.unfocus(), y.off("mousedown.tv-dialog-unfocus-" + t._id))
                                })
                            }, 20)
                        }
                    }, {
                        key: "_setFocused",
                        value: function() {
                            v !== this && (v = this)
                        }
                    }, {
                        key: "_setUnfocused",
                        value: function() {
                            v === this && (v = void 0)
                        }
                    }, {
                        key: "unfocus",
                        value: function() {
                            v === this && (this._setUnfocused(), this._focused = !1, this.$el.removeClass(this.options.focusClass).find(":focus").blur(), this.trigger("unfocus", [this]))
                        }
                    }, {
                        key: "isFocused",
                        value: function() {
                            return this._focused
                        }
                    }, {
                        key: "setTitle",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.$title.toggleClass("tv-dialog__section--one-line apply-overflow-tooltip", e), this.$title.html(t), this
                        }
                    }, {
                        key: "setTitleText",
                        value: function(t) {
                            this.$title.find(".js-title-text").text(t)
                        }
                    }, {
                        key: "actionDispatcher",
                        value: function(t) {
                            if (!this.disabledActions.includes(t) && !this.loadingActions.includes(t)) {
                                for (var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) o[n - 1] = arguments[n];
                                this.trigger("action:" + t, [this].concat(o))
                            }
                        }
                    }, {
                        key: "toggleAction",
                        value: function(t, e) {
                            return e || this.disabledActions.includes(t) ? e && this.disabledActions.includes(t) && (this.disabledActions = n.without(this.disabledActions, t)) : this.disabledActions.push(t),
                                this.actions[t].toggleClass("i-disabled", !e), this
                        }
                    }, {
                        key: "actionLoader",
                        value: function(t) {
                            var e = this,
                                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "init";
                            return this.actions[t].tvButtonLoader(o), "init" === o && (this.actions[t].off("tv-button-loader:start.dialog-action").on("tv-button-loader:start.dialog-action", function() {
                                e.loadingActions.push(t)
                            }), this.actions[t].off("tv-button-loader:stop.dialog-action").on("tv-button-loader:stop.dialog-action", function() {
                                e.loadingActions = n.without(e.loadingActions, t)
                            })), this
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            var o = $(t.render(this.options.errorTemplate, {
                                    error: e,
                                    errorMod: this.errorMod
                                })).appendTo(this.$el),
                                n = function() {
                                    o.addClass("i-slided"), setTimeout(function() {
                                        return o.remove()
                                    }, .75 * c.dur)
                                };
                            return setTimeout(function() {
                                return o.removeClass("i-slided")
                            }, 20), y.one("touchstart mousedown keydown", n), this.trigger("error", [this, o]), this
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.$wrap = null, this.manager.unregisterWindow(this._id), this._hotkeys && this._hotkeys.destroy(), g = n.without(g, this);
                            for (var t = 0; t < g.length; t++) g[t].setZIndex(b + t);
                            this.trigger("destroy", [this])
                        }
                    }, {
                        key: "isOpened",
                        value: function() {
                            return Boolean(this.opened)
                        }
                    }, {
                        key: "getDialogId",
                        value: function() {
                            return this._id
                        }
                    }]), o
                }(), e.TVDialogAbstract = w
            }).call(this, o("OiQe"), o("F/us"))
        }
    }
]);