(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        DxCR: function(t, e, i) {
            "use strict";
            (function(t) {
                function o(t, e) {
                    return '<label for="' + e + '">' + t + "</label>"
                }

                function n(t, e) {
                    this._model = e, this._bindings = [], this._property = t, this.supportThemeSwitcher = !1
                }

                function s(t) {
                    return function(e) {
                        return e < t ? t : e
                    }
                }

                function r(t) {
                    return function(e) {
                        return e > t ? t : e
                    }
                }

                function a(t) {
                    return function(e) {
                        var i = parseInt(e, 10);
                        return V(i) ? t : i
                    }
                }

                function l(t) {
                    var e = new D;
                    return function(i) {
                        var o = e.parse(i);
                        return V(o) ? t : o
                    }
                }

                function c(t, e, i, o, n, s, r) {
                    L.call(this, t, e, o, n, s), this._transformFunction = i, this._setter = r, this._attachToControl(t, o)
                }

                function u(t, e, i, o, n) {
                    c.call(this, t, e, l(e.value()), i, o, n), this.addFormatter(function(t) {
                        return (new D).format(t)
                    })
                }

                function p(t, e, i, o, n, s) {
                    this._subControlIds = e, L.call(this, t, i, o, n, s), this._forEachSubControl(function(t) {
                        this._attachToControl(t, o)
                    })
                }

                function h(t, e, i, o, n, s, r) {
                    this._model = o, this._mainSeries = s, this._toIntTransformer = a(r), this._disabled = !1, L.call(this, t, e, i, o, n);
                    var l = this;
                    i && t.change(function() {
                        l.setValueToProperty(l.value())
                    }), this._mainSeries.dataEvents().barReceived().subscribe(this, function() {
                        l.setValue(this.property().value())
                    })
                }

                function d(t, e, i, o, n, s, r) {
                    L.call(this, t, e, i, o, n), this._transform = s, i && t.on("accept-symbol", function(t, e) {
                        this.setValueToProperty(e), this.setValue(e)
                    }.bind(this)), r && (r.subscribe(this, this._updateDisplayedSymbol), this._updateDelegate = r)
                }

                function f(t, e, i, o, n, s, r, a) {
                    L.call(this, t, e, o, n, s), this._transformFunction = i, this._propertyChangedHook = a, this._setter = r;
                    var l = this;
                    o && t.change(function() {
                        l._setter ? l._setter.call(l, l.value()) : l.setValueToProperty(l.value())
                    })
                }

                function v(t, e) {
                    L.call(this, t, e)
                }

                function g(t, e, i, o, n, s) {
                    if (!t.is(":checkbox, :radio")) return new _(t, e, i, o, n);
                    L.call(this, t, e, i, o, n), this._setter = s;
                    var r = this;
                    i && t.change(function() {
                        r._setter ? r._setter.call(r, r.value()) : r.setValueToProperty(r.value())
                    })
                }

                function m(t, e, i, o, n, s) {
                    L.call(this, t, e, i, o, n), this._inverted = !0 === s
                }

                function _(t, e, i, o, n) {
                    L.call(this, t, e, i, o, n);
                    var s = this;
                    i && t.click(function() {
                        var t = $(this).toggleClass("active").hasClass("active");
                        s.setValueToProperty(t)
                    })
                }

                function b(t, e, i, o, n, s) {
                    var r, a;
                    r = t.is("input") ? t : t.find("input"), L.call(this, r, e, i, o, n), this._transparencyProperty = s, this.applyOldTransparency(), a = this, i && r.change(function() {
                        a.setValueToProperty(a.value())
                    })
                }

                function y(e, i, o, n, s, r) {
                    function a(t, e) {
                        var i = c.control().slider("option", "min"),
                            o = c.control().slider("option", "max"),
                            n = c._property.value();
                        (i <= n && n <= o || i < e.value && e.value < o) && c.setValueToProperty(e.value)
                    }

                    function l(t, e) {
                        c.setValueToProperty(e.value)
                    }
                    isNumber(i.value()) || (H.logWarn("Property cannot be binded to control, bad value (expect number): " + i.value()), i = new t), L.call(this, e, i, o, n, s);
                    var c = this;
                    o && (r ? (e.bind("slidechange", a), e.bind("slide", a)) : (e.bind("slidechange", l), e.bind("slide", l))), e.bind("slidestart", function(t, e) {
                        n.beginUndoMacro(s)
                    }), e.bind("slidestop", function(t, e) {
                        n.endUndoMacro()
                    })
                }

                function C(t, e, i, o, n) {
                    this._control = t, this._wv = e, this._transformFunction = i, this._undoModel = o, this._undoText = n,
                        this._attachToControl(this._control), this._setValueBinded = this.setValue.bind(this)
                }

                function T(t, e, i, o, n, s) {
                    this._not = !!s, C.apply(this, arguments)
                }

                function k(t, e, i, o, n, s, r, a) {
                    this._propFrom = e[0], this._propTo = e[1], this._control = t, this._applyOnFly = o, this._undoModel = n, this._undoText = r, this._properties = e, this._inputsText = s, this._transformers = i;
                    var l = this;
                    t.slider({
                        range: !0,
                        min: i[0],
                        max: i[1],
                        values: [l._propFrom.value(), l._propTo.value()]
                    }), this.$rangeHandleFrom = $(t.find(".ui-slider-handle")[0]).addClass("from"), this.$rangeHandleTo = $(t.find(".ui-slider-handle")[1]).addClass("to"), this.setValue(this._propFrom, 0), this.setValue(this._propTo, 1), a && ($(a).on("change", function(t) {
                        $(this).is(":checked") ? (l._control.slider("enable"), $(l._inputsText[0]).prop("disabled", !1), $(l._inputsText[1]).prop("disabled", !1)) : (l._control.slider("disable"), $(l._inputsText[0]).prop("disabled", !0), $(l._inputsText[1]).prop("disabled", !0))
                    }), $(a).is(":checked") ? (l._control.slider("enable"), $(l._inputsText[0]).prop("disabled", !1), $(l._inputsText[1]).prop("disabled", !1)) : (l._control.slider("disable"), $(l._inputsText[0]).prop("disabled", !0), $(l._inputsText[1]).prop("disabled", !0))), s && ($(s[0]).val(this._control.slider("values", 0)), $(s[1]).val(this._control.slider("values", 1)), t.slider({
                        slide: function(t, e) {
                            $(s[0]).val(e.values[0]), $(s[1]).val(e.values[1])
                        }
                    }), $(s).each(function() {
                        $(this).on("keydown", function(t) {
                            parseInt($(s[0]).val()) < l._transformers[0] ? $(s[0]).val(l._transformers[0]) : parseInt($(s[1]).val()) > l._transformers[1] && $(s[1]).val(l._transformers[1]), -1 !== $.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 === t.keyCode && !0 === t.ctrlKey || 67 === t.keyCode && !0 === t.ctrlKey || 88 === t.keyCode && !0 === t.ctrlKey || t.keyCode >= 35 && t.keyCode <= 39 || (t.shiftKey || t.keyCode < 48 || t.keyCode > 57) && (t.keyCode < 96 || t.keyCode > 105) && t.preventDefault()
                        })
                    }), $(s[0]).on("keyup", function(t) {
                        parseInt($(this).val()) < l._transformers[0] ? $(this).val(l._transformers[0]) : parseInt($(this).val()) > l._transformers[1] && $(this).val(l._transformers[1]), parseInt($(this).val()) > parseInt($(s[1]).val()) && $(this).val(s[1].val()), l._control.slider("values", 0, $(this).val()), k.prototype.setValueToProperty.call(l, l._control.slider("values"), "from")
                    }), $(s[1]).on("keyup", function(t) {
                        parseInt($(this).val()) < l._transformers[0] ? $(this).val(l._transformers[0]) : parseInt($(this).val()) > l._transformers[1] && $(this).val(l._transformers[1]), parseInt($(this).val()) < $(s[0]).val() && $(this).val(s[0].val()), l._control.slider("values", 1, $(this).val()), k.prototype.setValueToProperty.call(l, l._control.slider("values"), "to")
                    })), this._propFrom.listeners().subscribe(this, k.prototype.propertyChanged), this._propTo.listeners().subscribe(this, k.prototype.propertyChanged), o && t.on("slide", function(t, e) {
                        l.setValueToProperty(l._control.slider("values"), e.handle)
                    }), t.slider({
                        stop: function(t, e) {
                            s && ($(s[0]).val(l._control.slider("values", 0)), $(s[1]).val(l._control.slider("values", 1))), l.setValueToProperty(l._control.slider("values"), e.handle)
                        },
                        start: function(t, e) {
                            s && ($(s[0]).val(l._control.slider("values", 0)),
                                $(s[1]).val(l._control.slider("values", 1))), l.setValueToProperty(l._control.slider("values"), e.handle)
                        }
                    })
                }

                function w(t, e, i, o, n, s) {
                    L.call(this, t, e, i, o, n), this._separator = s || " ";
                    var r = this;
                    i && t.change(function() {
                        r.setValueToProperty(r.value())
                    })
                }
                var x, M, V, S, E, P, O, I, D, F, R, A, L, H, B;
                i("jgM0"), i("QBwY"), x = i("56W2"), i("pay7"), M = i("Eyy1").ensureNotNull, V = i("ivNn").isNaN, S = i("eJTA"), E = S.rgba, P = S.rgbaToString, O = S.parseRgb, I = i("XPit").TimePointIndexSearchMode, D = i("zXvd").NumericFormatter, F = i("T6Of").LimitedPrecisionNumericFormatter, R = i("Tmoa"), A = i("jNEI").addColorPicker, L = i("2h0C").Binding, H = i("uOxu").getLogger("Chart.PropertyPage"), B = i("MWAT").allPriceScaleSelectionStrategyInfo, n.prototype.model = function() {
                        return this._model
                    }, n.prototype.bindControl = function(t) {
                        return this._bindings.push(t), t
                    }, n.prototype.unbindControl = function(t) {
                        var e = this._bindings.indexOf(t); - 1 !== e && this._bindings.splice(e, 1)
                    }, n.prototype.loadData = function() {
                        var t, e, i;
                        for (t = 0; t < this._bindings.length; t++)(e = this._bindings[t]).properties ? (i = e.properties(), e.setValue(i[0], 0), e.setValue(i[1], 1)) : e.property && (e.transparencyProperty && e.transparencyProperty() ? e.applyOldTransparency() : e.setValue(e.property().value()))
                    }, n.prototype.saveData = function() {
                        var t, e;
                        for (this._model.beginUndoMacro(), t = 0; t < this._bindings.length; t++)(e = this._bindings[t]).changed() && this._model.setProperty(e.property(), e.value());
                        this._model.endUndoMacro()
                    }, n.prototype.createLineWidthEditor = function() {
                        var t = this._model._chartWidget.widget().prop("ownerDocument");
                        return $('<div class="linewidth-slider">', t).slider({
                            max: 4,
                            min: 1,
                            step: 1
                        })
                    }, n.prototype.createColorPicker = function(t) {
                        return A(null, t)
                    }, n.prototype.createTextEditor = function(t, e) {
                        var i = {};
                        return t && (i.width = t), e && (i.height = e), $(document.createElement("textarea")).css(i).addClass("tv-control-input")
                    }, n.prototype.createCombo = function(t) {
                        var e = $(document.createElement("select")),
                            i = t.reduce(function(t, e) {
                                return t.add($(document.createElement("option")).prop({
                                    value: e,
                                    text: e
                                }))
                            }, $());
                        return e.append(i)
                    }, n.prototype.createKeyCombo = function(t) {
                        var e = $(document.createElement("select"));
                        return $.each(t || [], function(t, i) {
                            $(document.createElement("option")).prop({
                                value: t,
                                text: i
                            }).appendTo(e)
                        }), e
                    }, n.prototype.createFontEditor = function(t) {
                        var e = t || TradingView.factoryDefaults("chartproperties.editorFontsList");
                        return this.createCombo(e)
                    }, n.prototype.createFontSizeEditor = function(t) {
                        var e = t || [10, 11, 12, 14, 16, 20, 24, 28, 32, 40];
                        return this.createCombo(e).addClass("tv-select-container-fontsize")
                    }, n.prototype.createSeriesMinTickEditor = function() {
                        var t, e, i = "<select><option value='default'>" + $.t("Default") + "</option>",
                            o = [{
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
                            }];
                        for (t in o) i += "<option value='" + ((e = o[t]).priceScale + "," + e.minMove + "," + e.frac) + "'>" + (e.minMove + "/" + e.priceScale) + "</option>";
                        return i += "</select>", $(i)
                    }, n.prototype.createPriceScaleStrategyEditor = function() {
                        var t = B().reduce(function(t, e) {
                            return t + "<option value='" + e.name + "'>" + e.title + "</option>"
                        }, "<select>") + "</select>";
                        return $(t)
                    }, n.prototype.createPrecisionEditor = function() {
                        var t, e = "<select><option value='default'>" + $.t("Default") + "</option>";
                        for (t = 0; t <= 8; t++) e += "<option value='" + t + "'>" + t + "</option>";
                        return e += "</select>", $(e)
                    }, n.prototype.createLabeledCell = function(t, e, i) {
                        var o, n, s, r, a = null;
                        return "number" == typeof t.valueOf() ? (a = t, o = e, n = i) : (o = t, n = e), o += "", s = this._labelToId(o), r = $("<td>"), $("<label>").html(o.length > 0 ? $.t(o) : "").attr("for", s).appendTo(r), a && r.attr("colspan", a), n && n.attr("id", s), r
                    }, n.prototype.createTableInTable = function(t) {
                        var e = $("<tr>").appendTo(t),
                            i = $("<td>").appendTo(e);
                        return $('<table cellpadding="0" cellspacing="0">').appendTo(i)
                    }, n.prototype._labelToId = function(t) {
                        return "control" + t.replace(/(^| )\w/g, function(t) {
                            return "-" + t.trim().toLowerCase()
                        }) + Math.floor(1e3 * Math.random())
                    }, n.prototype.addRow = function(t) {
                        return $(document.createElement("tr")).appendTo(t)
                    }, n.prototype.addLabeledRow = function(t, e, i, n) {
                        var s, r = e && e.length > 0 ? $.t(e) : "",
                            a = $(document.createElement("tr")),
                            l = $(document.createElement("td")).html(r);
                        return n && (n = parseInt(n), V(n) && (n = 2), l.attr("colspan", n)), i && (s = this._labelToId(e), i.attr("id", s), l.html(o(r, s))), a.append(l).appendTo(t)
                    }, n.prototype.addEditorRow = function(t, e, i, o) {
                        var n = $(document.createElement("td"));
                        return i.row = this.addLabeledRow(t, e, i, o), i.appendTo(n.appendTo(i.row)), i
                    }, n.prototype.addColorPickerRow = function(t, e) {
                        return this.addEditorRow(t, e, this.createColorPicker())
                    }, n.prototype.addOffsetEditorRow = function(t, e) {
                        var i = $("<input/>");
                        return i.attr("type", "text"), i.css("width", "100px"), i.addClass("ticker"), this.addEditorRow(t, e, i)
                    }, n.prototype.addFontEditorRow = function(t, e) {
                        return this.addEditorRow(t, e, this.createFontEditor())
                    }, n.prototype.refreshStateControls = function(t, e, i) {
                        var o, n, s;
                        for (o = 0; o < e.length; o++) {
                            s = t[(n = e[o]).id];
                            try {
                                s.toggle(this.parseRule(n.visible, e, i))
                            } catch (t) {
                                continue
                            }
                            s.attr("disabled", !this.parseRule(n.visible, e, i))
                        }
                    }, n.prototype.parseRule = function(t, e, i) {
                        if (!t) return !0;
                        var o = t.split("==");
                        return !(o.length < 2) && i[o[0]].value() === o[1]
                    }, n.prototype.destroy = function() {
                        for (var t = this._bindings.length; t--;) this._bindings[t].destroy();
                        this._bindings.length = 0
                    }, n.prototype.bindInteger = function(t, e, i, o, n) {
                        var l = [a(e.value())];
                        void 0 !== o && l.push(s(1)), void 0 !== n && l.push(r(1e3)), this.bindControl(new c(t, e, l, !1, this.model(), i))
                    }, n.prototype.bindColor = function(t, e, i) {
                        this.bindControl(new b(t, e, !0, this.model(), i))
                    }, n.prototype.bindBoolean = function(t, e, i) {
                        this.bindControl(new g(t, e, !0, this.model(), i))
                    }, inherit(c, L), c.prototype.value = function() {
                        var t, e = this._control.val();
                        if (this._transformFunction)
                            if (Array.isArray(this._transformFunction))
                                for (t = 0; t < this._transformFunction.length; t++) e = this._transformFunction[t](e);
                            else e = this._transformFunction(e);
                        return e
                    }, c.prototype.setValue = function(t) {
                        var e = this._control.val(),
                            i = this._formatValue(t);
                        e !== i && this._control.val(i)
                    }, c.prototype.setValueToProperty = function(t) {
                        this._setter ? this._setter.call(this, this.value()) : this._undoModel.setProperty(this._property, t, this._undoText), this._changed = !1
                    }, inherit(u, c), inherit(p, L), p.prototype._forEachSubControl = function(t) {
                        this._subControlIds.forEach(function(e) {
                            var i = "#" + e,
                                o = this.control().find(i);
                            t.call(this, o)
                        }, this)
                    }, p.prototype._parseSessions = function(t) {
                        var e, i, o = t.split("-", 2);
                        return 2 !== o.length && (o = ["0", "0"]), e = parseInt(o[0]), i = parseInt(o[1]), [Math.floor(e / 100), e % 100, Math.floor(i / 100), i % 100]
                    }, p.prototype.value = function() {
                        var t, e, i, o = [];
                        return this._forEachSubControl(function(t) {
                            o.push(t.val())
                        }), t = function(t, e) {
                            return e.forEach(function(e) {
                                t = e(t)
                            }), ("0" + t).slice(-2)
                        }, e = [a(0), s(0), r(23)], i = [a(0), s(0), r(59)], t(o[0], e) + t(o[1], i) + "-" + t(o[2], e) + t(o[3], i)
                    }, p.prototype.setValue = function(t) {
                        var e = this._parseSessions(t);
                        this._forEachSubControl(function(t) {
                            var i = t.val(),
                                o = ("0" + e[0]).slice(-2);
                            e.shift(), i !== o && t.val(o)
                        })
                    }, inherit(h, L), h.prototype.value = function() {
                        var t, e, i;
                        return this._disabled ? (this._control.attr("disabled", !0), null) : (t = this._control.val(), (e = this._toIntTransformer(t)) < 0 && (e = 0), (i = this._mainSeries.bars().size()) <= e && (e = i - 1), 1e3 * M(this._mainSeries.bars().valueAt(M(this._mainSeries.bars().lastIndex()) - e))[TradingView.TIME_PLOT])
                    }, h.prototype.setValue = function(t) {
                        var e, i;
                        if (this._disabled || null == t) this._control.attr("disabled", !0);
                        else {
                            if (t < 0) return this._control.val(-t), void this._property.setValue(this.value());
                            null !== (e = this._mainSeries.data().plotValueToTimePointIndex(t / 1e3, TradingView.TIME_PLOT, I.FromRight)) ? (i = M(this._mainSeries.bars().lastIndex()) - e, this._control.val() !== i.toString() && this._control.val(i)) : this._disabled = !0
                        }
                    }, inherit(d, L), d.prototype.value = function() {
                        return this._control.val()
                    }, d.prototype.setValue = function(t) {
                        var e = this.value();
                        this._transform && (t = this._transform(t)), t && e !== t && this._control.val(t)
                    }, d.prototype._updateDisplayedSymbol = function() {
                        this.setValue(this._property.value())
                    }, d.prototype.destroy = function() {
                        L.prototype.destroy.call(this), this._updateDelegate && this._updateDelegate.unsubscribe(this, this._updateDisplayedSymbol)
                    }, inherit(f, L), f.prototype.value = function() {
                        var t = this._control.val();
                        return this._transformFunction && (t = this._transformFunction(t)), t
                    }, f.prototype.setValue = function(t) {
                        var e, i;
                        if (this._control.val(t), this._control.selectbox) try {
                            (e = this._control.find("[value='" + x(t) + "']")).length > 0 && (i = e[0], this._control.selectbox("change", i.value, i.text))
                        } catch (t) {}
                    }, f.prototype.propertyChanged = function(t) {
                        var e = t.value();
                        "function" == typeof this._propertyChangedHook && (e = this._propertyChangedHook(e)), this.setValue(e)
                    }, inherit(v, L), v.prototype.value = function() {
                        return this._property.value()
                    }, v.prototype.setValue = function(t) {
                        return this._control.html(t)
                    },
                    inherit(g, L), g.prototype.value = function() {
                        return this.control().is(":checked")
                    }, g.prototype.setValue = function(t) {
                        var e, i, o, n;
                        return this.control().is(".visibility-checker") && (t ? (this.control().closest("tr").find(".slider-range").slider("enable"), this.control().closest("tr").find('input[type="text"]').each(function() {
                            $(this).prop("disabled", !1)
                        })) : (this.control().closest("tr").find(".slider-range").slider("disable"), this.control().closest("tr").find('input[type="text"]').each(function() {
                            $(this).prop("disabled", !0)
                        }))), this.control().is(".visibility-switch") && (e = {
                            opacity: t ? 1 : .5
                        }, i = t ? "enable" : "disable", (o = this.control().data("hides")) ? o.closest("td").css(e) : (n = this.control()).parent().parent().data("visible", t).find("td").filter(function() {
                            var t = $(this);
                            return !t.find("label").length && t.find(":checkbox").attr("id") !== n.attr("id")
                        }).each(function() {
                            var o = $(this),
                                n = o.children();
                            n.each(function() {
                                var n = $(this);
                                n.is(".ui-slider") ? n.slider(i) : n.is("select") ? (n.selectbox(i), o.css(e)) : n.is(".custom-select") ? (n.data(i)(), o.css(e)) : n.is(".tvcolorpicker-container") ? (n.find("input").prop("disabled", !t), o.css(e)) : (n.prop("disabled", !t), o.css(e))
                            })
                        })), this.control().attr("checked", !!t)
                    }, g.prototype.destroy = function() {
                        L.prototype.destroy.call(this), this._control.off("change")
                    }, inherit(m, L), m.prototype.value = function() {
                        return this.control().is(":disabled")
                    }, m.prototype.setValue = function(t) {
                        return t = Boolean(t), this._inverted && (t = !t), this.control().parents("label").toggleClass("disabled", t), this.control().attr("disabled", t)
                    }, inherit(_, L), _.prototype.value = function() {
                        return this.control().hasClass("active")
                    }, _.prototype.setValue = function(t) {
                        return this.control().toggleClass("active", !!t)
                    }, inherit(b, L), b.prototype.applyOldTransparency = function() {
                        var t, e, i;
                        this.transparencyProperty() && (R.isHexColor(this.property().value()) ? (t = this.transparencyProperty().value ? this.transparencyProperty().value() : this.transparencyProperty(), e = O(this.property().value()), i = (100 - t) / 100, this.control().val(P(E(e, i)))) : this.control().val(this.property().value()), this.control().change())
                    }, b.prototype.transparencyProperty = function() {
                        return this._transparencyProperty
                    }, b.prototype.value = function() {
                        return this._control.val()
                    }, b.prototype.setValue = function(t) {
                        this._control.val(t), this._control.change(), this._control.color && this._control.color.fromString(t)
                    }, inherit(y, L), y.prototype.value = function() {
                        return this._control.slider("option", "value")
                    }, y.prototype.setValue = function(t) {
                        this._control.slider("option", "value", t)
                    }, C.prototype._attachToControl = function(t) {
                        var e = this;
                        this._wv.subscribe(this._setValueBinded, {
                            callWithLast: !0
                        }), $(this._control).on("change", function() {
                            e.setValueToProperty(e.value())
                        })
                    }, C.prototype.control = function() {
                        return this._control
                    }, C.prototype.value = function() {
                        var t = $(this._control).val();
                        return this._transformFunction && (t = this._transformFunction(t)), t
                    }, C.prototype.setValue = function(t) {
                        $(this._control).val(t)
                    }, C.prototype.setValueToProperty = function(t) {
                        this._undoModel.undoHistory.setWatchedValue(this._wv, t, this._undoText)
                    },
                    C.prototype.watchedValue = function() {
                        return this._wv
                    }, C.prototype.destroy = function() {
                        this._wv.unsubscribe(this._setValueBinded)
                    }, inherit(T, C), T.prototype._attachToControl = function(t) {
                        var e = this;
                        this._wv.subscribe(this.setValue.bind(this), {
                            callWithLast: !0
                        }), $(this._control).on("click", function() {
                            e.setValueToProperty(e.value())
                        })
                    }, T.prototype.value = function() {
                        var t = $(this._control).attr("checked");
                        return this._not && (t = !t), this._transformFunction && (t = this._transformFunction(t)), t
                    }, T.prototype.setValue = function(t) {
                        this._not && (t = !t), $(this._control).attr("checked", !!t)
                    }, k.prototype.properties = function() {
                        return this._properties
                    }, k.prototype.value = function(t) {
                        return this._control.slider("values", t)
                    }, k.prototype.setValue = function(t, e) {
                        void 0 === e && (t === this._propFrom && (e = 0), t === this._propTo && (e = 1)), this._control.slider("values", e, t.value()), this._inputsText && $(this._inputsText[e]).val(t.value())
                    }, k.prototype.propertyChanged = function(t) {
                        this.setValue(t)
                    }, k.prototype.setValueToProperty = function(t, e) {
                        ($(e).hasClass("from") || "from" === e) && (this._undoModel.beginUndoMacro(this._undoText[0]), this._undoModel.setProperty(this._propFrom, t[0], this._undoText[0]), this._propFrom.setValue(t[0], 0), this._undoModel.endUndoMacro()), ($(e).hasClass("to") || "to" === e) && (this._undoModel.beginUndoMacro(this._undoText[1]), this._undoModel.setProperty(this._propTo, t[1], this._undoText[1]), this._propTo.setValue(t[1], 1), this._undoModel.endUndoMacro())
                    }, k.prototype.destroy = function() {
                        this._propFrom && this._propTo && (this._propFrom.listeners().unsubscribe(this, L.prototype.propertyChanged), this._propTo.listeners().unsubscribe(this, L.prototype.propertyChanged))
                    }, inherit(w, L), w.prototype.value = function() {
                        var t = [];
                        return this._control.each(function() {
                            var e = $(this);
                            e.is(":checked") && t.push(e.attr("value"))
                        }), t.join(this._separator)
                    }, w.prototype.setValue = function(t) {
                        var e = t.split(this._separator).filter(Boolean);
                        this._control.each(function() {
                            var t = $(this),
                                i = -1 !== e.indexOf(t.attr("value"));
                            t.attr("checked", i), t.parents("label").toggleClass("active", i)
                        })
                    }, e.PropertyPage = n, e.UppercaseTransformer = function(t) {
                        return t.toUpperCase()
                    }, e.GreateTransformer = s, e.LessTransformer = r, e.ToIntTransformer = a, e.ToFloatTransformer = l, e.ToFloatTransformerWithDynamicDefaultValue = function(t) {
                        var e = new D;
                        return function(i) {
                            var o = e.parse(i);
                            return V(o) ? t() : o
                        }
                    }, e.ToFloatLimitedPrecisionTransformer = function(t, e) {
                        var i = new F(e);
                        return function(e) {
                            var o = i.format(e);
                            return V(o) ? t : o
                        }
                    }, e.ToAsciiTransformer = function() {
                        return function(t) {
                            for (var e = t, i = t.replace(/[^\u0000-\u007F]/, ""); i.length !== e.length;) i = (e = i).replace(/[^\u0000-\u007F]/, "");
                            return i
                        }
                    }, e.ReplaceEmptyTransformer = function(t) {
                        return function(e) {
                            return 0 === e.length ? t : e
                        }
                    }, e.SymbolInfoSymbolTransformer = function(t, e) {
                        return function(i) {
                            var o = t();
                            return i === e.value() && o && (o.ticker || o.full_name) ? o.ticker || o.full_name : i
                        }
                    }, e.SimpleStringBinder = c, e.FloatBinder = u, e.SessionBinder = p, e.BarTimeBinder = h, e.SymbolBinder = d, e.SimpleComboBinder = f, e.StaticContentBinder = v, e.BooleanBinder = g, e.DisabledBinder = m, e.ColorBinding = b, e.SliderBinder = y,
                    e.CheckboxWVBinding = T, e.RangeBinder = k, e.generateLabelElementStr = o
            }).call(this, i("tc+8"))
        },
        QBwY: function(t, e, i) {
            var o, n, s;
            n = [i("P5fv"), i("iGnl"), i("vBzC"), i("Qwlt"), i("MIQu")], void 0 === (s = "function" == typeof(o = function(t) {
                return t.widget("ui.slider", t.ui.mouse, {
                    version: "1.12.1",
                    widgetEventPrefix: "slide",
                    options: {
                        animate: !1,
                        classes: {
                            "ui-slider": "ui-corner-all",
                            "ui-slider-handle": "ui-corner-all",
                            "ui-slider-range": "ui-corner-all ui-widget-header"
                        },
                        distance: 0,
                        max: 100,
                        min: 0,
                        orientation: "horizontal",
                        range: !1,
                        step: 1,
                        value: 0,
                        values: null,
                        change: null,
                        slide: null,
                        start: null,
                        stop: null
                    },
                    numPages: 5,
                    _create: function() {
                        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
                    },
                    _refresh: function() {
                        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                    },
                    _createHandles: function() {
                        var e, i, o = this.options,
                            n = this.element.find(".ui-slider-handle"),
                            s = [];
                        for (i = o.values && o.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) s.push("<span tabindex='0'></span>");
                        this.handles = n.add(t(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                            t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                        })
                    },
                    _createRange: function() {
                        var e = this.options;
                        e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                            left: "",
                            bottom: ""
                        })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
                    },
                    _setupEvents: function() {
                        this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                    },
                    _destroy: function() {
                        this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
                    },
                    _mouseCapture: function(e) {
                        var i, o, n, s, r, a, l, c = this,
                            u = this.options;
                        return !u.disabled && (this.elementSize = {
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight()
                        }, this.elementOffset = this.element.offset(), i = {
                            x: e.pageX,
                            y: e.pageY
                        }, o = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                            var i = Math.abs(o - c.values(e));
                            (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, s = t(this), r = e)
                        }), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(s, null, "ui-state-active"), s.trigger("focus"), a = s.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                            left: 0,
                            top: 0
                        } : {
                            left: e.pageX - a.left - s.width() / 2,
                            top: e.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                        }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, o), this._animateOff = !0, !0))
                    },
                    _mouseStart: function() {
                        return !0
                    },
                    _mouseDrag: function(t) {
                        var e = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            i = this._normValueFromMouse(e);
                        return this._slide(t, this._handleIndex, i), !1
                    },
                    _mouseStop: function(t) {
                        return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                    },
                    _detectOrientation: function() {
                        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                    },
                    _normValueFromMouse: function(t) {
                        var e, i, o, n, s;
                        return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (o = i / e) > 1 && (o = 1), o < 0 && (o = 0), "vertical" === this.orientation && (o = 1 - o), n = this._valueMax() - this._valueMin(), s = this._valueMin() + o * n, this._trimAlignValue(s)
                    },
                    _uiHash: function(t, e, i) {
                        var o = {
                            handle: this.handles[t],
                            handleIndex: t,
                            value: void 0 !== e ? e : this.value()
                        };
                        return this._hasMultipleValues() && (o.value = void 0 !== e ? e : this.values(t), o.values = i || this.values()), o
                    },
                    _hasMultipleValues: function() {
                        return this.options.values && this.options.values.length
                    },
                    _start: function(t, e) {
                        return this._trigger("start", t, this._uiHash(e))
                    },
                    _slide: function(t, e, i) {
                        var o, n = this.value(),
                            s = this.values();
                        this._hasMultipleValues() && (o = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(o, i) : Math.max(o, i)), s[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, s)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
                    },
                    _stop: function(t, e) {
                        this._trigger("stop", t, this._uiHash(e))
                    },
                    _change: function(t, e) {
                        this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
                    },
                    value: function(t) {
                        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                    },
                    values: function(e, i) {
                        var o, n, s;
                        if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                        if (!arguments.length) return this._values();
                        if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                        for (o = this.options.values, n = arguments[0], s = 0; s < o.length; s += 1) o[s] = this._trimAlignValue(n[s]), this._change(null, s);
                        this._refreshValue()
                    },
                    _setOption: function(e, i) {
                        var o, n = 0;
                        switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                            case "orientation":
                                this._detectOrientation(),
                                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                                break;
                            case "value":
                                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                                break;
                            case "values":
                                for (this._animateOff = !0, this._refreshValue(), o = n - 1; o >= 0; o--) this._change(null, o);
                                this._animateOff = !1;
                                break;
                            case "step":
                            case "min":
                            case "max":
                                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                                break;
                            case "range":
                                this._animateOff = !0, this._refresh(), this._animateOff = !1
                        }
                    },
                    _setOptionDisabled: function(t) {
                        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
                    },
                    _value: function() {
                        var t = this.options.value;
                        return t = this._trimAlignValue(t)
                    },
                    _values: function(t) {
                        var e, i, o;
                        if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                        if (this._hasMultipleValues()) {
                            for (i = this.options.values.slice(), o = 0; o < i.length; o += 1) i[o] = this._trimAlignValue(i[o]);
                            return i
                        }
                        return []
                    },
                    _trimAlignValue: function(t) {
                        if (t <= this._valueMin()) return this._valueMin();
                        if (t >= this._valueMax()) return this._valueMax();
                        var e = this.options.step > 0 ? this.options.step : 1,
                            i = (t - this._valueMin()) % e,
                            o = t - i;
                        return 2 * Math.abs(i) >= e && (o += i > 0 ? e : -e), parseFloat(o.toFixed(5))
                    },
                    _calculateNewMax: function() {
                        var t = this.options.max,
                            e = this._valueMin(),
                            i = this.options.step,
                            o = Math.round((t - e) / i) * i;
                        (t = o + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
                    },
                    _precision: function() {
                        var t = this._precisionOf(this.options.step);
                        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                    },
                    _precisionOf: function(t) {
                        var e = t.toString(),
                            i = e.indexOf(".");
                        return -1 === i ? 0 : e.length - i - 1
                    },
                    _valueMin: function() {
                        return this.options.min
                    },
                    _valueMax: function() {
                        return this.max
                    },
                    _refreshRange: function(t) {
                        "vertical" === t && this.range.css({
                            width: "",
                            left: ""
                        }), "horizontal" === t && this.range.css({
                            height: "",
                            bottom: ""
                        })
                    },
                    _refreshValue: function() {
                        var e, i, o, n, s, r = this.options.range,
                            a = this.options,
                            l = this,
                            c = !this._animateOff && a.animate,
                            u = {};
                        this._hasMultipleValues() ? this.handles.each(function(o) {
                            i = (l.values(o) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === o && l.range.stop(1, 1)[c ? "animate" : "css"]({
                                left: i + "%"
                            }, a.animate), 1 === o && l.range[c ? "animate" : "css"]({
                                width: i - e + "%"
                            }, {
                                queue: !1,
                                duration: a.animate
                            })) : (0 === o && l.range.stop(1, 1)[c ? "animate" : "css"]({
                                bottom: i + "%"
                            }, a.animate), 1 === o && l.range[c ? "animate" : "css"]({
                                height: i - e + "%"
                            }, {
                                queue: !1,
                                duration: a.animate
                            }))), e = i
                        }) : (o = this.value(), n = this._valueMin(), s = this._valueMax(), i = s !== n ? (o - n) / (s - n) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                            width: i + "%"
                        }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                            width: 100 - i + "%"
                        }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                            height: i + "%"
                        }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                            height: 100 - i + "%"
                        }, a.animate))
                    },
                    _handleEvents: {
                        keydown: function(e) {
                            var i, o, n, s = t(e.target).data("ui-slider-handle-index");
                            switch (e.keyCode) {
                                case t.ui.keyCode.HOME:
                                case t.ui.keyCode.END:
                                case t.ui.keyCode.PAGE_UP:
                                case t.ui.keyCode.PAGE_DOWN:
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, s))) return
                            }
                            switch (n = this.options.step, i = o = this._hasMultipleValues() ? this.values(s) : this.value(), e.keyCode) {
                                case t.ui.keyCode.HOME:
                                    o = this._valueMin();
                                    break;
                                case t.ui.keyCode.END:
                                    o = this._valueMax();
                                    break;
                                case t.ui.keyCode.PAGE_UP:
                                    o = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                    break;
                                case t.ui.keyCode.PAGE_DOWN:
                                    o = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                    break;
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                    if (i === this._valueMax()) return;
                                    o = this._trimAlignValue(i + n);
                                    break;
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (i === this._valueMin()) return;
                                    o = this._trimAlignValue(i - n)
                            }
                            this._slide(e, s, o)
                        },
                        keyup: function(e) {
                            var i = t(e.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                        }
                    }
                })
            }) ? o.apply(e, n) : o) || (t.exports = s)
        },
        "Y+MS": function(t, e, i) {
            "use strict";
            var o = function() {
                function t(t, e) {
                    this.mouseFlag = !1, this.accuracy = 2, this.value = 1, this.colorInput = t, this.$el = $('<div class="transparency-slider wide-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">', t.prop("ownerDocument")), e && this.$el.hide(), this.$gradient = $('<div class="gradient">').appendTo(this.$el), this.$roller = $('<a href="#" class="ui-slider-handle ui-state-default ui-corner-all without-shift-handle-left">').appendTo(this.$gradient)
                }
                return t.prototype.calculateRollerPosition = function(t) {
                        var e = t.pageX,
                            i = this.$gradient.offset().left,
                            o = e - i,
                            n = this.$gradient.width();
                        return o > n ? 100 : o < 0 ? 0 : ~~(o / n * 100)
                    }, t.prototype.toRgb = function(t) {
                        var e;
                        return ~t.indexOf("#") ? t : (e = t.match(/[0-9.]+/g)) ? "rgb(" + e.slice(0, 3).join(", ") + ")" : "rgb(127, 127, 127)"
                    }, t.prototype.setValue = function(t) {
                        this.value = 1 !== t ? t.toFixed(this.accuracy) : t
                    }, t.prototype.updateRoller = function() {
                        this.$roller.css("left", 100 - 100 * this.value + "%")
                    }, t.prototype.rollerMoveHandler = function(t) {
                        if (this.mouseFlag) {
                            var e = this.calculateRollerPosition(t);
                            this.setValue((100 - e) / 100), $(this).trigger("change", [this.val()]), this.$roller.css("left", e + "%")
                        }
                        t.preventDefault()
                    }, t.prototype.mouseupHandler = function(t) {
                        this.mouseFlag && (this.mouseFlag = !1, $(this).trigger("afterChange", [this.val()]))
                    }, t.prototype.initEvents = function() {
                        var t = this.$el.prop("ownerDocument"),
                            e = function(t) {
                                return this.rollerMoveHandler(t)
                            }.bind(this),
                            i = function(o) {
                                return $(t).off("mousemove mouseup", e),
                                    $(t).off("mouseup", i), this.mouseupHandler(o)
                            }.bind(this);
                        this.$el.on("mousedown", function(o) {
                            this.mouseFlag = !0, $(t).on("mousemove mouseup", e), $(t).on("mouseup", i), o.preventDefault()
                        }.bind(this)), this.colorInput.on("change", function(t) {
                            this.updateColor()
                        }.bind(this))
                    }, t.prototype.removeEvents = function() {}, t.prototype.updateColor = function() {
                        var t = this.colorInput.val() || "black",
                            e = this.toRgb(t),
                            i = ["-moz-linear-gradient(left, %COLOR 0%, transparent 100%)", "-webkit-gradient(linear, left top, right top, color-stop(0%,%COLOR), color-stop(100%,transparent))", "-webkit-linear-gradient(left, %COLOR 0%,transparent 100%)", "-o-linear-gradient(left, %COLOR 0%,transparent 100%)", "linear-gradient(to right, %COLOR 0%,transparent 100%)"];
                        $.browser.msie ? this.$gradient.css("filter", ["progid:DXImageTransform.Microsoft.gradient(startColorstr='", e, "', EndColor=0, GradientType=1)"].join("")) : i.forEach(function(t) {
                            this.$gradient.css("background-image", t.replace(/%COLOR/, e))
                        }.bind(this))
                    }, t.prototype.val = function(t) {
                        return void 0 !== t && (this.setValue(+t), this.updateRoller()), this.value
                    },
                    function(e, i) {
                        return new t(e, i)
                    }
            }();
            t.exports = o
        },
        bR4N: function(t, e, i) {
            "use strict";
            var o, n, s = i("wmOI").ESC,
                r = i("0waE").guid,
                a = i("jAh7").getRootOverlapManager;
            i("eL+L"), (o = function(t, e, n) {
                var l, c, u, p, h, d, f = ".popup-menu";
                t = $(t), (n = n || {}).activeClass = n.activeClass || "", l = (n.event || "click") + f, n.hideEvent && (c = n.hideEvent + f), p = u = function() {}, h = {}, d = function(l, d, v) {
                    function g(e) {
                        var i = $(e.target).parents().andSelf();
                        i.is(y) || i.is(t) || i.is(".charts-popup-tab-headers, .charts-popup-itemheader") || p()
                    }

                    function m(t) {
                        if (h.preventFirstProcessClick) h.preventFirstProcessClick = !1;
                        else {
                            var e = $(t.target).parents().andSelf();
                            e.is(".charts-popup-tab-headers, .charts-popup-itemheader") || n.notCloseOnButtons && e.is(".icon-delete") || p()
                        }
                    }

                    function _(t) {
                        t.keyCode === s && p()
                    }
                    var b, y, C, T, k, w, x, M, V, S, E, P, O, I, D, F, R, A, L, H, B, z, N, W = r(),
                        G = l.target.ownerDocument,
                        U = G.defaultView,
                        j = a(G),
                        Y = d || e;
                    if ("function" == typeof Y && (Y = Y()), $(this).hasClass("open") || $(this).hasClass("active")) return l.preventDefault(), p(), void(b = h.scrollTop);
                    switch (p = function() {
                        h.scrollTop = y.scrollTop(), y.remove(), j.removeWindow(W), t.removeClass("active open " + n.activeClass), t.data("popup-menu", null), $(G).off("click", m), $(G).off("mousedown", g), Modernizr.mobiletouch && $(G).off("touchstart.chartgui", g), $(G).off("selectstart." + f), G.removeEventListener("keydown", _, !1), p = u, n.onRemove && n.onRemove()
                    }, t.addClass("active open " + n.activeClass), y = $('<div class="charts-popup-list">'), n.addClass && y.addClass(n.addClass), n.zIndex && y.css("z-index", n.zIndex), C = y, n.listInner && (C = $('<div class="list-inner">').appendTo(C)), n.listTable && (C = $('<div class="list-table">').appendTo(C)), $.each(Y, function(e) {
                        ! function e(s, r, a) {
                            var l, c, u, p, h, d, f, v, g, m, _, b, C, T, k;
                            if (s instanceof o.TabGroup) {
                                if (!s.tabs || !s.tabs.length) return;
                                return 1 !== s.tabs.length || s.tabs[0].title ? (l = $('<div class="charts-popup-tab-group"></div>').appendTo(a), c = $('<div class="charts-popup-tab-headers"></div>').appendTo(l), u = null, void $.each(s.tabs || [], function(t, i) {
                                    var o, n;
                                    i.items && i.items.length && (o = $('<div class="charts-popup-tab"></div>').hide().appendTo(l), $.each(i.items, function() {
                                        e(this, void 0, o)
                                    }), (n = $('<span class="charts-popup-tab-header">').append($('<a href="javascript://" class="charts-popup-tab-header-label">').text(i.name)).appendTo(c)).on("click", function(t) {
                                        n.is(".active") || (c.find(".charts-popup-tab-header.active").removeClass("active"), n.addClass("active"), l.find(".charts-popup-tab").hide(), o.show(), t && t.preventDefault(), "function" == typeof s.onChange && s.onChange.call(s, i.name))
                                    }), u && !i.active || (u = n, c.find(".charts-popup-tab-header.active").removeClass("active"), n.addClass("active"), l.find(".charts-popup-tab").hide(), o.show()))
                                })) : void $.each(s.tabs[0].items, function() {
                                    e(this, void 0, a)
                                })
                            }
                            if (s instanceof o.Group) return p = $('<div class="charts-popup-group"></div>').appendTo(a), s.title && (h = $('<div class="charts-popup-itemheader"></div>').text(s.title).prepend($('<span class="charts-popup-itemheader-icon"></span>')), s.collapsible && (p.addClass("charts-popup-group-collapsible"), p.toggleClass("collapsed", s.collapsed), h.on("click", function() {
                                p.toggleClass("collapsed"), "function" == typeof s.onChange && s.onChange(p.hasClass("collapsed")), y.height() === parseInt(y.css("max-height")) ? y.addClass("popup-menu-scroll-y") : y.height() < parseInt(y.css("max-height")) && y.removeClass("popup-menu-scroll-y")
                            })), p.append(h)), void $.each(s.items, function(t) {
                                e(this, 1, p)
                            });
                            if (s instanceof o.Header) a.append($('<div class="charts-popup-itemheader"></div>').text(s.title));
                            else {
                                if (s.separator) return d = $('<span class="separator"></span>'), void a.append(d);
                                d = $('<a class="item">'), s.url && d.attr("href", s.url), s.target && d.attr("target", s.target), r || d.addClass("first"), "function" == typeof s.active ? s.active(s) && d.addClass("active") : s.active && d.addClass("active"), s.addClass && d.addClass(s.addClass), s.addData && d.data(s.addData), s.disabled && d.addClass("disabled"), "function" == typeof s.action && (f = s.action, v = function(t) {
                                        $(t.target).parents().andSelf().is(T) || (f.apply(d, arguments), !s.url && t && "function" == typeof t.preventDefault && t.preventDefault())
                                    }, n.upAction ? d.bind("mouseup", v) : d.bind("click", v)), s.date ? (g = $('<span class="title"></span>').appendTo(d), $('<span class="date"></span>').text(s.date || "").appendTo(d)) : s.icon && !n.svg ? ((m = $('<span class="icon"></span>').appendTo(d)).css("background-image", s.icon.image || ""), s.icon.offset && m.css("background-position", "string" == typeof s.icon.offset ? s.icon.offset : s.icon.offset.x + "px " + s.icon.offset.y + "px"), g = $('<span class="title"></span>').appendTo(d)) : !0 === n.svg && s.svg ? (n.wrapIcon ? d.append($('<span class="icon-wrap">').addClass(s.iconClass).append(s.svg)) : d.append(s.svg), g = $('<span class="title"></span>').appendTo(d)) : s.iconClass ? (d.append($('<span class="icon"></span>').addClass(s.iconClass)), g = $('<span class="title"></span>').appendTo(d)) : g = $('<span class="title-expanded"></span>').appendTo(d), s.html ? g.html(s.html) : g.text(TradingView.clean(s.title, !0) || ""), _ = $('<span class="shortcut"></span>').appendTo(d), s.shortcut && _.text(s.shortcut.keys),
                                    "function" == typeof s.deleteAction && (b = s.deleteAction, C = s.deleteAction.title || $.t("Delete"), (T = $('<span class="icon-delete">')).html(i("uo4K")), T.attr("title", C), T.on("click", function(t) {
                                        b.apply(d, arguments), t.preventDefault()
                                    }), d.append(T)), s.buttons instanceof Array && s.buttons.length && s.buttons.forEach(function(t) {
                                        t.el instanceof $ || (t.el = $(t.el)), t.el.appendTo(d), t.handler && t.el.on("click", function(e) {
                                            t.handler.apply(d, arguments)
                                        })
                                    }), void 0 !== s.counter && ("function" == typeof s.counter ? $('<span class="counter"></span>').html(s.counter()).appendTo(d) : (k = s.counterBlue ? "blue" : "", $('<span class="counter"></span>').text(s.counter + "").addClass(k).appendTo(d))), s.name && d.attr("data-name", s.name), a.append(d), t.data("popup-menu", a)
                            }
                        }(this, e, C)
                    }), c || (h.preventFirstProcessClick = !0), $(G).on("click", m), $(G).on("mousedown", g), G.addEventListener("keydown", _, !1), Modernizr.mobiletouch && $(G).on("touchstart.chartgui", g), n.upAction && $(G).on("selectstart.popup-menu", function() {
                        return !1
                    }), y.appendTo(j.ensureWindow(W)), T = G.documentElement.clientWidth, k = G.documentElement.clientHeight, w = t.outerWidth(), x = t.outerHeight(), M = t.offset(), b = $(U).scrollTop() || 0, M.top -= b, M.top = Math.round(M.top), M.left = Math.round(M.left), V = y.outerWidth(), S = y.outerHeight(), E = void 0 !== n.viewportSpacing ? n.viewportSpacing : 10, P = n.popupSpacing ? ~~n.popupSpacing : 1, O = n.popupDrift ? ~~n.popupDrift : 0, I = S - y.height(), D = "down", n.direction && (D = "function" == typeof n.direction ? n.direction() : n.direction), F = !!n.reverse, "down" === D ? (R = k - M.top - x - P - E - I, A = M.top - P - E - I, R < Math.max(S || 0, 100) && A > R && (D = "up")) : "right" === D && (L = T - M.left - w - P - E - I, H = M.left - P - E - I, L < Math.max(V || 0, 100) && H > L && (D = "left")), D) {
                        case "down":
                        case "up":
                            "down" === D ? y.css("top", M.top + x + P + "px") : y.css("bottom", k - M.top + P + "px").css("top", "auto"), F ? y.css("left", Math.max(M.left + O + w - V, E) + "px").css("right", "auto") : y.css("left", M.left + O + "px").css("right", "auto");
                            break;
                        case "right":
                        case "left":
                            P = Math.max(P, 4), "right" === D ? y.css("left", Math.floor(M.left + w + P) + "px").css("right", "auto") : y.css("left", Math.floor(Math.max(M.left - V - P, E)) + "px").css("right", "auto"), F ? y.css("top", Math.floor(Math.max(M.top + O + x - S, E)) + "px") : y.css("top", Math.floor(M.top + O) + "px")
                    }
                    y.show(), B = M.top, "up" === D || {
                        left: 1,
                        right: 1
                    }[D] && F ? "up" !== D ? B += x : B -= x + P + I + E : B = k - B - x - 2 * P - I, y.height() > B && y.addClass("popup-menu-scroll-y"), y.css("max-height", B + "px"), n.careRightBorder && (z = T + $(U).scrollLeft(), parseInt(y.css("left")) + y.width() + E > z && y.css("left", z - y.width() - E + "px").css("right", "auto")), n.careBottomBorder && parseInt(y.css("top")) + y.height() + E > k + b && y.css("top", k - y.height() - E + b + "px"), N = y.offset(), y.css({
                        position: "fixed",
                        left: N.left - $(G).scrollLeft(),
                        right: "auto"
                    }), y[0].scrollHeight > y.height() && y.addClass("popup-with-scroll"), l && l.preventDefault()
                }, l && t.bind(l, d), c && t.bind(c, function() {
                    p()
                }), n.runOpened && d()
            }).TabGroup = function t(e) {
                if (!(this instanceof t)) return new t(e);
                e = e || {}, this.tabs = [], "function" == typeof e.onChange && (this.onChange = e.onChange)
            }, o.TabGroup.prototype.appendTab = function(t, e, i) {
                if (null == t ? t = "" : t += "", e || (e = []), i || (i = {}), !Array.isArray(e)) throw new TypeError("items must be an array");
                return this.tabs.push({
                    name: t,
                    items: e,
                    active: !!i.active
                }), e
            }, o.Header = function t(e) {
                if (!(this instanceof t)) return new t(e);
                this.title = e
            }, o.Group = function t(e) {
                if (!(this instanceof t)) return new t(e);
                e = e || {}, this.items = [], this.title = null == e.title ? "" : e.title + "", this.collapsible = !!e.collapsible, this.collapsed = !!e.collapsed, "function" == typeof e.onChange && (this.onChange = e.onChange)
            }, o.Group.prototype.push = function() {
                this.items.push.apply(this.items, arguments)
            }, e.bindPopupMenu = o, n = function(t) {
                (t = $(t)).unbind(".popup-menu"), t.removeData("popup-menu")
            }, e.unbindPopupMenu = n
        },
        "d2+F": function(t, e, i) {
            "use strict";
            var o, n, s, r, a, l, c, u, p, h, d, f, v, g, m, _;
            i("zNST"), i("utoz"), i("pay7"), o = i("eJTA"), n = o.rgba, s = o.areEqualRgb, r = o.areEqualRgba, a = o.normalizeHue, l = o.normalizeHsvSaturation, c = o.normalizeValue, u = o.hsv, p = o.rgbToHsv, h = o.hsvToRgb, d = o.rgbToString, f = o.rgbaToString, v = o.parseRgb, g = o.parseRgba, m = i("Y+MS"), _ = i("wmOI").ESC,
                function(t) {
                    function e(t) {
                        return "" === t ? t : f(g(t))
                    }

                    function i(t) {
                        t && (t.join || (t = t ? ("" + t).split(",") : []), C = t)
                    }

                    function o($) {
                        function k(e, i, o) {
                            var s = t(this);
                            e = f(n(v(e), i)), w.call(this, e), s.removeData("tvcolorpicker").removeData("tvcolorpicker-custom-color"), o && (S.call(s), s.blur())
                        }

                        function w(e) {
                            var i = t(this);
                            i.val(e), i.change(), e ? i.trigger("pick-color", e) : i.trigger("pick-transparent"), x.call(this, e)
                        }

                        function x(e) {
                            "" !== e ? (t(this).removeClass("tvcolorpicker-gradient-widget"), t(this).css({
                                backgroundColor: e,
                                color: e
                            })) : t(this).addClass("tvcolorpicker-gradient-widget")
                        }

                        function M(e, i) {
                            var o, n, r, a, l, c, u;
                            return i = i || {}, n = (o = this).prop("ownerDocument"), r = t(o).val().toLowerCase(), a = n.createElement("table"), l = n.createElement("tbody"), a.appendChild(l), u = 0, t.each(e, function(e, n) {
                                var a, p;
                                u++, e % y == 0 && (c = t("<tr></tr>").appendTo(l)), a = t('<td class="tvcolorpicker-cell"></td>').appendTo(c), p = t('<div class="tvcolorpicker-transparency"><div class="tvcolorpicker-swatch"></div></div>').appendTo(a).find(".tvcolorpicker-swatch").data("color", n), i.addClass && p.addClass(i.addClass), n && (n = n.toLowerCase(), r && s(v(r), v(n)) && p.addClass("active"), p.css({
                                    backgroundColor: n
                                }).data("color", n), p.bind("click", function() {
                                    k.call(o, n, P.val(), !0)
                                }))
                            }), t(a).addClass("tvcolorpicker-table"), u ? a : t()
                        }

                        function V(e) {
                            function i(t) {
                                var e = t.originalEvent,
                                    i = t.offsetX || t.layerX || e && (e.offsetX || e.layerX) || 0,
                                    o = t.offsetY || t.layerY || e && (e.offsetY || e.layerY) || 0;
                                V.css({
                                    left: i + "px",
                                    top: o + "px"
                                }), z[0] = a(i / A), z[1] = l(1 - o / R), I.css({
                                    backgroundColor: d(h(u(z[0], z[1], 1)))
                                }), b()
                            }

                            function o(e) {
                                1 == e.which && (L = !1, U.is(".opened") && t(W).get(0).focus())
                            }

                            function s(e) {
                                var i = function(e) {
                                    var i = e.pageY,
                                        o = t(F),
                                        n = i - o.offset().top;
                                    return n > o.height() ? o.height() : n < 0 ? 0 : n
                                }(e);
                                D.css({
                                    top: i + "px"
                                }), z[2] = c(1 - Math.max(0, Math.min(i, R)) / R), b()
                            }

                            function _(e) {
                                1 == e.which && (H = !1, t(G).unbind("mouseup", _), U.is(".opened") && t(W).get(0).focus())
                            }

                            function b() {
                                var t, e;
                                B && (B = !1, U.find(".tvcolorpicker-swatch.active").removeClass("active")), t = n(h(z), P.val()), r(g(W.val().toUpperCase()), t) || (e = f(t), W.data("tvcolorpicker-custom-color", e), w.call(W, e))
                            }
                            var y, $, x, V, S, O, I, D, F, R, A, L, H, B, z, N = !1,
                                W = t(this),
                                G = W.prop("ownerDocument"),
                                U = t('<div class="tvcolorpicker-popup opened">'),
                                j = t('<div class="tvcolorpicker-swatches-area"></div>').appendTo(U);
                            return j.append(M.call(this, ["rgb(0, 0, 0)", "rgb(66, 66, 66)", "rgb(101, 101, 101)", "rgb(152, 152, 152)", "rgb(182, 182, 182)", "rgb(203, 203, 203)", "rgb(216, 216, 216)", "rgb(238, 238, 238)", "rgb(242, 242, 242)", "rgb(255, 255, 255)"])), j.append(M.call(this, ["rgb(151, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 152, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(73, 133, 231)", "rgb(0, 0, 255)", "rgb(152, 0, 255)", "rgb(255, 0, 255)"])), j.append(M.call(this, ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)", "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"])), y = t('<div class="tvcolorpicker-custom-area"></div>').css({
                                    display: "none"
                                }).appendTo(U), $ = t('<div class="tvcolorpicker-hsv"></div>').appendTo(y), x = t('<div class="tvcolorpicker-hs"></div>').appendTo($), V = t('<div class="tvcolorpicker-hs-handle"></div>').appendTo(x), S = t('<div class="tvcolorpicker-hs-area"></div>').appendTo(x), O = t('<div class="tvcolorpicker-vv">').appendTo($), I = t('<div class="tvcolorpicker-v"></div>').appendTo(O), D = t('<div class="tvcolorpicker-v-handle"></div>').appendTo(I), F = t('<div class="tvcolorpicker-v-area"></div>').appendTo(I), (P = m(t(this), e.hideTransparency)).initEvents(), P.updateColor(), P.$el.appendTo(U), P.val(g(W.val() || T)[3]), R = x.height(), A = x.width(), L = !1, H = !1, B = !0, z = [0, 0, .5], S.bind("mousedown", function(e) {
                                    1 == e.which && (L = !0, t(G).bind("mouseup", o), i(e), e.preventDefault())
                                }), S.bind("mousemove", function(t) {
                                    L && (i(t), t.preventDefault())
                                }), t(P).on("change", function() {
                                    N ? b() : k.call(this, t(this).val() || T, P.val())
                                }.bind(this)), t(P).on("afterChange", function() {
                                    t(this).focus()
                                }.bind(this)), O.bind("mousedown", function(e) {
                                    1 == e.which && (H = !0, t(G).bind("mouseup", _), s(e), e.preventDefault())
                                }), t(G).bind("mousemove", function(t) {
                                    H && (s(t), t.preventDefault())
                                }),
                                t('<a class="tvcolorpicker-custom-button _tv-button">' + window.t("Custom color...") + "</a>").appendTo(U).bind("click", function() {
                                    var e, i = t(this).is(".active");
                                    i || y.css({
                                        minWidth: j.width() + "px",
                                        minHeight: j.height() + "px"
                                    }), t(this)[i ? "removeClass" : "addClass"]("active"), N = t(this).is(".active"), y.css({
                                        display: i ? "none" : "block"
                                    }), j.css({
                                        display: i ? "block" : "none"
                                    }), i ? W.removeData("tvcolorpicker-custom-color") : (R = x.height(), A = x.width(), e = v(W.val() || T), z = p(e), V.css({
                                        left: ~~(z[0] * A) + "px",
                                        top: ~~((1 - z[1]) * R) + "px"
                                    }), D.css({
                                        top: ~~((1 - z[2]) * R) + "px"
                                    }), I.css({
                                        backgroundColor: d(h(u(z[0], z[1], 1)))
                                    }))
                                }), U.append(t(M.call(this, C, {
                                    addClass: "tvcolorpicker-user"
                                })).addClass("tvcolorpicker-user-swatches")), t(G.body).append(U),
                                function(e, i, o) {
                                    var n, s = t(e).prop("ownerDocument"),
                                        r = s.defaultView,
                                        a = t(e).offset(),
                                        l = (t(s).scrollLeft(), t(s).scrollTop()),
                                        c = t(e).outerWidth(),
                                        u = t(e).outerHeight(),
                                        p = t(r).width(),
                                        h = t(r).height(),
                                        d = t(i).outerWidth(),
                                        f = t(i).outerHeight(),
                                        v = "function" == typeof o.direction ? o.direction() : o.direction;
                                    switch (v) {
                                        default:
                                            case "down":
                                            n = {
                                            top: a.top + u + o.offset,
                                            left: a.left + o.drift
                                        };
                                        break;
                                        case "right":
                                                n = {
                                                top: a.top + o.drift,
                                                left: a.left + c + o.offset
                                            }
                                    }
                                    n.top + f > h + l && (n.top = h - f + l), a.left + d > p && (n.left = p - d), n.left += "px", n.top += "px", i.css(n)
                                }(W, U, e), G.addEventListener("keydown", E, !1), U
                        }

                        function S() {
                            var e = t(this).prop("ownerDocument") || document;
                            t(e).find(".tvcolorpicker-popup").removeClass("opened").remove(), t(P).off("change"), t(P).off("afterChange"), e.removeEventListener("keydown", E, !1), t(O).data("tvcolorpicker", null), t(O).each(function() {
                                var e, i = t(this).data("tvcolorpicker-custom-color");
                                i && (function(e) {
                                    var i = !1,
                                        o = v(e);
                                    return t.each(C, function(t, e) {
                                        if (s(v(e), o)) return i = !0, !1
                                    }), !i && (C = [d(o)].concat(C.slice(0, b - 1)), !0)
                                }(i) && t(this).trigger("customcolorchange", [C]), t(this).data("tvcolorpicker-custom-color", null)), (e = t(this).data("tvcolorpicker-previous-color")) && e != t(this).val() && t(this).trigger("change"), t(this).removeData("tvcolorpicker-previous-color")
                            })
                        }

                        function E(t) {
                            t.keyCode === _ && (S.call(O), O.blur())
                        }
                        var P, O;
                        return $ = t.extend({}, o.options, $ || {}), O = this, $ && "customColors" in $ && i($.customColors), this.each(function() {
                            function i() {
                                var t = e(r.val());
                                x.call(r, t)
                            }
                            var o, n, s, r = t(this);
                            r.val(e(r.val())), o = null, n = !1, r.addClass("tvcolorpicker-widget").attr("autocomplete", "off").attr("readonly", !0), s = function() {
                                r.data("tvcolorpicker") || (S.call(r), o = V.call(r, $), r.data("tvcolorpicker-custom-color", null), r.data("tvcolorpicker", o), r.data("tvcolorpicker-previous-color", r.val()), o.bind("mousedown click", function(e) {
                                    t(e.target).parents().andSelf().is(o) && (r.focus(), n = !0, setTimeout(function() {
                                        n = !1
                                    }, 0))
                                }))
                            }, r.on("touchstart", s), r.focus(s), S.call(r), r.bind("blur", function(t) {
                                n ? t.stopPropagation() : S.call(r)
                            }), r.change(function(t) {
                                i()
                            }), i()
                        })
                    }
                    var b, y, C, T;
                    if (!t) throw new Error("This program cannot be run in DOS mode");
                    o.setCustomColors = i, t.fn.tvcolorpicker = o, b = 29, y = 10, C = [], T = "rgb(14, 15, 16)", o.options = {
                        direction: "down",
                        offset: 0,
                        drift: 0
                    }
                }(window.jQuery)
        },
        "eL+L": function(t, e, i) {},
        jNEI: function(t, e, i) {
            "use strict";

            function o(t, e) {
                void 0 === e && (e = {});
                var i = $('<span class="tvcolorpicker-container">');
                return null !== t && i.appendTo(t), void 0 !== e.addClass && i.addClass(e.addClass), $('<div class="tvcolorpicker-transparency">').appendTo(i), $('<input class="colorpicker-widget">').tvcolorpicker({
                    customColors: function(t) {
                        var e, i, o, n = [];
                        for (e = 0, i = t; e < i.length; e++) o = i[e], null !== Object(r.tryParseRgb)(o) && n.push(o);
                        return n
                    }(Object(a.getJSON)("pickerCustomColors", [])),
                    direction: e.direction,
                    hideTransparency: !!e.hideTransparency
                }).on("change", function() {
                    var t, e, i;
                    $(this).css("border-color", (t = $(this).val() || l, e = Object(r.parseRgb)(t), i = e.map(function(t) {
                        return t > 50 ? t - 50 : 0
                    }), Object(r.rgbToString)(i)))
                }).bind("customcolorchange", function(t, e) {
                    Object(a.setJSON)("pickerCustomColors", e)
                }).appendTo(i), i
            }
            var n, s, r, a, l;
            i.r(e), i.d(e, "addColorPicker", function() {
                return o
            }), n = i("P5fv"), s = i("d2+F"), r = i("eJTA"), a = i("Vdly"), l = "#727272"
        },
        pay7: function(t, e, i) {},
        uo4K: function(t, e) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
        },
        utoz: function(t, e, i) {},
        vBzC: function(t, e, i) {
            var o, n, s;
            n = [i("P5fv"), i("Qwlt")], void 0 === (s = "function" == typeof(o = function(t) {
                return t.ui.keyCode = {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }) ? o.apply(e, n) : o) || (t.exports = s)
        },
        zNST: function(t, e, i) {}
    }
]);