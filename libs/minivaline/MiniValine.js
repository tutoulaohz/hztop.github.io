! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("MiniValine", [], t) : "object" == typeof exports ? exports.MiniValine = t() : e.MiniValine = t()
}(window, (function () {
    return function (e) {
        function t(t) {
            for (var n, o, i = t[0], a = t[1], c = 0, s = []; c < i.length; c++) o = i[c], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), r[o] = 0;
            for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            for (l && l(t); s.length;) s.shift()()
        }
        var n = {},
            r = {
                2: 0
            };

        function o(t) {
            if (n[t]) return n[t].exports;
            var r = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        o.e = function (e) {
            var t = [],
                n = r[e];
            if (0 !== n)
                if (n) t.push(n[2]);
                else {
                    var i = new Promise((function (t, o) {
                        n = r[e] = [t, o]
                    }));
                    t.push(n[2] = i);
                    var a, c = document.createElement("script");
                    c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = function (e) {
                        return o.p + "MiniValine." + ({
                            0: "npm.style-loader",
                            1: "npm.highlight.js",
                            3: "barrager",
                            4: "body-DesertsP",
                            5: "body-xCss",
                            6: "lib",
                            7: "math",
                            8: "md",
                            9: "md-style",
                            10: "npm.leancloud-storage",
                            11: "npm.marked",
                            12: "style-DesertsP",
                            13: "style-barrager",
                            14: "style-dark",
                            15: "style-xCss",
                            16: "ua",
                            17: "vcard-DesertsP",
                            18: "vcard-barrager",
                            19: "vendors~lib",
                            20: "vendors~xss",
                            21: "visitor",
                            22: "xss"
                        } [e] || e) + ".min.js"
                    }(e);
                    var l = new Error;
                    a = function (t) {
                        c.onerror = c.onload = null, clearTimeout(s);
                        var n = r[e];
                        if (0 !== n) {
                            if (n) {
                                var o = t && ("load" === t.type ? "missing" : t.type),
                                    i = t && t.target && t.target.src;
                                l.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", l.name = "ChunkLoadError", l.type = o, l.request = i, n[1](l)
                            }
                            r[e] = void 0
                        }
                    };
                    var s = setTimeout((function () {
                        a({
                            type: "timeout",
                            target: c
                        })
                    }), 12e4);
                    c.onerror = c.onload = a, document.head.appendChild(c)
                } return Promise.all(t)
        }, o.m = e, o.c = n, o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function (e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function (t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "https://cdn.jsdelivr.net/npm/minivaline@4.2.11/dist/", o.oe = function (e) {
            throw console.error(e), e
        };
        var i = window.webpackJsonpMiniValine = window.webpackJsonpMiniValine || [],
            a = i.push.bind(i);
        i.push = t, i = i.slice();
        for (var c = 0; c < i.length; c++) t(i[c]);
        var l = a;
        return o(o.s = 9)
    }([function (e, t, n) {
        "use strict";
        var r = {
            on: function (e, t, n, o) {
                for (var i = 0, a = (e = e.split(" ")).length; i < a; i++) r.off(e[i], t, n, o), t.addEventListener ? t.addEventListener(e[i], n, o || !1) : t.attachEvent ? t.attachEvent("on".concat(e[i]), n) : t["on".concat(e[i])] = n
            },
            off: function (e, t, n, r) {
                for (var o = 0, i = (e = e.split(" ")).length; o < i; o++) t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on".concat(e), n) : t["on".concat(e)] = null
            }
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = t.VERSION = "4.2.11",
            o = t.MVUrl = "https://cdn.jsdelivr.net/npm/minivaline@" + r;
        t.GBUrl = "https://gravatar.loli.net/avatar/", t.EUrl = [o + "/imgs/alus", o + "/imgs/qq", o + "/imgs/Bilibilis", o + "/imgs/tieba", o + "/imgs/twemoji", o + "/imgs/weibo", o + "/imgs/funny"], t.pf = "https://cdn.polyfill.io/v3/polyfill.min.js?features=es6", t.i18nUrl = o + "/i18n/", t.DEHash = "9e63c80900d106cbbec5a9f4ea433a3e", t.MaxNL = 6, t.PS = 6, t.C = {
            ip: "",
            comment: "",
            rid: "",
            at: "",
            nick: "",
            mail: "",
            mailMd5: "",
            link: "",
            ua: navigator.userAgent,
            url: location.pathname
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            var t = [];
            for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            return t.push(("v=" + Math.random()).replace(".", "")), t.join("&")
        };
        e.exports = function (e) {
            (e = e || {}).type = (e.type || "GET").toUpperCase(), e.dataType = e.dataType || "json";
            var t = r(e.data);
            if (window.XMLHttpRequest) var n = new XMLHttpRequest;
            else n = new ActiveXObject("Microsoft.XMLHTTP");
            n.onreadystatechange = function () {
                if (4 === n.readyState) {
                    var t = n.status;
                    200 <= t && t < 300 ? e.success && e.success(n.responseText, n.responseXML) : e.fail && e.fail(t)
                }
            }, "GET" == e.type ? (n.open("GET", e.url + "?" + t, !0), n.send(null)) : "POST" == e.type && (n.open("POST", e.url, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(t))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            Promise.all([n.e(20), n.e(22)]).then(n.t.bind(null, 58, 7)).then((function (n) {
                var r = n.XSS;
                e.TEXT = r(e.TEXT), t(e)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            if (document.selection) e.focus(), document.selection.createRange().text = t, e.focus();
            else if (e.selectionStart || "0" == e.selectionStart) {
                var n = e.selectionStart,
                    r = e.selectionEnd,
                    o = e.scrollTop;
                e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length), e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length, e.scrollTop = o
            } else e.focus(), e.value += t
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function (e) {
            var t = localStorage && localStorage.getItem("MiniValineCache");
            if (t) {
                t = JSON.parse(t);
                for (var n = ["nick", "link", "mail"], o = 0; o < n.length; o++) {
                    var i = n[o];
                    e.el.querySelector(".v".concat(i)).value = t[i], e.C[i] = t[i]
                }
                "" !== t.mail && "DesertsP" === e.mode && e.el.querySelector(".visitor_avatar").setAttribute("data-src", "".concat(r.GBUrl + md5(t.mail.toLowerCase().trim()), "?size=80&d=robohash"))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(37));
        e.exports = function (e, t, n) {
            var o = e.C.comment.match(/!\(:(.*?\.\w+):\)/g);
            if (o)
                for (var i = 0; i < o.length; i++) {
                    var a = o[i].match(/!\(:(.*?\.\w+):\)/)[1],
                        c = e.emoticon[a],
                        l = new RegExp("!\\(:" + a.replace(/\./, "\\.") + ":\\)", "g");
                    e.C.comment = e.C.comment.replace(l, '<img src="'.concat(c, '" alt="').concat(a, '" class="vemoticon-img">'))
                }
            t.TEXT = e.C.comment, (0, r.default)(e, t, n)
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
                var t = o(e.getDate(), 2),
                    n = o(e.getMonth() + 1, 2),
                    r = o(e.getFullYear(), 2);
                return "".concat(r, "-").concat(n, "-").concat(t)
            },
            o = function (e, t) {
                for (var n = e.toString(); n.length < t;) n = "0".concat(n);
                return n
            };
        e.exports = function (e, t) {
            try {
                var n = e.getTime(),
                    o = (new Date).getTime() - n,
                    i = Math.floor(o / 864e5);
                if (0 !== i) return i < 0 ? t.now : i < 365 ? "".concat(i, " ").concat(t.days) : r(e);
                var a = o % 864e5,
                    c = Math.floor(a / 36e5);
                if (0 !== c) return "".concat(c, " ").concat(t.hours);
                var l = a % 36e5,
                    s = Math.floor(l / 6e4);
                if (0 !== s) return "".concat(s, " ").concat(t.minutes);
                var u = l % 6e4,
                    d = Math.round(u / 1e3);
                return 0 === d ? t.now : "".concat(d, " ").concat(t.seconds)
            } catch (e) {
                console.log(e)
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e;
            try {
                document.getElementsByTagName("head")[0].appendChild(t)
            } catch (e) {}
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(10)),
            o = n(1),
            i = function (e) {
                return window.MV || (console.log("%c MiniValine %c v" + o.VERSION + " ", "color: white; background: #0078E7; padding:5px 0;", "padding:4px;border:1px solid #0078E7;"), window.MV = {}, window.MV.v = o.VERSION), new r.default(e)
            };
        e.exports = i, e.exports.default = i
    }, function (e, t, n) {
        "use strict";
        var r = i(n(11)),
            o = i(n(16));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = function (e) {
            var t = this;
            try {
                if (t.config = e, !document.querySelectorAll(t.config.el)[0]) return;
                o.default.Config(t), o.default.initStyle(t), o.default.ActivateCode(t), o.default.script(t), o.default.i18n(t), o.default.initLibs(t)
            } catch (e) {}
        };
        a.prototype.initCheck = function () {
            var e = this;
            try {
                var t = setInterval((function () {
                    e.i18n && (clearInterval(t), "DesertsP" === e.mode ? (n.e(4).then(n.t.bind(null, 47, 7)).then((function (t) {
                        var n = t.getEle;
                        e.ele = n(e), e.Start()
                    })), n.e(17).then(n.t.bind(null, 48, 7)).then((function (t) {
                        var n = t.Vcard;
                        e.Vcard = n(e)
                    }))) : "xCss" === e.mode && (e.config.closeUA || n.e(16).then(n.t.bind(null, 49, 7)).then((function (e) {
                        (0, e.init)()
                    })), n.e(5).then(n.t.bind(null, 50, 7)).then((function (t) {
                        var n = t.getEle;
                        e.ele = n(e), e.Start()
                    }))), void 0 !== e.config.barrager && !e.config.barrager || n.e(18).then(n.t.bind(null, 51, 7)).then((function (t) {
                        var n = t.Vbarrager;
                        e.Vbarrager = n(e)
                    })))
                }), 5)
            } catch (e) {}
        }, a.prototype.Start = function () {
            var e = this;
            try {
                r.default.el(e), r.default.loading(e), e.nodata.show(), r.default.smiles(e), o.default.setAV(e), o.default.visitor(e)
            } catch (e) {
                return
            }
            try {
                o.default.cloudFlag(e), e.loading.hide(e.parentCount), e.loading.show(), o.default.initCount(e), o.default.insertComment(e, r.default), o.default.parentQuery(e), o.default.nestQuery(e), o.default.alert(e), o.default.inputs(e), o.default.previewEvt(e), o.default.smileEvt(e), "DesertsP" === e.mode && o.default.startEvt(e), void 0 !== e.config.barrager && !e.config.barrager || o.default.barrager(e), o.default.getCache(e), o.default.resetForm(e), o.default.uploadImage(e), o.default.cancelReply(e), o.default.smileBtnEvt(e), o.default.previewBtnEvt(e), o.default.atEvt(e), o.default.submitBtnEvt(e), o.default.smile(e)
            } catch (e) {}
        }, e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = c(n(12)),
            o = c(n(13)),
            i = c(n(14)),
            a = c(n(15));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            vcard: r.default,
            loading: o.default,
            smiles: i.default,
            el: a.default
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(7));
        e.exports = function (e, t) {
            t.set("nick", t.get("nick").slice(0, 20).trim().replace(/&/g, "&amp;").replace(/\//g, "&#x2F").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"));
            var n = t.get("mailMd5"),
                i = "".concat(r.GBUrl + n, "?size=80&d=robohash");
            if (void 0 !== e.config.barrager && !e.config.barrager || e.Vbarrager(e, t, i), "DesertsP" === e.mode) return e.Vcard(e, t, i);
            if ("xCss" === e.mode) {
                var a = t.get("ua") || "",
                    c = "",
                    l = r.MVUrl + "/imgs/svg/";
                if (a && !e.config.closeUA) {
                    a = uaparser(a);
                    try {
                        if (a.browser && a.browser.name) {
                            c += '<span class="vsys"><i><embed class="msvg" src="' + l;
                            var s = a.browser.name.toLowerCase();
                            ["samsung browser"].includes(s) ? c += "mobile-alt" : ["android browser"].includes(s) ? c += "android" : ["mobile safari", "safari"].includes(s) ? c += "safari" : ["ie", "iemobile"].includes(s) ? c += "internet-explorer" : ["wechat"].includes(s) ? c += "weixin" : ["qqbrowser", "qqbrowserlite", "qq"].includes(s) ? c += "qq" : ["baiduboxapp", "baidu"].includes(s) ? c += "paw" : ["chrome", "chromium", "chrome headless", "chrome webview"].includes(s) ? c += "chrome" : ["opera mobi", "opera", "opera coast", "opera mini", "opera tablet"].includes(s) ? c += "opera" : ["firefox", "edge"].includes(s) ? c += s : c += "snapchat-ghost", c += '.svg"/></i>' + a.browser.name + " " + (a.browser.version ? a.browser.version : "") + "</span> "
                        } else c += '<span class="vsys"><i><embed class="msvg" src="' + l + 'stars.svg"/></i>Magical APP</span>';
                        if (a.os && a.os.name) {
                            c += '<span class="vsys"><i><embed class="msvg" src="' + l;
                            var u = a.os.name.toLowerCase();
                            ["mac os", "ios"].includes(u) ? c += "apple" : ["chromium os"].includes(u) ? c += "chrome" : ["firefox os"].includes(u) ? c += "firefox" : ["windows phone", "windows"].includes(u) ? c += "windows" : ["android", "linux", "ubuntu", "suse", "redhat", "fedora", "centos", "blackberry"].includes(u) ? c += u : c += "snapchat-ghost", c += '.svg"/></i>' + a.os.name + " " + (a.os.version ? a.os.version : "") + "</span>"
                        } else c += '<span class="vsys"><i><embed class="msvg" src="' + l + 'magic.svg"/></i>Magical OS</span>'
                    } catch (e) {}
                }
                if (e.config.region) try {
                    var d = t.get("log").region.data.location;
                    d && (c += '<span class="vsys"><i><embed class="msvg" src="' + l + 'map.svg"/></i>' + d + "</span>")
                } catch (e) {}
                var f = "";
                if (!e.config.closeFlag && !e.config.cloudflag) try {
                    e.master = e.master.map((function (e) {
                        return e.toLowerCase()
                    })), e.friends = e.friends.map((function (e) {
                        return e.toLowerCase()
                    }));
                    var v = e.master.includes(t.get("mailMd5").toLowerCase()),
                        m = e.friends.includes(t.get("mailMd5").toLowerCase());
                    f = v ? '<span class="vtag vmaster">' + e.tagMeta[0] + "</span>" : m ? '<span class="vtag vfriend">' + e.tagMeta[1] + "</span>" : '<span class="vtag vvisitor">' + e.tagMeta[2] + "</span>"
                } catch (e) {}
                if (!e.config.closeFlag && e.config.cloudflag) try {
                    var p = e.cloudFlag.Roles,
                        g = t.get("mailMd5").toLowerCase(),
                        y = e.cloudFlag.Users[g];
                    f = y ? '<span class="vtag" style="background:' + "".concat(e.cloudFlag.Roles[y] && e.cloudFlag.Roles[y].color ? e.cloudFlag.Roles[y].color : "#6cf") + ';">' + "".concat(e.cloudFlag.Roles[y] && e.cloudFlag.Roles[y].nick ? e.cloudFlag.Roles[y].nick : "visitor") + "</span>" : '<span class="vtag" style="background:' + "".concat(p.visitor && p.visitor.color ? p.visitor.color : "#828282") + ';">' + "".concat(p.visitor && p.visitor.nick ? p.visitor.nick : "visitor") + "</span>"
                } catch (e) {}
                return '<div class="vcomment-body"><div class="vhead" >' + '<img class="vavatar lazyload" data-src="'.concat(i, '"/>') + "<a rid='".concat(t.id, "' at='@").concat(t.get("nick"), '\' class="vat" id="at-').concat(t.id, '">').concat(e.i18n.reply, "</a>") + '<div class="vmeta-info">'.concat(t.get("link") ? '<a class="vname" href="'.concat(t.get("link"), '" target="_blank" rel="nofollow" > ').concat(t.get("nick"), "</a>").concat(f, '<span class="vsysinfo">').concat(c, "</span>") : '<span class="vname">'.concat(t.get("nick"), "</span> ").concat(f, " ").concat(c)) + '<br/><span class="vtime">'.concat((0, o.default)(t.get("createdAt"), e.i18n), "</span>") + "</div></div>" + '<section class="text-wrapper"  id="comment-'.concat(t.id, '">') + '<div class="vcomment">'.concat(t.get("comment"), "</div>") + '</section></div><div class="vcomment-children"><div class="vshow-children-wrapper" style="display: none"></div>' + '<ul class="vlist" id="children-list-'.concat(t.id, '"></ul>') + "</div>"
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = e.el.querySelector(".vempty");
            e.nodata = {
                show: function (n) {
                    t.innerHTML = n || e.i18n.noCommentYet, t.setAttribute("style", "display:block;")
                },
                hide: function () {
                    t.setAttribute("style", "display:none;")
                }
            };
            var n = '<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>',
                r = e.el.querySelector(".vloading");
            r.innerHTML = n, e.loading = {
                show: function () {
                    r.setAttribute("style", "display:block;"), e.nodata.hide()
                },
                hide: function (t) {
                    r.setAttribute("style", "display:none;"), 0 === t && e.nodata.show()
                }
            };
            var o = e.el.querySelector(".vsubmitting");
            o.innerHTML = n, e.submitting = {
                show: function () {
                    o.setAttribute("style", "display:block;")
                },
                hide: function () {
                    o.setAttribute("style", "display:none;"), e.nodata.hide()
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = setInterval((function () {
                if (void 0 !== e.emoticonList && 0 != e.emoticonList.length) {
                    clearInterval(t);
                    for (var n = e.el.querySelector(".vsmile-icons ul"), r = e.el.querySelector(".vsmile-bar ul"), o = e.emoticonList || [], i = 0; i < o.length; i++) {
                        for (var a = document.createElement("li"), c = document.createElement("li"), l = 0; l < o[i].length; l++) {
                            var s = document.createElement("img");
                            s.setAttribute("data-src", "".concat(o[i][l])), s.setAttribute("class", "lazyload");
                            try {
                                a.appendChild(s)
                            } catch (e) {}
                            if (0 === l) {
                                (s = document.createElement("img")).setAttribute("src", "".concat(o[i][0])), s.removeAttribute("class", "lazyload");
                                try {
                                    c.appendChild(s)
                                } catch (e) {}
                            }
                        }
                        try {
                            n.appendChild(a)
                        } catch (e) {}
                        try {
                            r.appendChild(c)
                        } catch (e) {}
                    }
                    try {
                        e.el.querySelector(".vsmile-icons > ul > li:nth-child(1)").style.display = "block";
                        for (var u = document.querySelectorAll(".vsmile-bar > ul > li"), d = document.querySelectorAll(".vsmile-icons > ul > li"), f = 0; f < u.length; f++) u[f].index = f, u[f].onclick = function () {
                            for (var e = 0; e < u.length; e++) u[e].className = "", d[e].style.display = "none";
                            this.className = "active", d[this.index].style.display = "block"
                        }
                    } catch (e) {}
                }
            }), 10)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = "[object HTMLDivElement]" === Object.prototype.toString.call(e.config.el) ? e.config.el : document.querySelectorAll(e.config.el)[0];
            "[object HTMLDivElement]" === Object.prototype.toString.call(t) && (e.el = t, e.el.classList.add("MiniValine"), e.el.classList.add("markdown-body"), e.el.innerHTML = e.ele)
        }
    }, function (e, t, n) {
        "use strict";
        var r = L(n(17)),
            o = L(n(18)),
            i = L(n(19)),
            a = L(n(20)),
            c = L(n(21)),
            l = L(n(23)),
            s = L(n(24)),
            u = L(n(25)),
            d = L(n(26)),
            f = L(n(5)),
            v = L(n(27)),
            m = L(n(28)),
            p = L(n(29)),
            g = L(n(30)),
            y = L(n(31)),
            h = L(n(32)),
            b = L(n(33)),
            w = L(n(34)),
            M = L(n(35)),
            S = L(n(36)),
            C = L(n(39)),
            x = L(n(40)),
            _ = L(n(41)),
            q = L(n(42)),
            A = L(n(43)),
            k = L(n(44)),
            E = L(n(45)),
            V = L(n(46));

        function L(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            Config: r.default,
            i18n: o.default,
            setAV: i.default,
            smile: a.default,
            script: c.default,
            initStyle: l.default,
            initLibs: s.default,
            uploadImage: u.default,
            alert: d.default,
            initCount: v.default,
            smileEvt: m.default,
            startEvt: p.default,
            resetForm: g.default,
            cancelReply: y.default,
            smileBtnEvt: h.default,
            previewBtnEvt: b.default,
            inputs: w.default,
            atEvt: M.default,
            submitBtnEvt: S.default,
            insertComment: C.default,
            nestQuery: x.default,
            parentQuery: _.default,
            ActivateCode: q.default,
            previewEvt: A.default,
            visitor: k.default,
            barrager: E.default,
            cloudFlag: V.default,
            getCache: f.default
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = function (e) {
            e.emoticonUrl = e.config.emoticonUrl || r.EUrl, e.lang = e.config.lang || navigator.language || navigator.userLanguage, e.maxNestLevel = e.config.maxNest || r.MaxNL, e.pageSize = e.config.pageSize || r.PS, e.adminEmailMd5 = e.config.adminEmailMd5 || "", e.math = e.config.math, e.md = e.config.md, e.visitor = e.config.visitor, e.tagMeta = e.config.tagMeta || [], e.master = e.config.master || [], e.friends = e.config.friends || [], e.mode = e.config.mode || "DesertsP", e.placeholder = e.config.placeholder || "", e.C = r.C, e.C.url = e.config.pathname || location.pathname, e.role = e.config.role ? e.config.role : "admin"
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _Default = __webpack_require__(1),
            _ajax = __webpack_require__(2),
            _ajax2 = _interopRequireDefault(_ajax);

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i18n = function i18n(root) {
            if (window.MV.i18n) root.i18n = window.MV.i18n, window.MV.getI18n = 0;
            else {
                var s = localStorage && localStorage.getItem("MiniValineI18n");
                s ? (s = JSON.parse(s), s.lang == root.lang ? (root.i18n = s.i18n, window.MV.i18n = root.i18n, window.MV.getI18n = 0) : window.MV.getI18n = 1) : window.MV.getI18n = 1, window.MV.getI18n && (0, _ajax2.default)({
                    url: _Default.i18nUrl + root.lang + "/index.json",
                    type: "GET",
                    success: function success(data) {
                        data = eval("(" + data + ")"), root.i18n = data, window.MV.i18n = root.i18n, localStorage && localStorage.setItem("MiniValineI18n", JSON.stringify({
                            lang: root.lang,
                            i18n: root.i18n
                        }))
                    }
                })
            }
        };
        module.exports = i18n
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t, n = "https://";
            if (!e.config.serverURLs) switch (e.config.appId.slice(-9)) {
                case "-9Nh9j0Va":
                    n += "tab.leancloud.cn";
                    break;
                case "-MdYXbMMI":
                    n += "console.leancloud.app";
                    break;
                default:
                    n += "avoscloud.com"
            }
            t = e.config.serverURLs || n;
            try {
                AV.init({
                    appId: e.config.appId,
                    appKey: e.config.appKey,
                    serverURLs: t
                })
            } catch (e) {}
            e.v = AV
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _ajax = __webpack_require__(2),
            _ajax2 = _interopRequireDefault(_ajax);

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var smile = function (e) {
                if (window.MV.emoticonUrl = e.emoticonUrl, !window.MV.emoticonList) {
                    var t = localStorage && localStorage.getItem("MiniValineSmile");
                    if (t)
                        if (equar((t = JSON.parse(t)).emoticonUrl, e.emoticonUrl)) {
                            e.emoticonList = t.emoticonList, e.emoticon = [];
                            for (var n = 0; n < e.emoticonList.length; n++)
                                for (var r = 0; r < e.emoticonList[n].length; r++) e.emoticon[e.emoticonList[n][r].split("/")[e.emoticonList[n][r].split("/").length - 1]] = e.emoticonList[n][r];
                            window.MV.emoticonList = e.emoticonList, window.MV.emoticon = e.emoticon, window.MV.getSmile = 0
                        } else window.MV.getSmile = 1;
                    else window.MV.getSmile = 1;
                    if (window.MV.getSmile) {
                        e.emoticonList = [], e.emoticon = [];
                        for (var o = 0; o < e.emoticonUrl.length; o++) getSmile(e, e.emoticonUrl[o]);
                        window.MV.emoticonList = e.emoticonList, window.MV.emoticon = e.emoticon
                    } else e.emoticonList = window.MV.emoticonList, e.emoticon = window.MV.emoticon;
                    setTimeout((function () {
                        localStorage && localStorage.setItem("MiniValineSmile", JSON.stringify({
                            emoticonUrl: window.MV.emoticonUrl,
                            emoticonList: window.MV.emoticonList
                        }))
                    }), 5e3)
                }
            },
            getSmile = function getSmile(root, Url) {
                (0, _ajax2.default)({
                    url: Url + "/index.json",
                    type: "GET",
                    success: function success(data) {
                        data = eval("(" + data + ")");
                        for (var tmp = [], i = 0; i < data[0].length; i++) tmp.push(Url + "/" + data[0][i]), root.emoticon[data[0][i]] = Url + "/" + data[0][i];
                        root.emoticonList.push(tmp)
                    }
                })
            };

        function equar(e, t) {
            if (e.length === t.length) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] !== t[n]) return;
                return 1
            }
        }
        module.exports = smile
    }, function (e, t, n) {
        "use strict";
        var r = n(1),
            o = a(n(8)),
            i = a(n(22));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            e.config.NoRecordIP || (void 0 === window.MV.ip ? (0, i.default)(e) : e.C.ip = window.MV.ip), void 0 === window.MV.pf && ((0, o.default)(r.pf), window.MV.pf = !0), void 0 !== e.config.barrager && !e.config.barrager || void 0 !== window.MV.jq || ("undefined" == typeof jQuery && (0, o.default)("https://cdn.jsdelivr.net/npm/jquery"), window.MV.jq = !0), void 0 !== e.visitor && !e.visitor || (0, o.default)("https://cdn.jsdelivr.net/npm/fingerprintjs2")
        }
    }, function (module, exports, __webpack_require__) {
        "use strict";
        var _ajax = __webpack_require__(2),
            _ajax2 = _interopRequireDefault(_ajax);

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var GetIP = function GetIP(root) {
            try {
                (0, _ajax2.default)({
                    url: "https://ip.zxinc.org/api.php",
                    type: "GET",
                    data: {
                        type: "json"
                    },
                    success: function success(data) {
                        data = eval("(" + data + ")"), window.MV.fuck = 1, window.MV.region = data, root.C.ip = data.data.myip, window.MV.ip = root.C.ip
                    }
                })
            } catch (e) {}
        };
        module.exports = GetIP
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            if (!e.config.closeCSS) var t = setInterval((function () {
                "undefined" != typeof Promise && (clearInterval(t), "DesertsP" === e.mode ? Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 52)) : "xCss" === e.mode && Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 53)), void 0 !== e.config.danmu && !e.config.danmu || Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 54)), e.config.dark && Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 55)))
            }), 5)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = setInterval((function () {
                "undefined" != typeof Promise && (clearInterval(t), Promise.all([n.e(0), n.e(10), n.e(19), n.e(6)]).then(n.t.bind(null, 56, 7)).then((function (t) {
                    (0, t.lib)(), e.initCheck()
                })))
            }), 5)
        }
    }, function (e, t, n) {
        "use strict";
        var r = i(n(0)),
            o = i(n(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = e.el.querySelector(".veditor");
            r.default.on("keydown", document, (function (n) {
                var r = (n = event || n).keyCode || n.which || n.charCode;
                (n.ctrlKey || n.metaKey) && 13 === r && e.submitEvt(), 9 !== r || "veditor" == (document.activeElement.className || "") && (n.preventDefault(), (0, o.default)(t, "    "))
            }));
            var n = function (n) {
                if (n.length)
                    for (var r = function () {
                            var r = n[a],
                                c = "![Uploading ".concat(r.name, "]()");
                            (0, o.default)(t, c), i(r, (function (n, o) {
                                !n && o && (t.value = t.value.replace(c, "\r\n![".concat(r.name, "](").concat(o.data.url, ")")), e.C.comment = t.value)
                            }))
                        }, a = 0; a < n.length; a++) r()
            };
            r.default.on("paste", document, (function (e) {
                var t = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData,
                    r = t && t.items,
                    o = [];
                if (r && 0 < r.length) {
                    for (var i = 0; i < r.length; i++)
                        if (-1 !== r[i].type.indexOf("image")) {
                            o.push(r[i].getAsFile());
                            break
                        } n(o)
                }
            }));
            var i = function (e, t) {
                    var n = new FormData;
                    n.append("image", e);
                    var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    r.onreadystatechange = function () {
                        if (4 === r.readyState && 200 === r.status) try {
                            var e = JSON.parse(r.responseText);
                            t && t(null, e)
                        } catch (e) {
                            t && t(e)
                        } else t && t(r.status)
                    }, r.onerror = function (e) {
                        console.log(e)
                    }, r.open("POST", "https://pic.alexhchu.com/api/upload", !0), r.send(n)
                },
                a = document.getElementsByClassName("veditor")[0];
            a.addEventListener("dragover", (function (e) {
                e.preventDefault(), e.stopPropagation()
            })), a.addEventListener("dragenter", (function (e) {
                e.preventDefault(), e.stopPropagation()
            })), a.addEventListener("drop", (function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = this.files || e.dataTransfer.files;
                n(t)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            var t = e.el.querySelector(".vmark");
            e.alert = {
                show: function (n) {
                    t.innerHTML = '<div class="valert txt-center"><div class="vtext">'.concat(n.text, '</div><div class="vbtns"></div></div>');
                    var o = t.querySelector(".vbtns"),
                        i = '<button class="vcancel vbtn">'.concat(n.ctxt || e.i18n.cancel, "</button>"),
                        a = '<button class="vsure vbtn">'.concat(n.otxt || e.i18n.continue, "</button>");
                    if (o.innerHTML = "".concat(i).concat(n.type && a), t.querySelector(".vcancel").addEventListener("click", (function (t) {
                            e.alert.hide()
                        })), t.setAttribute("style", "display:block;"), n.type) {
                        var c = t.querySelector(".vsure");
                        r.default.on("click", c, (function (t) {
                            e.alert.hide(), n.cb && n.cb()
                        }))
                    }
                },
                hide: function () {
                    t.setAttribute("style", "display:none;")
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = new e.v.Query("Comment");
            t.equalTo("url", e.C.url);
            var n = new e.v.Query("Comment");
            n.equalTo("url", "".concat(e.C.url, "/"));
            var r = AV.Query.or(t, n);
            r.notEqualTo("isSpam", !0), r.count().then((function (t) {
                e.el.querySelector(".count").innerHTML = t
            })).catch((function (t) {
                console.log(t), e.el.querySelector(".count").innerHTML = 0
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = i(n(0)),
            o = i(n(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = e.el.querySelector(".vsmile-icons");
            r.default.on("click", t, (function (t) {
                var n = e.el.querySelector(".veditor"),
                    r = t.target.src;
                if (void 0 !== r) {
                    var i = "!(:".concat(decodeURI(r).replace(/^.*\/(.*)$/, "$1"), ":)");
                    (0, o.default)(n, i), e.C.comment = n.value;
                    var a = e.el.querySelector(".vsubmit");
                    a.getAttribute("disabled") && a.removeAttribute("disabled")
                }
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            var t = e.el.querySelector(".commentTrigger");
            r.default.on("click", t, (function (n) {
                t.setAttribute("style", "display:none"), e.el.querySelector(".auth-section").removeAttribute("style"), e.el.querySelector(".veditor").focus()
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(5));
        e.exports = function (e) {
            var t = e.el.querySelector(".vsmile-icons"),
                n = e.el.querySelector(".vpreview-text");
            e.reset = function () {
                for (var o in e.mapping)
                    if (e.mapping.hasOwnProperty(o)) {
                        var i = e.mapping[o];
                        e.el.querySelector(".".concat(o)).value = "", e.C[i] = ""
                    } e.C.rid = "", e.C.nick = "", e.C.at = "", (e.el.querySelector(".vinputs-area  textarea").placeholder = "", r.default)(e), e.previewEvt(e), t.getAttribute("triggered") && (t.setAttribute("style", "display:none;"), t.removeAttribute("triggered")), n.getAttribute("triggered") && (n.setAttribute("style", "display:none;"), n.removeAttribute("triggered")), e.el.querySelector(".vcancel-comment-reply").setAttribute("style", "display:none");
                try {
                    e.el.querySelector("#vinputs-placeholder").appendChild(e.el.querySelector(".vinputs-wrap"))
                } catch (e) {}
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            r.default.on("click", e.el.querySelector(".cancel-reply-btn"), (function (t) {
                e.reset()
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            var t = e.el.querySelector(".vemoji-btn"),
                n = e.el.querySelector(".vpreview-btn"),
                o = e.el.querySelector(".vpreview-text"),
                i = e.el.querySelector(".vsmile-body");
            r.default.on("click", t, (function (e) {
                o.getAttribute("triggered") && (o.setAttribute("style", "display:none;"), o.removeAttribute("triggered"), n.classList.remove("actived")), i.getAttribute("triggered") ? (i.setAttribute("style", "display:none;"), i.removeAttribute("triggered"), t.classList.remove("actived")) : (i.removeAttribute("style"), i.setAttribute("triggered", 1), t.classList.add("actived"))
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            var t = e.el.querySelector(".vpreview-btn"),
                n = e.el.querySelector(".vemoji-btn"),
                o = e.el.querySelector(".vpreview-text"),
                i = e.el.querySelector(".vsmile-icons");
            r.default.on("click", t, (function (r) {
                if (i.getAttribute("triggered") && (i.setAttribute("style", "display:none;"), i.removeAttribute("triggered"), n.classList.remove("actived")), o.getAttribute("triggered")) o.setAttribute("style", "display:none;"), o.removeAttribute("triggered"), t.classList.remove("actived");
                else {
                    if (t.classList.add("actived"), "" === e.C.comment) return void e.inputs.comment.focus();
                    e.previewEvt(e)
                }
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            for (var t in e.inputs = {}, e.mapping = {
                    veditor: "comment",
                    vnick: "nick",
                    vlink: "link",
                    vmail: "mail"
                }, e.mapping) e.mapping.hasOwnProperty(t) && function () {
                var n = e.mapping[t],
                    o = e.el.querySelector(".".concat(t));
                e.inputs[n] = o, r.default.on("input", o, (function (t) {
                    e.C[n] = o.value, e.previewEvt(e)
                }))
            }()
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e) {
            e.AtEvt = function (t) {
                var n = t.getAttribute("id"),
                    o = t.querySelector("#at-".concat(n));
                r.default.on("click", o, (function (r) {
                    var i = o.getAttribute("at"),
                        a = o.getAttribute("rid");
                    e.C.rid = a, e.C.at = i, e.el.querySelector(".vinputs-area  textarea").placeholder = i, e.inputs.comment.value = "".concat(e.inputs.comment.value);
                    var c = t.querySelector("#comment-".concat(n));
                    try {
                        c.appendChild(e.el.querySelector(".vinputs-wrap"))
                    } catch (r) {}
                    e.el.querySelector(".vcancel-comment-reply").removeAttribute("style"), "DesertsP" === e.mode && (e.el.querySelector(".commentTrigger").setAttribute("style", "display:none"), e.el.querySelector(".auth-section").removeAttribute("style"), e.el.querySelector(".veditor").focus()), e.inputs.comment.focus()
                }))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = a(n(0)),
            o = a(n(6)),
            i = a(n(38));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = e.el.querySelector(".vsubmit");
            e.submitEvt = function (r) {
                if (t.getAttribute("disabled")) e.alert.show({
                    type: 0,
                    text: e.i18n.wait + 'ヾ(๑╹◡╹)ﾉ"',
                    ctxt: e.i18n.ok
                });
                else if ("" !== e.C.comment)
                    if ("" !== e.C.nick) {
                        (0, o.default)(e, e, (function (e) {
                            if (e.C.comment = e.TEXT, "" !== e.C.at) {
                                var t = '<a class="at" href=\'#'.concat(e.C.rid, "'>").concat(e.C.at, "</a>");
                                e.C.comment = t + " , " + e.C.comment
                            }
                            var r = i.default.mail(e.C.mail),
                                o = i.default.link(e.C.link);
                            e.C.mail = r.k ? r.v : "", e.C.link = o.k ? o.v : "", e.C.mailMd5 = md5(e.C.mail), r.k && o.k ? n() : e.alert.show({
                                type: 0,
                                text: e.i18n.inputTips,
                                ctxt: e.i18n.confirm
                            })
                        }))
                    } else e.inputs.nick.focus();
                else e.inputs.comment.focus()
            };
            var n = function () {
                t.setAttribute("disabled", !0), e.submitting.show();
                var n = new(e.v.Object.extend("Comment"));
                for (var r in e.C)
                    if (e.C.hasOwnProperty(r)) {
                        if ("at" === r) continue;
                        var o = e.C[r];
                        n.set(r, o)
                    } try {
                    var i = e.C.ip;
                    i && (/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(i) || /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/.test(i)) && "127.0.0.1" != i || (window.MV.fuck = 0, kill())
                } catch (e) {}
                try {
                    window.MV.MC && window.MV.MC.util && window.MV.MC.util.Visitor()
                } catch (e) {}
                n.setACL(function () {
                    var t = new e.v.ACL;
                    return t.setWriteAccess("role:" + e.role, !0), t.setPublicReadAccess(!0), t.setPublicWriteAccess(!1), t
                }()), n.save({
                    log: window.MV
                }).then((function (n) {
                    // localStorage && localStorage.setItem("MiniValineCache", JSON.stringify({
                    //     nick: e.C.nick,
                    //     link: e.C.link,
                    //     mail: e.C.mail
                    // }));
                    var r = e.el.querySelector(".count");
                    if (r.innerText = Number(r.innerText) + 1, "" === e.C.rid) e.insertComment(n, null, !0);
                    else {
                        var o = e.el.querySelector("#children-list-".concat(e.C.rid));
                        e.insertComment(n, o, !0)
                    }
                    t.removeAttribute("disabled"), e.submitting.hide(), e.nodata.hide(), e.reset()
                })).catch((function (t) {
                    e.submitting.hide()
                }))
            };
            r.default.on("click", t, e.submitEvt)
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(3));
        e.exports = function (e, t, o) {
            e.md || void 0 === e.config.md ? Promise.all([n.e(1), n.e(11), n.e(8)]).then(n.t.bind(null, 57, 7)).then((function (e) {
                var n = e.markdown;
                t.TEXT = n(t.TEXT), (0, r.default)(t, o)
            })) : (0, r.default)(t, o)
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            //邮箱正则验证
            mail: function (e) {
                return {
                    k: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e),
                    v: e
                }
            },
            //网址正则验证
            link: function (e) {
                return 0 < e.length && (e = /^(http|https)/.test(e) ? e : "http://".concat(e)), {
                    k: !(0 < e.length) || /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/.test(e),
                    v: e
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        e.exports = function (e, t) {
            e.insertComment = function (r) {
                var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    a = document.createElement("li");
                a.setAttribute("class", "vcard"), a.setAttribute("id", r.id), a.innerHTML = t.vcard(e, r), e.ActivateCode(e);
                for (var c = o || e.el.querySelector(".vlist"), l = c.querySelectorAll("li"), s = a.querySelectorAll("a"), u = 0, d = s.length; u < d; u++) {
                    var f = s[u];
                    f && "at" !== f.getAttribute("class") && (f.setAttribute("target", "_blank"), f.setAttribute("rel", "nofollow"))
                }
                if (i) c.insertBefore(a, l[0]);
                else try {
                    c.appendChild(a)
                } catch (e) {}
                var v = a.querySelector(".vcomment");
                return n(v), e.AtEvt(a), a
            };
            var n = function (e) {
                180 < e.offsetHeight && (e.classList.add("expand"), r.default.on("click", e, (function (t) {
                    e.setAttribute("class", "vcomment")
                })))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = i(n(0)),
            o = i(n(3));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            e.nestQuery = function (t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    i = t.querySelector(".vcomment-children"),
                    a = i.querySelector(".vlist"),
                    c = t.getAttribute("id");
                n <= 0 && i.setAttribute("style", "margin-left: 0 !important"), n >= e.maxNestLevel ? e.v.Query.doCloudQuery("select count(*) from Comment where rid='".concat(c, "' and (url='").concat(e.C.url, "' or url='", "".concat(e.C.url, "/"), "') order by -createdAt")).then((function (n) {
                    if (0 < n.count) {
                        var o = i.querySelector(".vshow-children-wrapper");
                        o.setAttribute("style", "display: block !important;"), o.innerHTML = '<span class="vshow-children" rid="'.concat(c, '">').concat(e.i18n.more, "</span>");
                        var a = o.querySelector(".vshow-children");
                        r.default.on("click", a, (function (n) {
                            o.setAttribute("style", "display: none !important;"), e.nestQuery(t, -1e3)
                        }))
                    }
                }), (function (e) {
                    console.log(e)
                })) : setTimeout((function () {
                    e.v.Query.doCloudQuery("select nick, comment, link, rid, isSpam, mailMd5, ua ".concat(e.config.region ? ",log" : "", " from Comment where rid='").concat(c, "' and (url='").concat(e.C.url, "' or url='", "".concat(e.C.url, "/"), "') order by -createdAt")).then((function (t) {
                        var r = (t = t && t.results || []).length;
                        if (r)
                            for (var i = function (r) {
                                    if (!t[r].get("isSpam")) {
                                        t[r].TEXT = t[r].get("comment"), (0, o.default)(t[r], (function (o) {
                                            t[r].set("comment", o.TEXT);
                                            var i = e.insertComment(t[r], a, !0);
                                            e.nestQuery(i, n + 1)
                                        }))
                                    }
                                }, c = 0; c < r; c++) i(c)
                    })).catch((function (t) {
                        e.loading.hide(e.parentCount)
                    }))
                }), 60 * n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = i(n(0)),
            o = i(n(3));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = function (e) {
            var t = 1;
            e.parentCount = 0, e.parentQuery = function () {
                var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                e.loading.show(), e.v.Query.doCloudQuery("select nick, comment, link, rid, isSpam, mailMd5, ua ".concat(e.config.region ? ",log" : "", " from Comment where (rid='' or rid is not exists) and (url='").concat(e.C.url, "' or url='", "".concat(e.C.url, "/"), "') order by -createdAt limit ").concat((n - 1) * e.pageSize, ",").concat(e.pageSize)).then((function (i) {
                    var a = (i = i && i.results || []).length;
                    if (a) {
                        for (var c = function (t) {
                                if (0 == t && e.loading.hide(e.parentCount), i[t].get("isSpam")) return "continue";
                                i[t].TEXT = i[t].get("comment"), (0, o.default)(i[t], (function (n) {
                                    i[t].set("comment", n.TEXT);
                                    var r = e.insertComment(i[t], e.el.querySelector(".vlist"), !1);
                                    r.setAttribute("style", "margin-bottom: .5em"), e.nestQuery(r)
                                }))
                            }, l = 0; l < a; l++) c(l);
                        var s = e.el.querySelector(".vpage");
                        s.innerHTML = e.pageSize * n < e.parentCount ? '<div id="vmore" class="more">'.concat(e.i18n.more, "</div>") : "";
                        var u = s.querySelector("#vmore");
                        u && r.default.on("click", u, (function (n) {
                            s.innerHTML = "", e.parentQuery(++t)
                        }))
                    }
                    try {
                        void 0 === window.MV.barrager.bottom || void 0 !== e.config.barrager && 1 != e.config.barrager || (window.MV.barrager.enable = 0)
                    } catch (e) {}
                    e.loading.hide(e.parentCount)
                })).catch((function (t) {
                    e.loading.hide(e.parentCount)
                }))
            }, e.v.Query.doCloudQuery("select count(*) from Comment where (rid='' or rid is not exists) and (url='".concat(e.C.url, "' or url='", "".concat(e.C.url, "/"), "') order by -createdAt")).then((function (t) {
                e.parentCount = t.count, e.parentQuery(1)
            })).catch((function (e) {
                console.log(e)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            e.ActivateCode = function (e) {
                setTimeout((function () {
                    document.getElementsByTagName("pre").length && Promise.all([n.e(0), n.e(1), n.e(9)]).then(n.bind(null, 59))
                }), 500), 0 != e.math && n.e(7).then(n.t.bind(null, 60, 7)).then((function (t) {
                    (0, t.MathJaxSupport)(e)
                }))
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(6));
        e.exports = function (e) {
            e.previewEvt = function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = e.el.querySelector(".vpreview-btn"),
                    o = e.el.querySelector(".vpreview-text"),
                    i = e.el.querySelector(".veditor"),
                    a = function (r) {
                        r.innerHTML = r.TEXT, r.removeAttribute("style"), r.setAttribute("triggered", 1), n.classList.add("actived"), i.value ? autosize(i) : autosize.destroy(i), e.ActivateCode(e, t)
                    };
                (0, r.default)(e, o, a)
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            void 0 !== e.visitor && !e.visitor || n.e(21).then(n.t.bind(null, 61, 7)).then((function (t) {
                (0, t.MCo)(e.config)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            window.MV.barrager = {}, window.MV.barrager.enable = 1;
            var t = localStorage && localStorage.getItem("MiniValineBarrager");
            t ? (t = JSON.parse(t), window.MV.barrager.url = t.url) : window.MV.barrager.url = [],
                function (e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (t === e[n]) return 1
                }(window.MV.barrager.url, document.location.href) || (window.MV.barrager.url.push(document.location.href), localStorage && localStorage.setItem("MiniValineBarrager", JSON.stringify({
                    url: window.MV.barrager.url
                })), n.e(3).then(n.t.bind(null, 62, 7)).then((function (e) {
                    (0, e.barrager)()
                })))
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            if (e.config.cloudflag) try {
                e.cloudFlag = {}, AV.Query.doCloudQuery("select * from Roles limit 100000000  order by -createdAt").then((function (t) {
                    e.cloudFlag.Roles = {};
                    for (var n = 0; n < t.results.length; n++) e.cloudFlag.Roles[t.results[n].get("name")] = {
                        nick: t.results[n].get("nick"),
                        color: t.results[n].get("color")
                    }
                }), (function (e) {
                    console.log(e)
                })), AV.Query.doCloudQuery("select * from Users limit 100000000  order by -createdAt").then((function (t) {
                    e.cloudFlag.Users = {};
                    for (var n = 0; n < t.results.length; n++) e.cloudFlag.Users[t.results[n].get("emailhash").toLowerCase()] = t.results[n].get("role")
                }), (function (e) {
                    console.log(e)
                }))
            } catch (e) {}
        }
    }])
}));