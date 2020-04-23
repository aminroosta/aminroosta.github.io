(window.webpackJsonp = window.webpackJsonp || []).push([
    ["create-dialog"], {
        "29gu": function(t, e, i) {
            "use strict";
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                n = i("uOxu").getLogger("CommonUI.CreateTVBlockPlugin");
            t.exports.createTvBlockPlugin = function(t) {
                if (t) return function(e, i, o) {
                    function n(e, i) {
                        return i ? t[e](r, i) : t[e](r)
                    }
                    var s, r = $(this);
                    return "get" === e ? "function" == typeof t[s = i] ? n(s, o) : t[s] : t[e] ? r.each(function() {
                        return n(e, void 0)
                    }) : r
                }
            }, t.exports.createTvBlockWithInstance = function(t, e) {
                function i(t, e, i) {
                    return void 0 === i ? t[e]() : t[e](i)
                }
                if (t && e) return t = t.toString(),
                    function(s, r, a) {
                        var h, l, c;
                        return "get" === s ? h = r : (l = r, "object" === (void 0 === s ? "undefined" : o(s)) && void 0 === r ? (l = s, s = "init") : "string" != typeof s && (s = "init")), "getInstance" === s ? $(this).eq(0).data(t) : "destroy" === s ? (c = $(this).eq(0).data(t)) ? void("function" == typeof c.destroy ? (i(c, "destroy", l), $(this).eq(0).removeData(t)) : n.logError("[Block Plugin] " + t + " does not support destroy command")) : void console.warn("[Block Plugin] Trying to execute destroy method of " + t + " but it has not been inited") : "get" === s ? (c = $(this).eq(0).data(t)) ? "function" == typeof c[h] ? i(c, h, a) : c[h] : void console.warn("[Block Plugin] Trying to get prop or execute method of " + t + " but it has not been inited") : $(this).each(function() {
                            var o = $(this),
                                r = o.data(t);
                            void 0 === r && (r = void 0 === l ? e(o) : e(o, l), o.data(t, r)), "init" !== s && ("function" == typeof r[s] ? i(r, s, l) : n.logError("[Block Plugin] " + t + " does not support command " + s))
                        })
                    }
            }
        },
        "33OQ": function(t, e, i) {
            "use strict";
            (function(o) {
                function n() {
                    p.width = window.innerWidth, p.height = c.height()
                }

                function s(t) {
                    var e = p.device;
                    p.device = t, p.trigger("changeDevice", [t, e])
                }
                var r, a, h, l, c, d, p, u, _, g, f, b;
                for (Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r = i("4O8T"), a = (f = r) && f.__esModule ? f : {
                        default: f
                    }, h = i("BI5g"), l = $("body"), c = $(window), d = 0, p = {
                        width: null,
                        height: null,
                        device: null,
                        isSafari: !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) || !!navigator.userAgent.match("CriOS"),
                        isPhoneSizeDevice: function() {
                            return "phone" === p.device || "phone-vertical" === p.device
                        },
                        getScrollbarWidth: (b = void 0, function() {
                            var t, e, i, o;
                            return void 0 === b && ((t = document.createElement("div")).style.visibility = "hidden", t.style.width = "100px", t.style.msOverflowStyle = "scrollbar", document.body.appendChild(t), e = t.offsetWidth, t.style.overflow = "scroll", (i = document.createElement("div")).style.width = "100%", t.appendChild(i), o = i.offsetWidth, t.parentNode.removeChild(t), b = e - o), b
                        }),
                        hasScroll: function(t) {
                            return t.get(0).scrollHeight > t.height()
                        },
                        breakpoints: h.breakpoints,
                        widgetbarBreakpoint: 1064,
                        setFixedBodyState: function(t) {
                            var e, i;
                            t && 1 == ++d ? ("hidden" !== $(document.body).css("overflow").toLowerCase() && document.body.scrollHeight > document.body.offsetHeight && ($(".widgetbar-wrap").css("right", p.getScrollbarWidth()), l.css("padding-right", parseInt(l.css("padding-right").replace("px", "")) + p.getScrollbarWidth() + "px").data("wasScroll", !0)),
                                l.addClass("i-no-scroll")) : !t && d > 0 && 0 == --d && (l.removeClass("i-no-scroll"), l.data("wasScroll") && (e = l.get(0), $(".widgetbar-wrap").css("right", 0), i = $(".widgetbar-wrap").width() || 0, e.scrollHeight <= e.clientHeight && (i -= p.getScrollbarWidth()), l.css("padding-right", (i < 0 ? 0 : i) + "px").data("wasScroll", void 0)))
                        }
                    }, u = Object.keys(p.breakpoints).sort(function(t, e) {
                        return p.breakpoints[t] - p.breakpoints[e]
                    }), o.extend(p, a.default.prototype), n(), $(n), c.on("resize", n), _ = function(t) {
                        var e, i, o = u[t],
                            r = 0 === t ? 0 : p.breakpoints[u[t - 1]] + 1,
                            a = p.breakpoints[o],
                            h = (e = r, (i = a) === 1 / 0 ? window.matchMedia("(min-width: " + e + "px)") : window.matchMedia("(min-width: " + e + "px) and (max-width: " + i + "px)"));
                        h.matches && s(o), h.addListener(function(t) {
                            t.matches && (n(), s(o))
                        })
                    }, g = 0; g < u.length; g++) _(g);
                e.default = p, t.exports = e.default
            }).call(this, i("F/us"))
        },
        "5qpw": function(t, e, i) {
            "use strict";

            function o(t) {
                return t in $.fn ? Promise.resolve() : (r || (r = new Promise(function(t) {
                    Promise.all([i.e(76), i.e("lazy-jquery-ui")]).then(function(e) {
                        i("ONnG"), t()
                    }.bind(null, i)).catch(void 0)
                })), r)
            }

            function n(t) {
                return new a(t)
            }
            var s, r, a;
            i.r(e), i.d(e, "LazyJqueryUI", function() {
                return a
            }), i.d(e, "lazyJqueryUI", function() {
                return n
            }), s = i("P5fv"), a = function() {
                function t(t) {
                    this._$elem = t
                }
                return t.prototype.draggable = function() {
                    var t = arguments,
                        e = this._$elem;
                    return o("draggable").then(function() {
                        return e.draggable.apply(e, t)
                    })
                }, t.prototype.resizable = function() {
                    var t = arguments,
                        e = this._$elem;
                    return o("resizable").then(function() {
                        return e.resizable.apply(e, t)
                    })
                }, t.prototype.sortable = function() {
                    var t = arguments,
                        e = this._$elem;
                    return o("sortable").then(function() {
                        return e.sortable.apply(e, t)
                    })
                }, t.prototype.datepicker = function() {
                    var t = arguments,
                        e = this._$elem;
                    return o("datepicker").then(function() {
                        return e.datepicker.apply(e, t)
                    })
                }, t
            }()
        },
        BI5g: function(t, e, i) {
            "use strict";
            var o, n;
            i.r(e), i.d(e, "breakpoints", function() {
                return o
            }), i.d(e, "mobileFirstBreakpoints", function() {
                return n
            }), o = {
                desktop: 1 / 0,
                desktopHd: 1919,
                phone: 767,
                "phone-vertical": 479,
                tablet: 1019
            }, n = {
                base: 0,
                "phone-vertical": 330,
                phone: 480,
                tablet: 768,
                notebook: 1020,
                desktop: 1540,
                "desktop-hd": 1920
            }
        },
        IwoD: function(t, e, i) {},
        QwKQ: function(t, e, i) {
            "use strict";
            (function(o) {
                var n, s, r, a, h, l;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), n = function() {
                    function t(t, e) {
                        var i, o;
                        for (i = 0; i < e.length; i++)(o = e[i]).enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                    return function(e, i, o) {
                        return i && t(e.prototype, i), o && t(e, o), e
                    }
                }(), s = i("29gu"), i("b6p+"), r = i("uOxu").getLogger("Ui.TvControlCheckbox"), a = {
                    labelWrapper: '{{#hasLabel}}<label>{{#labelLeft}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelLeft}}</span>{{/labelLeft}}{{> inputWrapper }}{{#labelRight}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelRight}}</span>{{/labelRight}}</label>{{/hasLabel}}{{^hasLabel}}{{> inputWrapper }}{{/hasLabel}}',
                    inputWrapper: '<{{ tag }} class="{{ customClass }}{{#disabled}} i-disabled{{/disabled}}">{{^hasCheckbox}}{{> checkbox }}{{/hasCheckbox}}{{> box }}{{> ripple }}</{{ tag }}>',
                    checkbox: '<input{{#id}} id="{{ id }}"{{/id}} class="{{> checkboxClass }}" type="checkbox"{{#name}} name="{{ name }}"{{/name}}{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}>',
                    checkboxClass: "{{ customClass }}__input",
                    box: '<span class="{{ customClass }}__box {{#boxAddClass}}{{boxAddClass}}{{/boxAddClass}}">' + i("aLUT") + "</span>",
                    ripple: '<span class="{{ customClass }}__ripple js-ripple"></span>'
                }, h = "i-inited", l = function() {
                    function t(e) {
                        var i, o = e.customClass,
                            n = void 0 === o ? "tv-control-checkbox" : o,
                            s = e.$checkbox,
                            a = e.tag,
                            l = e.id,
                            c = e.name,
                            d = e.checked,
                            p = e.disabled,
                            u = e.labelLeft,
                            _ = e.labelRight,
                            g = e.labelAddClass,
                            f = e.boxAddClass;
                        if (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.$el = null, void 0 === a && (a = u || _ ? "span" : "label"), i = s instanceof $ && !!s.length) {
                            if (!s.is("input[type=checkbox]")) return void r.logError("`$checkbox` need to be input[type=checkbox]");
                            if (s.hasClass(h)) return;
                            this._setInputId(s, l), this._setInputClass(s, n), this._setInputName(s, c), this._setInputChecked(s, d), this._setInputDisabled(s, p), d = !!s.prop("checked"), p = !!s.attr("disabled")
                        }
                        this.$el = this.render({
                            $checkbox: s,
                            hasCheckbox: i,
                            customClass: n,
                            tag: a,
                            id: l,
                            name: c,
                            checked: d,
                            disabled: p,
                            labelLeft: u,
                            labelRight: _,
                            hasLabel: u || _,
                            labelAddClass: g,
                            boxAddClass: f
                        }), this.$checkbox = i ? s : this.$el.find("input[type=checkbox]")
                    }
                    return n(t, [{
                        key: "_setInputId",
                        value: function(t, e) {
                            void 0 !== e && t.attr("id", e)
                        }
                    }, {
                        key: "_setInputClass",
                        value: function(t, e) {
                            var i = o.render(a.checkboxClass, {
                                customClass: e
                            });
                            t.addClass(i)
                        }
                    }, {
                        key: "_setInputName",
                        value: function(t, e) {
                            void 0 !== e && t.attr("name", e)
                        }
                    }, {
                        key: "_setInputChecked",
                        value: function(t, e) {
                            void 0 !== e && t.prop("checked", !!e)
                        }
                    }, {
                        key: "_setInputDisabled",
                        value: function(t, e) {
                            void 0 !== e && (e ? t.setAttribute("disabled", "disabled") : t.removeAttr("disabled"))
                        }
                    }, {
                        key: "render",
                        value: function(t) {
                            var e = t.$checkbox,
                                i = $(o.render(a.labelWrapper, t, a));
                            return t.hasCheckbox && (i.insertBefore(e), i.find("." + t.customClass).andSelf().filter("." + t.customClass).eq(0).prepend(e.detach()), e.addClass(h)), i
                        }
                    }, {
                        key: "checked",
                        set: function(t) {
                            this._setInputChecked(this.$checkbox, !!t)
                        },
                        get: function() {
                            return !!this.$checkbox.prop("checked")
                        }
                    }]), t
                }(), $.fn.tvControlCheckbox = (0, s.createTvBlockWithInstance)("tv-control-checkbox", function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new l(TradingView.mergeObj(e, {
                        $checkbox: t
                    }))
                }), e.default = l, t.exports = e.default
            }).call(this, i("OiQe"))
        },
        YDhE: function(t, e, i) {
            "use strict";

            function o(t) {
                var e = t.type || "popup";
                return delete t.type, "modal" === e ? new n.a(t) : new s.a(t)
            }
            var n, s;
            i.r(e), i.d(e, "createDialog", function() {
                return o
            }), n = i("6aJD"), s = i("tKRU")
        },
        aLUT: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11px" height="9px"><path fill="none" fill-rule="evenodd" stroke-width="2" d="M1 3.22l3.415 3.496L10 1"/></svg>'
        },
        "b6p+": function(t, e, i) {},
        jAh7: function(t, e, i) {
            "use strict";

            function o(t) {
                var e, i, o;
                return void 0 === t && (t = document), null !== (e = t.getElementById("overlap-manager-root")) ? Object(n.ensureDefined)(a.get(e)) : (i = new r(t), o = function(t) {
                    var e = t.createElement("div");
                    return e.style.position = "absolute", e.style.zIndex = 150..toString(), e.style.top = "0px", e.style.left = "0px", e.id = "overlap-manager-root", e
                }(t), a.set(o, i), i.setContainer(o), t.body.appendChild(o), i)
            }
            var n, s, r, a;
            i.r(e), i.d(e, "OverlapManager", function() {
                return r
            }), i.d(e, "getRootOverlapManager", function() {
                return o
            }), n = i("Eyy1"), s = function() {
                function t() {
                    this._storage = []
                }
                return t.prototype.add = function(t) {
                    this._storage.push(t)
                }, t.prototype.remove = function(t) {
                    this._storage = this._storage.filter(function(e) {
                        return t !== e
                    })
                }, t.prototype.has = function(t) {
                    return this._storage.includes(t)
                }, t.prototype.getItems = function() {
                    return this._storage
                }, t
            }(), r = function() {
                function t(t) {
                    void 0 === t && (t = document), this._storage = new s, this._windows = new Map, this._index = 0, this._document = t, this._container = t.createDocumentFragment()
                }
                return t.prototype.setContainer = function(t) {
                    var e = this._container,
                        i = null === t ? this._document.createDocumentFragment() : t;
                    ! function(t, e) {
                        Array.from(t.childNodes).forEach(function(t) {
                            t.nodeType === Node.ELEMENT_NODE && e.appendChild(t)
                        })
                    }(e, i), this._container = i
                }, t.prototype.registerWindow = function(t) {
                    this._storage.has(t) || this._storage.add(t)
                }, t.prototype.ensureWindow = function(t, e) {
                    var i, o;
                    return void 0 === e && (e = {
                        position: "fixed"
                    }), void 0 !== (i = this._windows.get(t)) ? i : (this.registerWindow(t), (o = this._document.createElement("div")).style.position = e.position, o.style.zIndex = this._index.toString(), o.dataset.id = t, this._container.appendChild(o), this._windows.set(t, o), ++this._index, o)
                }, t.prototype.unregisterWindow = function(t) {
                    this._storage.remove(t);
                    var e = this._windows.get(t);
                    void 0 !== e && (null !== e.parentElement && e.parentElement.removeChild(e), this._windows.delete(t))
                }, t.prototype.getZindex = function(t) {
                    var e = this.ensureWindow(t);
                    return parseInt(e.style.zIndex || "0")
                }, t.prototype.moveToTop = function(t) {
                    this.getZindex(t) !== this._index && (this.ensureWindow(t).style.zIndex = (++this._index).toString())
                }, t.prototype.removeWindow = function(t) {
                    this.unregisterWindow(t)
                }, t
            }(), a = new WeakMap
        },
        nec0: function(t, e, i) {},
        nzny: function(t, e, i) {},
        pLUm: function(t, e, i) {
            t.exports = {
                wrapper: "wrapper-2KWBfDVB",
                touch: "touch-E6yQTRo_"
            }
        },
        sFgq: function(t, e, i) {
            "use strict";
            (function(t) {
                function o(e, i, o) {
                    var s, r, a = this;
                    if (this._options = $.extend({}, this._defaultOptions, o || {}), this._$wrapper = e, this._$wrapper.addClass(n.wrapper), this._$content = i, this._scroll_speed = 40, this._shadow_offset = 10, this._header_height = this._options.headerHeight, this._scroll_margin_top = this._options.scrollMarginTop, this.scrolled = new t, this.scrolltoend = new t, this.scrolltostart = new t, this.visibilityCallbacks = [], this._touch = Modernizr.touch, this._touch) return this._$content.css("position", "relative"), void this._$wrapper.addClass(n.touch).scroll(this._onScroll.bind(this));
                    this._$wrapper.css("overflow", "hidden"), this._$wrapper.on("mouseenter.sidebar-scroll", function() {
                        a._bottomFixed || a._dragging || (a._options.alwaysVisible || a._$scrollBar.addClass("active"), a._onScroll())
                    }).on("mouseleave.sidebar-scroll", function() {
                        a._bottomFixed || a._dragging || (a._options.alwaysVisible || a._$scrollBar.removeClass("active"), a._onScroll())
                    }).on("mousewheel.sidebar-scroll", function(t) {
                        if (!t.isDefaultPrevented()) {
                            var e = t.deltaY * (t.deltaFactor / 100);
                            return a.scroll(e)
                        }
                    }), !1 !== this._options.showTopShadow && (this._$shadowTop = $('<div class="sb-inner-shadow top i-invisible">').appendTo(this._$wrapper)), !1 !== this._options.showBottomShadow && (this._$shadowBottom = $('<div class="sb-inner-shadow">').appendTo(this._$wrapper)), this._$shadowTop && this._header_height && this._$shadowTop.css("top", this._header_height - this._shadow_offset), s = this._options.additionalClass ? " " + this._options.additionalClass : "", r = this._options.alwaysVisible ? " active-always" : "", this._$scrollBarWrapper = $('<div class="sb-scrollbar-wrap">').appendTo(this._$wrapper), this._$scrollBar = $('<div class="sb-scrollbar sb-scrollbar-body' + s + r + '"></div>').appendTo(this._$scrollBarWrapper), this._onScroll()
                }
                var n, s = i("5qpw").lazyJqueryUI;
                i("nzny"), n = i("pLUm"), o.prototype.isTouch = function() {
                        return this._touch
                    }, o.prototype.getScrollBar = function() {
                        return this._$scrollBar
                    }, o.prototype._defaultOptions = {
                        headerHeight: 0,
                        additionalClass: "",
                        alwaysVisible: !1,
                        showBottomShadow: !0,
                        scrollMarginTop: 1,
                        bubbleScrollEvent: !1
                    }, o.prototype.initDraggable = function() {
                        if (this._dragInitialized) return this;
                        var t = this;
                        return s(this._$scrollBar).draggable({
                            axis: "y",
                            containment: this._$scrollBarWrapper,
                            start: function() {
                                t._dragging = !0
                            },
                            stop: function() {
                                t._dragging = !1
                            },
                            drag: function(e, i) {
                                t.updateScroll()
                            }
                        }), this._dragInitialized = !0, this
                    }, o.prototype.updateScroll = function() {
                        var t, e, i, o, n;
                        return this._touch ? this : (t = 1, e = Math.ceil(this._$scrollBar.position().top - this._scroll_margin_top - this._header_height), i = this.getContainerHeightWithoutHeader(), n = (o = this._$content.outerHeight()) - i - t, i <= 0 ? this : (this._scroll_target_top = n <= 0 ? this._header_height : Math.min(-e * o / i + this._header_height, this._header_height), e + this._$scrollBar.height() + 2 >= i ? this.scrollToEnd() : (this._$content.css("top", this._scroll_target_top + "px"), this._onScroll()), this))
                    }, o.prototype.getContainerHeightWithoutHeader = function() {
                        return this._$wrapper[0].getBoundingClientRect().height - this._header_height
                    }, o.prototype.getContainerHeight = function() {
                        return this._$wrapper[0].getBoundingClientRect().height
                    }, o.prototype.getContentHeight = function() {
                        return this._$content[0].getBoundingClientRect().height
                    }, o.prototype.updateScrollBar = function() {
                        var t, e, i, o, n, s, r, a, h;
                        return this._touch ? this : (t = 1, e = this._$content.position().top, i = this.getContentHeight(), o = this.getContainerHeight(), n = this.getContainerHeightWithoutHeader(), s = t + this._header_height, r = n - 2 * t, a = (Math.abs(e) - this._header_height) * r / i, h = o * o / i, this.isContentShort() ? (this._$scrollBar.addClass("js-hidden"), this._$wrapper.removeClass("sb-scroll-active")) : (this._$scrollBar.removeClass("js-hidden").height(h).css("top", s + a), this._$wrapper.addClass("sb-scroll-active"), this.initDraggable()), this)
                    },
                    o.prototype.scroll = function(t, e) {
                        var i = this._$content.position().top,
                            o = this._$content.outerHeight(),
                            n = this.getContainerHeightWithoutHeader(),
                            s = o - n - 1,
                            r = e || this._scroll_speed;
                        return s <= 0 || (this._scroll_target_top = Math.max(-s + this._header_height, Math.min(this._header_height, i + t * r)), this.setContentTop(this._scroll_target_top), this._onScroll())
                    }, o.prototype.animateTo = function(t) {
                        var e;
                        return this._touch ? this : (e = this._$content.outerHeight() - this.getContainerHeightWithoutHeader() - 1) <= 0 || (this._scroll_target_top = Math.max(-e + this._header_height, Math.min(this._header_height, -t)), void this._$content.animate({
                            top: this._scroll_target_top
                        }, 500, function() {
                            this._onScroll()
                        }.bind(this)))
                    }, o.prototype.resize = function() {
                        var t, e;
                        this._bottomFixed || (t = this._$content.outerHeight(), e = this._$wrapper.outerHeight(), !this._options.vAlignBottom && t < e ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + this._$wrapper.outerHeight() - this._$content.outerHeight())))
                    }, o.prototype.resizeHeader = function(t) {
                        var e = t - this._header_height;
                        this._header_height = t, this._scroll_target_top += e, this._$shadowTop && this._$shadowTop.css("top", this._header_height - this._shadow_offset), this.resize()
                    }, o.prototype.scrollTo = function(t, e) {
                        var i, o, n, s, r;
                        if (e = $.extend({
                                position: "visible",
                                areaHeight: t instanceof $ ? t.height() : 0
                            }, e), t instanceof $ && (t = e.offsetTop || t.position().top), i = this._$content.position().top, this._$content.outerHeight() - (o = this.getContainerHeightWithoutHeader()) - 1 <= 0) return !0;
                        if (s = (n = -1 * (i - this._header_height)) + o, r = 0, "visible" === e.position) {
                            if (t > n && t + e.areaHeight < s) return !1;
                            r = t + e.areaHeight > s ? s - t - e.areaHeight : n - t
                        } else "top" === e.position && (r = n - t);
                        return this.scroll(r, 1), this._onScroll(), !1
                    }, o.prototype.scrollToEnd = function() {
                        var t = 1,
                            e = this._$content.position().top,
                            i = this._$content.outerHeight(),
                            o = this._$wrapper.outerHeight(),
                            n = i + e,
                            s = i > o ? e + (o - n) + t : t;
                        return this.setContentTop(s), this._onScroll(), this
                    }, o.prototype.scrollToStart = function() {
                        return this.setContentTop(this._header_height), this._onScroll(), this
                    }, o.prototype.currentPosition = function() {
                        return Math.round(this._$content.position().top)
                    }, o.prototype.atStart = function() {
                        return Math.round(this._$content.position().top) >= this._header_height
                    }, o.prototype.atEnd = function(t) {
                        var e, i, o, n;
                        return "number" == typeof t && isFinite(t) || (t = 0), e = 1, i = Math.round(this._$content.position().top), o = this._$content.outerHeight(), n = this._$wrapper.outerHeight(), o - Math.abs(i) - e <= n + t
                    }, o.prototype._onScroll = function(t) {
                        var e, i;
                        return this._touch || this._$content.css("bottom", "auto"), this.scrolled.fire(), this._dragging && !0 !== t || this.updateScrollBar(), e = this.atStart(), i = this.atEnd(), this._$shadowTop && this._$shadowTop.toggleClass("i-invisible", !!e), this._$shadowBottom && this._$shadowBottom.toggleClass("i-invisible", !!i), this._onContentVisible(), !this._atStart && e ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !e && delete this._atStart, !this._atEnd && i ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !i && delete this._atEnd,
                            this._options.vAlignBottom && (this._stickyBottom = this._$content.outerHeight() - Math.abs(this._$content.position().top) - this._$wrapper.outerHeight()), !(!this._atStart && !this._atEnd || ("function" == typeof this._options.bubbleScrollEvent ? !this._options.bubbleScrollEvent() : !this._options.bubbleScrollEvent))
                    }, o.prototype.checkContentVisibility = function() {
                        this._onContentVisible()
                    }, o.prototype.subscribeToContentVisible = function(t, e, i) {
                        this.visibilityCallbacks.push({
                            id: t,
                            $el: e,
                            callback: i
                        })
                    }, o.prototype.triggerVisibilityCallbacks = function(t) {
                        this._onContentVisible(t)
                    }, o.prototype._contentIsVisible = function(t) {
                        return t.$el.position().top > -1 * this.currentPosition()
                    }, o.prototype._onContentVisible = function(t) {
                        var e, i, o;
                        this.visibilityCallbacks.length && (e = t || this._contentIsVisible.bind(this), i = [], o = this.visibilityCallbacks.filter(function(t, o) {
                            if (!$.contains(this._$content, t.$el[0])) return !1;
                            var n = e(t);
                            return n && i.push(o), !n
                        }, this), i.forEach(function(e) {
                            this.visibilityCallbacks[e].callback(!!t)
                        }, this), delete this.visibilityCallbacks, this.visibilityCallbacks = o)
                    }, o.prototype.save = function() {
                        return this._saved = {
                            top: this._$content.position().top,
                            height: this._$content.outerHeight()
                        }, this
                    }, o.prototype.restore = function() {
                        if (this._saved) {
                            if (this._saved.top === this._$content.position().top && this._saved.height === this._$content.outerHeight()) return delete this._saved, this;
                            this._options.vAlignBottom && (this._saved.top -= this._$content.outerHeight() - this._saved.height, this._saved.top > this._header_height && (this._saved.top = this._header_height)), this.setContentTop(this._saved.top), delete this._saved, this._onScroll(!0)
                        }
                        return this
                    }, o.prototype.fixBottom = function() {
                        var t, e;
                        return this._bottomFixed ? this : (this._touch ? (t = this._$content.outerHeight(), e = this._$wrapper.scrollTop(), this._tempIntervalID = setInterval(function() {
                            this._$wrapper.scrollTop(e + (this._$content.outerHeight() - t))
                        }.bind(this), 0)) : this._$content.css({
                            top: "auto",
                            bottom: this._$wrapper.outerHeight() - this._$content.position().top - this._$content.outerHeight()
                        }), this._bottomFixed = !0, this)
                    }, o.prototype.releaseBottom = function() {
                        return this._bottomFixed ? (this._touch ? clearInterval(this._tempIntervalID) : this._$content.css({
                            top: this._$content.position().top,
                            bottom: "auto"
                        }), delete this._bottomFixed, this._onScroll(), this) : this
                    }, o.prototype.setContentTop = function(t) {
                        return this._touch ? this._options.vAlignBottom && this._$content.outerHeight() < this._$wrapper.outerHeight() ? (this._$wrapper.css("overflow-y", "visible"), this._$content.css({
                            position: "absolute",
                            bottom: 0
                        })) : (this._$content.css({
                            position: "relative",
                            bottom: "auto"
                        }), this._$wrapper.css("overflow-y", "auto"), this._$wrapper.scrollTop(-t)) : this._$content.css("top", t), this
                    }, o.prototype.isContentShort = function() {
                        var t = this.getContentHeight(),
                            e = this.getContainerHeightWithoutHeader();
                        return t <= e
                    }, o.prototype.destroy = function() {
                        this._$scrollBarWrapper && this._$scrollBarWrapper.remove(), this._$shadowBottom && this._$shadowBottom.remove(), this._$shadowTop && this._$shadowTop.remove(),
                            this._$wrapper.attr("style", "").off("mouseenter.sidebar-scroll").off("mouseleave.sidebar-scroll").off("mousewheel.sidebar-scroll"), this._$content.attr("style", "")
                    }, e.SidebarCustomScroll = o
            }).call(this, i("aIyQ"))
        },
        uo4K: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
        }
    }
]);