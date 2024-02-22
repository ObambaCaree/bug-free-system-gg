"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[673], {
    54036: function(n, e, i) {
        i.d(e, {
            Bd: function() {
                return l
            },
            Ry: function() {
                return s
            },
            yq: function() {
                return u
            },
            cd: function() {
                return v
            },
            JD: function() {
                return f
            },
            DN: function() {
                return x
            }
        });
        var t = i(50912)
          , o = i(89598)
          , r = i(94381)
          , d = function() {
            return (d = Object.assign || function(n) {
                for (var e, i = 1, t = arguments.length; i < t; i++)
                    for (var o in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }
          , a = 0;
        function l() {
            a += 1
        }
        function s() {
            a -= 1
        }
        function p() {
            return a
        }
        var c = !1;
        function u() {
            c = !0
        }
        var g = !1;
        function v() {
            g = !0
        }
        function h() {
            var n, e, i, o, r, d, a, l, s, p, u, v, h, f, w, x, m, y;
            try {
                var b = t.Z.getState().ads
                  , A = b.imaError
                  , Z = b.adBlocker;
                return {
                    isVideoTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.requestInstreamPlayer),
                    isAdGPTCallbacksRegistered: c,
                    isTudeCmdArray: void 0 !== (null === (i = null === (e = null === window || void 0 === window ? void 0 : window.tude) || void 0 === e ? void 0 : e.cmd) || void 0 === i ? void 0 : i.length),
                    isGptCmdArray: void 0 !== (null === (r = null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.cmd) || void 0 === r ? void 0 : r.length),
                    isGptCmdArray2: Array.isArray(null === (d = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === d ? void 0 : d.cmd),
                    isGptPubadsReady: null !== (l = null === (a = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === a ? void 0 : a.pubadsReady) && void 0 !== l && l,
                    isGptApiReady: null !== (p = null === (s = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === s ? void 0 : s.apiReady) && void 0 !== p && p,
                    isGptLoaded2: null !== (v = null === (u = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === u ? void 0 : u._loaded_) && void 0 !== v && v,
                    gfcAdBlockerStatus: null !== (w = (null === (h = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === h ? void 0 : h.getAdBlockerStatus) && (null === (f = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === f ? void 0 : f.getAdBlockerStatus())) && void 0 !== w ? w : -1,
                    gfcAllowAdsStatus: null !== (y = (null === (x = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === x ? void 0 : x.getAllowAdsStatus) && (null === (m = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === m ? void 0 : m.getAllowAdsStatus())) && void 0 !== y ? y : -1,
                    isAdBlockerDetectedByGoogle: g,
                    imaError: A,
                    adBlocker: Z
                }
            } catch (P) {
                return {}
            }
        }
        function f(n, e, i) {
            var a, l, s, c, u, g, v;
            void 0 === i && (i = "");
            try {
                var f = t.Z.getState().play
                  , w = f.videoRef
                  , x = f.isAndroidConnected
                  , m = window.devicePixelRatio
                  , y = (null === (a = null === w || void 0 === w ? void 0 : w.current) || void 0 === a ? void 0 : a.clientHeight) || 0
                  , b = (null === (l = null === w || void 0 === w ? void 0 : w.current) || void 0 === l ? void 0 : l.clientWidth) || 0
                  , A = 0
                  , Z = 0
                  , P = "Midroll"
                  , I = "Display";
                n === r.V || n === r.av ? (A = 728,
                Z = 90) : n === r.us ? (A = 160,
                Z = 600) : "div-gpt-ad-display" === n ? (A = 320,
                Z = 50) : "div-gpt-ad-rewarded" === n ? (A = 320,
                Z = 250,
                P = "Ingame") : n === r.L_ ? (A = 336,
                Z = 280) : n === r.VV && (A = 336,
                Z = 280,
                I = "Video"),
                (0,
                o.L9)("AdRequestedNg".concat(i), d({
                    adContext: P,
                    adType: I,
                    adWidth: A,
                    adHeight: Z,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: y,
                    androidHeight: b,
                    pixelRatio: m,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (s = null === window || void 0 === window ? void 0 : window.tude) || void 0 === s ? void 0 : s.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (c = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === c ? void 0 : c.pubads),
                    isAndroidConnected: x,
                    gdprApplies: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("gdprApplies")),
                    userConsent: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("userConsent")),
                    displayAdsQueueSize: p(),
                    slotId: e
                }, h()))
            } catch (k) {
                (0,
                o.L9)("AdRequestedNg".concat(i), d({
                    adContext: "exception",
                    adType: "Display",
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (u = null === window || void 0 === window ? void 0 : window.tude) || void 0 === u ? void 0 : u.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (g = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === g ? void 0 : g.pubads),
                    gdprApplies: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("gdprApplies")),
                    userConsent: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("userConsent")),
                    displayAdsQueueSize: p(),
                    exception: (null === (v = k) || void 0 === v ? void 0 : v.message) || "unknown",
                    slotId: e
                }, h()))
            }
        }
        function w(n) {
            var e, i = n.detail || {}, t = i.event, r = void 0 === t ? "unknown" : t, a = i.data;
            (0,
            o.L9)("TudeCustomEvent", d({
                tudeEventName: r,
                tudeEventPayload: a,
                isTabVisible: "visible" === document.visibilityState,
                isGptLoaded: "undefined" !== typeof (null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
            }, h()))
        }
        function x() {
            document.addEventListener("tudeCustomEvent", w)
        }
    },
    90496: function(n, e, i) {
        i.d(e, {
            Z: function() {
                return Z
            }
        });
        var t, o, r = i(11720), d = i(10020), a = i(17174), l = i(49555), s = i(25617), p = i(94381), c = i(78294), u = i(77691), g = i(45628), v = i(82132), h = i(50445), f = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, w = h.ZP.div(t || (t = f(["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n    pointer-events: all;\n    max-height: calc(100vh - 80px);\n    height: 600px;\n    width: 160px;\n    overflow-y: scroll;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.skyScrapperSecond {\n        right: ", ";\n        left: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    &.upliftAd{\n      z-index: 9;\n    }\n"], ["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n    pointer-events: all;\n    max-height: calc(100vh - 80px);\n    height: 600px;\n    width: 160px;\n    overflow-y: scroll;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.skyScrapperSecond {\n        right: ", ";\n        left: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    &.upliftAd{\n      z-index: 9;\n    }\n"])), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        ), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        )), x = h.ZP.div(o || (o = f(["\n    position: absolute;\n    left: 50%;\n    top: ", ";\n    transform: translateX(-50%);\n    pointer-events: all;\n    max-width: '100vw';\n    ", ";\n    height: 90px;\n    width: 970px;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    &.leaderBoardSecond {\n        bottom: ", ";\n        top: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"], ["\n    position: absolute;\n    left: 50%;\n    top: ", ";\n    transform: translateX(-50%);\n    pointer-events: all;\n    max-width: '100vw';\n    ", ";\n    height: 90px;\n    width: 970px;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    &.leaderBoardSecond {\n        bottom: ", ";\n        top: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"])), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        ), (function(n) {
            var e, i, t = n.mobile, o = n.theme;
            return t ? null === (e = o.colors) || void 0 === e ? void 0 : e.transparent : null === (i = o.colors) || void 0 === i ? void 0 : i.base800
        }
        ), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        )), m = i(54036), y = i(97997), b = function() {
            return (b = Object.assign || function(n) {
                for (var e, i = 1, t = arguments.length; i < t; i++)
                    for (var o in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, A = function(n) {
            var e = n.leftSkyScrapperContainer
              , i = n.rightSkyScrapperContainer
              , t = (0,
            s.I0)()
              , o = (0,
            r.useRef)(null)
              , h = (0,
            r.useRef)(null)
              , f = (0,
            r.useRef)(null)
              , A = (0,
            r.useRef)(null)
              , Z = (0,
            s.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , P = (0,
            s.v9)((function(n) {
                return n.play.videoContainerRef
            }
            ))
              , I = (0,
            s.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , k = (0,
            s.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , S = (0,
            r.useState)("")
              , D = S[0]
              , R = S[1]
              , E = (0,
            r.useContext)(d.x)
              , H = (0,
            s.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , T = (0,
            s.v9)((function(n) {
                return n.play.showIAPPopup
            }
            ))
              , L = (0,
            r.useMemo)((function() {
                return (0,
                u.ri)(H)
            }
            ), [H])
              , C = (0,
            r.useMemo)((function() {
                return k && (0,
                u.Dx)()
            }
            ), [k]) || L
              , W = (0,
            r.useCallback)((function() {
                var n, e, i, t = (null === P || void 0 === P ? void 0 : P.current) ? null === P || void 0 === P ? void 0 : P.current.offsetHeight : 0, o = (null === I || void 0 === I ? void 0 : I.current) ? null === I || void 0 === I ? void 0 : I.current.offsetHeight : 0, r = (null === P || void 0 === P ? void 0 : P.current) ? null === P || void 0 === P ? void 0 : P.current.offsetWidth : 0, d = (null === I || void 0 === I ? void 0 : I.current) ? null === I || void 0 === I ? void 0 : I.current.offsetWidth : 0;
                return (0,
                c.DJ)() ? n = (0,
                u.Em)() || (0,
                u.zc)() ? p.V : p.us : (0,
                u.Em)() || (0,
                u.zc)() ? (Z === g.cj.portrait ? (e = t - o,
                i = r - d) : (e = t - d,
                i = r - o),
                n = e >= 190 ? p.V : i >= 330 || i > e ? p.us : p.V) : n = p.us,
                n
            }
            ), [Z, I, P]);
            (0,
            r.useEffect)((function() {
                t((0,
                a.dI)(o, h, f, A)),
                setTimeout((function() {
                    var n = W();
                    t((0,
                    a.RT)(n)),
                    R(n),
                    (0,
                    l.sZ)(),
                    (0,
                    l.Ul)()
                }
                ), 1e3)
            }
            ), [t, W]),
            (0,
            r.useEffect)((function() {
                if (!C) {
                    var n = (0,
                    v.dl)(E);
                    D === p.us ? ((0,
                    m.JD)(p.us, "div-gpt-ad-skyScrapper-1"),
                    (0,
                    m.JD)(p.us, "div-gpt-ad-skyScrapper-2"),
                    window.tude.cmd.push((function() {
                        (0,
                        m.JD)(p.us, "div-gpt-ad-skyScrapper-1", "2"),
                        (0,
                        m.JD)(p.us, "div-gpt-ad-skyScrapper-2", "2"),
                        window.tude.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-skyScrapper-1",
                            baseDivId: "pb-slot-incontent-large",
                            targeting: b(b({}, n), {
                                ads_loc: "display-ss-left"
                            })
                        }, {
                            divId: "div-gpt-ad-skyScrapper-2",
                            baseDivId: "pb-slot-incontent-large",
                            targeting: b(b({}, n), {
                                ads_loc: "display-ss-right"
                            })
                        }])
                    }
                    ))) : D === p.V && ((0,
                    m.JD)(p.V, "div-gpt-ad-leaderBoard-1"),
                    (0,
                    m.JD)(p.V, "div-gpt-ad-leaderBoard-2"),
                    window.tude.cmd.push((function() {
                        (0,
                        m.JD)(p.V, "div-gpt-ad-leaderBoard-1", "2"),
                        (0,
                        m.JD)(p.V, "div-gpt-ad-leaderBoard-2", "2"),
                        window.tude.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-leaderBoard-1",
                            baseDivId: "pb-slot-incontent-small",
                            targeting: b(b({}, n), {
                                ads_loc: "display-lb-top"
                            })
                        }, {
                            divId: "div-gpt-ad-leaderBoard-2",
                            baseDivId: "pb-slot-incontent-small",
                            targeting: b(b({}, n), {
                                ads_loc: "display-lb-bottom"
                            })
                        }])
                    }
                    )))
                }
            }
            ), [E, D, C]);
            var O = function() {
                return (0,
                y.tZ)(w, {
                    isHtmlGame: (0,
                    c.DJ)(),
                    ref: o,
                    className: "skyScrapperFirst ".concat(T ? "upliftAd" : ""),
                    id: "skyScrapper-1",
                    children: !C && (0,
                    y.tZ)("div", {
                        id: "div-gpt-ad-skyScrapper-1"
                    })
                })
            }
              , B = function() {
                return (0,
                y.tZ)(w, {
                    isHtmlGame: (0,
                    c.DJ)(),
                    ref: h,
                    className: "skyScrapperSecond ".concat(T ? "upliftAd" : ""),
                    id: "skyScrapper-2",
                    children: !C && (0,
                    y.tZ)("div", {
                        id: "div-gpt-ad-skyScrapper-2"
                    })
                })
            };
            return (0,
            y.BX)(y.HY, {
                children: [D === p.us && (0,
                y.BX)(y.HY, {
                    children: [e ? (0,
                    r.createPortal)(O(), e) : O(), i ? (0,
                    r.createPortal)(B(), i) : B()]
                }), D === p.V && (0,
                y.BX)(y.HY, {
                    children: [(0,
                    y.tZ)(x, {
                        isHtmlGame: (0,
                        c.DJ)(),
                        mobile: (0,
                        u.tq)() && Z !== g.cj.portrait,
                        ref: f,
                        className: "leaderBoardFirst",
                        id: "leaderBoard-1",
                        children: !C && (0,
                        y.tZ)("div", {
                            id: "div-gpt-ad-leaderBoard-1"
                        })
                    }), (0,
                    y.tZ)(x, {
                        isHtmlGame: (0,
                        c.DJ)(),
                        mobile: (0,
                        u.tq)() && Z !== g.cj.portrait,
                        ref: A,
                        className: "leaderBoardSecond",
                        id: "leaderBoard-2",
                        children: !C && (0,
                        y.tZ)("div", {
                            id: "div-gpt-ad-leaderBoard-2"
                        })
                    })]
                })]
            })
        }, Z = (0,
        r.memo)(A)
    },
    46646: function(n, e, i) {
        var t = i(25617)
          , o = i(78294)
          , r = i(82132)
          , d = i(64857)
          , a = i(4298)
          , l = i(97997);
        e.Z = function(n) {
            var e = n.isNowGGURL
              , i = (0,
            t.I0)()
              , s = function() {
                o.ZP.prebidFailed = !0,
                (0,
                r.zr)("aditudeScriptLoadError", !1),
                i({
                    type: d.Z.UPDATE_IMAERROR,
                    payload: {
                        imaError: !0,
                        adsEnded: !0
                    }
                })
            }
              , p = function() {
                i({
                    type: d.Z.UPDATE_IMAERROR,
                    payload: {
                        imaError: !1
                    }
                })
            };
            return e ? (0,
            l.tZ)(a.default, {
                src: "https://dn0qt3r0xannq.cloudfront.net/nowgg-IZQznjkQaj/nowgg-default/prebid-load.js",
                onLoad: p,
                onError: s
            }) : (0,
            l.tZ)(a.default, {
                src: "https://dn0qt3r0xannq.cloudfront.net/nowgg-IZQznjkQaj/longtail/prebid-load.js",
                onLoad: p,
                onError: s
            })
        }
    },
    85437: function(n, e, i) {
        i.d(e, {
            Tl: function() {
                return p
            },
            md: function() {
                return u
            },
            Z2: function() {
                return g
            },
            V0: function() {
                return v
            },
            tM: function() {
                return h
            }
        });
        var t = i(77691)
          , o = i(78294)
          , r = i(17174)
          , d = i(50912)
          , a = i(11752)
          , l = i(34155)
          , s = function() {
            return (s = Object.assign || function(n) {
                for (var e, i = 1, t = arguments.length; i < t; i++)
                    for (var o in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        };
        function p() {
            var n = (0,
            a.default)().publicRuntimeConfig
              , e = l.env.NEXT_PUBLIC_ENVIRONMENT || n.NEXT_PUBLIC_ENVIRONMENT || "development"
              , i = !!(e && e.indexOf("staging") > -1)
              , t = !!(e && e.indexOf("qa") > -1)
              , o = !!(e && e.indexOf("dev") > -1)
              , r = "now.gg" === window.location.hostname
              , d = !!(e && e.indexOf("engg") > -1)
              , s = "staging-demo.abctest.in" === window.location.hostname
              , p = sessionStorage.getItem("isEmbeddedFrame");
            return (r || i || t || o || d) && !s && !p
        }
        function c() {
            var n, e = ((null === (n = o.ZP.appInfo) || void 0 === n ? void 0 : n.playFeFeatures) || {}).ads || {}, i = e.mobile, r = e.desktop;
            return !(0,
            t.tq)() || (0,
            t.Em)() || (0,
            t.zc)() ? s(s({}, r), {
                embeddedFullScreenAdsEnabled: o.ZP.embeddedFullScreenAdsEnabled
            }) : s(s({}, i), {
                embeddedFullScreenAdsEnabled: o.ZP.embeddedFullScreenAdsEnabled
            })
        }
        function u() {
            var n = c()
              , e = n.enableDisplayAds
              , i = n.enableMidrollAds
              , t = n.enablePrerollAds
              , o = n.embeddedFullScreenAdsEnabled;
            return e || i || t || o
        }
        function g() {
            var n = c()
              , e = n.enableDisplayAds
              , i = n.enableMidrollAds;
            d.Z.dispatch((0,
            r.UZ)(i, e))
        }
        function v(n, e, i, t) {
            o.ZP.appInfo.playFeFeatures.ads = {
                desktop: {
                    enablePrerollAds: n,
                    enableDisplayAds: e,
                    enableMidrollAds: i
                },
                mobile: {
                    enablePrerollAds: n,
                    enableDisplayAds: e,
                    enableMidrollAds: i
                }
            },
            o.ZP.embeddedFullScreenAdsEnabled = t
        }
        function h() {
            var n = sessionStorage.getItem("isEmbeddedFrame");
            if (n) {
                o.ZP.appInfo.iapLoginPromptEnabled = !1;
                var e = (0,
                t.Ed)(n)
                  , i = !1
                  , r = !1
                  , d = !1
                  , a = !1;
                e && (i = -1 !== e.indexOf("b"),
                r = -1 !== e.indexOf("a"),
                d = -1 !== e.indexOf("c"),
                a = -1 !== e.indexOf("d")),
                v(r, i, d, a)
            }
            ((0,
            t.F8)() || (0,
            t.T2)()) && v(!1, !1, !1, !1)
        }
    },
    15187: function(n, e, i) {
        i.d(e, {
            zt: function() {
                return R
            },
            ey: function() {
                return E
            }
        });
        var t = i(5152)
          , o = i(72742)
          , r = i(94564)
          , d = i(94381)
          , a = i(66971)
          , l = i(50912)
          , s = i(78294)
          , p = i(11720)
          , c = i(25617)
          , u = i(89598)
          , g = i(26544)
          , v = i(77691)
          , h = i(26793)
          , f = i(45628)
          , w = i(39426)
          , x = i(11163)
          , m = i(78603)
          , y = i(39435)
          , b = i(79354)
          , A = i(88557)
          , Z = i(42847)
          , P = i(97997)
          , I = function() {
            return (I = Object.assign || function(n) {
                for (var e, i = 1, t = arguments.length; i < t; i++)
                    for (var o in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }
          , k = function(n, e, i, t) {
            return new (i || (i = Promise))((function(o, r) {
                function d(n) {
                    try {
                        l(t.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(n) {
                    try {
                        l(t.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof i ? e : new i((function(n) {
                        n(e)
                    }
                    ))).then(d, a)
                }
                l((t = t.apply(n, e || [])).next())
            }
            ))
        }
          , S = function(n, e) {
            var i, t, o, r, d = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(r) {
                return function(a) {
                    return function(r) {
                        if (i)
                            throw new TypeError("Generator is already executing.");
                        for (; d; )
                            try {
                                if (i = 1,
                                t && (o = 2 & r[0] ? t.return : r[0] ? t.throw || ((o = t.return) && o.call(t),
                                0) : t.next) && !(o = o.call(t, r[1])).done)
                                    return o;
                                switch (t = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return d.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    d.label++,
                                    t = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = d.ops.pop(),
                                    d.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = d.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        d = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        d.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && d.label < o[1]) {
                                        d.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && d.label < o[2]) {
                                        d.label = o[2],
                                        d.ops.push(r);
                                        break
                                    }
                                    o[2] && d.ops.pop(),
                                    d.trys.pop();
                                    continue
                                }
                                r = e.call(n, d)
                            } catch (a) {
                                r = [6, a],
                                t = 0
                            } finally {
                                i = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, a])
                }
            }
        }
          , D = function(n, e, i) {
            if (i || 2 === arguments.length)
                for (var t, o = 0, r = e.length; o < r; o++)
                    !t && o in e || (t || (t = Array.prototype.slice.call(e, 0, o)),
                    t[o] = e[o]);
            return n.concat(t || Array.prototype.slice.call(e))
        }
          , R = ((0,
        t.default)((function() {
            return Promise.resolve().then(i.bind(i, 4532))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [4532]
                },
                modules: ["../src/components/console/header/index.tsx -> @components/robux-reward"]
            }
        }),
        function(n) {
            var e, i, t = n.game, o = n.index, r = (0,
            c.v9)((function(n) {
                return n.play.isRecording
            }
            )), l = (0,
            c.I0)(), s = "TopBarRecommendation";
            return (0,
            P.tZ)(y.r9, {
                id: null === t || void 0 === t ? void 0 : t.appName,
                isVideoComplianceLayoutEnabled: (0,
                v.rI)(),
                children: (0,
                P.tZ)("span", {
                    onClick: function() {
                        var n = (0,
                        A.wh)(null === t || void 0 === t ? void 0 : t.playUrl, s)
                          , e = {
                            element: s,
                            action: "Clicked",
                            packageName: t.packageName
                        };
                        "number" === typeof o && (e.index = o + 1),
                        (0,
                        u.L9)(d.S5, e),
                        r ? l({
                            type: a.Z.UPDATE_IS_RECORDING,
                            payload: {
                                showRecordingModalBeforeExit: !0,
                                showRecordingModalBeforeExitSource: "gameTile",
                                urlToOpenAfterRecordModalExit: n
                            }
                        }) : window.open(n, "_self")
                    },
                    "data-title": null === t || void 0 === t ? void 0 : t.appName,
                    id: null === t || void 0 === t ? void 0 : t.appName,
                    children: (null === (e = null === t || void 0 === t ? void 0 : t.media) || void 0 === e ? void 0 : e.icon) && (0,
                    P.tZ)(Z.oy, {
                        src: null === (i = null === t || void 0 === t ? void 0 : t.media) || void 0 === i ? void 0 : i.icon,
                        alt: null === t || void 0 === t ? void 0 : t.appName,
                        quality: 25,
                        sizes: "(max-width: 2000px) 64px, 64px"
                    })
                })
            })
        }
        )
          , E = function(n) {
            var e, i, t, u = n.componentStyle, Z = n.ssrGames, E = n.id, H = n.isAppPage, T = n.ssrOrigin, L = n.isAllGamesHomePageRedirect, C = n.isTestDriveDisable, W = n.loginResolved, O = (0,
            p.useState)(null), B = O[0], z = O[1], M = (0,
            c.v9)((function(n) {
                return n.play.showAllGamesOverlay
            }
            )), N = (0,
            c.v9)((function(n) {
                return n.play.showExploreGamesOverlay
            }
            )), _ = (0,
            c.v9)((function(n) {
                return n.play.isFullscreen
            }
            )), j = (0,
            p.useRef)(null), F = (0,
            c.I0)(), V = (0,
            c.v9)((function(n) {
                return n.ads.inGameAd
            }
            )), G = l.Z.getState().play.consoleFooterRef, U = ((0,
            x.useRouter)(),
            (0,
            p.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            })), X = U[0], q = U[1], J = (0,
            c.v9)((function(n) {
                return n.play.orientation
            }
            )), Q = ((0,
            c.v9)((function(n) {
                return n.play.isAdBlockerEnabled
            }
            )),
            (0,
            h.$)().t), Y = (0,
            p.useState)(""), K = Y[0], $ = Y[1], nn = (0,
            c.v9)((function(n) {
                return n.gamification.gamificationActionsRef
            }
            ));
            (0,
            p.useEffect)((function() {
                $(sessionStorage.getItem("isEmbeddedFrame"))
            }
            ), []);
            var en = (0,
            p.useMemo)((function() {
                var n, e;
                return !C && (J !== f.cj.portrait && (null === (e = null === (n = null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.appInfo) || void 0 === n ? void 0 : n.playFeFeatures) || void 0 === e ? void 0 : e.enableTestDriveUi))
            }
            ), [C, J])
              , tn = function() {
                var n = l.Z.getState().play.videoRef;
                setTimeout((function() {
                    if (n && n.current) {
                        var e = n.current;
                        q({
                            top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().bottom,
                            width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width,
                            left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                            right: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().right,
                            height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                        })
                    }
                }
                ))
            };
            (0,
            p.useEffect)((function() {
                return (0,
                s.DJ)() || (tn(),
                window.addEventListener("resizeDone", tn)),
                en || k(void 0, void 0, void 0, (function() {
                    var n, e, i, t, o, r, d, a, l, p, c, u, g, v, h;
                    return S(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            return n = {},
                            Z ? (n = Z,
                            [3, 3]) : [3, 1];
                        case 1:
                            return [4, (0,
                            s.qt)()];
                        case 2:
                            n = null === (v = f.sent()) || void 0 === v ? void 0 : v.gamesList,
                            f.label = 3;
                        case 3:
                            return e = n.topApps,
                            i = void 0 === e ? [] : e,
                            t = n.topBarApps,
                            o = void 0 === t ? [] : t,
                            r = n.remainingApps,
                            d = void 0 === r ? [] : r,
                            a = n.otherApps,
                            l = void 0 === a ? [] : a,
                            p = D(D(D(D([], i, !0), o, !0), d, !0), l, !0),
                            c = null === (h = s.ZP.features) || void 0 === h ? void 0 : h.promotedGame,
                            "2534" === s.ZP.appInfo.appId && c && c.length && (u = c[0],
                            p.findIndex((function(n) {
                                return n.appId === u.appId
                            }
                            )) > -1 && o.unshift(u)),
                            g = o.slice(0, 8),
                            z(g),
                            [2]
                        }
                    }
                    ))
                }
                )),
                F({
                    type: a.Z.SET_REF,
                    payload: {
                        consoleHeaderRef: j
                    }
                }),
                function() {
                    (0,
                    s.DJ)() || window.removeEventListener("resizeDone", tn)
                }
            }
            ), []);
            return (0,
            P.BX)(y.h4, {
                id: E,
                ref: j,
                className: M || N ? "g-overlay" : "",
                style: I({
                    opacity: _ ? 0 : 1,
                    visibility: _ ? "hidden" : "visible",
                    display: _ ? "none" : "flex",
                    position: (0,
                    s.DJ)() || V !== d.V || J === f.cj.portrait ? "relative" : "absolute",
                    top: (0,
                    s.DJ)() || V !== d.V || J === f.cj.portrait ? "" : Math.max(X.top - X.height - ((null === (e = j.current) || void 0 === e ? void 0 : e.clientHeight) || 0), 90),
                    width: (0,
                    s.DJ)() || V !== d.V || J === f.cj.portrait ? "" : ((null === (i = null === G || void 0 === G ? void 0 : G.current) || void 0 === i ? void 0 : i.clientWidth) || 0) + X.width,
                    left: (0,
                    s.DJ)() || V !== d.V || J === f.cj.portrait ? "" : X.left,
                    paddingRight: "".concat(((null === (t = null === nn || void 0 === nn ? void 0 : nn.current) || void 0 === t ? void 0 : t.getBoundingClientRect().width) || 0) + 32, "px")
                }, u),
                children: [(0,
                P.tZ)(o.Z, {
                    isAppPage: H,
                    ssrOrigin: T,
                    hasTagline: !1
                }), en ? (0,
                P.tZ)(y.$y, {
                    children: !K && (0,
                    P.tZ)(w.SupportAction, {})
                }) : (0,
                P.BX)(P.HY, {
                    children: [(0,
                    P.BX)(y.Rj, {
                        style: {
                            background: N ? g.qm.colors.ascent : ""
                        },
                        id: "ng-search-games",
                        onClick: function() {
                            var n = !N;
                            F({
                                type: a.Z.MODAL_STATUS,
                                payload: {
                                    showExploreGamesOverlay: n,
                                    showAllGamesOverlay: !n && void 0
                                }
                            })
                        },
                        children: [(0,
                        P.tZ)(b.ol, {}), (0,
                        P.tZ)(r.xv, {
                            children: Q("searchGames")
                        })]
                    }), (0,
                    P.tZ)(y.Nc, {
                        id: "ng-topbar-games-list",
                        children: B && B.map((function(n, e) {
                            return (0,
                            P.tZ)(R, {
                                index: e,
                                game: n
                            })
                        }
                        ))
                    }), (0,
                    P.tZ)(y.WJ, {
                        onClick: function() {
                            if (L)
                                window.location.href = (0,
                                A.wh)("https://now.gg");
                            else {
                                var n = !M;
                                F({
                                    type: a.Z.MODAL_STATUS,
                                    payload: {
                                        showAllGamesOverlay: n,
                                        showExploreGamesOverlay: !n && void 0
                                    }
                                })
                            }
                        },
                        id: "ng-all-games",
                        className: M ? "active" : "",
                        children: (0,
                        P.tZ)(b.pL, {
                            color: "white50"
                        })
                    }), (0,
                    v.nI)() && (H ? (0,
                    P.BX)(m.r, {
                        loading: null,
                        persistor: l.D,
                        children: [(0,
                        P.tZ)(y.Kd, {}), (0,
                        p.createPortal)((0,
                        P.tZ)(w.ProfilesAction, {
                            loginResolved: W
                        }), document.body)]
                    }) : !K && (0,
                    P.BX)(P.HY, {
                        children: [(0,
                        P.tZ)(y.Kd, {}), (0,
                        p.createPortal)((0,
                        P.tZ)(w.ProfilesAction, {
                            loginResolved: W
                        }), document.body)]
                    }))]
                })]
            })
        }
    },
    39435: function(n, e, i) {
        i.d(e, {
            h4: function() {
                return m
            },
            Rj: function() {
                return y
            },
            WJ: function() {
                return b
            },
            Nc: function() {
                return A
            },
            r9: function() {
                return Z
            },
            $y: function() {
                return P
            },
            Kd: function() {
                return I
            }
        });
        var t, o, r, d, a, l, s, p, c, u, g, v = i(50445), h = i(99719), f = i(93224), w = i(9912), x = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, m = v.ZP.header(t || (t = x(["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  padding: 0 calc(var(--vw, 1vw));\n  z-index: 3;\n  position: relative;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(24px);\n  left: 0;\n  min-height: 64px;\n  right: 0;\n  &.g-overlay:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px;\n    background: ", ";\n  }\n"], ["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  padding: 0 calc(var(--vw, 1vw));\n  z-index: 3;\n  position: relative;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(24px);\n  left: 0;\n  min-height: 64px;\n  right: 0;\n  &.g-overlay:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px;\n    background: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        )), y = v.ZP.div(o || (o = x(["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  margin-right: auto;\n  margin-left: 1vw;\n\n  &:hover {\n    background: ", ";\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"], ["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  margin-right: auto;\n  margin-left: 1vw;\n\n  &:hover {\n    background: ", ";\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"])), (function(n) {
            return n.theme.colors.white10
        }
        )), b = v.ZP.div(r || (r = x(["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  border-radius: 8px;\n  border: 1px solid ", ";;\n  width: calc(var(--vw,1vw) * 3);\n  height: calc(var(--vw,1vw) * 3);\n  margin: calc(var(--vw, 1vw) * 0.4) 0;\n  align-self: center;\n\n  svg {\n    scale: 2.13;\n  }\n\n  &.active {\n    background: ", ";;\n\n    svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  &:hover {\n    background: ", ";;\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"], ["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  border-radius: 8px;\n  border: 1px solid ", ";;\n  width: calc(var(--vw,1vw) * 3);\n  height: calc(var(--vw,1vw) * 3);\n  margin: calc(var(--vw, 1vw) * 0.4) 0;\n  align-self: center;\n\n  svg {\n    scale: 2.13;\n  }\n\n  &.active {\n    background: ", ";;\n\n    svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  &:hover {\n    background: ", ";;\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        )), A = v.ZP.ul(d || (d = x(["\n  list-style: unstyled;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  gap: calc(var(--vw, 1vw) * 0.8);\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1);\n"], ["\n  list-style: unstyled;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  gap: calc(var(--vw, 1vw) * 0.8);\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1);\n"]))), Z = v.ZP.li(c || (c = x(["\n  display: flex;\n  align-items: center;\n\n  span {\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    width: calc(var(--vw, 1vw) * 3);\n    height: calc(var(--vw, 1vw) * 3);\n    flex: 0 0 calc(var(--vw, 1vw) * 3);\n    border-radius: 4px;\n    background-color: rgba(11, 2, 35, 0.5);\n\n    &:before {\n      opacity: 0;\n      pointer-events: none;\n      content: attr(data-title);\n      position: absolute;\n      top: 110%;\n      z-index: 2;\n      text-align: center;\n      font-size: calc(var(--vw, 1vw) * 0.8);\n      transition: all 0.3s ease-out;\n      background: #111111;\n      border: 1px solid ", ";\n      border-radius: 4px;\n\n      ", "\n    }\n    &:hover::before {\n      opacity: 1;\n      pointer-events: auto;\n    }\n  }\n  span:hover:after {\n    content: '';\n    position: absolute;\n    left: 3px;\n    right: 3px;\n    background: ", ";\n    border-radius: 100px;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n\n    ", "\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  span {\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    width: calc(var(--vw, 1vw) * 3);\n    height: calc(var(--vw, 1vw) * 3);\n    flex: 0 0 calc(var(--vw, 1vw) * 3);\n    border-radius: 4px;\n    background-color: rgba(11, 2, 35, 0.5);\n\n    &:before {\n      opacity: 0;\n      pointer-events: none;\n      content: attr(data-title);\n      position: absolute;\n      top: 110%;\n      z-index: 2;\n      text-align: center;\n      font-size: calc(var(--vw, 1vw) * 0.8);\n      transition: all 0.3s ease-out;\n      background: #111111;\n      border: 1px solid ", ";\n      border-radius: 4px;\n\n      ", "\n    }\n    &:hover::before {\n      opacity: 1;\n      pointer-events: auto;\n    }\n  }\n  span:hover:after {\n    content: '';\n    position: absolute;\n    left: 3px;\n    right: 3px;\n    background: ", ";\n    border-radius: 100px;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n\n    ", "\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.isVideoComplianceLayoutEnabled ? (0,
            v.iv)(a || (a = x(["\n              width: max-content;\n              max-width: 250%;\n              left: 50%;\n              transform: translateX(-50%);\n              padding: 7px 6px;\n            "], ["\n              width: max-content;\n              max-width: 250%;\n              left: 50%;\n              transform: translateX(-50%);\n              padding: 7px 6px;\n            "]))) : (0,
            v.iv)(l || (l = x(["\n              left: -75%;\n              padding: 4px 6px;\n              width: 250%;\n            "], ["\n              left: -75%;\n              padding: 4px 6px;\n              width: 250%;\n            "])))
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), w.Ji, (function(n) {
            return n.isVideoComplianceLayoutEnabled ? (0,
            v.iv)(s || (s = x(["\n               bottom: -1.53px;\n               height: 5px;\n               filter: blur(5.5px);\n            "], ["\n               bottom: -1.53px;\n               height: 5px;\n               filter: blur(5.5px);\n            "]))) : (0,
            v.iv)(p || (p = x(["\n               bottom: -4.53px;\n               height: 8px;\n               filter: blur(3.5px);\n            "], ["\n               bottom: -4.53px;\n               height: 8px;\n               filter: blur(3.5px);\n            "])))
        }
        )), P = v.ZP.div(u || (u = x(["\n  display:flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 0;\n\n  #ng-support {\n    ", "\n  }\n\n  #ng-profile {\n    ", "\n  }\n"], ["\n  display:flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 0;\n\n  #ng-support {\n    ", "\n  }\n\n  #ng-profile {\n    ", "\n  }\n"])), (0,
        f.gB)(h.Z.t("helpAndSupport"), !1, !0), (0,
        f.gB)(h.Z.t("profile"), !1, !0)), I = v.ZP.div(g || (g = x(["\n  height: calc(var(--vw,1vw) * 2);\n  border-right: 1px solid ", ";\n  align-self: center;\n  margin: 0px 12px;\n"], ["\n  height: calc(var(--vw,1vw) * 2);\n  border-right: 1px solid ", ";\n  align-self: center;\n  margin: 0px 12px;\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ))
    },
    55967: function(n, e, i) {
        i.d(e, {
            Z: function() {
                return nn
            }
        });
        var t, o, r, d, a, l, s, p, c, u, g, v, h, f, w, x, m, y, b, A, Z, P, I = i(94564), k = i(11720), S = i(26793), D = i(25617), R = i(68913), E = {
            src: "/play/_next/static/media/bloxd-error.c62649cf.jpg",
            height: 320,
            width: 512,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABAgUFAAAAAAAAAAAAAAABAAIDBAUREhMhYXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8ArpOqzM3UYsMuDGaghCw3Bwyv1x6iIrNPlPRcSniP/9k="
        }, H = i(56327), T = i(88557), L = i(45024), C = i(7940), W = {
            src: "/play/_next/static/media/badge.811fbba3.svg",
            height: 22,
            width: 22
        }, O = i(77691), B = {
            appId: "51240",
            packageName: "com.nowgg.h5.pub511.app51240",
            media: {
                desktop: {
                    banner: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/banner/desktop/bloxd-io.jpg"
                },
                mobile: {
                    banner: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/banner/mobile/bloxd-io.jpg"
                },
                icon: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/icon/bloxd-io.png",
                tile: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/game-tiles/bloxd-io.jpg",
                logo: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/logo/bloxd-io.png"
            },
            appName: "Bloxd.io",
            appGenre: "Arcade Games",
            playUrl: "https://now.gg/play/bloxd/51240/bloxd-io",
            appDeveloperInfo: {
                name: "bloxd",
                developerSlug: "bloxd"
            },
            appRating: 4,
            appPageUrl: ""
        }, z = i(50445), M = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, N = z.ZP.div(d || (d = M(["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  background-position: center;\n\n  ", "\n\n  &.videoComplianceLayout {\n    ", "\n  }\n  \n\n  ", "\n"], ["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  background-position: center;\n\n  ", "\n\n  &.videoComplianceLayout {\n    ", "\n  }\n  \n\n  ", "\n"])), (function(n) {
            return n.isAppPage && (0,
            z.iv)(t || (t = M(["\n    width: 100%;\n    height: auto;\n    position: relative;\n    & > div {\n      padding: 36px 0 16px;\n    }\n  "], ["\n    width: 100%;\n    height: auto;\n    position: relative;\n    & > div {\n      padding: 36px 0 16px;\n    }\n  "])))
        }
        ), (function(n) {
            var e = n.isAppPage
              , i = n.isMobile;
            return e && (0,
            z.iv)(o || (o = M(["\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: ", ";\n      & > div {\n      padding: ", ";\n      }\n   "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: ", ";\n      & > div {\n      padding: ", ";\n      }\n   "])), i ? "auto" : "100%", i ? "36px 0 16px" : "16px 0")
        }
        ), (function(n) {
            return n.isMobile && (0,
            z.iv)(r || (r = M(["\n    & > div {\n      .app-logo {\n        width: 80px;\n        height: 80px;\n        margin-top: 120px;\n\n        @media (orientation: landscape) {\n          margin-top: 24px;\n        }\n      }\n\n      h5 {\n        font-size: 12px;\n      }\n    }\n  "], ["\n    & > div {\n      .app-logo {\n        width: 80px;\n        height: 80px;\n        margin-top: 120px;\n\n        @media (orientation: landscape) {\n          margin-top: 24px;\n        }\n      }\n\n      h5 {\n        font-size: 12px;\n      }\n    }\n  "])))
        }
        )), _ = z.ZP.div(a || (a = M(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))), j = z.ZP.div(s || (s = M(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n\n  ", "\n\n  p {\n    font-weight: 600;\n    line-height: 18px;\n  }\n"], ["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n\n  ", "\n\n  p {\n    font-weight: 600;\n    line-height: 18px;\n  }\n"])), (function(n) {
            return !n.isVertical && (0,
            z.iv)(l || (l = M(["\n    margin-top: 26px;\n  "], ["\n    margin-top: 26px;\n  "])))
        }
        )), F = z.ZP.div(p || (p = M(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.85);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n"], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.85);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n"]))), V = z.ZP.div(u || (u = M(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  gap: 16px;\n  padding: 16px;\n\n  ", "\n"], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  gap: 16px;\n  padding: 16px;\n\n  ", "\n"])), (function(n) {
            return n.isVertical && (0,
            z.iv)(c || (c = M(["\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n\n    .genre-text {\n      margin-top: 16px;\n    }\n\n    button {\n      margin: auto;\n    }\n  "], ["\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n\n    .genre-text {\n      margin-top: 16px;\n    }\n\n    button {\n      margin: auto;\n    }\n  "])))
        }
        )), G = z.ZP.div(g || (g = M(["\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  background-color: rgba(222, 90, 72, 0.5);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  padding: 0px 24px;\n  border-radius: 8px;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n"], ["\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  background-color: rgba(222, 90, 72, 0.5);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  padding: 0px 24px;\n  border-radius: 8px;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), U = z.ZP.div(v || (v = M(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n\n  &::before, &::after {\n    flex: 1;\n    content: '';\n    background-color: ", ";\n    margin: 8px;\n    padding-left: 67px;\n    font-size: 1px;\n    vertical-align: middle;\n  }\n"], ["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n\n  &::before, &::after {\n    flex: 1;\n    content: '';\n    background-color: ", ";\n    margin: 8px;\n    padding-left: 67px;\n    font-size: 1px;\n    vertical-align: middle;\n  }\n"])), (function(n) {
            return n.theme.colors.white50
        }
        ), (function(n) {
            return n.theme.colors.white50
        }
        )), X = z.ZP.div(f || (f = M(["\n  overflow: hidden;\n  margin-top: 12px;\n  border-radius: 12px;\n  border: 1px solid ", ";\n  min-width: ", ";\n\n  ", "\n"], ["\n  overflow: hidden;\n  margin-top: 12px;\n  border-radius: 12px;\n  border: 1px solid ", ";\n  min-width: ", ";\n\n  ", "\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.isVertical ? "250px" : "496px"
        }
        ), (function(n) {
            return !n.isVertical && (0,
            z.iv)(h || (h = M(["\n    margin-top: 0;\n  "], ["\n    margin-top: 0;\n  "])))
        }
        )), q = z.ZP.div(w || (w = M(["\n  width: 100%;\n  background: #FFFFFF33;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  background: #FFFFFF33;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: hidden;\n"]))), J = z.ZP.div(m || (m = M(["\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n\n  ", "\n\n  h3 {\n    line-height: 30px;\n  }\n\n  > p {\n    margin-top: auto;\n  }\n\n  .genre-text {\n    font-weight: 500;\n    line-height: 14px;\n    text-decoration-line: underline;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n\n  ", "\n\n  h3 {\n    line-height: 30px;\n  }\n\n  > p {\n    margin-top: auto;\n  }\n\n  .genre-text {\n    font-weight: 500;\n    line-height: 14px;\n    text-decoration-line: underline;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.isVertical && (0,
            z.iv)(x || (x = M(["\n    margin-top: 16px;\n\n    h3 {\n      font-size: 16px;\n      line-height: 150%;\n      color: ", ";\n      text-align: center;\n    }\n  "], ["\n    margin-top: 16px;\n\n    h3 {\n      font-size: 16px;\n      line-height: 150%;\n      color: ", ";\n      text-align: center;\n    }\n  "])), (function(n) {
                return n.theme.colors.white90
            }
            ))
        }
        )), Q = (z.ZP.div(y || (y = M(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 16px;\n"]))),
        z.ZP.img(A || (A = M(["\n  border-radius: 9px;\n\n  ", "\n"], ["\n  border-radius: 9px;\n\n  ", "\n"])), (function(n) {
            return n.isVertical && (0,
            z.iv)(b || (b = M(["\n    width: 70px;\n    height: 70px;\n  "], ["\n    width: 70px;\n    height: 70px;\n  "])))
        }
        ))), Y = z.ZP.div(Z || (Z = M(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"]))), K = (z.ZP.div(P || (P = M(["\n  background-color: rgba(91,41,36,255);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  display: none;\n  border-radius: 16px 16px 0px 0px;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n"], ["\n  background-color: rgba(91,41,36,255);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  display: none;\n  border-radius: 16px 16px 0px 0px;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )),
        i(81262)), $ = i(97997), nn = function(n) {
            var e = n.isAppPage
              , i = n.children
              , t = (0,
            S.$)().t
              , o = (0,
            D.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , r = (0,
            D.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , d = (0,
            k.useRef)(null)
              , a = (0,
            k.useState)(!1)
              , l = a[0]
              , s = a[1]
              , p = function() {
                var n, e = null === (n = null === o || void 0 === o ? void 0 : o.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                e && d.current && ((0,
                O.tq)() ? (r === K.cj.landscape ? (d.current.style.width = "".concat(Math.max(e.height, e.width), "px"),
                d.current.style.height = "".concat(Math.min(e.height, e.width), "px")) : (d.current.style.height = "".concat(Math.max(e.height, e.width), "px"),
                d.current.style.width = "".concat(Math.min(e.height, e.width), "px")),
                (0,
                O.Em)() ? (d.current.style.top = "50%",
                d.current.style.transform = "translateY(-50%)") : d.current.style.top = "58px") : (d.current.style.left = "50%",
                d.current.style.top = "50%",
                d.current.style.transform = "translate(-50%,-50%)",
                d.current.style.width = "".concat(e.width, "px"),
                d.current.style.height = "".concat(e.height, "px")))
            };
            (0,
            k.useEffect)((function() {
                return s((0,
                O.tq)()),
                p(),
                window.addEventListener("resizeDone", p),
                function() {
                    window.removeEventListener("resizeDone", p)
                }
            }
            ), []);
            var c = !e || l;
            return (0,
            $.tZ)(N, {
                ref: d,
                style: {
                    backgroundImage: "url(".concat((0,
                    L.j)(E), ")")
                },
                isAppPage: e,
                isMobile: l,
                className: (0,
                O.rI)() ? "videoComplianceLayout" : "",
                children: (0,
                $.BX)(F, {
                    children: [i && (0,
                    $.tZ)(_, {
                        children: i
                    }), (0,
                    $.BX)(G, {
                        children: [(0,
                        $.tZ)("img", {
                            alt: t("warning"),
                            src: (0,
                            L.j)(R.Z)
                        }), (0,
                        $.tZ)(I.QV, {
                            children: t("robloxNotAvailable")
                        })]
                    }), e ? (0,
                    $.BX)(j, {
                        isVertical: c,
                        children: [(0,
                        $.tZ)("img", {
                            src: (0,
                            L.j)(W),
                            width: 21,
                            height: 21,
                            alt: ""
                        }), (0,
                        $.tZ)(I.lU, {
                            children: t("tryTheseGamesInstead")
                        })]
                    }) : (0,
                    $.tZ)(U, {
                        children: t("similarGame")
                    }), (0,
                    $.tZ)(X, {
                        isVertical: c,
                        children: (0,
                        $.tZ)(q, {
                            style: {
                                backgroundImage: "url(".concat(c ? B.media.tile : B.media.desktop.banner, ")")
                            },
                            isVertical: c,
                            children: (0,
                            $.BX)(V, {
                                isVertical: c,
                                children: [(0,
                                $.tZ)(Q, {
                                    src: B.media.icon,
                                    width: 77,
                                    height: 77,
                                    isVertical: c
                                }), (0,
                                $.BX)(J, {
                                    isVertical: c,
                                    children: [(0,
                                    $.tZ)(I.Bb, {
                                        children: B.appName
                                    }), (0,
                                    $.BX)(Y, {
                                        children: [(0,
                                        $.tZ)("img", {
                                            src: (0,
                                            L.j)(H.Z),
                                            alt: "rating",
                                            style: {
                                                width: "16px",
                                                height: "16px"
                                            }
                                        }), (0,
                                        $.tZ)(I.lU, {
                                            children: B.appRating
                                        }), (0,
                                        $.tZ)(I.lU, {
                                            style: {
                                                color: "rgba(255,255,255,0.7)",
                                                paddingLeft: "12px"
                                            },
                                            children: B.appDeveloperInfo.name
                                        })]
                                    }), (0,
                                    $.tZ)(I.Aj, {
                                        className: "genre-text",
                                        children: B.appGenre
                                    })]
                                }), (0,
                                $.tZ)(C.z, {
                                    style: {
                                        width: "160px",
                                        alignSelf: "self-end",
                                        padding: "9.5px 47.5px",
                                        marginLeft: "auto"
                                    },
                                    onClick: function() {
                                        window.location.href = (0,
                                        T.ZP)(B.playUrl)
                                    },
                                    children: (0,
                                    $.tZ)(I.QV, {
                                        children: t("playNow")
                                    })
                                })]
                            })
                        })
                    })]
                })
            })
        }
    },
    3021: function(n, e, i) {
        i.d(e, {
            im: function() {
                return t.Z
            }
        });
        var t = i(12731);
        i(30945)
    },
    30945: function(n, e, i) {
        i.d(e, {
            nv: function() {
                return t.ZP
            },
            h9: function() {
                return d
            },
            ny: function() {
                return a
            }
        });
        var t = i(24047)
          , o = i(98219)
          , r = i(74348)
          , d = {
            mouseDown: r.uG,
            mouseUp: r.vV,
            mouseMove: r.ou,
            mouseCancel: r.YN,
            mouseWheel: r.NX,
            mouseWheelNative: r._C
        }
          , a = function() {
            (0,
            o.mD)(),
            (0,
            t.Gn)()
        }
    },
    22572: function(n, e, i) {
        var t = i(59930)
          , o = i(94564)
          , r = i(66971)
          , d = i(58309)
          , a = i(11720)
          , l = i(26793)
          , s = i(25617)
          , p = i(22012)
          , c = i(16678)
          , u = i(62825)
          , g = i(89598)
          , v = i(78294)
          , h = i(7940)
          , f = i(77691)
          , w = i(88557)
          , x = i(45628)
          , m = i(57762)
          , y = i(66749)
          , b = i(97997);
        e.Z = function(n) {
            var e = n.closeModal
              , i = n.isAppPage
              , A = n.userAuthAndProfileInfo
              , Z = (0,
            l.$)().t
              , P = (0,
            s.I0)()
              , I = (0,
            s.v9)((function(n) {
                return n.play.isNerdMode
            }
            ))
              , k = (0,
            s.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , S = (0,
            a.useState)(null)
              , D = S[0]
              , R = S[1]
              , E = (0,
            s.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            ))
              , H = sessionStorage.getItem("isEmbeddedFrame")
              , T = (0,
            f.tq)()
              , L = (0,
            s.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , C = i ? !!(null === A || void 0 === A ? void 0 : A.isLoggedIn) : k;
            (0,
            a.useEffect)((function() {
                var n;
                i ? (n = C ? null === A || void 0 === A ? void 0 : A.profileInfo : null) && R(n) : (n = C ? (0,
                d.et)() : null) && R(n)
            }
            ), [i, C, D, null === A || void 0 === A ? void 0 : A.profileInfo]);
            var W = function() {
                var n, e;
                (0,
                g.L9)("LogoutClicked"),
                (0,
                v.u_)(),
                (0,
                v.Hh)(),
                (0,
                d.kS)({
                    reason: "ManualLogout",
                    url: null === (e = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.href) || void 0 === e ? void 0 : e.split("?")[0]
                })
            };
            return (0,
            b.tZ)(p.Z, {
                overlayStyles: m.r2,
                modalStyles: T ? m.aI : m.il,
                children: (0,
                b.BX)(m.W2, {
                    children: [(0,
                    b.BX)(m.xg, {
                        children: [(0,
                        b.tZ)(c.Z, {
                            style: {
                                margin: "0px"
                            },
                            themeType: "light",
                            hasTagline: !1
                        }), (0,
                        b.tZ)(t.Z, {
                            style: {
                                cursor: "pointer",
                                color: "white",
                                position: "relative",
                                left: "8px"
                            },
                            onClick: e,
                            size: 16,
                            name: "cross-thin",
                            id: "ng-info-close"
                        })]
                    }), !(0,
                    v.DJ)() && !H && C && D && Object.keys(D).length > 1 && (0,
                    b.tZ)(m.LD, {
                        isMobile: T,
                        orientation: L,
                        children: (0,
                        b.BX)("div", {
                            className: "user-profile-tile",
                            children: [(0,
                            b.tZ)(y.Z, {
                                isLoggedIn: C,
                                user: D
                            }), (0,
                            b.BX)(m.ao, {
                                isMobile: T,
                                orientation: L,
                                children: [(0,
                                b.tZ)(m.vx, {
                                    children: null === D || void 0 === D ? void 0 : D.handle
                                }), (0,
                                b.tZ)(m.C0, {
                                    id: "emailId",
                                    children: null === D || void 0 === D ? void 0 : D.email
                                })]
                            }), (0,
                            b.tZ)("div", {
                                style: T && L === x.cj.landscape || !T ? {
                                    marginLeft: "auto"
                                } : {},
                                children: (0,
                                b.tZ)(h.z, {
                                    id: "logout",
                                    variant: "primary",
                                    size: "medium",
                                    onClick: W,
                                    text: Z("logout")
                                })
                            })]
                        })
                    }), (0,
                    b.BX)(m.X2, {
                        children: [(0,
                        b.tZ)(o.T6, {
                            children: (0,
                            b.BX)(o.rU, {
                                href: (0,
                                w.ZP)("https://www.now.gg"),
                                target: "_blank",
                                rel: "noreferrer noopener",
                                white: !0,
                                className: "link",
                                children: [(0,
                                b.tZ)("span", {
                                    children: Z("website")
                                }), (0,
                                b.tZ)(m.mo, {
                                    children: (0,
                                    b.tZ)(t.Z, {
                                        name: "union",
                                        size: 9
                                    })
                                })]
                            })
                        }), (0,
                        b.tZ)(o.T6, {
                            style: {
                                marginBottom: 16,
                                marginLeft: 15
                            },
                            children: (0,
                            b.BX)(o.rU, {
                                href: "https://nowgg.zendesk.com/hc/en-us",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                white: !0,
                                className: "link",
                                children: [(0,
                                b.tZ)("span", {
                                    children: Z("faqs")
                                }), " ", (0,
                                b.tZ)(m.mo, {
                                    children: (0,
                                    b.tZ)(t.Z, {
                                        name: "union",
                                        size: 9
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    b.tZ)(m.xv, {
                        children: (0,
                        b.BX)(o.kk, {
                            style: {
                                marginBottom: 0,
                                color: "rgba(255, 255, 255, 0.6)"
                            },
                            children: ["".concat(Z("copyright", {
                                year: (new Date).getFullYear()
                            }), " ").concat(Z("disclaimerSub1"), " "), (0,
                            b.tZ)("br", {}), Z("disclaimerSub2"), (0,
                            b.tZ)(o.rU, {
                                style: {
                                    fontSize: 12
                                },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://now.gg/terms-and-privacy.html#terms",
                                children: Z("termsOfUse")
                            }), " ".concat(Z("and"), " "), (0,
                            b.tZ)(o.rU, {
                                style: {
                                    fontSize: 12
                                },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://now.gg/terms-and-privacy.html#privacy",
                                children: Z("privacyPolicy")
                            }), ", ".concat(Z("disclaimerSub3"), " ")]
                        })
                    }), E && (0,
                    b.BX)(m.qp, {
                        children: [(0,
                        b.tZ)(m.cw, {
                            onClick: function() {
                                e(),
                                P({
                                    type: u.Z.GET_SUPPORT
                                })
                            },
                            children: Z("reportAProblem")
                        }), (0,
                        b.BX)(m.xR, {
                            children: [(0,
                            b.tZ)(o.kk, {
                                style: {
                                    marginLeft: "auto",
                                    marginBottom: 0
                                },
                                children: Z("nerdMode")
                            }), (0,
                            b.BX)(m.__, {
                                id: "ng-nerd-mode",
                                children: [(0,
                                b.tZ)("input", {
                                    type: "checkbox",
                                    checked: I,
                                    onChange: function() {
                                        P({
                                            type: r.Z.START_CONNECTION,
                                            payload: {
                                                isNerdMode: !I
                                            }
                                        })
                                    }
                                }), (0,
                                b.tZ)("span", {})]
                            })]
                        })]
                    })]
                })
            })
        }
    },
    71174: function(n, e, i) {
        i.d(e, {
            Z: function() {
                return Z
            }
        });
        var t, o, r, d, a, l = i(94564), s = i(66971), p = i(77691), c = i(78294), u = i(11720), g = i(26793), v = i(25617), h = i(94381), f = i(89598), w = i(50445), x = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, m = w.ZP.header(t || (t = x(["\n    width: 100%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.7);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    padding: 8.5px 10px 7.5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    touch-action: none;\n    .appIcon {\n        width: 28px;\n        aspect-ratio: 1;\n        border-radius: 4px;\n        margin-right: 12px;\n    }\n    &:after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background-color: rgba(102, 102, 102, 0.2);\n        pointer-events: none;\n    }\n"], ["\n    width: 100%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.7);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    padding: 8.5px 10px 7.5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    touch-action: none;\n    .appIcon {\n        width: 28px;\n        aspect-ratio: 1;\n        border-radius: 4px;\n        margin-right: 12px;\n    }\n    &:after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background-color: rgba(102, 102, 102, 0.2);\n        pointer-events: none;\n    }\n"]))), y = w.ZP.button(o || (o = x(["\n    background-color: #FF42A5;\n    color: #fff;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n   margin-left: 36px;\n   border-radius: 6px;\n   padding: 4px 12px;\n   border: none;\n   cursor: pointer;\n   text-align: center;\n"], ["\n    background-color: #FF42A5;\n    color: #fff;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n   margin-left: 36px;\n   border-radius: 6px;\n   padding: 4px 12px;\n   border: none;\n   cursor: pointer;\n   text-align: center;\n"]))), b = (w.ZP.p(r || (r = x(["\n   width: 461px;\n   height: 37px;\n   background: rgba(0, 0, 0, 0.7);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 8px;\n   position: fixed;\n   left: 50%;\n   transform: translateX(-50%);\n   top: 52px;\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   z-index: 1;\n   p {\n      cursor: pointer;\n      font-weight: 600;\n      color: #fff;\n      margin: 0px 0px 0px 3px;\n   }\n"], ["\n   width: 461px;\n   height: 37px;\n   background: rgba(0, 0, 0, 0.7);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 8px;\n   position: fixed;\n   left: 50%;\n   transform: translateX(-50%);\n   top: 52px;\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   z-index: 1;\n   p {\n      cursor: pointer;\n      font-weight: 600;\n      color: #fff;\n      margin: 0px 0px 0px 3px;\n   }\n"]))),
        w.ZP.p(d || (d = x(["\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    margin: 0px 0px 0px 4px;\n    position: relative;\n    &:after, &:before {\n        width: 1px;\n        background-color: rgba(255, 255, 255, 0.8);\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 11px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"], ["\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    margin: 0px 0px 0px 4px;\n    position: relative;\n    &:after, &:before {\n        width: 1px;\n        background-color: rgba(255, 255, 255, 0.8);\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 11px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"]))),
        w.ZP.div(a || (a = x(["\n    display: flex;\n    align-items: center;\n    margin-left: 12px;\n    span {\n        &:after {\n            content: '\u2605';\n            color: #FFC32A;\n        }\n    }\n    p {\n        margin: 0px 0px 0px 4px;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 100%;\n        color: #fff;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    margin-left: 12px;\n    span {\n        &:after {\n            content: '\u2605';\n            color: #FFC32A;\n        }\n    }\n    p {\n        margin: 0px 0px 0px 4px;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 100%;\n        color: #fff;\n    }\n"])))), A = i(97997), Z = function() {
            var n, e, i, t = (0,
            g.$)().t, o = (0,
            v.I0)(), r = (0,
            u.useRef)(null), d = !(0,
            p.tq)() && !(0,
            p.Em)() && !(0,
            p.zc)();
            (0,
            u.useEffect)((function() {
                o({
                    type: s.Z.SET_REF,
                    payload: {
                        tryNowRef: r
                    }
                })
            }
            ), []);
            return (0,
            A.BX)(m, {
                ref: r,
                children: [(0,
                A.tZ)("img", {
                    src: c.ZP.appInfo.media.icon,
                    alt: t("appIcon"),
                    className: "appIcon"
                }), (0,
                A.tZ)(l.QV, {
                    children: (0,
                    A.tZ)("span", {
                        style: {
                            color: "#ffffff",
                            marginRight: "12px",
                            marginTop: "4px",
                            display: "inline-flex"
                        },
                        children: null === (n = c.ZP.appInfo) || void 0 === n ? void 0 : n.appName
                    })
                }), (0,
                A.tZ)(l.lU, {
                    children: (0,
                    A.tZ)("span", {
                        style: {
                            color: "rgba(255, 255, 255, 0.6)",
                            marginTop: "4px",
                            display: "inline-flex"
                        },
                        children: null === (i = null === (e = c.ZP.appInfo) || void 0 === e ? void 0 : e.appDeveloperInfo) || void 0 === i ? void 0 : i.name
                    })
                }), (0,
                A.BX)(b, {
                    children: [(0,
                    A.tZ)("span", {}), (0,
                    A.tZ)("p", {
                        children: "4.8"
                    })]
                }), (0,
                A.tZ)(y, {
                    onClick: function() {
                        var n, e = sessionStorage.getItem("isEmbeddedFrame");
                        if (d) {
                            var i = null === (n = c.ZP.appInfo.playFeFeatures.tryAndDownload) || void 0 === n ? void 0 : n.clientLink;
                            i && !(0,
                            p.dl)() ? e ? window.open(i, "_parent", "noreferrer") : window.open(i, "_self", "noreferrer") : o({
                                type: s.Z.SHOW_TRY_NOW,
                                payload: {
                                    tryNowModal: !0
                                }
                            })
                        } else
                            (0,
                            p.Cf)();
                        (0,
                        f.L9)(h.S5, {
                            element: "TopBar",
                            action: "InstallNowClicked",
                            group: "TryAndDownload"
                        })
                    },
                    children: (0,
                    A.tZ)(l.QV, {
                        children: t("install")
                    })
                })]
            })
        }
    },
    29061: function(n, e, i) {
        i.d(e, {
            Z: function() {
                return E
            }
        });
        var t = i(11720)
          , o = i(78294)
          , r = i(77691)
          , d = i(1568)
          , a = i(25617)
          , l = i(82132)
          , s = i(64857)
          , p = i(50912)
          , c = i(89598)
          , u = i(74803)
          , g = i(94381)
          , v = i(49555)
          , h = i(54036)
          , f = function() {
            return (f = Object.assign || function(n) {
                for (var e, i = 1, t = arguments.length; i < t; i++)
                    for (var o in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }
          , w = -1
          , x = function() {
            return w
        }
          , m = function() {
            w += 1
        }
          , y = -1
          , b = function() {
            return y
        }
          , A = function() {
            y += 1
        }
          , Z = -1
          , P = function() {
            return Z
        }
          , I = -1
          , k = function() {
            return I
        }
          , S = function() {
            (0,
            c.L9)("AdAddDisplayAdListenersCalled"),
            (0,
            h.DN)();
            var n = window.devicePixelRatio;
            window.googletag.cmd.push((function() {
                var e;
                try {
                    window.googletag.pubads().addEventListener("slotRequested", (function(e) {
                        var i, t, o, r, d, a, l, u, v, h, f, w, y, S, D, R, E, H, T, L, C;
                        try {
                            var W = p.Z.getState()
                              , O = W.play.videoRef
                              , B = W.ads.adBlocker
                              , z = (null === (i = null === O || void 0 === O ? void 0 : O.current) || void 0 === i ? void 0 : i.clientHeight) || 0
                              , M = (null === (t = null === O || void 0 === O ? void 0 : O.current) || void 0 === t ? void 0 : t.clientWidth) || 0
                              , N = e.slot.getSlotElementId();
                            if (-1 !== N.indexOf("leaderBoard")) {
                                var _ = 0;
                                -1 !== N.indexOf("leaderBoard-1") ? (m(),
                                _ = x()) : (A(),
                                _ = b()),
                                (0,
                                c.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 728,
                                    adHeight: 90,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.tude) || void 0 === o ? void 0 : o.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (r = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === r ? void 0 : r.pubads),
                                    adBlocker: B,
                                    slotId: N,
                                    repeatCount: _
                                })
                            } else if (-1 !== N.indexOf("skyScrapper")) {
                                var j = 0;
                                -1 !== N.indexOf("skyScrapper-1") ? (m(),
                                j = x()) : (A(),
                                j = b()),
                                (0,
                                c.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 160,
                                    adHeight: 600,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (d = null === window || void 0 === window ? void 0 : window.tude) || void 0 === d ? void 0 : d.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (a = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === a ? void 0 : a.pubads),
                                    adBlocker: B,
                                    slotId: N,
                                    repeatCount: j
                                })
                            } else
                                -1 !== N.indexOf("div-gpt-ad-rewarded") ? (Z += 1,
                                (0,
                                c.L9)("AdRequested", {
                                    adContext: "Ingame",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (l = null === window || void 0 === window ? void 0 : window.tude) || void 0 === l ? void 0 : l.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (u = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === u ? void 0 : u.pubads),
                                    adBlocker: B,
                                    slotId: N,
                                    repeatCount: P()
                                })) : -1 !== N.indexOf("div-gpt-ad-display") ? (I += 1,
                                p.Z.dispatch({
                                    type: s.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        displayAdLoaded: !1
                                    }
                                }),
                                (0,
                                c.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 320,
                                    adHeight: 50,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (v = null === window || void 0 === window ? void 0 : window.tude) || void 0 === v ? void 0 : v.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (h = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === h ? void 0 : h.pubads),
                                    repeatCount: k(),
                                    adBlocker: B,
                                    slotId: N
                                })) : -1 !== N.indexOf(g.O3) ? (0,
                                c.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 728,
                                    adHeight: 90,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (f = null === window || void 0 === window ? void 0 : window.tude) || void 0 === f ? void 0 : f.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (w = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === w ? void 0 : w.pubads),
                                    adBlocker: B,
                                    slotId: N
                                }) : -1 !== N.indexOf(g.t) ? (0,
                                c.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 336,
                                    adHeight: 280,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (y = null === window || void 0 === window ? void 0 : window.tude) || void 0 === y ? void 0 : y.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (S = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === S ? void 0 : S.pubads),
                                    adBlocker: B,
                                    slotId: N
                                }) : -1 !== N.indexOf(g.$C) ? (0,
                                c.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Video",
                                    adWidth: 336,
                                    adHeight: 280,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (D = null === window || void 0 === window ? void 0 : window.tude) || void 0 === D ? void 0 : D.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (R = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === R ? void 0 : R.pubads),
                                    adBlocker: B,
                                    slotId: N
                                }) : (0,
                                c.L9)("AdRequested", {
                                    adContext: "unknown",
                                    adType: "unknown",
                                    adWidth: -1,
                                    adHeight: -1,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: z,
                                    androidHeight: M,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof (null === (E = null === window || void 0 === window ? void 0 : window.tude) || void 0 === E ? void 0 : E.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof (null === (H = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === H ? void 0 : H.pubads),
                                    adBlocker: B,
                                    slotId: N
                                })
                        } catch (F) {
                            (0,
                            c.L9)("AdRequestException", {
                                adContext: "exception",
                                adType: "exception",
                                adWidth: -1,
                                adHeight: -1,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                pixelRatio: n,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof (null === (T = null === window || void 0 === window ? void 0 : window.tude) || void 0 === T ? void 0 : T.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof (null === (L = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === L ? void 0 : L.pubads),
                                exception: (null === (C = F) || void 0 === C ? void 0 : C.message) || "unknown",
                                slotId: "unkknown"
                            })
                        }
                    }
                    )),
                    window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                        var i, t, o = e.slot.getSlotElementId() || "", r = p.Z.getState(), d = r.play.videoRef, a = r.ads.rewardedAdType, l = (null === (i = null === d || void 0 === d ? void 0 : d.current) || void 0 === i ? void 0 : i.clientHeight) || 0, h = (null === (t = null === d || void 0 === d ? void 0 : d.current) || void 0 === t ? void 0 : t.clientWidth) || 0, w = (window.pbjs.getBidResponses()[o] || {}).bids, m = (void 0 === w ? [] : w)[0] || {}, y = {
                            bidder: m.bidder,
                            cpm: m.cpm,
                            currency: m.currency,
                            netRevenue: m.netRevenue,
                            status: m.status,
                            statusMessage: m.statusMessage,
                            timeToRespond: m.timeToRespond,
                            ttl: m.ttl
                        };
                        if (-1 !== o.indexOf("leaderBoard")) {
                            var A = 0;
                            A = -1 !== o.indexOf("leaderBoard-1") ? x() : b(),
                            e.isEmpty ? (0,
                            c.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 728,
                                adHeight: 90,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                repeatCount: A,
                                slotId: o
                            }) : (0,
                            c.L9)("AdDisplayed", f({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                repeatCount: A,
                                slotId: o
                            }, y))
                        } else if (-1 !== o.indexOf("skyScrapper")) {
                            var Z = 0;
                            Z = -1 !== o.indexOf("skyScrapper-1") ? x() : b(),
                            e.isEmpty ? (0,
                            c.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 160,
                                adHeight: 600,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o,
                                repeatCount: Z
                            }) : (0,
                            c.L9)("AdDisplayed", f({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o,
                                repeatCount: Z
                            }, y))
                        } else if (-1 !== o.indexOf("div-gpt-ad-rewarded"))
                            if (e.isEmpty) {
                                (0,
                                c.L9)("AdNotFilled", {
                                    adContext: "Ingame",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: l,
                                    androidHeight: h,
                                    pixelRatio: n,
                                    slotId: o,
                                    repeatCount: P()
                                });
                                var I = p.Z.getState().ads.sdkType
                                  , S = I ? "::".concat(I) : "";
                                a === g.fz.rewarded ? (0,
                                u.f)("ADS::rewardedAdLoad::fail".concat(S)) : a === g.fz.interstitial && (0,
                                u.f)("ADS::interstitialAdLoad::fail".concat(S)),
                                p.Z.dispatch({
                                    type: s.Z.UPDATE_REWARDED_SDK_STATE,
                                    payload: {
                                        rewardedAdsSDK: !1,
                                        fallbackDisplayed: !1
                                    }
                                }),
                                r.play.muted || d && d.current && (d.current.muted = !1)
                            } else
                                (0,
                                c.L9)("AdDisplayed", f({
                                    adContext: "Ingame",
                                    adType: "Display",
                                    adWidth: e.size[0],
                                    adHeight: e.size[1],
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: l,
                                    androidHeight: h,
                                    pixelRatio: n,
                                    repeatCount: P(),
                                    slotId: o
                                }, y)),
                                p.Z.dispatch({
                                    type: s.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        fallbackDisplayed: !0
                                    }
                                });
                        else
                            -1 !== o.indexOf("div-gpt-ad-display") ? e.isEmpty ? (0,
                            c.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 320,
                                adHeight: 50,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                repeatCount: k(),
                                slotId: o
                            }) : ((0,
                            c.L9)("AdDisplayed", f({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                repeatCount: k(),
                                slotId: o
                            }, y)),
                            p.Z.dispatch({
                                type: s.Z.UPDATE_ADS_STATE,
                                payload: {
                                    displayAdLoaded: !0
                                }
                            }),
                            (0,
                            v.sZ)(),
                            (0,
                            v.Ul)(),
                            setTimeout((function() {
                                (0,
                                v.sZ)(),
                                (0,
                                v.Ul)()
                            }
                            ), 2e3)) : -1 !== o.indexOf(g.O3) ? e.isEmpty ? (0,
                            c.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 728,
                                adHeight: 90,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o
                            }) : (0,
                            c.L9)("AdDisplayed", f({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o
                            }, y)) : -1 !== o.indexOf(g.t) ? e.isEmpty ? (0,
                            c.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 336,
                                adHeight: 280,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o
                            }) : (0,
                            c.L9)("AdDisplayed", f({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o
                            }, y)) : -1 !== o.indexOf(g.$C) && (e.isEmpty ? (0,
                            c.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: 336,
                                adHeight: 280,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o
                            }) : (0,
                            c.L9)("AdDisplayed", f({
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: l,
                                androidHeight: h,
                                pixelRatio: n,
                                slotId: o
                            }, y)))
                    }
                    )),
                    (0,
                    h.yq)(),
                    (0,
                    c.L9)("AdGPTCallbacksRegistered")
                } catch (i) {
                    (0,
                    c.L9)("AdGPTCallbacksRegisterException", {
                        exception: (null === (e = i) || void 0 === e ? void 0 : e.message) || "unknown"
                    })
                }
            }
            ))
        }
          , D = i(85437)
          , R = i(57020)
          , E = function(n) {
            var e, i, p = n.appInfo, c = n.ngNcmHost, u = n.features, g = n.authUseThirdPartyFlow, v = n.prefix, h = n.authRedirectionUrl, f = n.serviceStatus, w = n.countryCode, x = n.isQuancastPopupSupportByCountry, m = n.pageType, y = n.authServiceHost, b = n.pwaIconHost, A = n.pwaNudgeDelayMs, Z = n.thirdPartyAuthUrl, P = (0,
            t.useRef)(!0), I = (0,
            t.useRef)(!0), k = (0,
            t.useRef)(!1), E = null === (i = null === (e = p.playFeFeatures) || void 0 === e ? void 0 : e.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled, H = (0,
            a.I0)();
            return k && !(null === k || void 0 === k ? void 0 : k.current) && (k.current = !0,
            o.ZP.appInfo = p,
            o.ZP.prefix = v,
            o.ZP.authUseThirdPartyFlow = g,
            o.ZP.authRedirectionUrl = h,
            o.ZP.features = u,
            o.ZP.ngNcmHost = c,
            o.ZP.serviceStatus = "".concat(f),
            o.ZP.countryCode = w || "",
            o.ZP.isQuancastPopupSupportByCountry = x,
            o.ZP.thirdPartyAuthUrl = Z,
            "appPage" === m ? o.ZP.isAppPage = !0 : o.ZP.isPlayPage = !0,
            E && (o.ZP.pwaSupported = !1),
            (0,
            R.v)({
                authServiceHost: y,
                authUseThirdPartyFlow: g,
                pwaIconHost: b,
                pwaNudgeDelayMs: A
            }),
            (0,
            d.yF)() || (S(),
            (0,
            r.q0)(),
            (0,
            r.cp)(),
            P.current = (0,
            D.Tl)(),
            (0,
            D.tM)(),
            I.current = (0,
            D.md)())),
            (0,
            t.useEffect)((function() {
                function n() {
                    (0,
                    l.oi)(),
                    (0,
                    r.T2)() && ((0,
                    D.V0)(!1, !1, !1, !1),
                    I.current = !1,
                    H({
                        type: s.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    }),
                    (0,
                    D.Z2)())
                }
                return o.ZP.isAppPage && (0,
                D.Z2)(),
                n(),
                window.addEventListener("nggClientIpInfoEvent", n),
                window.addEventListener("nggProfileDetailsUpdated", l.oi),
                function() {
                    "appPage" === m ? o.ZP.isAppPage = !1 : o.ZP.isPlayPage = !1,
                    window.removeEventListener("nggClientIpInfoEvent", n),
                    window.removeEventListener("nggProfileDetailsUpdated", l.oi)
                }
            }
            ), []),
            {
                isNowGGURL: null === P || void 0 === P ? void 0 : P.current,
                adsEnabled: null === I || void 0 === I ? void 0 : I.current,
                isTrialEnabled: E
            }
        }
    },
    68615: function(n, e, i) {
        var t = i(11720);
        e.Z = function(n) {
            var e = (0,
            t.useState)(n)
              , i = e[0]
              , o = e[1];
            return (0,
            t.useEffect)((function() {
                document.title = i
            }
            ), [i]),
            [i, o]
        }
    },
    17174: function(n, e, i) {
        i.d(e, {
            UZ: function() {
                return d
            },
            RT: function() {
                return a
            },
            dI: function() {
                return l
            }
        });
        var t = i(64857)
          , o = i(78294)
          , r = i(77691)
          , d = function(n, e) {
            return function(i) {
                sessionStorage.getItem("isEmbeddedFrame") ? i({
                    type: t.Z.LOAD_MID_ROLL,
                    payload: {
                        midRollAdsFullScreen: o.ZP.embeddedFullScreenAdsEnabled,
                        midRollAds: n,
                        inGameAds: e
                    }
                }) : !(0,
                r.tq)() || (0,
                r.Em)() || (0,
                r.zc)() ? (0,
                r.tq)() || (0,
                r.Em)() || (0,
                r.zc)() ? ((0,
                r.Em)() || (0,
                r.zc)()) && ((0,
                r.c6)() ? i({
                    type: t.Z.LOAD_MID_ROLL,
                    payload: {
                        midRollAdsMobile: !0,
                        inGameAds: e
                    }
                }) : i({
                    type: t.Z.LOAD_MID_ROLL,
                    payload: {
                        inGameAds: e
                    }
                })) : i({
                    type: t.Z.LOAD_MID_ROLL,
                    payload: {
                        midRollAds: n,
                        inGameAds: e
                    }
                }) : (0,
                r.c6)() && i({
                    type: t.Z.LOAD_MID_ROLL,
                    payload: {
                        midRollAdsMobile: !0,
                        mobileExperiment: e
                    }
                })
            }
        }
          , a = function(n) {
            return function(e) {
                e({
                    type: t.Z.SET_IN_GAME_AD,
                    payload: {
                        inGameAd: n
                    }
                })
            }
        }
          , l = function(n, e, i, o) {
            return function(r) {
                r({
                    type: t.Z.SET_IN_GAME_AD,
                    payload: {
                        skyScrapperRef1: n,
                        skyScrapperRef2: e,
                        leaderBoardRef1: i,
                        leaderBoardRef2: o
                    }
                })
            }
        }
    },
    82132: function(n, e, i) {
        i.d(e, {
            dl: function() {
                return g
            },
            oi: function() {
                return v
            },
            zr: function() {
                return f
            }
        });
        var t = i(50912)
          , o = i(78294)
          , r = i(58309)
          , d = i(94381)
          , a = i(77691)
          , l = i(61084)
          , s = i(89598)
          , p = function() {
            return (p = Object.assign || function(n) {
                for (var e, i = 1, t = arguments.length; i < t; i++)
                    for (var o in e = arguments[i])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }
          , c = function(n, e, i, t) {
            return new (i || (i = Promise))((function(o, r) {
                function d(n) {
                    try {
                        l(t.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(n) {
                    try {
                        l(t.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof i ? e : new i((function(n) {
                        n(e)
                    }
                    ))).then(d, a)
                }
                l((t = t.apply(n, e || [])).next())
            }
            ))
        }
          , u = function(n, e) {
            var i, t, o, r, d = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(r) {
                return function(a) {
                    return function(r) {
                        if (i)
                            throw new TypeError("Generator is already executing.");
                        for (; d; )
                            try {
                                if (i = 1,
                                t && (o = 2 & r[0] ? t.return : r[0] ? t.throw || ((o = t.return) && o.call(t),
                                0) : t.next) && !(o = o.call(t, r[1])).done)
                                    return o;
                                switch (t = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return d.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    d.label++,
                                    t = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = d.ops.pop(),
                                    d.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = d.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        d = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        d.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && d.label < o[1]) {
                                        d.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && d.label < o[2]) {
                                        d.label = o[2],
                                        d.ops.push(r);
                                        break
                                    }
                                    o[2] && d.ops.pop(),
                                    d.trys.pop();
                                    continue
                                }
                                r = e.call(n, d)
                            } catch (a) {
                                r = [6, a],
                                t = 0
                            } finally {
                                i = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, a])
                }
            }
        }
          , g = function(n) {
            var e, i = t.Z.getState().play.servingRegion, r = t.Z.getState().ads.playtime, s = "true" === sessionStorage.getItem("gdprApplies"), c = o.ZP.compressedPackage, u = (0,
            o.We)(), g = u.utmCampaign, v = u.utmSource, h = "true" === sessionStorage.getItem(d.UD), f = "now.us" === window.location.hostname, w = p({
                game: null === n || void 0 === n ? void 0 : n.appSlug,
                genre: null === n || void 0 === n ? void 0 : n.appGenre,
                "instance-region": i,
                ads_project: "v3",
                ads_site: "nowgg_proxy" === g ? "mathsspot" : "ropro" === g ? "ropro" : "fredboat" === g ? "fredboat" : "carl" === g ? "carl" : f ? "nowus" : "nowgg",
                app_package: n.packageName.length < 40 ? n.packageName : c,
                playtime: (r <= 15 ? r : 5 * Math.ceil(r / 5)).toString(),
                utype: h ? "new" : "returning",
                ads_status: "mob" === (null === (e = window.nggClientIpInfo) || void 0 === e ? void 0 : e.browserCode) ? "p" : "np",
                ads_device: (0,
                a.zj)().feDeviceType,
                ad: g,
                inc: o.ZP.incognitoMode || l.F.UNKNOWN
            }, (0,
            a.cN)());
            if (s) {
                var x = "true" === sessionStorage.getItem("userConsent");
                w.cs = x ? "t" : "f"
            }
            return "gamepix" === v && (w.ads_campaign = "gamepix"),
            w
        }
          , v = function() {
            var n = {}
              , e = window.nggClientIpInfo || {}
              , i = e.ipv4
              , t = e.ipv6;
            i && "NA" !== i && (n.i4 = i),
            t && "NA" !== t && (n.i6 = t),
            window.tude.cmd.push((function() {
                return c(void 0, void 0, void 0, (function() {
                    var e, i, t;
                    return u(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            if (e = "",
                            (i = (0,
                            r.et)()) && (e = JSON.parse(JSON.stringify(i)).email),
                            !e)
                                return [3, 4];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, (d = e,
                            c(void 0, void 0, void 0, (function() {
                                var n, e;
                                return u(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return n = (new TextEncoder).encode(d),
                                        [4, crypto.subtle.digest("SHA-256", n)];
                                    case 1:
                                        return e = i.sent(),
                                        [2, Array.from(new Uint8Array(e)).map((function(n) {
                                            return n.toString(16).padStart(2, "0")
                                        }
                                        )).join("")]
                                    }
                                }
                                ))
                            }
                            )))];
                        case 2:
                            return e = o.sent(),
                            t = p(p({}, n), {
                                e: e
                            }),
                            window.tude.setIdProfile(p({}, t)),
                            [3, 4];
                        case 3:
                            return o.sent(),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                        var d
                    }
                    ))
                }
                ))
            }
            ))
        }
          , h = !1;
        function f(n, e) {
            h || ((0,
            s.L9)("PrerollEnd", {
                endReason: n,
                isFallback: e
            }),
            h = !0)
        }
    },
    56327: function(n, e) {
        e.Z = {
            src: "/play/_next/static/media/filled-star.b766385c.svg",
            height: 15,
            width: 14
        }
    },
    68913: function(n, e) {
        e.Z = {
            src: "/play/_next/static/media/warning.53226107.svg",
            height: 17,
            width: 16
        }
    }
}]);
//# sourceMappingURL=673-f60a8448e81a8488.js.map
