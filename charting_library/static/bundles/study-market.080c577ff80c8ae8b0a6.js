(window.webpackJsonp = window.webpackJsonp || []).push([
    ["study-market"], {
        "24k8": function(t, e, i) {
            "use strict";
            (function(e, s) {
                function a(t, i) {
                    this.HIGHLIGHT_STUDY_NUM_FLICKS = 2, this.SCROLL_TOLERANCE = 10, this._BASIC_STUDIES_PACKAGE_NAME = "tv-basicstudies", this._CUSTOM_STUDIES_PACKAGE_NAME = "Script$USER", this._PUBLISHED_STUDIES_PACKAGE_NAME = "Script$PUB", this._STANDARD_STUDIES_PACKAGE_NAME = "Script$STD", this._SCRIPTING_PACKAGE_NAME = "tv-scripting", this._BASIC_STUDIES_PAGE_NAME = n.enabled("plain_studymarket") ? $.t("Technical Analysis") : $.t("Built-ins"), this._dialog = null, this._selectedStudy = null, this._hotkeys = null, this.visibilityChanged = new e, this._trialAddonDialogShown = !1, this._chartWidgetCollection = t, this._chart = t.activeChartWidget.value(), this._options = $.extend({}, this.DEFAULT_OPTIONS, i || {}), this.concretizeOptions(), this._user = window.user, this.setup(), this.favsModel = m.getInstance(), this.favsModel.favoritesChanged().subscribe(this, this.updateFavorites)
                }
                var n, o, r, d, c, h, l, u, _, p, g, v, f, y, S, m, b, C, E, P, A, I, w;
                i("pfXf"), n = i("Kxc7"), o = i("Eyy1").assert, r = i("FQhm"), d = i("sFgq").SidebarCustomScroll, c = i("0YCj"), h = i("TcSq"), h.extractPineId, l = h.isPublisedPineId, u = i("YDhE").createDialog, i("oNDq").createConfirmDialog, _ = i("UIZs").createSearchControl, p = i("j1f4"), g = i("Vdly"), v = i("33OQ"), f = i("6et/"), y = i("lxNp"), S = i("/3z9"), m = i("LiyS").FavoriteScriptsModel, b = i("emGF").getFavoritesInfo, C = i("GVHu").Study, E = i("CW80").tryFindStudyLineToolNameByStudyId, P = i("mMWL"), i("uOxu").getLogger("Chart.StudyMarketDialog"), i("xUY+"), i("IwoD"), i("m/4m"), A = '<div class="tv-insert-indicator-dialog__body js-dialog__scroll-wrap"><div class="tv-insert-indicator-dialog__left-panel">{{^minimized}}<div id="js-search-placeholder"></div>{{/minimized}}<div class="tv-insert-indicator-dialog__left-panel-content-wrapper js-left-panel-wrapper"><div class="tv-insert-indicator-dialog__tabs-viewport js-tabs-viewport"><div class="tv-insert-indicator-dialog__tabs-container js-tabs-container" data-role="group" data-name="indicators-dialog-tabs-container"></div></div></div></div><div class="tv-insert-indicator-dialog__right-panel js-right-panel">{{#minimized}}{{#withSearch}}<div id="js-search-placeholder"></div>{{/withSearch}}{{/minimized}}<div class="tv-insert-indicator-dialog__pages js-pages"><div id="js-search-results-placeholder"></div></div></div></div>', I = '<div class="tv-insert-indicator-dialog__tabs-group"><div class="tv-insert-indicator-dialog__tab tv-insert-indicator-dialog__tab--group-head js-tab js-tab-head">{{title}}<span class="tv-caret"></span></div><div class="tv-insert-indicator-dialog__tabs"></div></div>',
                    w = '<div class="js-study-item tv-insert-study-item {{^withFavorites}}i-without-stars{{/withFavorites}}">{{#withFavorites}}<div class="tv-insert-study-item__favorite-icon js-favorite-icon" data-role="button" data-name="indicators-dialog-favourite-button"><span class="tv-insert-study-item__star tv-insert-study-item__star--filled">' + i("HHbT") + '</span><span class="tv-insert-study-item__star tv-insert-study-item__star--empty">' + i("GWvR") + '</span></div>{{/withFavorites}}<div class="tv-insert-study-item__title"><div class="tv-insert-study-item__title-text" title="{{titleTooltip}}">{{{title}}}</div></div></div>', a.prototype.destroy = function() {
                        this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null)
                    }, a.prototype.setup = function() {
                        this._initialized = !1, this._loadMore = null, this._$symbolSearchPopup = null, this._market = null, this._studies = null, this._packagesWithTabNames = {}, this._pages = {}, this._tabs = {}, this._subProductIds = {}, this.favsChanged = new e, this._previousInviteOnlyStudiesIds = [], this.studiesReady = new $.Deferred, this.marketPagesReady = new $.Deferred, this._pubSearchCount = [0, 0, 0], this._pubSearchCanLoad = [!0, !0, !0], this._pubSearchEntries = [], this._pubSearchCache = [], this._pubSearchDfd = null, this._pubSearchPageShown = !1, this._w_market_tabs = null, this._w_technical_tabs = null
                    }, a.prototype.init = function() {
                        var t, e = this;
                        return this._initialized ? this.getStudyInfo() : (t = function() {
                            e.setupMarketInfo(), e.getStudyInfo(), e.setUser(e._user), e.prepareLayout(), e.attachHandlers(), e._initialized = !0
                        }, new Promise(function(e) {
                            return t(), e()
                        }))
                    }, a.prototype.DEFAULT_OPTIONS = {
                        onWidget: !1,
                        hideMarketPages: !1,
                        selectBasicPage: !0,
                        minimized: !1,
                        searchKeywords: {
                            earning: new RegExp("EPS"),
                            earnings: new RegExp("EPS"),
                            "trailing twelve months": new RegExp("TTM")
                        }
                    }, a.prototype._PAGE_KEY = "studyMarket.page", a.prototype._PUB_SEARCH_ENTRIES_ON_PAGE = 20, a.prototype.concretizeOptions = function() {
                        n.enabled("study_market_minimized") && (this._options.hideMarketPages = !0, this._options.selectBasicPage = !0, this._options.minimized = !0), this._options.onWidget && (this._options.hideMarketPages = !0)
                    }, a.prototype.setupMarketInfo = function() {}, a.prototype.getStudyInfo = function() {
                        var t = this;
                        return new Promise(function(e, i) {
                            t._chart.withModel(t, function() {
                                t.setupStudyInfo().then(function() {
                                    e()
                                }).catch(function(t) {
                                    i(t)
                                })
                            })
                        })
                    }, a.prototype.setupStudyInfo = function() {
                        var t = this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository(),
                            e = Promise.resolve([]);
                        return Promise.all([t.findAllJavaStudies(), e]).then(function(t) {
                            var e = t[0],
                                i = t[1],
                                s = e.concat(i);
                            s.length;
                            return this._studies = {}, (s = s.filter(function(t) {
                                return !this.isHidedStudy(t)
                            }, this)).forEach(function(t) {
                                var e, i = this.getStudyPackageName(t.id),
                                    s = !(this._options.minimized && i !== this._BASIC_STUDIES_PACKAGE_NAME || this._options.onWidget && (c.isScriptStrategy(t) || i === this._CUSTOM_STUDIES_PACKAGE_NAME));
                                s && (e = this.resolvePackageName(i), o(void 0 !== e, "Cannot resolve packageName " + i), this._studies[e] = this._studies[e] || [], this._studies[e].push(t))
                            }.bind(this), this), this.studiesReady.resolve()
                        }.bind(this))
                    }, a.prototype.setupAddonsInfo = function() {
                        var t, e, i, s, a = [],
                            n = {};
                        for (t in this._market.products) e = this._market.products[t], pro.hasPackage(t) && e.subproduct_ids && e.subproduct_ids[0] && (i = e.subproduct_ids[0].split("$")[1], n[i] = t, a.push(ScriptLib.requestPineAddons(i)));
                        return s = this, Promise.all(a).then(function(t) {
                            return t.reduce(function(t, e) {
                                var i, a;
                                return e && e.length ? (i = e[0].scriptIdPart.split("_")[0], a = [], s._fillScriptsMetainfo(e, a), t[n[i]] = a, t) : t
                            }, {})
                        })
                    }, a.prototype.resolvePackageName = function(t) {
                        return t in this._subProductIds ? this._subProductIds[t] : t
                    }, a.prototype.setUser = function(t) {
                        window.is_authenticated ? this.setupUserData(t) : this.setAnonymous()
                    }, a.prototype.setupUserData = function(t) {
                        this._user = t, this.updateMarketPages()
                    }, a.prototype.setAnonymous = function() {
                        this.setupUserData(null), this.favsChanged.fire()
                    }, a.prototype.isHidedStudy = function(t) {
                        var e = !1,
                            i = !1;
                        return !!t.is_hidden_study || e && !i
                    }, a._breakpointDevice = "phone-vertical", a.prototype._switchPagesContainer = function(t, e) {
                        this._options.minimized || this._options.onWidget || (t === a._breakpointDevice ? this._w_pages.detach().appendTo(this._widget.find(".js-left-panel-wrapper")) : e === a._breakpointDevice && this._w_pages.detach().appendTo(this._widget.find(".js-right-panel")))
                    }, a.prototype.prepareLayout = function() {
                        this._widget = $(s.render(A, {
                            withSearch: n.enabled("study_dialog_search_control") || this._options.onWidget,
                            minimized: this._options.minimized || this._options.onWidget
                        })), this._w_tabs = this._widget.find(".js-tabs-container"), this._w_pages = this._widget.find(".js-pages"), this._loadMore = null, this.preparePages(), this._options.selectBasicPage && this.selectPage(this._BASIC_STUDIES_PAGE_NAME), this._scroll = new d(this._widget.find(".js-tabs-viewport"), this._w_tabs, {
                            showBottomShadow: !1
                        });
                        var t = '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag tv-insert-indicator-dialog__title-container js-title-container"><div class="tv-insert-indicator-dialog__back-button js-back-button js-dialog__no-drag">' + i("MjtL") + '</div><div class="js-title-text tv-dialog__title tv-insert-indicator-dialog__title-text">{{{ title }}}</div></div>';
                        this._dialog = u({
                            title: " ",
                            titleTemplate: t,
                            contentWrapTemplate: this._widget,
                            addClass: "tv-insert-indicator-dialog " + (this._options.onWidget || this._options.minimized ? "i-minimized" : ""),
                            width: this._options.onWidget || this._options.minimized ? 490 : 842,
                            height: 630,
                            withScroll: !1,
                            focusFirstControl: !1,
                            closeOnClickAtOtherDialogs: !1,
                            isClickOutFn: function(t) {
                                return !this._trialAddonDialogShown && (!this._doNotCloseDialog && (this._$symbolSearchPopup ? this._$symbolSearchPopup[0] !== t.target && !this._$symbolSearchPopup[0].contains(t.target) && void 0 : void 0))
                            }.bind(this)
                        }), this._dialog.on("afterClose", this._onDialogClosed.bind(this)), this._dialog.$title.find(".js-back-button").on(Modernizr.mobiletouch ? "touchend" : "click", this.selectPage.bind(this, "")), v.on("changeDevice", function(t, e) {
                            t === a._breakpointDevice && this.currentPage() && this.currentPage().hasClass("js-marketplace-page") && this.selectPage(""), t === a._breakpointDevice && (this._scroll.scrollToStart(), this._updateDialogTitleText()), this._switchPagesContainer(t, e)
                        }.bind(this)), this._switchPagesContainer(v.device, ""), this._showHideBackButton(), this.hide()
                    }, a.prototype.scrollHandler = function() {
                        var t, e;
                        this._loadMore ? (t = $.map(this._w_pages.children(":visible"), function(t) {
                            return $(t).outerHeight(!0)
                        }).reduce(function(t, e) {
                            return t + e
                        }, 0), e = this._widget.find(".js-right-panel").height(), this._w_pages.scrollTop() > t - e - this.SCROLL_TOLERANCE && (this._w_pages.off("scroll.loadMoreOnEnd"), this._loadMore())) : this._w_pages.off("scroll.loadMoreOnEnd")
                    }, a.prototype._updateDialogTitleText = function() {
                        var t;
                        this._dialog && (!("" !== this._currentPageTitle) || this._options.onWidget || this._options.minimized || "phone-vertical" !== v.device ? this._dialog.setTitleText(this._dialogTitleText) : (t = this.currentPage(), this._dialog.setTitleText(t.data("fullTitle"))))
                    }, a.prototype.currentPage = function() {
                        return this._pages[this._currentPageTitle]
                    }, a.prototype.preparePages = function() {
                        this.addSearchPage(), n.enabled("items_favoriting") && this.addFavoritesPage(), this.prepareBasicPage()
                    }, a.prototype.addFavoritesPage = function() {
                        this.addPage("Favorites", {
                            localizedTitle: $.t("Favorites")
                        }), this.updateFavorites()
                    }, a.prototype.addInvitesOnlyPage = function() {
                        this.addPage("invitesOnly", {
                            localizedTitle: $.t("Invite-Only Scripts")
                        })
                    }, a.prototype.prepareBasicPage = function() {
                        var t = this.addPage(this._BASIC_STUDIES_PAGE_NAME, {
                            packageName: this._BASIC_STUDIES_PACKAGE_NAME
                        });
                        this._basicPage = t, this.studiesReady.done(function() {
                            this.resetBasicPage()
                        }.bind(this))
                    }, a.prototype._applyGlobalFilter = function(t) {
                        return this._parentSource && (t = t.filter(function(t) {
                            return t.isStub || c.canBeChild(t)
                        })), t
                    }, a.prototype._applyStrategiesFilter = function(t) {
                        var e = this._parentSource ? "not_strategies" : "none";
                        return "not_strategies" !== e && "only_strategies" !== e || (t = t.filter(function(t) {
                            var i = c.isScriptStrategy(t);
                            return "not_strategies" === e ? !i : i
                        })), t
                    }, a.prototype.resetBasicPage = function() {
                        var t, e, i = this.getPage(this._BASIC_STUDIES_PAGE_NAME);
                        this._studies && (t = this._studies[this._BASIC_STUDIES_PACKAGE_NAME] || [], e = this._studies[this._STANDARD_STUDIES_PACKAGE_NAME] || [], t = t.concat(e), t = this._applyStrategiesFilter(t), t = this._applyGlobalFilter(t), this.preparePageStudies(i, t), this._renderStudiesPage(i))
                    }, a.prototype.resetAllPages = function() {
                        this.resetBasicPage(), this.resetCustomScriptPage(), this.resetPublishedScriptPage(), this.resetInvitesOnlyPage()
                    }, a.prototype._fillScriptsMetainfo = function(t, e) {
                        var i, s;
                        for (i = 0; i < t.length; i++) s = (void 0)(t[i]), TradingView.merge(s, c.parseIdString(s.id)), e.push(s)
                    }, a.prototype.resetCustomScriptPage = function() {}, a.prototype.resetPublishedScriptPage = function() {}, a.prototype._createItemsList = function() {
                        return $('<div class="tv-insert-indicator-dialog__items-list" data-role="group" data-name="indicators-dialog-items-list">')
                    }, a.prototype._createSubGroupItem = function(t) {
                        return $('<div class="tv-insert-study-item tv-insert-study-item--subgroup-header">').text(t)
                    }, a.prototype._createItemsGroup = function(t, e, i) {
                        var s, a = this._createItemsList();
                        return this.fillStudies(a, t, i), s = $('<div class="tv-insert-indicator-dialog__subgroup">'),
                            e.length && s.append(this._createSubGroupItem(e)), s.append(a), s
                    }, a.prototype.addSearchPage = function() {
                        var t, e = _({
                            addClass: "tv-insert-indicator-dialog__search-control",
                            dataName: "indicators-dialog-search-control"
                        });
                        this._tabs.search = e.$control.data("title", "search"), this._pages.search = $('<div class="tv-insert-indicator-dialog__page tv-insert-indicator-dialog__page--search">').data("title", "search"), this._pages.search.data("fullTitle", $.t("Search")), t = null, this._search_value = null, this._search_input = e.$input, e.inputChangedDelegate.subscribe(null, function() {
                            t && clearTimeout(t), t = setTimeout(function() {
                                t = null, this.search(this._search_input.val()), this._w_pages.scrollTop(0)
                            }.bind(this), 200)
                        }.bind(this)), this._search_input.focus(function() {
                            this.search(this._search_input.val())
                        }.bind(this)), this._widget.find("#js-search-placeholder").replaceWith(this._tabs.search), this._widget.find("#js-search-results-placeholder").replaceWith(this._pages.search)
                    }, a.prototype._onEnterKeyHandler = function(t) {
                        null !== this._selectedStudy ? this.insertThisStudy(this._selectedStudy) : this._insertStudyByShortDescription()
                    }, a.prototype._onUpKeyHandler = function(t) {
                        var e, i, s;
                        t.preventDefault(), null !== this._selectedStudy && (i = (e = this.currentPage().find(".js-study-item")).index(this._selectedStudy), (s = e.eq(i - 1)).length && i > 0 && (this._selectedStudy.removeClass("tv-insert-study-item--selected"), s.addClass("tv-insert-study-item--selected"), this._selectedStudy = s, this._ensureSelectedItemIsVisible()))
                    }, a.prototype._onDownKeyHandler = function(t) {
                        var e, i, s;
                        t.preventDefault(), null !== this._selectedStudy && this.currentPage()[0].contains(this._selectedStudy[0]) ? (i = (e = this.currentPage().find(".js-study-item")).index(this._selectedStudy), (s = e.eq(i + 1)).length && (this._selectedStudy.removeClass("tv-insert-study-item--selected"), s.addClass("tv-insert-study-item--selected"), this._selectedStudy = s, this._ensureSelectedItemIsVisible())) : (this._selectedStudy = this.currentPage().find(".js-study-item").first(), this._selectedStudy.addClass("tv-insert-study-item--selected"))
                    }, a.prototype._ensureSelectedItemIsVisible = function() {
                        var t, e, i, s, a, n;
                        null !== this._selectedStudy && (t = this._w_pages, e = this._selectedStudy[0].getBoundingClientRect(), i = t[0].getBoundingClientRect(), s = this.currentPage()[0].getBoundingClientRect().top, a = e.top - s, n = 3, e.top - i.top < 0 ? t.scrollTop(a - n) : e.bottom - i.bottom > 0 && t.scrollTop(a - i.height + e.height + n))
                    }, a.prototype.search = function(t, e, i) {
                        function s(t, e, i, s, a, n) {
                            t.push(e), t[t.length - 1].matchPriority = s, a && (t[t.length - 1].matchIndex = i.match(n).index)
                        }
                        var a, o, r, d, c, h = this;
                        (this._search_value !== t || e) && (a = this._pages.search, o = [], r = function(t) {
                            return t.replace(/[!-\/[-^{-}]/g, "\\$&")
                        }, "" !== t && (d = t.split("").map(function(t, e) {
                            var i = r(t);
                            return 0 !== e && (i = "[/\\s-]" + i), "(" + i + ")"
                        }).join("(.*?)") + "(.*)", o.push({
                            fullMatch: new RegExp("(" + r(t) + ")", "i"),
                            re: new RegExp("^" + d, "i"),
                            reserveRe: new RegExp(d, "i"),
                            fuzzyHighlight: !0
                        }), t.toLowerCase() in this.DEFAULT_OPTIONS.searchKeywords && o.push({
                            fullMatch: this.DEFAULT_OPTIONS.searchKeywords[t.toLowerCase()],
                            re: this.DEFAULT_OPTIONS.searchKeywords[t.toLowerCase()],
                            fuzzyHighlight: !1
                        })), this._search_value = t, c = $.Deferred(), h._currentAsyncSearchDfd = c, n.enabled("plain_studymarket") ? c.resolve([]) : PublishedScript.suggest(t).done(function(t) {
                            var e = [];
                            t && t.results;
                            c.resolve(e)
                        }).fail(function() {
                            c.resolve([])
                        }), c.done(function(e) {
                            var i, n, r, d, l, u, _, p, g, v, f, y, S, m, b, C, E, P, A, I, w, T;
                            if (h._currentAsyncSearchDfd === c) {
                                for ((i = Object.keys(h._studies)).indexOf(h._PUBLISHED_STUDIES_PACKAGE_NAME) < 0 && i.push(h._PUBLISHED_STUDIES_PACKAGE_NAME), i.sort(), r = (n = [h._BASIC_STUDIES_PACKAGE_NAME, h._STANDARD_STUDIES_PACKAGE_NAME, h._PUBLISHED_STUDIES_PACKAGE_NAME, h._CUSTOM_STUDIES_PACKAGE_NAME]).length; r--;) d = n[r], -1 !== (l = i.indexOf(d)) && (i.splice(l, 1), i.unshift(d));
                                for (u = {}, _ = 0, p = 0; p < i.length; p++) {
                                    for (g = i[p], v = [], f = h._studies[g], g === h._PUBLISHED_STUDIES_PACKAGE_NAME && (f = e), r = 0; r < f.length; r++)
                                        if (y = f[r], o.length)
                                            for (S = 0; S < o.length; S++)(m = o[S].re).lastIndex = 0, b = o[S].fullMatch, (C = y.shortDescription) && C.toLowerCase() === t.toLowerCase() ? s(v, y, C, 3, !0, b) : C && b.test(C) ? s(v, y, C, 2, !0, b) : (C = this._getScriptLocalizedName(y), b.test(C) ? s(v, y, C, 1, !0, b) : m.test(C) && s(v, y, C, 0, !0, m));
                                        else v.push(y);
                                    if ((v = h._applyGlobalFilter(v)).length) {
                                        switch (E = g, g) {
                                            case h._BASIC_STUDIES_PACKAGE_NAME:
                                            case h._STANDARD_STUDIES_PACKAGE_NAME:
                                                E = h._BASIC_STUDIES_PAGE_NAME;
                                                break;
                                            case h._CUSTOM_STUDIES_PACKAGE_NAME:
                                                E = $.t("My Scripts");
                                                break;
                                            case h._PUBLISHED_STUDIES_PACKAGE_NAME:
                                                E = $.t("Public Library");
                                                break;
                                            default:
                                                g in h._packagesWithTabNames && (E = h._packagesWithTabNames[E])
                                        }
                                        E in u || (u[E] = []), u[E] = u[E].concat(v), _ += v.length
                                    }
                                }
                                for (P = this._selectedStudy ? this._selectedStudy.data("study") : null, a.html(""), A = Object.keys(u), r = 0; r < A.length; ++r)
                                    if (v = u[E = A[r]], o.length && Array.prototype.sort.call(v, function(t, e) {
                                            if (t.matchPriority < e.matchPriority) return 1;
                                            if (t.matchPriority > e.matchPriority) return -1;
                                            if (t.matchPriority === e.matchPriority) switch (t.matchIndex) {
                                                case void 0:
                                                    return 0;
                                                default:
                                                    return t.matchIndex > e.matchIndex ? 1 : t.matchIndex < e.matchIndex ? -1 : 0
                                            }
                                        }), I = this._createItemsGroup(v, this._options.minimized ? "" : $.t(E), o), a.append(I), this._selectedStudy = null, P && P.pine && P.pine.version < 0)
                                        for (w = this.currentPage().find(".js-study-item"), S = 0; S < w.length; ++S)
                                            if ((T = $(w[S])).data("study").id === P.id) {
                                                this._selectedStudy = T, this._selectedStudy.addClass("tv-insert-study-item--selected");
                                                break
                                            }
                                0 === _ && a.append('<p class="tv-insert-indicator-dialog__not-found-message">' + $.t("No indicators matched your criteria.") + "</p>")
                            }
                        }.bind(this))), i || this.selectPage("search")
                    }, a.prototype.updateSearchPage = function() {
                        var t = this._search_input.val();
                        this.search(t, !0, !0)
                    }, a.prototype.updateMarketPages = function() {}, a.prototype.preparePageStudies = function(t, e, i, s) {
                        t && (s || (e = this.sortStudies(e)), t.data("studies", e))
                    }, a.prototype.addPage = function(t, e) {
                        var i, s, a, n;
                        return i = (e = $.extend({}, e)).localizedTitle || $.t(t), s = t.toLowerCase(), a = $('<div class="tv-insert-indicator-dialog__page">').data("title", s), n = $('<div class="tv-insert-indicator-dialog__tab js-tab"></div>').text(i).data("title", s).attr("title", i), a.data("fullTitle", i),
                            n.toggleClass("tv-insert-indicator-dialog__tab--beta", !!e.beta), e.packageName && (this._packagesWithTabNames[e.packageName] = t), this._pages[s] = a, this._tabs[s] = n, e.withoutTopPadding && a.addClass("tv-insert-indicator-dialog__page--without-top-padding"), e.noFlex && a.addClass("tv-insert-indicator-dialog__page--no-flex"), e.market ? (this._getOrCreateMarketTab().find(".tv-insert-indicator-dialog__tabs").append(n), a.addClass("js-marketplace-page")) : this._w_market_tabs ? n.insertBefore(this._w_market_tabs) : this._w_tabs.append(n), this._w_pages.append(a), a.toggleClass("i-hidden", s !== this._currentPageTitle), a
                    }, a.prototype._createGroupTab = function(t, e) {
                        var i = $(s.render(I, {
                            title: t
                        }));
                        return i.find(".js-tab-head").on("click", function() {
                            this._expandCollapseTabs(i, e)
                        }.bind(this)), this._expandCollapseTabs(i, e, g.getBool(e, !0), !0), i.data("settings-open-key", e), this._w_tabs.append(i), i
                    }, a.prototype._getOrCreateMarketTab = function() {
                        return this._w_market_tabs || (v.device === a._breakpointDevice && g.setValue("studyMarket.marketTabIsOpen", !1), this._w_market_tabs = this._createGroupTab($.t("Marketplace Add-ons"), "studyMarket.marketTabIsOpen"), this._w_market_tabs.addClass("tv-insert-indicator-dialog__tabs-group--marketplace")), this._w_market_tabs
                    }, a.prototype._onDialogClosed = function() {
                        null !== this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._selectedStudy && this._selectedStudy.removeClass("tv-insert-study-item--selected"), this._selectedStudy = null, this.visibilityChanged.fire(!1), f.removeListener("StudyMarketDialog")
                    }, a.prototype.hide = function() {
                        this._dialog.close()
                    }, a.prototype.show = function(t) {
                        return this.init().then(function() {
                            var e = !1,
                                i = t instanceof C && t || null;
                            i !== this._parentSource && (this._parentSource = i, this._dialogTitleText = this._parentSource ? $.t("Apply Indicator on {0}").format(this._parentSource.title(!0)) : n.enabled("study_dialog_fundamentals_economy_addons") ? $.t("Indicators & Strategies") : $.t("Indicators"), e = !0), this._updateDialogTitleText(), this._clearInput(), e && this.resetAllPages(), this._scroll.scrollTo(0), this.visibilityChanged.fire(!0), this._hotkeys || (this._hotkeys = y.createGroup({
                                desc: "Study market dialog"
                            }), this._hotkeys.add({
                                desc: "Pick selected",
                                hotkey: 13,
                                handler: this._onEnterKeyHandler.bind(this)
                            }), this._hotkeys.add({
                                desc: "Move selection up",
                                hotkey: 38,
                                handler: this._onUpKeyHandler.bind(this)
                            }), this._hotkeys.add({
                                desc: "Move selection down",
                                hotkey: 40,
                                handler: this._onDownKeyHandler.bind(this)
                            })), f.registerListener("StudyMarketDialog", function(t) {
                                return !t.ctrlKey && (47 !== t.which && (!!t.charCode && (!(!t.which || t.which <= 32) && (!/^(input|textarea)$/i.test(t.target.tagName) && (t.preventDefault(), !!(TradingView.onWidget() || this._options.minimized && !n.enabled("study_dialog_search_control")) || (this._search_input.focus(), this._search_input[0].value = String.fromCharCode(t.charCode), !0))))))
                            }.bind(this)), this._dialog.open(), r.emit("indicators_dialog")
                        }.bind(this))
                    }, a.prototype.isVisible = function() {
                        return !!this._dialog && this._dialog.isOpened()
                    }, a.prototype.getPage = function(t) {
                        return t = t.toLowerCase(), this._pages[t]
                    },
                    a.prototype._showHideBackButton = function() {
                        var t, e, i;
                        this._dialog && (t = "" !== this._currentPageTitle, e = this._options.minimized, i = this._options.onWidget, this._dialog.$el.find(".js-title-container").toggleClass("i-with-back-button", t && !e && !i))
                    }, a.prototype._renderPageStudiesList = function(t) {
                        var e, i = this._selectedStudy ? this._selectedStudy.data("study") : null,
                            s = t.data("studies") || [];
                        s.length > 0 && (t.empty(), e = this._createItemsList(), this.fillStudies(e, s, null, i && i.id), t.append(e))
                    }, a.prototype._renderStudiesPage = function(t, e) {
                        (e || t.is(":empty")) && this._renderPageStudiesList(t)
                    }, a.prototype.selectPage = function(t) {
                        var e, i, s, a, n, o, r = this;
                        t = t.toLowerCase(), this._currentPageTitle !== t && ("" === t || t in this._pages && t in this._tabs && ("favorites" !== t || this.hasVisibleFavorites()) ? (i = (e = this._currentPageTitle || Object.keys(this._pages).find(function(t) {
                            return t in r._pages && !r._pages[t].hasClass("i-hidden")
                        })) ? this.getPage(e) : void 0, (s = this.getPage(t)) && (i && (i.addClass("i-hidden"), this._tabs[e].removeClass("i-active")), s.removeClass("i-hidden"), this._tabs[t].addClass("i-active"), s.trigger("show-page"), 0 !== (a = this._tabs[t].parents(".tv-insert-indicator-dialog__tabs-group")).length && (n = a.find(".js-tab-head"), this._expandCollapseTabs(a, n.data("settings-open-key"), !0, !0))), this._currentPageTitle = t, this._w_pages.scrollTop(0), g.setValue(this._PAGE_KEY, t), this._selectedStudy && (this._selectedStudy.removeClass("tv-insert-study-item--selected"), this._selectedStudy = null), o = "" !== this._currentPageTitle, this._widget.find(".js-tabs-viewport").toggleClass("i-active", !o), this._w_pages.toggleClass("i-active", o), this._showHideBackButton(), o || this._search_input.blur(), this._updateDialogTitleText()) : this.selectPage(this._BASIC_STUDIES_PAGE_NAME))
                    }, a.prototype.attachHandlers = function() {
                        var t = Modernizr.mobiletouch ? "touchend" : "click",
                            e = this;
                        Modernizr.mobiletouch && this._w_pages.on("touchstart", ".js-study-item", function(t) {
                            e._touchStart = $.extend({}, t.originalEvent.touches[0])
                        }), this._w_tabs.on("click", ".js-tab", this._onTabClicked.bind(this)), n.enabled("items_favoriting") && this._w_pages.on(t, ".js-favorite-icon", this.toggleItem.bind(this)), this._w_pages.on(t, ".js-study-item", function(t) {
                            var i;
                            e._touchStart && (i = e._w_pages.find(".tv-insert-study-item")[0].clientHeight, Math.abs(e._touchStart.screenY - t.originalEvent.changedTouches[0].screenY) > i) || (e._selectedStudy && e._selectedStudy.removeClass("tv-insert-study-item--selected"), e._selectedStudy = $(t.target).closest(".js-study-item"), e._selectedStudy.addClass("tv-insert-study-item--selected"), e.insertThisStudy(e._selectedStudy))
                        }), this._search_input[0].addEventListener("keydown", function(t) {
                            var i = S.hashFromEvent(t);
                            13 === i ? e._onEnterKeyHandler(t) : 38 === i ? e._onUpKeyHandler(t) : 40 === i && e._onDownKeyHandler(t)
                        })
                    }, a.prototype._onTabClicked = function(t) {
                        var e = $(t.currentTarget).data("title");
                        e && "search" !== e && this.selectPage(e), t.stopPropagation()
                    }, a.prototype._expandCollapseTabs = function(t, e, i, s) {
                        var a, n = t.hasClass("i-dropped");
                        if (void 0 === i) i = !t.hasClass("i-dropped");
                        else if (n === i && !s) return;
                        a = t.find(".tv-insert-indicator-dialog__tabs"), t.toggleClass("i-dropped", !!i), s ? a.toggleClass("i-hidden", !i) : (a.removeClass("i-hidden"), a.velocity(i ? "slideDown" : "slideUp", {
                            duration: p.dur / 2,
                            complete: function() {
                                g.setValue(e, i), this._scroll.updateScroll()
                            }.bind(this)
                        }))
                    }, a.prototype.toggleItem = function(t) {
                        var e = $(t.target).closest(".js-study-item").data("study");
                        return this.toggleFavorite(e.id), this.toggleEverywhere(e.id), !1
                    }, a.prototype.toggleEverywhere = function(t) {
                        var e = this,
                            i = this.favsModel.isFav(t),
                            s = e.favsModel.favId(t);
                        this._w_pages.find(".js-study-item").filter(function(t, i) {
                            var a = $(i).data("study");
                            return !!a && e.favsModel.favId(a.id) === s
                        }).find(".js-favorite-icon").toggleClass("i-starred", i).attr("title", this.favTitle(i))
                    }, a.prototype.toggleFavorite = function(t) {
                        this.favsModel.isFav(t) ? this.favsModel.removeFavorite(t) : this.favsModel.addFavorite(t)
                    }, a.prototype._getInviteOnlyStudies = function() {
                        return new Promise(function(t, e) {
                            t([])
                        })
                    }, a.prototype.resetInvitesOnlyPage = function() {
                        var t = this;
                        t._tabs.invitesonly && (t._previousInviteOnlyStudiesIds && 0 !== t._previousInviteOnlyStudiesIds.length ? t._tabs.invitesonly.show() : t._tabs.invitesonly.hide()), t._getInviteOnlyStudies().then(function(e) {
                            t._previousInviteOnlyStudies = e, t.preparePageStudies(t._pages.invitesonly, e), t._tabs.invitesonly && (e && 0 !== e.length ? t._tabs.invitesonly.show() : t._tabs.invitesonly.hide())
                        }, function() {
                            t.preparePageStudies(t._pages.invitesonly, []), t._tabs.invitesonly && t._tabs.invitesonly.hide()
                        })
                    }, a.prototype.updateFavorites = function() {
                        var t, e;
                        this._w_pages && (t = this, e = function(e) {
                            var i, s, n, o, r, d = function() {
                                "favorites" === t._currentPageTitle && t.selectPage(v.device === a._breakpointDevice ? "" : t._BASIC_STUDIES_PAGE_NAME), t._w_pages.find(".js-favorite-icon").removeClass("i-starred"), t._tabs && t._tabs.favorites && t._tabs.favorites.hide()
                            };
                            if (t._tabs.favorites && 0 === e.length) d();
                            else {
                                for (i = [], s = 0; s < e.length; s++) o = (n = e[s]).info.studyMarketShittyObject, "pine" === n.item.type ? l(n.item.pineId) ? null != (r = o).imageUrl && i.push(this._createPublishedScriptMetaInfo(r)) : i.push((void 0)(o)) : i.push(o);
                                0 === i.length ? d() : this._tabs.favorites.show(), i = this._applyStrategiesFilter(i), this.preparePageStudies(this._pages.favorites, i), this._renderStudiesPage(this._pages.favorites, !0), this._w_pages.find(".js-study-item").find(".js-favorite-icon").removeClass("i-starred"), e.forEach(function(t) {
                                    this.toggleEverywhere(t.item.pineId || t.item.studyId)
                                }, this)
                            }
                        }.bind(this), Promise.resolve(this.studiesReady.promise()).then(function() {
                            return b(this.getVisibleFavorites(), this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository())
                        }.bind(this)).then(e))
                    }, a.prototype.hasVisibleFavorites = function() {
                        return !!this.getVisibleFavorites().length
                    }, a.prototype.getVisibleFavorites = function() {
                        return this.checkExcludePackageStudies(this.favsModel.favorites())
                    }, a.prototype.checkExcludePackageStudies = function(t) {
                        return t.filter(function(t) {
                            var e = t.pineId || t.studyId,
                                i = this.getStudyPackageName(e);
                            return i === this._PUBLISHED_STUDIES_PACKAGE_NAME || !!(this._studies && this._studies[i] && $.grep(this._studies[i], function(t) {
                                return t.id.indexOf(e) >= 0
                            }).length > 0) && (i === this._BASIC_STUDIES_PACKAGE_NAME || i === this._STANDARD_STUDIES_PACKAGE_NAME || i === this._CUSTOM_STUDIES_PACKAGE_NAME || i === this._SCRIPTING_PACKAGE_NAME || pro.hasPackage(i) && i in this._studies)
                        }, this)
                    }, a.prototype.sortStudies = function(t) {
                        return t.sort(function(t, e) {
                            return (t = t.scriptName || t.description_localized || t.description) > (e = e.scriptName || e.description_localized || e.description) ? 1 : t < e ? -1 : 0
                        })
                    }, a.prototype.fillStudies = function(t, e, i, s) {
                        var a;
                        t.empty(), e.forEach(function(e) {
                            e ? (a = this.createStudyListItem(e, i), e.id === s && (this._selectedStudy = a, this._selectedStudy.addClass("tv-insert-study-item--selected"))) : (a = document.createElement("div")).className = "placeholder", t.append(a)
                        }, this)
                    }, a.prototype.createStudyListItem = function(t, e) {
                        var i, a, o, r, d, h, l, u, _, p, g, v, f, y, S, m, b, C, E, P, A, I, T, k, D, M, N = this._getScriptLocalizedName(t),
                            U = this.favsModel.isFav(t.id),
                            x = [];
                        if (e && N)
                            for (i = [], e instanceof RegExp ? i.push({
                                    re: e,
                                    fuzzyHighlight: !1
                                }) : $.isArray(e) && (i = e), a = 0; a < i.length; a++)
                                if (o = i[a].fullMatch, r = i[a].reserveRe, d = i[a].re, o.lastIndex = 0, d.lastIndex = 0, (h = o.exec(N)) ? i[a].fuzzyHighlight = !1 : (!(h = d.exec(N)) && r && (h = r.exec(N)), i[a].fuzzyHighlight = !0), h)
                                    if (i[a].fuzzyHighlight)
                                        for (l = h.index, u = 1; u < h.length; u++) _ = h[u].length, u % 2 && (x[l] = !0), l += _;
                                    else
                                        for (p = 0; p < h[0].length; p++) x[h.index + p] = !0;
                        return v = (g = TradingView.clean(N, !0)).replace(/./g, function(t, e) {
                                if ("<" === t ? t = "&lt;" : "&" === t ? t = "&amp;" : '"' === t && (t = "&quot;"), x[e]) {
                                    if (" " === t || "-" === t || "/" === t) return x[e + 1] = !0, t;
                                    t = '<span class="i-match">' + t + "</span>"
                                }
                                return t
                            }), f = !!t.pine, y = this.getStudyPackageName(t.id), S = f && y === this._PUBLISHED_STUDIES_PACKAGE_NAME, m = f && y === this._CUSTOM_STUDIES_PACKAGE_NAME, b = f && y === this._STANDARD_STUDIES_PACKAGE_NAME, C = f && [TVScript.Access.ACCESS_CLOSED_NEEDS_AUTH, TVScript.Access.ACCESS_CLOSED_NO_AUTH].indexOf(t.pine.access) >= 0, E = f && TVScript.Access.ACCESS_CLOSED_NEEDS_AUTH === t.pine.access, P = f && E && void 0 !== t.pine.userHaveAccess, A = f && t.pine.userHaveAccess, I = !!t.TVScriptSourceCode, T = f && !b && !C && (m || S || I), k = {
                                closed: $.t("Invite-only script. Contact the author for more information."),
                                open: $.t("Invite-only script. You have been granted access.")
                            }, D = $(s.render(w, {
                                publishedOrUserScript: m || S,
                                title: v,
                                titleTooltip: TradingView.strip_tags(g),
                                isStrategy: c.isScriptStrategy(t),
                                isInviteOnly: E,
                                showAccessIcon: P,
                                accessIconClass: A ? "tv-insert-study-item__green-lock-icon" : "tv-insert-study-item__red-lock-icon",
                                accessTooltip: A ? k.open : k.closed,
                                author: t.author && t.author.username,
                                authorProfileUrl: !1,
                                likes: t.agreeCount ? t.agreeCount + " " + $.t("like", {
                                    plural: "likes",
                                    count: t.agreeCount
                                }) : "",
                                showMoreButton: !!t.imageUrl,
                                deleteButton: !t.imageUrl && m,
                                withFavorites: n.enabled("items_favoriting") && !this._options.minimized && !this._options.onWidget
                            })), T || D.find(".js-show-source-btn").removeClass("js-show-source-btn").addClass("i-empty"), D.data("study", t), void 0 !== t.isCustomIndicator && D.addClass("custom-indicator"),
                            n.enabled("items_favoriting") && ((M = D.find(".js-favorite-icon")).toggleClass("i-starred", !!U), M.attr("title", this.favTitle(!!U))), n.enabled("graying_disabled_tools_enabled") && ChartApiInstance.studiesAccessController.isToolGrayed(t.description) && D.addClass("i-grayed"), D
                    }, a.prototype.favTitle = function(t) {
                        return t ? $.t("Remove from favorites") : $.t("Add to favorites")
                    }, a.prototype.insertThisStudy = function(t) {
                        var e;
                        if (!t.hasClass("placeholder")) return e = t.data("study"),
                            function() {
                                n.enabled("graying_disabled_tools_enabled") && ChartApiInstance.studiesAccessController.isToolGrayed(e.description) ? r.emit("onGrayedObjectClicked", {
                                    type: "study",
                                    name: e.description
                                }) : (t.highlight(this.HIGHLIGHT_STUDY_NUM_FLICKS), this._insertStudy(e))
                            }.bind(this)(), !1
                    }, a.prototype._insertStudy = function(t) {
                        var e, i, s, a, n, o = t.isStub ? null : E(t.id);
                        null === o ? (e = this._chartWidgetCollection.activeChartWidget.value()) && (i = t.isStub ? {
                            type: "pine",
                            pineId: t.scriptIdPart,
                            pineVersion: Version.parse(t.pine.version).toString()
                        } : {
                            type: "java",
                            studyId: t.id
                        }, s = this, a = this._dialog.focus.bind(this._dialog), s._doNotCloseDialog = !0, n = function() {
                            a(), s._doNotCloseDialog = !1
                        }, e.insertStudy(i, this._parentSource, t.description).then(n).catch(n)) : P.tool.setValue(o)
                    }, a.prototype.onPackagesUpdated = function() {
                        var t = this._chartWidgetCollection,
                            e = t.activeChartWidget.value();
                        window.is_authenticated ? (e.onConnected().subscribe(this, this.update, !0), e.chartSession().isConnected().value() && t.reconnectChartApi(!0)) : this.update()
                    }, a.prototype.update = function() {
                        this.setUser(window.user), PublishedScript.cleanCache(), this.resetAllPages();
                        var t = this;
                        this.init().then(function() {
                            t._renderMarketAddonPage(t.currentPage(), !0)
                        })
                    }, a.prototype.getStudyList = function(t) {
                        function e(t) {
                            i.push(t)
                        }
                        var i, s;
                        if (!this.studiesReady.isResolved()) return [];
                        for (s in i = [], this._studies)(s === this._BASIC_STUDIES_PACKAGE_NAME || pro.hasPackage(s)) && (this._studies[s].forEach(e), t && i.push({
                            separator: !0
                        }));
                        return t && i.splice(i.length - 1, 1), i
                    }, a.prototype.getStudyPackageName = function(t) {
                        var e, i, s, a, n, o;
                        if (t) return (i = 1 === (e = t.split("@")).length) || (s = c.getPackageName(t)) === this._SCRIPTING_PACKAGE_NAME ? (a = e[0], i || /^(Strategy)?Script\$/.test(a) ? -1 !== (n = a.indexOf("_")) ? (o = (s = a.substring(0, n)).indexOf("Script$") >= 0 ? s : "Script$" + s, pro.getSuperProduct(o) || o) : /USER;/.test(a) ? this._CUSTOM_STUDIES_PACKAGE_NAME : /PUB;/.test(a) ? this._PUBLISHED_STUDIES_PACKAGE_NAME : /STD;/.test(a) ? this._STANDARD_STUDIES_PACKAGE_NAME : a : s) : s
                    }, a.prototype.selectSearchPage = function() {
                        this.selectPage("search"), this._clearInput()
                    }, a.prototype._insertStudyByShortDescription = function() {
                        var t, e, i, s = this._search_value;
                        for (s = s.trim(), t = this._studies[this._BASIC_STUDIES_PACKAGE_NAME], e = 0; e < t.length; e++)
                            if ((i = t[e]).shortDescription && i.shortDescription.toUpperCase() === s.toUpperCase()) {
                                this._insertStudy(i);
                                break
                            }
                    }, a.prototype._clearInput = function() {
                        this._search_input.val(""), "search" === this._currentPageTitle && this._search_input.val("").trigger("input").focus()
                    }, a.prototype._getScriptType = function() {
                        return 0
                    }, a.prototype._getScriptLocalizedName = function(t) {
                        return t.description_localized || $.t(t.scriptName || t.description || " ", {
                            context: "study"
                        })
                    }, a.prototype._pubSearchEntryAlreadyLoaded = function(t) {
                        var e = t.scriptIdPart.split(";")[1];
                        return !(this._pubSearchCache.indexOf(e) < 0) || (this._pubSearchCache.push(e), !1)
                    }, a.prototype._addPubSearchResult = function(t, e) {
                        t.length && (t.forEach(function(t) {
                            this._pubSearchEntryAlreadyLoaded(t) || (this._pubSearchEntries.push(t), this._pubSearchCount[t.scriptType]++)
                        }, this), 0 === e && (this._pubSearchCount[0] += t.length), this._pubSearchEntries.sort(function(t, e) {
                            return e.agreeCount - t.agreeCount
                        }))
                    }, a.prototype._getPublicLibraryRequestParams = function(t) {
                        var e = this._pubSearchCount[t],
                            i = this._PUB_SEARCH_ENTRIES_ON_PAGE;
                        return e < this._PUB_SEARCH_ENTRIES_ON_PAGE && (i = this._PUB_SEARCH_ENTRIES_ON_PAGE - e), {
                            offset: e,
                            count: i,
                            type: t
                        }
                    }, t.exports.StudyMarketDialog = a
            }).call(this, i("aIyQ"), i("OiQe"))
        },
        Ald9: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939" width="95.939" height="95.939"><path d="M62.82 47.97l32.53-32.534a2 2 0 0 0 0-2.828L83.332.586a2 2 0 0 0-2.827 0L47.97 33.12 15.435.587c-.75-.75-2.078-.75-2.828 0L.587 12.607a2 2 0 0 0 0 2.83L33.12 47.97.588 80.504a2 2 0 0 0 0 2.828l12.02 12.02a1.997 1.997 0 0 0 2.83 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.827 0l12.02-12.02c.78-.783.78-2.05 0-2.83L62.82 47.97z"/></svg>'
        },
        EulZ: function(t, e, i) {},
        "G0+C": function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18px" height="18px"><path fill-rule="evenodd" d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"/></svg>'
        },
        GWvR: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        HHbT: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        LiyS: function(t, e, i) {
            "use strict";

            function s(t) {
                return -1 !== t.indexOf("@") ? {
                    type: "java",
                    studyId: t
                } : {
                    type: "pine",
                    pineId: t
                }
            }
            var a, n, o, r, d, c, h, l, u;
            i.r(e), i.d(e, "FavoriteScriptsModel", function() {
                return u
            }), a = i("Vdly"), n = i("FBuY"), o = i("cBZt"), r = i("TcSq"), d = i("aIyQ"), c = i.n(d), h = "studyMarket.favorites", l = null, u = function() {
                function t() {
                    var t = this;
                    this._favorites = [], this._favoritesChanged = new c.a, n.TVXWindowEvents.on("StudyFavoritesChanged", function(e) {
                        var i = JSON.parse(e);
                        t._loadFromState(i.favorites || [])
                    }), a.onSync.subscribe(this, this._loadFavs), this._loadFavs()
                }
                return t.prototype.isFav = function(t) {
                    var e = this.favId(t);
                    return -1 !== this._findFavIndex(e)
                }, t.prototype.toggleFavorite = function(t) {
                    this.isFav(t) ? this.removeFavorite(t) : this.addFavorite(t)
                }, t.prototype.addFavorite = function(t) {
                    var e = this.favId(t);
                    this._favorites.push(s(e)), this._favoritesChanged.fire(), this._saveFavs()
                }, t.prototype.removeFavorite = function(t) {
                    var e = this.favId(t),
                        i = this._findFavIndex(e); - 1 !== i && (this._favorites.splice(i, 1), this._favoritesChanged.fire()), this._saveFavs()
                }, t.prototype.favId = function(t) {
                    return Object(r.extractPineId)(t) || Object(o.extractStudyId)(t)
                }, t.prototype.favorites = function() {
                    return this._favorites
                }, t.prototype.favoritesChanged = function() {
                    return this._favoritesChanged
                }, t.getInstance = function() {
                    return null === l && (l = new t), l
                }, t.prototype._loadFavs = function() {
                    var t = a.getJSON(h, []);
                    this._loadFromState(t)
                }, t.prototype._saveFavs = function() {
                    var t = this._stateToSave();
                    a.setJSON(h, t), n.TVXWindowEvents.emit("StudyFavoritesChanged", JSON.stringify({
                        favorites: t
                    }))
                }, t.prototype._stateToSave = function() {
                    return this._favorites.map(function(t) {
                        return "java" === t.type ? t.studyId : t.pineId
                    })
                }, t.prototype._loadFromState = function(t) {
                    var e = t.map(s);
                    this._favorites = e, this._favoritesChanged.fire()
                }, t.prototype._findFavIndex = function(t) {
                    return this._favorites.findIndex(function(e) {
                        return t === ("java" === e.type ? e.studyId : e.pineId)
                    })
                }, t
            }()
        },
        MjtL: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
        },
        UIZs: function(t, e, i) {
            "use strict";

            function s(t, e, i) {
                e.toggleClass("i-hidden", "" === t.val()), i.fire(t.val())
            }

            function a(t) {
                var e, i, a, n = $(h);
                return t.addClass && n.addClass(t.addClass), t.withoutControls && n.addClass("tv-search-row--without-controls"), e = n.find(".js-input-control"), i = n.find(".js-reset-button"),
                    t.placeholder && e.attr("placeholder", t.placeholder), t.dataName && e.attr("data-name", t.dataName), i[0].addEventListener("click", function() {
                        e.val("").trigger("input").focus()
                    }), a = new o.a, e.on("input propertychange", s.bind(null, e, i, a)), s(e, i, a), {
                        $control: n,
                        $input: e,
                        inputChangedDelegate: a
                    }
            }
            var n, o, r, d, c, h;
            i.r(e), i.d(e, "createSearchControl", function() {
                return a
            }), n = i("aIyQ"), o = i.n(n), r = i("Ald9"), d = i("G0+C"), c = i("EulZ"), h = '<div class="tv-search-row"><input class="tv-search-row__input js-input-control" type="text" name="q" value="" autocomplete="off" data-role="search"><span class="tv-search-row__input-reset i-hidden js-reset-button">' + r + '</span><span class="tv-search-row__search-icon">' + d + "</span></div>"
        },
        UgcK: function(t, e, i) {},
        emGF: function(t, e, i) {
            "use strict";

            function s(t, e) {
                var i, s, n, r;
                return 0 === t.length ? Promise.resolve([]) : (o.logNormal("Requesting favorites info"), i = [], s = new Map, n = new Map, r = new Map, t.forEach(function(t) {
                    switch (t.type) {
                        case "java":
                            r.set(t.studyId, t);
                            break;
                        case "pine":
                            isPublisedPineId(t.pineId) ? s.set(t.pineId, t) : n.set(t.pineId, t);
                            break;
                        default:
                            Object(a.assert)(!1, "unknown favorite type " + JSON.stringify(t))
                    }
                }), 0 !== r.size && i.push(e.findAllJavaStudies().then(function(t) {
                    var e, i, s, a = new Map;
                    for (e = 0, i = t; e < i.length; e++) s = i[e], r.has(s.id) && a.set(s.id, {
                        name: s.description,
                        localizedName: s.description_localized,
                        studyMarketShittyObject: s
                    });
                    return a
                }).then(function(t) {
                    var e, i, s, a = (i = t, s = {
                        items: [],
                        notFoundItems: []
                    }, r.forEach(function(t, e) {
                        var a = i.get(e);
                        void 0 !== a ? s.items.push({
                            item: t,
                            info: a
                        }) : s.notFoundItems.push(t)
                    }), s);
                    return 0 !== a.notFoundItems.length && (e = a.notFoundItems.map(function(t) {
                        return t.studyId
                    }), o.logWarn("Cannot find java scripts: " + JSON.stringify(e))), a.items
                })), Promise.all(i).then(function(t) {
                    return o.logNormal("Requesting favorites info finished"), t.reduce(function(t, e) {
                        return t.concat(e)
                    }, [])
                }))
            }
            var a, n, o;
            i.r(e), i.d(e, "getFavoritesInfo", function() {
                return s
            }), a = i("Eyy1"), n = i("uOxu"), o = Object(n.getLogger)("FavoritesInfo")
        },
        "m/4m": function(t, e, i) {},
        pfXf: function(t, e, i) {
            "use strict";
            i("UgcK"),
                function(t) {
                    function e(t) {
                        t.stop(!0), t.css("background-color", ""), t.removeData(r), t.removeData(d)
                    }

                    function i(i) {
                        var a = i.data(r);
                        a && (!0 !== a ? --a ? (s(i), i.data(r, a)) : function(i) {
                            var s = i.data(d).complete;
                            e(i), s && t.isFunction(s) && s()
                        }(i) : s(i))
                    }

                    function s(t) {
                        var e = t.css("background-color"),
                            s = t.data(d),
                            a = s.highlightColor || c,
                            n = s.duration || h,
                            o = s.easing || l;
                        t.animate({
                            "background-color": a
                        }, n, o).animate({
                            "background-color": e
                        }, n, o, i.bind(t, t))
                    }
                    var a, n, o, r, d, c, h, l, u = !1,
                        _ = document.body || document.documentElement,
                        p = "animation",
                        g = "Webkit Moz O ms Khtml".split(" "),
                        v = "";
                    if (void 0 !== _.style.animationName && (u = !0), !1 === u)
                        for (a = 0; a < g.length; a++)
                            if (void 0 !== _.style[g[a] + "AnimationName"]) {
                                v = g[a], p = v + "Animation", "-" + v.toLowerCase() + "-", u = !0;
                                break
                            }
                    n = ["webkit", "moz", "MS", "o", ""], r = (o = "flicker-") + "enable", d = o + "options", c = "#fbf8e9", h = 400, l = "swing", t.fn.highlight = function(i, a) {
                        switch (i) {
                            default: return i = void 0 === i || i, this.each(function() {
                                var e;
                                u ? (i = !0 === i ? "infinite" : i, function(t, e, i) {
                                    for (var s = 0; s < n.length; s++) n[s] || (e = e.toLowerCase()),
                                        t.addEventListener(n[s] + e, i, !1)
                                }(this, "AnimationEnd", function() {
                                    this.style[p] = ""
                                }), document.getElementsByTagName("html")[0].classList.contains("theme-dark") ? this.style[p] = "highlight-animation-theme-dark 0.4s ease-in-out " + i + " alternate" : this.style[p] = "highlight-animation 0.4s ease-in-out " + i + " alternate") : ((e = t(this)).data(r, i), e.data(d, t.extend({}, a || {})), e.is(":animated") || s(e))
                            });
                            case !1:
                                    return this.each(function() {
                                    u ? this.style[p] = "" : e(t(this))
                                })
                        }
                    }
                }(jQuery)
        },
        "xUY+": function(t, e, i) {}
    }
]);