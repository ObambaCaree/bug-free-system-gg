"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[56], {
    1883: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return m
            },
            e: function() {
                return i.ey
            }
        });
        var i = t(15187)
          , o = t(50912)
          , r = t(25617)
          , a = t(11720)
          , l = t(39426)
          , d = t(94381)
          , c = t(66971)
          , s = t(78294)
          , u = t(77691)
          , p = t(11163)
          , f = t(93224)
          , h = t(88557)
          , g = t(97997)
          , v = function() {
            return (v = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }
          , m = function(n) {
            var e, t, i, m, x, y, w, b = n.style, Z = void 0 === b ? {} : b, A = (0,
            p.useRouter)(), k = (0,
            a.useRef)(null), S = (0,
            a.useRef)(null), E = (0,
            r.I0)(), P = (0,
            r.v9)((function(n) {
                return n.play.consoleHeaderRef
            }
            )), T = (0,
            r.v9)((function(n) {
                return n.ads.inGameAd
            }
            )), C = s.ZP.countryCode, D = (0,
            r.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            )), I = (0,
            r.v9)((function(n) {
                return n.play.isRecording
            }
            )), R = (0,
            r.v9)((function(n) {
                return n.play.isRecordingProcessing
            }
            )), O = (0,
            r.v9)((function(n) {
                return n.play.showBackbtn
            }
            )), L = (0,
            r.v9)((function(n) {
                return n.play.gameDisplayed
            }
            )), M = (0,
            r.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), B = (0,
            r.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), X = null === (i = null === (t = null === (e = s.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled, N = (0,
            r.v9)((function(n) {
                return n.play.mouseLockActive
            }
            )), K = (0,
            r.v9)((function(n) {
                return n.play.recordingUploadInProgress
            }
            )), j = (0,
            u.$h)() ? 0 : 46, z = (0,
            a.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            }), Y = z[0], H = z[1], _ = ((null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.appInfo) || {}).appType, F = function() {
                setTimeout((function() {
                    var n = o.Z.getState().play.videoRef;
                    if (n && n.current) {
                        var e = n.current;
                        H({
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
            a.useEffect)((function() {
                return F(),
                window.addEventListener("resizeDone", F),
                E({
                    type: c.Z.SET_REF,
                    payload: {
                        consoleFooterRef: k
                    }
                }),
                function() {
                    window.removeEventListener("resizeDone", F)
                }
            }
            ), []),
            (0,
            a.useEffect)((function() {
                var n = function(n) {
                    var e = n.target;
                    "js-game-video" === (null === e || void 0 === e ? void 0 : e.id) && D && E({
                        type: c.Z.SET_SENSITIVITY_POPUP,
                        payload: {
                            isSensitivityPopupOpen: !1
                        }
                    })
                };
                return window.addEventListener("pointerdown", n),
                function() {
                    window.removeEventListener("pointerdown", n)
                }
            }
            ), [D]);
            var U = !(null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.isAppPage) && (0,
            h.hu)()
              , W = ((null === (m = null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.appInfo) || void 0 === m ? void 0 : m.playFeFeatures) || {}).enableTestDriveUi
              , G = v(v({
                top: U ? Y.top - Y.height - (X ? j : (null === (x = null === P || void 0 === P ? void 0 : P.current) || void 0 === x ? void 0 : x.clientHeight) || 0) : (0,
                s.DJ)() || T !== d.V ? Y.top - (X ? j : (null === (y = null === P || void 0 === P ? void 0 : P.current) || void 0 === y ? void 0 : y.clientHeight) || 0) : Y.top - Y.height,
                width: U ? "auto" : Y.width,
                height: U ? Y.height : "auto",
                left: U ? Y.right : Y.left,
                flexDirection: U ? "column" : "row"
            }, Z), A.pathname.includes("/apps/") && "Html" !== _ ? {
                top: "calc(50% + ".concat(U ? 0 : Y.height / 2, "px)"),
                transform: "translateY(-50%)"
            } : {});
            return (0,
            g.BX)(g.HY, {
                children: [U && (0,
                g.tZ)(f.$_, {
                    ref: S,
                    className: "footer",
                    id: "ng-left-control-bar",
                    style: v(v({}, G), {
                        left: Y.left - ((null === (w = S.current) || void 0 === w ? void 0 : w.getBoundingClientRect().width) || 0)
                    }),
                    children: (0,
                    g.tZ)(f.ZX, {
                        isH5Game: (0,
                        s.DJ)(),
                        showActionSidebar: U,
                        style: U ? {
                            height: "100%",
                            justifyContent: "space-between",
                            width: "100%"
                        } : {},
                        children: (0,
                        g.tZ)(l.GlobalActions, {
                            showBackBtn: O && M && L && B,
                            countryCode: C,
                            widget: !1,
                            isPortrait: U,
                            style: {
                                height: "100%"
                            }
                        })
                    })
                }), (0,
                g.tZ)(f.$_, {
                    ref: k,
                    className: "footer",
                    id: "ng-control-bar",
                    style: G,
                    children: (0,
                    g.BX)(f.ZX, {
                        isH5Game: (0,
                        s.DJ)(),
                        showActionSidebar: U,
                        isRecording: I,
                        isRecordingProcessing: R,
                        isMouseLock: N,
                        recordUploadInProgess: K,
                        style: U ? {
                            height: "100%",
                            justifyContent: "space-between",
                            width: "100%"
                        } : {},
                        children: [!U && (0,
                        g.tZ)(l.GlobalActions, {
                            showBackBtn: O && M && L && B,
                            widget: !1,
                            isPortrait: U,
                            countryCode: C,
                            testDriveUi: W
                        }), (0,
                        g.tZ)(l.GameActions, {
                            widget: !1,
                            isPortrait: U
                        })]
                    })
                })]
            })
        }
    },
    39600: function(n, e, t) {
        t.d(e, {
            _: function() {
                return x
            }
        });
        var i = t(94405)
          , o = t(66971)
          , r = t(77691)
          , a = t(11720)
          , l = t(25617)
          , d = t(40434)
          , c = t(50912)
          , s = t(52353)
          , u = t.n(s)
          , p = t(45628)
          , f = t(45220)
          , h = t.n(f)
          , g = t(78294)
          , v = t(97997)
          , m = function() {
            return (m = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }
          , x = function(n) {
            var e = n.children
              , t = n.style
              , s = void 0 === t ? {} : t
              , f = n.className
              , x = void 0 === f ? "" : f
              , y = n.setCoordinates
              , w = n.onRender
              , b = (0,
            a.useRef)(null)
              , Z = (0,
            a.useContext)(i.Z)
              , A = Z.widgets;
            (h()(A) || u()(A)) && (Z.widgets = {
                mobileMenu: {
                    left: 10,
                    top: 8
                },
                desktopFullScreen: {
                    left: 10,
                    top: 8
                }
            }),
            A = Z.widgets;
            var k = (0,
            l.I0)()
              , S = 0
              , E = 0
              , P = 0
              , T = 0
              , C = !1;
            function D(n, e) {
                (null === b || void 0 === b ? void 0 : b.current) && (b.current.style.transform = "translate3d(".concat(n, "px, ").concat(e, "px, 0)"),
                (0,
                r.tq)() && "slow-network-drag" === x && (b.current.style.left = "unset",
                b.current.style.top = "unset"))
            }
            function I(n) {
                var e, t, i = c.Z.getState().play.orientation;
                n.preventDefault();
                var o = (null === (e = null === b || void 0 === b ? void 0 : b.current) || void 0 === e ? void 0 : e.clientHeight) || 0
                  , r = (null === (t = null === b || void 0 === b ? void 0 : b.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                if ("touchmove" === n.type) {
                    var a = n;
                    if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === p.cj.landscape) {
                        if (a.touches[0].clientX - o < 5 && a.touches[0].clientY - 10 < 5 || window.innerWidth - a.touches[0].clientX < 10 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientX - o < 5 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientY - 10 < 5 && window.innerWidth - a.touches[0].clientX < 10)
                            return;
                        if (a.touches[0].clientX - o < 5)
                            return S = a.touches[0].clientY,
                            E = window.innerWidth - o - 5,
                            void D(S, E);
                        if (a.touches[0].clientY - 10 < 5)
                            return S = 5,
                            E = window.innerWidth - a.touches[0].clientX,
                            void D(S, E);
                        if (window.innerWidth - a.touches[0].clientX < 10)
                            return void D(S = a.touches[0].clientY, E = 10);
                        if (window.innerHeight - a.touches[0].clientY < r + 10)
                            return S = window.innerHeight - r - 10,
                            E = window.innerWidth - a.touches[0].clientX,
                            void D(S, E);
                        S = a.touches[0].clientY,
                        E = window.innerWidth - a.touches[0].clientX
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === p.cj.landscape) {
                        if (a.touches[0].clientX - 10 < 5 && a.touches[0].clientY < 5 || window.innerWidth - a.touches[0].clientX < r + 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientX - 10 < 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientY < 5 && window.innerWidth - a.touches[0].clientX < r + 5)
                            return;
                        if (a.touches[0].clientX - 10 < 5)
                            return S = 5,
                            E = a.targetTouches[0].clientY,
                            void D(S, E);
                        if (a.touches[0].clientY < 5)
                            return void D(S = a.targetTouches[0].clientX, E = 5);
                        if (window.innerWidth - a.touches[0].clientX < r + 5)
                            return S = window.innerWidth - r - 5,
                            E = a.targetTouches[0].clientY,
                            void D(S, E);
                        if (window.innerHeight - a.touches[0].clientY < o + 5)
                            return S = a.targetTouches[0].clientX,
                            E = window.innerHeight - o - 5,
                            void D(S, E);
                        S = a.targetTouches[0].clientX,
                        E = a.targetTouches[0].clientY
                    } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === p.cj.portrait) {
                        if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 || a.touches[0].clientX > window.innerWidth - (r + 5) && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientX < 5 && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientY < 5 && a.touches[0].clientX > window.innerWidth - (r + 5))
                            return;
                        if (a.touches[0].clientX < 5)
                            return S = 5,
                            E = a.touches[0].clientY,
                            void D(S, E);
                        if (a.touches[0].clientY < 5)
                            return void D(S = a.touches[0].clientX, E = 5);
                        if (a.touches[0].clientX > window.innerWidth - (r + 5))
                            return S = window.innerWidth - (r + 5),
                            E = a.touches[0].clientY,
                            void D(S, E);
                        if (a.touches[0].clientY > window.innerHeight - (o + 5))
                            return S = a.touches[0].clientX,
                            E = window.innerHeight - (o + 5),
                            void D(S, E);
                        S = a.touches[0].clientX,
                        E = a.touches[0].clientY
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === p.cj.portrait) {
                        if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 + r || a.touches[0].clientX < 5 && a.touches[0].clientY + 5 > window.innerHeight || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY < 5 + r || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY + 5 > window.innerHeight)
                            return;
                        if (a.touches[0].clientX < 5)
                            return void D(S = window.innerHeight - a.targetTouches[0].clientY, E = 5);
                        if (a.touches[0].clientY < 5 + r)
                            return S = window.innerHeight - (5 + r),
                            E = a.targetTouches[0].clientX,
                            void D(S, E);
                        if (a.touches[0].clientX > window.innerWidth - (o + 5))
                            return S = window.innerHeight - a.targetTouches[0].clientY,
                            E = window.innerWidth - (o + 5),
                            void D(S, E);
                        if (a.touches[0].clientY + 5 > window.innerHeight)
                            return S = 5,
                            E = a.targetTouches[0].clientX,
                            void D(S, E);
                        S = window.innerHeight - a.targetTouches[0].clientY,
                        E = a.targetTouches[0].clientX
                    }
                } else {
                    if ((a = n).clientX - r < 5 || a.clientY < 20)
                        return;
                    if (window.innerWidth - a.clientX < 20 || window.innerHeight - a.clientY < o - 20)
                        return;
                    S = a.clientX - P,
                    E = a.clientY - T,
                    C = !0
                }
                D(S, E)
            }
            var R = function() {
                k({
                    type: o.Z.DRAGGABLE,
                    payload: {
                        draggableState: C ? "drag" : "click"
                    }
                })
            };
            function O(n) {
                C = !1,
                R(),
                P = S,
                T = E,
                y && k({
                    type: d.Z.FS_WIDGET,
                    payload: {
                        fsWidget: {
                            x: Math.round(P / window.innerWidth * 100),
                            y: Math.round(T / window.innerHeight * 100)
                        }
                    }
                }),
                "touchend" === n.type && (S = 0,
                E = 0),
                document.removeEventListener("mouseup", O, !0),
                document.removeEventListener("mousemove", I, !1)
            }
            function L(n) {
                var e = c.Z.getState().play.orientation;
                (0,
                g.DJ)() && ((e === p.cj.landscape ? 90 : 0) !== window.orientation && k({
                    type: o.Z.UPDATE_ORIENTATION,
                    payload: {
                        orientation: 90 === window.orientation ? p.cj.landscape : p.cj.portrait
                    }
                }));
                if ("mousedown" === n.type) {
                    var t = n
                      , i = t.target;
                    if ("ng-vol" === i.id || "volume-slider" === i.id || "sensitivity-slider" === i.id || "sensitivty-box" === i.id)
                        return;
                    C = !1,
                    R(),
                    P = t.clientX - S,
                    T = t.clientY - E
                }
                document.addEventListener("mousemove", I, !1),
                document.addEventListener("mouseup", O, !0)
            }
            return (0,
            a.useEffect)((function() {
                w && b.current && w(b.current),
                localStorage.removeItem("jsFsWidgetCoordinateObj");
                var n = null === b || void 0 === b ? void 0 : b.current
                  , e = A.mobileMenu
                  , t = void 0 === e ? {
                    left: 10,
                    top: 10
                } : e;
                if ((0,
                r.tq)() && "slow-network-drag" !== x && (S = (null === t || void 0 === t ? void 0 : t.left) || 10,
                E = (null === t || void 0 === t ? void 0 : t.top) || 10,
                D(S, E)),
                y) {
                    u()(c.Z.getState().appPreferences.fsWidget) && k({
                        type: d.Z.FS_WIDGET,
                        payload: {
                            fsWidget: {
                                x: 70,
                                y: 20
                            }
                        }
                    });
                    var i = c.Z.getState().appPreferences.fsWidget || {
                        x: 70,
                        y: 20
                    }
                      , o = i.x
                      , a = i.y
                      , l = Math.round(window.innerWidth / 100 * o)
                      , s = Math.round(window.innerHeight / 100 * a);
                    D(l, s),
                    S = l,
                    E = s
                }
                return null === n || void 0 === n || n.addEventListener("touchstart", L, !1),
                null === n || void 0 === n || n.addEventListener("touchend", O, !1),
                null === n || void 0 === n || n.addEventListener("touchmove", I, !1),
                null === n || void 0 === n || n.addEventListener("mousedown", L),
                function() {
                    null === n || void 0 === n || n.removeEventListener("touchstart", L, !1),
                    null === n || void 0 === n || n.removeEventListener("touchend", O, !1),
                    null === n || void 0 === n || n.removeEventListener("touchmove", I, !1),
                    null === n || void 0 === n || n.removeEventListener("mousedown", L, !1)
                }
            }
            ), []),
            (0,
            v.tZ)("div", {
                ref: b,
                className: "drag-react ".concat(x),
                style: m({
                    position: "fixed",
                    zIndex: 13
                }, s),
                children: e
            })
        }
    },
    55072: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return B
            }
        });
        var i, o, r, a, l, d, c, s, u, p, f, h = t(16678), g = t(22012), v = t(94564), m = t(94381), x = t(77691), y = t(89598), w = t(1653), b = t(78294), Z = t(11720), A = t(26793), k = t(50445), S = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, E = (0,
        k.iv)(i || (i = S(["\n   max-height: 95vh;\n   width: 440px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 440px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))), P = k.ZP.div(o || (o = S(["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"], ["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"]))), T = k.ZP.div(a || (a = S(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .appIcon {\n        width: 140px;\n        aspect-ratio: 1;\n        margin-bottom: 24px;\n        border-radius: 8px;\n        ", "\n     }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .appIcon {\n        width: 140px;\n        aspect-ratio: 1;\n        margin-bottom: 24px;\n        border-radius: 8px;\n        ", "\n     }\n"])), (function(n) {
            return !n.isDesktop && (0,
            k.iv)(r || (r = S(["\n            margin-bottom: 16px;\n            width: 100px;\n            @media screen and (orientation: landscape) {\n                width: 80px;\n                margin-bottom: 8px;\n            }\n        "], ["\n            margin-bottom: 16px;\n            width: 100px;\n            @media screen and (orientation: landscape) {\n                width: 80px;\n                margin-bottom: 8px;\n            }\n        "])))
        }
        )), C = k.ZP.p(d || (d = S(["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 150%;\n    color: #fff;\n    margin-top: 24px;\n    margin-bottom: 16px;\n    text-align: center;\n    ", "\n"], ["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 150%;\n    color: #fff;\n    margin-top: 24px;\n    margin-bottom: 16px;\n    text-align: center;\n    ", "\n"])), (function(n) {
            return !n.isDesktop && (0,
            k.iv)(l || (l = S(["\n        margin-top: 16px;\n        @media screen and (orientation: landscape) {\n            margin-top: 8px;\n            margin-bottom: 8px;\n        }\n    "], ["\n        margin-top: 16px;\n        @media screen and (orientation: landscape) {\n            margin-top: 8px;\n            margin-bottom: 8px;\n        }\n    "])))
        }
        )), D = k.ZP.button(c || (c = S(["\n    color: #fff;\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 150%;\n    background-color: #FF42A5;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    padding: 12px;\n    width: 100%;\n    display: flex;\n    border: none;\n    flex-grow: 1;\n    justify-content: center;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n"], ["\n    color: #fff;\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 150%;\n    background-color: #FF42A5;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    padding: 12px;\n    width: 100%;\n    display: flex;\n    border: none;\n    flex-grow: 1;\n    justify-content: center;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n"]))), I = k.ZP.div(s || (s = S(["\n", "\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"], ["\n", "\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"])), (function(n) {
            var e = n.desktopBanner;
            return " background: url(".concat(e, ") center center / cover no-repeat rgba(0, 0, 0, 0.7); ")
        }
        )), R = k.ZP.div(u || (u = S(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"]))), O = k.ZP.div(p || (p = S(["\n   padding: 12px;\n   border-radius: 24px;\n   background-color: #fff;\n"], ["\n   padding: 12px;\n   border-radius: 24px;\n   background-color: #fff;\n"]))), L = k.ZP.p(f || (f = S(["\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n"], ["\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n"]))), M = t(97997), B = function() {
            var n, e, t = (0,
            Z.useState)(!1), i = t[0], o = t[1], r = (b.ZP.appInfo.media || {}).desktop;
            (0,
            Z.useEffect)((function() {
                (0,
                y.L9)(m.S5, {
                    element: "ErrorScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })
            }
            ), []);
            var a = !(0,
            x.tq)() && !(0,
            x.Em)() && !(0,
            x.zc)()
              , l = (0,
            x.Ij)()
              , d = (0,
            A.$)().t
              , c = {
                backgroundImage: "unset",
                color: "unset",
                margin: "0",
                padding: a ? "32px 70px" : "24px 40px",
                backgroundColor: "unset",
                backdropFilter: "blur(12px)",
                overflow: "visible"
            }
              , s = null === (n = b.ZP.appInfo.playFeFeatures.tryAndDownload) || void 0 === n ? void 0 : n.clientLink;
            return (0,
            M.BX)(I, {
                desktopBanner: null === r || void 0 === r ? void 0 : r.banner,
                children: [(0,
                M.tZ)(P, {
                    className: "nowggLogo",
                    children: (0,
                    M.tZ)(h.Z, {
                        themeType: "light",
                        hasTagline: !1
                    })
                }), (0,
                M.tZ)(g.Z, {
                    modalStyles: E,
                    contentStyle: c,
                    children: (0,
                    M.BX)(T, {
                        isDesktop: a,
                        children: [(0,
                        M.tZ)("img", {
                            src: b.ZP.appInfo.media.icon,
                            alt: d("appIcon"),
                            className: "appIcon"
                        }), (0,
                        M.tZ)(v.Bb, {
                            children: (0,
                            M.tZ)("span", {
                                style: {
                                    color: "#ffffff",
                                    display: "flex",
                                    textAlign: "center"
                                },
                                children: null === (e = b.ZP.appInfo) || void 0 === e ? void 0 : e.appName
                            })
                        }), (0,
                        M.tZ)(C, {
                            isDesktop: a,
                            children: d("notSupported")
                        }), !i && (0,
                        M.tZ)(D, {
                            onClick: function() {
                                var n = sessionStorage.getItem("isEmbeddedFrame");
                                a ? s && !(0,
                                x.dl)() ? n ? window.open(s, "_parent", "noreferrer") : window.open(s, "_self", "noreferrer") : o(!0) : (0,
                                x.Cf)(),
                                (0,
                                y.L9)(m.S5, {
                                    element: "ErrorScreen",
                                    action: "InstallNowClicked",
                                    group: "TryAndDownload"
                                })
                            },
                            children: d("install")
                        }), i && (0,
                        M.BX)(R, {
                            children: [(0,
                            M.tZ)(L, {
                                children: d("scanPhone")
                            }), (0,
                            M.tZ)(O, {
                                children: (0,
                                M.tZ)(w.Z, {
                                    size: 176,
                                    style: {
                                        height: "176px",
                                        width: "176px"
                                    },
                                    value: "mac" === l || "ios" === l ? b.ZP.appInfo.appleAppStoreUrl : b.ZP.appInfo.googlePlayStoreUrl
                                })
                            })]
                        })]
                    })
                })]
            })
        }
    },
    82087: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return u
            }
        });
        var i, o, r = t(22033), a = (t(11720),
        t(50445)), l = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, d = a.ZP.div(i || (i = l(["\n    position: absolute; \n    width: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    z-index:9;\n    display : flex;\n    justify-content: center;\n"], ["\n    position: absolute; \n    width: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    z-index:9;\n    display : flex;\n    justify-content: center;\n"]))), c = a.ZP.div(o || (o = l(["\n    background: rgba(0,0,0,0.7);\n    z-index:9;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n"], ["\n    background: rgba(0,0,0,0.7);\n    z-index:9;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n"]))), s = t(97997), u = function() {
            return (0,
            s.BX)(s.HY, {
                children: [(0,
                s.tZ)(c, {}), (0,
                s.tZ)(d, {
                    children: (0,
                    s.tZ)(r.Z, {})
                })]
            })
        }
    },
    57180: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return S
            }
        });
        var i, o, r, a, l, d = t(59930), c = t(94564), s = t(66971), u = t(40942), p = t(89598), f = t(78294), h = t(11720), g = t(26793), v = t(25617), m = t(50445), x = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, y = m.ZP.div(i || (i = x(["\n    position: fixed;\n    top: 5px;\n    right: 76px;\n    width: 375px;\n    padding: 20px 16px;\n    z-index: 222;\n    border-radius: 6px;\n    background: #464646;\n    color: ", ";\n\n    > i {\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n    }\n"], ["\n    position: fixed;\n    top: 5px;\n    right: 76px;\n    width: 375px;\n    padding: 20px 16px;\n    z-index: 222;\n    border-radius: 6px;\n    background: #464646;\n    color: ", ";\n\n    > i {\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), w = m.ZP.div(o || (o = x(["\n  display: flex;\n  margin: 16px 0 20px;\n  h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n  p {\n    color: ", ";\n    font-size: 14px;\n  }\n"], ["\n  display: flex;\n  margin: 16px 0 20px;\n  h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n  p {\n    color: ", ";\n    font-size: 14px;\n  }\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), b = m.ZP.div(r || (r = x(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"]))), Z = m.ZP.div(a || (a = x(["\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  overflow: hidden;\n"], ["\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  overflow: hidden;\n"]))), A = m.ZP.button(l || (l = x(["\n  -webkit-appearance: button;\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: ", ";\n  min-width: 87px;\n  border: 0.5px solid #dbdce0;\n  background: transparent;\n  cursor: pointer;\n\n  &.ok {\n    background: #3773e0;\n    margin-left: 10px;\n    border: none;\n  }\n"], ["\n  -webkit-appearance: button;\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: ", ";\n  min-width: 87px;\n  border: 0.5px solid #dbdce0;\n  background: transparent;\n  cursor: pointer;\n\n  &.ok {\n    background: #3773e0;\n    margin-left: 10px;\n    border: none;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), k = t(97997), S = function() {
            var n = (0,
            g.$)().t
              , e = (0,
            v.I0)()
              , t = (0,
            v.v9)((function(n) {
                return n.play.showPwaPrompt
            }
            ));
            (0,
            h.useEffect)((function() {
                t && (0,
                p.L9)("PwaNudgeDisplayed")
            }
            ), [t]);
            var i = function() {
                e({
                    type: s.Z.PWA_PROMPT_STATUS,
                    payload: {
                        showPwaPrompt: !1
                    }
                })
            }
              , o = function() {
                (0,
                p.L9)("PwaNudgeDismissed"),
                i()
            };
            return (0,
            k.tZ)(k.HY, {
                children: t && (0,
                k.BX)(y, {
                    children: [(0,
                    k.tZ)(c.T4, {
                        children: n("pwaTitle")
                    }), (0,
                    k.tZ)(d.Z, {
                        size: 16,
                        style: {
                            cursor: "pointer"
                        },
                        name: "cross-thin",
                        onClick: o
                    }), (0,
                    k.BX)(w, {
                        children: [(0,
                        k.tZ)(Z, {
                            children: (0,
                            k.tZ)("img", {
                                alt: f.ZP.appInfo.appName,
                                src: f.ZP.appInfo.media.icon,
                                width: 48,
                                height: 48
                            })
                        }), (0,
                        k.BX)("div", {
                            style: {
                                marginLeft: "12px"
                            },
                            children: [(0,
                            k.tZ)(c.T5, {
                                children: f.ZP.appInfo.appName
                            }), (0,
                            k.tZ)(c.kk, {
                                children: "now.gg"
                            })]
                        })]
                    }), (0,
                    k.BX)(b, {
                        children: [(0,
                        k.tZ)(A, {
                            id: "cancelPWAPopupBtn",
                            onClick: o,
                            children: n("cancel")
                        }), (0,
                        k.tZ)(A, {
                            className: "ok",
                            onClick: function() {
                                (0,
                                p.L9)("PwaNudgeAccepted"),
                                i(),
                                (0,
                                u.QB)()
                            },
                            children: n("yes")
                        })]
                    })]
                })
            })
        }
    },
    96183: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return Q
            }
        });
        var i, o, r, a, l, d, c, s = t(78294), u = t(16678), p = t(39600), f = t(80252), h = t(3053), g = t(79717), v = t(45628), m = t(50912), x = t(11720), y = t(77691), w = t(25617), b = t(39475), Z = t(79354), A = t(59930), k = t(58309), S = t(95860), E = t(50445), P = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, T = E.ZP.ul(i || (i = P(["\n  width: 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: ", ";\n  border-radius: 8px 8px 100px 100px;\n  gap: 16px;\n  border: 1px solid #FFFFFF33;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\n              linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));\n"], ["\n  width: 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: ", ";\n  border-radius: 8px 8px 100px 100px;\n  gap: 16px;\n  border: 1px solid #FFFFFF33;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\n              linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));\n"])), (function(n) {
            return n.expanded ? "12px 0 8px" : "16px 0 8px"
        }
        )), C = E.ZP.li(o || (o = P(["\n  cursor: pointer;\n  color: ", ";\n  width: 24px;\n  height: 24px;\n  list-style: none;\n  position: relative;\n\n  button {\n    width: 24px;\n    height: 24px;\n\n    &:hover {\n      background: transparent;\n    }\n  }\n\n  div {\n    margin: 0px;\n  }\n"], ["\n  cursor: pointer;\n  color: ", ";\n  width: 24px;\n  height: 24px;\n  list-style: none;\n  position: relative;\n\n  button {\n    width: 24px;\n    height: 24px;\n\n    &:hover {\n      background: transparent;\n    }\n  }\n\n  div {\n    margin: 0px;\n  }\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), D = (0,
        E.ZP)(C)(r || (r = P(["\n  width: 40px;\n  height: 30px;\n  position: relative;\n\n  i {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  width: 40px;\n  height: 30px;\n  position: relative;\n\n  i {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"]))), I = E.ZP.span(l || (l = P(["\n  ", "\n  height: 100%;\n  transition: all 0.3s ease-out;\n\n  ", "\n"], ["\n  ", "\n  height: 100%;\n  transition: all 0.3s ease-out;\n\n  ", "\n"])), S.be, (function(n) {
            return n.clicked && (0,
            E.iv)(a || (a = P(["\n    transform: rotate(180deg);\n  "], ["\n    transform: rotate(180deg);\n  "])))
        }
        )), R = T, O = t(20948), L = t(25186), M = t(50855), B = t(77360), X = t(53574), N = t(12812), K = t(94564), j = t(13978), z = t(49555), Y = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, H = E.ZP.span(d || (d = Y(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n"], ["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n"]))), _ = E.ZP.div(c || (c = Y(["\n  width: 204px;\n  position: absolute;\n  left: 48px;\n  top: 0;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n  padding: 18px;\n  color: ", ';\n\n  h4 {\n    margin-bottom: 8px;\n  }\n\n  p {\n    text-align: left;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    transform: translateX(-100%);\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent; \n    \n    border-right: 10px solid #4D555D;   \n  }\n'], ["\n  width: 204px;\n  position: absolute;\n  left: 48px;\n  top: 0;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n  padding: 18px;\n  color: ", ';\n\n  h4 {\n    margin-bottom: 8px;\n  }\n\n  p {\n    text-align: left;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    transform: translateX(-100%);\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent; \n    \n    border-right: 10px solid #4D555D;   \n  }\n'])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), F = t(97997), U = function() {
            var n = (0,
            x.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = localStorage.getItem("fe-explore-games-tooltip-shown");
            (0,
            x.useEffect)((function() {
                return i || document.body.classList.add("body-overlay"),
                function() {
                    document.body.classList.remove("body-overlay")
                }
            }
            ), []);
            return (0,
            F.BX)(F.HY, {
                children: [(0,
                F.tZ)(H, {
                    onClick: function() {
                        t(!0),
                        localStorage.setItem("fe-explore-games-tooltip-shown", "true"),
                        document.body.classList.remove("body-overlay")
                    },
                    children: (0,
                    F.tZ)(Z.WD, {})
                }), !i && (0,
                F.BX)(_, {
                    children: [(0,
                    F.tZ)(K.js, {
                        children: (0,
                        j.t)("exploreMoreGames")
                    }), (0,
                    F.tZ)(K.lU, {
                        children: (0,
                        j.t)("exploreTooltipText")
                    })]
                }), (0,
                F.tZ)(N.Z, {
                    toggle: e,
                    exitingCallBack: function() {
                        setTimeout((function() {
                            (0,
                            z.Ul)(),
                            (0,
                            z.m7)()
                        }
                        ), 1e3)
                    },
                    children: (0,
                    F.tZ)(X.Z, {
                        close: function() {
                            return t(!1)
                        }
                    })
                })]
            })
        }, W = t(61740), G = function(n) {
            var e = n.clicked
              , t = n.handleInfoIconClick
              , i = n.onButtonClicked
              , o = (0,
            x.useState)()
              , r = o[0]
              , a = o[1]
              , l = (0,
            w.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , d = (0,
            x.useCallback)((function() {
                if (r) {
                    var n = r
                      , e = n.getBoundingClientRect();
                    if (window.innerHeight > window.innerWidth && 0 === window.orientation && l === v.cj.landscape) {
                        if (e && e.left < 0) {
                            var t = window.innerWidth - n.offsetHeight;
                            n.style.transform = "translate3d(".concat(e.top, "px, ").concat(t > 0 ? t : 0, "px, 0)")
                        }
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && l === v.cj.landscape) {
                        if (window.innerHeight - e.top < n.offsetHeight) {
                            t = window.innerHeight - n.offsetHeight;
                            n.style.transform = "translate3d(".concat(e.left, "px, ").concat(t > 0 ? t : 0, "px, 0)")
                        }
                    } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && l === v.cj.portrait) {
                        if (window.innerHeight - e.top < n.offsetHeight) {
                            var i = e.left;
                            t = window.innerHeight - n.offsetHeight;
                            n.style.transform = "translate3d(".concat(i, "px, ").concat(t > 0 ? t : 0, "px, 0)")
                        }
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && l === v.cj.portrait && window.innerWidth - e.left < n.offsetHeight) {
                        i = window.innerWidth - n.offsetHeight,
                        t = window.innerHeight - e.top - n.offsetWidth;
                        n.style.transform = "translate3d(".concat(t, "px, ").concat(i > 0 ? i : 0, "px, 0)")
                    }
                }
            }
            ), [r, l]);
            (0,
            x.useEffect)((function() {
                e && d()
            }
            ), [e, d]);
            var c = (0,
            w.v9)((function(n) {
                return n.user.loginNotificationCount
            }
            ))
              , S = (0,
            w.v9)((function(n) {
                return n.user.lastLoginNotifDate
            }
            ))
              , E = (0,
            w.v9)((function(n) {
                return n.play.iapUserLogin
            }
            ))
              , P = (0,
            w.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , T = (0,
            x.useState)(null)
              , X = (T[0],
            T[1])
              , N = (0,
            x.useState)(!1)
              , K = N[0]
              , j = N[1]
              , z = (0,
            x.useState)(!1)
              , Y = z[0]
              , H = z[1]
              , _ = sessionStorage.getItem("isEmbeddedFrame");
            return (0,
            x.useEffect)((function() {
                j(c < 3 && (0,
                f.J)(S, (new Date).toDateString()))
            }
            ), []),
            (0,
            x.useEffect)((function() {
                K && m.Z.dispatch({
                    type: h.Z.LOGIN_NOTIF_UPDATE,
                    payload: {
                        loginNotificationCount: c + 1,
                        lastLoginNotifDate: (new Date).toDateString()
                    }
                })
            }
            ), [K]),
            (0,
            x.useEffect)((function() {
                var n = P ? (0,
                k.et)() : null;
                n && X(n)
            }
            ), []),
            (0,
            F.tZ)(p._, {
                onRender: function(n) {
                    return a(n)
                },
                style: (0,
                y.Tt)() ? {
                    touchAction: "manipulation"
                } : {},
                children: (0,
                F.BX)(R, {
                    expanded: e,
                    children: [e ? (0,
                    F.BX)(D, {
                        onClick: t,
                        children: [(0,
                        F.tZ)(u.Z, {
                            orientation: "vertical",
                            hasTagline: !1,
                            themeType: "light"
                        }), (0,
                        F.tZ)(A.Z, {
                            name: "info",
                            size: 6
                        })]
                    }) : (0,
                    F.tZ)(F.HY, {}), (0,
                    y.Qx)() ? (0,
                    F.tZ)(C, {
                        id: "ng-fs",
                        children: (0,
                        F.tZ)(W.Z, {})
                    }, "ng-fs") : (0,
                    F.tZ)(F.HY, {}), e || (0,
                    s.DJ)() ? (0,
                    F.tZ)(F.HY, {}) : (0,
                    F.tZ)(C, {
                        children: (0,
                        F.tZ)(b.Z, {})
                    }), (0,
                    s.DJ)() || _ || !e ? (0,
                    F.tZ)(F.HY, {}) : (0,
                    F.BX)(C, {
                        id: "ng-profile",
                        onClick: function() {
                            H(!0)
                        },
                        children: [(0,
                        F.tZ)(O.Z, {}), (0,
                        F.tZ)(B.F9, {
                            style: {
                                display: K && !Y ? "block" : "none",
                                top: "0",
                                right: "0"
                            }
                        })]
                    }, "ng-profile"), (0,
                    s.DJ)() || _ && "nowgg" !== _ || !(0,
                    y.Tt)() ? (0,
                    F.tZ)(F.HY, {}) : (0,
                    F.tZ)(C, {
                        id: "ng-sound",
                        children: (0,
                        F.tZ)(L.Z, {
                            showSlider: !1
                        })
                    }, "ng-sound"), e && !_ ? (0,
                    F.tZ)(C, {
                        id: "ng-support",
                        children: (0,
                        F.tZ)(M.Z, {
                            type: "support"
                        })
                    }, "ng-support") : (0,
                    F.tZ)(F.HY, {}), e && !(0,
                    y.$h)() ? (0,
                    F.tZ)(C, {
                        style: {
                            padding: 0
                        },
                        children: (0,
                        F.tZ)(U, {})
                    }, "ng-game-category") : (0,
                    F.tZ)(F.HY, {}), !E && e && s.ZP.appInfo.iapLoginPromptEnabled ? (0,
                    F.tZ)(C, {
                        children: (0,
                        F.tZ)(g.Z, {})
                    }, "ng-iap") : (0,
                    F.tZ)(F.HY, {}), e && "Html" !== s.ZP.appInfo.appType ? (0,
                    F.tZ)(C, {
                        children: (0,
                        F.tZ)(b.Z, {})
                    }) : (0,
                    F.tZ)(F.HY, {}), (0,
                    F.tZ)(C, {
                        children: (0,
                        F.tZ)(I, {
                            clicked: e,
                            onClick: i,
                            children: (0,
                            F.tZ)(Z.pL, {
                                color: "white50"
                            })
                        })
                    }, "ng-down-arrow")]
                })
            })
        }, V = t(1883), q = t(71174), Q = function(n) {
            var e, t, i = n.clicked, o = n.handleInfoIconClick, r = n.onButtonClicked, a = null === (t = null === (e = s.ZP.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.tryAndDownload) || void 0 === t ? void 0 : t.isEnabled;
            return (0,
            y.tq)() ? (0,
            F.BX)(F.HY, {
                children: [(0,
                F.tZ)(G, {
                    clicked: i,
                    handleInfoIconClick: o,
                    onButtonClicked: r
                }), a && !(0,
                y.$h)() && (0,
                F.tZ)(q.Z, {})]
            }) : a && !(0,
            y.$h)() ? (0,
            F.tZ)(q.Z, {}) : (0,
            y.SR)() && !(0,
            y.$h)() ? (0,
            F.tZ)(V.e, {}) : null
        }
    },
    93056: function(n, e, t) {
        t.r(e),
        t.d(e, {
            PlayPage: function() {
                return Dg
            },
            default: function() {
                return Ig
            }
        });
        var i, o, r, a, l, d, c, s, u, p, f, h, g, v, m, x, y, w, b, Z, A, k, S, E, P, T, C, D, I, R, O, L, M, B, X, N, K, j, z, Y, H, _, F, U, W, G, V, q, Q, J, $, nn, en, tn, on, rn, an, ln, dn, cn, sn, un, pn, fn, hn, gn, vn, mn, xn, yn, wn, bn, Zn, An, kn, Sn, En, Pn, Tn, Cn, Dn, In, Rn, On, Ln, Mn, Bn, Xn, Nn, Kn, jn, zn, Yn, Hn, _n, Fn, Un, Wn, Gn, Vn, qn, Qn, Jn, $n, ne, ee, te, ie, oe, re, ae, le, de, ce, se, ue, pe, fe, he, ge, ve, me, xe, ye, we, be, Ze, Ae, ke, Se, Ee, Pe, Te, Ce, De, Ie, Re, Oe, Le, Me, Be, Xe, Ne, Ke, je, ze, Ye = t(11720), He = t(25617), _e = t(64857), Fe = t(82132), Ue = t(78294), We = t(10020), Ge = t(77691), Ve = t(89598), qe = t(45628), Qe = t(50445), Je = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, $e = Qe.ZP.div(i || (i = Je(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: ", ";\n  height: ", ";\n  .preroll-wrapper-videoplayer-dimensions {\n    height: ", ";\n    padding: ", ";\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: ", ";\n  height: ", ";\n  .preroll-wrapper-videoplayer-dimensions {\n    height: ", ";\n    padding: ", ";\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"])), (function(n) {
            return n.isAppPage ? "100% !important" : ""
        }
        ), (function(n) {
            return n.isAppPage ? "100% !important" : ""
        }
        ), (function(n) {
            return n.isAppPage ? "100% !important" : ""
        }
        ), (function(n) {
            return n.isAppPage ? "0 !important" : ""
        }
        )), nt = $e, et = t(97997), tt = function() {
            return (tt = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, it = 0, ot = function(n) {
            var e, t, i, o, r, a, l = n.adsError, d = n.setAdsMuted, c = n.setAdStart, s = n.adsEnded, u = n.isAppPage, p = (0,
            He.I0)(), f = (0,
            Ye.useContext)(We.x), h = (0,
            Ye.useRef)(null), g = (0,
            Ye.useRef)(null), v = (0,
            Ye.useRef)(), m = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            )), x = sessionStorage.getItem("utm_campaign"), y = 0, w = 0, b = window.devicePixelRatio, Z = (0,
            Ye.useRef)(!1), A = 0, k = 0, S = {}, E = {}, P = "fredboat" === x || "carl" === x || (0,
            Ue.DJ)() && !(0,
            Ge.tq)();
            P || (P = !(0,
            Ge.tq)() || (0,
            Ge.Em)() || (0,
            Ge.zc)() ? !(null === (a = null === (r = null === (o = Ue.ZP.appInfo.playFeFeatures) || void 0 === o ? void 0 : o.ads) || void 0 === r ? void 0 : r.desktop) || void 0 === a ? void 0 : a.enablePrerollAds) : !(null === (i = null === (t = null === (e = Ue.ZP.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.ads) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.enablePrerollAds));
            var T = function(n) {
                (0,
                Fe.zr)("adComplete", n),
                p({
                    type: _e.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
              , C = function(n) {
                (0,
                Fe.zr)("adSkipped", n),
                p({
                    type: _e.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
              , D = function(n) {
                var e, t;
                y = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                w = (null === (t = null === m || void 0 === m ? void 0 : m.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                clearTimeout(g.current),
                g.current = setTimeout((function() {
                    var e;
                    c(!1),
                    (0,
                    Ve.L9)("AdRequestTimeout", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: it,
                        adWidth: A,
                        adHeight: k,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: y,
                        androidHeight: w,
                        pixelRatio: b
                    }),
                    null === (e = null === v || void 0 === v ? void 0 : v.current) || void 0 === e || e.closePlayer(),
                    (0,
                    Fe.zr)("AdRequestTimeout_onAdLoaded", n),
                    p({
                        type: _e.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    })
                }
                ), 1e4)
            }
              , I = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            ));
            function R(n) {
                var e, t;
                c(!1),
                y = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                w = (null === (t = null === m || void 0 === m ? void 0 : m.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                clearTimeout(g.current),
                (0,
                Ve.L9)("AdNotFilled", {
                    adContext: "Preroll",
                    adType: "Video",
                    retryCount: it,
                    adWidth: A,
                    adHeight: k,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: y,
                    androidHeight: w,
                    pixelRatio: b
                }),
                n ? function() {
                    var n, e;
                    it += 1;
                    var t = (0,
                    Fe.dl)(f);
                    g.current = setTimeout((function() {
                        var n;
                        c(!1),
                        (0,
                        Ve.L9)("AdRequestTimeout", {
                            adContext: "Preroll",
                            adType: "Video",
                            retryCount: it,
                            adWidth: A,
                            adHeight: k,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: y,
                            androidHeight: w,
                            pixelRatio: b
                        }),
                        null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.closePlayer(),
                        (0,
                        Fe.zr)("AdRequestTimeout_BeforeQueue", !0),
                        p({
                            type: _e.Z.UPDATE_ADS_STATE,
                            payload: {
                                adsEnded: !0
                            }
                        })
                    }
                    ), 15e3),
                    (0,
                    Ve.L9)("AdRequestedNg", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: it,
                        adWidth: A,
                        adHeight: k,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: y,
                        androidHeight: w,
                        pixelRatio: b,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                    }),
                    window.tude.cmd.push((function() {
                        var n, e;
                        (0,
                        Ve.L9)("AdRequested", {
                            adContext: "Preroll",
                            retryCount: it,
                            adType: "Video",
                            adWidth: A,
                            adHeight: k,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: y,
                            androidHeight: w,
                            pixelRatio: b,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                            isGptLoaded: "undefined" !== typeof (null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                        }),
                        window.tude.requestInstreamPlayer({
                            divId: "preroll-wrapper",
                            code: "stream",
                            mode: "adOnly",
                            targeting: tt(tt({}, t), {
                                ads_loc: "video-auto-pre"
                            })
                        }).then((function(n) {
                            v.current = n,
                            n.on("adNoFill", (function() {
                                R(!1)
                            }
                            )).on("adError", (function() {
                                R(!1)
                            }
                            )).on("adReady", (function() {
                                var n;
                                d(!u),
                                null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.setVideoVolume(u ? 1 : 0),
                                E = window.pbjs.getBidResponses() || {},
                                D(!0)
                            }
                            )).on("adProgress", (function(n, e) {
                                var t, i = e.milestone;
                                if ("complete" === i) {
                                    if (Z.current)
                                        return;
                                    c(!1),
                                    T(!0)
                                } else if ("start" === i) {
                                    null === (t = null === v || void 0 === v ? void 0 : v.current) || void 0 === t || t.setVideoVolume(u ? 1 : 0),
                                    clearTimeout(g.current),
                                    Z.current = !1,
                                    c(!0);
                                    var o = (E["pre-roll"] || {}).bids
                                      , r = (void 0 === o ? [] : o)[0] || {}
                                      , a = r.bidder
                                      , l = r.cpm
                                      , d = r.currency
                                      , s = r.netRevenue
                                      , p = r.status
                                      , f = r.statusMessage
                                      , h = r.timeToRespond
                                      , m = r.ttl;
                                    S = {
                                        bidder: a,
                                        cpm: l,
                                        currency: d,
                                        netRevenue: s,
                                        status: p,
                                        statusMessage: f,
                                        timeToRespond: h,
                                        ttl: m
                                    },
                                    (0,
                                    Ve.L9)("AdDisplayed", tt({
                                        adContext: "Preroll",
                                        adType: "Video",
                                        retryCount: it,
                                        adWidth: A,
                                        adHeight: k,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: y,
                                        androidHeight: w,
                                        pixelRatio: b
                                    }, S))
                                }
                            }
                            )).on("adSkipped", (function() {
                                c(!1),
                                C(!0),
                                Z.current = !0
                            }
                            ))
                        }
                        )).catch((function(n) {}
                        ))
                    }
                    ))
                }() : ((0,
                Fe.zr)("AdError", !0),
                p({
                    type: _e.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                }))
            }
            var O = function() {
                var n, e, t, i, o, r;
                (0,
                Ge.tq)() ? (o = I === qe.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20,
                r = I === qe.cj.portrait ? window.innerHeight : window.innerWidth) : (o = window.innerWidth - 20,
                r = window.innerHeight);
                var a, l, s = (a = r,
                Math.ceil(a * (4 / 3))), x = r;
                s > o && (l = s = o,
                x = Math.ceil(l / (4 / 3))),
                h.current && (h.current.style.width = "".concat(s, "px"),
                h.current.style.height = "".concat(x, "px")),
                function(n, e) {
                    A = n,
                    k = e
                }(s, x),
                y = (null === (n = null === m || void 0 === m ? void 0 : m.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                w = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                clearTimeout(g.current),
                g.current = setTimeout((function() {
                    var n;
                    c(!1),
                    (0,
                    Ve.L9)("AdRequestTimeout", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: it,
                        adWidth: A,
                        adHeight: k,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: y,
                        androidHeight: w,
                        pixelRatio: b
                    }),
                    null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.closePlayer(),
                    (0,
                    Fe.zr)("AdRequestTimeout_BeforeQueue", !1),
                    p({
                        type: _e.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    })
                }
                ), 15e3),
                (0,
                Ve.L9)("AdRequestedNg", {
                    adContext: "Preroll",
                    adType: "Video",
                    retryCount: it,
                    adWidth: A,
                    adHeight: k,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: y,
                    androidHeight: w,
                    pixelRatio: b,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (i = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads)
                }),
                window.tude.cmd.push((function() {
                    var n, e, t, i, o = (0,
                    Fe.dl)(f);
                    y = (null === (n = null === m || void 0 === m ? void 0 : m.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                    w = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                    (0,
                    Ve.L9)("AdRequested", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: it,
                        adWidth: A,
                        adHeight: k,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: y,
                        androidHeight: w,
                        pixelRatio: b,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (i = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads)
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "preroll-wrapper",
                        code: "pre-roll",
                        mode: "adOnly",
                        targeting: tt(tt({}, o), {
                            ads_loc: "video-auto-pre"
                        })
                    }).then((function(n) {
                        v.current = n,
                        n.on("adNoFill", (function() {
                            R(!0)
                        }
                        )).on("adError", (function() {
                            R(!0)
                        }
                        )).on("adReady", (function() {
                            var n;
                            d(!u),
                            null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.setVideoVolume(u ? 1 : 0),
                            E = window.pbjs.getBidResponses() || {},
                            D(!1)
                        }
                        )).on("adProgress", (function(n, e) {
                            var t, i = e.milestone;
                            if ("complete" === i) {
                                if (Z.current)
                                    return;
                                c(!1),
                                T(!1)
                            } else if ("start" === i) {
                                null === (t = null === v || void 0 === v ? void 0 : v.current) || void 0 === t || t.setVideoVolume(u ? 1 : 0),
                                clearTimeout(g.current),
                                Z.current = !1,
                                c(!0);
                                var o = (E["pre-roll"] || {}).bids
                                  , r = (void 0 === o ? [] : o)[0] || {}
                                  , a = r.bidder
                                  , l = r.cpm
                                  , d = r.currency
                                  , s = r.netRevenue
                                  , p = r.status
                                  , f = r.statusMessage
                                  , h = r.timeToRespond
                                  , m = r.ttl;
                                S = {
                                    bidder: a,
                                    cpm: l,
                                    currency: d,
                                    netRevenue: s,
                                    status: p,
                                    statusMessage: f,
                                    timeToRespond: h,
                                    ttl: m
                                },
                                (0,
                                Ve.L9)("AdDisplayed", tt({
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: it,
                                    adWidth: A,
                                    adHeight: k,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: y,
                                    androidHeight: w,
                                    pixelRatio: b
                                }, S))
                            }
                        }
                        )).on("adSkipped", (function() {
                            c(!1),
                            C(!1),
                            Z.current = !0
                        }
                        ))
                    }
                    )).catch((function(n) {}
                    ))
                }
                ))
            };
            return (0,
            Ye.useEffect)((function() {
                l || P ? ((0,
                Fe.zr)((P ? "disableAds" : l && "adsError") || "adsError_disableAds", !1),
                p({
                    type: _e.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })) : ((0,
                Ve.L9)("PrerollBegin"),
                O())
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                return function() {
                    return clearTimeout(g.current)
                }
            }
            ), []),
            l || s || P ? null : (0,
            et.tZ)(nt, {
                ref: h,
                id: "preroll-wrapper",
                isAppPage: u
            })
        }, rt = (0,
        Ye.memo)(ot), at = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, lt = (0,
        Qe.F4)(o || (o = at(["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"], ["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"]))), dt = Qe.ZP.img(r || (r = at(["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"], ["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), ct = Qe.ZP.div(a || (a = at(["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"], ["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        )), st = Qe.ZP.div(l || (l = at(["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), lt), ut = function(n) {
            var e, t = n.animateSmall, i = (0,
            Ye.useContext)(We.x);
            return (0,
            et.BX)(ct, {
                className: "".concat(t ? "animateSmall" : ""),
                children: [(0,
                et.tZ)(dt, {
                    src: null === (e = null === i || void 0 === i ? void 0 : i.media) || void 0 === e ? void 0 : e.icon
                }), (0,
                et.tZ)(st, {
                    className: "loadingBar",
                    children: (0,
                    et.tZ)("span", {})
                })]
            })
        }, pt = t(49555), ft = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ht = (0,
        Qe.F4)(d || (d = ft(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))), gt = (0,
        Qe.F4)(c || (c = ft(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))), vt = (0,
        Qe.F4)(s || (s = ft(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), mt = (0,
        Qe.F4)(u || (u = ft(["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))), xt = (0,
        Qe.F4)(p || (p = ft(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n"]))), yt = Qe.ZP.div(h || (h = ft(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  ", "\n  width: 100vw;\n  height: ", ";\n  z-index: ", ";\n  pointer-events: all;\n  animation: ", " 0.3s ease-out;\n  touch-action: none;\n\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  ", "\n  width: 100vw;\n  height: ", ";\n  z-index: ", ";\n  pointer-events: all;\n  animation: ", " 0.3s ease-out;\n  touch-action: none;\n\n  ", "\n"])), (function(n) {
            return n.showBackground ? "\n    background-color: rgba(0,0,0,0.7)};\n  " : ""
        }
        ), (function(n) {
            return n.isAppPage ? "100% !important" : "100vh"
        }
        ), (function(n) {
            return n.isAppPage ? 1 : 14
        }
        ), vt, (function(n) {
            var e = n.isAppPage
              , t = n.isDesktop;
            return e && (0,
            Qe.iv)(f || (f = ft(["\n    width: 100% !important;\n    height: ", ";\n  "], ["\n    width: 100% !important;\n    height: ", ";\n  "])), t ? "calc(100% - 52px) !important" : "100%")
        }
        )), wt = Qe.ZP.div(m || (m = ft(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n  touch-action: none;\n\n  ", "\n  background-color: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 600px){\n    background-position: center;\n    top: 0;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n  touch-action: none;\n\n  ", "\n  background-color: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 600px){\n    background-position: center;\n    top: 0;\n  }\n\n  ", "\n"])), (function(n) {
            var e = n.banner;
            return e ? "background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('".concat(e, "');") : ""
        }
        ), (function(n) {
            return n.toggle ? (0,
            Qe.iv)(g || (g = ft(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), vt) : (0,
            Qe.iv)(v || (v = ft(["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "], ["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "])), gt)
        }
        )), bt = Qe.ZP.div(w || (w = ft(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: 18px;\n  line-height: 150%;\n  width: 448px;\n  max-width: 100%;\n\n  > h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n\n  > p {\n    margin: 8px 16px 16px;\n  }\n\n  > img {\n    width: 65px;\n    border-radius: 6px;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: 18px;\n  line-height: 150%;\n  width: 448px;\n  max-width: 100%;\n\n  > h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n\n  > p {\n    margin: 8px 16px 16px;\n  }\n\n  > img {\n    width: 65px;\n    border-radius: 6px;\n  }\n\n  ", "\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.toggle ? (0,
            Qe.iv)(x || (x = ft(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), mt) : (0,
            Qe.iv)(y || (y = ft(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), xt)
        }
        )), Zt = (Qe.ZP.p(b || (b = ft(["\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  transition: all 1s ease-in-out;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-bottom: ", ";\n"], ["\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  transition: all 1s ease-in-out;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-bottom: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), ht, (function(n) {
            return n.theme.spacing.base6
        }
        )),
        Qe.ZP.div(Z || (Z = ft(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"])), (function(n) {
            return n.theme.colors.black
        }
        )),
        Qe.ZP.div(A || (A = ft(["\n  text-align: center;\n  width: 700px;\n  max-width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    color: ", ";\n    margin-bottom: 32px;\n    padding: 0 50px;\n    .mobile & {\n      padding: 0;\n      .rotate-screen & {\n        padding: 0 10px;\n      }\n    }\n  }\n"], ["\n  text-align: center;\n  width: 700px;\n  max-width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    color: ", ";\n    margin-bottom: 32px;\n    padding: 0 50px;\n    .mobile & {\n      padding: 0;\n      .rotate-screen & {\n        padding: 0 10px;\n      }\n    }\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        )),
        Qe.ZP.div(k || (k = ft(["\n  width: 256px;\n  background: ", ";\n  box-shadow: 0px 8px 16px ", ";\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .playImg {\n    margin-right: 8px;\n  }\n"], ["\n  width: 256px;\n  background: ", ";\n  box-shadow: 0px 8px 16px ", ";\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .playImg {\n    margin-right: 8px;\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.link
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black10
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        )),
        Qe.ZP.div(S || (S = ft(["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  .rotate-screen &, .portrait-mode & {\n    top: 0px;\n    height: 100%;\n  }\n"], ["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  .rotate-screen &, .portrait-mode & {\n    top: 0px;\n    height: 100%;\n  }\n"]))),
        function(n) {
            var e, t = n.isAppPage, i = (0,
            Ye.useState)(!0), o = (i[0],
            i[1]), r = (0,
            Ye.useState)(!1), a = (r[0],
            r[1]), l = (0,
            Ye.useState)(4), d = l[0], c = l[1], s = (0,
            Ye.useState)(!1), u = s[0], p = s[1], f = (0,
            Ye.useRef)(null), h = (0,
            He.v9)((function(n) {
                return n.ads.imaError
            }
            )), g = (0,
            He.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), v = (0,
            He.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), m = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            )), x = (0,
            He.I0)();
            (0,
            Ye.useEffect)((function() {
                return u && (0,
                Ge.tq)() && m === qe.cj.landscape && (e = setTimeout((function() {
                    d >= 1 ? c(d - 1) : clearTimeout(e),
                    a(!0)
                }
                ), 1e3)),
                function() {
                    clearTimeout(e)
                }
            }
            ), [u, d]);
            var y = function() {
                var n = null === f || void 0 === f ? void 0 : f.current;
                n && setTimeout((function() {
                    var e = window.innerWidth
                      , t = window.innerHeight;
                    (0,
                    Ue.DJ)() || (m !== qe.cj.portrait || 90 !== window.orientation && -90 !== window.orientation) && (m === qe.cj.portrait || m === qe.cj.landscape && (90 === window.orientation || -90 === window.orientation)) ? (n.style.width = "".concat(e, "px"),
                    n.style.height = "".concat(t, "px")) : (n.style.width = "".concat(t, "px"),
                    n.style.height = "".concat(e, "px")),
                    (0,
                    pt.sZ)(),
                    (0,
                    pt.Ul)()
                }
                ), 100)
            }
              , w = function() {
                "visible" === document.visibilityState && setTimeout((function() {
                    y()
                }
                ), 200)
            };
            (0,
            Ye.useEffect)((function() {
                var n = (window.nggClientIpInfo || {}).browserCode;
                return n && "mob" !== n || x({
                    type: _e.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                }),
                (0,
                Ge.tq)() && (y(),
                window.addEventListener("orientationchange", y),
                document.addEventListener("visibilitychange", w)),
                function() {
                    (0,
                    Ge.tq)() && (window.removeEventListener("orientationchange", y),
                    document.removeEventListener("visibilitychange", w))
                }
            }
            ), []);
            var b = (window.nggClientIpInfo || {}).browserCode;
            return b && "mob" !== b ? (0,
            et.BX)(yt, {
                ref: f,
                showBackground: !(g && !v),
                isAppPage: t,
                isMobile: (0,
                Ge.tq)(),
                isDesktop: (0,
                Ge.nI)(),
                children: [(0,
                et.tZ)(ut, {
                    animateSmall: g || u
                }), (0,
                et.tZ)(rt, {
                    setAdsMuted: o,
                    adsError: h,
                    setAdStart: p,
                    adsEnded: g,
                    isAppPage: t
                })]
            }) : null
        }
        ), At = (0,
        Ye.memo)(Zt), kt = t(50912), St = t(14266), Et = t(66971), Pt = t(79305), Tt = t(58309), Ct = t(33761), Dt = t(26793), It = t(35102), Rt = t(12812), Ot = t(94564), Lt = t(94381), Mt = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Bt = (0,
        Qe.F4)(E || (E = Mt(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), Xt = (0,
        Qe.F4)(P || (P = Mt(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))), Nt = (0,
        Qe.F4)(T || (T = Mt(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))), Kt = (0,
        Qe.F4)(C || (C = Mt(["\n  0% {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n    60% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    80% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    to {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n"], ["\n  0% {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n    60% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    80% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    to {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n"]))), jt = (0,
        Qe.F4)(D || (D = Mt(["\n    0% { width: 0; }\n    25% { width: 60%; }\n    50% { width: 75%; }\n    100% { width: 95%; }\n"], ["\n    0% { width: 0; }\n    25% { width: 60%; }\n    50% { width: 75%; }\n    100% { width: 95%; }\n"]))), zt = Qe.ZP.div(I || (I = Mt(["\n  position: relative;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    transition: width 2s;\n    top: 0;\n    bottom: 0;\n    background: ", ";\n    animation-name: ", ";\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  position: relative;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    transition: width 2s;\n    top: 0;\n    bottom: 0;\n    background: ", ";\n    animation-name: ", ";\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        ), jt), Yt = Qe.ZP.div(R || (R = Mt(["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 150%;\n    margin-bottom: 16px;\n  }\n\n  span {\n    flex-shrink: 0;\n    img {\n      border-radius: 6px;\n    }\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 150%;\n    margin-bottom: 16px;\n  }\n\n  span {\n    flex-shrink: 0;\n    img {\n      border-radius: 6px;\n    }\n  }\n"]))), Ht = Qe.ZP.div(O || (O = Mt(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))), _t = Qe.ZP.div(X || (X = Mt(["\n  position: absolute;\n  touch-action: none;\n  ", "\n  \n  video {\n    min-width: 100%;\n    min-height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  touch-action: none;\n  ", "\n  \n  video {\n    min-width: 100%;\n    min-height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"])), (function(n) {
            return n.isPortrait && (0,
            Qe.iv)(L || (L = Mt(["\n    height: 100vmax;\n  "], ["\n    height: 100vmax;\n  "])))
        }
        ), (function(n) {
            return n.toggle ? (0,
            Qe.iv)(M || (M = Mt(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), Bt) : (0,
            Qe.iv)(B || (B = Mt(["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "], ["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "])), Xt)
        }
        )), Ft = Qe.ZP.img(N || (N = Mt(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"]))), Ut = Qe.ZP.div(K || (K = Mt(["\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 9;\n  .loadingText{\n    animation: ", " 1s linear infinite;\n    margin-top: 5px;\n  }\n"], ["\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 9;\n  .loadingText{\n    animation: ", " 1s linear infinite;\n    margin-top: 5px;\n  }\n"])), Kt), Wt = Qe.ZP.img(j || (j = Mt(["\n  width: 40px;\n  height: 40px;\n  animation: ", " 1.5s linear infinite;\n"], ["\n  width: 40px;\n  height: 40px;\n  animation: ", " 1.5s linear infinite;\n"])), Nt), Gt = function(n) {
            var e, t, i, o, r, a, l = n.toggle, d = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            ));
            return (0,
            et.tZ)(_t, {
                toggle: l,
                isPortrait: (0,
                Ge.tq)() && qe.cj.portrait === d,
                children: (0,
                et.tZ)("video", {
                    src: (0,
                    Ge.tq)() ? null === (i = null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.launchVideo : null === (a = null === (r = null === (o = Ue.ZP.appInfo) || void 0 === o ? void 0 : o.media) || void 0 === r ? void 0 : r.desktop) || void 0 === a ? void 0 : a.launchVideo,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    disableRemotePlayback: !0,
                    playsInline: !0,
                    className: "preloader-video"
                })
            })
        }, Vt = function(n) {
            var e, t, i, o, r, a = n.toggle, l = null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.enablePokelaboUi, d = (0,
            Dt.$)().t;
            return (0,
            et.tZ)(wt, {
                style: {
                    background: "none"
                },
                toggle: a,
                children: l ? (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Ft, {
                        src: "".concat(Lt.u1, "pokelabo/bg-banner.png"),
                        alt: ""
                    }), (0,
                    et.BX)(Ut, {
                        children: [(0,
                        et.tZ)(Wt, {
                            src: "".concat(Lt.u1, "pokelabo/loader.png"),
                            alt: ""
                        }), (0,
                        et.tZ)(Ot.T5, {
                            white: !0,
                            className: "loadingText",
                            children: d("loading")
                        })]
                    })]
                }) : (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Rt.Z, {
                        toggle: a,
                        enteringDelay: .6,
                        exitingDelay: .6,
                        children: (0,
                        et.tZ)(Gt, {
                            toggle: a
                        })
                    }), (0,
                    et.tZ)(Rt.Z, {
                        toggle: a,
                        exitingDelay: .3,
                        children: (0,
                        et.tZ)(bt, {
                            style: {
                                padding: "16px",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                position: "absolute",
                                bottom: (0,
                                Ge.tq)() ? "24px" : "48px"
                            },
                            toggle: a,
                            children: (0,
                            et.BX)(Yt, {
                                children: [(0,
                                et.tZ)("img", {
                                    src: null === (o = null === (i = Ue.ZP.appInfo) || void 0 === i ? void 0 : i.media) || void 0 === o ? void 0 : o.icon,
                                    alt: null === (r = Ue.ZP.appInfo) || void 0 === r ? void 0 : r.appName,
                                    height: 64,
                                    width: 64
                                }), (0,
                                et.BX)(Ht, {
                                    children: [(0,
                                    et.tZ)("p", {
                                        children: d("launchingGame")
                                    }), (0,
                                    et.tZ)(zt, {})]
                                })]
                            })
                        })
                    })]
                })
            })
        }, qt = function(n) {
            var e = n.toggle;
            return (0,
            et.tZ)(wt, {
                style: {
                    display: "flex",
                    alignItems: "center",
                    bottom: 0,
                    height: "100vh",
                    marginTop: "0px",
                    top: "0px"
                },
                toggle: e,
                children: (0,
                et.tZ)(It.Z, {})
            })
        }, Qt = {
            src: "/play/_next/static/media/BrowserChrome.17f67783.svg",
            height: 24,
            width: 24
        }, Jt = {
            src: "/play/_next/static/media/BrowserSafari.87ac5020.svg",
            height: 24,
            width: 24
        }, $t = {
            src: "/play/_next/static/media/BrowserEdge.925a6e2f.svg",
            height: 24,
            width: 24
        }, ni = {
            src: "/play/_next/static/media/Copy.beaded6b.svg",
            height: 16,
            width: 16
        }, ei = t(22012), ti = t(45024), ii = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, oi = Qe.ZP.h3(z || (z = ii(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  color: ", ";\n  margin: 0;\n  text-align: center;\n"], ["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  color: ", ";\n  margin: 0;\n  text-align: center;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), ri = Qe.ZP.div(Y || (Y = ii(["\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  border-bottom: ", ";\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  color: ", ";\n  text-align: center;\n"], ["\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  border-bottom: ", ";\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  color: ", ";\n  text-align: center;\n"])), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), ai = Qe.ZP.div(H || (H = ii(["\n  align-items: center;\n  text-align: center;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n\n  p {\n    color: ", ";\n  }\n"], ["\n  align-items: center;\n  text-align: center;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n\n  p {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), li = Qe.ZP.div(_ || (_ = ii(["\n  display: flex;\n  gap: ", ";\n\n  \n  @media screen and (max-width: 400px){\n    gap: ", ";\n  }\n"], ["\n  display: flex;\n  gap: ", ";\n\n  \n  @media screen and (max-width: 400px){\n    gap: ", ";\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.spacing.base
        }
        )), di = Qe.ZP.div(F || (F = ii(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  width: 96px;\n  align-items: center;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  width: 96px;\n  align-items: center;\n  text-align: center;\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        )), ci = Qe.ZP.div(U || (U = ii(["\n  display: flex;\n  gap: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  align-items: center;\n  text-align: center;\n  border: ", ";\n\n  img {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  gap: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  align-items: center;\n  text-align: center;\n  border: ", ";\n\n  img {\n    cursor: pointer;\n  }\n"])), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.border.base
        }
        )), si = Qe.ZP.p(W || (W = ii(["\n  width: 262px;\n  font-size: 12px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 400;\n  color: ", ";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (max-width: 400px){\n    width: 196px;\n  }\n"], ["\n  width: 262px;\n  font-size: 12px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 400;\n  color: ", ";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (max-width: 400px){\n    width: 196px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), ui = Qe.ZP.div(G || (G = ii(["\n  border: ", ";\n  border-color: ", ";\n  height: 25px;\n"], ["\n  border: ", ";\n  border-color: ", ";\n  height: 25px;\n"])), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), pi = Qe.ZP.p(V || (V = ii(["\n  display: none;\n  background: ", ";\n  font-size: 10px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 500;\n  position: absolute;\n  bottom: 60px;\n  right: 30px;\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n\n  &#CopyText {\n    color: ", ";\n  }\n"], ["\n  display: none;\n  background: ", ";\n  font-size: 10px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 500;\n  position: absolute;\n  bottom: 60px;\n  right: 30px;\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n\n  &#CopyText {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.black
        }
        ), (function(n) {
            return n.theme.border.base2
        }
        ), (function(n) {
            return n.theme.spacing.base
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), fi = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, hi = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, gi = function() {
            var n = (0,
            Dt.$)().t;
            return (0,
            et.BX)(ei.Z, {
                style: {
                    padding: "0",
                    fontSize: "18px",
                    lineHeight: "150%",
                    width: "auto"
                },
                children: [(0,
                et.tZ)(ri, {
                    children: (0,
                    et.tZ)(oi, {
                        children: n("unsupportedBrowser")
                    })
                }), (0,
                et.BX)(ai, {
                    children: [(0,
                    et.tZ)(Ot.kk, {
                        med: !0,
                        children: n("switchBrowser")
                    }), (0,
                    et.BX)(li, {
                        children: [(0,
                        et.BX)(di, {
                            children: [(0,
                            et.tZ)("img", {
                                className: "chromeLogo",
                                alt: n("googleChrome"),
                                src: (0,
                                ti.j)(Qt),
                                height: 24,
                                width: 24
                            }), (0,
                            et.tZ)(Ot.mH, {
                                med: !0,
                                children: n("googleChrome")
                            })]
                        }), (0,
                        et.BX)(di, {
                            children: [(0,
                            et.tZ)("img", {
                                className: "safariLogo",
                                alt: n("appleSafari"),
                                src: (0,
                                ti.j)(Jt),
                                height: 24,
                                width: 24
                            }), (0,
                            et.tZ)(Ot.mH, {
                                med: !0,
                                children: n("appleSafari")
                            })]
                        }), (0,
                        et.BX)(di, {
                            children: [(0,
                            et.tZ)("img", {
                                className: "edgeLogo",
                                alt: n("microsoftEdge"),
                                src: (0,
                                ti.j)($t),
                                height: 24,
                                width: 24
                            }), (0,
                            et.tZ)(Ot.mH, {
                                med: !0,
                                children: n("microsoftEdge")
                            })]
                        })]
                    }), (0,
                    et.BX)(ci, {
                        children: [(0,
                        et.tZ)(si, {
                            children: window.location.href
                        }), (0,
                        et.tZ)(ui, {}), (0,
                        et.tZ)("img", {
                            alt: n("copy"),
                            src: (0,
                            ti.j)(ni),
                            height: 16,
                            width: 16,
                            onClick: function() {
                                return fi(void 0, void 0, void 0, (function() {
                                    return hi(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]),
                                            [4, navigator.clipboard.writeText(window.location.href).then((function() {
                                                var n = document.getElementById("CopyText");
                                                n && (n.style.display = "flex",
                                                setTimeout((function() {
                                                    n.style.display = "none"
                                                }
                                                ), 1e3))
                                            }
                                            ))];
                                        case 1:
                                            return n.sent(),
                                            [3, 3];
                                        case 2:
                                            return n.sent(),
                                            [3, 3];
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        }), (0,
                        et.tZ)(pi, {
                            id: "CopyText",
                            children: n("linkCopied")
                        })]
                    })]
                })]
            })
        }, vi = t(7940), mi = t(88557), xi = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, yi = (0,
        Qe.F4)(q || (q = xi(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))), wi = Qe.ZP.div(Q || (Q = xi(["\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: fit-content;\n    max-width: 90%;\n    height: fit-content;\n    color: ", ";\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 5px 13px;\n    box-sizing: border-box;\n    background: linear-gradient(0deg, rgba(164, 0, 0, 0.80) 0%, rgba(89, 0, 0, 0.40) 100%);\n    backdrop-filter: blur(12px);\n    border-radius: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    align-items: center;\n    z-index: 999;\n    img{\n      pointer-events: all;\n    }\n    &.slideUp {\n      top: -50px;\n      opacity: 0;\n    }\n    &.slideDown {\n      top: 30px;\n      opacity: 1;\n    }\n    span{\n      margin-left: 8px;\n      margin-right: 8px;\n      font-weight: 600;\n    }\n    .info{\n      margin-left: 8px;\n      cursor: pointer;\n    }\n    .longDescription{\n      display: none;\n    }\n    .close{\n      display: none;\n    }\n    .shortDescription {\n      display: inline;\n      margin: 0;\n    }\n    span{\n      top: 3px;\n    }\n    &.expand{\n    .timer{\n      margin-right: 0px;\n    }\n    .shortDescription{\n        display: none;\n    }\n    .info{\n        order:-2;\n        margin: 0px;\n    }\n    .longDescription{\n        display: inline;\n        width: fit-content;\n        margin: 0 8px;\n    }\n    .close{\n        display: inline;\n        margin-left: 10px;\n        cursor: pointer;\n    }\n    }\n"], ["\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: fit-content;\n    max-width: 90%;\n    height: fit-content;\n    color: ", ";\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 5px 13px;\n    box-sizing: border-box;\n    background: linear-gradient(0deg, rgba(164, 0, 0, 0.80) 0%, rgba(89, 0, 0, 0.40) 100%);\n    backdrop-filter: blur(12px);\n    border-radius: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    align-items: center;\n    z-index: 999;\n    img{\n      pointer-events: all;\n    }\n    &.slideUp {\n      top: -50px;\n      opacity: 0;\n    }\n    &.slideDown {\n      top: 30px;\n      opacity: 1;\n    }\n    span{\n      margin-left: 8px;\n      margin-right: 8px;\n      font-weight: 600;\n    }\n    .info{\n      margin-left: 8px;\n      cursor: pointer;\n    }\n    .longDescription{\n      display: none;\n    }\n    .close{\n      display: none;\n    }\n    .shortDescription {\n      display: inline;\n      margin: 0;\n    }\n    span{\n      top: 3px;\n    }\n    &.expand{\n    .timer{\n      margin-right: 0px;\n    }\n    .shortDescription{\n        display: none;\n    }\n    .info{\n        order:-2;\n        margin: 0px;\n    }\n    .longDescription{\n        display: inline;\n        width: fit-content;\n        margin: 0 8px;\n    }\n    .close{\n        display: inline;\n        margin-left: 10px;\n        cursor: pointer;\n    }\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        )), bi = Qe.ZP.div(J || (J = xi(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 99999999999;\n    img{\n    animation: ", " 1s linear infinite;\n    }\n    &.hide{\n    display: none;\n    }\n"], ["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 99999999999;\n    img{\n    animation: ", " 1s linear infinite;\n    }\n    &.hide{\n    display: none;\n    }\n"])), yi), Zi = Qe.ZP.div($ || ($ = xi(["\n    z-index: 9;\n    .mainContainer {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 24px;\n        max-width: 90%;\n        width: 420px;\n        left: calc(50%);\n        top: calc(50%);\n        transform: translate(-50%, -50%);\n        max-width: fit-content;\n        background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%),\n        rgba(255, 255, 255, 0.3);\n        border: 1px solid rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(24px);\n        border-radius: 12px;\n        display: flex;\n        img{\n          width: 160px;\n          height: 215.06px;\n          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));\n          border-radius: 12px;\n        }\n        .content {\n          width: 100%;\n          margin-left: 24px;\n          color: white;\n          display: flex;\n          flex-direction: column;\n          @media screen and (max-width: 768px) {\n            margin: 20px 0;\n            align-items: center;\n            text-align: center;\n          }\n          h2{\n            margin: 0px;\n            font-weight: 600;\n            font-size: 24px;\n            line-height: 150%;\n          }\n          button {\n            margin-top: 20px;\n          }\n        }\n        @media screen and (max-width: 768px) {\n          flex-direction: column;\n          align-items: center;\n        }\n    }\n"], ["\n    z-index: 9;\n    .mainContainer {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 24px;\n        max-width: 90%;\n        width: 420px;\n        left: calc(50%);\n        top: calc(50%);\n        transform: translate(-50%, -50%);\n        max-width: fit-content;\n        background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%),\n        rgba(255, 255, 255, 0.3);\n        border: 1px solid rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(24px);\n        border-radius: 12px;\n        display: flex;\n        img{\n          width: 160px;\n          height: 215.06px;\n          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));\n          border-radius: 12px;\n        }\n        .content {\n          width: 100%;\n          margin-left: 24px;\n          color: white;\n          display: flex;\n          flex-direction: column;\n          @media screen and (max-width: 768px) {\n            margin: 20px 0;\n            align-items: center;\n            text-align: center;\n          }\n          h2{\n            margin: 0px;\n            font-weight: 600;\n            font-size: 24px;\n            line-height: 150%;\n          }\n          button {\n            margin-top: 20px;\n          }\n        }\n        @media screen and (max-width: 768px) {\n          flex-direction: column;\n          align-items: center;\n        }\n    }\n"]))), Ai = function() {
            var n, e = (0,
            Dt.$)().t, t = (0,
            Ye.useContext)(We.x);
            return (0,
            He.v9)((function(n) {
                return n.play.graceTimeoutType
            }
            )) === Lt.FP.MAINTENANCE ? (window.location.reload(),
            null) : (0,
            et.tZ)(Zi, {
                children: (0,
                et.BX)("div", {
                    className: "mainContainer",
                    children: [(0,
                    et.tZ)("img", {
                        alt: "".concat(e("gameTile")),
                        src: null === (n = null === t || void 0 === t ? void 0 : t.media) || void 0 === n ? void 0 : n.tile,
                        width: 230,
                        height: 310
                    }), (0,
                    et.BX)("div", {
                        className: "content",
                        children: [(0,
                        et.tZ)(Ot.T3, {
                            children: e("serverBusy")
                        }), (0,
                        et.tZ)(Ot.xv, {
                            children: e("serverBusyMsg")
                        }), (0,
                        et.tZ)(vi.z, {
                            variant: "primary",
                            size: "small",
                            text: e("restart"),
                            onClick: function() {
                                return (0,
                                mi.iI)("SpotInterruption")
                            }
                        })]
                    })]
                })
            })
        }, ki = t(32475), Si = t.n(ki), Ei = {
            src: "/play/_next/static/media/info-icon.c014906a.svg",
            height: 17,
            width: 17
        }, Pi = t(866), Ti = {
            src: "/play/_next/static/media/round-loader.ec0f091e.svg",
            height: 32,
            width: 32
        }, Ci = function() {
            var n = (0,
            Ye.useRef)(null)
              , e = (0,
            Ye.useRef)(null)
              , t = (0,
            Ye.useRef)(null)
              , i = (0,
            Ye.useRef)(null)
              , o = (0,
            Ye.useState)(!0)
              , r = o[0]
              , a = o[1]
              , l = (0,
            Ye.useState)("")
              , d = l[0]
              , c = l[1]
              , s = (0,
            He.I0)()
              , u = (0,
            Dt.$)().t
              , p = (0,
            He.v9)((function(n) {
                return n.play.graceIntervalSecs
            }
            ))
              , f = (0,
            He.v9)((function(n) {
                return n.play.graceIntervalMessage
            }
            ))
              , h = (0,
            He.v9)((function(n) {
                return n.play.graceTimeoutType
            }
            ))
              , g = function() {
                var e;
                null === (e = null === n || void 0 === n ? void 0 : n.current) || void 0 === e || e.classList.add("expand"),
                a(!1)
            };
            return (0,
            Ye.useEffect)((function() {
                var t, o;
                null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t || t.classList.add("slideDown"),
                null === (o = null === n || void 0 === n ? void 0 : n.current) || void 0 === o || o.classList.remove("slideUp");
                var r = p;
                return i.current = setInterval((function() {
                    var t, o, a, l = Math.floor(r / 60), d = r % 60, s = Si()(String(l), 2, "0"), u = Si()(String(d), 2, "0");
                    c("".concat(s, ":").concat(u)),
                    (r -= 1) <= 0 && (clearInterval(i.current),
                    null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t || t.classList.add("slideUp"),
                    null === (o = null === n || void 0 === n ? void 0 : n.current) || void 0 === o || o.classList.remove("slideDown"),
                    null === (a = null === e || void 0 === e ? void 0 : e.current) || void 0 === a || a.classList.remove("hide"),
                    h === Lt.FP.MAINTENANCE && window.location.reload())
                }
                ), 1e3),
                function() {
                    var t, o, r;
                    clearInterval(i.current),
                    s({
                        type: Et.Z.ANDROID_WILL_DISCONNECT_TOAST,
                        payload: {
                            disconnecTimer: 0
                        }
                    }),
                    null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t || t.classList.add("slideUp"),
                    null === (o = null === n || void 0 === n ? void 0 : n.current) || void 0 === o || o.classList.remove("slideDown"),
                    null === (r = null === e || void 0 === e ? void 0 : e.current) || void 0 === r || r.classList.remove("hide")
                }
            }
            ), []),
            (0,
            et.BX)(et.HY, {
                children: [(0,
                et.tZ)(bi, {
                    ref: e,
                    className: "hide",
                    children: (0,
                    et.tZ)("img", {
                        alt: "".concat(u("roundLoader")),
                        src: (0,
                        ti.j)(Ti)
                    })
                }), (0,
                et.BX)(wi, {
                    ref: n,
                    className: "slideUp flex",
                    children: [(0,
                    et.tZ)("p", {
                        className: "shortDescription",
                        children: f || u("spotInstanceShortMsg")
                    }), !r && (0,
                    et.tZ)("img", {
                        alt: "".concat(u("infoIcon")),
                        src: (0,
                        ti.j)(Ei),
                        onClick: g
                    }), (0,
                    et.tZ)("span", {
                        ref: t,
                        className: "timer",
                        style: {
                            marginLeft: h === Lt.FP.MAINTENANCE ? 0 : 5
                        },
                        children: h === Lt.FP.MAINTENANCE ? "" : d
                    }), r && (0,
                    et.tZ)("img", {
                        alt: "".concat(u("infoIcon")),
                        src: (0,
                        ti.j)(Ei),
                        onClick: function() {
                            return h === Lt.FP.MAINTENANCE ? null : g()
                        }
                    }), (0,
                    et.tZ)("p", {
                        className: "longDescription",
                        children: f || u("spotInstanceLongMsg")
                    }), !r && (0,
                    et.tZ)("img", {
                        alt: "".concat(u("closeIcon")),
                        src: (0,
                        ti.j)(Pi.Z),
                        onClick: function() {
                            var e;
                            null === (e = null === n || void 0 === n ? void 0 : n.current) || void 0 === e || e.classList.remove("expand"),
                            a(!0)
                        }
                    })]
                })]
            })
        }, Di = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ii = Qe.ZP.div(nn || (nn = Di(["\n  background: var(\n    --background-blur-logo-dark-bg,\n    radial-gradient(\n      32.85% 62.63% at 50% 30.49%,\n      rgba(81, 165, 201, 0.2) 0%,\n      rgba(51, 80, 111, 0) 100%\n    ),\n    radial-gradient(\n      28.93% 32.16% at 64.37% 56.79%,\n      rgba(179, 214, 97, 0.2) 0%,\n      rgba(179, 214, 97, 0) 100%\n    ),\n    radial-gradient(\n      29.7% 41.69% at 37.22% 60.32%,\n      rgba(255, 66, 165, 0.2) 0%,\n      rgba(255, 66, 165, 0) 100%\n    ),\n    #0b0223\n  );\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: ", ";\n  padding: 0 0 32px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .logo {\n    width: 128px;\n    height: 128px;\n    margin: 0 0 4.43vh 0;\n    border-radius: ", ";\n    .isMobile.landScape & {\n      width: 23vmin;\n      height: 23vmin;\n      margin: 0 0 4.5vmin 0;\n    }\n\n    .isMobile.portrait & {\n      width: 12vmax;\n      height: 12vmax;\n      margin: 0 0 4vmax 0;\n    }\n  }\n  .heading {\n    .isMobile.landScape & {\n      margin: 0px 0px 1vmax 0px;\n    }\n  }\n  .subHeading {\n    max-width: 656px;\n    color: ", ";\n    .isMobile.landScape & {\n      margin: 0px 0px 4.8vmin 0px;\n      max-width: 600px;\n    }\n\n    .isMobile.portrait & {\n      margin: 0px 0px 5vmax 0px;\n      max-width: 350px;\n    }\n\n    .isMobile & {\n      font-size: 16px;\n    }\n  }\n  .baseBtn {\n    font-size: 14px;\n  }\n  @media screen and (orientation: landscape) {\n    width: 100%;\n    height: 100%;\n    .isMobile.landScape & {\n      height: calc(100vh + 65px);\n    }\n  }\n"], ["\n  background: var(\n    --background-blur-logo-dark-bg,\n    radial-gradient(\n      32.85% 62.63% at 50% 30.49%,\n      rgba(81, 165, 201, 0.2) 0%,\n      rgba(51, 80, 111, 0) 100%\n    ),\n    radial-gradient(\n      28.93% 32.16% at 64.37% 56.79%,\n      rgba(179, 214, 97, 0.2) 0%,\n      rgba(179, 214, 97, 0) 100%\n    ),\n    radial-gradient(\n      29.7% 41.69% at 37.22% 60.32%,\n      rgba(255, 66, 165, 0.2) 0%,\n      rgba(255, 66, 165, 0) 100%\n    ),\n    #0b0223\n  );\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: ", ";\n  padding: 0 0 32px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .logo {\n    width: 128px;\n    height: 128px;\n    margin: 0 0 4.43vh 0;\n    border-radius: ", ";\n    .isMobile.landScape & {\n      width: 23vmin;\n      height: 23vmin;\n      margin: 0 0 4.5vmin 0;\n    }\n\n    .isMobile.portrait & {\n      width: 12vmax;\n      height: 12vmax;\n      margin: 0 0 4vmax 0;\n    }\n  }\n  .heading {\n    .isMobile.landScape & {\n      margin: 0px 0px 1vmax 0px;\n    }\n  }\n  .subHeading {\n    max-width: 656px;\n    color: ", ";\n    .isMobile.landScape & {\n      margin: 0px 0px 4.8vmin 0px;\n      max-width: 600px;\n    }\n\n    .isMobile.portrait & {\n      margin: 0px 0px 5vmax 0px;\n      max-width: 350px;\n    }\n\n    .isMobile & {\n      font-size: 16px;\n    }\n  }\n  .baseBtn {\n    font-size: 14px;\n  }\n  @media screen and (orientation: landscape) {\n    width: 100%;\n    height: 100%;\n    .isMobile.landScape & {\n      height: calc(100vh + 65px);\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.radius6
        }
        ), (function(n) {
            return n.theme.colors.white60
        }
        )), Ri = Qe.ZP.div(en || (en = Di(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"]))), Oi = t(52165), Li = function() {
            var n, e = (0,
            Ge.tq)(), t = (0,
            Dt.$)().t, i = (0,
            Ye.useContext)(We.x), o = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            )), r = (0,
            Ye.useMemo)((function() {
                var n = "";
                return e && (n += "isMobile "),
                o === qe.cj.landscape && (n += "landScape "),
                o === qe.cj.portrait && (n += "portrait "),
                n
            }
            ), [o]), a = (0,
            Ye.useMemo)((function() {
                return !(!e || o !== qe.cj.portrait)
            }
            ), [r]);
            return (0,
            et.tZ)(Ri, {
                className: "session-end ".concat(r),
                children: (0,
                et.BX)(Ii, {
                    children: [(0,
                    et.tZ)("img", {
                        className: "logo",
                        alt: "".concat(t("gameTile")),
                        src: null === (n = null === i || void 0 === i ? void 0 : i.media) || void 0 === n ? void 0 : n.icon
                    }), (0,
                    et.tZ)(Ot.do, {
                        className: "heading",
                        center: !0,
                        med: !0,
                        children: t("endScreenHeading")
                    }), (0,
                    et.tZ)(Ot.T5, {
                        center: !0,
                        className: "subHeading",
                        children: t("endScreenSubHeading")
                    }), (0,
                    et.tZ)(vi.z, {
                        className: "baseBtn",
                        variant: "primary",
                        onClick: function() {
                            return (0,
                            mi.iI)("SessionComplete")
                        },
                        children: t("restartSession")
                    }), (0,
                    et.tZ)(Oi.Z, {
                        breakFooterText: a
                    })]
                })
            })
        }, Mi = t(61740), Bi = t(56817), Xi = t(85437), Ni = t(4298), Ki = t(6094), ji = t(30945), zi = t(20902), Yi = t(50063), Hi = t(55734), _i = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Fi = Qe.ZP.input.attrs({
            type: "file"
        })(tn || (tn = _i(["\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  left: -100vw;\n"], ["\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  left: -100vw;\n"]))), Ui = Qe.ZP.div(on || (on = _i(["\n  padding: 16px;\n  position: fixed;\n  top: -70px;\n  background: linear-gradient(\n      180deg,\n      rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%\n    ),\n    rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: ", ";\n  z-index: 20;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  opacity: 0.5;\n  &.slideDown {\n    opacity: 1;\n    top: 70px;\n  }\n  > .spin {\n    width: 21px;\n    height: 21px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"], ["\n  padding: 16px;\n  position: fixed;\n  top: -70px;\n  background: linear-gradient(\n      180deg,\n      rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%\n    ),\n    rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: ", ";\n  z-index: 20;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  opacity: 0.5;\n  &.slideDown {\n    opacity: 1;\n    top: 70px;\n  }\n  > .spin {\n    width: 21px;\n    height: 21px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"])), (function(n) {
            return n.theme.border.base3
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), Hi.SA), Wi = Qe.ZP.div(rn || (rn = _i(["\n  width: 21px;\n  height: 21px;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  border-radius: 50%;\n"], ["\n  width: 21px;\n  height: 21px;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  border-radius: 50%;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), Hi.SA), Gi = Qe.ZP.div(an || (an = _i(["\n  width: 21px;\n  height: 21px;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  &:after {\n    content: '';\n    transform: rotate(-48deg);\n    width: 10px;\n    height: 6px;\n    border-left: 2px solid white;\n    border-bottom: 2px solid white;\n    z-index: 1;\n    position: absolute;\n    left: 5.5px;\n    top: 6.5px;\n  }\n"], ["\n  width: 21px;\n  height: 21px;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  &:after {\n    content: '';\n    transform: rotate(-48deg);\n    width: 10px;\n    height: 6px;\n    border-left: 2px solid white;\n    border-bottom: 2px solid white;\n    z-index: 1;\n    position: absolute;\n    left: 5.5px;\n    top: 6.5px;\n  }\n"])), (function(n) {
            return n.theme.colors.blue
        }
        )), Vi = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.v9)((function(n) {
                return n.play.fileUploadState
            }
            ))
              , t = e.showLoader
              , i = e.loaderType
              , o = (0,
            Ye.useRef)(null)
              , r = (0,
            He.I0)();
            (0,
            Ye.useEffect)((function() {
                r({
                    type: Et.Z.UPDATE_UPLOAD_REF,
                    payload: {
                        fileUploadRef: o
                    }
                })
            }
            ), [o]);
            var a = (0,
            Ye.useMemo)((function() {
                switch (i) {
                case "uploading":
                    return "uploadingFile";
                case "success":
                    return "uploadedSuccessfully";
                case "warning":
                    return "uploadFailed";
                default:
                    return ""
                }
            }
            ), [i]);
            return (0,
            et.BX)(et.HY, {
                children: [(0,
                et.tZ)(Fi, {
                    ref: o,
                    id: "uploadFile",
                    onClick: zi.Hv,
                    onChange: zi.cT
                }), (0,
                et.BX)(Ui, {
                    className: t ? "slideDown" : "",
                    children: ["uploading" === i && (0,
                    et.tZ)(Wi, {}), "success" === i && (0,
                    et.tZ)(Gi, {}), "warning" === i && (0,
                    et.tZ)("img", {
                        width: "21",
                        height: "21",
                        src: (0,
                        ti.j)(Yi.Z),
                        alt: "warning"
                    }), (0,
                    et.tZ)(Ot.T5, {
                        style: {
                            margin: "0px",
                            marginLeft: "13.5px"
                        },
                        med: !0,
                        white: !0,
                        children: n(a)
                    })]
                })]
            })
        }, qi = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.v9)((function(n) {
                return n.play.fileDownloadState
            }
            ))
              , t = e.showLoader
              , i = e.loaderType
              , o = (0,
            Ye.useState)("")
              , r = o[0]
              , a = o[1];
            return (0,
            Ye.useEffect)((function() {
                a(function() {
                    switch (i) {
                    case "downloading":
                        return "downloadingFile";
                    case "success":
                        return "downloadedSuccessfully";
                    case "warning":
                        return "downloadFailed";
                    default:
                        return ""
                    }
                }())
            }
            ), [i]),
            (0,
            et.BX)(Ui, {
                className: t ? "slideDown" : "",
                children: ["downloading" === i && (0,
                et.tZ)(Wi, {}), "success" === i && (0,
                et.tZ)(Gi, {}), "warning" === i && (0,
                et.tZ)("img", {
                    width: "21",
                    height: "21",
                    src: (0,
                    ti.j)(Yi.Z),
                    alt: "warning"
                }), (0,
                et.tZ)(Ot.T5, {
                    style: {
                        margin: "0px",
                        marginLeft: "13.5px"
                    },
                    med: !0,
                    white: !0,
                    children: n(r)
                })]
            })
        }, Qi = function() {
            return (0,
            et.tZ)("div", {})
        }, Ji = t(78603), $i = (t(90534),
        {
            src: "/play/_next/static/media/proxyLogo.1825607a.svg",
            height: 81,
            width: 80
        }), no = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, eo = (0,
        Qe.iv)(ln || (ln = no(["\n   max-height: 95vh;\n   max-width: 480px;\n   width: 100%;\n"], ["\n   max-height: 95vh;\n   max-width: 480px;\n   width: 100%;\n"]))), to = Qe.ZP.div(dn || (dn = no(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 8px;\n   padding: 40px;\n   color: ", ";\n\n   .proxy-url-container{\n      background: ", ";\n      border-radius: 8px;\n      padding: 12px;\n      width:100%;\n      margin-top: 32px;\n      position: relative;\n      font-size:16px;\n\n      @media only screen  and (max-width:1024px) {\n         margin-bottom:16px;\n      }\n      .proxy-url{\n         white-space: nowrap;\n         overflow: hidden;\n         text-overflow: ellipsis;\n         color: ", ";\n         line-height: 150%;\n         user-select: all;\n      }\n   }\n\n   .copy-tooltip{\n      color: ", ";\n      background: ", ";\n      position: absolute;\n      font-size: 10px;\n      padding: 4px 6px;\n      gap: 4px;\n      left: 50%;\n      transform: translateX(-50%);\n      border: 1px solid ", ";\n      border-radius: 4px;\n   }\n   button{\n      width:100%;\n      margin-top: 16px;\n   }\n   h3 {\n      font-size: 24px;\n      color: ", ";\n   }\n   h3, h5 {\n      margin: 0;\n   }\n\n   @media only screen and (max-width: 767px) {\n      .proxy-url-container, button {\n         padding: 7.5px 21px 7.5px 9px;\n      }\n      h3 {\n         margin-top: 12px;\n         font-size: 16px;\n      }\n      .proxy-url, button {\n         font-size: 14px;\n      }\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 8px;\n   padding: 40px;\n   color: ", ";\n\n   .proxy-url-container{\n      background: ", ";\n      border-radius: 8px;\n      padding: 12px;\n      width:100%;\n      margin-top: 32px;\n      position: relative;\n      font-size:16px;\n\n      @media only screen  and (max-width:1024px) {\n         margin-bottom:16px;\n      }\n      .proxy-url{\n         white-space: nowrap;\n         overflow: hidden;\n         text-overflow: ellipsis;\n         color: ", ";\n         line-height: 150%;\n         user-select: all;\n      }\n   }\n\n   .copy-tooltip{\n      color: ", ";\n      background: ", ";\n      position: absolute;\n      font-size: 10px;\n      padding: 4px 6px;\n      gap: 4px;\n      left: 50%;\n      transform: translateX(-50%);\n      border: 1px solid ", ";\n      border-radius: 4px;\n   }\n   button{\n      width:100%;\n      margin-top: 16px;\n   }\n   h3 {\n      font-size: 24px;\n      color: ", ";\n   }\n   h3, h5 {\n      margin: 0;\n   }\n\n   @media only screen and (max-width: 767px) {\n      .proxy-url-container, button {\n         padding: 7.5px 21px 7.5px 9px;\n      }\n      h3 {\n         margin-top: 12px;\n         font-size: 16px;\n      }\n      .proxy-url, button {\n         font-size: 14px;\n      }\n   }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), io = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, oo = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, ro = function() {
            var n, e = (0,
            Dt.$)().t, t = (0,
            Ye.useState)(!1), i = t[0], o = t[1], r = null === (n = Ue.ZP.appInfo) || void 0 === n ? void 0 : n.alternateUrlForProxies;
            (0,
            Ye.useEffect)((function() {
                (0,
                Ve.L9)("ProxyScreenShown")
            }
            ), []);
            return (0,
            et.tZ)(ei.Z, {
                modalStyles: eo,
                children: (0,
                et.BX)(to, {
                    children: [(0,
                    et.tZ)("img", {
                        src: (0,
                        ti.j)($i),
                        alt: "",
                        width: (0,
                        Ge.tq)() ? 48 : 80,
                        height: (0,
                        Ge.tq)() ? 48 : 80
                    }), (0,
                    et.tZ)(Ot.T3, {
                        med: !0,
                        center: !0,
                        children: e("proxyDetected")
                    }), (0,
                    et.tZ)(Ot.T5, {
                        center: !0,
                        med: !0,
                        children: e("toPlayGame")
                    }), (0,
                    et.tZ)(Ot.T5, {
                        center: !0,
                        children: "1. ".concat(e("disableVpn"))
                    }), (0,
                    et.tZ)(Ot.T5, {
                        center: !0,
                        children: "2. ".concat(e(r ? "useURL" : "reloadPage"))
                    }), r && (0,
                    et.BX)(et.HY, {
                        children: [(0,
                        et.BX)("div", {
                            className: "proxy-url-container",
                            children: [(0,
                            et.tZ)("div", {
                                className: "proxy-url",
                                children: "".concat(r, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy")
                            }), i && (0,
                            et.tZ)("div", {
                                className: "copy-tooltip",
                                children: e("linkCopied")
                            })]
                        }), (0,
                        et.tZ)(vi.z, {
                            variant: "secondary",
                            onClick: function() {
                                return io(void 0, void 0, void 0, (function() {
                                    return oo(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]),
                                            [4, navigator.clipboard.writeText("".concat(r, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy"))];
                                        case 1:
                                            return n.sent(),
                                            o(!0),
                                            setTimeout((function() {
                                                o(!1)
                                            }
                                            ), 2e3),
                                            [3, 3];
                                        case 2:
                                            return n.sent(),
                                            [3, 3];
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            text: e("copyUrl")
                        })]
                    })]
                })
            })
        }, ao = t(16678), lo = {
            src: "/play/_next/static/media/tryNow.c14372c1.svg",
            height: 24,
            width: 24
        }, co = {
            src: "/play/_next/static/media/tryNowAscent.969f3040.svg",
            height: 25,
            width: 24
        }, so = t(1653), uo = t(68913), po = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, fo = (0,
        Qe.iv)(cn || (cn = po(["\n   max-height: 95vh;\n   width: 494px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 494px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))), ho = (0,
        Qe.iv)(sn || (sn = po(["\n   max-height: 95vh;\n   width: 630px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 630px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))), go = (0,
        Qe.iv)(un || (un = po(["\n   max-height: 95vh;\n   width: 583px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 583px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))), vo = Qe.ZP.div(pn || (pn = po(["\n overflow: auto;\n max-height: inherit;\npadding: ", ";\n"], ["\n overflow: auto;\n max-height: inherit;\npadding: ", ";\n"])), (function(n) {
            return n.isDesktop ? "32px 60px" : "24px"
        }
        )), mo = Qe.ZP.div(hn || (hn = po(["\n   display: flex;\n   width: 100%;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   background-color: transparent;\n   .appIcon {\n      width: ", ";\n      aspect-ratio: 1;\n      margin-bottom: 16px;\n      border-radius: 8px;\n      ", "\n   }\n"], ["\n   display: flex;\n   width: 100%;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   background-color: transparent;\n   .appIcon {\n      width: ", ";\n      aspect-ratio: 1;\n      margin-bottom: 16px;\n      border-radius: 8px;\n      ", "\n   }\n"])), (function(n) {
            var e = n.screen
              , t = n.isDesktop;
            return "loading" === e ? t ? "140px" : "100px" : "180px"
        }
        ), (function(n) {
            return !n.isDesktop && (0,
            Qe.iv)(fn || (fn = po(["\n         @media screen and (orientation: landscape) {\n            width: 80px;\n            margin-bottom: 8px;\n         }\n      "], ["\n         @media screen and (orientation: landscape) {\n            width: 80px;\n            margin-bottom: 8px;\n         }\n      "])))
        }
        )), xo = Qe.ZP.div(gn || (gn = po(["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"], ["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"]))), yo = Qe.ZP.div(xn || (xn = po(["\n   display: flex;\n   margin-top: 16px;\n   flex-direction: column;\n   align-items: center;\n   width: 100%;\n   button {\n      border-radius: 12px;\n      padding: 16px;\n      flex-grow: 1;\n      justify-content: center;\n      align-items: center;\n      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n      display: flex;\n      border: none;\n      cursor: pointer;\n      ", "\n      img {\n         margin-right: 8px;\n      }\n   }\n   ", "\n"], ["\n   display: flex;\n   margin-top: 16px;\n   flex-direction: column;\n   align-items: center;\n   width: 100%;\n   button {\n      border-radius: 12px;\n      padding: 16px;\n      flex-grow: 1;\n      justify-content: center;\n      align-items: center;\n      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n      display: flex;\n      border: none;\n      cursor: pointer;\n      ", "\n      img {\n         margin-right: 8px;\n      }\n   }\n   ", "\n"])), (function(n) {
            return !n.isDesktop && (0,
            Qe.iv)(vn || (vn = po(["\n         @media screen and (orientation: landscape) {\n            padding: 8px;\n         }\n      "], ["\n         @media screen and (orientation: landscape) {\n            padding: 8px;\n         }\n      "])))
        }
        ), (function(n) {
            return !n.isDesktop && (0,
            Qe.iv)(mn || (mn = po(["\n      @media screen and (orientation: landscape) {\n         margin-top: 8px;\n      }\n   "], ["\n      @media screen and (orientation: landscape) {\n         margin-top: 8px;\n      }\n   "])))
        }
        )), wo = Qe.ZP.button(wn || (wn = po(["\n   background-color: #FF42A5;\n   margin-bottom: 16px;\n   color: #fff;\n   width: 100%;\n   flex-direction: column;\n   .tryNowContainer {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n   }\n   .noInstallMsg {\n      font-weight: 400;\n      font-size: 10px;\n      line-height: 15px;\n      letter-spacing: 0.05em;\n      color: #FFFFFF;\n   }\n   &:hover {\n      background-color: rgba(255, 66, 165, 0.9);\n   }\n   ", "\n"], ["\n   background-color: #FF42A5;\n   margin-bottom: 16px;\n   color: #fff;\n   width: 100%;\n   flex-direction: column;\n   .tryNowContainer {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n   }\n   .noInstallMsg {\n      font-weight: 400;\n      font-size: 10px;\n      line-height: 15px;\n      letter-spacing: 0.05em;\n      color: #FFFFFF;\n   }\n   &:hover {\n      background-color: rgba(255, 66, 165, 0.9);\n   }\n   ", "\n"])), (function(n) {
            return !n.isDesktop && (0,
            Qe.iv)(yn || (yn = po(["\n      @media screen and (orientation: landscape) {\n         margin-bottom: 8px;\n      }\n   "], ["\n      @media screen and (orientation: landscape) {\n         margin-bottom: 8px;\n      }\n   "])))
        }
        )), bo = Qe.ZP.button(Zn || (Zn = po(["\n   color: #fff;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   background-color: rgba(255, 255, 255, 0.2) !important;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) !important;\n   border-radius: 8px !important;\n   padding: 10px !important;\n   width: unset;\n   width: 100% !important;\n   &:hover {\n   background-color: rgba(255, 255, 255, 0.1) !important;\n   }\n   ", "\n"], ["\n   color: #fff;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   background-color: rgba(255, 255, 255, 0.2) !important;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) !important;\n   border-radius: 8px !important;\n   padding: 10px !important;\n   width: unset;\n   width: 100% !important;\n   &:hover {\n   background-color: rgba(255, 255, 255, 0.1) !important;\n   }\n   ", "\n"])), (function(n) {
            return "ending" === n.screen && (0,
            Qe.iv)(bn || (bn = po(["\n      background-color: #FF42A5;\n      padding: 16px !important;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 150%;\n      border: none !important;\n      border-radius: 12px !important;\n      &:hover {\n         background-color: rgba(255, 66, 165, 0.9);\n      }\n   "], ["\n      background-color: #FF42A5;\n      padding: 16px !important;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 150%;\n      border: none !important;\n      border-radius: 12px !important;\n      &:hover {\n         background-color: rgba(255, 66, 165, 0.9);\n      }\n   "])))
        }
        )), Zo = Qe.ZP.p(An || (An = po(["\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   color: #FFFFFF;\n   position: relative;\n   margin-bottom: ", ";\n   &:after, &:before {\n      position: absolute;\n      width: 58.5px;\n      height: 1px;\n      background-color: rgba(255, 255, 255, 0.2);\n      content: '';\n      top: 50%;\n      transform: translateY(-50%);\n   }\n   &:after {\n      right: -64.5px;\n   }\n   &:before {\n      left: -64.5px;\n   }\n"], ["\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   color: #FFFFFF;\n   position: relative;\n   margin-bottom: ", ";\n   &:after, &:before {\n      position: absolute;\n      width: 58.5px;\n      height: 1px;\n      background-color: rgba(255, 255, 255, 0.2);\n      content: '';\n      top: 50%;\n      transform: translateY(-50%);\n   }\n   &:after {\n      right: -64.5px;\n   }\n   &:before {\n      left: -64.5px;\n   }\n"])), (function(n) {
            return n.isDesktop ? "16px" : "8px"
        }
        )), Ao = Qe.ZP.ul(En || (En = po(["\n   list-style-type: disc;\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   margin: 16px 0px 0px 0px;\n   padding-left: 16px;\n   color: #EEEDF0;\n   li {\n\n      &:not(:last-child){\n         margin-bottom: 12px;\n      }\n\n      ", "\n   }\n   ", "\n"], ["\n   list-style-type: disc;\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   margin: 16px 0px 0px 0px;\n   padding-left: 16px;\n   color: #EEEDF0;\n   li {\n\n      &:not(:last-child){\n         margin-bottom: 12px;\n      }\n\n      ", "\n   }\n   ", "\n"])), (function(n) {
            return !n.isDesktop && (0,
            Qe.iv)(kn || (kn = po(["\n         @media screen and (orientation: landscape) {\n            margin-bottom: 8px;\n         }\n      "], ["\n         @media screen and (orientation: landscape) {\n            margin-bottom: 8px;\n         }\n      "])))
        }
        ), (function(n) {
            return !n.isDesktop && (0,
            Qe.iv)(Sn || (Sn = po(["\n      @media screen and (orientation: landscape) {\n         margin: 8px 0px 0px 0px;\n      }\n   "], ["\n      @media screen and (orientation: landscape) {\n         margin: 8px 0px 0px 0px;\n      }\n   "])))
        }
        )), ko = Qe.ZP.div(Pn || (Pn = po(["\n   display: flex;\n   flex-direction: column;\n   width: 100%;\n   background-color: transparent;\n   align-items: center;\n"], ["\n   display: flex;\n   flex-direction: column;\n   width: 100%;\n   background-color: transparent;\n   align-items: center;\n"]))), So = Qe.ZP.div(Tn || (Tn = po(["\n   display: flex;\n   flex-grow: 1;\n   width: 100%;\n"], ["\n   display: flex;\n   flex-grow: 1;\n   width: 100%;\n"]))), Eo = Qe.ZP.div(Cn || (Cn = po(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   padding-right: 48px;\n   border-right: 1px solid rgba(255, 255, 255, 0.1);\n   flex: 1;\n   .appIcon {\n      width: 180px;\n      aspect-ratio: 1;\n      border-radius: ", ";\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   padding-right: 48px;\n   border-right: 1px solid rgba(255, 255, 255, 0.1);\n   flex: 1;\n   .appIcon {\n      width: 180px;\n      aspect-ratio: 1;\n      border-radius: ", ";\n   }\n"])), (function(n) {
            return n.isAppPage ? "12px" : "8px"
        }
        )), Po = Qe.ZP.div(Dn || (Dn = po(["\n   display: flex;\n   flex-direction: column;\n   padding-left: 48px;\n   align-items: center;\n   flex: ", ";\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   padding-left: 48px;\n   align-items: center;\n   flex: ", ";\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"])), (function(n) {
            return "ending" === n.screen ? "1" : "unset"
        }
        )), To = Qe.ZP.div(In || (In = po(["\n   padding: 12px;\n   border-radius: 12px;\n   background-color: #fff;\n"], ["\n   padding: 12px;\n   border-radius: 12px;\n   background-color: #fff;\n"]))), Co = Qe.ZP.p(Rn || (Rn = po(["\n   position: absolute;\n   top: -22px;\n   right: -22px;\n   width: 44px;\n   height: 44px;\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 40px;\n   cursor: pointer;\n   &:after, &:before {\n      width: 1px;\n      background-color: #fff;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      content: '';\n      height: 21.63px;\n   }\n   &:after {\n      transform: translate(-50%, -50%) rotate(45deg);\n   }\n   &:before {\n      transform: translate(-50%, -50%) rotate(-45deg);\n   }\n"], ["\n   position: absolute;\n   top: -22px;\n   right: -22px;\n   width: 44px;\n   height: 44px;\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 40px;\n   cursor: pointer;\n   &:after, &:before {\n      width: 1px;\n      background-color: #fff;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      content: '';\n      height: 21.63px;\n   }\n   &:after {\n      transform: translate(-50%, -50%) rotate(45deg);\n   }\n   &:before {\n      transform: translate(-50%, -50%) rotate(-45deg);\n   }\n"]))), Do = Qe.ZP.div(On || (On = po(["\n   margin: 32px 0 -8px;\n   padding: 24px 60px 0px;\n   border-top: 1px solid rgba(255, 255, 255, 0.1);\n   border-radius: 0px 0px 12px 12px;\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: calc(100% + 120px);\n"], ["\n   margin: 32px 0 -8px;\n   padding: 24px 60px 0px;\n   border-top: 1px solid rgba(255, 255, 255, 0.1);\n   border-radius: 0px 0px 12px 12px;\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: calc(100% + 120px);\n"]))), Io = Qe.ZP.p(Ln || (Ln = po(["\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   margin: 0;\n"], ["\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   margin: 0;\n"]))), Ro = Qe.ZP.div(Mn || (Mn = po(["\n   text-align: center;\n   margin-bottom: 32px;\n"], ["\n   text-align: center;\n   margin-bottom: 32px;\n"]))), Oo = (0,
        Qe.ZP)(Ot.Bb)(Bn || (Bn = po(["\n   color: ", ";\n\n   img {\n      width: 24px;\n      margin-right: 8px;\n      vertical-align: middle;\n   }\n"], ["\n   color: ", ";\n\n   img {\n      width: 24px;\n      margin-right: 8px;\n      vertical-align: middle;\n   }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Lo = (0,
        Qe.ZP)(Ot.lU)(Xn || (Xn = po(["\n   color: ", ";\n   margin-top: 4px;\n"], ["\n   color: ", ";\n   margin-top: 4px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Mo = Qe.ZP.div(Nn || (Nn = po(["\n   text-align:center;\n   margin-top:16px;\n"], ["\n   text-align:center;\n   margin-top:16px;\n"]))), Bo = (0,
        Qe.ZP)(Ot.js)(Kn || (Kn = po(["\n   color: ", ";\n"], ["\n   color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Xo = (0,
        Qe.ZP)(Ot.lU)(jn || (jn = po(["\n   color: ", ";\n"], ["\n   color: ", ";\n"])), (function(n) {
            return n.theme.colors.white60
        }
        )), No = (0,
        Qe.ZP)(Ot.IS.withComponent("p"))(zn || (zn = po(["\n   max-width: 180px;\n   color: ", ";\n   margin-top: 16px;\n   text-align: center;\n"], ["\n   max-width: 180px;\n   color: ", ";\n   margin-top: 16px;\n   text-align: center;\n"])), (function(n) {
            return n.theme.colors.white60
        }
        )), Ko = (0,
        Qe.ZP)(Ot.gd)(Yn || (Yn = po(["\n  color: ", ";\n  margin: 32px auto 0;\n  text-align:center;\n  max-width: 360px;\n"], ["\n  color: ", ";\n  margin: 32px auto 0;\n  text-align:center;\n  max-width: 360px;\n"])), (function(n) {
            return n.theme.colors.white50
        }
        )), jo = function(n) {
            var e, t, i, o, r, a, l, d, c, s = n.handleTryNowClick, u = n.screen, p = n.isAppPage, f = (0,
            Dt.$)().t, h = !(0,
            Ge.tq)() && !(0,
            Ge.Em)() && !(0,
            Ge.zc)(), g = (0,
            Ye.useState)(!1), v = g[0], m = g[1], x = (0,
            Ge.Ij)(), y = null === (e = Ue.ZP.appInfo.playFeFeatures.tryAndDownload) || void 0 === e ? void 0 : e.clientLink, w = ((null === (i = null === (t = Ue.ZP.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.cumulativeTimeLimitSecs) || 0) / 3600, b = 0;
            b = w < 1 ? Math.round(60 * w) : Math.round(w);
            var Z = (0,
            He.I0)();
            (0,
            Ye.useEffect)((function() {
                "loading" === u ? (0,
                Ve.L9)(Lt.S5, {
                    element: "LaunchScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                }) : "ending" === u ? (h && (0,
                Ve.L9)(Lt.S5, {
                    element: "TrialEndQRScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                }),
                (0,
                Ve.L9)(Lt.S5, {
                    element: "TrialEndScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })) : "inGame" === u && (0,
                Ve.L9)(Lt.S5, {
                    element: "MidQRScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })
            }
            ), []);
            return (0,
            et.BX)(et.HY, {
                children: [(0,
                et.tZ)(xo, {
                    className: "nowggLogo",
                    children: (0,
                    et.tZ)(ao.Z, {
                        themeType: "light",
                        hasTagline: !1,
                        style: {
                            margin: "0"
                        }
                    })
                }), (0,
                et.BX)(ei.Z, {
                    modalStyles: "loading" !== u && ("ending" !== u || h) || v ? v || "inGame" === u ? go : ho : fo,
                    contentStyle: {
                        backgroundImage: "unset",
                        color: "unset",
                        margin: "0",
                        backgroundColor: "unset",
                        overflow: "visible",
                        maxHeight: "inherit",
                        borderRadius: "inherit"
                    },
                    children: ["inGame" === u && (0,
                    et.tZ)(Co, {
                        onClick: function() {
                            Z({
                                type: Et.Z.SHOW_TRY_NOW,
                                payload: {
                                    tryNowModal: !1
                                }
                            }),
                            (0,
                            Ve.L9)(Lt.S5, {
                                element: "MidQRScreen",
                                action: "Closed",
                                group: "TryAndDownload"
                            })
                        }
                    }), (0,
                    et.BX)(vo, {
                        isDesktop: h,
                        children: ["ending" === u && (0,
                        et.BX)(Ro, {
                            children: [(0,
                            et.BX)(Oo, {
                                children: [(0,
                                et.tZ)("img", {
                                    src: (0,
                                    ti.j)(uo.Z),
                                    alt: f("warning")
                                }), (0,
                                et.tZ)("span", {
                                    children: f("trialLimitReached")
                                })]
                            }), (0,
                            et.tZ)(Lo, {
                                children: f("installToContinue")
                            })]
                        }), ("loading" === u || "ending" === u && (!h || y && !(0,
                        Ge.dl)())) && !v && (0,
                        et.BX)(mo, {
                            screen: u,
                            isDesktop: h,
                            children: [(0,
                            et.tZ)("img", {
                                src: Ue.ZP.appInfo.media.icon,
                                alt: f("appIcon"),
                                className: "appIcon"
                            }), (0,
                            et.tZ)(Ot.Bb, {
                                children: (0,
                                et.tZ)("span", {
                                    style: {
                                        color: "#ffffff",
                                        display: "flex",
                                        textAlign: "center"
                                    },
                                    children: null === (o = Ue.ZP.appInfo) || void 0 === o ? void 0 : o.appName
                                })
                            }), "loading" !== u && (0,
                            et.tZ)(Ot.lU, {
                                children: (0,
                                et.tZ)("span", {
                                    style: {
                                        color: "rgba(255, 255, 255, 0.6)"
                                    },
                                    children: null === (a = null === (r = Ue.ZP.appInfo) || void 0 === r ? void 0 : r.appDeveloperInfo) || void 0 === a ? void 0 : a.name
                                })
                            }), (0,
                            et.BX)(yo, {
                                isDesktop: h,
                                children: ["ending" !== u && (0,
                                et.BX)(et.HY, {
                                    children: [(0,
                                    et.BX)(wo, {
                                        isDesktop: h,
                                        onClick: function() {
                                            return s && s()
                                        },
                                        children: [(0,
                                        et.BX)("div", {
                                            className: "tryNowContainer",
                                            children: [(0,
                                            et.tZ)("img", {
                                                alt: f("tryNow"),
                                                src: (0,
                                                ti.j)(lo),
                                                width: 24,
                                                height: 24
                                            }), (0,
                                            et.tZ)(Ot.js, {
                                                children: f(w > 1 || 1 === w ? "tryNowFor" : "tryNowForMinutes", {
                                                    count: b
                                                })
                                            })]
                                        }), (0,
                                        et.tZ)("span", {
                                            className: "noInstallMsg",
                                            children: f("noInstallMsg")
                                        })]
                                    }), (0,
                                    et.tZ)(Zo, {
                                        isDesktop: h,
                                        children: f("or")
                                    })]
                                }), (0,
                                et.tZ)(bo, {
                                    screen: u,
                                    onClick: function() {
                                        var n = sessionStorage.getItem("isEmbeddedFrame");
                                        h ? (y && !(0,
                                        Ge.dl)() ? n ? window.open(y, "_parent", "noreferrer") : window.open(y, "_self", "noreferrer") : m(!0),
                                        (0,
                                        Ve.L9)(Lt.S5, {
                                            element: "LaunchQRScreen",
                                            action: "Displayed",
                                            group: "TryAndDownload"
                                        })) : (0,
                                        Ge.Cf)(),
                                        "loading" === u ? (0,
                                        Ve.L9)(Lt.S5, {
                                            element: "LaunchScreen",
                                            action: "InstallNowClicked",
                                            group: "TryAndDownload"
                                        }) : "ending" === u && (0,
                                        Ve.L9)(Lt.S5, {
                                            element: "TrialEndScreen",
                                            action: "InstallNowClicked",
                                            group: "TryAndDownload"
                                        })
                                    },
                                    children: f("install")
                                })]
                            }), "ending" !== u && (0,
                            et.BX)(Ao, {
                                isDesktop: h,
                                children: [(0,
                                et.tZ)("li", {
                                    children: f("progressMsg")
                                }), (0,
                                et.tZ)("li", {
                                    children: f("accountSecurityMsg")
                                })]
                            })]
                        }), ("ending" === u && h && !y || "inGame" === u || v) && (0,
                        et.BX)(ko, {
                            children: [(0,
                            et.BX)(So, {
                                children: [(0,
                                et.BX)(Eo, {
                                    isAppPage: p,
                                    children: [(0,
                                    et.tZ)("img", {
                                        src: Ue.ZP.appInfo.media.icon,
                                        alt: f("appIcon"),
                                        className: "appIcon"
                                    }), (0,
                                    et.BX)(Mo, {
                                        children: [(0,
                                        et.tZ)(Bo, {
                                            children: null === (l = Ue.ZP.appInfo) || void 0 === l ? void 0 : l.appName
                                        }), (0,
                                        et.tZ)(Xo, {
                                            children: null === (c = null === (d = Ue.ZP.appInfo) || void 0 === d ? void 0 : d.appDeveloperInfo) || void 0 === c ? void 0 : c.name
                                        })]
                                    })]
                                }), (0,
                                et.BX)(Po, {
                                    screen: u,
                                    children: [(0,
                                    et.tZ)(To, {
                                        children: (0,
                                        et.tZ)(so.Z, {
                                            size: 156,
                                            style: {
                                                height: "156px",
                                                width: "156px"
                                            },
                                            value: "mac" === x || "ios" === x ? Ue.ZP.appInfo.appleAppStoreUrl : Ue.ZP.appInfo.googlePlayStoreUrl
                                        })
                                    }), (0,
                                    et.tZ)(No, {
                                        children: f("scanPhoneDownload")
                                    })]
                                })]
                            }), v && (0,
                            et.BX)(Do, {
                                children: [(0,
                                et.tZ)(Io, {
                                    children: f("wantToTry")
                                }), (0,
                                et.tZ)(vi.z, {
                                    style: {
                                        gap: "4px",
                                        minWidth: "200px"
                                    },
                                    variant: "secondary",
                                    size: "medium",
                                    onClick: function() {
                                        return s && s("bottomBar")
                                    },
                                    text: f("tryNow"),
                                    children: (0,
                                    et.tZ)("img", {
                                        alt: f("tryNow"),
                                        src: (0,
                                        ti.j)(co),
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            })]
                        }), "ending" === u && (0,
                        et.tZ)(Ko, {
                            children: f("progressMsg")
                        })]
                    })]
                })]
            })
        }, zo = t(55072), Yo = t(79322), Ho = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, _o = Qe.ZP.div(Hn || (Hn = Ho(["\n  div {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-height: 65vh;\n      max-width: 65vw;\n      width: 100%;\n    }\n  }\n"], ["\n  div {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-height: 65vh;\n      max-width: 65vw;\n      width: 100%;\n    }\n  }\n"]))), Fo = _o, Uo = function() {
            (0,
            Dt.$)().t;
            var n, e, t = (null === (e = null === (n = null === Ue.ZP || void 0 === Ue.ZP ? void 0 : Ue.ZP.appInfo) || void 0 === n ? void 0 : n.playFeFeatures) || void 0 === e ? void 0 : e.maintenanceWindowStrings) || {}, i = t.title, o = void 0 === i ? "Maintenance in progress" : i, r = t.message, a = void 0 === r ? "We are presently undergoing a scheduled maintenance. Please try again later." : r;
            return (0,
            et.tZ)(Yo.W2, {
                style: {
                    zIndex: 13
                },
                children: (0,
                et.tZ)(Yo.VY, {
                    style: {
                        width: "min(460px, 90vw)",
                        border: "1px solid rgba(255,255,255,0.5)",
                        borderRadius: 8
                    },
                    children: (0,
                    et.tZ)(Fo, {
                        children: (0,
                        et.BX)(Yo.cy, {
                            children: [(0,
                            Ge.tq)() ? (0,
                            et.tZ)(Ot.T4, {
                                center: !0,
                                med: !0,
                                children: o
                            }) : (0,
                            et.tZ)(Ot.T3, {
                                center: !0,
                                med: !0,
                                children: o
                            }), (0,
                            Ge.tq)() ? (0,
                            et.tZ)(Ot.T6, {
                                style: {
                                    opacity: .8
                                },
                                center: !0,
                                children: a
                            }) : (0,
                            et.tZ)(Ot.T5, {
                                style: {
                                    opacity: .8
                                },
                                center: !0,
                                children: a
                            })]
                        })
                    })
                })
            })
        }, Wo = t(9008), Go = t(40942), Vo = t(5152), qo = t(5522), Qo = t(95509), Jo = {
            src: "/play/_next/static/media/bulb-yellow.b465976e.svg",
            height: 17,
            width: 16
        }, $o = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, nr = (0,
        Qe.F4)(_n || (_n = $o(["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(180deg);\n    }\n"], ["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(180deg);\n    }\n"]))), er = (0,
        Qe.F4)(Fn || (Fn = $o(["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n"], ["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n"]))), tr = (0,
        Qe.F4)(Un || (Un = $o(["\n    to {\n        clip: rect(auto, auto, auto, auto);\n    }\n"], ["\n    to {\n        clip: rect(auto, auto, auto, auto);\n    }\n"]))), ir = Qe.ZP.div(Wn || (Wn = $o(["\n    position: fixed;\n    width: 395px;\n    background: linear-gradient(180deg, rgba(36, 63, 139, 0.7) 0%, rgba(30, 115, 157, 0.7) 100%);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    border-radius: 0px 8px 8px 0px;\n    display: flex;\n    align-items: center;\n    bottom: ", ";\n    z-index: 99;\n    height: 61px;\n    padding-right: 12px;\n"], ["\n    position: fixed;\n    width: 395px;\n    background: linear-gradient(180deg, rgba(36, 63, 139, 0.7) 0%, rgba(30, 115, 157, 0.7) 100%);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    border-radius: 0px 8px 8px 0px;\n    display: flex;\n    align-items: center;\n    bottom: ", ";\n    z-index: 99;\n    height: 61px;\n    padding-right: 12px;\n"])), (function(n) {
            return n.desktop ? "unset" : "50px"
        }
        )), or = Qe.ZP.div(Gn || (Gn = $o(["\n    padding-left: 12px;\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n    margin-right: 12px;\n    background: rgba(0, 0, 0, 0.2);\n    img {\n        margin-right: 4px;\n    }\n    h6 {\n        margin: 0;\n    }\n    height: 100%;\n"], ["\n    padding-left: 12px;\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n    margin-right: 12px;\n    background: rgba(0, 0, 0, 0.2);\n    img {\n        margin-right: 4px;\n    }\n    h6 {\n        margin: 0;\n    }\n    height: 100%;\n"]))), rr = Qe.ZP.p(Vn || (Vn = $o(["\n    margin: 0px 12px 0px 0px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 130%;\n    color: #fff;\n    flex: 1;\n"], ["\n    margin: 0px 12px 0px 0px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 130%;\n    color: #fff;\n    flex: 1;\n"]))), ar = Qe.ZP.p(qn || (qn = $o(["\n    width: 30px;\n    height: 30px;\n    margin: 0;\n"], ["\n    width: 30px;\n    height: 30px;\n    margin: 0;\n"]))), lr = Qe.ZP.p(Qn || (Qn = $o(["\n    position: absolute;\n    right: 12px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 50px;\n    cursor: ", ";;\n    clip: rect(0px, 30px, 30px, 15px);\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: linear;\n    animation-duration: 0.01s;\n    animation-delay: 3s;\n    animation-name: ", ";\n    pointer-events: ", ";\n    margin: 0px;\n    .circle {\n        width: 28px;\n        height: 28px;\n        border: 1px solid #fff;\n        border-radius: 50px;\n        position: absolute;\n        clip: rect(0px, 15px, 30px, 0px);\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        animation-timing-function: linear;\n        &.left {\n            animation-duration: 6s;\n            animation-name: ", ";\n        }\n        &.right {\n            animation-duration: 3s;\n            animation-name: ", ";\n        }\n      }\n    &:after, &:before {\n        width: 1px;\n        background-color: ", ";\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 16px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"], ["\n    position: absolute;\n    right: 12px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 50px;\n    cursor: ", ";;\n    clip: rect(0px, 30px, 30px, 15px);\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: linear;\n    animation-duration: 0.01s;\n    animation-delay: 3s;\n    animation-name: ", ";\n    pointer-events: ", ";\n    margin: 0px;\n    .circle {\n        width: 28px;\n        height: 28px;\n        border: 1px solid #fff;\n        border-radius: 50px;\n        position: absolute;\n        clip: rect(0px, 15px, 30px, 0px);\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        animation-timing-function: linear;\n        &.left {\n            animation-duration: 6s;\n            animation-name: ", ";\n        }\n        &.right {\n            animation-duration: 3s;\n            animation-name: ", ";\n        }\n      }\n    &:after, &:before {\n        width: 1px;\n        background-color: ", ";\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 16px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"])), (function(n) {
            return n.disabled ? "not-allowed" : "pointer"
        }
        ), tr, (function(n) {
            return n.disabled ? "none" : "all"
        }
        ), er, nr, (function(n) {
            return n.disabled ? "rgba(255, 255, 255, 0.1)" : "#fff"
        }
        )), dr = function() {
            var n = (0,
            Ye.useState)(!0)
              , e = n[0]
              , t = n[1]
              , i = !(0,
            Ge.tq)() && !(0,
            Ge.Em)() && !(0,
            Ge.zc)()
              , o = (0,
            Ye.useState)(!1)
              , r = o[0]
              , a = o[1]
              , l = (0,
            Ye.useState)({
                left: 0,
                height: 0
            })
              , d = l[0]
              , c = l[1]
              , s = (0,
            Dt.$)().t
              , u = (0,
            He.I0)();
            (0,
            Ye.useEffect)((function() {
                (0,
                Ve.L9)(Lt.S5, {
                    element: "LoginTip",
                    action: "Displayed",
                    group: "TryAndDownload"
                });
                var n = kt.Z.getState().play.videoRef
                  , e = document.getElementById("htmlFrame");
                if (n && n.current) {
                    var t = n.current;
                    c({
                        left: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().left,
                        height: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().height
                    })
                } else
                    e && c({
                        left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                        height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                    });
                a(!0)
            }
            ), []),
            setTimeout((function() {
                t(!1)
            }
            ), 6e3);
            return r ? (0,
            et.BX)(ir, {
                desktop: i,
                style: {
                    top: i ? "".concat((window.innerHeight - d.height) / 2 + 100, "px") : "unset",
                    left: d.left
                },
                children: [(0,
                et.BX)(or, {
                    children: [(0,
                    et.tZ)("img", {
                        alt: s("tip"),
                        src: (0,
                        ti.j)(Jo),
                        height: 16,
                        width: 16
                    }), (0,
                    et.tZ)(Ot.T6, {
                        white: !0,
                        med: !0,
                        children: s("tip")
                    })]
                }), (0,
                et.tZ)(rr, {
                    children: s("useEmail")
                }), (0,
                et.tZ)(ar, {}), (0,
                et.BX)(lr, {
                    disabled: e,
                    onClick: function() {
                        u({
                            type: Et.Z.SHOW_LOGIN_TIP,
                            payload: {
                                loginTip: !1
                            }
                        }),
                        (0,
                        Ve.L9)(Lt.S5, {
                            element: "LoginTip",
                            action: "Closed",
                            group: "TryAndDownload"
                        })
                    },
                    children: [(0,
                    et.tZ)("div", {
                        className: "circle left"
                    }), (0,
                    et.tZ)("div", {
                        className: "circle right"
                    })]
                })]
            }) : null
        }, cr = t(90496), sr = t(98219), ur = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, pr = Qe.ZP.div(Jn || (Jn = ur(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  z-index: -1;\n  pointer-events: all;\n  border-radius: ", ";\n  background: transparent;\n  z-index: -1;\n  height: fit-content;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n\n  @media screen and (max-width: 600px){\n    width: fit-content;\n    height: 90vh;\n  }\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  z-index: -1;\n  pointer-events: all;\n  border-radius: ", ";\n  background: transparent;\n  z-index: -1;\n  height: fit-content;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n\n  @media screen and (max-width: 600px){\n    width: fit-content;\n    height: 90vh;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        )), fr = Qe.ZP.div($n || ($n = ur(["\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  color: ", ";\n  position: relative;\n  backdrop-filter: blur(10px);\n  &:hover {\n    cursor: grab;\n  }\n  &.started {\n    display: flex;\n  }\n"], ["\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  color: ", ";\n  position: relative;\n  backdrop-filter: blur(10px);\n  &:hover {\n    cursor: grab;\n  }\n  &.started {\n    display: flex;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), hr = Qe.ZP.div(ne || (ne = ur(["\n  padding: 4px 1px 3px 10px;\n  cursor: pointer;\n"], ["\n  padding: 4px 1px 3px 10px;\n  cursor: pointer;\n"]))), gr = Qe.ZP.p(ee || (ee = ur(["\n  position: relative;\n  width: 2px;\n  height: 10px;\n  right: ", ';\n  top: -2px;\n  &::after,\n  &::before {\n    content: "";\n    width: 2px;\n    height: 11px;\n    position: absolute;\n    background-color: ', ";\n  }\n  &::before {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    right: 0;\n    transform: rotate(45deg);\n  }\n"], ["\n  position: relative;\n  width: 2px;\n  height: 10px;\n  right: ", ';\n  top: -2px;\n  &::after,\n  &::before {\n    content: "";\n    width: 2px;\n    height: 11px;\n    position: absolute;\n    background-color: ', ";\n  }\n  &::before {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    right: 0;\n    transform: rotate(45deg);\n  }\n"])), (function(n) {
            return n.theme.spacing.base
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), vr = Qe.ZP.p(te || (te = ur(["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  span {\n    width: 22px;\n    height: 1px;\n    background: ", ";\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  span {\n    width: 22px;\n    height: 1px;\n    background: ", ";\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.spacing.base
        }
        )), mr = Qe.ZP.div(ie || (ie = ur(["\n  margin: 0;\n  width: 533px;\n  height: 400px;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"], ["\n  margin: 0;\n  width: 533px;\n  height: 400px;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.border.radius3
        }
        )), xr = function() {
            return (xr = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, yr = 0, wr = function() {
            return yr
        }, br = -1, Zr = function() {
            return br
        }, Ar = function() {
            yr = 0,
            br += 1
        }, kr = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.I0)()
              , t = (0,
            Ye.useRef)(null)
              , i = (0,
            Ye.useContext)(We.x)
              , o = (0,
            Ye.useState)(10)
              , r = o[0]
              , a = o[1]
              , l = (0,
            Ye.useState)(!1)
              , d = l[0]
              , c = l[1]
              , s = (0,
            Ye.useState)(!1)
              , u = s[0]
              , p = s[1]
              , f = (0,
            He.v9)((function(n) {
                return n.ads.rewardedAdsSDK
            }
            ))
              , h = (0,
            He.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , g = 18e4
              , v = !1
              , m = (0,
            Ye.useRef)(!1)
              , x = (0,
            Ye.useRef)()
              , y = (0,
            Ye.useRef)("")
              , w = !1
              , b = (0,
            Ye.useRef)(null)
              , Z = (0,
            Ye.useRef)(null)
              , A = (0,
            Ye.useRef)(null)
              , k = (0,
            Ye.useState)(!0)
              , S = k[0]
              , E = k[1]
              , P = (0,
            Ye.useRef)(!1)
              , T = (0,
            Ye.useRef)(!1)
              , C = (0,
            Ye.useRef)(!1);
            C.current = (0,
            He.v9)((function(n) {
                return n.play.keyboardActive
            }
            ));
            var D = window.devicePixelRatio
              , I = kt.Z.getState().play.videoRef
              , R = 0
              , O = 0
              , L = {}
              , M = {}
              , B = function() {
                A.current = setTimeout((function() {
                    return t.current && (t.current.style.left = "0",
                    t.current.style.top = "unset",
                    t.current.style.bottom = "0"),
                    f ? (P.current = !0,
                    void (y.current = "loadWrapperAgain")) : C.current ? (T.current = !0,
                    void (y.current = "loadWrapperAgain")) : void ("visible" === document.visibilityState ? j() : (v = !0,
                    y.current = "loadWrapperAgain"))
                }
                ), g)
            }
              , X = function(n) {
                var e;
                if (p(!1),
                a(10),
                c(!1),
                Z.current && clearTimeout(Z.current),
                n)
                    try {
                        null === (e = null === x || void 0 === x ? void 0 : x.current) || void 0 === e || e.closePlayer()
                    } catch (t) {}
                x.current = void 0
            }
              , N = function(n, e) {
                n.on("adNoFill", (function() {
                    K(e)
                }
                )).on("adError", (function() {
                    K(e)
                }
                )).on("adReady", (function() {
                    var n;
                    null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.setVideoVolume(0),
                    M = window.pbjs.getBidResponses() || {}
                }
                )).on("adProgress", (function(n, t) {
                    var i, o, r, a = t.milestone;
                    if ("complete" === a) {
                        if (w)
                            return;
                        X()
                    } else if ("start" === a) {
                        null === (i = null === x || void 0 === x ? void 0 : x.current) || void 0 === i || i.setVideoVolume(0),
                        R = (null === (o = null === I || void 0 === I ? void 0 : I.current) || void 0 === o ? void 0 : o.clientHeight) || 0,
                        O = (null === (r = null === I || void 0 === I ? void 0 : I.current) || void 0 === r ? void 0 : r.clientWidth) || 0;
                        var l = (M[e ? "mid-roll" : "stream"] || {}).bids
                          , d = (void 0 === l ? [] : l)[0] || {}
                          , s = d.bidder
                          , u = d.cpm
                          , p = d.currency
                          , f = d.netRevenue
                          , h = d.status
                          , g = d.statusMessage
                          , v = d.timeToRespond
                          , m = d.ttl;
                        L = {
                            bidder: s,
                            cpm: u,
                            currency: p,
                            netRevenue: f,
                            status: h,
                            statusMessage: g,
                            timeToRespond: v,
                            ttl: m
                        },
                        (0,
                        Ve.L9)("AdDisplayed", xr({
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: 533,
                            adHeight: 400,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: R,
                            androidHeight: O,
                            pixelRatio: D,
                            repeatCount: Zr(),
                            retryCount: wr()
                        }, L)),
                        B(),
                        c(!0),
                        w = !1
                    }
                }
                )).on("adSkipped", (function() {
                    X(),
                    w = !0
                }
                ))
            };
            function K(n) {
                var e, t, o, r;
                if (R = (null === (e = null === I || void 0 === I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                O = (null === (t = null === I || void 0 === I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                (0,
                Ve.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: R,
                    androidHeight: O,
                    pixelRatio: D,
                    repeatCount: Zr(),
                    retryCount: wr()
                }),
                n) {
                    yr += 1;
                    var a = (0,
                    Fe.dl)(i);
                    (0,
                    Ve.L9)("AdRequestedNg", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: O,
                        pixelRatio: D,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.tude) || void 0 === o ? void 0 : o.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (r = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === r ? void 0 : r.pubads),
                        repeatCount: Zr(),
                        retryCount: wr()
                    }),
                    window.tude.cmd.push((function() {
                        var n, e;
                        (0,
                        Ve.L9)("AdRequested", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: 533,
                            adHeight: 400,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: R,
                            androidHeight: O,
                            pixelRatio: D,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                            isGptLoaded: "undefined" !== typeof (null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads),
                            repeatCount: Zr(),
                            retryCount: wr()
                        }),
                        window.tude.requestInstreamPlayer({
                            divId: "prebid-wrapper-mid-roll",
                            code: "stream",
                            mode: "adOnly",
                            targeting: xr(xr({}, a), {
                                ads_loc: "video-auto-out"
                            })
                        }).then((function(n) {
                            x.current = n,
                            N(n, !1)
                        }
                        )).catch((function(n) {}
                        ))
                    }
                    ))
                } else
                    B(),
                    X()
            }
            function j() {
                var n, e, t, o;
                if (kt.Z.getState().play.isRecording && (0,
                Ge.Dx)())
                    return m.current = !0,
                    void (y.current = "loadWrapperAgain");
                p(!0),
                R = (null === (n = null === I || void 0 === I ? void 0 : I.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                O = (null === (e = null === I || void 0 === I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                Ar(),
                (0,
                Ve.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: R,
                    androidHeight: O,
                    pixelRatio: D,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                    repeatCount: Zr(),
                    retryCount: wr()
                }),
                window.tude.cmd.push((function() {
                    var n, e, t = (0,
                    Fe.dl)(i);
                    (0,
                    Ve.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: O,
                        pixelRatio: D,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads),
                        repeatCount: Zr(),
                        retryCount: wr()
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll",
                        code: "mid-roll",
                        mode: "adOnly",
                        targeting: xr(xr({}, t), {
                            ads_loc: "video-auto-out"
                        })
                    }).then((function(n) {
                        x.current = n,
                        N(n, !0)
                    }
                    )).catch((function(n) {}
                    ))
                }
                ))
            }
            var z = function() {
                var n, e;
                if (kt.Z.getState().play.isRecording && (0,
                Ge.Dx)())
                    return m.current = !0,
                    void (y.current = "loadMidRoll");
                p(!0),
                Ar(),
                (0,
                Ve.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: R,
                    androidHeight: O,
                    pixelRatio: D,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads),
                    repeatCount: Zr(),
                    retryCount: wr()
                }),
                window.tude.cmd.push((function() {
                    var n, e, t, o, r = (0,
                    Fe.dl)(i);
                    R = (null === (n = null === I || void 0 === I ? void 0 : I.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                    O = (null === (e = null === I || void 0 === I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                    (0,
                    Ve.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: O,
                        pixelRatio: D,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                        repeatCount: Zr(),
                        retryCount: wr()
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll",
                        code: "mid-roll",
                        mode: "adOnly",
                        targeting: xr(xr({}, r), {
                            ads_loc: "video-auto-out"
                        })
                    }).then((function(n) {
                        x.current = n,
                        N(n, !0)
                    }
                    )).catch((function(n) {}
                    ))
                }
                ))
            }
              , Y = function() {
                if ("visible" === document.visibilityState) {
                    if (f)
                        return void (P.current = !0);
                    v && (v = !1,
                    "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j())
                }
            };
            return (0,
            Ye.useEffect)((function() {
                f ? X() : P.current && (P.current = !1,
                "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j())
            }
            ), [f]),
            (0,
            Ye.useEffect)((function() {
                !h && m.current ? (m.current = !1,
                "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j()) : h && (0,
                Ge.Dx)() && X(!0)
            }
            ), [h]),
            (0,
            Ye.useEffect)((function() {
                return document.addEventListener("visibilitychange", Y),
                t.current && (t.current.style.left = "0",
                t.current.style.top = "unset",
                t.current.style.bottom = "0"),
                b.current = setTimeout((function() {
                    return f ? (P.current = !0,
                    void (y.current = "loadMidRoll")) : C.current ? (T.current = !0,
                    void (y.current = "loadMidRoll")) : void ("visible" === document.visibilityState ? z() : (v = !0,
                    y.current = "loadMidRoll"))
                }
                ), g),
                function() {
                    b.current && clearTimeout(b.current),
                    A.current && clearTimeout(A.current),
                    document.removeEventListener("visibilitychange", Y)
                }
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                e({
                    type: Et.Z.SET_MID_ROLL_AD,
                    payload: {
                        midRollAdRef: t
                    }
                })
            }
            ), [t]),
            (0,
            Ye.useEffect)((function() {
                return d && (E(!0),
                Z.current = setTimeout((function() {
                    r > 1 ? a(r - 1) : (E(!1),
                    Z.current && clearTimeout(Z.current))
                }
                ), 1e3)),
                e({
                    type: Et.Z.SET_MID_ROLL_AD,
                    payload: {
                        midRollAdVisible: d
                    }
                }),
                d || (0,
                sr.XW)(),
                function() {
                    Z.current && clearTimeout(Z.current)
                }
            }
            ), [d, r]),
            (0,
            Ye.useEffect)((function() {
                T.current && (T.current = !1,
                "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j())
            }
            ), [C.current]),
            (0,
            et.BX)(pr, {
                ref: t,
                className: "".concat(u ? "show" : "", " ").concat(d ? "started" : ""),
                children: [(0,
                et.BX)(fr, {
                    "aria-hidden": "true",
                    className: "".concat(d ? "started" : ""),
                    children: [(0,
                    et.tZ)("p", {
                        children: n("ad")
                    }), S && (0,
                    et.tZ)("p", {
                        children: n("closeAdIn", {
                            time: r
                        })
                    }), !S && (0,
                    et.tZ)(hr, {
                        "aria-hidden": "true",
                        onClick: function() {
                            X(!0)
                        },
                        children: (0,
                        et.tZ)(gr, {})
                    }), (0,
                    et.BX)(vr, {
                        children: [(0,
                        et.tZ)("span", {}), (0,
                        et.tZ)("span", {})]
                    })]
                }), (0,
                et.tZ)(mr, {
                    id: "prebid-wrapper-mid-roll",
                    className: "".concat(d ? "started" : "")
                })]
            })
        }, Sr = (0,
        Ye.memo)(kr), Er = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Pr = (0,
        Qe.F4)(oe || (oe = Er(["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(180deg); }\n  100% { transform: rotate(180deg); }\n"], ["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(180deg); }\n  100% { transform: rotate(180deg); }\n"]))), Tr = (0,
        Qe.F4)(re || (re = Er(["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(0deg); }\n  100% { transform: rotate(180deg); }\n"], ["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(0deg); }\n  100% { transform: rotate(180deg); }\n"]))), Cr = Qe.ZP.div(ae || (ae = Er(["\n  position: absolute;\n  border: 2px solid rgba(217, 217, 217, 0.01);\n  border-radius: 400px;\n  background: rgba(217, 217, 217, 0.01);\n  backdrop-filter: blur(12px);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  color: #fff;\n  z-index: 9999;\n  text-align: center;\n  .circle {\n    top: 0;\n    left: 0;\n  }\n  .circle.left {\n    position: absolute;\n    clip: rect(0, 80px, 80px, 40px);\n    }\n    .circle.right {\n        position: absolute;\n        clip: rect(0px, 40px, 80px, 0px);\n    }\n    .circle span {\n        width: 80px;\n        height: 80px;\n        border-radius: 100%;\n        position: absolute;\n        border: 2px solid #fff;\n    }\n    .circle.left span {\n        clip: rect(0px, 40px, 80px, 0px);\n        animation: ", " 5s infinite linear;\n    }\n    .circle.right span {\n        clip: rect(0, 80px, 80px, 40px);\n        animation: ", " 5s infinite linear;\n    }\n"], ["\n  position: absolute;\n  border: 2px solid rgba(217, 217, 217, 0.01);\n  border-radius: 400px;\n  background: rgba(217, 217, 217, 0.01);\n  backdrop-filter: blur(12px);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  color: #fff;\n  z-index: 9999;\n  text-align: center;\n  .circle {\n    top: 0;\n    left: 0;\n  }\n  .circle.left {\n    position: absolute;\n    clip: rect(0, 80px, 80px, 40px);\n    }\n    .circle.right {\n        position: absolute;\n        clip: rect(0px, 40px, 80px, 0px);\n    }\n    .circle span {\n        width: 80px;\n        height: 80px;\n        border-radius: 100%;\n        position: absolute;\n        border: 2px solid #fff;\n    }\n    .circle.left span {\n        clip: rect(0px, 40px, 80px, 0px);\n        animation: ", " 5s infinite linear;\n    }\n    .circle.right span {\n        clip: rect(0, 80px, 80px, 40px);\n        animation: ", " 5s infinite linear;\n    }\n"])), Pr, Tr), Dr = Qe.ZP.div(le || (le = Er(["\n    display: flex;\n    flex-direction: column;\n    align: items: center;\n    justify-content: center;\n    .timeLeft {\n        font-weight: 600;\n        font-size: 16px;\n    }\n    p {\n        margin: 0;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align: items: center;\n    justify-content: center;\n    .timeLeft {\n        font-weight: 600;\n        font-size: 16px;\n    }\n    p {\n        margin: 0;\n    }\n"]))), Ir = function() {
            var n = (0,
            Ye.useState)(5)
              , e = n[0]
              , t = n[1]
              , i = (0,
            Ye.useState)({
                left: 0,
                top: 0,
                height: 0,
                width: 0
            })
              , o = i[0]
              , r = i[1]
              , a = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            ));
            return (0,
            Ye.useLayoutEffect)((function() {
                var n = kt.Z.getState().play.videoRef
                  , e = document.getElementById("htmlFrame");
                if (n && n.current) {
                    var t = n.current;
                    r({
                        left: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().left,
                        top: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().top,
                        height: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().height,
                        width: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().width
                    })
                } else
                    e && r({
                        left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                        top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().top,
                        height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height,
                        width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width
                    })
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                var n = setTimeout((function() {
                    e > 0 ? t(e - 1) : clearTimeout(n)
                }
                ), 1e3);
                return function() {
                    return clearTimeout(n)
                }
            }
            ), [e]),
            (0,
            et.BX)(Cr, {
                style: {
                    top: (0,
                    Ge.tq)() ? a === qe.cj.portrait ? "".concat(o.top + o.height - 120, "px") : "".concat(o.left + o.width - 120, "px") : "".concat(o.top + 10, "px"),
                    left: (0,
                    Ge.tq)() ? a === qe.cj.portrait ? "".concat(o.left + 20, "px") : "".concat(o.top + 20, "px") : "".concat(o.left + 10, "px")
                },
                children: [(0,
                et.tZ)("div", {
                    className: "circle left rotate",
                    children: (0,
                    et.tZ)("span", {})
                }), (0,
                et.tZ)("div", {
                    className: "circle right rotate",
                    children: (0,
                    et.tZ)("span", {})
                }), (0,
                et.BX)(Dr, {
                    children: [(0,
                    et.tZ)("p", {
                        children: "Ad in"
                    }), (0,
                    et.tZ)("p", {
                        className: "timeLeft",
                        children: e
                    })]
                })]
            })
        }, Rr = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Or = Qe.ZP.div(de || (de = Rr(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  pointer-events: all;\n  background: #000;\n  z-index: -1;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  pointer-events: all;\n  background: #000;\n  z-index: -1;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n"]))), Lr = Qe.ZP.div(ce || (ce = Rr(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"]))), Mr = function() {
            return (Mr = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Br = -1, Xr = function() {
            return Br
        }, Nr = function() {
            Br += 1
        }, Kr = function() {
            var n, e, t, i = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            )), o = (0,
            Ye.useRef)(null), r = (0,
            Ye.useContext)(We.x), a = (0,
            Ye.useState)(!1), l = a[0], d = a[1], c = (0,
            Ye.useState)(!1), s = c[0], u = c[1], p = (0,
            Ye.useState)(!1), f = p[0], h = p[1], g = 24e4, v = !1, m = (0,
            Ye.useRef)(""), x = (0,
            Ye.useRef)(), y = !1, w = (0,
            Ye.useRef)(null), b = window.devicePixelRatio, Z = 0, A = 0, k = {}, S = {}, E = function() {
                u(!1),
                d(!1)
            }, P = function() {
                t = setTimeout((function() {
                    "visible" === document.visibilityState ? I() : (v = !0,
                    m.current = "loadWrapperAgain")
                }
                ), g),
                e = setTimeout((function() {
                    h(!0)
                }
                ), g - 5e3)
            }, T = function() {
                var n, e;
                (0,
                Ge.tq)() ? (n = i === qe.cj.portrait ? window.innerWidth : window.innerHeight,
                e = i === qe.cj.portrait ? window.innerHeight : window.innerWidth) : (n = window.innerWidth,
                e = window.innerHeight);
                var t, r, a = (t = e,
                Math.ceil(t * (16 / 9))), l = e;
                a > l && (r = a = n,
                l = Math.ceil(r / (16 / 9))),
                o.current && (o.current.style.width = "".concat(a, "px"),
                o.current.style.height = "".concat(l, "px")),
                function(n, e) {
                    Z = n,
                    A = e
                }(a, l),
                clearTimeout(w.current),
                w.current = setTimeout((function() {
                    var n;
                    E(),
                    (0,
                    Ve.L9)("AdRequestTimeout", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: Z,
                        adHeight: A,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        pixelRatio: b,
                        repeatCount: Xr()
                    }),
                    P(),
                    null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.closePlayer()
                }
                ), 15e3)
            }, C = function() {
                (0,
                Ve.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: Z,
                    adHeight: A,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    pixelRatio: b,
                    repeatCount: Xr()
                }),
                clearTimeout(w.current),
                P(),
                E()
            }, D = function(n) {
                n.on("adError", (function() {
                    g = 3e4,
                    C()
                }
                )).on("adReady", (function() {
                    var n;
                    null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.setVideoVolume(1),
                    clearTimeout(w.current),
                    clearTimeout(w.current),
                    S = window.pbjs.getBidResponses(),
                    w.current = setTimeout((function() {
                        var n;
                        E(),
                        (0,
                        Ve.L9)("AdRequestTimeout", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: Z,
                            adHeight: A,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            pixelRatio: b,
                            repeatCount: Xr()
                        }),
                        P(),
                        null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.closePlayer()
                    }
                    ), 1e4)
                }
                )).on("adNoFill", (function() {
                    g = 3e4,
                    C()
                }
                )).on("adProgress", (function(n, e) {
                    var t, i = e.milestone;
                    if ("complete" === i) {
                        if (y)
                            return;
                        E()
                    } else if ("start" === i) {
                        null === (t = null === x || void 0 === x ? void 0 : x.current) || void 0 === t || t.setVideoVolume(1),
                        clearTimeout(w.current);
                        var o = (S.stream || {}).bids
                          , r = (void 0 === o ? [] : o)[0] || {}
                          , a = r.bidder
                          , l = r.cpm
                          , c = r.currency
                          , s = r.netRevenue
                          , u = r.status
                          , p = r.statusMessage
                          , f = r.timeToRespond
                          , h = r.ttl;
                        k = {
                            bidder: a,
                            cpm: l,
                            currency: c,
                            netRevenue: s,
                            status: u,
                            statusMessage: p,
                            timeToRespond: f,
                            ttl: h
                        },
                        (0,
                        Ve.L9)("AdDisplayed", Mr({
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: Z,
                            adHeight: A,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            pixelRatio: b,
                            repeatCount: Xr()
                        }, k)),
                        g = 24e4,
                        P(),
                        d(!0),
                        y = !1
                    }
                }
                )).on("adSkipped", (function() {
                    E(),
                    y = !0
                }
                ))
            };
            function I() {
                var n, t;
                T(),
                u(!0),
                Nr(),
                (0,
                Ve.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: Z,
                    adHeight: A,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    pixelRatio: b,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                    repeatCount: Xr()
                }),
                window.tude.cmd.push((function() {
                    var n, t, i = (0,
                    Fe.dl)(r);
                    (0,
                    Ve.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: Z,
                        adHeight: A,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        pixelRatio: b,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                        repeatCount: Xr()
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll-fullscreen",
                        code: "stream",
                        mode: "adOnly",
                        targeting: Mr(Mr({}, i), {
                            ads_loc: "video-auto-out"
                        }),
                        playerOptions: {
                            aspectRatio: "16:9"
                        }
                    }).then((function(n) {
                        x.current = n,
                        D(n)
                    }
                    )).catch((function(n) {}
                    )),
                    clearTimeout(e),
                    h(!1)
                }
                ))
            }
            var R = function() {
                var n, t;
                T(),
                u(!0),
                Nr(),
                (0,
                Ve.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: Z,
                    adHeight: A,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    pixelRatio: b,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                    repeatCount: Xr()
                }),
                window.tude.cmd.push((function() {
                    var n, t, i = (0,
                    Fe.dl)(r);
                    (0,
                    Ve.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: Z,
                        adHeight: A,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        pixelRatio: b,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                        repeatCount: Xr()
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll-fullscreen",
                        code: "stream",
                        mode: "adOnly",
                        targeting: Mr(Mr({}, i), {
                            ads_loc: "video-auto-out"
                        }),
                        playerOptions: {
                            aspectRatio: "16:9"
                        }
                    }).then((function(n) {
                        x.current = n,
                        D(n)
                    }
                    )).catch((function(n) {}
                    )),
                    clearTimeout(e),
                    h(!1)
                }
                ))
            }
              , O = function() {
                "visible" === document.visibilityState && v && (v = !1,
                "loadMidRoll" === m.current ? R() : "loadWrapperAgain" === m.current && I())
            };
            return (0,
            Ye.useEffect)((function() {
                return document.addEventListener("visibilitychange", O),
                n = setTimeout((function() {
                    "visible" === document.visibilityState ? R() : (v = !0,
                    m.current = "loadMidRoll")
                }
                ), g),
                e = setTimeout((function() {
                    h(!0)
                }
                ), g - 5e3),
                function() {
                    clearTimeout(n),
                    clearTimeout(t),
                    clearTimeout(e),
                    clearTimeout(w.current),
                    document.removeEventListener("visibilitychange", O)
                }
            }
            ), []),
            (0,
            et.BX)(et.HY, {
                children: [f && (0,
                et.tZ)(Ir, {}), (0,
                et.tZ)(Or, {
                    className: "".concat(s ? "show" : "", " ").concat(l ? "started" : ""),
                    children: (0,
                    et.tZ)(Lr, {
                        ref: o,
                        id: "prebid-wrapper-mid-roll-fullscreen",
                        className: "".concat(l ? "started" : "")
                    })
                })]
            })
        }, jr = (0,
        Ye.memo)(Kr), zr = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Yr = (0,
        Qe.iv)(se || (se = zr(["\n  position: absolute;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 4px 8px;\n  background: ", ";\n"], ["\n  position: absolute;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 4px 8px;\n  background: ", ";\n"])), (function(n) {
            return n.theme.colors.black40
        }
        )), Hr = Qe.ZP.div(ue || (ue = zr(["\n  margin: 0;\n  opacity: 0;\n  .videoAd {\n    opacity: 0;\n  }\n  &.started {\n    opacity: 1;\n    z-index: 99;\n    .videoAd {\n      opacity: 1;\n    }\n  }\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  &.blurBG {\n    background: ", ";\n    opacity: 1;\n    z-index: 99;\n    backdrop-filter: blur(12px);\n  }\n"], ["\n  margin: 0;\n  opacity: 0;\n  .videoAd {\n    opacity: 0;\n  }\n  &.started {\n    opacity: 1;\n    z-index: 99;\n    .videoAd {\n      opacity: 1;\n    }\n  }\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  &.blurBG {\n    background: ", ";\n    opacity: 1;\n    z-index: 99;\n    backdrop-filter: blur(12px);\n  }\n"])), (function(n) {
            return n.theme.colors.black
        }
        ), (function(n) {
            return n.theme.colors.black70
        }
        )), _r = Qe.ZP.div(pe || (pe = zr(["\n  position: relative;\n  .adText{\n    ", "\n    top: 0px;\n    right: 100%;\n    z-index: 9;\n  }\n  .videoAd{\n    z-index: 1;\n  }\n"], ["\n  position: relative;\n  .adText{\n    ", "\n    top: 0px;\n    right: 100%;\n    z-index: 9;\n  }\n  .videoAd{\n    z-index: 1;\n  }\n"])), Yr), Fr = function() {
            return (Fr = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Ur = -1, Wr = function() {
            return Ur
        }, Gr = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.I0)()
              , t = (0,
            Ye.useContext)(We.x)
              , i = (0,
            Ye.useState)(!1)
              , o = i[0]
              , r = i[1]
              , a = (0,
            Ye.useState)(!1)
              , l = a[0]
              , d = a[1]
              , c = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , s = (0,
            Ye.useRef)(null)
              , u = (0,
            Ye.useRef)()
              , p = (0,
            Ye.useRef)(null)
              , f = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , h = (0,
            He.v9)((function(n) {
                return n.play.isExperienceEnded
            }
            ))
              , g = (0,
            He.v9)((function(n) {
                return n.play.muted
            }
            ))
              , v = !1
              , m = 0
              , x = 0
              , y = 0
              , w = 0
              , b = window.devicePixelRatio
              , Z = {}
              , A = function() {
                var n, e, t = Math.min(window.innerWidth, window.innerHeight), i = Math.max(window.innerWidth, window.innerHeight), o = c === qe.cj.portrait ? t - 20 : i - 20, r = c === qe.cj.portrait ? i : t - 50, a = (n = r,
                Math.ceil(1.33 * n)), l = r;
                a > o && (e = a = o,
                l = Math.ceil(e / 1.33)),
                s.current && (s.current.style.width = "".concat(a, "px"),
                s.current.style.height = "".concat(l, "px")),
                m = a,
                x = l
            }
              , k = function() {
                var n;
                r(!1),
                (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.muted) && !g && (f.current.muted = !1),
                e({
                    type: Et.Z.SET_EXPERIENCE_STATE,
                    payload: {
                        isExperienceEnded: !1
                    }
                }),
                d(!1)
            }
              , S = function() {
                var n, e;
                y = (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                w = (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                (0,
                Ve.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: m,
                    adHeight: x,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: y,
                    androidHeight: w,
                    pixelRatio: b,
                    repeatCount: Wr()
                }),
                k()
            }
              , E = function(n) {
                n.on("adNoFill", (function() {
                    S()
                }
                )).on("adReady", (function() {
                    !function() {
                        var n, e, t;
                        null === (n = null === u || void 0 === u ? void 0 : u.current) || void 0 === n || n.setVideoVolume(0),
                        y = (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                        w = (null === (t = null === f || void 0 === f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                        var i = (window.pbjs.getBidResponses().stream || {}).bids
                          , o = (void 0 === i ? [] : i)[0] || {}
                          , r = o.bidder
                          , a = o.cpm
                          , l = o.currency
                          , d = o.netRevenue
                          , c = o.status
                          , s = o.statusMessage
                          , p = o.timeToRespond
                          , h = o.ttl;
                        Z = {
                            bidder: r,
                            cpm: a,
                            currency: l,
                            netRevenue: d,
                            status: c,
                            statusMessage: s,
                            timeToRespond: p,
                            ttl: h
                        },
                        (0,
                        Ve.L9)("AdDisplayed", Fr({
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: m,
                            adHeight: x,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: y,
                            androidHeight: w,
                            pixelRatio: b,
                            repeatCount: Wr()
                        }, Z))
                    }()
                }
                )).on("adError", (function() {
                    S()
                }
                )).on("adProgress", (function(n, e) {
                    var t, i = e.milestone;
                    if ("complete" === i) {
                        if (v)
                            return;
                        k()
                    } else
                        "start" === i && (p.current && clearTimeout(p.current),
                        d(!1),
                        r(!0),
                        v = !1,
                        null === (t = null === u || void 0 === u ? void 0 : u.current) || void 0 === t || t.setVideoVolume(0))
                }
                )).on("adSkipped", (function() {
                    k(),
                    v = !0
                }
                ))
            }
              , P = function() {
                var n, e, i, o;
                A(),
                (0,
                Ve.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: m,
                    adHeight: x,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                    androidHeight: (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                    pixelRatio: b,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: "undefined" !== typeof (null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                    isGptLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                    repeatCount: Wr()
                }),
                Ur += 1,
                window.tude.cmd.push((function() {
                    var n, e, i, o, r = (0,
                    Fe.dl)(t);
                    y = (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                    w = (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                    (0,
                    Ve.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: m,
                        adHeight: x,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: y,
                        androidHeight: w,
                        pixelRatio: b,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof (null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                        repeatCount: Wr()
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll-mobile",
                        code: "mid-roll",
                        mode: "adOnly",
                        targeting: Fr(Fr({}, r), {
                            ads_loc: "video-auto-out"
                        })
                    }).then((function(n) {
                        E(n)
                    }
                    )).catch((function(n) {}
                    ))
                }
                ))
            };
            return (0,
            Ye.useEffect)((function() {
                var n;
                return h && (d(!0),
                p.current = setTimeout((function() {
                    d(!1),
                    e({
                        type: Et.Z.SET_EXPERIENCE_STATE,
                        payload: {
                            isExperienceEnded: !1
                        }
                    })
                }
                ), 4e3),
                A(),
                !1 === (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.muted) && (f.current.muted = !0),
                P()),
                function() {
                    p.current && clearTimeout(p.current)
                }
            }
            ), [h]),
            (0,
            et.tZ)(Hr, {
                className: "".concat(o ? "started " : "").concat(l ? "blurBG " : ""),
                children: (0,
                et.BX)(_r, {
                    ref: s,
                    children: [(0,
                    et.tZ)("div", {
                        className: "videoAd",
                        id: "prebid-wrapper-mid-roll-mobile"
                    }), o && (0,
                    et.tZ)("span", {
                        className: "adText",
                        children: n("ad")
                    })]
                })
            })
        }, Vr = (0,
        Ye.memo)(Gr), qr = t(74803), Qr = {
            src: "/play/_next/static/media/muted.cc92657a.svg",
            height: 24,
            width: 24
        }, Jr = {
            src: "/play/_next/static/media/unmuted.cb7db131.svg",
            height: 24,
            width: 24
        }, $r = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, na = Qe.ZP.div(fe || (fe = $r(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n  &.isMobileMidroll{\n    height: fit-content;\n    width: fit-content;\n    bottom: 0px;\n    left: calc(100% + 15px);\n    p{\n      margin: 0px;\n    }\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n  &.isMobileMidroll{\n    height: fit-content;\n    width: fit-content;\n    bottom: 0px;\n    left: calc(100% + 15px);\n    p{\n      margin: 0px;\n    }\n  }\n"])), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), ea = Qe.ZP.p(he || (he = $r(["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"], ["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        )), ta = function(n) {
            var e = n.adsMuted
              , t = n.handleVolume
              , i = n.isInteracted
              , o = n.isMobileMidroll
              , r = (0,
            Dt.$)().t;
            return (0,
            et.BX)(na, {
                className: "".concat(i ? "hideText " : "").concat(o ? "isMobileMidroll " : ""),
                children: [(0,
                et.tZ)("p", {
                    children: r((0,
                    Ge.tq)() ? "tapToUnmute" : "clickToUnmute")
                }), (0,
                et.tZ)(ea, {
                    onClick: t,
                    children: (0,
                    et.tZ)("img", {
                        alt: r(e ? "mutedSoundIcon" : "soundIcon"),
                        src: (0,
                        ti.j)(e ? Qr : Jr)
                    })
                })]
            })
        }, ia = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, oa = (0,
        Qe.F4)(ge || (ge = ia(["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"], ["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"]))), ra = Qe.ZP.div(ve || (ve = ia(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .hide{\n    visibility: hidden;\n  }\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .hide{\n    visibility: hidden;\n  }\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"]))), aa = Qe.ZP.div(me || (me = ia(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n"]))), la = Qe.ZP.div(xe || (xe = ia(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))), da = (Qe.ZP.img(ye || (ye = ia(["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"], ["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )),
        Qe.ZP.div(we || (we = ia(["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"], ["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        )),
        Qe.ZP.div(be || (be = ia(["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), oa),
        Qe.ZP.div(Ze || (Ze = ia(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n"])), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )),
        Qe.ZP.p(Ae || (Ae = ia(["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"], ["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        )),
        Qe.ZP.div(ke || (ke = ia(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  &::after,\n  &::before {\n    content: "";\n    width: 1px;\n    height: 15px;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.8);\n    top: 50%;\n  }\n  &::before {\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-40deg);\n  }\n  &::after {\n    right: 50%;\n    transform: translate(-50%, -50%) rotate(40deg);\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  &::after,\n  &::before {\n    content: "";\n    width: 1px;\n    height: 15px;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.8);\n    top: 50%;\n  }\n  &::before {\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-40deg);\n  }\n  &::after {\n    right: 50%;\n    transform: translate(-50%, -50%) rotate(40deg);\n  }\n'])))), ca = Qe.ZP.div(Se || (Se = ia(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #000;\n  visibility: hidden;\n  &.adVisible{\n    z-index: 20;\n    visibility: visible;\n  }\n  &.desktop{\n    position: fixed;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #000;\n  visibility: hidden;\n  &.adVisible{\n    z-index: 20;\n    visibility: visible;\n  }\n  &.desktop{\n    position: fixed;\n  }\n"]))), sa = t(54036), ua = function() {
            return (ua = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, pa = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, fa = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, ha = -1, ga = function() {
            return ha
        }, va = function() {
            var n = (0,
            Ye.useContext)(We.x)
              , e = (0,
            Ye.useState)(!1)
              , t = e[0]
              , i = e[1]
              , o = (0,
            Ye.useState)(!1)
              , r = o[0]
              , a = o[1]
              , l = (0,
            Ye.useState)(!1)
              , d = l[0]
              , c = l[1]
              , s = (0,
            Ye.useState)(4)
              , u = s[0]
              , p = s[1]
              , f = (0,
            Ye.useState)(!0)
              , h = f[0]
              , g = f[1]
              , v = (0,
            Ye.useState)(!1)
              , m = v[0]
              , x = v[1]
              , y = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , w = (0,
            He.v9)((function(n) {
                return n.ads.fallbackDisplayed
            }
            ))
              , b = (0,
            He.v9)((function(n) {
                return n.ads.rewardedAdsSDK
            }
            ))
              , Z = (0,
            He.v9)((function(n) {
                return n.ads.rewardedAdType
            }
            ))
              , A = (0,
            He.v9)((function(n) {
                return n.ads.sdkType
            }
            ))
              , k = (0,
            He.v9)((function(n) {
                return n.play.muted
            }
            ))
              , S = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , E = (0,
            Ye.useRef)(null)
              , P = (0,
            Ye.useRef)(null)
              , T = (0,
            Ye.useRef)(null)
              , C = (0,
            Ye.useRef)(null)
              , D = (0,
            Ye.useRef)(null)
              , I = (0,
            Ye.useRef)()
              , R = (0,
            Ye.useRef)(!1)
              , O = (0,
            Ye.useRef)(0)
              , L = (0,
            Ye.useRef)(0)
              , M = (0,
            Ye.useRef)(0)
              , B = (0,
            Ye.useRef)(0)
              , X = (0,
            Ye.useRef)({})
              , N = (0,
            He.I0)()
              , K = window.devicePixelRatio
              , j = function() {
                var n, e;
                (0,
                Ge.tq)() ? (n = y === qe.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20,
                e = y === qe.cj.portrait ? window.innerHeight - 100 : window.innerWidth) : (n = window.innerWidth - 20,
                e = window.innerHeight);
                var t, i, o = (t = e,
                Math.ceil(1.33 * t)), r = e;
                o > n && (i = o = n,
                r = Math.ceil(i / 1.33)),
                E.current && (E.current.style.width = "".concat(o, "px"),
                E.current.style.height = "".concat(r, "px")),
                function(n, e) {
                    O.current = n,
                    L.current = e
                }(o, r)
            }
              , z = function(n) {
                var e = A ? "".concat(n, "::").concat(A) : n;
                (0,
                qr.f)(e)
            }
              , Y = function(n) {
                void 0 === n && (n = !0),
                x(!1),
                i(!1),
                c(!1),
                n && (Z === Lt.fz.rewarded ? ((0,
                Ve.L9)("RewardEarned"),
                z("ADS::userEarnedReward"),
                z("ADS::adsshowstatus::dismiss")) : Z === Lt.fz.interstitial && z("ADS::interstitialAdshowstatus::dismiss")),
                N({
                    type: _e.Z.UPDATE_REWARDED_SDK_STATE,
                    payload: {
                        rewardedAdsSDK: !1,
                        rewardedAdType: null,
                        fallbackDisplayed: !1
                    }
                }),
                k || S && S.current && (S.current.muted = !1)
            }
              , H = function() {
                var n, e;
                M.current = (null === (n = null === S || void 0 === S ? void 0 : S.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                B.current = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                x(!1),
                clearTimeout(P.current),
                (0,
                Ve.L9)("AdNotFilled", {
                    adContext: "Ingame",
                    adType: "Video",
                    adWidth: O.current,
                    adHeight: L.current,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: M.current,
                    androidHeight: B.current,
                    pixelRatio: K,
                    repeatCount: ga()
                }),
                i(!0)
            }
              , _ = function() {
                return pa(void 0, void 0, void 0, (function() {
                    var e, t, i, o;
                    return fa(this, (function(r) {
                        return j(),
                        clearTimeout(P.current),
                        P.current = setTimeout((function() {
                            var n;
                            null === (n = null === I || void 0 === I ? void 0 : I.current) || void 0 === n || n.closePlayer(),
                            H()
                        }
                        ), 15e3),
                        ha += 1,
                        (0,
                        Ve.L9)("AdRequestedNg", {
                            adContext: "Ingame",
                            adType: "Video",
                            adWidth: null === O || void 0 === O ? void 0 : O.current,
                            adHeight: null === L || void 0 === L ? void 0 : L.current,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                            androidHeight: (null === (t = null === S || void 0 === S ? void 0 : S.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                            pixelRatio: K,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: "undefined" !== typeof (null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                            isGptLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                            repeatCount: ga()
                        }),
                        window.tude.cmd.push((function() {
                            var e, t, i, o, r = (0,
                            Fe.dl)(n);
                            M.current = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                            B.current = (null === (t = null === S || void 0 === S ? void 0 : S.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                            (0,
                            Ve.L9)("AdRequested", {
                                adContext: "Ingame",
                                adType: "Video",
                                adWidth: O.current,
                                adHeight: L.current,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: M.current,
                                androidHeight: B.current,
                                pixelRatio: K,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof (null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof (null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                                repeatCount: ga()
                            }),
                            window.tude.requestInstreamPlayer({
                                divId: "rewarded-wrapper",
                                code: "stream",
                                mode: "adOnly",
                                targeting: ua(ua({}, r), {
                                    ads_loc: "video-ctp-rw"
                                })
                            }).then((function(n) {
                                I.current = n,
                                function(n) {
                                    n.on("adNoFill", (function() {
                                        H()
                                    }
                                    )).on("adError", (function() {
                                        H()
                                    }
                                    )).on("adReady", (function() {
                                        var n, e, t;
                                        g(!1),
                                        null === (n = null === I || void 0 === I ? void 0 : I.current) || void 0 === n || n.setVideoVolume(1),
                                        X.current = window.pbjs.getBidResponses(),
                                        M.current = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                                        B.current = (null === (t = null === S || void 0 === S ? void 0 : S.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                                        clearTimeout(P.current),
                                        P.current = setTimeout((function() {
                                            var n;
                                            null === (n = null === I || void 0 === I ? void 0 : I.current) || void 0 === n || n.closePlayer(),
                                            H()
                                        }
                                        ), 1e4)
                                    }
                                    )).on("adSkipped", (function() {
                                        Y(),
                                        R.current = !0
                                    }
                                    )).on("adProgress", (function(n, e) {
                                        var t, i = e.milestone;
                                        if ("complete" === i) {
                                            if (x(!1),
                                            R.current)
                                                return;
                                            Y()
                                        } else if ("start" === i) {
                                            clearTimeout(P.current),
                                            Z === Lt.fz.rewarded ? z("ADS::adsshowstatus::visible") : Z === Lt.fz.interstitial && z("ADS::interstitialAdshowstatus::visible"),
                                            g(!1),
                                            x(!0),
                                            null === (t = null === I || void 0 === I ? void 0 : I.current) || void 0 === t || t.setVideoVolume(1),
                                            R.current = !1;
                                            var o = (X.current.stream || {}).bids
                                              , r = (void 0 === o ? [] : o)[0] || {}
                                              , a = {
                                                bidder: r.bidder,
                                                cpm: r.cpm,
                                                currency: r.currency,
                                                netRevenue: r.netRevenue,
                                                status: r.status,
                                                statusMessage: r.statusMessage,
                                                timeToRespond: r.timeToRespond,
                                                ttl: r.ttl
                                            };
                                            (0,
                                            Ve.L9)("AdDisplayed", ua({
                                                adContext: "Ingame",
                                                adType: "Video",
                                                adWidth: O.current,
                                                adHeight: L.current,
                                                viewPortInnerWidth: window.innerWidth,
                                                viewPortInnerHeight: window.innerHeight,
                                                androidWidth: M.current,
                                                androidHeight: B.current,
                                                pixelRatio: K,
                                                repeatCount: ga()
                                            }, a))
                                        }
                                    }
                                    ))
                                }(n)
                            }
                            )).catch((function(n) {}
                            )),
                            k || S && S.current && (S.current.muted = !0)
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ))
            };
            return (0,
            Ye.useEffect)((function() {
                return m && ((0,
                Ge.tq)() && y === qe.cj.landscape ? C.current = setTimeout((function() {
                    u >= 1 ? p(u - 1) : C.current && clearTimeout(C.current),
                    a(!0)
                }
                ), 1e3) : a(!0)),
                function() {
                    C.current && clearTimeout(C.current)
                }
            }
            ), [m, u]),
            (0,
            Ye.useEffect)((function() {
                if (w) {
                    Z === Lt.fz.rewarded ? z("ADS::adsshowstatus::visible") : Z === Lt.fz.interstitial && z("ADS::interstitialAdshowstatus::visible");
                    var n = Z === Lt.fz.rewarded ? 5e3 : 1e4;
                    D.current = setTimeout((function() {
                        c(!0)
                    }
                    ), n),
                    T.current = setTimeout((function() {
                        Y()
                    }
                    ), n + 1e4)
                } else
                    t && Y(!1);
                return function() {
                    clearTimeout(T.current),
                    clearTimeout(D.current)
                }
            }
            ), [w]),
            (0,
            Ye.useEffect)((function() {
                if ("visible" !== document.visibilityState)
                    return Z === Lt.fz.rewarded ? z("ADS::rewardedAdLoad::fail") : Z === Lt.fz.interstitial && z("ADS::interstitialAdLoad::fail"),
                    void Y(!1);
                if (t) {
                    var e = (0,
                    Fe.dl)(n);
                    (0,
                    sa.Bd)(),
                    (0,
                    sa.JD)("div-gpt-ad-rewarded", "div-gpt-ad-rewarded"),
                    window.tude.cmd.push((function() {
                        (0,
                        sa.Ry)(),
                        (0,
                        sa.JD)("div-gpt-ad-rewarded", "div-gpt-ad-rewarded", "2"),
                        window.tude.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-rewarded",
                            baseDivId: "pb-slot-display-fb",
                            targeting: ua(ua({}, e), {
                                ads_loc: "display-fallback"
                            })
                        }])
                    }
                    ))
                }
            }
            ), [t]),
            (0,
            Ye.useEffect)((function() {
                b && Z && _()
            }
            ), [b]),
            (0,
            et.BX)(ca, {
                className: "".concat(b ? "adVisible " : "").concat((0,
                Ge.tq)() ? "" : "desktop "),
                children: [!t && m && (0,
                et.tZ)(ut, {
                    animateSmall: !0
                }), (0,
                et.tZ)(ra, {
                    className: t ? "hide" : "",
                    ref: E,
                    id: "rewarded-wrapper"
                }), m && !t && (0,
                et.tZ)(ta, {
                    isInteracted: r,
                    handleVolume: function() {
                        a(!0),
                        window.tude.setVideoVolume(h ? 1 : 0),
                        g(!h)
                    },
                    adsMuted: h
                }), t && (0,
                et.BX)(aa, {
                    children: [(0,
                    et.tZ)(la, {
                        id: "div-gpt-ad-rewarded"
                    }), d && (0,
                    et.tZ)(da, {
                        onClick: function() {
                            return Y()
                        }
                    })]
                })]
            })
        }, ma = t(24870), xa = t(939), ya = t(24047), wa = function(n) {
            var e = n.str
              , t = void 0 === e ? "" : e
              , i = n.enter
              , o = void 0 === i ? 0 : i
              , r = n.del
              , a = void 0 === r ? 0 : r
              , l = n.composing
              , d = void 0 !== l && l
              , c = new ArrayBuffer(4 + 2 * t.length)
              , s = new Uint8Array(c);
            s[0] = 103,
            s[1] = a,
            s[2] = o,
            s[3] = Number(d);
            for (var u = 4, p = 0; p < t.length; p += 1) {
                var f = t[p].charCodeAt(0)
                  , h = new Uint16Array([f])
                  , g = new Uint8Array(h.buffer,h.byteOffset,h.byteLength);
                s[u] = g[0],
                s[u += 1] = g[1],
                u += 1
            }
            (0,
            zi.fr)(c)
        }, ba = function() {
            var n = (0,
            Ye.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = xa.fl.lastX + 20
              , o = xa.fl.lastY + 20
              , r = (0,
            Ye.useState)(i)
              , a = r[0]
              , l = (r[1],
            (0,
            Ye.useState)(o))
              , d = l[0]
              , c = (l[1],
            (0,
            Ye.useRef)(null));
            (0,
            Ye.useEffect)((function() {
                (null === c || void 0 === c ? void 0 : c.current) && c.current.focus()
            }
            ), [c]);
            var s = (0,
            Ye.useCallback)((function(n) {
                t(!0),
                wa({
                    del: 0,
                    composing: !0
                })
            }
            ), [e])
              , u = (0,
            Ye.useCallback)((function(n) {
                e && wa({
                    str: n.data,
                    composing: e
                })
            }
            ), [e])
              , p = (0,
            Ye.useCallback)((function(n) {
                ma.un.ended = !0,
                ya.q$.justEnded = !0,
                t(!1),
                wa({
                    str: n.data,
                    composing: !1
                })
            }
            ), [e]);
            return (0,
            et.tZ)("input", {
                ref: c,
                style: {
                    position: "absolute",
                    zIndex: 1e6,
                    left: a,
                    top: d,
                    opacity: 0
                },
                onBlur: function(n) {
                    setTimeout((function() {
                        var e, t;
                        ma.be.isOpen && !kt.Z.getState().play.uiTextfieldInFocus && -1 === (null === (t = null === (e = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === e ? void 0 : e.className) || void 0 === t ? void 0 : t.indexOf("_hj-")) && n.target.focus()
                    }
                    ), 100)
                },
                onCompositionStart: s,
                onCompositionUpdate: u,
                onCompositionEnd: p,
                type: "text",
                autoComplete: "off"
            })
        }, Za = t(22572), Aa = t(25675), ka = t(88962), Sa = t(62825), Ea = t(59930), Pa = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ta = ((0,
        Qe.iv)(Ee || (Ee = Pa(["\n  width: 480px;\n  overflow: auto;\n"], ["\n  width: 480px;\n  overflow: auto;\n"]))),
        Qe.ZP.div(Pe || (Pe = Pa(["\n  display: flex;\n  padding: 20px;\n\n  .tile {\n    position: relative;\n    flex: 0 0 160px;\n    border-radius: 12px;\n    margin: auto 22px auto auto;\n    overflow: hidden;\n    width: 160px;\n    height: 215px;\n    .mobilePortrait & {\n      margin: 0px;\n      flex: none;\n    }\n  }\n  .mobilePortrait & {\n    flex-direction: column;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  padding: 20px;\n\n  .tile {\n    position: relative;\n    flex: 0 0 160px;\n    border-radius: 12px;\n    margin: auto 22px auto auto;\n    overflow: hidden;\n    width: 160px;\n    height: 215px;\n    .mobilePortrait & {\n      margin: 0px;\n      flex: none;\n    }\n  }\n  .mobilePortrait & {\n    flex-direction: column;\n    align-items: center;\n  }\n"])))), Ca = Qe.ZP.div(Te || (Te = Pa(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  color: ", ";\n\n  h4 {\n    margin-bottom: 10px;\n    font-size: 24px;\n    font-weight: 500;\n    .mobilePortrait & {\n      text-align: center;\n      margin: 24px 0px 8px 0px;\n    }\n  }\n\n  p {\n    font-size: 16px;\n    margin-bottom: 22px;\n    color:", ";\n    .mobilePortrait & {\n      text-align: center;\n      margin-bottom: 24px;\n    }\n  }\n\n  button {\n    margin-top: auto;\n    .mobilePortrait & {\n      max-width: 100%;\n    }\n  }\n  \n  .textCenter {\n    text-align: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  color: ", ";\n\n  h4 {\n    margin-bottom: 10px;\n    font-size: 24px;\n    font-weight: 500;\n    .mobilePortrait & {\n      text-align: center;\n      margin: 24px 0px 8px 0px;\n    }\n  }\n\n  p {\n    font-size: 16px;\n    margin-bottom: 22px;\n    color:", ";\n    .mobilePortrait & {\n      text-align: center;\n      margin-bottom: 24px;\n    }\n  }\n\n  button {\n    margin-top: auto;\n    .mobilePortrait & {\n      max-width: 100%;\n    }\n  }\n  \n  .textCenter {\n    text-align: center;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white80
        }
        )), Da = Qe.ZP.div(Ce || (Ce = Pa(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 56px;\n\n  button {\n    width: 100%;\n  }\n\n  i {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 56px;\n\n  button {\n    width: 100%;\n  }\n\n  i {\n    cursor: pointer;\n  }\n"]))), Ia = function(n) {
            var e, t, i, o, r, a = n.type, l = void 0 === a ? Lt.T$ : a, d = n.heading, c = void 0 === d ? "" : d, s = (0,
            Dt.$)().t, u = (0,
            Ye.useContext)(We.x), p = null === (t = null === (e = null === Ue.ZP || void 0 === Ue.ZP ? void 0 : Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.enablePokelaboUi, f = null === (r = null === (o = null === (i = Ue.ZP.appInfo) || void 0 === i ? void 0 : i.playFeFeatures) || void 0 === o ? void 0 : o.tryAndDownload) || void 0 === r ? void 0 : r.isEnabled, h = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            )), g = (0,
            Ge.tq)(), v = (0,
            He.I0)();
            (0,
            Ye.useEffect)((function() {
                (0,
                Ve.UY)(!1),
                (0,
                ka.Z)(),
                f && (0,
                Ve.L9)(Lt.S5, {
                    element: "InactivityScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })
            }
            ), []);
            return (0,
            et.tZ)(ei.Z, {
                className: g && window.innerHeight > window.innerWidth ? "mobilePortrait" : "",
                style: g && h === qe.cj.portrait ? {
                    margin: "auto 8.75vmin"
                } : {},
                children: (0,
                et.BX)(Ta, {
                    children: [!p && (0,
                    et.tZ)("div", {
                        className: "tile",
                        children: (0,
                        et.tZ)(Aa.default, {
                            src: null === u || void 0 === u ? void 0 : u.media.tile,
                            alt: u.appName,
                            width: 160,
                            height: 215,
                            quality: 80,
                            loader: ti.O
                        })
                    }), (0,
                    et.BX)(Ca, {
                        children: [(0,
                        et.tZ)(Ot.T4, {
                            className: p ? "textCenter" : "",
                            children: s("".concat(c || l, "Head"))
                        }), (0,
                        et.tZ)(Ot.kk, {
                            className: p ? "textCenter" : "",
                            children: s("".concat(l, "Msg"))
                        }), (0,
                        et.BX)(Da, {
                            style: g ? {
                                gap: "8px"
                            } : {},
                            children: [(0,
                            et.tZ)(vi.z, {
                                onClick: function() {
                                    var n = "TryAndDownload";
                                    f ? ((0,
                                    Ve.L9)(Lt.S5, {
                                        element: "InactivityScreen",
                                        action: "ContinuePlayingClicked",
                                        group: n
                                    }),
                                    setTimeout((function() {
                                        (0,
                                        mi.iI)(n)
                                    }
                                    ), 500)) : (0,
                                    mi.iI)(n)
                                },
                                variant: "primary",
                                text: l === Lt.LD ? s("restart") : s("continuePlayingHere")
                            }), !p && (0,
                            et.tZ)(Ea.Z, {
                                name: "support",
                                size: 24,
                                onClick: function() {
                                    v({
                                        type: Sa.Z.GET_SUPPORT
                                    }),
                                    v({
                                        type: Sa.Z.SET_ERROR_TYPE,
                                        payload: {
                                            errorType: l
                                        }
                                    })
                                }
                            })]
                        })]
                    })]
                })
            })
        }, Ra = {
            src: "/play/_next/static/media/idleScreenLogo.26cffb49.png",
            height: 360,
            width: 360,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXG6OZEdGza75GTxRKb8PKE1aYYJAyH/zjv/SbVw4f9apm5i0fW942X/NaH/Q6b5QqLlidbC6WcoLC7G7mafu1n6RKssLTD9Q6UDAB37Q6c+ZpRMRF0wJUj/Ral+IWCHH2JNcUkTDjNUXkFyZYYOAAAAIXRSTlMA/f2Tbib8/gH+K3FO6RNIijLG/i269tmr1snJ+/nZ1vhWJ94WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQ0lEQVR4nCXBxwGAIBAEwAWB2zNhztn+e/ThDAjnQQJEWecpCEa3hpARlZpH5E4w6GW3vS2wqBErbwM/Hec89h2I3wdgPALoH2n/RwAAAABJRU5ErkJggg=="
        }, Oa = {
            src: "/play/_next/static/media/bulbIcon.c6ab3e9f.svg",
            height: 17,
            width: 16
        }, La = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ma = Qe.ZP.div(De || (De = La(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4%;\n    padding: 24px;\n\n    .modalLogo {\n        flex-shrink: 0;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4%;\n    padding: 24px;\n\n    .modalLogo {\n        flex-shrink: 0;\n    }\n"]))), Ba = Qe.ZP.div(Ie || (Ie = La(["\n    flex-basis: 35%;\n    flex-shrink: 0;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"], ["\n    flex-basis: 35%;\n    flex-shrink: 0;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"]))), Xa = Qe.ZP.div(Re || (Re = La(["\n    position: relative;\n    button {\n        width: 100%;\n        margin-top: 24px;\n    }\n    h4 {\n        font-weight: 600;\n        font-size: 24px;\n        color: ", ";\n    }\n    h6 {\n        font-weight: 400;\n        font-size: 16px;\n        color: ", ";\n    }\n    .alert-msg {\n        margin-top: 12px;\n        font-weight: 400;\n        font-size: 12px;\n        color: ", ";\n    }\n"], ["\n    position: relative;\n    button {\n        width: 100%;\n        margin-top: 24px;\n    }\n    h4 {\n        font-weight: 600;\n        font-size: 24px;\n        color: ", ";\n    }\n    h6 {\n        font-weight: 400;\n        font-size: 16px;\n        color: ", ";\n    }\n    .alert-msg {\n        margin-top: 12px;\n        font-weight: 400;\n        font-size: 12px;\n        color: ", ";\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Na = Qe.ZP.div(Oe || (Oe = La(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n    .bulbIcon {\n        margin-right: 4px;\n        flex-shrink: 0;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n    .bulbIcon {\n        margin-right: 4px;\n        flex-shrink: 0;\n    }\n"]))), Ka = function(n) {
            var e = n.logo
              , t = n.heading
              , i = n.text
              , o = n.modalInfoText
              , r = n.buttonText
              , a = n.infoText
              , l = n.proTip
              , d = (0,
            Dt.$)().t
              , c = (0,
            He.I0)();
            return (0,
            et.BX)(ei.Z, {
                children: [(0,
                et.BX)(Ma, {
                    children: [(0,
                    et.tZ)(Ba, {
                        children: (0,
                        et.tZ)("img", {
                            alt: "now.gg ".concat(d("logo")),
                            src: function() {
                                switch (e) {
                                case "inactivity":
                                default:
                                    return (0,
                                    ti.j)(Ra)
                                }
                            }()
                        })
                    }), (0,
                    et.BX)(Xa, {
                        children: [(0,
                        et.tZ)(Ot.T4, {
                            bold: !0,
                            children: d(t)
                        }), (0,
                        et.tZ)(Ot.T6, {
                            white: !0,
                            children: d(i)
                        }), o && (0,
                        et.tZ)(Ot.T6, {
                            white: !0,
                            style: {
                                marginTop: 20
                            },
                            children: d(o)
                        }), r && (0,
                        et.tZ)(vi.z, {
                            variant: "primary",
                            onClick: function() {
                                c({
                                    type: Et.Z.MODAL_STATUS,
                                    payload: {
                                        inactivityModal: !1
                                    }
                                })
                            },
                            text: d(r)
                        }), a && (0,
                        et.tZ)(Ot.kk, {
                            white: !0,
                            center: !0,
                            className: "alert-msg",
                            children: d(a)
                        })]
                    })]
                }), l && (0,
                et.BX)(Na, {
                    children: [(0,
                    et.tZ)("img", {
                        className: "bulbIcon",
                        alt: "".concat(d("proTipLogo")),
                        src: (0,
                        ti.j)(Oa),
                        height: 16,
                        width: 16
                    }), (0,
                    et.tZ)(Ot.T6, {
                        white: !0,
                        children: d(l)
                    })]
                })]
            })
        }, ja = t(97170), za = function(n) {
            var e = (0,
            Ye.useRef)();
            return (0,
            Ye.useEffect)((function() {
                e.current = n
            }
            )),
            e.current
        }, Ya = function() {
            var n = (0,
            Ye.useState)(navigator.onLine)
              , e = n[0]
              , t = n[1]
              , i = function() {
                t(navigator.onLine)
            };
            return (0,
            Ye.useEffect)((function() {
                return window.addEventListener("online", i),
                window.addEventListener("offline", i),
                function() {
                    window.removeEventListener("online", i),
                    window.removeEventListener("offline", i)
                }
            }
            ), []),
            e
        }, Ha = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, _a = Qe.ZP.div(Le || (Le = Ha(["\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 13;\n"], ["\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 13;\n"]))), Fa = Qe.ZP.p(Me || (Me = Ha(["\n  font-size: 14px;\n  background: #f9edbe;\n  border: 1px solid #f0c36d;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0;\n  display: inline-block;\n  transition: background-color 0.2s ease-out;\n"], ["\n  font-size: 14px;\n  background: #f9edbe;\n  border: 1px solid #f0c36d;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0;\n  display: inline-block;\n  transition: background-color 0.2s ease-out;\n"]))), Ua = function() {
            var n = (0,
            Ye.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = Ya()
              , o = za(i)
              , r = (0,
            Dt.$)().t;
            return (0,
            Ye.useEffect)((function() {
                "boolean" === typeof i && !o && i && setTimeout((function() {
                    t(!1)
                }
                ), 2e3),
                i || t(!0)
            }
            ), [i]),
            (0,
            et.tZ)(_a, {
                children: e ? (0,
                et.tZ)(Fa, {
                    style: {
                        background: i ? "#31770a" : "#f9edbe",
                        color: i ? "#fff" : "#000",
                        borderColor: i ? "#6db346" : "#f0c36d"
                    },
                    children: r(i ? "connected" : "networkLost")
                }) : null
            })
        }, Wa = t(3053), Ga = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Va = (0,
        Qe.F4)(Be || (Be = Ga(["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"], ["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"]))), qa = (0,
        Qe.F4)(Xe || (Xe = Ga(["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"], ["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"]))), Qa = Qe.ZP.div(Ne || (Ne = Ga(["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"], ["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"]))), Ja = Qe.ZP.div(Ke || (Ke = Ga(["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"], ["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"])), qa, (function(n) {
            return n.theme.colors.white
        }
        ), Va), $a = Qe.ZP.p(je || (je = Ga(["\n    margin-left: 22px;\n    color: ", ";\n"], ["\n    margin-left: 22px;\n    color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), nl = function(n) {
            var e = n.videoElm
              , t = (0,
            He.I0)()
              , i = (0,
            Ye.useState)(!1)
              , o = i[0]
              , r = i[1]
              , a = (0,
            Ye.useState)(!1)
              , l = a[0]
              , d = a[1]
              , c = (0,
            Dt.$)().t
              , s = function() {
                r(!1),
                setTimeout((function() {
                    t({
                        type: Et.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    })
                }
                ), 500)
            }
              , u = function() {
                var n, t, i = !1, o = function(e) {
                    3 !== e.which && 2 !== e.button || (i = !0,
                    n = e.pageX,
                    t = e.pageY)
                }, r = function(n) {
                    n.preventDefault()
                };
                e.current && (e.current.addEventListener("contextmenu", r),
                e.current.addEventListener("mousedown", o),
                e.current.addEventListener("mouseup", (function a(l) {
                    var d = Math.abs(l.pageX - n)
                      , c = Math.abs(l.pageY - t);
                    i && (i = !1,
                    (d > 6 || c > 6) && (s(),
                    e.current && (e.current.removeEventListener("contextmenu", r),
                    e.current.removeEventListener("mousedown", o),
                    e.current.removeEventListener("mouseup", a))))
                }
                )))
            };
            return (0,
            Ye.useEffect)((function() {
                u(),
                r(!0),
                setTimeout((function() {
                    d(!0)
                }
                ), 5e3),
                setTimeout((function() {
                    s()
                }
                ), 3e4)
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                if (o) {
                    var n = +(localStorage.getItem("robloxToastViewCount") || "0") + 1;
                    localStorage.setItem("robloxToastViewCount", n.toString()),
                    kt.Z.dispatch({
                        type: Wa.Z.ROBLOX_TOAST_UPDATE,
                        payload: {
                            lastRobloxToastDate: (new Date).toDateString()
                        }
                    })
                }
            }
            ), [o]),
            (0,
            et.BX)(Qa, {
                className: "".concat(o ? "slideDown" : "slideUp"),
                children: [(0,
                et.tZ)(Ja, {
                    className: "robloxImgContainer",
                    children: (0,
                    et.tZ)(Ea.Z, {
                        name: "mouse",
                        size: 20
                    })
                }), (0,
                et.tZ)($a, {
                    children: c("robloxToastMsg")
                }), l && (0,
                et.tZ)("span", {
                    style: {
                        marginLeft: "12px",
                        marginTop: "2px",
                        cursor: "pointer"
                    },
                    children: (0,
                    et.tZ)("img", {
                        alt: "",
                        src: (0,
                        ti.j)(Pi.Z),
                        onClick: s
                    })
                })]
            })
        }, el = t(57180), tl = t(23279), il = t.n(tl), ol = function() {
            var n = (0,
            Ye.useState)({
                width: 0,
                height: 0
            })
              , e = n[0]
              , t = n[1];
            return (0,
            Ye.useEffect)((function() {
                var n = il()((function() {
                    t({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                ), 100);
                return window.addEventListener("resize", n),
                n(),
                function() {
                    return window.removeEventListener("resize", n)
                }
            }
            ), []),
            e
        }, rl = t(86296), al = t(7383), ll = t(30550), dl = t(94405), cl = t(92809), sl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ul = Qe.ZP.div(ze || (ze = sl(["\n  filter: ", ";\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 16px;\n\n  img {\n    border-radius: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"], ["\n  filter: ", ";\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 16px;\n\n  img {\n    border-radius: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"])), (function(n) {
            var e = n.theme;
            return "drop-shadow(".concat(e.shadow.normal, ")")
        }
        ), (function(n) {
            return n.width
        }
        ), (function(n) {
            return n.height
        }
        ), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.width
        }
        ), (function(n) {
            return n.height
        }
        ));
        function pl(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function fl(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pl(Object(t), !0).forEach((function(e) {
                    (0,
                    cl.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : pl(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var hl, gl, vl, ml, xl, yl, wl, bl, Zl, Al, kl, Sl, El, Pl, Tl, Cl, Dl, Il, Rl, Ol, Ll, Ml, Bl, Xl, Nl, Kl, jl, zl, Yl, Hl, _l, Fl, Ul, Wl, Gl, Vl, ql, Ql = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (i = Object.getOwnPropertySymbols(n); o < i.length; o++)
                    e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
            }
            return t
        }, Jl = function(n) {
            var e = n.height
              , t = void 0 === e ? "160px" : e
              , i = n.width
              , o = void 0 === i ? "215px" : i
              , r = n.className
              , a = void 0 === r ? "" : r
              , l = Ql(n, ["height", "width", "className"]);
            return (0,
            et.tZ)(ul, {
                height: t,
                width: o,
                className: a,
                children: (0,
                et.tZ)("img", fl({
                    alt: ""
                }, l))
            })
        }, $l = t(26544), nd = {
            enableHighAccuracy: !0,
            timeout: 5e3,
            maximumAge: 0
        }, ed = {
            Location: "icon-location",
            Camera: "icon-video-cam"
        }, td = t(61569), id = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, od = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, rd = function() {}, ad = function(n) {
            (0,
            zi.Yg)(n)
        }, ld = function() {
            var n = (0,
            Ye.useContext)(dl.Z)
              , e = (0,
            He.v9)((function(n) {
                return n.play.permissionType
            }
            ))
              , t = (0,
            Dt.$)().t
              , i = (0,
            He.I0)()
              , o = (0,
            Ye.useState)(!1)
              , r = o[0]
              , a = o[1]
              , l = (0,
            Qe.Fg)()
              , d = (0,
            Ye.useCallback)((function() {
                return id(void 0, void 0, void 0, (function() {
                    var n;
                    return od(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, navigator.permissions.query({
                                name: "geolocation"
                            })];
                        case 1:
                            return "granted" === (null === (n = e.sent()) || void 0 === n ? void 0 : n.state) ? [2, !0] : [2, !1];
                        case 2:
                            return e.sent(),
                            [2, !1];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), [])
              , c = (0,
            Ye.useCallback)((function() {
                i({
                    type: Et.Z.GET_PERMISSION,
                    payload: {
                        permissionType: ""
                    }
                })
            }
            ), [i])
              , s = (0,
            Ye.useCallback)((function() {
                c(),
                function(n) {
                    switch (n) {
                    case "Location":
                        navigator.geolocation.getCurrentPosition(ad, rd, nd)
                    }
                }(e)
            }
            ), [c, e]);
            return (0,
            Ye.useEffect)((function() {
                d().then((function(n) {
                    n ? s() : a(!0)
                }
                )).catch((function() {
                    a(!0)
                }
                ))
            }
            ), [d, s]),
            r ? (0,
            et.tZ)(ei.Z, {
                modalBackgroundColor: $l.qm.gradients.glass,
                overlayStyles: td.r2,
                modalStyles: (0,
                td.il)(l),
                children: (0,
                et.BX)(td.W2, {
                    children: [(0,
                    et.tZ)(Jl, {
                        width: "105px",
                        height: "140px",
                        alt: n.appName,
                        src: n.media.tile
                    }), (0,
                    et.BX)(td.GN, {
                        children: [(0,
                        et.tZ)(td.NM, {
                            med: !0,
                            children: t("permission")
                        }), (0,
                        et.tZ)(td.$S, {
                            style: {
                                display: "flex",
                                margin: "12px 0 0"
                            },
                            children: "string" === typeof e ? (0,
                            et.BX)(et.HY, {
                                children: [(0,
                                et.tZ)("span", {
                                    style: {
                                        fontSize: "20px",
                                        marginRight: "4px"
                                    },
                                    className: ed[e]
                                }), " ", (0,
                                et.tZ)(td.az, {
                                    children: e
                                })]
                            }) : null
                        }), (0,
                        et.BX)(td.Ls, {
                            children: [(0,
                            et.tZ)(vi.z, {
                                variant: "tertiary",
                                size: "default",
                                text: t("cancel"),
                                onClick: c,
                                style: {
                                    margin: 0
                                }
                            }), (0,
                            et.tZ)(vi.z, {
                                variant: "primary",
                                size: "default",
                                text: (0,
                                Ge.tq)() ? t("okay") : t("gotIt"),
                                onClick: s,
                                style: {
                                    margin: 0
                                }
                            })]
                        })]
                    })]
                })
            }) : null
        }, dd = t(22920), cd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, sd = Qe.ZP.p(hl || (hl = cd(["\n  position: absolute;\n  top: 10%;\n  z-index: 2;\n  font-size: 13px;\n  transform: scaleY(0);\n  transition: transform 0.25s;\n  color: ", ";\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  margin: 0;\n  padding: 6px 12px;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"], ["\n  position: absolute;\n  top: 10%;\n  z-index: 2;\n  font-size: 13px;\n  transform: scaleY(0);\n  transition: transform 0.25s;\n  color: ", ";\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  margin: 0;\n  padding: 6px 12px;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e = n.bg
              , t = n.theme;
            return e || t.colors.green
        }
        )), ud = Qe.ZP.span(gl || (gl = cd(["\n  display: inline-block;\n  background-color: ", ";\n  -webkit-transition: .4s;\n  transform: rotate(-45deg);\n  transition: .4s;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 9px;\n    position: absolute;\n    border-top: 2px solid ", ";\n    border-left: 2px solid ", ";\n    top: 3px;\n    left: 6px;\n    right: 0px;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-82deg);\n  }\n"], ["\n  display: inline-block;\n  background-color: ", ";\n  -webkit-transition: .4s;\n  transform: rotate(-45deg);\n  transition: .4s;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 9px;\n    position: absolute;\n    border-top: 2px solid ", ";\n    border-left: 2px solid ", ";\n    top: 3px;\n    left: 6px;\n    right: 0px;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-82deg);\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.green
        }
        ), (function(n) {
            return n.theme.colors.green
        }
        )), pd = {
            success: "#398B4D"
        }, fd = function(n) {
            var e = n.type
              , t = n.onClose
              , i = n.children
              , o = (0,
            Ye.useState)("")
              , r = o[0]
              , a = o[1];
            return (0,
            Ye.useEffect)((function() {
                var n = setTimeout((function() {
                    a("scaleY(1)")
                }
                ), 1e3)
                  , e = setTimeout((function() {
                    a("scaleY(0)"),
                    t()
                }
                ), 4e3);
                return function() {
                    clearTimeout(n),
                    clearTimeout(e)
                }
            }
            ), []),
            (0,
            et.BX)(sd, {
                bg: pd[e],
                style: {
                    transform: r || void 0
                },
                children: [(0,
                et.tZ)(ud, {}), i]
            })
        }, hd = t(80252), gd = t(30150), vd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, md = (0,
        Qe.iv)(vl || (vl = vd(["\n  width: 320px;\n  > div {\n    margin: 24px;\n    border-radius: 0;\n  }\n"], ["\n  width: 320px;\n  > div {\n    margin: 24px;\n    border-radius: 0;\n  }\n"]))), xd = Qe.ZP.div(ml || (ml = vd(["\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 24px;\n\n  i {\n    color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 24px;\n\n  i {\n    color: ", ";\n    cursor: pointer;\n  }\n"])), (function(n) {
            return n.theme.colors.white60
        }
        )), yd = Qe.ZP.span(xl || (xl = vd(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), wd = (0,
        Qe.ZP)(gd.Yd)(yl || (yl = vd(["\n  padding: 7.5px;\n  text-decoration: none;\n"], ["\n  padding: 7.5px;\n  text-decoration: none;\n"]))), bd = function() {
            var n = (0,
            He.v9)((function(n) {
                return n.play.urlToOpen
            }
            ))
              , e = (0,
            Dt.$)().t
              , t = (0,
            He.I0)()
              , i = function() {
                t({
                    type: Et.Z.OPEN_URL,
                    payload: {
                        urlToOpen: ""
                    }
                })
            };
            return n ? (0,
            et.BX)(ei.Z, {
                modalStyles: md,
                children: [(0,
                et.BX)(xd, {
                    children: [(0,
                    et.tZ)(Ot.TZ, {
                        children: (0,
                        et.tZ)(yd, {
                            children: e("externalPopupMessage")
                        })
                    }), (0,
                    et.tZ)(Ea.Z, {
                        name: "cross-thin",
                        size: 16,
                        onClick: i
                    })]
                }), (0,
                et.tZ)(wd, {
                    as: "a",
                    variant: "primary",
                    rel: "noopener noreferrer",
                    size: "medium",
                    target: "_blank",
                    onClick: i,
                    href: n,
                    children: (0,
                    et.tZ)(Ot.QV, {
                        children: e("okay")
                    })
                })]
            }) : null
        }, Zd = t(35494), Ad = t(40077), kd = t(13147), Sd = t(73029), Ed = t(40434), Pd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Td = Qe.ZP.div(wl || (wl = Pd(["\n    z-index: 20;\n    color: ", ";\n    position: fixed;\n    right: 0;\n    top: 70px;\n    width: 320px;\n    background: ", ";\n    backdrop-filter: blur(24px);\n    border-radius: 8px 0 0 8px;\n    padding: 8px 10px;\n    transition: transform ease-out 0.5s;\n    &.hide {\n      transform: translate(100%);\n    }\n"], ["\n    z-index: 20;\n    color: ", ";\n    position: fixed;\n    right: 0;\n    top: 70px;\n    width: 320px;\n    background: ", ";\n    backdrop-filter: blur(24px);\n    border-radius: 8px 0 0 8px;\n    padding: 8px 10px;\n    transition: transform ease-out 0.5s;\n    &.hide {\n      transform: translate(100%);\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.base600
        }
        )), Cd = Qe.ZP.div(bl || (bl = Pd(["\n  display: flex;\n  margin: 6px 0 10px;\n  font-weight: 400;\n  align-items: center;\n  justify-content: space-between;\n  .sidebar-heading {\n    display: flex;\n    align-items: center;\n  }\n  i {\n    padding: 5px;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  margin: 6px 0 10px;\n  font-weight: 400;\n  align-items: center;\n  justify-content: space-between;\n  .sidebar-heading {\n    display: flex;\n    align-items: center;\n  }\n  i {\n    padding: 5px;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), Dd = Qe.ZP.ul(Zl || (Zl = Pd(["\n  margin: 0;\n  list-style-type: none;\n  padding: 5px 0;\n  background-color: rgba(0,0,0,.4);\n"], ["\n  margin: 0;\n  list-style-type: none;\n  padding: 5px 0;\n  background-color: rgba(0,0,0,.4);\n"]))), Id = Qe.ZP.li(Al || (Al = Pd(["\n  font-size: 12px;\n  padding: 6px 12px;\n  font-weight: 300;\n  display: flex;\n  span {\n    &:first-child {\n      flex: 1;\n      padding-right: 10px;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    &:last-child {\n      flex: 0 0 114px;\n      font-weight: 500;\n    }\n  }\n"], ["\n  font-size: 12px;\n  padding: 6px 12px;\n  font-weight: 300;\n  display: flex;\n  span {\n    &:first-child {\n      flex: 1;\n      padding-right: 10px;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    &:last-child {\n      flex: 0 0 114px;\n      font-weight: 500;\n    }\n  }\n"]))), Rd = ((0,
        Qe.ZP)(Id)(kl || (kl = Pd(["\n  color: #f5f5f5;\n  font-weight: 600;\n\n  &::only-child {\n    display: none;\n  }\n"], ["\n  color: #f5f5f5;\n  font-weight: 600;\n\n  &::only-child {\n    display: none;\n  }\n"]))),
        (0,
        Qe.ZP)(Id)(Sl || (Sl = Pd(["\n  font-weight: 600;\n  font-size: 12px;\n  justify-content: flex-start;\n"], ["\n  font-weight: 600;\n  font-size: 12px;\n  justify-content: flex-start;\n"])))), Od = Qe.ZP.div(El || (El = Pd(["\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  font-size: 14px;\n"], ["\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  font-size: 14px;\n"]))), Ld = Qe.ZP.span(Pl || (Pl = Pd(["\n  padding: 10px 16px;\n  flex: 0 0 50%;\n  background: transparent;\n  cursor: pointer;\n  background: ", ";\n  color: rgba(255,255,255,.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    font-size: 19px;\n    margin-right: 10px;\n\n    &.icon-keyboard {\n      font-size: 22px;\n    }\n  }\n\n  &.active {\n    background: rgba(0,0,0,.4);\n    color: rgba(255,255,255,.8);\n  }\n"], ["\n  padding: 10px 16px;\n  flex: 0 0 50%;\n  background: transparent;\n  cursor: pointer;\n  background: ", ";\n  color: rgba(255,255,255,.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    font-size: 19px;\n    margin-right: 10px;\n\n    &.icon-keyboard {\n      font-size: 22px;\n    }\n  }\n\n  &.active {\n    background: rgba(0,0,0,.4);\n    color: rgba(255,255,255,.8);\n  }\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), Md = Qe.ZP.div(Tl || (Tl = Pd(["\n  display: flex;\n  background: ", ";\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: center;\n  background: rgba(0,0,0,.4);\n  padding: 16px;\n\n  p {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n"], ["\n  display: flex;\n  background: ", ";\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: center;\n  background: rgba(0,0,0,.4);\n  padding: 16px;\n\n  p {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), Bd = Qe.ZP.div(Cl || (Cl = Pd(["\n  background: rgba(0, 0, 0, 0.4);\n  padding: 8px;\n  margin: 12px 0;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  background: rgba(0, 0, 0, 0.4);\n  padding: 8px;\n  margin: 12px 0;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))), Xd = Qe.ZP.label(Dl || (Dl = Pd(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  display: block;\n\n  &.dim {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  &.padd {\n    padding: 0px 12px;\n  }\n"], ["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  display: block;\n\n  &.dim {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  &.padd {\n    padding: 0px 12px;\n  }\n"]))), Nd = (0,
        Qe.ZP)(Bd)(Il || (Il = Pd(["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n\n  span {\n    border: 1px solid;\n    width: 3em;\n    height: 1.8em;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.1s;\n\n    &:after {\n      content: '';\n      transition: all 0.1s;\n      border-radius: 50%;\n      right: calc(13px + 1.5em);\n      width: 1.2em;\n      height: 1.2em;\n      position: absolute;\n      background: currentColor;\n      right: 47%;\n      top: 10%;\n    }\n  }\n\n  &.active span {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"], ["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n\n  span {\n    border: 1px solid;\n    width: 3em;\n    height: 1.8em;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.1s;\n\n    &:after {\n      content: '';\n      transition: all 0.1s;\n      border-radius: 50%;\n      right: calc(13px + 1.5em);\n      width: 1.2em;\n      height: 1.2em;\n      position: absolute;\n      background: currentColor;\n      right: 47%;\n      top: 10%;\n    }\n  }\n\n  &.active span {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.base100
        }
        ), (function(n) {
            return n.theme.colors.modal
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Kd = Qe.ZP.div(Rl || (Rl = Pd(["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n  display: flex;\n"], ["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n  display: flex;\n"])), (function(n) {
            return n.theme.colors.base100
        }
        )), jd = Qe.ZP.span(Ol || (Ol = Pd(["\n  border: ", ";\n  width: 3em;\n  height: 1.8em;\n  border-radius: 10px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.1s;\n  background: ", ";\n\n  &:after {\n    content: '';\n    transition: all 0.1s;\n    border-radius: 50%;\n    right: calc(13px + 1.5em);\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    background: ", ";\n    right: 47%;\n    top: 10%;\n  }\n\n  &.active {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"], ["\n  border: ", ";\n  width: 3em;\n  height: 1.8em;\n  border-radius: 10px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.1s;\n  background: ", ";\n\n  &:after {\n    content: '';\n    transition: all 0.1s;\n    border-radius: 50%;\n    right: calc(13px + 1.5em);\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    background: ", ";\n    right: 47%;\n    top: 10%;\n  }\n\n  &.active {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"])), (function(n) {
            return n.theme.border.base2
        }
        ), (function(n) {
            return n.theme.colors.link
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.modal
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), zd = Qe.ZP.div(Ll || (Ll = Pd(["\n  background: rgba(255, 255, 255, 0.1);\n  height: 1px;\n\n  &.marg {\n    margin: 0px 12px 8px 12px;\n  }\n"], ["\n  background: rgba(255, 255, 255, 0.1);\n  height: 1px;\n\n  &.marg {\n    margin: 0px 12px 8px 12px;\n  }\n"]))), Yd = (0,
        Qe.ZP)(Bd)(Ml || (Ml = Pd(["\n  gap: ", ";\n"], ["\n  gap: ", ";\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        )), Hd = Qe.ZP.div(Bl || (Bl = Pd(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 24px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))), _d = Qe.ZP.div(Xl || (Xl = Pd(["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n\n  ", "\n"], ["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n\n  ", "\n"])), (function(n) {
            return n.editing ? "\n    background-color: rgba(0,0,0,0.7)};\n  " : ""
        }
        )), Fd = Qe.ZP.div(Nl || (Nl = Pd(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 12px;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  button {\n    width: 50% !important;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 12px;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  button {\n    width: 50% !important;\n  }\n"]))), Ud = Qe.ZP.div(Kl || (Kl = Pd(["\n  padding: 8px;\n  text-align: center;\n  align-items: center;\n  border-radius: 12px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n"], ["\n  padding: 8px;\n  text-align: center;\n  align-items: center;\n  border-radius: 12px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n"]))), Wd = Qe.ZP.div(jl || (jl = Pd(["\n  position: absolute;\n  width: 400px;\n  height: auto;\n  display: flex;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.2);\n  gap: 8px;\n  border-radius: 8px;\n  backdrop-filter: blur(24px);\n  color: rgba(255, 255, 255, 1);\n  flex-direction: column;\n  z-index: 10;\n"], ["\n  position: absolute;\n  width: 400px;\n  height: auto;\n  display: flex;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.2);\n  gap: 8px;\n  border-radius: 8px;\n  backdrop-filter: blur(24px);\n  color: rgba(255, 255, 255, 1);\n  flex-direction: column;\n  z-index: 10;\n"]))), Gd = Qe.ZP.div(zl || (zl = Pd(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))), Vd = (Qe.ZP.div(Yl || (Yl = Pd(["\n  display: flex;\n  gap: 2px;\n  height: auto;\n  justify-content: space-between;\n  flex-direction: column;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  gap: 2px;\n  height: auto;\n  justify-content: space-between;\n  flex-direction: column;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]))),
        Qe.ZP.div(Hl || (Hl = Pd(["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n"])))), qd = {
            src: "/play/_next/static/media/MouseLButton.8f31ba3d.png",
            height: 84,
            width: 62,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEX29vY3NzclJSXFxcXCwsLg4OBAQEBMaXHl5eXBwcGtra34+Ph6enoAAAD7+/udnZ3S0tL///+fn5////+FhYW5XWQ0AAAAFXRSTlMWzcFdgT7PAFxugyTTpvGxj8KumKyPFHMzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nAXBBwLAIAgAsUNBwNn1/7c2wUeEOez7m4PYb5+BaeplaCtFOilrScLT2gGnVvwHLlIBc7L7MAIAAAAASUVORK5CYII="
        }, Qd = t(93772), Jd = {
            src: "/play/_next/static/media/GamepadDpadDown.9f027fed.png",
            height: 72,
            width: 72,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX///8AAAB7e3u9vb2Ojo46OjrBwcENDQ0gICD9/f24uLgS9t3bAAAACHRSTlMG/bdwtv1w+n1uUAwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicRcuxEQAgDAOxt0PAsP/AVBy9BJRdACNSBsys7pWJ1Xu3jKVzJFNRotTHr18gzQDju4qaMgAAAABJRU5ErkJggg=="
        }, $d = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, nc = Qe.ZP.div(_l || (_l = $d(["\n  background: ", ";\n  height: auto;\n  width: 300px;\n  position: absolute;\n  z-index: 100;\n  color: white;\n  border-radius: 8px;\n  padding: 8px;\n  border-radius: 0px 8px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(24px);\n"], ["\n  background: ", ";\n  height: auto;\n  width: 300px;\n  position: absolute;\n  z-index: 100;\n  color: white;\n  border-radius: 8px;\n  padding: 8px;\n  border-radius: 0px 8px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(24px);\n"])), (function(n) {
            return n.theme.colors.base600
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        )), ec = Qe.ZP.header(Fl || (Fl = $d(["\n  display: flex;\n  padding-bottom: 8px;\n"], ["\n  display: flex;\n  padding-bottom: 8px;\n"]))), tc = Qe.ZP.div(Ul || (Ul = $d(["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]))), ic = Qe.ZP.input(Wl || (Wl = $d(["\n  width: 150px;\n  height: fit-content;\n  padding: 2px;\n  background: ", ";\n  box-shadow: 0px 2px 8px rgba(0,0,0,0.04);\n  border-color: 1px solid ", ";\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: 6px;\n  text-align: center;\n}\n"], ["\n  width: 150px;\n  height: fit-content;\n  padding: 2px;\n  background: ", ";\n  box-shadow: 0px 2px 8px rgba(0,0,0,0.04);\n  border-color: 1px solid ", ";\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: 6px;\n  text-align: center;\n}\n"])), (function(n) {
            return n.theme.colors.background
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.black20
        }
        ), (function(n) {
            return n.theme.border.base4
        }
        )), oc = Qe.ZP.div(Gl || (Gl = $d(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  border-radius: 8px;\n  gap: 8px;\n  margin-bottom: 12px;\n  overflow-y: scroll;\n  overflow-x: none;\n  background-color: transparent;\n  border: 1px solid ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  border-radius: 8px;\n  gap: 8px;\n  margin-bottom: 12px;\n  overflow-y: scroll;\n  overflow-x: none;\n  background-color: transparent;\n  border: 1px solid ", ";\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), rc = function(n) {
            return void 0 === n && (n = ""),
            n.indexOf("Dpad") > -1 && -1 === n.indexOf("+") ? n.replace(/Gamepad/g, "") : "Left" === n || "Right" === n || "Up" === n || "Down" === n ? n : n.replace(/Gamepad/g, "").replace(/Trigger/g, "T").replace(/Left/g, "L").replace(/Right/g, "R").replace(/Shoulder/g, "B")
        }, ac = {
            Oem1: ";",
            Oem2: "/",
            Oem3: "~",
            Oem4: "[",
            Oem5: "\\",
            Oem6: "]",
            Oem7: "'",
            OemPlus: "+",
            OemComma: ",",
            OemMinus: "-",
            OemPeriod: "."
        }, lc = function(n) {
            return n ? ac[n] || n : ""
        }, dc = function(n, e) {
            return n / 100 * e
        }, cc = {
            src: "/play/_next/static/media/scroll.cd1d6361.svg",
            height: 43,
            width: 42
        }, sc = {
            src: "/play/_next/static/media/ScriptEditor.7ad774e3.svg",
            height: 12,
            width: 12
        }, uc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, pc = Qe.ZP.span(Vl || (Vl = uc(["\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);  width: 60px;\n  position: absolute;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-color: ", ";\n  border: 1px solid;\n  border-radius: 50%;\n  top: -20px;\n  left: -3px;\n  background-position: center;\n  z-index: -1;\n  background-size: 57%;\n"], ["\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);  width: 60px;\n  position: absolute;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-color: ", ";\n  border: 1px solid;\n  border-radius: 50%;\n  top: -20px;\n  left: -3px;\n  background-position: center;\n  z-index: -1;\n  background-size: 57%;\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), fc = Qe.ZP.div(ql || (ql = uc(["\n  border: 5px solid ", ",\n  width: ", ",\n  height: ", ",\n  position: absolute,\n  borderRadius: 50%,\n  pointerEvents: none,\n"], ["\n  border: 5px solid ", ",\n  width: ", ",\n  height: ", ",\n  position: absolute,\n  borderRadius: 50%,\n  pointerEvents: none,\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e = n.radius;
            return "".concat(2 * e, " px")
        }
        ), (function(n) {
            var e = n.radius;
            return "".concat(2 * e, " px")
        }
        )), hc = {
            MouseLButton: qd,
            MouseRButton: {
                src: "/play/_next/static/media/MouseRButton.d74dac8c.png",
                height: 84,
                width: 62,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEX5+fnV1dW3t7cAAADBwcHGxsb///9MaXFAQEA3Nzfg4OAkJCTu7u52dnb6+vqdnZ3AwMDHx8fT09P///+lpaX///+enp7w8PCIiIgTExMwMIjoAAAAGnRSTlMWRX6mb1wqAM7OY8FV0fSwh3uRwIiXrySus6dy+4IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicBcEHAsAgCACxU1HA2d3+/6VN0FL7q5TxnRPquO7ZCccuWyB6axYRT8kFltkDSs7oDzhYAbkITR/DAAAAAElFTkSuQmCC"
            },
            MouseMButton: {
                src: "/play/_next/static/media/MouseMButton.be91e84d.png",
                height: 72,
                width: 54,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEX///+kpKT///+srKy5ubmvr6+np6cFBQXd3d3IyMibm5v29vZFRUWKior7+/v39/d1dXVzc3OhoaE2NjYeHh4jYdQyAAAAE3RSTlMBdgXMPlun/ClMk5z9pZvbnJ2a+qgK1AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwFwQkSABAMALFFaes2/P+tErDWDCStlYRc5iwZH/sMITzVF/Creh1q7xWIZpEPLHsBi3eDfwQAAAAASUVORK5CYII="
            },
            DpadUp: {
                src: "/play/_next/static/media/GamepadDpadUp.f38ef235.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX///97e3sAAAC9vb1MaXGOjo46OjrBwcENDQ0gICABAQH9/f24uLh+iDkQAAAACXRSTlMKt/xwALb9cPpl1wDcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nEXLMRIAIAgDsLYoWPT/73Xy3BMMBBkYwLTkCYRlywG2zlET7Nw7myivzOX6+PULKsABNWxg+dMAAAAASUVORK5CYII="
            },
            DpadDown: Jd,
            DpadLeft: {
                src: "/play/_next/static/media/GamepadDpadLeft.6c56681a.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAD///++vr59fX1MaXGNjY0BAQF3d3dmZmZAQEAeHh7q6uqsrKxKPmb/AAAAC3RSTlP+CnC2ALb6uf38/kzITgQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicPYtBEsAgDITIRmNd/f97Wz30xgxAC41UNKIb3AO5/JRFMtcySeJ9QS581B+ffXz7CywKATlSUeKrAAAAAElFTkSuQmCC"
            },
            DpadRight: {
                src: "/play/_next/static/media/GamepadDpadRight.691db1eb.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAD///++vr59fX1MaXGNjY0BAQF3d3dlZWVAQEAeHh7q6uqsrKya6EWTAAAAC3RSTlP+CnC2ALb6uf38/kzITgQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicPYvBDcAgDMScS4D2YP95Ufroz5JtKpRLUcQweATyfDwtEu/9kh8ck61Mqz+u0Or9AiwQATk4iacQAAAAAElFTkSuQmCC"
            }
        }, gc = {
            Tab: "Tab",
            Enter: "Enter",
            ShiftLeft: "Shift",
            ShiftRight: "Shift",
            ControlLeft: "Ctrl",
            ControlRight: "Ctrl",
            AltLeft: "Alt",
            AltRight: "Alt",
            CapsLock: "CapsLock",
            Space: "Space",
            PageUp: "PgUp",
            PageDown: "PgDn",
            End: "End",
            Home: "Home",
            ArrowLeft: "Left",
            ArrowUp: "Up",
            ArrowRight: "Right",
            ArrowDown: "Down",
            Insert: "Insert",
            Delete: "Delete",
            Minus: "OemMinus",
            Period: "OemPeriod",
            Comma: "OemComma",
            Equal: "OemPlus",
            Digit0: "0",
            Digit1: "1",
            Digit2: "2",
            Digit3: "3",
            Digit4: "4",
            Digit5: "5",
            Digit6: "6",
            Digit7: "7",
            Digit8: "8",
            Digit9: "9",
            KeyA: "A",
            KeyB: "B",
            KeyC: "C",
            KeyD: "D",
            KeyE: "E",
            KeyF: "F",
            KeyG: "G",
            KeyH: "H",
            KeyI: "I",
            KeyJ: "J",
            KeyK: "K",
            KeyL: "L",
            KeyM: "M",
            KeyN: "N",
            KeyO: "O",
            KeyP: "P",
            KeyQ: "Q",
            KeyR: "R",
            KeyS: "S",
            KeyT: "T",
            KeyU: "U",
            KeyV: "V",
            KeyW: "W",
            KeyX: "X",
            KeyY: "Y",
            KeyZ: "Z",
            Numpad0: "Num0",
            Numpad1: "Num1",
            Numpad2: "Num2",
            Numpad3: "Num3",
            Numpad4: "Num4",
            Numpad5: "Num5",
            Numpad6: "Num6",
            Numpad7: "Num7",
            Numpad8: "Num8",
            Numpad9: "Num9",
            Semicolon: "Oem1",
            Slash: "Oem2",
            Backquote: "Oem3",
            BracketLeft: "Oem4",
            Backslash: "Oem5",
            BracketRight: "Oem6",
            Quote: "Oem7",
            Backspace: "Backspace"
        }, vc = function(n) {
            return gc[n]
        }, mc = [], xc = function(n) {
            if (mc.includes(n))
                return null;
            var e = vc(n);
            return e ? (0 !== mc.length && (e = "".concat(vc(mc[mc.length - 1]), " + ").concat(e)),
            mc.push(n),
            e) : null
        }, yc = function(n) {
            var e, t, i, o, r = n.gamepad, a = n.control, l = n.height, d = n.newControl, c = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), s = (0,
            Ye.useState)((null === (e = a.KeyUp) || void 0 === e ? void 0 : e.length) || 1), u = s[0], p = s[1], f = (0,
            Ye.useState)(d), h = f[0], g = f[1], v = (0,
            Ye.useState)((null === (t = a.KeyDown) || void 0 === t ? void 0 : t.length) || 1), m = v[0], x = v[1], y = (0,
            Ye.useState)(!1), w = y[0], b = y[1], Z = (0,
            Ye.useState)((null === (i = a.KeyLeft) || void 0 === i ? void 0 : i.length) || 1), A = Z[0], k = Z[1], S = (0,
            Ye.useState)(!1), E = S[0], P = S[1], T = (0,
            Ye.useState)((null === (o = a.KeyRight) || void 0 === o ? void 0 : o.length) || 1), C = T[0], D = T[1], I = (0,
            Ye.useState)(!1), R = I[0], O = I[1], L = (0,
            Ye.useRef)(null), M = (0,
            Ye.useRef)(null), B = (0,
            Ye.useRef)(null), X = (0,
            Ye.useRef)(null), N = function(n) {
                var e = xc(n.code);
                e && (h ? (a.KeyUp = e,
                p(e.length)) : w ? (a.KeyDown = e,
                x(e.length)) : E ? (a.KeyLeft = e,
                k(e.length)) : R && (a.KeyRight = e,
                D(e.length)),
                n.target.value = e)
            }, K = function(n) {
                mc = mc.filter((function(e) {
                    return e !== n.code
                }
                ))
            }, j = function(n) {
                h ? (a.KeyUp = "MouseRButton",
                p("MouseRButton".length)) : w ? (a.KeyDown = "MouseRButton",
                x("MouseRButton".length)) : E ? (a.KeyLeft = "MouseRButton",
                k("MouseRButton".length)) : R && (a.KeyRight = "MouseRButton",
                D("MouseRButton".length)),
                n.target.value = "MouseRButton"
            };
            return (0,
            Ye.useEffect)((function() {
                c || (g(!1),
                b(!1),
                P(!1),
                O(!1))
            }
            ), [c]),
            (0,
            Ye.useEffect)((function() {
                var n, e, t, i;
                h && (null === (n = L.current) || void 0 === n || n.focus()),
                w && (null === (e = M.current) || void 0 === e || e.focus()),
                E && (null === (t = B.current) || void 0 === t || t.focus()),
                R && (null === (i = X.current) || void 0 === i || i.focus())
            }
            ), [h, w, E, R]),
            (0,
            et.BX)(et.HY, {
                children: [r && !c && a.GamepadStick && (0,
                et.tZ)("span", {
                    className: "overlayKeyValue",
                    children: rc(a.GamepadStick)
                }), (!r || c) && (0,
                et.BX)(et.HY, {
                    children: [a.KeyUp && !h && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            pointerEvents: c ? "all" : "none",
                            transform: "translateY(-100%) translateY(-".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        onClick: function() {
                            c && g(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(a.KeyUp)
                        })
                    }), h && c && (0,
                    et.tZ)("input", {
                        ref: L,
                        value: a.KeyUp,
                        type: "text",
                        style: {
                            pointerEvents: c ? "all" : "none",
                            transform: "translateY(-100%) translateY(-".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(a.$type, "-key-input"),
                        required: !0,
                        onKeyDown: N,
                        onKeyUp: K,
                        onBlur: function() {
                            g(!1)
                        },
                        size: u,
                        onContextMenu: function(n) {
                            j(n),
                            n.preventDefault()
                        }
                    }), a.KeyLeft && !E && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(-100%) translateX(-".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        onClick: function() {
                            c && P(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(a.KeyLeft)
                        })
                    }), E && c && (0,
                    et.tZ)("input", {
                        value: a.KeyLeft,
                        ref: B,
                        type: "text",
                        style: {
                            pointerEvents: c ? "all" : "none",
                            transform: "translateX(-100%) translateX(-".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(a.$type, "-key-input"),
                        required: !0,
                        onKeyDown: N,
                        onKeyUp: K,
                        onBlur: function() {
                            P(!1)
                        },
                        size: A,
                        onContextMenu: function(n) {
                            j(n),
                            n.preventDefault()
                        }
                    }), a.KeyDown && !w && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateY(100%) translateY(".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        onClick: function() {
                            c && b(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(a.KeyDown)
                        })
                    }), w && c && (0,
                    et.tZ)("input", {
                        value: a.KeyDown,
                        ref: M,
                        type: "text",
                        style: {
                            pointerEvents: c ? "all" : "none",
                            transform: "translateY(100%) translateY(".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(a.$type, "-key-input"),
                        required: !0,
                        onKeyDown: N,
                        onKeyUp: K,
                        onBlur: function() {
                            b(!1)
                        },
                        size: m,
                        onContextMenu: function(n) {
                            j(n),
                            n.preventDefault()
                        }
                    }), a.KeyRight && !R && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(100%) translateX(".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        onClick: function() {
                            c && O(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(a.KeyRight)
                        })
                    }), R && c && (0,
                    et.tZ)("input", {
                        value: a.KeyRight,
                        ref: X,
                        type: "text",
                        style: {
                            pointerEvents: c ? "all" : "none",
                            transform: "translateX(100%) translateX(".concat(dc(l, (a.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(a.$type, "-key-input"),
                        required: !0,
                        onKeyDown: N,
                        onKeyUp: K,
                        onBlur: function() {
                            O(!1)
                        },
                        size: C,
                        onContextMenu: function(n) {
                            j(n),
                            n.preventDefault()
                        }
                    }), c && (0,
                    et.tZ)("span", {
                        style: {
                            height: "".concat(2 * dc(l, (a.XRadius || 5) / 2) + 80, "px"),
                            aspectRatio: "1",
                            border: "1px solid white",
                            borderRadius: "50%",
                            zIndex: "-1"
                        }
                    })]
                })]
            })
        }, wc = function(n) {
            var e, t, i, o, r, a, l = n.gamepad, d = n.control, c = n.height, s = n.newControl, u = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), p = l ? rc(d.Key_alt1) : lc(d.Key), f = (0,
            Ye.useState)((null === (e = d.Key) || void 0 === e ? void 0 : e.length) || 1), h = f[0], g = f[1], v = (0,
            Ye.useState)(s), m = v[0], x = v[1], y = (0,
            Ye.useState)((null === (t = d.KeyUp) || void 0 === t ? void 0 : t.length) || 1), w = y[0], b = y[1], Z = (0,
            Ye.useState)(s), A = Z[0], k = Z[1], S = (0,
            Ye.useState)((null === (i = d.KeyDown) || void 0 === i ? void 0 : i.length) || 1), E = S[0], P = S[1], T = (0,
            Ye.useState)(!1), C = T[0], D = T[1], I = (0,
            Ye.useState)((null === (o = d.KeyLeft) || void 0 === o ? void 0 : o.length) || 1), R = I[0], O = I[1], L = (0,
            Ye.useState)(!1), M = L[0], B = L[1], X = (0,
            Ye.useState)((null === (r = d.KeyRight) || void 0 === r ? void 0 : r.length) || 1), N = X[0], K = X[1], j = (0,
            Ye.useState)(!1), z = j[0], Y = j[1], H = (0,
            Ye.useRef)(null), _ = (0,
            Ye.useRef)(null), F = (0,
            Ye.useRef)(null), U = (0,
            Ye.useRef)(null), W = (0,
            Ye.useRef)(null), G = function(n) {
                var e = xc(n.code);
                e && (A ? (d.KeyUp = e,
                b(e.length)) : C ? (d.KeyDown = e,
                P(e.length)) : M ? (d.KeyLeft = e,
                O(e.length)) : z ? (d.KeyRight = e,
                K(e.length)) : m && (d.Key = e,
                g(e.length)),
                n.target.value = e)
            }, V = function(n) {
                mc = mc.filter((function(e) {
                    return e !== n.code
                }
                ))
            }, q = function(n) {
                A ? (d.KeyUp = "MouseRButton",
                b("MouseRButton".length)) : C ? (d.KeyDown = "MouseRButton",
                P("MouseRButton".length)) : M ? (d.KeyLeft = "MouseRButton",
                O("MouseRButton".length)) : z ? (d.KeyRight = "MouseRButton",
                K("MouseRButton".length)) : m && (d.Key = "MouseRButton",
                g("MouseRButton".length)),
                n.target.value = "MouseRButton"
            };
            return (0,
            Ye.useEffect)((function() {
                u || (x(!1),
                k(!1),
                D(!1),
                B(!1),
                Y(!1))
            }
            ), [u]),
            (0,
            Ye.useEffect)((function() {
                var n, e, t, i, o;
                m && (null === (n = H.current) || void 0 === n || n.focus()),
                A && (null === (e = _.current) || void 0 === e || e.focus()),
                C && (null === (t = U.current) || void 0 === t || t.focus()),
                M && (null === (i = F.current) || void 0 === i || i.focus()),
                z && (null === (o = W.current) || void 0 === o || o.focus())
            }
            ), [m, A, C, M, z]),
            (0,
            et.tZ)(et.HY, {
                children: u ? d.DeviceType ? (0,
                et.BX)(et.HY, {
                    children: [!m && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue ".concat(d.Type, " ").concat(hc[p] ? "DpadImage" : ""),
                        onClick: function() {
                            var n;
                            u && x(!0),
                            null === (n = H.current) || void 0 === n || n.focus()
                        },
                        style: {
                            pointerEvents: u ? "all" : "none",
                            minWidth: "28px",
                            minHeight: "16px"
                        },
                        children: hc[p] ? (0,
                        et.tZ)("img", {
                            src: null === (a = hc[p]) || void 0 === a ? void 0 : a.src,
                            alt: ""
                        }) : p
                    }), m && u && (0,
                    et.tZ)("input", {
                        ref: H,
                        value: d.Key,
                        type: "text",
                        id: "".concat(d.$type, "-key-input"),
                        required: !0,
                        onKeyDown: G,
                        onKeyUp: V,
                        onBlur: function() {
                            x(!1)
                        },
                        size: h,
                        onContextMenu: function(n) {
                            q(n),
                            n.preventDefault()
                        },
                        style: {
                            pointerEvents: u ? "all" : "none"
                        }
                    })]
                }) : (0,
                et.BX)(et.HY, {
                    children: [d.KeyUp && !A && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            pointerEvents: u ? "all" : "none",
                            position: "absolute",
                            transform: "translate(0, -200%)"
                        },
                        onClick: function() {
                            u && k(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(d.KeyUp)
                        })
                    }), A && u && (0,
                    et.tZ)("input", {
                        ref: _,
                        value: d.KeyUp,
                        type: "text",
                        style: {
                            pointerEvents: u ? "all" : "none",
                            position: "absolute",
                            transform: "translate(0, -200%)"
                        },
                        id: "".concat(d.$type, "-key-input"),
                        required: !0,
                        onKeyDown: G,
                        onKeyUp: V,
                        onBlur: function() {
                            k(!1)
                        },
                        size: w,
                        onContextMenu: function(n) {
                            q(n),
                            n.preventDefault()
                        }
                    }), d.KeyLeft && !M && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            position: "absolute",
                            transform: "translate(-150%, 0)"
                        },
                        onClick: function() {
                            u && B(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(d.KeyLeft)
                        })
                    }), M && u && (0,
                    et.tZ)("input", {
                        value: d.KeyLeft,
                        ref: F,
                        type: "text",
                        style: {
                            pointerEvents: u ? "all" : "none",
                            position: "absolute",
                            transform: "translate(-150%, 0)"
                        },
                        id: "".concat(d.$type, "-key-input"),
                        required: !0,
                        onKeyDown: G,
                        onKeyUp: V,
                        onBlur: function() {
                            B(!1)
                        },
                        size: R,
                        onContextMenu: function(n) {
                            q(n),
                            n.preventDefault()
                        }
                    }), d.KeyDown && !C && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue down",
                        style: {
                            position: "absolute",
                            transform: "translate(0, 200%)"
                        },
                        onClick: function() {
                            u && D(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(d.KeyDown)
                        })
                    }), C && u && (0,
                    et.tZ)("input", {
                        value: d.KeyDown,
                        ref: U,
                        type: "text",
                        style: {
                            pointerEvents: u ? "all" : "none",
                            position: "absolute",
                            transform: "translate(0, 200%)"
                        },
                        id: "".concat(d.$type, "-key-input"),
                        required: !0,
                        onKeyDown: G,
                        onKeyUp: V,
                        onBlur: function() {
                            D(!1)
                        },
                        size: E,
                        onContextMenu: function(n) {
                            q(n),
                            n.preventDefault()
                        }
                    }), d.KeyRight && !z && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue right",
                        style: {
                            position: "absolute",
                            transform: "translate(125%, 0)"
                        },
                        onClick: function() {
                            u && Y(!0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(d.KeyRight)
                        })
                    }), z && u && (0,
                    et.tZ)("input", {
                        value: d.KeyRight,
                        ref: W,
                        type: "text",
                        style: {
                            pointerEvents: u ? "all" : "none",
                            position: "absolute",
                            transform: "translate(125%, 0)"
                        },
                        id: "".concat(d.$type, "-key-input"),
                        required: !0,
                        onKeyDown: G,
                        onKeyUp: V,
                        onBlur: function() {
                            Y(!1)
                        },
                        size: N,
                        onContextMenu: function(n) {
                            q(n),
                            n.preventDefault()
                        }
                    })]
                }) : l ? d.GamepadStick ? (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)("span", {
                        className: "overlayKeyValue",
                        children: rc(d.GamepadStick)
                    }), (0,
                    et.tZ)(pc, {})]
                }) : (0,
                et.BX)(et.HY, {
                    children: [d.KeyUp_alt1 && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            transform: "translateY(-40%) translateY(-".concat(dc(c, 3), "px)")
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(d.KeyUp_alt1)
                        })
                    }), d.KeyLeft_alt1 && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(-40%) translateX(-".concat(dc(c, 3), "px)")
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: rc(d.KeyLeft_alt1)
                        })
                    }), d.KeyDown_alt1 && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue down",
                        style: {
                            transform: "translateY(40%) translateY(".concat(dc(c, 3), "px)")
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: d.KeyDown_alt1
                        })
                    }), d.KeyRight_alt1 && (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(40%) translateX(".concat(dc(c, 3), "px")
                        },
                        children: (0,
                        et.tZ)("span", {
                            children: d.KeyRight_alt1
                        })
                    }), (0,
                    et.tZ)(pc, {})]
                }) : null
            })
        }, bc = function(n) {
            var e, t, i = n.gamepad, o = n.control, r = n.newControl, a = i ? rc(o.Key_alt1) : lc(o.Key), l = (0,
            Ye.useState)((null === (e = o.Key) || void 0 === e ? void 0 : e.length) || 1), d = l[0], c = l[1], s = (0,
            Ye.useState)(r), u = s[0], p = s[1], f = (0,
            Ye.useRef)(null), h = (0,
            He.v9)((function(n) {
                return n.play.showScriptEditor
            }
            )), g = (0,
            He.v9)((function(n) {
                return n.play.scriptCommands
            }
            )), v = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), m = (0,
            He.I0)();
            return (0,
            Ye.useEffect)((function() {
                v || p(!1)
            }
            ), [v]),
            (0,
            Ye.useEffect)((function() {
                var n;
                u && (null === (n = f.current) || void 0 === n || n.focus())
            }
            ), [u]),
            (0,
            Ye.useEffect)((function() {
                !h && g.length > 0 && (o.Commands = g,
                m({
                    type: Et.Z.SCRIPT_EDITOR,
                    payload: {
                        scriptCommands: []
                    }
                }))
            }
            ), [h]),
            (i ? o.Key_alt1 : o.Key) || v ? (0,
            et.BX)(et.HY, {
                children: [!u && (0,
                et.tZ)("span", {
                    className: "overlayKeyValue ".concat(o.Type, " ").concat(hc[a] ? "DpadImage" : ""),
                    onClick: function() {
                        var n;
                        v && p(!0),
                        null === (n = f.current) || void 0 === n || n.focus()
                    },
                    style: {
                        pointerEvents: v ? "all" : "none",
                        minWidth: "28px",
                        minHeight: "16px"
                    },
                    children: hc[a] ? (0,
                    et.tZ)("img", {
                        src: null === (t = hc[a]) || void 0 === t ? void 0 : t.src,
                        alt: ""
                    }) : a
                }), v && "Script" === o.Type && (0,
                et.tZ)("img", {
                    src: (0,
                    ti.j)(sc),
                    alt: "",
                    style: {
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        background: "rgba(0,0,0,1)",
                        transform: "translate(14px, 18px)",
                        borderRadius: "8px",
                        padding: "2px"
                    },
                    onClick: function() {
                        m({
                            type: Et.Z.SCRIPT_EDITOR,
                            payload: {
                                showScriptEditor: !0
                            }
                        })
                    }
                }), u && v && (0,
                et.tZ)("input", {
                    ref: f,
                    value: o.Key,
                    type: "text",
                    id: "".concat(o.$type, "-key-input"),
                    required: !0,
                    onKeyDown: function(n) {
                        var e = xc(n.code);
                        e && (o.Key = e,
                        c(e.length),
                        n.target.value = e)
                    },
                    onKeyUp: function(n) {
                        mc = mc.filter((function(e) {
                            return e !== n.code
                        }
                        ))
                    },
                    onBlur: function() {
                        p(!1)
                    },
                    size: d,
                    onContextMenu: function(n) {
                        var e;
                        e = n,
                        o.Key = "MouseRButton",
                        c("MouseRButton".length),
                        e.target.value = "MouseRButton",
                        n.preventDefault()
                    },
                    style: {
                        pointerEvents: v ? "all" : "none"
                    }
                })]
            }) : null
        }, Zc = function(n) {
            var e, t = n.gamepad, i = n.control, o = n.newControl, r = n.isPanLeftControl, a = r ? lc(i.KeyAction) : t ? rc(i.KeyStartStop_alt1) : lc(i.KeyStartStop), l = (0,
            Ye.useState)(a.length), d = l[0], c = l[1], s = (0,
            Ye.useState)(o), u = s[0], p = s[1], f = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), h = (0,
            Ye.useRef)(null);
            return (0,
            Ye.useEffect)((function() {
                f || p(!1)
            }
            ), [f]),
            (0,
            Ye.useEffect)((function() {
                var n;
                u && f && (null === (n = h.current) || void 0 === n || n.focus())
            }
            ), [u]),
            a ? (0,
            et.BX)(et.HY, {
                children: [!u && (0,
                et.tZ)("span", {
                    className: "overlayKeyValue",
                    onClick: function() {
                        f && p(!0)
                    },
                    style: {
                        pointerEvents: f ? "all" : "none"
                    },
                    children: hc[a] ? (0,
                    et.tZ)("img", {
                        src: null === (e = hc[a]) || void 0 === e ? void 0 : e.src,
                        alt: ""
                    }) : a
                }), u && f && (0,
                et.tZ)("input", {
                    value: r ? i.KeyAction : i.KeyStartStop,
                    ref: h,
                    type: "text",
                    id: "".concat(i.$type, "-key-input"),
                    required: !0,
                    onKeyDown: function(n) {
                        var e = xc(n.code);
                        e && (r ? i.KeyAction = e : i.KeyStartStop = e,
                        c(e.length),
                        n.target.value = e)
                    },
                    onKeyUp: function(n) {
                        mc = mc.filter((function(e) {
                            return e !== n.code
                        }
                        ))
                    },
                    onBlur: function() {
                        p(!1)
                    },
                    size: d,
                    onContextMenu: function(n) {
                        var e;
                        e = n,
                        r ? i.KeyAction = "MouseRButton" : i.KeyStartStop = "MouseRButton",
                        c("MouseRButton".length),
                        e.target.value = "MouseRButton",
                        n.preventDefault()
                    },
                    style: {
                        pointerEvents: f ? "all" : "none"
                    }
                })]
            }) : null
        }, Ac = function(n) {
            var e, t, i, o = n.gamepad, r = n.control, a = n.newControl, l = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            )), d = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), c = null === (e = null === l || void 0 === l ? void 0 : l.current) || void 0 === e ? void 0 : e.getBoundingClientRect(), s = o ? rc(r.KeyIn_alt1) : lc(r.KeyIn), u = o ? rc(r.KeyOut_alt1) : lc(r.KeyOut), p = (0,
            Ye.useState)((null === (t = r.KeyIn) || void 0 === t ? void 0 : t.length) || 1), f = p[0], h = p[1], g = (0,
            Ye.useState)((null === (i = r.KeyOut) || void 0 === i ? void 0 : i.length) || 1), v = g[0], m = g[1], x = (0,
            Ye.useState)(a), y = x[0], w = x[1], b = (0,
            Ye.useState)(!1), Z = b[0], A = b[1], k = (0,
            Ye.useState)(((r.X1 || 0) - (r.X2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100), S = k[0], E = k[1], P = (0,
            Ye.useState)(((r.Y1 || 0) - (r.Y2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100), T = P[0], C = P[1], D = (0,
            Ye.useState)(((r.X2 || 0) - (r.X1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100), I = D[0], R = D[1], O = (0,
            Ye.useState)(((r.Y2 || 0) - (r.Y1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100), L = O[0], M = O[1], B = (0,
            Ye.useRef)(null), X = (0,
            Ye.useRef)(null);
            (0,
            Ye.useEffect)((function() {
                E(((r.X1 || 0) - (r.X2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100),
                C(((r.Y1 || 0) - (r.Y2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100),
                R(((r.X2 || 0) - (r.X1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100),
                M(((r.Y2 || 0) - (r.Y1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100)
            }
            ), [r.X1, r.X2, r.Y1, r.Y2]);
            var N = function(n) {
                var e = xc(n.code);
                e && (y ? (r.KeyIn = e,
                h(e.length)) : Z && (r.KeyOut = e,
                m(e.length)),
                n.target.value = e)
            }
              , K = function(n) {
                mc = mc.filter((function(e) {
                    return e !== n.code
                }
                ))
            }
              , j = function(n) {
                y ? (r.KeyIn = "MouseRButton",
                h("MouseRButton".length)) : Z && (r.KeyOut = "MouseRButton",
                m("MouseRButton".length)),
                n.target.value = "MouseRButton"
            };
            return (0,
            Ye.useEffect)((function() {
                d || (w(!1),
                A(!1))
            }
            ), [d]),
            (0,
            Ye.useEffect)((function() {
                var n, e;
                y && (null === (n = B.current) || void 0 === n || n.focus()),
                Z && (null === (e = X.current) || void 0 === e || e.focus())
            }
            ), [y, Z]),
            d ? (0,
            et.BX)(et.HY, {
                children: [!y && (0,
                et.tZ)("span", {
                    className: "overlayKeyValue",
                    onClick: function() {
                        d && w(!0)
                    },
                    style: {
                        pointerEvents: d ? "all" : "none",
                        position: "absolute",
                        minHeight: "16px",
                        transform: "translate(".concat(S, "px, ").concat(T, "px)")
                    },
                    children: s
                }), y && (0,
                et.tZ)("input", {
                    value: r.KeyIn,
                    ref: B,
                    type: "text",
                    id: "".concat(r.$type, "-key-input"),
                    required: !0,
                    onKeyDown: N,
                    onKeyUp: K,
                    onBlur: function() {
                        w(!1)
                    },
                    size: f,
                    onContextMenu: function(n) {
                        j(n),
                        n.preventDefault()
                    },
                    style: {
                        pointerEvents: d ? "all" : "none",
                        position: "absolute",
                        transform: "translate(".concat(S, "px, ").concat(T, "px)")
                    }
                }), !Z && (0,
                et.tZ)("span", {
                    className: "overlayKeyValue",
                    onClick: function() {
                        d && A(!0)
                    },
                    style: {
                        pointerEvents: d ? "all" : "none",
                        position: "absolute",
                        transform: "translate(".concat(I, "px, ").concat(L, "px)"),
                        minHeight: "16px"
                    },
                    children: u
                }), Z && (0,
                et.tZ)("input", {
                    value: r.KeyOut,
                    ref: X,
                    type: "text",
                    id: "".concat(r.$type, "-key-input"),
                    required: !0,
                    onKeyDown: N,
                    onKeyUp: K,
                    onBlur: function() {
                        A(!1)
                    },
                    size: v,
                    onContextMenu: function(n) {
                        j(n),
                        n.preventDefault()
                    },
                    style: {
                        pointerEvents: d ? "all" : "none",
                        position: "absolute",
                        transform: "translate(".concat(I, "px, ").concat(L, "px)")
                    }
                })]
            }) : null
        }, kc = function(n) {
            var e, t, i, o = n.controlKey, r = n.gamepad, a = n.control, l = n.newControl, d = (0,
            Ye.useState)((null === (e = a.KeyActivate) || void 0 === e ? void 0 : e.length) || 1), c = d[0], s = d[1], u = (0,
            Ye.useState)(l), p = u[0], f = u[1], h = (0,
            Ye.useRef)(null), g = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            )), v = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), m = null === (t = null === g || void 0 === g ? void 0 : g.current) || void 0 === t ? void 0 : t.getBoundingClientRect(), x = (a.XRadius || 8) * ((null === m || void 0 === m ? void 0 : m.height) || 720) / 100;
            return (0,
            Ye.useEffect)((function() {
                v || f(!1)
            }
            ), [v]),
            (0,
            Ye.useEffect)((function() {
                var n;
                p && v && (null === (n = h.current) || void 0 === n || n.focus())
            }
            ), [p]),
            (0,
            et.BX)(et.HY, {
                children: [!p && (hc[o] ? (0,
                et.tZ)("span", {
                    className: "overlayKeyValue",
                    children: (0,
                    et.tZ)("img", {
                        src: null === (i = hc[o]) || void 0 === i ? void 0 : i.src,
                        alt: ""
                    })
                }) : (0,
                et.tZ)("span", {
                    className: "overlayKeyValue MobaText ".concat(o),
                    children: r ? rc(o) : lc(o)
                })), v && (0,
                et.tZ)(fc, {
                    radius: x
                }), p && v && (0,
                et.tZ)("input", {
                    value: a.KeyActivate,
                    ref: h,
                    type: "text",
                    id: "".concat(a.$type, "-key-input"),
                    required: !0,
                    onKeyDown: function(n) {
                        var e = xc(n.code);
                        e && (a.KeyActivate = e,
                        s(e.length),
                        n.target.value = e)
                    },
                    onKeyUp: function(n) {
                        mc = mc.filter((function(e) {
                            return e !== n.code
                        }
                        ))
                    },
                    onBlur: function() {
                        f(!1)
                    },
                    size: c,
                    onContextMenu: function(n) {
                        var e;
                        e = n,
                        a.KeyActivate = "MouseRButton",
                        s("MouseRButton".length),
                        e.target.value = "MouseRButton",
                        n.preventDefault()
                    },
                    style: {
                        pointerEvents: v ? "all" : "none"
                    }
                })]
            })
        }, Sc = function(n) {
            n.control;
            var e = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            ));
            return e ? (0,
            et.tZ)("span", {
                style: {
                    pointerEvents: e ? "all" : "none",
                    minWidth: "28px",
                    minHeight: "16px"
                },
                children: (0,
                et.tZ)("img", {
                    src: (0,
                    ti.j)(cc),
                    alt: ""
                })
            }) : null
        }, Ec = function(n) {
            var e, t, i = n.control, o = n.newControl, r = lc(i.KeyMove), a = (0,
            Ye.useState)((null === (e = i.KeyMove) || void 0 === e ? void 0 : e.length) || 1), l = a[0], d = a[1], c = (0,
            Ye.useState)(o), s = c[0], u = c[1], p = (0,
            Ye.useRef)(null), f = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            ));
            return (0,
            Ye.useEffect)((function() {
                f || u(!1)
            }
            ), [f]),
            (0,
            Ye.useEffect)((function() {
                var n;
                s && (null === (n = p.current) || void 0 === n || n.focus())
            }
            ), [s]),
            f ? (0,
            et.BX)(et.HY, {
                children: [!s && (0,
                et.tZ)("span", {
                    className: "overlayKeyValue ".concat(i.Type, " ").concat(hc[r] ? "DpadImage" : ""),
                    onClick: function() {
                        var n;
                        f && u(!0),
                        null === (n = p.current) || void 0 === n || n.focus()
                    },
                    style: {
                        pointerEvents: f ? "all" : "none",
                        minWidth: "28px",
                        minHeight: "16px"
                    },
                    children: hc[r] ? (0,
                    et.tZ)("img", {
                        src: null === (t = hc[r]) || void 0 === t ? void 0 : t.src,
                        alt: ""
                    }) : r
                }), s && f && (0,
                et.tZ)("input", {
                    ref: p,
                    value: i.KeyMove,
                    type: "text",
                    id: "".concat(i.$type, "-key-input"),
                    required: !0,
                    onKeyDown: function(n) {
                        var e = xc(n.code);
                        e && (i.KeyMove = e,
                        d(e.length),
                        n.target.value = e)
                    },
                    onKeyUp: function(n) {
                        mc = mc.filter((function(e) {
                            return e !== n.code
                        }
                        ))
                    },
                    onBlur: function() {
                        u(!1)
                    },
                    size: l,
                    onContextMenu: function(n) {
                        var e;
                        e = n,
                        i.KeyMove = "MouseRButton",
                        d("MouseRButton".length),
                        e.target.value = "MouseRButton",
                        n.preventDefault()
                    },
                    style: {
                        pointerEvents: f ? "all" : "none"
                    }
                })]
            }) : null
        }, Pc = function(n, e, t, i, o) {
            void 0 === o && (o = !1);
            var r = kt.Z.getState().imap.keymappingEditMode;
            switch (n.Type) {
            case Zd.x_.Tap:
            case Zd.x_.TapRepeat:
            case Zd.x_.Script:
            case Zd.x_.Swipe:
            case Zd.x_.State:
                return (0,
                et.tZ)(bc, {
                    gamepad: e,
                    control: n,
                    newControl: i
                });
            case Zd.x_.Dpad:
                return (0,
                et.tZ)(yc, {
                    gamepad: e,
                    height: t.height || 500,
                    control: n,
                    newControl: i
                });
            case Zd.x_.FreeLook:
                return (0,
                et.tZ)(wc, {
                    gamepad: e,
                    height: t.height || 500,
                    control: n,
                    newControl: i
                });
            case Zd.x_.Pan:
                return (0,
                et.tZ)(Zc, {
                    gamepad: e,
                    control: n,
                    newControl: i,
                    isPanLeftControl: o
                });
            case Zd.x_.MOBASkill:
                var a = e ? n.KeyActivate_alt1 : n.KeyActivate;
                if (a || r)
                    return (0,
                    et.tZ)(kc, {
                        controlKey: a || "",
                        gamepad: e,
                        control: n,
                        newControl: i
                    });
                break;
            case Zd.x_.Zoom:
                return (0,
                et.tZ)(Ac, {
                    gamepad: e,
                    control: n,
                    newControl: i
                });
            case Zd.x_.EdgeScroll:
            case Zd.x_.Scroll:
                return (0,
                et.tZ)(Sc, {
                    control: n
                });
            case Zd.x_.MOBADpad:
                return (0,
                et.tZ)(Ec, {
                    control: n,
                    newControl: i
                });
            default:
                if (r)
                    return (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue ".concat(n.Type),
                        style: {
                            pointerEvents: r ? "all" : "none",
                            minWidth: "28px",
                            minHeight: "16px"
                        }
                    })
            }
            return ""
        }, Tc = function() {
            return (Tc = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Cc = function(n) {
            var e = n.children
              , t = n.style
              , i = void 0 === t ? {} : t
              , o = n.className
              , r = n.controlRef
              , a = n.callback
              , l = n.isPanLeftControl
              , d = void 0 !== l && l
              , c = (0,
            Ye.useRef)(null)
              , s = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , u = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            ))
              , p = (0,
            Ye.useState)(!1)
              , f = p[0]
              , h = p[1]
              , g = (0,
            He.I0)()
              , v = 0
              , m = 0
              , x = 0
              , y = 0
              , w = !1;
            function b(n, e) {
                var t, i = n + x, o = e + y, r = null === (t = null === s || void 0 === s ? void 0 : s.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                (null === c || void 0 === c ? void 0 : c.current) && (r && (i = Math.min(Math.max(i, r.left), r.right),
                o = Math.min(Math.max(o, r.top), r.bottom)),
                c.current.style.transform = "translate3d(".concat(i - x, "px, ").concat(o - y, "px, 0)"))
            }
            function Z(n) {
                var e, t, i = kt.Z.getState().play.orientation;
                n.preventDefault();
                var o = (null === (e = null === c || void 0 === c ? void 0 : c.current) || void 0 === e ? void 0 : e.clientHeight) || 0
                  , r = (null === (t = null === c || void 0 === c ? void 0 : c.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                if ("touchmove" === n.type) {
                    var a = n;
                    if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === qe.cj.landscape) {
                        if (a.touches[0].clientX - o < 5 && a.touches[0].clientY - 10 < 5 || window.innerWidth - a.touches[0].clientX < 10 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientX - o < 5 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientY - 10 < 5 && window.innerWidth - a.touches[0].clientX < 10)
                            return;
                        if (a.touches[0].clientX - o < 5)
                            return v = a.touches[0].clientY,
                            m = window.innerWidth - o - 5,
                            void b(v, m);
                        if (a.touches[0].clientY - 10 < 5)
                            return v = 5,
                            m = window.innerWidth - a.touches[0].clientX,
                            void b(v, m);
                        if (window.innerWidth - a.touches[0].clientX < 10)
                            return void b(v = a.touches[0].clientY, m = 10);
                        if (window.innerHeight - a.touches[0].clientY < r + 10)
                            return v = window.innerHeight - r - 10,
                            m = window.innerWidth - a.touches[0].clientX,
                            void b(v, m);
                        v = a.touches[0].clientY,
                        m = window.innerWidth - a.touches[0].clientX
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === qe.cj.landscape) {
                        if (a.touches[0].clientX - 10 < 5 && a.touches[0].clientY < 5 || window.innerWidth - a.touches[0].clientX < r + 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientX - 10 < 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientY < 5 && window.innerWidth - a.touches[0].clientX < r + 5)
                            return;
                        if (a.touches[0].clientX - 10 < 5)
                            return v = 5,
                            m = a.targetTouches[0].clientY,
                            void b(v, m);
                        if (a.touches[0].clientY < 5)
                            return void b(v = a.targetTouches[0].clientX, m = 5);
                        if (window.innerWidth - a.touches[0].clientX < r + 5)
                            return v = window.innerWidth - r - 5,
                            m = a.targetTouches[0].clientY,
                            void b(v, m);
                        if (window.innerHeight - a.touches[0].clientY < o + 5)
                            return v = a.targetTouches[0].clientX,
                            m = window.innerHeight - o - 5,
                            void b(v, m);
                        v = a.targetTouches[0].clientX,
                        m = a.targetTouches[0].clientY
                    } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === qe.cj.portrait) {
                        if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 || a.touches[0].clientX > window.innerWidth - (r + 5) && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientX < 5 && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientY < 5 && a.touches[0].clientX > window.innerWidth - (r + 5))
                            return;
                        if (a.touches[0].clientX < 5)
                            return v = 5,
                            m = a.touches[0].clientY,
                            void b(v, m);
                        if (a.touches[0].clientY < 5)
                            return void b(v = a.touches[0].clientX, m = 5);
                        if (a.touches[0].clientX > window.innerWidth - (r + 5))
                            return v = window.innerWidth - (r + 5),
                            m = a.touches[0].clientY,
                            void b(v, m);
                        if (a.touches[0].clientY > window.innerHeight - (o + 5))
                            return v = a.touches[0].clientX,
                            m = window.innerHeight - (o + 5),
                            void b(v, m);
                        v = a.touches[0].clientX,
                        m = a.touches[0].clientY
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === qe.cj.portrait) {
                        if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 + r || a.touches[0].clientX < 5 && a.touches[0].clientY + 5 > window.innerHeight || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY < 5 + r || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY + 5 > window.innerHeight)
                            return;
                        if (a.touches[0].clientX < 5)
                            return void b(v = window.innerHeight - a.targetTouches[0].clientY, m = 5);
                        if (a.touches[0].clientY < 5 + r)
                            return v = window.innerHeight - (5 + r),
                            m = a.targetTouches[0].clientX,
                            void b(v, m);
                        if (a.touches[0].clientX > window.innerWidth - (o + 5))
                            return v = window.innerHeight - a.targetTouches[0].clientY,
                            m = window.innerWidth - (o + 5),
                            void b(v, m);
                        if (a.touches[0].clientY + 5 > window.innerHeight)
                            return v = 5,
                            m = a.targetTouches[0].clientX,
                            void b(v, m);
                        v = window.innerHeight - a.targetTouches[0].clientY,
                        m = a.targetTouches[0].clientX
                    }
                } else {
                    if ((a = n).clientX - r < 5 || a.clientY < 20)
                        return;
                    if (window.innerWidth - a.clientX < 20 || window.innerHeight - a.clientY < o - 20)
                        return;
                    v = a.clientX - x,
                    m = a.clientY - y,
                    w = !0
                }
                b(v, m)
            }
            var A = function() {
                g({
                    type: Et.Z.DRAGGABLE,
                    payload: {
                        draggableState: w ? "drag" : "click"
                    }
                })
            };
            function k(n) {
                var e, t, i = null === (e = null === s || void 0 === s ? void 0 : s.current) || void 0 === e ? void 0 : e.getBoundingClientRect(), o = w;
                if (w = !1,
                A(),
                x = v,
                y = m,
                v = 0,
                m = 0,
                document.removeEventListener("mouseup", k, !0),
                document.removeEventListener("mousemove", Z, !1),
                o) {
                    var l = null === (t = r.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                    if (c.current && i && (c.current.style.transform = "unset",
                    l)) {
                        var u, p = 0, f = 0;
                        if ("touchmove" === n.type)
                            p = (u = n).touches[0].clientX,
                            f = u.touches[0].clientY;
                        else
                            p = (u = n).clientX,
                            f = u.clientY;
                        a && a(p, f, d)
                    }
                }
            }
            function S(n) {
                if (kt.Z.getState().imap.keymappingEditMode) {
                    var e = kt.Z.getState().play.orientation;
                    if ((0,
                    Ue.DJ)())
                        (e === qe.cj.landscape ? 90 : 0) !== window.orientation && g({
                            type: Et.Z.UPDATE_ORIENTATION,
                            payload: {
                                orientation: 90 === window.orientation ? qe.cj.landscape : qe.cj.portrait
                            }
                        });
                    if ("mousedown" === n.type) {
                        var t = n
                          , i = t.target;
                        if ("ng-vol" === i.id || "volume-slider" === i.id || "sensitivity-slider" === i.id || "sensitivty-box" === i.id)
                            return;
                        w = !1,
                        A(),
                        x = t.clientX - v,
                        y = t.clientY - m
                    }
                    document.addEventListener("mousemove", Z, !1),
                    document.addEventListener("mouseup", k, !0)
                }
            }
            return (0,
            Ye.useEffect)((function() {
                var n = null === c || void 0 === c ? void 0 : c.current;
                f && !u && (null === n || void 0 === n || n.removeEventListener("touchstart", S, !1),
                null === n || void 0 === n || n.removeEventListener("touchend", k, !1),
                null === n || void 0 === n || n.removeEventListener("touchmove", Z, !1),
                null === n || void 0 === n || n.removeEventListener("mousedown", S, !1),
                h(!1)),
                u && (f || (null === n || void 0 === n || n.addEventListener("touchstart", S, !1),
                null === n || void 0 === n || n.addEventListener("touchend", k, !1),
                null === n || void 0 === n || n.addEventListener("touchmove", Z, !1),
                null === n || void 0 === n || n.addEventListener("mousedown", S),
                h(!0)))
            }
            ), [u]),
            (0,
            et.tZ)("div", {
                ref: c,
                className: "drag-react ".concat(o),
                style: Tc({
                    position: u ? "fixed" : "unset",
                    zIndex: 13,
                    width: "fill-content",
                    pointerEvents: "unset"
                }, i),
                children: e
            })
        }, Dc = function() {
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(n, e) {
                    n.__proto__ = e
                }
                || function(n, e) {
                    for (var t in e)
                        Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                }
                )(e, t)
            };
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function i() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }(), Ic = function() {
            this.Tweaks = 0,
            this.Exclusive = !1,
            this.ExclusiveDelay = 200,
            this.Enabled = !0,
            this.XExpr = "",
            this.YExpr = "",
            this.XOverlayOffset = "",
            this.YOverlayOffset = "",
            this.StartCondition = "",
            this.EnableCondition = "",
            this.ShowOnOverlay = !0
        }, Rc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "GuidanceKey":
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Key = "",
                e.Key_alt1 = "",
                e.GuidanceKey = "",
                e
            }
            return Dc(e, n),
            e
        }(Ic), Oc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Count":
                    case "Delay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "RepeatUntilKeyUp":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Key = "",
                e.Key_alt1 = "",
                e.GuidanceKey = "",
                e.Count = 1,
                e.Delay = 16,
                e.RepeatUntilKeyUp = !0,
                e
            }
            return Dc(e, n),
            e
        }(Ic), Lc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Override":
                        return "boolean";
                    case "Speed":
                    case "Amplitude":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Speed = 100,
                e.Amplitude = 20,
                e.Override = !0,
                e
            }
            return Dc(e, n),
            e
        }(Ic), Mc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "KeyUp":
                    case "KeyUp_alt1":
                    case "KeyDown":
                    case "KeyDown_alt1":
                    case "KeyLeft":
                    case "KeyLeft_alt1":
                    case "KeyRight":
                    case "KeyRight_alt1":
                    case "KeySpeedModifier1":
                    case "KeySpeedModifier1_alt1":
                    case "KeySpeedModifier2":
                    case "KeySpeedModifier2_alt1":
                    case "GamepadStick":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyUp":
                    case "GuidanceKeyDown":
                    case "GuidanceKeyLeft":
                    case "GuidanceKeyRight":
                    case "GuidanceKeySpeedModifier1":
                    case "GuidanceKeySpeedModifier2":
                    case "GuidanceDpadTitle":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "ActivationSpeed":
                    case "ActivationTime":
                    case "DeadExpiryTime":
                    case "AnalogType":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    case "XRadius":
                    case "XRadius1":
                    case "XRadius2":
                    case "DeadZoneRadius":
                    case "Speed":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.KeyUp = "W",
                e.KeyUp_alt1 = "",
                e.GuidanceKeyUp = "Up",
                e.KeyDown = "S",
                e.KeyDown_alt1 = "",
                e.GuidanceKeyDown = "Down",
                e.KeyRight = "D",
                e.KeyRight_alt1 = "",
                e.GuidanceKeyRight = "Right",
                e.KeyLeft = "A",
                e.KeyLeft_alt1 = "",
                e.GuidanceKeyLeft = "Left",
                e.KeySpeedModifier1 = "",
                e.KeySpeedModifier1_alt1 = "",
                e.GuidanceKeySpeedModifier1 = "",
                e.KeySpeedModifier2 = "",
                e.KeySpeedModifier2_alt1 = "",
                e.GuidanceKeySpeedModifier2 = "",
                e.GamepadStick = "",
                e.XRadius = 0,
                e.XRadius1 = 0,
                e.XRadius2 = 0,
                e.DeadZoneRadius = 0,
                e.Speed = 100,
                e.ActivationSpeed = 0,
                e.ActivationTime = 0,
                e.DeadExpiryTime = 0,
                e.AnalogType = 0,
                e.GuidanceDpadTitle = "",
                e
            }
            return Dc(e, n),
            e
        }(Ic), Bc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                    case "KeyStartStop":
                    case "KeyStartStop_alt1":
                    case "KeySuspend":
                    case "KeySuspend_alt1":
                    case "KeyLookAround":
                    case "KeyLookAround_alt1":
                    case "GamepadStick":
                    case "KeyAction":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyStartStop":
                    case "GuidanceKeySuspend":
                    case "GuidanceKeyLookAround":
                    case "LButtonXExpr":
                    case "LButtonYExpr":
                    case "LButtonXOverlayOffset":
                    case "LButtonYOverlayOffset":
                    case "LookAroundXExpr":
                    case "LookAroundYExpr":
                    case "LookAroundXOverlayOffset":
                    case "LookAroundYOverlayOffset":
                    case "LookAroundShowOnOverlayExpr":
                    case "LButtonShowOnOverlayExpr":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "WaitAfterShootTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "AutoDisable":
                    case "MouseAcceleration":
                    case "IsLookAroundEnabled":
                    case "IsShootOnClickEnabled":
                        return "boolean";
                    case "Sensitivity":
                    case "SensitivityRatio":
                    case "LButtonX":
                    case "LButtonY":
                    case "LookAroundX":
                    case "LookAroundY":
                    case "GamepadSensitivity":
                    case "DeadzoneRadius":
                    case "Left":
                    case "Right":
                    case "Top":
                    case "Bottom":
                    case "Speed":
                    case "ActivationTimeMs":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.KeyStartStop = "F1",
                e.KeyStartStop_alt1 = "",
                e.GuidanceKeyStartStop = "",
                e.KeySuspend = "Alt",
                e.KeySuspend_alt1 = "",
                e.GuidanceKeySuspend = "",
                e.KeyLookAround = "",
                e.KeyLookAround_alt1 = "",
                e.GuidanceKeyLookAround = "",
                e.Sensitivity = 1,
                e.SensitivityRatio = 1,
                e.LButtonX = -1,
                e.LButtonY = -1,
                e.LookAroundX = -1,
                e.LookAroundY = -1,
                e.AutoDisable = !1,
                e.MouseAcceleration = !1,
                e.IsLookAroundEnabled = !1,
                e.IsShootOnClickEnabled = !1,
                e.GamepadStick = "",
                e.GamepadSensitivity = 1,
                e.DeadzoneRadius = 14,
                e.Left = 250,
                e.Right = 250,
                e.Top = 1e3,
                e.Bottom = 1e3,
                e.Speed = 10,
                e.ActivationTimeMs = 40,
                e.KeyAction = "MouseLButton",
                e.WaitAfterShootTime = -1,
                e.LButtonXExpr = "",
                e.LButtonYExpr = "",
                e.LButtonXOverlayOffset = "",
                e.LButtonYOverlayOffset = "",
                e.LookAroundXExpr = "",
                e.LookAroundYExpr = "",
                e.LookAroundXOverlayOffset = "",
                e.LookAroundYOverlayOffset = "",
                e.LookAroundShowOnOverlayExpr = "",
                e.LButtonShowOnOverlayExpr = "",
                e
            }
            return Dc(e, n),
            e
        }(Ic), Xc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                    case "KeyUp":
                    case "KeyUp_alt1":
                    case "KeyDown":
                    case "KeyDown_alt1":
                    case "KeyLeft":
                    case "KeyLeft_alt1":
                    case "KeyRight":
                    case "KeyRight_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    case "GuidanceKeyUp":
                    case "GuidanceKeyDown":
                    case "GuidanceKeyLeft":
                    case "GuidanceKeyRight":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "DeviceType":
                    case "Delay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "MouseAcceleration":
                        return "boolean";
                    case "Sensitivity":
                    case "Speed":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Key = "V",
                e.Key_alt1 = "",
                e.GuidanceKey = "",
                e.KeyUp = "Up",
                e.KeyUp_alt1 = "",
                e.GuidanceKeyUp = "Up",
                e.KeyDown = "Down",
                e.KeyDown_alt1 = "",
                e.GuidanceKeyDown = "Down",
                e.KeyRight = "Right",
                e.KeyRight_alt1 = "",
                e.GuidanceKeyRight = "Right",
                e.KeyLeft = "Left",
                e.KeyLeft_alt1 = "",
                e.GuidanceKeyLeft = "Left",
                e.Sensitivity = 1,
                e.Speed = 10,
                e.DeviceType = 0,
                e.Delay = 50,
                e.MouseAcceleration = !1,
                e
            }
            return Dc(e, n),
            e
        }(Ic), Nc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X1":
                    case "Y1":
                    case "X2":
                    case "Y2":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Hold":
                    case "KeyUpStop":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X1 = 0,
                e.Y1 = 0,
                e.X2 = 0,
                e.Y2 = 0,
                e.Key = "",
                e.Key_alt1 = "",
                e.GuidanceKey = "",
                e.Speed = 200,
                e.Hold = !1,
                e.KeyUpStop = !1,
                e
            }
            return Dc(e, n),
            e
        }(Ic), Kc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X1":
                    case "Y1":
                    case "X2":
                    case "Y2":
                        return "coord";
                    case "KeyIn":
                    case "KeyIn_alt1":
                    case "KeyOut":
                    case "KeyOut_alt1":
                    case "KeyModifier":
                    case "KeyModifier_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyIn":
                    case "GuidanceKeyOut":
                    case "GuidanceKeyModifier":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                    case "Mode":
                    case "ResetDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Override":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X1 = 0,
                e.Y1 = 0,
                e.X2 = 0,
                e.Y2 = 0,
                e.KeyIn = "",
                e.KeyIn_alt1 = "",
                e.GuidanceKeyIn = "",
                e.KeyOut = "",
                e.KeyOut_alt1 = "",
                e.GuidanceKeyOut = "",
                e.KeyModifier = "",
                e.KeyModifier_alt1 = "",
                e.GuidanceKeyModifier = "",
                e.Speed = 1,
                e.Mode = 0,
                e.ResetDelay = 75,
                e.Override = !0,
                e
            }
            return Dc(e, n),
            e
        }(Ic), jc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X1":
                    case "Y1":
                    case "X2":
                    case "Y2":
                        return "coord";
                    case "KeyModifier":
                    case "KeyModifier_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyModifier":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                    case "Amplitude":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Override":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X1 = 0,
                e.Y1 = 0,
                e.X2 = 0,
                e.Y2 = 0,
                e.KeyModifier = "",
                e.KeyModifier_alt1 = "",
                e.GuidanceKeyModifier = "",
                e.Speed = 40,
                e.Amplitude = 25,
                e.Override = !0,
                e
            }
            return Dc(e, n),
            e
        }(Ic), zc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "KeyClock":
                    case "KeyClock_alt1":
                    case "KeyAntiClock":
                    case "KeyAntiClock_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyClock":
                    case "GuidanceKeyAntiClock":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                    case "ActivationTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    case "XRadius":
                    case "StartingAngle":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.XRadius = 6,
                e.StartingAngle = 90,
                e.Speed = 60,
                e.ActivationTime = 100,
                e.KeyClock = "",
                e.KeyClock_alt1 = "",
                e.GuidanceKeyClock = "",
                e.KeyAntiClock = "",
                e.KeyAntiClock_alt1 = "",
                e.GuidanceKeyAntiClock = "",
                e
            }
            return Dc(e, n),
            e
        }(Ic), Yc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "KeyUp":
                    case "KeyUp_alt1":
                    case "KeyDown":
                    case "KeyDown_alt1":
                    case "KeyLeft":
                    case "KeyLeft_alt1":
                    case "KeyRight":
                    case "KeyRight_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyUp":
                    case "GuidanceKeyDown":
                    case "GuidanceKeyLeft":
                    case "GuidanceKeyRight":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Radius":
                    case "MaxAngle":
                    case "Speed":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "AutoReset":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Radius = 10,
                e.MaxAngle = 45,
                e.Speed = 45,
                e.AutoReset = !0,
                e.KeyUp = "Up",
                e.KeyUp_alt1 = "",
                e.GuidanceKeyUp = "",
                e.KeyDown = "Down",
                e.KeyDown_alt1 = "",
                e.GuidanceKeyDown = "",
                e.KeyRight = "Right",
                e.KeyRight_alt1 = "",
                e.GuidanceKeyRight = "",
                e.KeyLeft = "Left",
                e.KeyLeft_alt1 = "",
                e.GuidanceKeyLeft = "",
                e
            }
            return Dc(e, n),
            e
        }(Ic), Hc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                    case "OriginX":
                    case "OriginY":
                    case "CancelX":
                    case "CancelY":
                        return "coord";
                    case "KeyMove":
                    case "KeyCancel":
                    case "KeyCancel_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyCancel":
                    case "OriginXExpr":
                    case "OriginYExpr":
                    case "CancelXExpr":
                    case "CancelYExpr":
                    case "cancelXOverlayOffset":
                    case "cancelYOverlayOffset":
                    case "cancelShowOnOverlayExpr":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "IsCancelSkillEnabled":
                        return "boolean";
                    case "XRadius":
                    case "DpadSpeed":
                    case "CharSpeed":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.OriginX = 50,
                e.OriginY = 50,
                e.CancelX = -1,
                e.CancelY = -1,
                e.XRadius = 6,
                e.DpadSpeed = 120,
                e.CharSpeed = 10,
                e.IsCancelSkillEnabled = !1,
                e.KeyMove = "MouseRButton",
                e.KeyCancel = "",
                e.KeyCancel_alt1 = "",
                e.GuidanceKeyCancel = "",
                e.OriginXExpr = "",
                e.OriginYExpr = "",
                e.CancelXExpr = "",
                e.CancelYExpr = "",
                e.cancelXOverlayOffset = "",
                e.cancelYOverlayOffset = "",
                e.cancelShowOnOverlayExpr = "",
                e
            }
            return Dc(e, n),
            e
        }(Ic), _c = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                    case "OriginX":
                    case "OriginY":
                    case "CancelX":
                    case "CancelY":
                        return "coord";
                    case "KeyActivate":
                    case "KeyActivate_alt1":
                    case "KeyAutocastToggle":
                    case "KeyAutocastToggle_alt1":
                    case "KeyCancel":
                    case "KeyCancel_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyActivate":
                    case "GuidanceKeyAutocastToggle":
                    case "GuidanceKeyCancel":
                    case "OriginXExpr":
                    case "OriginYExpr":
                    case "CancelXExpr":
                    case "CancelYExpr":
                    case "cancelXOverlayOffset":
                    case "cancelYOverlayOffset":
                    case "cancelShowOnOverlayExpr":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "NoCancelOnSwitch":
                    case "NoCancelTime":
                    case "MinSkillTime":
                    case "MinSKillHoldTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "IsCancelSkillEnabled":
                    case "AutoAttack":
                    case "StopMOBADpad":
                    case "AdvancedMode":
                    case "AutocastEnabled":
                        return "boolean";
                    case "YAxisRatio":
                    case "XRadius":
                    case "DeadZoneRadius":
                    case "Speed":
                    case "CancelSpeed":
                    case "MinSwipeRadius":
                        return "float";
                    case "ExtraData":
                        return "array";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.OriginX = 50,
                e.OriginY = 50,
                e.CancelX = -1,
                e.CancelY = -1,
                e.YAxisRatio = 0,
                e.XRadius = 8,
                e.DeadZoneRadius = 0,
                e.Speed = 200,
                e.CancelSpeed = 200,
                e.MinSwipeRadius = 0,
                e.NoCancelOnSwitch = 0,
                e.NoCancelTime = 0,
                e.MinSkillTime = 0,
                e.MinSKillHoldTime = 0,
                e.IsCancelSkillEnabled = !1,
                e.AutoAttack = !1,
                e.StopMOBADpad = !1,
                e.AdvancedMode = !0,
                e.AutocastEnabled = !0,
                e.KeyActivate = "",
                e.KeyActivate_alt1 = "",
                e.GuidanceKeyActivate = "",
                e.KeyAutocastToggle = "",
                e.KeyAutocastToggle_alt1 = "",
                e.GuidanceKeyAutocastToggle = "",
                e.KeyCancel = "",
                e.KeyCancel_alt1 = "",
                e.GuidanceKeyCancel = "",
                e.GamepadStick = "",
                e.OriginXExpr = "",
                e.OriginYExpr = "",
                e.CancelXExpr = "",
                e.CancelYExpr = "",
                e.cancelXOverlayOffset = "",
                e.cancelYOverlayOffset = "",
                e.cancelShowOnOverlayExpr = "",
                e.ExtraData = [],
                e
            }
            return Dc(e, n),
            e
        }(Ic), Fc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    case "Name":
                    case "Model":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Delay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Delay = 0,
                e.Key = "",
                e.Key_alt1 = "",
                e.GuidanceKey = "",
                e.Name = "",
                e.Model = "Modifier",
                e
            }
            return Dc(e, n),
            e
        }(Ic), Uc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "ResetDelay":
                    case "SpeedUpWaitTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "EdgeScrollEnabled":
                        return "boolean";
                    case "XVelocity":
                    case "YVelocity":
                    case "XActiveMargin":
                    case "YActiveMargin":
                    case "SpeedUpFactor":
                        return "float";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.XVelocity = 100,
                e.YVelocity = 100,
                e.XActiveMargin = 3,
                e.YActiveMargin = 3,
                e.SpeedUpFactor = 2,
                e.ResetDelay = 150,
                e.SpeedUpWaitTime = 200,
                e.EdgeScrollEnabled = !0,
                e
            }
            return Dc(e, n),
            e
        }(Ic), Wc = function(n) {
            function e() {
                var e = n.call(this) || this;
                return e.checkKeyType = function(n) {
                    switch (n) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    case "Commands":
                        return "array";
                    default:
                        return "string"
                    }
                }
                ,
                e.X = 0,
                e.Y = 0,
                e.Key = "",
                e.Key_alt1 = "",
                e.GuidanceKey = "",
                e.Commands = [],
                e
            }
            return Dc(e, n),
            e
        }(Ic), Gc = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var i, o = 0, r = e.length; o < r; o++)
                    !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)),
                    i[o] = e[o]);
            return n.concat(i || Array.prototype.slice.call(e))
        }, Vc = [];
        function qc(n, e, t) {
            n[e] = t
        }
        var Qc, Jc = function(n) {
            var e, t, i, o = n.control, r = n.isGamepadview, a = n.offset, l = n.index, d = n.deleteCallback, c = n.newControl, s = (0,
            Dt.$)().t, u = (0,
            Ye.useRef)(null), p = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            )), f = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            )), h = (0,
            Ye.useState)(!1), g = h[0], v = h[1], m = Pc(o, r, a, c), x = o.IsVisibleInOverlay || o.ShowOnOverlay, y = (0,
            Ye.useState)(o.X), w = y[0], b = y[1], Z = (0,
            Ye.useState)(o.Y), A = Z[0], k = Z[1], S = (0,
            Ye.useState)(!1), E = S[0], P = S[1], T = (0,
            Ye.useRef)(null), C = (0,
            Ye.useRef)(null), D = function(n) {
                switch (n) {
                case "Tap":
                    return new Rc;
                case "TapRepeat":
                    return new Oc;
                case "Scroll":
                    return new Lc;
                case "Dpad":
                    return new Mc;
                case "Pan":
                    return new Bc;
                case "FreeLook":
                    return new Xc;
                case "Swipe":
                    return new Nc;
                case "Zoom":
                    return new Kc;
                case "MouseZoom":
                    return new jc;
                case "Rotate":
                    return new zc;
                case "Tilt":
                    return new Yc;
                case "MOBADpad":
                    return new Hc;
                case "MOBASkill":
                    return new _c;
                case "State":
                    return new Fc;
                case "EdgeScroll":
                    return new Uc;
                case "Script":
                    return new Wc;
                default:
                    return new Rc
                }
            }(o.Type), I = Object.keys(D);
            I.splice(I.indexOf("checkKeyType"), 1),
            I.splice.apply(I, Gc([I.length - 1, 0], I.splice(0, 11), !1));
            var R = (0,
            Ye.useRef)(null)
              , O = 0
              , L = 0
              , M = 0
              , B = 0
              , X = 0
              , N = 0
              , K = 0;
            function j(n) {
                var e, t;
                n.preventDefault();
                var i = (null === (e = null === R || void 0 === R ? void 0 : R.current) || void 0 === e ? void 0 : e.clientHeight) || 0
                  , r = (null === (t = null === R || void 0 === R ? void 0 : R.current) || void 0 === t ? void 0 : t.clientWidth) || 0
                  , l = n;
                if (!(l.clientX - r < 5 || l.clientY < 20) && !(window.innerWidth - l.clientX < 20 || window.innerHeight - l.clientY < i - 20)) {
                    N += (l.clientX - X) / 2,
                    N = Math.max(N, -K),
                    O = l.clientX - M,
                    L = l.clientY - B,
                    X = l.clientX,
                    l.clientY,
                    !0;
                    var d = N + dc(a.height || 500, (o.XRadius || 5) / 2) + 25
                      , c = N + dc(a.height || 500, (o.XRadius || 5) / 2) + 20;
                    (null === R || void 0 === R ? void 0 : R.current) && (R.current.style.transform = "translate3d(".concat(d, "px, ").concat(c, "px, 0)"))
                }
            }
            function z(n) {
                !1,
                o.XRadius = ((null === o || void 0 === o ? void 0 : o.XRadius) || 0) + 100 * N * 2 / a.height,
                M = O,
                B = L,
                document.removeEventListener("mouseup", z, !0),
                document.removeEventListener("mousemove", j, !1)
            }
            function Y(n) {
                if ("mousedown" === n.type) {
                    var e = n;
                    !1,
                    M = e.clientX - O,
                    B = e.clientY - L,
                    X = e.clientX,
                    e.clientY,
                    K = dc(a.height || 500, ((o.XRadius || 3) - 3) / 2)
                }
                document.addEventListener("mousemove", j, !1),
                document.addEventListener("mouseup", z, !0)
            }
            (0,
            Ye.useEffect)((function() {
                var n;
                if (u.current) {
                    var e = null === (n = null === p || void 0 === p ? void 0 : p.current) || void 0 === n ? void 0 : n.getBoundingClientRect()
                      , t = (null === e || void 0 === e ? void 0 : e.top) || 0
                      , i = (null === e || void 0 === e ? void 0 : e.left) || 0;
                    u.current.style.left = "".concat(i + (o.X || 0) * ((null === e || void 0 === e ? void 0 : e.width) || 0) / 100, "px"),
                    u.current.style.top = "".concat(t + (o.Y || 0) * ((null === e || void 0 === e ? void 0 : e.height) || 0) / 100, "px")
                }
            }
            ), [u]),
            (0,
            Ye.useEffect)((function() {
                var n = null === R || void 0 === R ? void 0 : R.current;
                T.current && T.current.addEventListener("contextmenu", (function(n) {
                    f && v(!0),
                    n.stopPropagation(),
                    n.preventDefault()
                }
                )),
                f ? null === n || void 0 === n || n.addEventListener("mousedown", Y) : null === n || void 0 === n || n.removeEventListener("mousedown", Y, !1)
            }
            ), [f]),
            (0,
            Ye.useEffect)((function() {
                C.current && C.current.addEventListener("contextmenu", (function(n) {
                    f && v(!0),
                    n.stopPropagation(),
                    n.preventDefault()
                }
                ))
            }
            ), [o.LButtonX, o.LButtonY]);
            var H = function(n) {
                return !!n.startsWith("Guidance")
            }
              , _ = function(n, e) {
                if ("boolean" !== D.checkKeyType(e))
                    if ("coord" === D.checkKeyType(e))
                        !function(n, e) {
                            var t = parseFloat(n.target.value);
                            t || (t = 0),
                            t < 0 && (t = 0),
                            t > 100 && (t = 100),
                            t = parseFloat(t.toFixed(2)),
                            qc(o, e, t),
                            n.target.value = t.toString(),
                            "X" === e ? b(t) : "Y" === e && k(t)
                        }(n, e);
                    else if ("int" === D.checkKeyType(e)) {
                        (t = parseInt(n.target.value, 10)) || (t = 0),
                        qc(o, e, t),
                        n.target.value = t.toString()
                    } else if ("float" === D.checkKeyType(e)) {
                        (t = parseFloat(n.target.value)) || (t = 0),
                        t = parseFloat(t.toFixed(2)),
                        qc(o, e, t),
                        n.target.value = t.toString()
                    } else if ("string" === D.checkKeyType(e)) {
                        var t;
                        (t = n.target.value) || (t = ""),
                        H(e) && (e = e.replace("Guidance", "")),
                        o.Guidance && qc(o.Guidance, e, t),
                        n.target.value = t
                    }
            }
              , F = function(n, e) {
                if ("key" === D.checkKeyType(e)) {
                    var t = function(n) {
                        if (Vc.includes(n))
                            return null;
                        var e = vc(n);
                        return e ? (0 !== Vc.length && (e = "".concat(vc(Vc[Vc.length - 1]), " + ").concat(e)),
                        Vc.push(n),
                        e) : null
                    }(n.code);
                    t && (qc(o, e, t),
                    n.target.value = t),
                    n.preventDefault()
                }
            };
            function U(n) {
                n.dataTransfer.setData("span", n.currentTarget.id)
            }
            (0,
            Ye.useEffect)((function() {
                u.current && (u.current.style.top = "".concat(a.top + dc(a.height, A || 0), "px"),
                u.current.style.left = "".concat(a.left + dc(a.width, w || 0), "px"))
            }
            ), [w, A]);
            var W = function(n) {
                return void 0 === n && (n = !1),
                "Zoom" === o.Type || "MouseZoom" === o.Type || "Swipe" === o.Type ? ((o.X1 || 0) + (o.X2 || 0)) / 2 : n ? o.LButtonX || 0 : o.X || 0
            }
              , G = function(n) {
                return void 0 === n && (n = !1),
                "Zoom" === o.Type || "MouseZoom" === o.Type || "Swipe" === o.Type ? ((o.Y1 || 0) + (o.Y2 || 0)) / 2 : n ? o.LButtonY || 0 : o.Y || 0
            };
            (0,
            Ye.useEffect)((function() {
                b(o.X),
                k(o.Y)
            }
            ), [o.X, o.Y]);
            var V = function(n, e, t) {
                var i, r = null === (i = null === p || void 0 === p ? void 0 : p.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                if (r) {
                    var a = parseInt((100 * (n - r.left) / r.width * 100).toString(), 10) / 100
                      , l = parseInt((100 * (e - r.top) / r.height * 100).toString(), 10) / 100;
                    if ("Zoom" === o.Type || "MouseZoom" === o.Type || "Swipe" === o.Type) {
                        var d = ((o.X2 || 0) - (o.X1 || 0)) / 2
                          , c = ((o.Y2 || 0) - (o.Y1 || 0)) / 2;
                        qc(o, "X1", a - d),
                        qc(o, "X2", a + d),
                        qc(o, "Y1", l - c),
                        qc(o, "Y2", l + c)
                    }
                    b(a),
                    t ? o.LButtonX = a : o.X = a,
                    k(l),
                    t ? o.LButtonY = l : o.Y = l
                }
            };
            return !x && !f || E ? null : (0,
            et.BX)(et.HY, {
                children: ["Pan" === o.Type && (null === (i = null === (t = null === (e = null === Ue.ZP || void 0 === Ue.ZP ? void 0 : Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.gl) || void 0 === i ? void 0 : i.enableImageDetection) && r && (0,
                et.BX)(et.HY, {
                    children: [o.isShootOnClickEnabled ? (0,
                    et.tZ)("span", {
                        className: "overlayKey LBM",
                        style: {
                            left: a.left + dc(a.width, o.LButtonX || 0),
                            top: a.top + dc(a.height, o.LButtonY || 0)
                        },
                        children: (0,
                        et.BX)("span", {
                            className: "overlayKeyValue",
                            children: [(0,
                            et.tZ)("img", {
                                src: "".concat(qd.src),
                                alt: ""
                            }), " ", ":"]
                        })
                    }) : null, o.isLookAroundEnabled ? (0,
                    et.tZ)("span", {
                        className: "overlayKey Tap ".concat(r ? "gamepad" : ""),
                        style: {
                            left: a.left + dc(a.width, o.LookAroundX || 0),
                            top: a.top + dc(a.height, o.LookAroundY || 0)
                        },
                        children: (0,
                        et.tZ)("span", {
                            className: "overlayKeyValue",
                            children: o.KeyLookAround
                        })
                    }) : null]
                }), "MOBASkill" === o.Type && o.CancelX && o.CancelX > 0 && o.CancelY && o.CancelY > 0 && (0,
                et.tZ)("span", {
                    className: "overlayKey Tap",
                    style: {
                        left: a.left + dc(a.width, o.CancelX),
                        top: a.top + dc(a.height, o.CancelY)
                    },
                    children: (0,
                    et.tZ)("span", {
                        className: "overlayKeyValue",
                        children: r ? rc(o.KeyCancel_alt1) : o.KeyCancel
                    })
                }), m && (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Cc, {
                        className: "overlayKey ".concat(r ? "gamepad" : ""),
                        controlRef: T,
                        callback: V,
                        children: (0,
                        et.tZ)("span", {
                            ref: T,
                            className: "overlayKey ".concat(o.Type, " ").concat(r ? "gamepad" : "", "\n                  ").concat(f ? "editMode" : ""),
                            style: {
                                left: a.left + dc(a.width, W()),
                                top: a.top + dc(a.height, G()),
                                aspectRatio: f ? "1" : "unset",
                                background: f ? $l.qm.colors.white80 : "unset",
                                border: f ? $l.qm.border.base : "unset",
                                borderRadius: f ? "50%" : "unset",
                                display: f ? "flex" : "unset",
                                alignItems: f ? "center" : "unset",
                                padding: f ? "4px" : "unset",
                                color: f ? "black" : "unset",
                                transform: "translate(-50%, -50%)",
                                fontWeight: f ? "700" : "unset",
                                width: "max-content",
                                justifyContent: "center",
                                pointerEvents: "all"
                            },
                            draggable: f,
                            onDragStart: U,
                            children: m
                        }, "".concat(o.$type, "-").concat(l))
                    }), "Pan" === o.Type && (-1 !== o.LButtonX || -1 !== o.LButtonY) && (0,
                    et.tZ)(Cc, {
                        className: "overlayKey ".concat(r ? "gamepad" : ""),
                        controlRef: C,
                        callback: V,
                        isPanLeftControl: !0,
                        children: (0,
                        et.tZ)("span", {
                            ref: C,
                            className: "overlayKey ".concat(o.Type, " ").concat(r ? "gamepad" : "", "\n                    ").concat(f ? "editMode" : ""),
                            style: {
                                left: a.left + dc(a.width, W(!0)),
                                top: a.top + dc(a.height, G(!0)),
                                aspectRatio: f ? "1" : "unset",
                                background: f ? $l.qm.colors.white80 : "unset",
                                border: f ? $l.qm.border.base : "unset",
                                borderRadius: f ? "50%" : "unset",
                                display: f ? "flex" : "unset",
                                alignItems: f ? "center" : "unset",
                                padding: f ? "4px" : "unset",
                                color: f ? "black" : "unset",
                                transform: "translate(-50%, -50%)",
                                fontWeight: f ? "700" : "unset",
                                width: "max-content",
                                justifyContent: "center",
                                pointerEvents: "all"
                            },
                            draggable: f,
                            onDragStart: U,
                            children: Pc(o, r, a, c, !0)
                        }, "".concat(o.$type, "-").concat(l))
                    }), f && o.XRadius && (0,
                    et.tZ)("img", {
                        src: (0,
                        ti.j)(Jd),
                        alt: "drag",
                        style: {
                            width: "20px",
                            height: "20px",
                            transform: "translateX(".concat(dc(a.height || 500, o.XRadius / 2) + 25, "px) translateY(").concat(dc(a.height || 500, o.XRadius / 2) + 20, "px)"),
                            position: "absolute",
                            left: a.left + dc(a.height || 500, o.XRadius / 2) + dc(a.width, W()) + 300 < window.innerWidth ? a.left + dc(a.width, W()) : window.innerWidth - 300,
                            top: a.top + dc(a.height || 500, o.XRadius / 2) + dc(a.height, G()),
                            cursor: "nwse-resize"
                        },
                        ref: R
                    }), f && g && (0,
                    et.BX)(nc, {
                        ref: u,
                        style: {
                            left: a.left + dc(a.width, W()) + 300 < window.innerWidth ? a.left + dc(a.width, W()) : window.innerWidth - 300,
                            top: a.top + dc(a.height, G()),
                            height: window.innerHeight - (a.top + dc(a.height, G())) - 52
                        },
                        children: [(0,
                        et.BX)(ec, {
                            children: [(0,
                            et.tZ)(Ot.js, {
                                children: o.Type
                            }), (0,
                            et.tZ)(Yo.A3, {
                                onClick: function() {
                                    v(!1)
                                },
                                children: (0,
                                et.tZ)(Ea.Z, {
                                    name: "cross-thin",
                                    size: 14
                                })
                            })]
                        }), (0,
                        et.tZ)(oc, {
                            style: {
                                height: window.innerHeight - (a.top + dc(a.height, G())) - ("Pan" === o.Type ? 202 : 152)
                            },
                            children: I.map((function(n) {
                                var e, t, i, r, a;
                                return (0,
                                et.BX)(tc, {
                                    children: [(0,
                                    et.tZ)(Ot.T6, {
                                        title: n,
                                        children: n
                                    }), (0,
                                    et.tZ)(ic, {
                                        id: "controls-box",
                                        type: "DeviceType" === n ? "text" : typeof (null === (e = Object.getOwnPropertyDescriptor(D, n)) || void 0 === e ? void 0 : e.value),
                                        value: H(n) ? null === (t = Object.getOwnPropertyDescriptor(o.Guidance, n.replace("Guidance", ""))) || void 0 === t ? void 0 : t.value : "DeviceType" === n ? (null === (i = Object.getOwnPropertyDescriptor(o, n)) || void 0 === i ? void 0 : i.value) ? "Mobile" : "Desktop" : null === (r = Object.getOwnPropertyDescriptor(o, n)) || void 0 === r ? void 0 : r.value,
                                        onChange: function(e) {
                                            return _(e, n)
                                        },
                                        onClick: function(e) {
                                            return function(n, e) {
                                                "boolean" === D.checkKeyType(e) ? (qc(o, e, "false" === n.target.value),
                                                n.target.value = "false" === n.target.value ? "true" : "false") : "DeviceType" === e && (qc(o, e, "Mobile" === n.target.value ? 0 : 1),
                                                n.target.value = "Mobile" === n.target.value ? "Desktop" : "Mobile")
                                            }(e, n)
                                        },
                                        readOnly: "boolean" === typeof (null === (a = Object.getOwnPropertyDescriptor(D, n)) || void 0 === a ? void 0 : a.value) || "DeviceType" === n,
                                        onKeyDown: function(e) {
                                            return F(e, n)
                                        },
                                        onKeyUp: function(e) {
                                            return function(n, e) {
                                                "key" === D.checkKeyType(e) && (Vc = Vc.filter((function(e) {
                                                    return e !== n.code
                                                }
                                                )))
                                            }(e, n)
                                        },
                                        onContextMenu: function(e) {
                                            !function(n, e) {
                                                "key" === D.checkKeyType(e) && (qc(o, e, "MouseRButton"),
                                                n.target.value = "MouseRButton")
                                            }(e, n),
                                            e.preventDefault()
                                        }
                                    })]
                                })
                            }
                            ))
                        }), "Pan" === o.Type && (0,
                        et.tZ)(Qd.Jg, {
                            onChange: function(n) {
                                -1 !== o.LButtonX || -1 !== o.LButtonY ? (o.KeyAction = "",
                                o.LButtonX = -1,
                                o.LButtonY = -1) : (o.KeyAction = "MouseLButton",
                                o.LButtonX = 50,
                                o.LButtonY = 50)
                            },
                            checked: -1 !== o.LButtonX || -1 !== o.LButtonY,
                            children: (0,
                            et.tZ)(Ot.gd, {
                                children: "Add Left Button Click"
                            })
                        }), (0,
                        et.tZ)(vi.z, {
                            onClick: function() {
                                d(l),
                                P(!0)
                            },
                            style: {
                                width: "100%"
                            },
                            children: s("delete")
                        })]
                    })]
                })]
            })
        }, $c = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ns = Qe.ZP.div(Qc || (Qc = $c(["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n  border-radius: 4px;\n  width: 100%;\n  height: 66px;\n  padding: 4px;\n  text-align: center;\n  align-items: center;\n  border: 1px solid ", ";\n  cursor: pointer;\n\n  h6 {\n    width: 100%;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n  border-radius: 4px;\n  width: 100%;\n  height: 66px;\n  padding: 4px;\n  text-align: center;\n  align-items: center;\n  border: 1px solid ", ";\n  cursor: pointer;\n\n  h6 {\n    width: 100%;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), es = ["Tap", "TapRepeat", "Scroll", "Dpad", "Pan", "FreeLook", "Swipe", "Zoom", "MouseZoom", "Rotate", "Tilt", "MOBADpad", "MOBASkill", "State", "EdgeScroll", "Script"];
        function ts(n, e, t) {
            n[e] = t
        }
        var is, os, rs, as, ls, ds, cs, ss, us, ps, fs, hs, gs, vs, ms, xs, ys, ws, bs, Zs, As, ks, Ss, Es, Ps, Ts, Cs, Ds, Is, Rs, Os, Ls, Ms, Bs, Xs, Ns, Ks, js, zs, Ys, Hs, _s, Fs, Us, Ws, Gs, Vs, qs, Qs, Js, $s, nu, eu, tu = function(n) {
            var e = n.x
              , t = n.y
              , i = n.gameControls
              , o = n.reloadCallback
              , r = n.closeCallback
              , a = (0,
            Dt.$)().t
              , l = (0,
            Ye.useRef)(null)
              , d = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , c = function(n, e) {
                var t = {
                    $type: "".concat(e, ", Bluestacks"),
                    Tweaks: 0,
                    ShowOnOverlay: !0,
                    Type: e,
                    Exclusive: !0,
                    ExclusiveDelay: 0,
                    XExpr: "",
                    YExpr: "",
                    XOverlayOffset: "",
                    YOverlayOffset: "",
                    EnableCondition: "",
                    StartCondition: "",
                    Guidance: {}
                };
                return Object.keys(n).forEach((function(e) {
                    var i, o, r;
                    if ("function" !== typeof (null === (i = Object.getOwnPropertyDescriptor(n, e)) || void 0 === i ? void 0 : i.value))
                        return e.startsWith("Guidance") ? (e = e.replace("Guidance", ""),
                        void ts(t.Guidance, e.replace("Guidance", ""), null === (o = Object.getOwnPropertyDescriptor(n, "Guidance".concat(e))) || void 0 === o ? void 0 : o.value)) : void ts(t, e, null === (r = Object.getOwnPropertyDescriptor(n, e)) || void 0 === r ? void 0 : r.value)
                }
                )),
                t
            }
              , s = function(n) {
                var a, l = function(n) {
                    switch (n) {
                    case "Tap":
                        return new Rc;
                    case "TapRepeat":
                        return new Oc;
                    case "Scroll":
                        return new Lc;
                    case "Dpad":
                        return new Mc;
                    case "Pan":
                        return new Bc;
                    case "FreeLook":
                        return new Xc;
                    case "Swipe":
                        return new Nc;
                    case "Zoom":
                        return new Kc;
                    case "MouseZoom":
                        return new jc;
                    case "Rotate":
                        return new zc;
                    case "Tilt":
                        return new Yc;
                    case "MOBADpad":
                        return new Hc;
                    case "MOBASkill":
                        return new _c;
                    case "State":
                        return new Fc;
                    case "EdgeScroll":
                        return new Uc;
                    case "Script":
                        return new Wc;
                    default:
                        return new Rc
                    }
                }(n), s = c(l, n), u = 50, p = 50, f = null === (a = null === d || void 0 === d ? void 0 : d.current) || void 0 === a ? void 0 : a.getBoundingClientRect();
                if (f && (u = 100 * (e - f.left) / f.width,
                p = 100 * (t + 56 - f.top) / f.height,
                u = parseFloat(u.toFixed(2)),
                p = parseFloat(p.toFixed(2))),
                "Swipe" === n) {
                    ts(s, "X1", u),
                    ts(s, "X2", u),
                    ts(s, "Y1", p),
                    ts(s, "Y2", p - 26.67);
                    var h = c(l, n);
                    ts(h, "X1", u),
                    ts(h, "X2", u),
                    ts(h, "Y1", p),
                    ts(h, "Y2", p + 26.67);
                    var g = c(l, n);
                    ts(g, "X1", u),
                    ts(g, "X2", u - 15),
                    ts(g, "Y1", p),
                    ts(g, "Y2", p);
                    var v = c(l, n);
                    ts(v, "X1", u),
                    ts(v, "X2", u + 15),
                    ts(v, "Y1", p),
                    ts(v, "Y2", p),
                    i.push.apply(i, [s, h, g, v])
                } else
                    "Zoom" !== n && "MouseZoom" !== n || (ts(s, "X1", u),
                    ts(s, "X2", u),
                    ts(s, "Y1", p - 20),
                    ts(s, "Y2", p + 20)),
                    Object.keys(l).includes("X") && (ts(s, "X", u),
                    ts(s, "Y", p)),
                    i.push(s);
                r(),
                o()
            };
            return (0,
            et.BX)(nc, {
                ref: l,
                style: {
                    left: "".concat(e, "px"),
                    top: "".concat(t, "px"),
                    height: "360px",
                    width: "360px"
                },
                children: [(0,
                et.BX)(ec, {
                    children: [(0,
                    et.tZ)(Ot.js, {
                        children: a("addControls")
                    }), (0,
                    et.tZ)(Yo.A3, {
                        onClick: r,
                        children: (0,
                        et.tZ)(Ea.Z, {
                            name: "cross-thin",
                            size: 14
                        })
                    })]
                }), (0,
                et.tZ)(oc, {
                    style: {
                        height: "306px",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))"
                    },
                    children: es.map((function(n) {
                        return (0,
                        et.tZ)(ns, {
                            onClick: function() {
                                s(n)
                            },
                            children: (0,
                            et.tZ)(Ot.T6, {
                                title: n,
                                children: n
                            })
                        })
                    }
                    ))
                })]
            })
        }, iu = function() {
            return (iu = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, ou = function(n) {
            var e = n.gameControls
              , t = n.isGamepadview
              , i = (0,
            Ye.useState)({
                top: 0,
                left: 0,
                width: 0,
                height: 0
            })
              , o = i[0]
              , r = i[1]
              , a = (0,
            He.v9)((function(n) {
                return n.appPreferences.imapOverlay
            }
            ))
              , l = (0,
            He.v9)((function(n) {
                return n.appPreferences.legacyControls
            }
            ))
              , d = (0,
            He.v9)((function(n) {
                return n.play.showScriptEditor
            }
            ))
              , c = (0,
            Ye.useRef)(null)
              , s = (0,
            Ye.useState)(!1)
              , u = s[0]
              , p = s[1]
              , f = (0,
            Ye.useState)(!1)
              , h = f[0]
              , g = f[1]
              , v = (0,
            Ye.useState)(.5 * window.innerHeight)
              , m = v[0]
              , x = v[1]
              , y = (0,
            Ye.useState)(.5 * window.innerWidth)
              , w = y[0]
              , b = y[1]
              , Z = (0,
            Ye.useState)(!1)
              , A = Z[0]
              , k = Z[1]
              , S = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            ))
              , E = function() {
                var n = kt.Z.getState().play.videoRef;
                if (null === n || void 0 === n ? void 0 : n.current) {
                    var e = null === n || void 0 === n ? void 0 : n.current.getBoundingClientRect()
                      , t = null === n || void 0 === n ? void 0 : n.current.parentNode;
                    if (e && t) {
                        var i = t.getBoundingClientRect()
                          , a = {
                            top: Math.max(e.top - i.top, 0),
                            left: Math.max(e.left - i.left, 0),
                            width: e.width,
                            height: e.height
                        };
                        a.left === o.left && a.width === o.width && a.top === o.top && a.height === o.height || r(a)
                    }
                }
            };
            var P = function(n) {
                x(n.x),
                b(n.y - 56),
                g(!0),
                n.preventDefault()
            };
            (0,
            Ye.useEffect)((function() {
                return window.addEventListener(Zd.Sg, E),
                c.current && c.current.addEventListener("contextmenu", P),
                function() {
                    c.current && c.current.removeEventListener("contextmenu", P)
                }
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                E()
            }
            ), [a, l]);
            var T = function(n) {
                e.splice(n, 1),
                p(!0)
            };
            (0,
            Ye.useEffect)((function() {
                p(!0)
            }
            ), [e]),
            (0,
            Ye.useEffect)((function() {
                u && p(!1)
            }
            ), [u]);
            var C;
            return (0,
            et.BX)(_d, {
                ref: c,
                editing: S,
                onDrop: function(n) {
                    !function(n) {
                        var e = n.dataTransfer.getData("span");
                        n.preventDefault(),
                        n.currentTarget.appendChild(document.getElementById(e))
                    }(n)
                },
                onDragOver: function(n) {
                    n.preventDefault()
                },
                style: {
                    pointerEvents: S ? "all" : "none",
                    zIndex: "10",
                    display: d ? "none" : "block"
                },
                children: [h && S && (0,
                et.tZ)(tu, {
                    x: m,
                    y: w,
                    gameControls: e,
                    reloadCallback: function() {
                        p(!0),
                        k(!0)
                    },
                    closeCallback: function() {
                        g(!1)
                    }
                }), (a || S) && l && !u && (C = e,
                S ? e : C && C.length && Ki.ZP.controlIndexToStateMap ? e.map((function(n, e) {
                    if (!(null === Ki.ZP || void 0 === Ki.ZP ? void 0 : Ki.ZP.controlIndexToStateMap) || !(null === Ki.ZP || void 0 === Ki.ZP ? void 0 : Ki.ZP.controlIndexToStateMap[e]) || !(null === Ki.ZP || void 0 === Ki.ZP ? void 0 : Ki.ZP.controlIndexToStateMap[e].enabled))
                        return null;
                    var t = Ki.ZP.controlIndexToStateMap[e];
                    if ("P" === t.type && (n.LButtonX && n.LButtonX >= 0 && n.LButtonY && n.LButtonY >= 0 || n.LookAroundX && n.LookAroundX >= 0 && n.LookAroundY && n.LookAroundY >= 0)) {
                        var i = 1 === t.points[6]
                          , o = 1 === t.points[7];
                        return o || i ? iu(iu({}, n), {
                            isShootOnClickEnabled: o,
                            isLookAroundEnabled: i,
                            X: t.points[0] || n.X,
                            Y: t.points[1] || n.Y,
                            LButtonX: t.points[2] || n.LButtonX,
                            LButtonY: t.points[3] || n.LButtonY,
                            LookAroundX: t.points[4] || n.LookAroundX,
                            LookAroundY: t.points[5] || n.LookAroundY
                        }) : null
                    }
                    return "MS" === t.type ? iu(iu({}, n), {
                        X: t.points[0] || n.X,
                        Y: t.points[1] || n.Y,
                        CancelX: t.points[2] || n.CancelX,
                        CancelY: t.points[3] || n.CancelY,
                        OriginX: t.points[4] || n.OriginX,
                        OriginY: t.points[5] || n.OriginY
                    }) : "MD" === t.type ? iu(iu({}, n), {
                        X: t.points[0] || n.X,
                        Y: t.points[1] || n.Y,
                        OriginX: t.points[4] || n.OriginX,
                        OriginY: t.points[5] || n.OriginY
                    }) : "S" === t.type ? iu(iu({}, n), {
                        X1: t.points[0] || n.X1,
                        Y1: t.points[1] || n.Y1,
                        X2: t.points[0] || n.X2,
                        Y2: t.points[1] || n.Y2
                    }) : iu(iu({}, n), {
                        X: t.points[0] || n.X,
                        Y: t.points[1] || n.Y
                    })
                }
                )).filter((function(n) {
                    return n
                }
                )) : C).map((function(n, i) {
                    return n && (14 === Ki.ZP.cfgParserVersion || n.IsVisibleInOverlay || n.ShowOnOverlay || S) && (0,
                    et.tZ)(Jc, {
                        control: n,
                        isGamepadview: t,
                        offset: o,
                        index: i,
                        deleteCallback: T,
                        newControl: i === e.length - 1 && A
                    })
                }
                ))]
            })
        }, ru = t(55791), au = t(68593), lu = t(34483), du = {
            src: "/play/_next/static/media/save.6a7e2a8b.svg",
            height: 16,
            width: 16
        }, cu = {
            src: "/play/_next/static/media/plus.95fd59e4.svg",
            height: 12,
            width: 12
        }, su = {
            src: "/play/_next/static/media/delete.9154f996.svg",
            height: 12,
            width: 12
        }, uu = t(39600), pu = t(58844), fu = function() {
            return (fu = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, hu = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var i, o = 0, r = e.length; o < r; o++)
                    !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)),
                    i[o] = e[o]);
            return n.concat(i || Array.prototype.slice.call(e))
        }, gu = [], vu = function(n) {
            var e = n.label
              , t = n.value
              , i = n.guidanceCategory
              , o = i && -1 === gu.indexOf(i);
            return o && gu.push(i),
            (0,
            et.BX)(et.HY, {
                children: [o && (0,
                et.tZ)(Rd, {
                    children: i
                }, "".concat(i)), (0,
                et.BX)(Id, {
                    children: [(0,
                    et.tZ)("span", {
                        children: e
                    }), (0,
                    et.tZ)("span", {
                        children: t
                    })]
                }, "".concat(e, "_").concat(t))]
            })
        }, mu = function(n) {
            var e = n.type
              , t = (0,
            Dt.$)().t;
            return (0,
            et.BX)(Md, {
                children: [(0,
                et.tZ)("img", {
                    src: (0,
                    ti.j)(Yi.Z),
                    alt: t("gamepadWarning")
                }), (0,
                et.tZ)(Ot.T4, {
                    style: {
                        marginTop: "10px"
                    },
                    children: t("not_supported" === e ? "sidebar.gamepadNotSupported" : "sidebar.gamepadNotDetected")
                }), (0,
                et.tZ)(Ot.kk, {
                    children: t("not_supported" === e ? "sidebar.gamepadNotSupportedInfo" : "sidebar.gamepadNotDetectedInfo")
                })]
            })
        }, xu = {}, yu = function(n) {
            var e = n.className
              , t = (0,
            Dt.$)().t
              , i = (0,
            Ye.useState)(null)
              , o = i[0]
              , r = i[1]
              , a = (0,
            Ye.useState)(!1)
              , l = a[0]
              , d = a[1]
              , c = (0,
            Ye.useState)(!!ru.Z.gamepad)
              , s = c[0]
              , u = c[1]
              , p = (0,
            Ye.useState)([])
              , f = p[0]
              , h = p[1]
              , g = (0,
            Ye.useState)(null)
              , v = g[0]
              , m = g[1]
              , x = (0,
            Ye.useState)(!1)
              , y = x[0]
              , w = x[1]
              , b = (0,
            Ye.useState)(!1)
              , Z = b[0]
              , A = b[1]
              , k = (0,
            Ye.useState)([])
              , S = k[0]
              , E = k[1]
              , P = (0,
            He.v9)((function(n) {
                return n.imap.isActive
            }
            ))
              , T = (0,
            He.v9)((function(n) {
                return n.imap.initialized
            }
            ))
              , C = (0,
            He.v9)((function(n) {
                return n.imap.guideVisible
            }
            ))
              , D = (0,
            He.v9)((function(n) {
                return n.appPreferences.imapOverlay
            }
            ))
              , I = (0,
            He.v9)((function(n) {
                return n.appPreferences.legacyControls
            }
            ))
              , R = (0,
            He.v9)((function(n) {
                return n.appPreferences.imapScheme
            }
            ))
              , O = (0,
            He.v9)((function(n) {
                return n.ads.adsEnded
            }
            ))
              , L = (0,
            He.v9)((function(n) {
                return n.play.showScriptEditor
            }
            ))
              , M = Ue.ZP.features.nativeControlsList.length > 0
              , B = Ue.ZP.features.shiftLock
              , X = (0,
            Ye.useState)(null)
              , N = X[0]
              , K = X[1]
              , j = (0,
            Ye.useState)(null)
              , z = j[0]
              , Y = j[1]
              , H = (0,
            Ye.useRef)(null)
              , _ = (0,
            Ye.useState)(!1)
              , F = _[0]
              , U = _[1]
              , W = (0,
            Ye.useState)("")
              , G = W[0]
              , V = W[1]
              , q = (0,
            Ye.useState)("")
              , Q = q[0]
              , J = q[1]
              , $ = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , nn = (0,
            He.v9)((function(n) {
                return n.imap.keymappingEditMode
            }
            ))
              , en = (0,
            He.v9)((function(n) {
                return n.play.showTimeLimitExceededScreen
            }
            ))
              , tn = {
                ImageId: "",
                ImageType: "",
                TextureCRC: "",
                TextureCoord: [],
                TextureIndex: 0,
                VertexIndex: 0,
                VertexRect: [],
                MatchColor: ""
            }
              , on = "5349" === Ue.ZP.appInfo.appId || Ue.ZP.appInfo.playFeFeatures.nativeMouseActivities && Ue.ZP.appInfo.playFeFeatures.nativeMouseActivities.length > 0
              , rn = (0,
            He.I0)()
              , an = function(n) {
                S.forEach((function(e) {
                    var i;
                    e.Type === Zd.x_.Pan && (Z ? e.KeyStartStop_alt1 : e.KeyStartStop) && ((i = Z ? e.KeyStartStop_alt1 : e.KeyStartStop) && !xu[i] && n && Ki.ZP.showLookAroundToasts && ((0,
                    dd.Am)((0,
                    et.BX)(et.HY, {
                        children: [t("overlay.look"), " ", (0,
                        et.tZ)("kbd", {
                            children: rc(i)
                        }), " ", t("overlay.tip2")]
                    }), Lt.dO),
                    xu[i] = !0));
                    e.Type === Zd.x_.FreeLook && 0 !== e.DeviceType && (Z ? e.Key_alt1 : e.Key) && ((i = Z ? e.Key_alt1 : e.Key) && !xu[i] && n && Ki.ZP.showLookAroundToasts && ((0,
                    dd.Am)((0,
                    et.BX)(et.HY, {
                        children: [t("overlay.klook"), " ", (0,
                        et.tZ)("kbd", {
                            children: rc(i)
                        }), " ", t("overlay.tip2")]
                    }), Lt.dO),
                    Ki.ZP.showLookAroundToasts = !1,
                    xu[i] = !0))
                }
                ))
            }
              , ln = function() {
                return gu = [],
                on || I || rn({
                    type: Ed.Z.LEGACY_CONTROLS
                }),
                null
            }
              , dn = function() {
                ln(),
                rn({
                    type: Sd.Z.TOGGLE_SIDEBAR
                })
            }
              , cn = function(n) {
                for (var e = "".concat(n, " (1)"), t = 1; null === o || void 0 === o ? void 0 : o.ControlSchemes.some((function(n) {
                    return n.Name === e
                }
                )); )
                    t += 1,
                    e = "".concat(n, " (").concat(t, ")");
                return e
            };
            (0,
            Ye.useEffect)((function() {
                var n = function(n) {
                    var e, t = n.detail;
                    rn({
                        type: Sd.Z.IMAP_STATUS,
                        payload: {
                            initialized: !0
                        }
                    }),
                    r(t);
                    var i = "".concat(kt.Z.getState().play.robloxExperienceId) || sessionStorage.getItem(zi.$3);
                    i && Ki.ZP.experienceStarted(i);
                    var o = Ue.ZP.features.nativeControlsList;
                    "object" !== typeof o || o.length || (null === (e = Ue.ZP.appInfo.playFeFeatures.nativeMouseActivities) || void 0 === e ? void 0 : e.length) || rn({
                        type: Ed.Z.SET_LEGACY_CONTROLS,
                        payload: {
                            legacyControls: !0
                        }
                    })
                }
                  , e = function(n) {
                    var e = n.detail;
                    e.ended || rn((0,
                    Qo.i)({
                        imapOverlay: !0
                    })),
                    rn({
                        type: Ed.Z.SET_LEGACY_CONTROLS,
                        payload: {
                            legacyControls: !e.ended
                        }
                    }),
                    d(!e.ended),
                    r(e.cfg),
                    Ki.ZP.updateDimensions()
                }
                  , t = function() {
                    rn({
                        type: Sd.Z.IMAP_STATUS,
                        payload: {
                            initialized: !1
                        }
                    }),
                    r(null)
                }
                  , i = function(n) {
                    var e = n.detail;
                    u(!!e)
                };
                return window.addEventListener(Zd.UD, n),
                window.addEventListener(Zd.kn, e),
                window.addEventListener(Zd.u5, t),
                window.addEventListener(Zd.eT, i),
                function() {
                    window.removeEventListener(Zd.eT, i),
                    window.removeEventListener(Zd.UD, n),
                    window.removeEventListener(Zd.kn, e),
                    window.removeEventListener(Zd.u5, t)
                }
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                var n = null === o || void 0 === o ? void 0 : o.ControlSchemes.some((function(n) {
                    var e = n.Name
                      , t = n.Selected;
                    return e === R && t
                }
                ));
                if (o && !n) {
                    var e = o.ControlSchemes.find((function(n) {
                        return n.Name === R
                    }
                    ));
                    if (e) {
                        var t = o.ControlSchemes.map((function(n) {
                            return n.Name === e.Name ? fu(fu({}, n), {
                                Selected: !0
                            }) : fu(fu({}, n), {
                                Selected: !1
                            })
                        }
                        ))
                          , i = fu(fu({}, o), {
                            ControlSchemes: t
                        });
                        Ki.ZP.loadCfg(i),
                        r(i),
                        m({
                            label: e.Name,
                            value: e.Name
                        })
                    }
                }
            }
            ), [R, o]),
            (0,
            Ye.useEffect)((function() {
                an(I)
            }
            ), [S]),
            (0,
            Ye.useEffect)((function() {
                ln();
                var n = null === o || void 0 === o ? void 0 : o.ControlSchemes;
                if (n && n.forEach((function(n) {
                    var e;
                    if (n.Selected) {
                        w(n.isGamepadControlsPresent),
                        ru.Z.setActiveSchemeHasGamepad(n.isGamepadControlsPresent),
                        Y(n);
                        var t = n.GameControls;
                        t && E(t),
                        (null === (e = null === n || void 0 === n ? void 0 : n.Images) || void 0 === e ? void 0 : e.length) ? (0,
                        au.VX)(pu.Z.currentPackageName, JSON.stringify({
                            Images: n.Images.map((function(n) {
                                return fu(fu({}, n), {
                                    DetectPosition: !0
                                })
                            }
                            ))
                        })) : (0,
                        au.VX)(pu.Z.currentPackageName, JSON.stringify({
                            Images: []
                        }))
                    }
                }
                )),
                null === o || void 0 === o ? void 0 : o.ControlSchemes) {
                    var e = null === o || void 0 === o ? void 0 : o.ControlSchemes.reduce((function(n, e) {
                        var t = {
                            label: e.Name,
                            value: e.Name
                        };
                        return n.push(t),
                        e.Selected && (Y(e),
                        m(t)),
                        n
                    }
                    ), []);
                    e && h(e)
                }
            }
            ), [o, Z]),
            (0,
            Ye.useEffect)((function() {
                ln(),
                kt.Z.dispatch({
                    type: Et.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }
            ), [C]);
            var sn = function(n) {
                (null === n || void 0 === n ? void 0 : n.value) && n.value !== (null === v || void 0 === v ? void 0 : v.value) && rn((0,
                Qo.i)({
                    imapScheme: n.value
                }))
            }
              , un = function() {
                var n = URL.createObjectURL(new Blob([JSON.stringify(o)]))
                  , e = document.createElement("a");
                e.href = n,
                e.download = "".concat(Ue.ZP.appInfo.packageName, "_edited.cfg"),
                e.click()
            };
            return (0,
            et.BX)(et.HY, {
                children: [O && P && T && !en && (0,
                et.tZ)(ou, {
                    gameControls: S,
                    isGamepadview: Z
                }), L && (0,
                et.tZ)(_d, {
                    editing: !0,
                    style: {
                        pointerEvents: nn ? "all" : "none",
                        zIndex: "10"
                    },
                    onClick: function(n) {
                        var e, t = null === (e = null === $ || void 0 === $ ? void 0 : $.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                        if (t) {
                            var i = 100 * (n.clientX - t.left) / t.width
                              , o = 100 * (n.clientY - t.top) / t.height;
                            i = parseFloat(i.toFixed(2)),
                            o = parseFloat(o.toFixed(2)),
                            J("".concat(Q, " ").concat(i, " ").concat(o))
                        }
                    }
                }), nn && I && L && (0,
                et.tZ)(uu._, {
                    style: {
                        top: "0px",
                        right: "308px"
                    },
                    children: (0,
                    et.BX)(Wd, {
                        style: {
                            width: "300px"
                        },
                        children: [(0,
                        et.BX)(Cd, {
                            children: [(0,
                            et.tZ)("div", {
                                className: "sidebar-heading",
                                children: (0,
                                et.tZ)(Ot.TZ, {
                                    children: "Add Script Commands"
                                })
                            }), (0,
                            et.tZ)(Ea.Z, {
                                style: {
                                    cursor: "pointer"
                                },
                                id: "game-controls-cross",
                                onClick: function() {
                                    rn({
                                        type: Et.Z.SCRIPT_EDITOR,
                                        payload: {
                                            showScriptEditor: !1
                                        }
                                    })
                                },
                                size: 18,
                                name: "cross-thin"
                            })]
                        }), (0,
                        et.tZ)(Vd, {
                            children: (0,
                            et.BX)(Gd, {
                                children: [(0,
                                et.tZ)(Qd.gx, {
                                    title: "Commands",
                                    onUpdate: function() {},
                                    value: Q,
                                    onChange: function(n) {
                                        J(n.currentTarget.value)
                                    }
                                }), (0,
                                et.tZ)(vi.z, {
                                    onClick: function() {
                                        var n = Q.split("\n");
                                        rn({
                                            type: Et.Z.SCRIPT_EDITOR,
                                            payload: {
                                                scriptCommands: n,
                                                showScriptEditor: !1
                                            }
                                        })
                                    },
                                    children: "Update"
                                })]
                            })
                        })]
                    })
                }), nn && I && !L && (0,
                et.tZ)(uu._, {
                    style: {
                        top: "0px",
                        left: "50%"
                    },
                    children: (0,
                    et.BX)(Fd, {
                        style: {
                            background: $l.qm.colors.black40,
                            borderRadius: "16px",
                            padding: "12px",
                            margin: 0,
                            border: "1px solid rgba(255,255,255,0.2)",
                            backdropFilter: "blur(24px)",
                            alignItems: "center"
                        },
                        children: [(0,
                        et.tZ)("input", {
                            type: "file",
                            ref: H,
                            style: {
                                display: "none",
                                pointerEvents: "none"
                            }
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                Ki.ZP.loadCfg(o),
                                rn({
                                    type: Ed.Z.UPDATE_CONFIG,
                                    payload: {
                                        config: o
                                    }
                                }),
                                rn({
                                    type: Sd.Z.IMAP_STATUS,
                                    payload: {
                                        keymappingEditMode: !nn
                                    }
                                })
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(du),
                                alt: t("save"),
                                title: t("saveChanges")
                            })
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                r(N),
                                Ki.ZP.loadCfg(N),
                                rn({
                                    type: Sd.Z.IMAP_STATUS,
                                    payload: {
                                        keymappingEditMode: !1
                                    }
                                })
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(Pi.Z),
                                alt: t("discard"),
                                title: t("discardChanges")
                            })
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: un,
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(lu.Z),
                                alt: t("download"),
                                title: t("downloadConfig")
                            })
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                var n, e;
                                null === (n = H.current) || void 0 === n || n.click(),
                                null === (e = H.current) || void 0 === e || e.addEventListener("change", (function() {
                                    var n, e, t, i = new FileReader;
                                    if ((null === (n = H.current) || void 0 === n ? void 0 : n.files) && (null === (e = H.current) || void 0 === e ? void 0 : e.files[0])) {
                                        var r = null === (t = H.current) || void 0 === t ? void 0 : t.files[0];
                                        i.addEventListener("load", (function(n) {
                                            var e, t;
                                            if (null === (e = n.target) || void 0 === e ? void 0 : e.result) {
                                                var i = JSON.parse(null === (t = n.target) || void 0 === t ? void 0 : t.result)
                                                  , r = hu([], f, !0);
                                                i.ControlSchemes.forEach((function(n) {
                                                    n.Name = cn(n.Name),
                                                    null === o || void 0 === o || o.ControlSchemes.push(n);
                                                    var e = {
                                                        label: n.Name,
                                                        value: n.Name
                                                    };
                                                    r.push(e)
                                                }
                                                )),
                                                h(hu([], r, !0))
                                            }
                                        }
                                        )),
                                        i.readAsBinaryString(r)
                                    }
                                    H.current && (H.current.value = "")
                                }
                                ))
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(lu.Z),
                                alt: t("import"),
                                title: t("import"),
                                style: {
                                    transform: "rotate(180deg)"
                                }
                            })
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                U(!0),
                                tn.ImageId = "",
                                tn.ImageType = "",
                                tn.TextureCRC = "",
                                tn.TextureCoord = [],
                                tn.TextureIndex = 0,
                                tn.VertexIndex = 0,
                                tn.VertexRect = []
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(cu),
                                alt: t("new"),
                                title: "Add images"
                            })
                        }), (null === f || void 0 === f ? void 0 : f.length) > 1 && v && (0,
                        et.tZ)(kd.ZP, {
                            value: v,
                            options: f,
                            onChange: sn,
                            className: "select-container",
                            classNamePrefix: "select"
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                var n = structuredClone(z);
                                z && (z.Name = cn((null === z || void 0 === z ? void 0 : z.Name) || "New")),
                                n.Selected = !1,
                                null === o || void 0 === o || o.ControlSchemes.push(n);
                                var e = {
                                    label: (null === z || void 0 === z ? void 0 : z.Name) || "New",
                                    value: (null === z || void 0 === z ? void 0 : z.Name) || "New"
                                };
                                h(hu(hu([], f, !0), [e], !1)),
                                m(e),
                                rn((0,
                                Qo.i)({
                                    imapScheme: null === z || void 0 === z ? void 0 : z.Name
                                }))
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(ni),
                                alt: t("copy"),
                                title: t("copyControlScheme")
                            })
                        }), (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                var n = {
                                    GameControls: [],
                                    Images: [],
                                    Name: cn("New scheme"),
                                    BuiltIn: !1,
                                    Selected: !0,
                                    IsBookMarked: !1,
                                    IsCategoryVisible: !1,
                                    KeyboardLayout: (null === z || void 0 === z ? void 0 : z.KeyboardLayout) || "",
                                    SchemeTags: [],
                                    isGamepadControlsPresent: !1
                                };
                                z && (z.Selected = !1),
                                null === o || void 0 === o || o.ControlSchemes.push(n);
                                var e = {
                                    label: n.Name,
                                    value: n.Name
                                };
                                h(hu(hu([], f, !0), [e], !1)),
                                m(e),
                                E(n.GameControls),
                                rn((0,
                                Qo.i)({
                                    imapScheme: null === z || void 0 === z ? void 0 : z.Name
                                }))
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(cu),
                                alt: t("new"),
                                title: t("addControlScheme")
                            })
                        }), f.length > 1 && (0,
                        et.tZ)(Ud, {
                            onClick: function() {
                                if (o) {
                                    o.ControlSchemes = o.ControlSchemes.filter((function(n) {
                                        return n.Name !== (null === z || void 0 === z ? void 0 : z.Name)
                                    }
                                    ));
                                    var n = o.ControlSchemes[0];
                                    h(f.filter((function(n) {
                                        return n.value !== (null === z || void 0 === z ? void 0 : z.Name)
                                    }
                                    ))),
                                    m({
                                        label: n.Name,
                                        value: n.Name
                                    }),
                                    E(n.GameControls),
                                    rn((0,
                                    Qo.i)({
                                        imapScheme: n.Name
                                    }))
                                }
                            },
                            children: (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(su),
                                alt: t("delete"),
                                title: t("deleteControlScheme")
                            })
                        })]
                    })
                }), F && nn && I && (0,
                et.BX)(Wd, {
                    children: [(0,
                    et.BX)(Cd, {
                        children: [(0,
                        et.tZ)("div", {
                            className: "sidebar-heading",
                            children: (0,
                            et.tZ)(Ot.TZ, {
                                children: "Add Images to Cfg"
                            })
                        }), (0,
                        et.tZ)(Ea.Z, {
                            style: {
                                cursor: "pointer"
                            },
                            id: "game-controls-cross",
                            onClick: function() {
                                U(!1)
                            },
                            size: 18,
                            name: "cross-thin"
                        })]
                    }), (0,
                    et.tZ)(Vd, {
                        children: (0,
                        et.BX)(Gd, {
                            children: [(0,
                            et.tZ)(Qd.gx, {
                                title: "Images",
                                onUpdate: function() {},
                                value: G,
                                onChange: function(n) {
                                    V(n.currentTarget.value)
                                },
                                onPaste: function(n) {
                                    var e = n.clipboardData.getData("text");
                                    V("".concat(G).concat(e))
                                }
                            }), (0,
                            et.tZ)(vi.z, {
                                onClick: function() {
                                    tn = JSON.parse(G),
                                    null === z || void 0 === z || z.Images.push(tn),
                                    U(!1)
                                },
                                children: "Add Image"
                            })]
                        })
                    })]
                }), T && (0,
                et.BX)(Td, {
                    className: "".concat(C ? "" : "hide", " ").concat(e),
                    children: [(0,
                    et.BX)(Cd, {
                        children: [(0,
                        et.BX)("div", {
                            className: "sidebar-heading",
                            children: [(0,
                            et.tZ)(Ea.Z, {
                                className: "\n                ".concat(s ? "" : "null", "\n              "),
                                style: {
                                    fontSize: "21px",
                                    paddingLeft: "0",
                                    paddingRight: "10px",
                                    pointerEvents: "none"
                                },
                                size: 18,
                                name: "gamepad"
                            }), (0,
                            et.tZ)(Ot.TZ, {
                                children: t("controls.title")
                            })]
                        }), (0,
                        et.tZ)(Ea.Z, {
                            style: {
                                cursor: "pointer"
                            },
                            id: "game-controls-cross",
                            onClick: dn,
                            size: 18,
                            name: "cross-thin"
                        })]
                    }), (M && on || B) && !l && (0,
                    et.BX)(Yd, {
                        children: [(0,
                        et.BX)(Kd, {
                            children: [(0,
                            et.tZ)(Xd, {
                                className: "".concat(I ? "dim" : ""),
                                children: t("sidebar.nativeTitle")
                            }), (0,
                            et.tZ)(jd, {
                                className: "".concat(I ? "active" : ""),
                                onClick: function() {
                                    return function() {
                                        ln();
                                        var n = kt.Z.getState().play
                                          , e = n.nativeMouseEnabled
                                          , t = n.shiftLockActive;
                                        (0,
                                        Ve.L9)(Lt.S5, {
                                            element: "ControlScheme",
                                            state: "".concat(I ? "Native" : null === v || void 0 === v ? void 0 : v.label),
                                            robloxExperience: kt.Z.getState().play.robloxExperienceId
                                        }),
                                        rn({
                                            type: Ed.Z.LEGACY_CONTROLS
                                        }),
                                        e && I ? (0,
                                        sr.Jj)(!1) : ((0,
                                        sr.DA)(),
                                        rn({
                                            type: Et.Z.ROBLOX_TOAST,
                                            payload: {
                                                robloxToast: !1
                                            }
                                        }),
                                        an(!0)),
                                        (0,
                                        pt.Ul)(),
                                        I && t && (kt.Z.dispatch({
                                            type: Et.Z.UPDATE_SHIFT_LOCK
                                        }),
                                        (0,
                                        Ve.L9)(Lt.S5, {
                                            element: "ShiftLock",
                                            state: "Disabled",
                                            robloxExperience: kt.Z.getState().play.robloxExperienceId
                                        }))
                                    }()
                                }
                            }), (0,
                            et.tZ)(Xd, {
                                className: "".concat(I ? "" : "dim"),
                                children: t("sidebar.legacyTitle")
                            })]
                        }), (0,
                        et.tZ)(zd, {}), (0,
                        et.tZ)(Xd, {
                            className: "dim",
                            children: t(I ? "sidebar.legacyInfo" : "sidebar.nativeInfo")
                        })]
                    }), I && (0,
                    et.BX)(Nd, {
                        className: "".concat(D ? "active" : ""),
                        children: [(0,
                        et.tZ)(Xd, {
                            children: t("sidebar.onscreenControls")
                        }), (0,
                        et.tZ)("span", {
                            onClick: function() {
                                return (0,
                                Ve.L9)(Lt.S5, {
                                    element: "OnScreenControls",
                                    state: "".concat(D ? "Disabled" : "Enabled"),
                                    robloxExperience: kt.Z.getState().play.robloxExperienceId
                                }),
                                void rn((0,
                                Qo.i)({
                                    imapOverlay: !D
                                }))
                            }
                        })]
                    }), I && Ue.ZP.features.enableKeymapEditor && (0,
                    et.BX)(Fd, {
                        children: [(0,
                        et.tZ)(vi.z, {
                            onClick: function() {
                                K(structuredClone(o)),
                                dn(),
                                rn({
                                    type: Sd.Z.IMAP_STATUS,
                                    payload: {
                                        keymappingEditMode: !nn
                                    }
                                })
                            },
                            children: t("edit")
                        }), (0,
                        et.tZ)(vi.z, {
                            onClick: un,
                            children: t("download")
                        })]
                    }), (null === f || void 0 === f ? void 0 : f.length) > 1 && v && (0,
                    et.BX)(Bd, {
                        children: [(0,
                        et.tZ)(Xd, {
                            style: {
                                margin: "0 0 8px 0"
                            },
                            children: t("sidebar.controlSchemes")
                        }), (0,
                        et.tZ)(kd.ZP, {
                            value: v,
                            options: f,
                            onChange: sn,
                            className: "select-container",
                            classNamePrefix: "select"
                        })]
                    }), (0,
                    et.BX)(Od, {
                        children: [(0,
                        et.BX)(Ld, {
                            className: "".concat(Z ? "" : "active"),
                            onClick: function() {
                                return A(!1)
                            },
                            children: [(0,
                            et.tZ)(Ea.Z, {
                                name: "keyboard"
                            }), t("sidebar.keyboard")]
                        }), (0,
                        et.BX)(Ld, {
                            className: "".concat(Z ? "active" : ""),
                            onClick: function() {
                                return A(!0)
                            },
                            children: [(0,
                            et.tZ)(Ea.Z, {
                                name: "gamepad"
                            }), t("sidebar.gamepad")]
                        })]
                    }), Z && (!y || !I || y && !s && I) && (0,
                    et.tZ)(mu, {
                        type: y && I ? "null" : "not_supported"
                    }), (Z && y && s || !Z) && (0,
                    et.BX)(Ad.Z, {
                        autoHide: !1,
                        style: {
                            maxHeight: "calc(100vh - 384px)",
                            borderBottomLeftRadius: "4px",
                            borderBottomRightRadius: "4px"
                        },
                        children: [(I || !B && (!M || !on)) && (0,
                        et.BX)(Dd, {
                            children: [ln(), null === S || void 0 === S ? void 0 : S.map((function(n) {
                                var e, t = n.Guidance, i = Z ? "_alt1" : "";
                                switch (n.Type) {
                                case Zd.x_.FreeLook:
                                    return n.KeyDown || n.KeyRight || n.KeyUp || n.KeyLeft || i ? (0,
                                    et.BX)(et.HY, {
                                        children: [(null === t || void 0 === t ? void 0 : t.Key) && (0,
                                        et.tZ)(vu, {
                                            label: t.Key,
                                            value: rc(n["Key".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyDown) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyDown,
                                            value: rc(n["KeyDown".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyUp) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyUp,
                                            value: rc(n["KeyUp".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyRight) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyRight,
                                            value: rc(n["KeyRight".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyLeft) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyLeft,
                                            value: rc(n["KeyLeft".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })]
                                    }) : null;
                                case Zd.x_.Pan:
                                    return n.KeyAction || n.KeyStartStop || i ? (0,
                                    et.BX)(et.HY, {
                                        children: [(null === t || void 0 === t ? void 0 : t.KeyAction) && n["KeyAction".concat(i)] && (0,
                                        et.tZ)(vu, {
                                            label: rc(n["KeyAction".concat(i)]),
                                            value: "MouseLButton",
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyLookAround) && n["KeyLookAround".concat(i)] && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyLookAround || "Pan",
                                            value: rc(n["KeyLookAround".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyStartStop) && n["KeyStartStop".concat(i)] && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyStartStop,
                                            value: rc(n["KeyStartStop".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeySuspend) && n["KeySuspend".concat(i)] && (0,
                                        et.tZ)(vu, {
                                            label: t.KeySuspend,
                                            value: rc(n["KeySuspend".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })]
                                    }) : null;
                                case Zd.x_.Dpad:
                                    return n.KeyDown || n.KeyUp || n.KeyRight || n.KeyLeft || i ? (0,
                                    et.BX)(et.HY, {
                                        children: [(null === t || void 0 === t ? void 0 : t.DpadTitle) && (0,
                                        et.tZ)(vu, {
                                            label: t.DpadTitle,
                                            value: "".concat(rc(n["KeyUp".concat(i)]), "\n                                  ").concat(rc(n["KeyLeft".concat(i)]), "\n                                  ").concat(rc(n["KeyDown".concat(i)]), "\n                                  ").concat(rc(n["KeyRight".concat(i)])),
                                            guidanceCategory: n.GuidanceCategory
                                        }), i && n.GamepadStick ? (0,
                                        et.tZ)(vu, {
                                            label: (null === t || void 0 === t ? void 0 : t.GamepadStick) || "DPAD",
                                            value: n.GamepadStick,
                                            guidanceCategory: n.GuidanceCategory
                                        }) : (0,
                                        et.BX)(et.HY, {
                                            children: [(null === t || void 0 === t ? void 0 : t.KeyDown) && (0,
                                            et.tZ)(vu, {
                                                label: t.KeyDown,
                                                value: rc(n["KeyDown".concat(i)]),
                                                guidanceCategory: n.GuidanceCategory
                                            }), (null === t || void 0 === t ? void 0 : t.KeyUp) && (0,
                                            et.tZ)(vu, {
                                                label: t.KeyUp,
                                                value: rc(n["KeyUp".concat(i)]),
                                                guidanceCategory: n.GuidanceCategory
                                            }), (null === t || void 0 === t ? void 0 : t.KeyRight) && (0,
                                            et.tZ)(vu, {
                                                label: t.KeyRight,
                                                value: rc(n["KeyRight".concat(i)]),
                                                guidanceCategory: n.GuidanceCategory
                                            }), (null === t || void 0 === t ? void 0 : t.KeyLeft) && (0,
                                            et.tZ)(vu, {
                                                label: t.KeyLeft,
                                                value: rc(n["KeyLeft".concat(i)]),
                                                guidanceCategory: n.GuidanceCategory
                                            })]
                                        })]
                                    }) : null;
                                case Zd.x_.EdgeScroll:
                                    if ("boolean" === typeof (null === t || void 0 === t ? void 0 : t.EdgeScrollEnabled))
                                        return (0,
                                        et.tZ)(vu, {
                                            label: t.EdgeScrollEnabled,
                                            value: n.EdgeScrollEnabled ? "True" : "False",
                                            guidanceCategory: n.GuidanceCategory
                                        });
                                    break;
                                case Zd.x_.Zoom:
                                case Zd.x_.MouseZoom:
                                    return (0,
                                    et.BX)(et.HY, {
                                        children: [(null === t || void 0 === t ? void 0 : t.KeyIn) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyIn,
                                            value: rc(n["KeyIn".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyOut) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyOut,
                                            value: rc(n["KeyOut".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), (null === t || void 0 === t ? void 0 : t.KeyWheel) && (0,
                                        et.tZ)(vu, {
                                            label: t.KeyWheel,
                                            value: rc(n["KeyWheel".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })]
                                    });
                                default:
                                    if ((null === (e = n.Guidance) || void 0 === e ? void 0 : e.Key) && (n["Key".concat(i)] || n["KeyModifier".concat(i)]))
                                        return (0,
                                        et.tZ)(vu, {
                                            label: n.Guidance.Key || "",
                                            value: rc(n["Key".concat(i)] || n["KeyModifier".concat(i)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })
                                }
                                return null
                            }
                            ))]
                        }), !I && !Z && (0,
                        et.BX)(Dd, {
                            children: [B && (0,
                            et.BX)(Hd, {
                                children: [(0,
                                et.tZ)(Rd, {
                                    children: t("sidebar.specialKey")
                                }), (0,
                                et.tZ)(vu, {
                                    label: t("mouseLockKey"),
                                    value: "Ctrl + Shift + 1",
                                    guidanceCategory: ""
                                }), (0,
                                et.tZ)(vu, {
                                    label: t("shiftLockKey"),
                                    value: "Shift + Q",
                                    guidanceCategory: ""
                                })]
                            }, "nativeControlBox"), Ue.ZP.features.nativeControlsList.map((function(n) {
                                return (0,
                                et.BX)(et.HY, {
                                    children: [(0,
                                    et.tZ)(Rd, {
                                        children: n.key.toString()
                                    }, "".concat(n.key.toString())), n.value.map((function(n) {
                                        return (0,
                                        et.tZ)(vu, {
                                            label: n.key || "",
                                            value: n.value,
                                            guidanceCategory: ""
                                        })
                                    }
                                    ))]
                                })
                            }
                            ))]
                        })]
                    })]
                })]
            })
        }, wu = t(77360), bu = function() {
            return (0,
            Ye.useEffect)((function() {
                !function(n, e) {
                    var t = {
                        appId: "350e2364bb18edfc4fbb2d984bc91b854",
                        popupWidget: !1,
                        onInit: function() {
                            var n = {
                                onChatWidgetOpen: function() {
                                    var n, e = kt.Z.getState().play.videoRef, t = null === (n = null === e || void 0 === e ? void 0 : e.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), i = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                    i && i[0] && (i[0].style.left = "".concat(((null === t || void 0 === t ? void 0 : t.left) || 0) + ((null === t || void 0 === t ? void 0 : t.width) || 0) - 390, "px"),
                                    i[0].style.top = "".concat(((null === t || void 0 === t ? void 0 : t.top) || 0) + ((null === t || void 0 === t ? void 0 : t.height) || 0) - 600, "px"))
                                },
                                onChatWidgetClose: function() {
                                    var n = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                    n && n[0] && (n[0].style.left = "auto",
                                    n[0].style.top = "auto")
                                }
                            };
                            window.Kommunicate.subscribeToEvents(n)
                        }
                    }
                      , i = document.createElement("script");
                    i.type = "text/javascript",
                    i.async = !0,
                    i.src = "https://widget.kommunicate.io/v2/kommunicate.app",
                    document.getElementsByTagName("head")[0].appendChild(i),
                    window.kommunicate = e,
                    e._globals = t
                }(document, window.kommunicate || {})
            }
            ), []),
            (0,
            et.tZ)("div", {})
        }, Zu = t(1883), Au = t(7763), ku = t(50301), Su = t(7969), Eu = function(n) {
            var e = n.setIapBtnClicked
              , t = (0,
            Dt.$)().t
              , i = (0,
            He.I0)();
            return (0,
            et.tZ)(Su.Bp, {
                className: "".concat((0,
                Ge.tq)() && "mobile"),
                children: (0,
                et.BX)(Su.wf, {
                    children: [(0,
                    et.tZ)(Ea.Z, {
                        name: "cross-thin",
                        onClick: function() {
                            return i({
                                type: Et.Z.TOGGLE_IAP_POPUP_STATE
                            })
                        },
                        size: 12
                    }), (0,
                    et.tZ)(Ot.T5, {
                        med: !0,
                        white: !0,
                        children: t("iapTitle")
                    }), (0,
                    et.tZ)("p", {
                        children: t("iapDescription")
                    }), (0,
                    et.tZ)(Su.RV, {
                        onClick: function() {
                            i({
                                type: Et.Z.TOGGLE_IAP_POPUP_STATE
                            }),
                            e(!0),
                            (0,
                            qr.f)("userLogin::com.google")
                        },
                        children: (0,
                        et.tZ)(Ot.T6, {
                            med: !0,
                            children: t("iapBtnText")
                        })
                    })]
                })
            })
        }, Pu = function() {
            var n = (0,
            Dt.$)().t;
            return (0,
            et.tZ)(Su.Bp, {
                className: "".concat((0,
                Ge.tq)() && "mobile"),
                children: (0,
                et.BX)(Su.wf, {
                    className: "loaderContainer",
                    children: [(0,
                    et.tZ)("img", {
                        alt: "".concat(n("roundLoader")),
                        src: (0,
                        ti.j)(Ti)
                    }), (0,
                    et.tZ)("p", {
                        children: n("iapLoaderText")
                    })]
                })
            })
        }, Tu = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.I0)()
              , t = (0,
            Ye.useState)(!1)
              , i = t[0]
              , o = t[1]
              , r = (0,
            Ye.useState)(!1)
              , a = r[0]
              , l = r[1]
              , d = (0,
            Ye.useState)("")
              , c = d[0]
              , s = d[1]
              , u = (0,
            He.v9)((function(n) {
                return n.play.showIAPPopup
            }
            ))
              , p = (0,
            He.v9)((function(n) {
                return n.play.iapUserLogin
            }
            ));
            return (0,
            Ye.useEffect)((function() {
                var n, t, r;
                return i && p ? (e({
                    type: Et.Z.UPDATE_PLAY_STATE,
                    payload: {
                        hideIAPIcon: !0
                    }
                }),
                l(!0),
                s(""),
                n = setTimeout((function() {
                    l(!1),
                    s("slideDown")
                }
                ), 1e3),
                t = setTimeout((function() {
                    s("slideUp")
                }
                ), 3e3),
                r = setTimeout((function() {
                    o(!1)
                }
                ), 4e3)) : o(!1),
                function() {
                    clearTimeout(n),
                    clearTimeout(t),
                    clearTimeout(r)
                }
            }
            ), [p]),
            u ? (0,
            et.tZ)(Eu, {
                setIapBtnClicked: o
            }) : i && p ? (0,
            et.BX)(et.HY, {
                children: [(0,
                et.BX)(Su.iO, {
                    className: c,
                    children: [(0,
                    et.tZ)("i", {
                        className: "icon-active"
                    }), (0,
                    et.tZ)(Ot.kk, {
                        med: !0,
                        white: !0,
                        children: n("iapToastText")
                    })]
                }), a && (0,
                et.tZ)(Pu, {})]
            }) : null
        }, Cu = t(96183), Du = t(82087), Iu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ru = Qe.ZP.div(is || (is = Iu(["\n  position: fixed;\n  top: 0;\n  pointer-events: all;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  min-height: ", ";\n  touch-action: none;\n"], ["\n  position: fixed;\n  top: 0;\n  pointer-events: all;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  min-height: ", ";\n  touch-action: none;\n"])), "".concat(Lt.g8, "px")), Ou = function() {
            return (Ou = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Lu = function() {
            var n = (0,
            Ye.useState)("")
              , e = n[0]
              , t = n[1]
              , i = (0,
            He.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , o = (0,
            Ye.useContext)(We.x)
              , r = (0,
            Ye.useRef)(null)
              , a = (0,
            He.I0)()
              , l = (0,
            Ye.useMemo)((function() {
                return i && (0,
                Ge.Dx)()
            }
            ), [i]);
            return (0,
            Ye.useEffect)((function() {
                a({
                    type: Et.Z.SET_REF,
                    payload: {
                        displayAdRef: r
                    }
                }),
                setTimeout((function() {
                    t(Lt.Nw),
                    (0,
                    pt.sZ)(),
                    (0,
                    pt.Ul)()
                }
                ), 1e3)
            }
            ), [a]),
            (0,
            Ye.useEffect)((function() {
                if (!l && e === Lt.Nw) {
                    var n = (0,
                    Fe.dl)(o);
                    (0,
                    sa.JD)("div-gpt-ad-display", "div-gpt-ad-display"),
                    window.tude.cmd.push((function() {
                        (0,
                        sa.JD)("div-gpt-ad-display", "div-gpt-ad-display", "2"),
                        window.tude.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-display",
                            baseDivId: "pb-slot-incontent",
                            targeting: Ou(Ou({}, n), {
                                ads_loc: "display-lb-top"
                            })
                        }])
                    }
                    ))
                }
            }
            ), [o, e, l]),
            (0,
            et.tZ)(Ru, {
                children: !l && (0,
                et.tZ)("div", {
                    ref: r,
                    id: "div-gpt-ad-display"
                })
            })
        }, Mu = (0,
        Ye.memo)(Lu), Bu = t(59532), Xu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Nu = Qe.ZP.div(os || (os = Xu(["\n    position: absolute;\n    top:50%;\n    left: 50%;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 24px;\n    flex-direction: column;\n    gap: 8px;\n    width: 355px;\n    transform: translate(-50%,-50%);\n    z-index: 100;\n"], ["\n    position: absolute;\n    top:50%;\n    left: 50%;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 24px;\n    flex-direction: column;\n    gap: 8px;\n    width: 355px;\n    transform: translate(-50%,-50%);\n    z-index: 100;\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.black70
        }
        )), Ku = Qe.ZP.div(rs || (rs = Xu(["\n    position: absolute;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 10px;\n    z-index: 100;\n"], ["\n    position: absolute;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 10px;\n    z-index: 100;\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.black70
        }
        )), ju = Qe.ZP.div(as || (as = Xu(["\n    display: flex;\n    justify-content: space-between;\n"], ["\n    display: flex;\n    justify-content: space-between;\n"]))), zu = Qe.ZP.div(ls || (ls = Xu(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: flex-end;\n"], ["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: flex-end;\n"]))), Yu = (0,
        Qe.ZP)(Ot.lU)(ds || (ds = Xu(["\n    color: #FFF;\n    padding: 4px 12px;\n    border-radius: 6px;\n    border: 1px solid ", ";\n    margin-top: 10px;\n    margin-bottom: 8px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n"], ["\n    color: #FFF;\n    padding: 4px 12px;\n    border-radius: 6px;\n    border: 1px solid ", ";\n    margin-top: 10px;\n    margin-bottom: 8px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )), Hu = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, _u = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Fu = function() {
            var n, e = (0,
            He.v9)((function(n) {
                return n.play.showCopyPastePrompt.type
            }
            )), t = (0,
            He.v9)((function(n) {
                return n.play.showCopyPastePrompt.event
            }
            )), i = (0,
            He.v9)((function(n) {
                return n.play.showCopyPastePrompt.copyText
            }
            )), o = (0,
            He.v9)((function(n) {
                return n.play.keyboardActive
            }
            )), r = (0,
            Dt.$)().t, a = (0,
            He.I0)(), l = (0,
            Ye.useState)(!1), d = l[0], c = l[1], s = (0,
            Ye.useState)(!1), u = s[0], p = s[1], f = function() {
                return Hu(void 0, void 0, void 0, (function() {
                    var n;
                    return _u(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return "copy" !== e ? [3, 1] : (c(!0),
                            p(!0),
                            (0,
                            ll.FF)(i || ""),
                            setTimeout((function() {
                                c(!1),
                                a({
                                    type: Et.Z.COPY_PASTE_PROMPT,
                                    payload: {
                                        showCopyPastePrompt: {
                                            type: ""
                                        }
                                    }
                                })
                            }
                            ), 3e3),
                            [3, 5]);
                        case 1:
                            if ("paste" !== e)
                                return [3, 5];
                            t.label = 2;
                        case 2:
                            return t.trys.push([2, 4, , 5]),
                            [4, navigator.clipboard.readText()];
                        case 3:
                            return (n = t.sent()) && ((0,
                            ll.g2)(n),
                            a({
                                type: Et.Z.COPY_PASTE_PROMPT,
                                payload: {
                                    showCopyPastePrompt: {
                                        type: ""
                                    }
                                }
                            })),
                            [3, 5];
                        case 4:
                            return t.sent(),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            };
            return "copy" === e ? (0,
            et.BX)(Nu, {
                children: [(0,
                et.BX)(ju, {
                    children: [(0,
                    et.BX)(Bu.Lb, {
                        gap: "8",
                        children: [d && (0,
                        et.tZ)(Wi, {}), (0,
                        et.tZ)(Ot.js, {
                            style: {
                                color: "#FFF"
                            },
                            children: r("copyToClipboard")
                        })]
                    }), (0,
                    et.tZ)(Ea.Z, {
                        name: "cross-thin",
                        size: 24,
                        style: {
                            color: "#FFF",
                            cursor: "pointer"
                        },
                        onClick: function() {
                            p(!1),
                            a({
                                type: Et.Z.COPY_PASTE_PROMPT,
                                payload: {
                                    showCopyPastePrompt: {
                                        type: "",
                                        copyText: ""
                                    }
                                }
                            })
                        }
                    })]
                }), !d && !u && (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.BX)("div", {
                        children: [(0,
                        et.tZ)(Ot.TZ, {
                            style: {
                                color: "rgba(255, 255, 255, 0.80"
                            },
                            children: r("textYouSelected")
                        }), (0,
                        et.tZ)(Yu, {
                            children: i
                        })]
                    }), (0,
                    et.tZ)(zu, {
                        children: (0,
                        et.tZ)(vi.z, {
                            variant: "primary",
                            text: r("copy"),
                            onClick: f
                        })
                    })]
                })]
            }) : t && (null === (n = null === t || void 0 === t ? void 0 : t.changedTouches) || void 0 === n ? void 0 : n.length) && o ? (0,
            et.tZ)(Ku, {
                onClick: f,
                style: {
                    top: "".concat(t.changedTouches[0].pageY, "px"),
                    left: "".concat(t.changedTouches[0].pageX, "px")
                },
                children: (0,
                et.tZ)(Ot.gd, {
                    style: {
                        color: "#FFF",
                        cursor: "pointer"
                    },
                    children: r("paste")
                })
            }) : null
        }, Uu = t(13978), Wu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Gu = (0,
        Qe.F4)(cs || (cs = Wu(["\n  0% {\n    width: 0%;\n  }\n  10% {\n    width: 80%;\n  }\n  100% {\n    width: 100%;\n  }\n"], ["\n  0% {\n    width: 0%;\n  }\n  10% {\n    width: 80%;\n  }\n  100% {\n    width: 100%;\n  }\n"]))), Vu = (0,
        Qe.F4)(ss || (ss = Wu(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), qu = Qe.ZP.section(ps || (ps = Wu(["\n  padding: 10px 12px;\n  background: linear-gradient(270deg, #7B4CFF 77.6%, #0EA4C5 100%);\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  width: 100%;\n  z-index: ", ";\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: white;\n  animation: ", " 2s ease-out;\n  ", "\n\n  img {\n    border-radius: 3px;\n  }\n  h4 {\n    font-weight: 700;\n    text-overflow: ellipsis;\n    text-wrap: nowrap;\n    overflow: hidden;\n    padding-right: 12px;\n  }\n  p {\n    margin-left: auto;\n    color: ", ";\n    text-wrap: nowrap;\n  }\n\n  &::after, &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 4px;\n    transform: translateY(-4px);\n  }\n\n  &::before {\n    background-color: ", ";\n  }\n  &::after {\n    width: 50%;\n    background-color: ", ";\n    animation: ", " 60s ease-out;\n  }\n"], ["\n  padding: 10px 12px;\n  background: linear-gradient(270deg, #7B4CFF 77.6%, #0EA4C5 100%);\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  width: 100%;\n  z-index: ", ";\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: white;\n  animation: ", " 2s ease-out;\n  ", "\n\n  img {\n    border-radius: 3px;\n  }\n  h4 {\n    font-weight: 700;\n    text-overflow: ellipsis;\n    text-wrap: nowrap;\n    overflow: hidden;\n    padding-right: 12px;\n  }\n  p {\n    margin-left: auto;\n    color: ", ";\n    text-wrap: nowrap;\n  }\n\n  &::after, &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 4px;\n    transform: translateY(-4px);\n  }\n\n  &::before {\n    background-color: ", ";\n  }\n  &::after {\n    width: 50%;\n    background-color: ", ";\n    animation: ", " 60s ease-out;\n  }\n"])), (function(n) {
            return n.isDesktop ? "52px" : "0"
        }
        ), (function(n) {
            return n.isAppPage ? "1" : "20"
        }
        ), Vu, (function(n) {
            var e = n.isMobile
              , t = n.isAppPage;
            return !e && t && (0,
            Qe.iv)(us || (us = Wu(["\n    transform: translateY(100%);\n  "], ["\n    transform: translateY(100%);\n  "])))
        }
        ), (function(n) {
            return n.theme.colors.white70
        }
        ), (function(n) {
            return n.theme.colors.black60
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), Gu), Qu = function(n) {
            var e = n.gameName
              , t = n.gameIcon
              , i = n.isMobile
              , o = n.isAppPage
              , r = n.isDesktop;
            return (0,
            et.BX)(qu, {
                isMobile: i,
                isDesktop: r,
                isAppPage: o,
                children: [(0,
                et.tZ)("img", {
                    src: t,
                    alt: "",
                    width: 32,
                    height: 32
                }), (0,
                et.tZ)(Ot.js, {
                    children: (0,
                    Uu.t)("gameLaunchAfterAd", {
                        gameName: e
                    })
                }), (0,
                et.tZ)(Ot.lU, {
                    children: (0,
                    Uu.t)("seconds", {
                        seconds: 30
                    })
                })]
            })
        }, Ju = t(29871), $u = {
            src: "/play/_next/static/media/secure-notification-bg.55642608.svg",
            height: 64,
            width: 579
        }, np = {
            src: "/play/_next/static/media/cloud-phone-landscape.c5def59c.png",
            height: 128,
            width: 230,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVMaXGZfIHHs7ZqXmrrq3BARl61lpnnl2mgiIR6eYX/31/ll5Tov5NETkN1ZHZrXX1PY3NOWnN6d294OXJkbeY/AAAADXRSTlMAv6b15Pm+JPWoEFnecSlxKQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACdJREFUeJxjYGDgFBRgZAABNmFeDnYQg4mflY+bgYGBi0eImYOFHQANfwDOIngQ/QAAAABJRU5ErkJggg=="
        }, ep = {
            src: "/play/_next/static/media/cloud-phone-portrait.9e66752e.png",
            height: 210,
            width: 190,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAY1BMVEVMaXH///9qZX35q6t9Z3hFS2DytVjwt69TZYpOY4SCcXRJXXNWZ3j/yLD/z4r/3tlLSHFrGmA9UDfZmpTfinzOhEvqqZjpsVVNUmZTWm6OdIaPiY5CYmqsg5nkpEahmIHopnvxi7WIAAAAGnRSTlMADNAr/Pv+OCM99aO2Qd5m/f7+0lrSmEj+/r2AYzgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA9SURBVHicBcEHAoAgDACxU5ku3Lbg+v8rTSDEGAA6lboCehXjYcjT1Tbg73l5PaRirdlgLKL5APfs6+fOH0qlAtYvPtsVAAAAAElFTkSuQmCC"
        }, tp = {
            src: "/play/_next/static/media/secure-shield.cd1f691a.png",
            height: 36,
            width: 36,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEUTFBaSeUkkIhxORTYlK1KdiF+3llRDPC0bGxszLiR6b1+miVhITWmHcFZ7cWlQV3lub4N1cnyajnZcYoKJg31oXFlvWzWGazkxPWhxa2VeWEs9QV+9p3ykloHDsPd9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVR4nAXBBQKAMAwEsJu2nRsO//8mCQAajhiQsGYfkXC3OpfNB0wvn7N5B7XXPTYa6Kumc/MMUEnBC8AQpTT4B2r7Ar17z8aiAAAAAElFTkSuQmCC"
        }, ip = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, op = (0,
        Qe.F4)(fs || (fs = ip(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"]))), rp = (0,
        Qe.F4)(hs || (hs = ip(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"]))), ap = Qe.ZP.div(gs || (gs = ip(["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  transform: rotate(180deg);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n\n  div {\n    overflow: hidden;\n    position: absolute;\n    width: 50%;\n    height: 100%;\n  }\n\n  .loader {\n    position: absolute;\n    left: 100%;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 1000px;\n    background-color: ", ";\n  }\n\n  .left-wrap .loader {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    transform-origin: 0 50% 0;\n    animation: ", " ", "s linear;\n  }\n\n  .right-wrap {\n    left: 50%;\n  }\n\n  .right-wrap .loader {\n    left: -100%;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    transform-origin: 100% 50% 0;\n    animation: ", " ", "s linear;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  transform: rotate(180deg);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n\n  div {\n    overflow: hidden;\n    position: absolute;\n    width: 50%;\n    height: 100%;\n  }\n\n  .loader {\n    position: absolute;\n    left: 100%;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 1000px;\n    background-color: ", ";\n  }\n\n  .left-wrap .loader {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    transform-origin: 0 50% 0;\n    animation: ", " ", "s linear;\n  }\n\n  .right-wrap {\n    left: 50%;\n  }\n\n  .right-wrap .loader {\n    left: -100%;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    transform-origin: 100% 50% 0;\n    animation: ", " ", "s linear;\n  }\n"])), (function(n) {
            return n.diameter
        }
        ), (function(n) {
            return n.diameter
        }
        ), (function(n) {
            return n.trackColor
        }
        ), (function(n) {
            return n.diameter
        }
        ), (function(n) {
            return n.diameter - 2 * n.border
        }
        ), (function(n) {
            return n.diameter - 2 * n.border
        }
        ), (function(n) {
            return n.backgroundColor
        }
        ), (function(n) {
            return n.movingColor
        }
        ), op, (function(n) {
            return n.duration
        }
        ), rp, (function(n) {
            return n.duration
        }
        )), lp = function(n) {
            var e = n.diameter
              , t = void 0 === e ? 40 : e
              , i = n.border
              , o = void 0 === i ? 5 : i
              , r = n.backgroundColor
              , a = void 0 === r ? "#7B4CFF" : r
              , l = n.movingColor
              , d = void 0 === l ? "white" : l
              , c = n.trackColor
              , s = void 0 === c ? $l.qm.colors.white20 : c
              , u = n.duration
              , p = void 0 === u ? 5 : u;
            return (0,
            et.BX)(ap, {
                diameter: t,
                border: o,
                backgroundColor: a,
                movingColor: d,
                trackColor: s,
                duration: p,
                children: [(0,
                et.tZ)("div", {
                    className: "left-wrap",
                    children: (0,
                    et.tZ)("div", {
                        className: "loader"
                    })
                }), (0,
                et.tZ)("div", {
                    className: "right-wrap",
                    children: (0,
                    et.tZ)("div", {
                        className: "loader"
                    })
                })]
            })
        }, dp = t(95860), cp = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, sp = function(n) {
            var e = n.isPortrait
              , t = void 0 !== e && e
              , i = n.isMobile
              , o = void 0 !== i && i;
            return (0,
            Qe.iv)(ms || (ms = cp(["\n  height: calc(var(--overlay-width) * ", "px) !important;\n  background: none;\n  transform: translateY(-1px);\n\n  &.modal-overlay {\n    ", "\n  }\n"], ["\n  height: calc(var(--overlay-width) * ", "px) !important;\n  background: none;\n  transform: translateY(-1px);\n\n  &.modal-overlay {\n    ", "\n  }\n"])), t ? "0.121" : "0.06", o && (0,
            Qe.iv)(vs || (vs = cp(["\n      top: 0 !important;\n      width: 100% !important;\n      left: 0 !important;\n    "], ["\n      top: 0 !important;\n      width: 100% !important;\n      left: 0 !important;\n    "]))))
        }, up = (0,
        Qe.iv)(xs || (xs = cp(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  backdrop-filter: none;\n  background: none;\n  overflow: hidden;\n  position: relative;\n\n  & > div {\n    margin: 0;\n    color: ", ";\n    height: 100%;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  backdrop-filter: none;\n  background: none;\n  overflow: hidden;\n  position: relative;\n\n  & > div {\n    margin: 0;\n    color: ", ";\n    height: 100%;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), pp = (0,
        Qe.F4)(ys || (ys = cp(["\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n"]))), fp = (0,
        Qe.F4)(ws || (ws = cp(["\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n"], ["\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n"]))), hp = Qe.ZP.div(bs || (bs = cp(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  backdrop-filter: blur(60px);\n  transition: all 0.3s ease-out;\n  transform: translateY(0);\n  animation: ", " 0.3s ease-out;\n\n  img.device {\n    height: 100%;\n    width: ", ";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    width: 100%;\n    z-index: 1;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  backdrop-filter: blur(60px);\n  transition: all 0.3s ease-out;\n  transform: translateY(0);\n  animation: ", " 0.3s ease-out;\n\n  img.device {\n    height: 100%;\n    width: ", ";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    width: 100%;\n    z-index: 1;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  }\n"])), (function(n) {
            return n.theme.colors.black90
        }
        ), (function(n) {
            return n.toggle ? pp : fp
        }
        ), (function(n) {
            return n.isPortrait ? "95px" : "calc(var(--overlay-width) * 0.11px)"
        }
        )), gp = Qe.ZP.div(Ts || (Ts = cp(["\n  position: absolute;\n  width: 100%;\n  min-height: ", ";\n  height: ", ";\n  padding: ", ";\n  padding-left: ", ";\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  ", "\n\n  &:nth-child(2) {\n    ", "\n  }\n\n  &:nth-child(3) {\n    ", "\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  min-height: ", ";\n  height: ", ";\n  padding: ", ";\n  padding-left: ", ";\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  ", "\n\n  &:nth-child(2) {\n    ", "\n  }\n\n  &:nth-child(3) {\n    ", "\n  }\n"])), (function(n) {
            return n.isPortrait ? "50%" : "100%"
        }
        ), (function(n) {
            return n.isPortrait ? "fit-content" : "100%"
        }
        ), (function(n) {
            return n.isPortrait ? "4px" : "0px"
        }
        ), (function(n) {
            return n.isPortrait ? "95px" : "0"
        }
        ), (function(n) {
            var e = n.isBottom
              , t = n.theme
              , i = n.isPortrait;
            return (0,
            Qe.iv)(As || (As = cp(["\n    ", "\n  "], ["\n    ", "\n  "])), e && i ? (0,
            Qe.iv)(Zs || (Zs = cp(["\n      bottom: 0; background-color: ", ";\n    "], ["\n      bottom: 0; background-color: ", ";\n    "])), t.colors.white10) : "top: 0;")
        }
        ), (function(n) {
            return n.isPortrait && (0,
            Qe.iv)(ks || (ks = cp(["\n    h5 {\n      font-size: 12.5px;\n    }\n  "], ["\n    h5 {\n      font-size: 12.5px;\n    }\n  "])))
        }
        ), (function(n) {
            return !n.isPortrait && (0,
            Qe.iv)(Ss || (Ss = cp(["\n      margin-left: calc(var(--overlay-width) * 0.11px);\n    "], ["\n      margin-left: calc(var(--overlay-width) * 0.11px);\n    "])))
        }
        ), (function(n) {
            return n.isPortrait ? (0,
            Qe.iv)(Es || (Es = cp(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "]))) : (0,
            Qe.iv)(Ps || (Ps = cp(["\n      width: 60%;\n      right: 0;\n      padding-right: calc(var(--overlay-width) * 0.084px);\n      padding-left: 10%;\n      display: flex;\n      justify-content: center;\n    "], ["\n      width: 60%;\n      right: 0;\n      padding-right: calc(var(--overlay-width) * 0.084px);\n      padding-left: 10%;\n      display: flex;\n      justify-content: center;\n    "])))
        }
        )), vp = Qe.ZP.img(Cs || (Cs = cp(["\n  max-width: 100% !important;\n  width: 100%;\n  position: absolute;\n  right: 0;\n"], ["\n  max-width: 100% !important;\n  width: 100%;\n  position: absolute;\n  right: 0;\n"]))), mp = Qe.ZP.div(Ds || (Ds = cp(["\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--overlay-width) * 0.001px);\n  p {\n    font-size: calc(var(--overlay-width) * 0.013px);\n    line-height: calc(var(--overlay-width) * 0.018px);\n  }\n  h5 {\n    font-size: calc(var(--overlay-width) * 0.015px);\n    line-height: calc(var(--overlay-width) * 0.020px);\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--overlay-width) * 0.001px);\n  p {\n    font-size: calc(var(--overlay-width) * 0.013px);\n    line-height: calc(var(--overlay-width) * 0.018px);\n  }\n  h5 {\n    font-size: calc(var(--overlay-width) * 0.015px);\n    line-height: calc(var(--overlay-width) * 0.020px);\n  }\n"]))), xp = Qe.ZP.div(Is || (Is = cp(["\n  display: flex;\n  gap: calc(var(--overlay-width) * 0.008px);\n  align-items: center;\n"], ["\n  display: flex;\n  gap: calc(var(--overlay-width) * 0.008px);\n  align-items: center;\n"]))), yp = (0,
        Qe.ZP)(Ot.gd)(Rs || (Rs = cp(["\n  color: #E4B95E;\n"], ["\n  color: #E4B95E;\n"]))), wp = Qe.ZP.div(Os || (Os = cp(["\n  display: flex;\n  gap: calc(var(--overlay-width) * 0.042px);\n  z-index: 1;\n  position: relative;\n  p {\n    font-size: calc(var(--overlay-width) * 0.013px);\n    line-height: calc(var(--overlay-width) * 0.018px);\n  }\n  h5 {\n    font-size: calc(var(--overlay-width) * 0.015px);\n    line-height: calc(var(--overlay-width) * 0.020px);\n  }\n"], ["\n  display: flex;\n  gap: calc(var(--overlay-width) * 0.042px);\n  z-index: 1;\n  position: relative;\n  p {\n    font-size: calc(var(--overlay-width) * 0.013px);\n    line-height: calc(var(--overlay-width) * 0.018px);\n  }\n  h5 {\n    font-size: calc(var(--overlay-width) * 0.015px);\n    line-height: calc(var(--overlay-width) * 0.020px);\n  }\n"]))), bp = Qe.ZP.div(Ls || (Ls = cp(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: calc(var(--overlay-width) * 0.004px);\n\n  h5 {\n    text-wrap: balance;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: calc(var(--overlay-width) * 0.004px);\n\n  h5 {\n    text-wrap: balance;\n  }\n"]))), Zp = Qe.ZP.div(Bs || (Bs = cp(["\n  border-radius: 12px;\n  background: ", ";\n  padding: 0 calc(var(--overlay-width) * 0.005px);\n  text-transform: uppercase;\n  font-size: calc(var(--overlay-width) * 0.01px);\n  font-weight: 600;\n  line-height: 150%;\n\n  ", "\n"], ["\n  border-radius: 12px;\n  background: ", ";\n  padding: 0 calc(var(--overlay-width) * 0.005px);\n  text-transform: uppercase;\n  font-size: calc(var(--overlay-width) * 0.01px);\n  font-weight: 600;\n  line-height: 150%;\n\n  ", "\n"])), (function(n) {
            return n.theme.colors.black40
        }
        ), (function(n) {
            var e = n.isPortrait
              , t = n.theme;
            return e && (0,
            Qe.iv)(Ms || (Ms = cp(["\n    background-color: ", ";\n    font-size: calc(var(--overlay-width) * 0.009px);\n  "], ["\n    background-color: ", ";\n    font-size: calc(var(--overlay-width) * 0.009px);\n  "])), t.colors.white20)
        }
        )), Ap = Qe.ZP.div(Ns || (Ns = cp(["\n  ", "\n  position: absolute;\n  right: calc(var(--overlay-width) * 0.011px);\n  top: 50%;\n  transform: translateY(-50%);\n\n  ", "\n\n  & > div {\n    position: absolute;\n    transition: all 0.6s ease-out;\n    opacity: ", ";\n  }\n\n  i {\n    cursor: pointer;\n  }\n"], ["\n  ", "\n  position: absolute;\n  right: calc(var(--overlay-width) * 0.011px);\n  top: 50%;\n  transform: translateY(-50%);\n\n  ", "\n\n  & > div {\n    position: absolute;\n    transition: all 0.6s ease-out;\n    opacity: ", ";\n  }\n\n  i {\n    cursor: pointer;\n  }\n"])), dp.be, (function(n) {
            return n.isPortrait && (0,
            Qe.iv)(Xs || (Xs = cp(["\n    top: 16px;\n    right: 8px;\n  "], ["\n    top: 16px;\n    right: 8px;\n  "])))
        }
        ), (function(n) {
            return n.toggle ? "1" : "0"
        }
        )), kp = function(n) {
            var e = n.toggle
              , t = (0,
            Ye.useState)(!0)
              , i = t[0]
              , o = t[1]
              , r = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , a = ((0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            )),
            (0,
            He.v9)((function(n) {
                return n.play.deviceLocationDisplayString
            }
            )))
              , l = (0,
            He.I0)()
              , d = qe.cj.portrait === r;
            (0,
            Ye.useEffect)((function() {
                setTimeout((function() {
                    o(!i)
                }
                ), 5e3)
            }
            ), []);
            return (0,
            et.tZ)(Ju.Z, {
                overlayStyles: sp({
                    isPortrait: d,
                    isMobile: (0,
                    Ge.tq)()
                }),
                modalStyles: up,
                children: (0,
                et.BX)(hp, {
                    isPortrait: d,
                    toggle: e,
                    children: [(0,
                    et.tZ)("img", {
                        className: "device",
                        src: (0,
                        ti.j)(d ? ep : np),
                        alt: ""
                    }), (0,
                    et.tZ)(gp, {
                        isPortrait: d,
                        children: (0,
                        et.BX)(mp, {
                            children: [(0,
                            et.tZ)(Ot.QV, {
                                children: (0,
                                Uu.t)("signingToCloudService")
                            }), (0,
                            et.BX)(xp, {
                                children: [(0,
                                et.tZ)("img", {
                                    src: (0,
                                    ti.j)(tp),
                                    width: 18,
                                    height: 18,
                                    alt: ""
                                }), (0,
                                et.tZ)(yp, {
                                    children: (0,
                                    Uu.t)("securePlatform")
                                })]
                            })]
                        })
                    }), (0,
                    et.BX)(gp, {
                        isBottom: !0,
                        isPortrait: d,
                        children: [!d && (0,
                        et.tZ)(vp, {
                            src: (0,
                            ti.j)($u),
                            alt: ""
                        }), (0,
                        et.BX)(wp, {
                            children: [(0,
                            et.BX)(bp, {
                                children: [(0,
                                et.tZ)(Zp, {
                                    isPortrait: d,
                                    children: (0,
                                    Uu.t)("cloudDevice")
                                }), (0,
                                et.tZ)(Ot.QV, {
                                    children: "Galaxy S20 Plus"
                                })]
                            }), (0,
                            et.BX)(bp, {
                                children: [(0,
                                et.tZ)(Zp, {
                                    isPortrait: d,
                                    children: (0,
                                    Uu.t)("cloudDeviceLocation")
                                }), (0,
                                et.tZ)(Ot.QV, {
                                    children: a
                                })]
                            })]
                        })]
                    }), (0,
                    et.BX)(Ap, {
                        toggle: i,
                        isPortrait: d,
                        children: [(0,
                        et.tZ)(Rt.Z, {
                            toggle: i,
                            exitingDelay: .6,
                            children: (0,
                            et.tZ)(lp, {
                                diameter: 14,
                                border: 1,
                                duration: 5
                            })
                        }), (0,
                        et.tZ)(Ea.Z, {
                            style: {
                                padding: "10px"
                            },
                            name: "cross-thin",
                            size: 11,
                            onClick: function() {
                                l({
                                    type: Et.Z.UPDATE_PLAY_STATE,
                                    payload: {
                                        androidActivityName: ""
                                    }
                                })
                            }
                        })]
                    })]
                })
            })
        }, Sp = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ep = Qe.ZP.div(zs || (zs = Sp(["\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n   ", "\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n\n  .--fullscreen & {\n    max-height: 100vh;\n    padding: 16px 0px;\n  }\n  ", ";\n"], ["\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n   ", "\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n\n  .--fullscreen & {\n    max-height: 100vh;\n    padding: 16px 0px;\n  }\n  ", ";\n"])), (function(n) {
            return n.isLandscape && (0,
            Qe.iv)(Ks || (Ks = Sp(["\n      max-height: 100vh;\n      @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: 100vw !important;\n      }\n   "], ["\n      max-height: 100vh;\n      @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: 100vw !important;\n      }\n   "])))
        }
        ), (function(n) {
            return n.isMobile && (0,
            Qe.iv)(js || (js = Sp(["max-height: 100vh"], ["max-height: 100vh"])))
        }
        )), Pp = Qe.ZP.video(Ys || (Ys = Sp(["\n  background:#000;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  &.inverted {\n    transform-origin: top left;\n    transform: scaleY(-1) translate(-50%, -50%);\n  }\n  &.landscape {\n    &-1 {\n      transform-origin: top left;\n      transform: rotate(-90deg) translate(-50%, -50%);\n    }\n    &-3 {\n      transform-origin: top left;\n      transform: rotate(-270deg) translate(-50%, -50%);\n    }\n  }\n  &.isRecording {\n    top: calc(50% - 36px) !important;\n  }\n  .--adBlocked & {\n    top: calc(50% + 7.10vw) !important;\n    transform: translate(calc(-50% + 3.55vw), -50%);\n    &.inverted {\n      transform-origin: top left;\n      transform: scaleY(-1) translate(calc(-50% + 3.55vw), -50%);\n    }\n    &.landscape {\n      &-1 {\n        transform-origin: top left;\n        transform: rotate(-90deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n      &-3 {\n        transform-origin: top left;\n        transform: rotate(-270deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n    }\n  }\n  @media screen and (max-width: 600px){\n    background: ", ";\n    position: absolute;\n    overflow: hidden;\n    object-fit: fill;\n  }\n"], ["\n  background:#000;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  &.inverted {\n    transform-origin: top left;\n    transform: scaleY(-1) translate(-50%, -50%);\n  }\n  &.landscape {\n    &-1 {\n      transform-origin: top left;\n      transform: rotate(-90deg) translate(-50%, -50%);\n    }\n    &-3 {\n      transform-origin: top left;\n      transform: rotate(-270deg) translate(-50%, -50%);\n    }\n  }\n  &.isRecording {\n    top: calc(50% - 36px) !important;\n  }\n  .--adBlocked & {\n    top: calc(50% + 7.10vw) !important;\n    transform: translate(calc(-50% + 3.55vw), -50%);\n    &.inverted {\n      transform-origin: top left;\n      transform: scaleY(-1) translate(calc(-50% + 3.55vw), -50%);\n    }\n    &.landscape {\n      &-1 {\n        transform-origin: top left;\n        transform: rotate(-90deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n      &-3 {\n        transform-origin: top left;\n        transform: rotate(-270deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n    }\n  }\n  @media screen and (max-width: 600px){\n    background: ", ";\n    position: absolute;\n    overflow: hidden;\n    object-fit: fill;\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        )), Tp = Qe.ZP.div(_s || (_s = Sp(["\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    z-index: 5;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n\n    .back-btn {\n      ", ";\n    }\n    p {\n      margin-bottom: 0;\n      padding: 0;\n    }\n\n    ", "\n"], ["\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    z-index: 5;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n\n    .back-btn {\n      ", ";\n    }\n    p {\n      margin-bottom: 0;\n      padding: 0;\n    }\n\n    ", "\n"])), (function(n) {
            return !n.isMobile && "gap: 10px"
        }
        ), (function(n) {
            return n.isMobile && (0,
            Qe.iv)(Hs || (Hs = Sp(["\n      left: 16px;\n      top: 16px;\n    "], ["\n      left: 16px;\n      top: 16px;\n    "])))
        }
        )), Cp = t(36716), Dp = t(57981), Ip = t(57762), Rp = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Op = Qe.ZP.div(Fs || (Fs = Rp(["\n   position: relative;\n"], ["\n   position: relative;\n"]))), Lp = Qe.ZP.div(Us || (Us = Rp(["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    color: ", ";\n    display: inline-block;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    z-index: 10;\n    width: fit-content;\n    padding: 8px 16px;\n    border: ", ";\n"], ["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    color: ", ";\n    display: inline-block;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    z-index: 10;\n    width: fit-content;\n    padding: 8px 16px;\n    border: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.base
        }
        )), Mp = Qe.ZP.div(Ws || (Ws = Rp(["\n    position: absolute;\n    z-index: 20;\n    max-width: 459px;\n    top: 60px;\n    background: rgba(0, 0, 0, 0.8);\n    box-shadow: ", ";\n    border-radius: 0 6px 0 6px;\n    padding: 12px 16px 15px;\n    pointer-events: none;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      transform: scale(.7);\n      transform-origin: top left;\n  }\n"], ["\n    position: absolute;\n    z-index: 20;\n    max-width: 459px;\n    top: 60px;\n    background: rgba(0, 0, 0, 0.8);\n    box-shadow: ", ";\n    border-radius: 0 6px 0 6px;\n    padding: 12px 16px 15px;\n    pointer-events: none;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      transform: scale(.7);\n      transform-origin: top left;\n  }\n"])), (function(n) {
            return n.theme.shadow.big
        }
        )), Bp = Qe.ZP.p(Gs || (Gs = Rp(["\n    letter-spacing: 0.05em;\n    font-weight: 500;\n    color: ", ";\n    opacity: 0.8;\n    margin-bottom: 8px;\n    margin-top: 5px;\n    font-size: 12px;\n    line-height: 15px;\n"], ["\n    letter-spacing: 0.05em;\n    font-weight: 500;\n    color: ", ";\n    opacity: 0.8;\n    margin-bottom: 8px;\n    margin-top: 5px;\n    font-size: 12px;\n    line-height: 15px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Xp = Qe.ZP.div(Vs || (Vs = Rp(["\n    display: flex;\n    flex-direction: row;\n"], ["\n    display: flex;\n    flex-direction: row;\n"]))), Np = Qe.ZP.div(qs || (qs = Rp(["\n    display: flex;\n    margin-left: auto;\n    cursor: pointer;\n    pointer-events: auto;\n    span {\n        margin-left: 10px;\n    }\n"], ["\n    display: flex;\n    margin-left: auto;\n    cursor: pointer;\n    pointer-events: auto;\n    span {\n        margin-left: 10px;\n    }\n"]))), Kp = Qe.ZP.div(Qs || (Qs = Rp(["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"], ["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"]))), jp = Qe.ZP.div(Js || (Js = Rp(["\n    color: ", ";\n    display: grid;\n    margin-top: 5px;\n    grid-template-columns: 111px 14px 302px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n    p {\n        font-size: 11px;\n    }\n"], ["\n    color: ", ";\n    display: grid;\n    margin-top: 5px;\n    grid-template-columns: 111px 14px 302px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n    p {\n        font-size: 11px;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), zp = Qe.ZP.div($s || ($s = Rp(["\n    display: flex;\n    color: ", ";\n    margin-top: 8px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n"], ["\n    display: flex;\n    color: ", ";\n    margin-top: 8px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Yp = Qe.ZP.div(nu || (nu = Rp(["\n    color: ", ";\n    display: grid;\n    margin-top: 8px;\n    grid-template-columns: 200px 200px;\n"], ["\n    color: ", ";\n    display: grid;\n    margin-top: 8px;\n    grid-template-columns: 200px 200px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Hp = (0,
        Qe.ZP)(Ip.__)(eu || (eu = Rp(["\n    > span:before {\n        background-color: ", ";\n    }\n    > span {\n        border-color: ", ";\n    }\n"], ["\n    > span:before {\n        background-color: ", ";\n    }\n    > span {\n        border-color: ", ";\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ));
        function _p(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function Fp(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _p(Object(t), !0).forEach((function(e) {
                    (0,
                    cl.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : _p(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var Up = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , Wp = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }
          , Gp = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var i, o = 0, r = e.length; o < r; o++)
                    !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)),
                    i[o] = e[o]);
            return n.concat(i || Array.prototype.slice.call(e))
        }
          , Vp = function() {
            var n, e = (0,
            Dt.$)().t, t = (0,
            He.I0)(), i = (0,
            Ye.useState)(["platform", "appPackage", "country", "connectionState", "ping", "currentResolution", "framesPerSecond", "clientID", "sessionID", "buildVersion"]), o = i[0], r = i[1], a = (0,
            Ye.useContext)(dl.Z), l = (0,
            He.v9)((function(n) {
                return n.play.peerConnectionState
            }
            )), d = (0,
            He.v9)((function(n) {
                return n.play.peerConnection
            }
            )), c = (0,
            He.v9)((function(n) {
                return n.play.isNerdMode
            }
            )), s = (0,
            He.v9)((function(n) {
                return n.play.tpEnabled
            }
            )), u = kt.Z.getState(), p = "", f = "", h = "", g = "", v = u.play.videoRef;
            v && v.current && (f = v.current.offsetHeight.toString(),
            p = v.current.offsetWidth.toString());
            var m = Ue.ZP.countryCode || "-"
              , x = ["bitrate", "codec", "packets"]
              , y = new Map([["bitrate", "videoBitrate"], ["codec", "videoCodec"], ["packets", "videoPackets"]])
              , w = new Map([["bitrate", "audioBitrate"], ["codec", "audioCodec"], ["packets", "audioPackets"]])
              , b = (0,
            Ye.useState)(new Map([["platform", null === (n = (0,
            Ge.Tb)().description) || void 0 === n ? void 0 : n.split(" ").join(" ")], ["appPackage", a.packageName], ["country", m], ["connectionState", l || "NA"], ["ping", "0ms"], ["currentResolution", ""], ["framesPerSecond", "0"], ["clientID", (0,
            Ge.Fz)(Lt.nP)], ["sessionID", (0,
            Ge.io)(Lt.K3)], ["buildVersion", Dp.f4], ["viewport", ""], ["devicePixelRatio", ""], ["frames", ""], ["videoBitrate", ""], ["videoCodec", ""], ["videoPackets", ""], ["audioBitrate", ""], ["audioCodec", ""], ["audioPackets", ""]]))
              , Z = b[0]
              , A = b[1]
              , k = (0,
            Ye.useState)({})
              , S = k[0]
              , E = k[1]
              , P = (0,
            Ye.useState)(!1)
              , T = P[0]
              , C = P[1]
              , D = (0,
            Ye.useState)(0)
              , I = D[0]
              , R = D[1]
              , O = (0,
            Ye.useRef)(null)
              , L = (0,
            He.v9)((function(n) {
                return n.ads.inGameAd
            }
            ));
            function M(n) {
                var e = parseInt(n, 10);
                return e && e > 0 ? "".concat(parseInt((e / 1e3).toString(), 10), " kHz") : "0 kHz"
            }
            function B(n) {
                var e = parseInt(n, 10);
                return e && e > 0 ? "".concat(parseFloat((e / 1e3).toString()).toFixed(2), " kbps") : "0 kbps"
            }
            function X(n) {
                var t, i, o, r, a, l, d = null === (i = null === (t = null === n || void 0 === n ? void 0 : n.data) || void 0 === t ? void 0 : t.connection) || void 0 === i ? void 0 : i.currentRoundTripTime, c = null === (r = null === (o = n.data) || void 0 === o ? void 0 : o.video) || void 0 === r ? void 0 : r.inbound[0], s = null === (l = null === (a = n.data) || void 0 === a ? void 0 : a.audio) || void 0 === l ? void 0 : l.inbound[0], u = c.frameWidth && c.frameHeight ? "".concat(c.frameWidth, " x ").concat(c.frameHeight) : "", p = !!c.framesPerSecond && c.framesPerSecond, f = "".concat(c.mimeType || "NA", "-").concat(M(c.clockRate || "0")), h = "".concat(s.mimeType || "NA", "-").concat(M(s.clockRate || "0")), g = B(c ? c.bitrate : "0"), v = B(s ? s.bitrate : "0"), m = "".concat(c.packetsLost || "0", " ").concat(e("frameLost"), " ").concat(c.packetsReceived || "0"), x = "".concat(s.packetsLost || "0", " ").concat(e("frameLost"), " ").concat(s.packetsReceived || "0");
                A((function(n) {
                    var e = new Map(n);
                    return d && e.set("ping", "".concat(parseFloat((1e3 * d).toString()).toFixed(2), "ms")),
                    u ? e.set("currentResolution", u) : e.delete("currentResolution"),
                    p ? e.set("framesPerSecond", p) : e.delete("framesPerSecond"),
                    f ? e.set("videoCodec", f) : e.delete("videoCodec"),
                    h ? e.set("audioCodec", h) : e.delete("audioCodec"),
                    g ? e.set("videoBitrate", g) : e.delete("videoBitrate"),
                    v ? e.set("audioBitrate", v) : e.delete("audioBitrate"),
                    m ? e.set("videoPackets", m) : e.delete("videoPackets"),
                    x ? e.set("audioPackets", x) : e.delete("audioPackets"),
                    e
                }
                ))
            }
            (0,
            Ye.useEffect)((function() {
                if (c) {
                    if ((0,
                    zi.qO)("1"),
                    d instanceof RTCPeerConnection) {
                        var n = void 0;
                        S instanceof Cp.Q ? n = S : (n = new Cp.Q({
                            getStatsInterval: 1e3
                        }),
                        E(n));
                        try {
                            n.addPeer({
                                pc: d,
                                peerId: "1"
                            }),
                            n.on("stats", X)
                        } catch (e) {
                            (0,
                            Dp.ZP)(e)
                        }
                    }
                } else
                    S instanceof Cp.Q && (S.removePeer("1"),
                    S.removeListener("stats", X),
                    (0,
                    zi.qO)("0"));
                return function() {
                    S instanceof Cp.Q && (S.removePeer("1"),
                    S.removeListener("stats", X))
                }
            }
            ), [c]),
            (0,
            Ye.useEffect)((function() {
                A((function(n) {
                    return n.set("connectionState", l || "NA"),
                    n.set("clientID", (0,
                    Ge.Fz)(Lt.nP) || ""),
                    n.set("sessionID", (0,
                    Ge.io)(Lt.K3) || ""),
                    n
                }
                ))
            }
            ), [l]),
            (0,
            Ye.useEffect)((function() {
                7 === I && (r((function(n) {
                    return Gp(Gp([], n, !0), ["viewport", "devicePixelRatio", "frames"], !1)
                }
                )),
                O.current = setInterval((function() {
                    !function() {
                        if (v && v.current) {
                            var n = v.current.getVideoPlaybackQuality();
                            0 !== n.totalVideoFrames && I >= 7 && (h = n.totalVideoFrames.toString(),
                            g = n.droppedVideoFrames.toString(),
                            A((function(n) {
                                var t = new Map(n);
                                return t.set("frames", "".concat(g, " ").concat(e("frameDrop"), " ").concat(h)),
                                t
                            }
                            )))
                        }
                    }()
                }
                ), 1e3),
                A((function(n) {
                    return n.set("viewport", "".concat(f, " x ").concat(p)),
                    n.set("devicePixelRatio", parseFloat(window.devicePixelRatio.toString()).toFixed(2)),
                    n
                }
                )))
            }
            ), [I]);
            function N(n, e) {
                return n ? "connected" === e ? {
                    lightGreen: !0
                } : {
                    red: !0
                } : {}
            }
            return (0,
            et.BX)(Op, {
                children: [T && (0,
                et.tZ)(Lp, {
                    children: (0,
                    et.tZ)(Ot.kk, {
                        style: {
                            margin: 0
                        },
                        children: e("copiedToClipboard")
                    })
                }), c && (0,
                et.BX)(Mp, {
                    style: L === Lt.us ? {
                        top: 0
                    } : {},
                    children: [(0,
                    et.BX)(Xp, {
                        style: {
                            color: "white"
                        },
                        children: [(0,
                        et.tZ)(Ot.T6, {
                            med: !0,
                            style: {
                                margin: 0
                            },
                            children: e("nerdMode")
                        }), (0,
                        et.BX)(Np, {
                            children: [(0,
                            et.tZ)(Ea.Z, {
                                name: "copy",
                                onClick: function() {
                                    return function() {
                                        return Up(this, void 0, void 0, (function() {
                                            var n;
                                            return Wp(this, (function(t) {
                                                switch (t.label) {
                                                case 0:
                                                    n = "",
                                                    R(I + 1),
                                                    Z.forEach((function(t, i) {
                                                        n += "".concat(e(i), " : ").concat(t, "\n")
                                                    }
                                                    )),
                                                    t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]),
                                                    [4, navigator.clipboard.writeText(n)];
                                                case 2:
                                                    return t.sent(),
                                                    C(!0),
                                                    setTimeout((function() {
                                                        C(!1)
                                                    }
                                                    ), 2e3),
                                                    [3, 4];
                                                case 3:
                                                    return t.sent(),
                                                    [3, 4];
                                                case 4:
                                                    return [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }()
                                },
                                size: 18
                            }), (0,
                            et.tZ)(Ea.Z, {
                                name: "divider",
                                size: 18
                            }), (0,
                            et.tZ)(Ea.Z, {
                                id: "ng-nerd-close",
                                name: "cross-thin",
                                onClick: function() {
                                    return R(0),
                                    clearInterval(O.current),
                                    A((function(n) {
                                        var e = new Map(n);
                                        return e.delete("frames"),
                                        e.delete("viewport"),
                                        e.delete("devicePixelRatio"),
                                        e
                                    }
                                    )),
                                    r((function(n) {
                                        var e = n;
                                        return e.filter((function(n) {
                                            return "frames" !== n && "viewport" !== n && "devicePixelRatio" !== n
                                        }
                                        ))
                                    }
                                    )),
                                    void t({
                                        type: Et.Z.START_CONNECTION,
                                        payload: {
                                            isNerdMode: !1
                                        }
                                    })
                                },
                                size: 18
                            })]
                        })]
                    }), (0,
                    et.tZ)(Bp, {
                        children: e("nerdModeDescription")
                    }), (0,
                    et.tZ)(Kp, {}), o.map((function(n) {
                        return (0,
                        et.BX)(jp, {
                            children: [(0,
                            et.tZ)(Ot.mH, {
                                style: {
                                    textAlign: "right",
                                    margin: 0,
                                    fontWeight: 400
                                },
                                children: e(n)
                            }), (0,
                            et.tZ)("div", {
                                children: ":"
                            }), (0,
                            et.tZ)(Ot.mH, Fp(Fp({}, N("connectionState" === n, Z.get(n))), {}, {
                                style: {
                                    letterSpacing: "0.05em",
                                    opacity: .8,
                                    margin: 0
                                },
                                children: Z.get(n) || ""
                            }))]
                        }, n)
                    }
                    )), (0,
                    et.BX)("div", {
                        style: {
                            color: "white",
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0px 0"
                        },
                        children: [(0,
                        et.tZ)(Ot.mH, {
                            style: {
                                margin: 0,
                                fontSize: 11,
                                fontWeight: 400
                            },
                            children: (0,
                            et.tZ)("strong", {
                                children: e("tp.toggle")
                            })
                        }), (0,
                        et.BX)(Hp, {
                            id: "ng-touch-points",
                            style: {
                                pointerEvents: "auto"
                            },
                            children: [(0,
                            et.tZ)("input", {
                                type: "checkbox",
                                checked: s,
                                onChange: function() {
                                    return n = s,
                                    (0,
                                    zi.CE)(n ? "0" : "1"),
                                    void t({
                                        type: Et.Z.TP_ENABLED,
                                        payload: {
                                            tpEnabled: !n
                                        }
                                    });
                                    var n
                                }
                            }), (0,
                            et.tZ)("span", {})]
                        })]
                    }), I >= 7 && (0,
                    et.BX)("div", {
                        style: {
                            marginTop: "8px"
                        },
                        children: [(0,
                        et.tZ)(Kp, {}), (0,
                        et.BX)(Yp, {
                            children: [(0,
                            et.BX)("div", {
                                children: [(0,
                                et.tZ)(Ot.mH, {
                                    style: {
                                        opacity: .8,
                                        margin: 0
                                    },
                                    children: e("video")
                                }), x.map((function(n) {
                                    return (0,
                                    et.BX)(zp, {
                                        children: [(0,
                                        et.tZ)(Ot.mH, {
                                            style: {
                                                margin: 0
                                            },
                                            children: e(n)
                                        }), " ", (0,
                                        et.tZ)("div", {
                                            children: ":"
                                        }), " ", (0,
                                        et.tZ)(Ot.mH, {
                                            style: {
                                                opacity: .8,
                                                margin: 0
                                            },
                                            children: Z.get(y.get(n) || "")
                                        })]
                                    })
                                }
                                ))]
                            }), (0,
                            et.BX)("div", {
                                children: [(0,
                                et.tZ)(Ot.mH, {
                                    style: {
                                        opacity: .8,
                                        margin: 0
                                    },
                                    children: e("audio")
                                }), x.map((function(n) {
                                    return (0,
                                    et.BX)(zp, {
                                        children: [(0,
                                        et.tZ)(Ot.mH, {
                                            style: {
                                                margin: 0
                                            },
                                            children: e(n)
                                        }), " ", (0,
                                        et.tZ)("div", {
                                            children: ":"
                                        }), " ", (0,
                                        et.tZ)(Ot.mH, {
                                            style: {
                                                opacity: .8,
                                                margin: 0
                                            },
                                            children: Z.get(w.get(n) || "")
                                        })]
                                    })
                                }
                                ))]
                            })]
                        })]
                    })]
                })]
            })
        }
          , qp = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , Qp = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        };
        function Jp(n) {
            n.preventDefault()
        }
        var $p, nf, ef, tf, of, rf, af, lf, df, cf, sf, uf, pf, ff, hf, gf, vf, mf, xf, yf, wf, bf, Zf, Af, kf, Sf, Ef, Pf, Tf, Cf, Df, If, Rf, Of, Lf, Mf, Bf, Xf, Nf, Kf, jf = function(n) {
            var e, t, i, o, r, a, l, d, c, s, u, p, f, h, g, v, m, x, y = n.overlayElement, w = (0,
            Ye.useRef)(null), b = (0,
            Ye.useRef)(null), Z = (0,
            He.I0)(), A = (0,
            Dt.$)().t, k = (0,
            He.v9)((function(n) {
                return n.play.isFullscreen
            }
            )), S = (0,
            He.v9)((function(n) {
                return n.play.isImeEnabled
            }
            )), E = (0,
            He.v9)((function(n) {
                return n.play.robloxToast
            }
            )), P = (0,
            He.v9)((function(n) {
                return n.play.androidActivityName
            }
            )), T = (0,
            He.v9)((function(n) {
                return n.support.showSupport
            }
            )), C = (0,
            He.v9)((function(n) {
                return n.play.sessionMigrated
            }
            )), D = (0,
            He.v9)((function(n) {
                return n.play.duplicateTab
            }
            )), I = (0,
            He.v9)((function(n) {
                return n.play.sessionComplete
            }
            )), R = (0,
            He.v9)((function(n) {
                return n.play.endingTryNow
            }
            )), O = (0,
            He.v9)((function(n) {
                return n.play.inactiveTimeout
            }
            )), L = (0,
            He.v9)((function(n) {
                return n.play.peerConnectionState
            }
            )), M = (0,
            He.v9)((function(n) {
                return n.play.showAboutUs
            }
            )), B = (0,
            He.v9)((function(n) {
                return n.play.showAllGamesOverlay
            }
            )), X = (0,
            He.v9)((function(n) {
                return n.play.showExploreGamesOverlay
            }
            )), N = (0,
            He.v9)((function(n) {
                return n.play.permissionType
            }
            )), K = (0,
            He.v9)((function(n) {
                return n.play.orientationValue
            }
            )), j = (0,
            He.v9)((function(n) {
                return n.auth.guestFlow
            }
            )), z = (0,
            He.v9)((function(n) {
                return n.play.consoleFooterRef
            }
            )), Y = (0,
            He.v9)((function(n) {
                return n.play.consoleHeaderRef
            }
            )), H = (0,
            He.v9)((function(n) {
                return n.play.showTimeLimitExceededScreen
            }
            )), _ = (0,
            He.v9)((function(n) {
                return n.appPreferences.volume
            }
            )), F = (0,
            He.v9)((function(n) {
                return n.play.muted
            }
            )), U = (0,
            He.v9)((function(n) {
                return n.ads.inGameAds
            }
            )), W = (0,
            He.v9)((function(n) {
                return n.ads.inGameAd
            }
            )), G = (0,
            He.v9)((function(n) {
                return n.ads.midRollAds
            }
            )), V = (0,
            He.v9)((function(n) {
                return n.ads.midRollAdsMobile
            }
            )), q = (0,
            He.v9)((function(n) {
                return n.ads.midRollAdsFullScreen
            }
            )), Q = (0,
            He.v9)((function(n) {
                return n.ads.imaError
            }
            )), J = (0,
            He.v9)((function(n) {
                return n.ads.adBlocker
            }
            )), $ = (0,
            He.v9)((function(n) {
                return n.play.inactivityModal
            }
            )), nn = (0,
            He.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            )), en = (0,
            He.v9)((function(n) {
                return n.appPreferences.legacyControls
            }
            )), tn = (0,
            He.v9)((function(n) {
                return n.play.showBackbtn
            }
            )), on = (0,
            He.v9)((function(n) {
                return n.play.gameDisplayed
            }
            )), rn = (0,
            He.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), an = (0,
            He.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), ln = (0,
            Ye.useState)(!1), dn = ln[0], cn = ln[1], sn = ol(), un = Ue.ZP.features.shiftLock, pn = (0,
            Ye.useRef)(null), fn = (0,
            He.v9)((function(n) {
                return n.play.mouseLockActive
            }
            )), hn = (0,
            He.v9)((function(n) {
                return n.play.showMouseLockOnboarding
            }
            )), gn = (0,
            Ye.useState)(!1), vn = gn[0], mn = gn[1], xn = (0,
            Ye.useState)(!1), yn = xn[0], wn = xn[1], bn = (0,
            Ye.useState)(!1), Zn = bn[0], An = bn[1], kn = (0,
            He.v9)((function(n) {
                return n.play.orientation
            }
            )), Sn = null === (i = null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled, En = (0,
            He.v9)((function(n) {
                return n.play.showRecordingModalBeforeExit
            }
            )), Pn = (0,
            He.v9)((function(n) {
                return n.ads.disableAllAds
            }
            )), Tn = (0,
            He.v9)((function(n) {
                return n.play.recordingUploadCompleted
            }
            )), Cn = (0,
            He.v9)((function(n) {
                return n.ads.displayAdLoaded
            }
            )), Dn = (0,
            He.v9)((function(n) {
                return n.ads.mobileExperiment
            }
            )), In = (0,
            He.v9)((function(n) {
                return n.play.displayAdRef
            }
            )), Rn = (0,
            He.v9)((function(n) {
                return n.play.showCopyPastePrompt.type
            }
            )), On = (0,
            He.v9)((function(n) {
                return n.play.showBloxdErrorScreen
            }
            )), Ln = null === Ue.ZP || void 0 === Ue.ZP ? void 0 : Ue.ZP.isAppPage, Mn = Ln || (null === (r = null === (o = Ue.ZP.appInfo) || void 0 === o ? void 0 : o.playFeFeatures) || void 0 === r ? void 0 : r.enableHeader), Bn = Ln || (null === (l = null === (a = Ue.ZP.appInfo) || void 0 === a ? void 0 : a.playFeFeatures) || void 0 === l ? void 0 : l.enableFooter), Xn = null === (c = null === (d = Ue.ZP.appInfo) || void 0 === d ? void 0 : d.playFeFeatures) || void 0 === c ? void 0 : c.enablePokelaboUi;
            (0,
            Ye.useEffect)((function() {
                return (0,
                Ve.L9)("AndroidPlayerLoaded"),
                (0,
                Ue.rN)(),
                document.addEventListener("visibilitychange", zi.Co),
                window.addEventListener("blur", Bi.u1),
                window.addEventListener("paste", ll.$b),
                function() {
                    (0,
                    Ue.rN)(),
                    document.removeEventListener("visibilitychange", zi.Co),
                    window.removeEventListener("blur", Bi.u1),
                    window.removeEventListener("paste", ll.$b)
                }
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                fn ? setTimeout((function() {
                    wn(!1),
                    mn(!0)
                }
                ), hn ? 4e3 : 1e3) : mn(!1)
            }
            ), [fn]),
            (0,
            Ye.useEffect)((function() {
                In && In.current && Cn && (In.current.style.marginLeft = "0",
                In.current.style.marginRight = "0",
                In.current.style.marginTop = "0",
                In.current.style.marginBottom = "0")
            }
            ), [In, Cn]),
            (0,
            Ye.useEffect)((function() {
                hn && (kt.Z.dispatch({
                    type: Et.Z.UPDATE_MOUSE_LOCK,
                    payload: {
                        showMouseLockOnboarding: !1
                    }
                }),
                setTimeout((function() {
                    var n, e = null === (n = null === w || void 0 === w ? void 0 : w.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                    null !== e && void 0 !== e && (null === pn || void 0 === pn ? void 0 : pn.current) && (pn.current.style.visibility = "visible",
                    pn.current.style.width = "".concat(e.width, "px"),
                    pn.current.style.height = "".concat(e.height, "px"),
                    pn.current.style.top = "".concat(e.top, "px"),
                    pn.current.style.left = "".concat(e.left, "px"))
                }
                ), (0,
                Ge.G6)() ? 1e3 : 0),
                setTimeout((function() {
                    fn && wn(!0)
                }
                ), 1e3),
                setTimeout((function() {
                    wn(!1),
                    (null === pn || void 0 === pn ? void 0 : pn.current) && (pn.current.style.visibility = "collapse",
                    pn.current.style.width = "100%",
                    pn.current.style.height = "100%",
                    pn.current.style.top = "0px",
                    pn.current.style.left = "0px")
                }
                ), 3e3))
            }
            ), [hn]),
            (0,
            Ye.useEffect)((function() {
                (0,
                Ve.L9)("VideoElementLoaded");
                var n = null === w || void 0 === w ? void 0 : w.current;
                return D ? (0,
                Ve.L9)("DuplicateTab2") : (Z({
                    type: Et.Z.START_CONNECTION,
                    payload: {
                        uaId: (0,
                        Ge.Fz)(Lt.nP),
                        uaSessionId: (0,
                        Ge.io)(Lt.K3),
                        videoRef: w,
                        videoContainerRef: b,
                        orientation: (0,
                        Ue.DJ)() ? 90 === window.orientation ? qe.cj.landscape : qe.cj.portrait : Ue.ZP.appInfo.initialOrientation
                    }
                }),
                On ? (window.addEventListener("resize", pt.m7),
                window.addEventListener("orientationchange", pt.m7),
                window.addEventListener("orientationchange", pt.Ul)) : ((0,
                al.E1)(w),
                qp(void 0, void 0, void 0, (function() {
                    var n, e;
                    return Qp(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, Pt.Z.getAppPlayFeatures({
                                appId: Ue.ZP.appInfo.appId
                            }, {})];
                        case 1:
                            return (n = t.sent()).status === qe.YR.Success && An(null === (e = n.playFeatures) || void 0 === e ? void 0 : e.enableLiveChat),
                            [2]
                        }
                    }
                    ))
                }
                )),
                function(n) {
                    document.addEventListener("keydown", ji.nv.keyDownEvent),
                    document.addEventListener("keyup", ji.nv.keyUpEvent),
                    window.addEventListener("resize", pt.m7),
                    window.addEventListener("orientationchange", pt.m7),
                    window.addEventListener("orientationchange", pt.Ul),
                    n && (null === n || void 0 === n || n.addEventListener(Lt.I6, ji.h9.mouseDown),
                    null === n || void 0 === n || n.addEventListener(Lt.Vy, ji.h9.mouseUp),
                    null === n || void 0 === n || n.addEventListener(Lt.Vy, rl.$9, {
                        once: !0
                    }),
                    null === n || void 0 === n || n.addEventListener("pointerleave", ji.h9.mouseCancel),
                    null === n || void 0 === n || n.addEventListener("pointermove", ji.h9.mouseMove),
                    null === n || void 0 === n || n.addEventListener("wheel", ji.h9.mouseWheel),
                    window.addEventListener("wheel", ji.h9.mouseWheelNative, !1),
                    (0,
                    Ge.Tt)() && (null === n || void 0 === n || n.addEventListener("click", Jp)))
                }(n))),
                function() {
                    !function(n) {
                        document.removeEventListener("keydown", ji.nv.keyDownEvent),
                        document.removeEventListener("keyup", ji.nv.keyUpEvent),
                        window.removeEventListener("orientationchange", pt.Ul),
                        window.removeEventListener("orientationchange", pt.m7),
                        n && (null === n || void 0 === n || n.removeEventListener(Lt.I6, ji.h9.mouseDown),
                        null === n || void 0 === n || n.removeEventListener(Lt.Vy, ji.h9.mouseUp),
                        null === n || void 0 === n || n.removeEventListener(Lt.Vy, rl.$9),
                        null === n || void 0 === n || n.removeEventListener("pointerleave", ji.h9.mouseCancel),
                        null === n || void 0 === n || n.removeEventListener("pointermove", ji.h9.mouseMove),
                        null === n || void 0 === n || n.removeEventListener("wheel", ji.h9.mouseWheel),
                        (0,
                        Ge.Tt)() && (null === n || void 0 === n || n.removeEventListener("click", Jp)))
                    }(n)
                }
            }
            ), [w]),
            (0,
            Ye.useEffect)((function() {
                (0,
                pt.Ul)()
            }
            ), [sn, rn, an]),
            (0,
            Ye.useEffect)((function() {
                (0,
                pt.sZ)(),
                (0,
                pt.EN)()
            }
            ), [rn, an, K]),
            (0,
            Ye.useEffect)((function() {
                fn ? setTimeout((function() {
                    wn(!1),
                    mn(!0)
                }
                ), hn ? 5e3 : 2e3) : mn(!1)
            }
            ), [fn]),
            (0,
            Ye.useEffect)((function() {
                w.current && (w.current.volume = _ || .5,
                w.current.muted = F)
            }
            ), [_, F]),
            (0,
            Ye.useEffect)((function() {
                kt.Z.dispatch({
                    type: Et.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }
            ), [T]),
            (0,
            Ye.useEffect)((function() {
                var n, e = b.current, t = il()(pt.Ul, 250);
                return e && Ln && (n = new ResizeObserver((function() {
                    t()
                }
                ))).observe(e),
                function() {
                    e && Ln && n.unobserve(e)
                }
            }
            ), []);
            return (0,
            et.BX)(et.HY, {
                children: [(0,
                et.tZ)(Ua, {}), (an || On) && rn && ((0,
                Ge.tq)() || !Ln) && Mn ? (0,
                et.tZ)(Cu.Z, {
                    clicked: dn,
                    handleInfoIconClick: function() {
                        Z({
                            type: Et.Z.MODAL_STATUS,
                            payload: {
                                showAboutUs: !M
                            }
                        })
                    },
                    onButtonClicked: function() {
                        cn(!dn)
                    }
                }) : null, (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Vp, {}), S ? (0,
                    et.tZ)(ba, {}) : null, an && E && (0,
                    et.tZ)(nl, {
                        videoElm: w
                    }), !(0,
                    Ge.tq)() && un && (0,
                    et.tZ)(hd.Z, {}), (0,
                    et.BX)(Ep, {
                        ref: b,
                        isLandscape: !(!((0,
                        Ge.tq)() && window.innerHeight < window.innerWidth) || 0 !== window.orientation && 90 !== window.orientation),
                        isMobile: (0,
                        Ge.tq)(),
                        children: [!(D || C || O || I && !j && !R) || En || H ? null : (0,
                        et.tZ)(Ia, {
                            type: C ? Lt.$T : D ? Lt.J8 : O ? Lt.T$ : Lt.LD
                        }), (an || On) && !Q && !J && !Pn && (0,
                        et.BX)(et.HY, {
                            children: [U && (!Ln || (0,
                            Ge.Em)() || (0,
                            Ge.zc)()) && (0,
                            et.tZ)(cr.Z, {}), G && (!Ln || !(0,
                            Ge.rI)()) && (0,
                            et.tZ)(Sr, {}), q && (0,
                            et.tZ)(jr, {}), V && (0,
                            et.tZ)(Vr, {}), Dn && (an || On) && (0,
                            et.tZ)(Mu, {})]
                        }), (an || On) && (0,
                        et.tZ)(va, {}), T && (0,
                        et.tZ)(ja.default, {}), M && (0,
                        et.tZ)(Za.Z, {
                            closeModal: function() {
                                Z({
                                    type: Et.Z.MODAL_STATUS,
                                    payload: {
                                        showAboutUs: !1
                                    }
                                })
                            }
                        }), !Ue.ZP.isAppPage && B && (0,
                        et.tZ)(Au.default, {}), !Ue.ZP.isAppPage && X && (0,
                        et.tZ)(ku.Z, {}), $ && rn && (an || On) && (0,
                        et.tZ)(Ka, {
                            logo: "inactivity",
                            heading: "areYouThere",
                            text: "idleScreentext",
                            buttonText: "iAmStillHere",
                            infoText: "stoppingGame"
                        }), "connected" === L && N && (0,
                        et.tZ)(ld, {}), tn && an && on && rn && (0,
                        et.tZ)(Tp, {
                            isMobile: (0,
                            Ge.tq)(),
                            children: (0,
                            et.tZ)(vi.z, {
                                variant: "primary",
                                onClick: function() {
                                    return (0,
                                    zi.vT)()
                                },
                                className: "back-btn",
                                text: (0,
                                Ge.tq)() ? A("back") : A("backToGame"),
                                rounded: (0,
                                Ge.tq)() ? {
                                    diameter: "56px"
                                } : null,
                                style: {
                                    paddingRight: 7
                                },
                                children: (0,
                                Ge.tq)() ? (0,
                                et.tZ)(et.HY, {
                                    children: (0,
                                    et.tZ)("span", {
                                        className: "arrow",
                                        children: (0,
                                        et.tZ)("svg", {
                                            width: "8",
                                            height: "13",
                                            viewBox: "0 0 8 13",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0,
                                            et.tZ)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M7.20711 0.792893C7.59763 1.18342 7.59763 1.81658 7.20711\n 2.20711L2.91421 6.5L7.20711 10.7929C7.59763 11.1834 7.59763\n 11.8166 7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289\n 12.2071L0.792893 7.20711C0.402369 6.81658 0.402369 6.18342 0.792893\n 5.79289L5.79289 0.792893C6.18342 0.402369 6.81658 0.402369 7.20711 0.792893Z",
                                                fill: "white"
                                            })
                                        })
                                    })
                                }) : "<"
                            })
                        }), !C && !I && !D && (0,
                        et.BX)(et.HY, {
                            children: [(0,
                            et.tZ)(bd, {}), (0,
                            et.tZ)(el.Z, {}), rn && an && !(0,
                            Ue.yj)() && !Xn && (0,
                            et.tZ)(fd, {
                                type: "success",
                                onClose: Ue.Fp,
                                children: (0,
                                Tt._B)() ? A("guestToast") : "".concat(A("welcome"), ", ").concat((null === (u = null === (s = (0,
                                Tt.et)()) || void 0 === s ? void 0 : s.name) || void 0 === u ? void 0 : u.split(" ")[0]) || A("player"), "!")
                            }), (0,
                            et.tZ)(Rt.Z, {
                                toggle: P === Lt.cD,
                                exitingDelay: .3,
                                children: (0,
                                et.tZ)(kp, {
                                    toggle: P === Lt.cD
                                })
                            }), (0,
                            et.tZ)(Pp, {
                                id: "js-game-video",
                                onContextMenu: function(n) {
                                    return n.preventDefault()
                                },
                                style: {
                                    cursor: !en && nn ? "none" : "auto",
                                    opacity: "disconnected" === L || "failed" === L ? .5 : an && rn && !On ? 1 : 0,
                                    top: ((0,
                                    Ge.tq)() || (0,
                                    Ge.Em)() || (0,
                                    Ge.zc)()) && Sn && !(0,
                                    Ge.$h)() ? "calc(50% + ".concat(0, "px)") : (0,
                                    Ge.tq)() && !(0,
                                    Ge.Em)() && !(0,
                                    Ge.zc)() && Dn ? "calc(50% + ".concat(Lt.Fb / 2, "px)") : k || kn === qe.cj.portrait ? "50%" : W !== Lt.V ? "calc(50% - ".concat((null === (p = null === z || void 0 === z ? void 0 : z.current) || void 0 === p ? void 0 : p.clientHeight) ? .5 * Number(null === (f = null === z || void 0 === z ? void 0 : z.current) || void 0 === f ? void 0 : f.clientHeight) : 0, "px)") : "calc(50% + ".concat((null === (h = null === Y || void 0 === Y ? void 0 : Y.current) || void 0 === h ? void 0 : h.clientHeight) ? .5 * Number(null === (g = null === Y || void 0 === Y ? void 0 : Y.current) || void 0 === g ? void 0 : g.clientHeight) : 0, "px)"),
                                    left: k || W !== Lt.V || kn === qe.cj.portrait ? "50%" : "calc(50% - ".concat((null === (v = null === z || void 0 === z ? void 0 : z.current) || void 0 === v ? void 0 : v.clientWidth) ? .5 * Number(null === (m = null === z || void 0 === z ? void 0 : z.current) || void 0 === m ? void 0 : m.clientWidth) : 0, "px)")
                                },
                                autoPlay: !0,
                                muted: !0,
                                disableRemotePlayback: !0,
                                playsInline: !0,
                                ref: w
                            }), y, Bn && !k && (0,
                            Ge.SR)() && rn && an && !On && (0,
                            et.tZ)(Zu.Z, {})]
                        }), !(0,
                        Ue.DJ)() && !rn && Ln && (0,
                        et.tZ)(Qu, {
                            gameName: Ue.ZP.appInfo.appName,
                            gameIcon: null === (x = Ue.ZP.appInfo.media) || void 0 === x ? void 0 : x.icon,
                            isMobile: (0,
                            Ge.tq)(),
                            isDesktop: (0,
                            Ge.nI)(),
                            isAppPage: Ln
                        }), !(0,
                        Ge.tq)() && (0,
                        et.tZ)(yu, {
                            className: rn && an && !I ? "" : "hidden"
                        }), (0,
                        et.tZ)(Tu, {})]
                    }), rn && an && !I && (0,
                    et.tZ)(dd.Ix, {}), (0,
                    Ge.SR)() && (0,
                    et.BX)(et.HY, {
                        children: [(0,
                        et.tZ)(wu.ed, {
                            ref: pn
                        }), (0,
                        et.tZ)(wu.Co, {
                            style: {
                                display: vn && fn ? "block" : "none"
                            },
                            children: (0,
                            et.BX)(wu.ug, {
                                children: [A("press"), " ", (0,
                                et.tZ)("kbd", {
                                    children: "Esc"
                                }), " ", A("cursorLockedInfo")]
                            })
                        }), (0,
                        et.tZ)(wu.Co, {
                            style: {
                                display: yn && fn ? "block" : "none"
                            },
                            children: (0,
                            et.tZ)(wu.ug, {
                                children: A("cursorLocked")
                            })
                        })]
                    }), Tn && (0,
                    et.tZ)(Du.Z, {}), rn && Zn && (0,
                    Ue.CO)() && (0,
                    et.tZ)(bu, {}), Rn && (0,
                    et.tZ)(Fu, {})]
                })]
            })
        }, zf = t(71660), Yf = t(42385), Hf = t(96788), _f = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ff = Qe.ZP.div($p || ($p = _f(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))), Uf = ((0,
        Qe.ZP)(Ff)(ef || (ef = _f(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: #111111;\n  z-index: 5;\n  transition: all 0.3s ease-out;\n\n  ", "\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: #111111;\n  z-index: 5;\n  transition: all 0.3s ease-out;\n\n  ", "\n"])), (function(n) {
            return !n.toggle && (0,
            Qe.iv)(nf || (nf = _f(["\n    opacity: 0;\n  "], ["\n    opacity: 0;\n  "])))
        }
        )),
        Qe.ZP.div(tf || (tf = _f(["\n  position: absolute;\n  left: 16px;\n  top: 19px;\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 19px;\n"]))),
        (0,
        Qe.ZP)(Ff)(of || (of = _f(["\n  flex-direction: column;\n  gap: 26px;\n  padding: 24px;\n  width: 264px;\n  height: 125px;\n  background: ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n"], ["\n  flex-direction: column;\n  gap: 26px;\n  padding: 24px;\n  width: 264px;\n  height: 125px;\n  background: ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )),
        {
            src: "/play/_next/static/media/logoIcon.c5c2b984.svg",
            height: 16,
            width: 16
        }), Wf = t(15576), Gf = {
            src: "/play/_next/static/media/minimize.88be5bab.svg",
            height: 17,
            width: 16
        }, Vf = t(3327), qf = {
            src: "/play/_next/static/media/yt.4deb7209.svg",
            height: 16,
            width: 16
        }, Qf = t(42109), Jf = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, $f = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, nh = function() {
            var n = (0,
            Dt.$)().t
              , e = window.localStorage.getItem(Lt.$U) || "".concat(n("recordFilenameOp".concat(Math.floor(9 * Math.random()))).replace("{0}", Ue.ZP.appInfo.appName), "  #nowgg #").concat(Ue.ZP.appInfo.appName.replaceAll(" ", "").toLowerCase())
              , t = (0,
            Ye.useState)(e)
              , i = t[0]
              , o = t[1]
              , r = (0,
            He.I0)()
              , a = (0,
            He.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , l = (0,
            He.v9)((function(n) {
                return n.play.recordingData
            }
            ))
              , d = (0,
            He.v9)((function(n) {
                return n.play.consoleFooterRef
            }
            ))
              , c = (0,
            He.v9)((function(n) {
                return n.play.saveRecordingPostConversion
            }
            ))
              , s = (0,
            He.v9)((function(n) {
                return n.play.stopAndDownloadRecording
            }
            ))
              , u = (0,
            He.v9)((function(n) {
                return n.play.urlToOpenAfterRecordModalExit
            }
            ))
              , p = (0,
            Ye.useState)("50vh")
              , f = p[0]
              , h = p[1]
              , g = (0,
            Ye.useState)("50vw")
              , v = g[0]
              , m = g[1]
              , x = (0,
            Ye.useState)(new Blob(l))
              , y = x[0]
              , w = x[1]
              , b = (0,
            Ye.useState)((0,
            Ge.Hh)().extension)
              , Z = b[0]
              , A = b[1]
              , k = (0,
            Ye.useState)(!1)
              , S = k[0]
              , E = k[1]
              , P = (0,
            Ye.useState)(!1)
              , T = P[0]
              , C = P[1]
              , D = (0,
            Ye.useState)(a || (0,
            mi.hu)())
              , I = D[0]
              , R = D[1]
              , O = (0,
            Ye.useState)(!1)
              , L = O[0]
              , M = O[1]
              , B = (0,
            Ye.useState)(!1)
              , X = B[0]
              , N = B[1]
              , K = (0,
            He.v9)((function(n) {
                return n.play.recordingUploadInProgress
            }
            ))
              , j = (0,
            Ye.useState)(!1)
              , z = j[0]
              , Y = j[1]
              , H = (0,
            Ye.useState)(!0)
              , _ = H[0]
              , F = H[1]
              , U = (0,
            He.v9)((function(n) {
                return n.play.recordingUploadError
            }
            ))
              , W = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , G = (0,
            He.v9)((function(n) {
                return n.play.htmlFrameRef
            }
            ))
              , V = (0,
            Ye.useRef)(null)
              , q = sessionStorage.getItem("isEmbeddedFrame")
              , Q = (0,
            He.v9)((function(n) {
                return n.play.recordActionRef
            }
            ))
              , J = (0,
            He.v9)((function(n) {
                return n.play.isRecordingProcessing
            }
            ))
              , $ = (0,
            He.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , nn = ((0,
            He.v9)((function(n) {
                return n.play.canUploadStop
            }
            )),
            function() {
                (0,
                Ve.L9)(Lt.S5, {
                    element: "VideoRecorder",
                    action: "DiscardClicked"
                }),
                r({
                    type: Et.Z.UPDATE_IS_RECORDING,
                    payload: {
                        recordingData: [],
                        showRecordModal: !1
                    }
                }),
                q || (0,
                Vf.GK)()
            }
            )
              , en = function() {
                return Jf(void 0, void 0, void 0, (function() {
                    return $f(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return N(!0),
                            [4, (e = l,
                            Jf(void 0, void 0, Promise, (function() {
                                var n, t;
                                return $f(this, (function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return e.length < 1 ? [2] : T ? ((0,
                                        Ge.Sv)(y, "".concat(i).concat(Z)),
                                        [2]) : (r({
                                            type: Et.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                isRecordingProcessing: !0
                                            }
                                        }),
                                        S ? (r({
                                            type: Et.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                saveRecordingPostConversion: !0
                                            }
                                        }),
                                        [2]) : (n = (0,
                                        Ge.Hh)(),
                                        t = {
                                            processedBlob: new Blob(e,{
                                                type: n.mime
                                            }),
                                            processedBlobExt: n.extension
                                        },
                                        ".mp4" === n.extension ? [3, 2] : [4, (0,
                                        Ge.d8)(t.processedBlob)]));
                                    case 1:
                                        ".mp4" === (t = o.sent()).processedBlobExt && (E(!0),
                                        A(t.processedBlobExt),
                                        w(t.processedBlob),
                                        E(!1),
                                        C(!0)),
                                        o.label = 2;
                                    case 2:
                                        return (0,
                                        Ge.Sv)(t.processedBlob, "".concat(i).concat(t.processedBlobExt)),
                                        r({
                                            type: Et.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                isRecordingProcessing: !1
                                            }
                                        }),
                                        [2]
                                    }
                                }
                                ))
                            }
                            )))];
                        case 1:
                            return n.sent(),
                            c || (0,
                            Ve.L9)(Lt.S5, {
                                element: "VideoRecorder",
                                action: "SaveClicked"
                            }),
                            [2]
                        }
                        var e
                    }
                    ))
                }
                ))
            }
              , tn = function() {
                var n, e, t, i = null === (n = null === Q || void 0 === Q ? void 0 : Q.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (i) {
                    var o = null === (e = null === W || void 0 === W ? void 0 : W.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
                      , r = null === (t = null === V || void 0 === V ? void 0 : V.current) || void 0 === t ? void 0 : t.getBoundingClientRect()
                      , a = i.top || 0
                      , l = i.right || 0
                      , d = window.innerHeight - a + 16
                      , c = window.innerWidth - l - 48;
                    (0,
                    mi.hu)() || r && o && window.innerWidth - c - r.width < o.left ? R(!0) : (R(!1),
                    h("".concat(d, "px")),
                    m("".concat(c, "px")))
                } else
                    R(!0)
            };
            (0,
            Ye.useEffect)((function() {
                tn()
            }
            ), [null === Q || void 0 === Q ? void 0 : Q.current]),
            (0,
            Ye.useEffect)((function() {
                var n = kt.Z.getState().play.recordingTimerText.split(":")
                  , e = 2 === n.length ? 60 * parseInt(n[0], 10) + parseInt(n[1], 10) : 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10)
                  , t = (0,
                Ge.Hh)()
                  , o = {
                    processedBlob: new Blob(l,{
                        type: t.mime
                    }),
                    processedBlobExt: t.extension
                };
                ".mp4" !== t.extension && (window.localStorage.getItem(Lt.$U) || e < 300) && Jf(void 0, void 0, void 0, (function() {
                    var n;
                    return $f(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return n = kt.Z.getState().play.recordingData,
                            E(!0),
                            [4, (0,
                            Ge.d8)(new Blob(n,{
                                type: t.mime
                            }))];
                        case 1:
                            return o = e.sent(),
                            A(o.processedBlobExt),
                            w(o.processedBlob),
                            E(!1),
                            C(!0),
                            kt.Z.getState().play.saveRecordingPostConversion && ((0,
                            Ge.Sv)(o.processedBlob, "".concat(i).concat(o.processedBlobExt)),
                            r({
                                type: Et.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    isRecordingProcessing: !1,
                                    saveRecordingPostConversion: !1
                                }
                            }),
                            (0,
                            Ve.L9)(Lt.S5, {
                                element: "VideoRecorder",
                                action: "SaveClicked"
                            })),
                            [2]
                        }
                    }
                    ))
                }
                )),
                (null === d || void 0 === d ? void 0 : d.current) || R(!0);
                var a = new ResizeObserver((function() {
                    tn()
                }
                ))
                  , c = new MutationObserver((function() {
                    tn()
                }
                ))
                  , s = null;
                return (null === G || void 0 === G ? void 0 : G.current) && (s = new ResizeObserver((function() {
                    tn()
                }
                ))),
                (null === d || void 0 === d ? void 0 : d.current) && c.observe(d.current, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                }),
                (null === W || void 0 === W ? void 0 : W.current) && a.observe(W.current),
                s && (null === G || void 0 === G ? void 0 : G.current) && s.observe(G.current),
                function() {
                    a.disconnect(),
                    c.disconnect(),
                    s && s.disconnect()
                }
            }
            ), []);
            (0,
            Ye.useEffect)((function() {
                s && (F(!1),
                Jf(void 0, void 0, void 0, (function() {
                    return $f(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, en()];
                        case 1:
                            return n.sent(),
                            u && window.open(u, "_self"),
                            [2]
                        }
                    }
                    ))
                }
                )))
            }
            ), [s]);
            return _ ? (0,
            et.tZ)(Qf.aV, {
                className: Ue.ZP.isAppPage ? "app-page" : "",
                children: (0,
                et.BX)(Qf.jB, {
                    showCentered: I || a || (0,
                    mi.hu)(),
                    style: {
                        bottom: I ? "" : Ue.ZP.isAppPage ? "66px" : f,
                        right: I ? "" : v
                    },
                    ref: V,
                    children: [(0,
                    et.BX)(Qf.Ue, {
                        children: [(0,
                        et.BX)(Ff, {
                            children: [L && (0,
                            et.tZ)("div", {
                                style: {
                                    marginRight: "8px"
                                },
                                children: (0,
                                et.tZ)("img", {
                                    src: (0,
                                    ti.j)(uo.Z),
                                    alt: n("warning")
                                })
                            }), (0,
                            et.tZ)(Ot.QV, {
                                className: "recordingTooltip",
                                children: L ? n("discardRecording") : z ? "".concat(n("stopUploading"), "?") : n(U ? "retryUploading" : K ? "savingVideo" : "recordingComplete")
                            })]
                        }), !L && !z && (0,
                        et.tZ)(Yo.A3, {
                            onClick: function() {
                                K ? r({
                                    type: Et.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        recordingData: l,
                                        showRecordModal: !1
                                    }
                                }) : X ? nn() : M(!0)
                            },
                            children: K ? (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(Gf),
                                alt: n("minimize")
                            }) : (0,
                            et.tZ)(Ea.Z, {
                                name: "cross-thin",
                                size: 14
                            })
                        })]
                    }), U && !L && !z && (0,
                    et.BX)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            marginBottom: "8px",
                            marginTop: "8px"
                        },
                        children: [(0,
                        et.tZ)("img", {
                            src: (0,
                            ti.j)(uo.Z),
                            alt: n("warning")
                        }), (0,
                        et.tZ)(Ot.gd, {
                            style: {
                                color: "#FFF"
                            },
                            children: n("retryDescription")
                        })]
                    }), !L && !z && !q && (0,
                    et.BX)(et.HY, {
                        children: [(0,
                        et.tZ)(Ot.gd, {
                            style: {
                                color: "rgba(255, 255, 255, 0.80)",
                                marginTop: "12px",
                                marginBottom: "4px"
                            },
                            children: n("giveGameplayName")
                        }), (0,
                        et.tZ)(Qf.EH, {
                            id: "search-box",
                            type: "text",
                            value: K && window.localStorage.getItem(Lt.$U) || i,
                            disabled: !!K,
                            onChange: function(n) {
                                return o(n.target.value)
                            },
                            autoComplete: "off",
                            onBlur: function() {
                                o(i),
                                r({
                                    type: Et.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !1
                                    }
                                })
                            },
                            onFocus: function() {
                                r({
                                    type: Et.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !0
                                    }
                                })
                            }
                        })]
                    }), (0,
                    et.tZ)(Ot.gd, {
                        className: "rec-description",
                        children: q ? n("recCompleteDesc") : L ? n("discardRecDescription") : z ? n("stopUploadingDesc") : null
                    }), (0,
                    et.BX)(Qf.pI, {
                        children: [J ? (0,
                        et.tZ)(Qf.V4, {
                            style: {
                                marginRight: "8px"
                            },
                            children: (0,
                            et.BX)(Qf.fX, {
                                children: [(0,
                                et.tZ)("img", {
                                    className: "spinner",
                                    src: (0,
                                    ti.j)(Wf.Z),
                                    alt: n("loader")
                                }), (0,
                                et.BX)(Ot.IS, {
                                    style: {
                                        color: "white"
                                    },
                                    children: [n("downloading"), "..."]
                                })]
                            })
                        }) : (0,
                        et.tZ)(vi.z, {
                            variant: L || z ? "secondary" : "primary",
                            style: {
                                marginRight: "8px",
                                width: "50%",
                                gap: "8px"
                            },
                            onClick: function() {
                                return Jf(void 0, void 0, void 0, (function() {
                                    return $f(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return L ? (M(!1),
                                            [3, 4]) : [3, 1];
                                        case 1:
                                            return z ? ((0,
                                            Pt.F)(),
                                            r({
                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    showRecordModal: !1
                                                }
                                            }),
                                            r({
                                                type: Et.Z.VIDEO_UPLOAD_STATUS,
                                                payload: {
                                                    recordingUploadInProgress: !1,
                                                    recordingUploadCompleted: !1,
                                                    recordingUploadStopped: !0
                                                }
                                            }),
                                            Y(!1),
                                            [3, 4]) : [3, 2];
                                        case 2:
                                            return [4, en()];
                                        case 3:
                                            n.sent(),
                                            n.label = 4;
                                        case 4:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            text: n(L ? "goBack" : z ? "stopUploading" : "download"),
                            children: !L && !z && (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(lu.Z),
                                alt: n("download")
                            })
                        }), !K || z ? (0,
                        et.tZ)(vi.z, {
                            variant: L || z ? "primary" : "secondary",
                            style: {
                                width: "50%",
                                color: L || z ? "" : "rgba(0, 0, 0, 0.8)"
                            },
                            onClick: function() {
                                return Jf(void 0, void 0, void 0, (function() {
                                    return $f(this, (function(n) {
                                        return L ? nn() : q ? ((0,
                                        Ve.L9)(Lt.S5, {
                                            element: "VideoRecorder",
                                            action: "YouTubeClicked"
                                        }),
                                        N(!0),
                                        window.open("https://studio.youtube.com/channel/", "_blank", "noopener")) : z ? Y(!1) : ($ && kt.Z.dispatch({
                                            type: Et.Z.VIDEO_UPLOAD_STATUS,
                                            payload: {
                                                recordingUploadInProgress: !0,
                                                recordingUploadStopped: !1,
                                                recordingUploadCompleted: !1,
                                                canUploadStop: !0
                                            }
                                        }),
                                        N(!0),
                                        (0,
                                        Vf.vJ)(l, i)),
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            },
                            text: n(L ? "discard" : q ? "shareOnYT" : z ? "goBack" : U ? "retryNow" : "saveOnNowgg"),
                            children: !L && !z && (q ? (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(qf),
                                alt: "yt"
                            }) : (0,
                            et.tZ)("img", {
                                src: (0,
                                ti.j)(Uf),
                                alt: "nowgg"
                            }))
                        }) : (0,
                        et.BX)(Qf.V4, {
                            children: [(0,
                            et.BX)(Qf.fX, {
                                children: [(0,
                                et.tZ)("img", {
                                    className: "spinner",
                                    src: (0,
                                    ti.j)(Wf.Z),
                                    alt: n("loader")
                                }), (0,
                                et.tZ)(Ot.IS, {
                                    style: {
                                        color: "white"
                                    },
                                    children: n("uploading")
                                })]
                            }), (0,
                            et.tZ)(Hf.EB, {
                                width: "90%",
                                style: {
                                    position: "absolute",
                                    bottom: "0"
                                },
                                children: (0,
                                et.tZ)(Hf.ko, {})
                            })]
                        })]
                    })]
                })
            }) : (0,
            et.tZ)(et.HY, {})
        }, eh = {
            src: "/play/_next/static/media/micWarning.fd3a8271.svg",
            height: 24,
            width: 24
        }, th = {
            src: "/play/_next/static/media/micBlock.6173cc2a.svg",
            height: 20,
            width: 20
        }, ih = {
            src: "/play/_next/static/media/cameraBlock.1ce4badf.svg",
            height: 20,
            width: 20
        }, oh = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, rh = Qe.ZP.div(rf || (rf = oh(["\n  display: flex;\n  padding-bottom: 8px;\n  align-items: center;\n\n  h5 {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  padding-bottom: 8px;\n  align-items: center;\n\n  h5 {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), ah = Qe.ZP.div(af || (af = oh(["\n  height: 215px;\n  display: flex;\n  flex-direction: column;\n  width: 410px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n\n  h3 {\n    color: ", ";\n  }\n"], ["\n  height: 215px;\n  display: flex;\n  flex-direction: column;\n  width: 410px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n\n  h3 {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), lh = Qe.ZP.div(lf || (lf = oh(["\n  color: ", ";\n  margin-bottom: 24px;\n"], ["\n  color: ", ";\n  margin-bottom: 24px;\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), dh = Qe.ZP.span(df || (df = oh(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n  vertical-align: top;\n"], ["\n  color: ", ";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n  vertical-align: top;\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), ch = Qe.ZP.img(cf || (cf = oh(["\n  width: 20px;\n  height: 20px;\n  margin: 0px 4px;\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 0px 4px;\n"]))), sh = function() {
            return (sh = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, uh = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.I0)()
              , t = function() {
                e({
                    type: Et.Z.MODAL_STATUS,
                    payload: {
                        showMicBlockedModal: !1
                    }
                })
            };
            return (0,
            et.tZ)(Qf.aV, {
                children: (0,
                et.BX)(ah, {
                    children: [(0,
                    et.tZ)(Ea.Z, {
                        style: sh({
                            marginTop: "auto",
                            marginBottom: "auto",
                            cursor: "pointer"
                        }, !(0,
                        Ge.tq)() && {
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            color: $l.qm.colors.white
                        }),
                        onClick: t,
                        size: 16,
                        name: "cross-thin",
                        id: "ng-info-close"
                    }), (0,
                    et.BX)(rh, {
                        children: [(0,
                        et.tZ)("img", {
                            alt: n("recorder"),
                            src: (0,
                            ti.j)(eh),
                            style: {
                                width: "24px",
                                height: "24px"
                            }
                        }), (0,
                        et.tZ)(Ot.T3, {
                            style: {
                                marginLeft: "8px",
                                marginBottom: "0px"
                            },
                            children: n("micBlocked.head")
                        })]
                    }), (0,
                    et.BX)(lh, {
                        children: [(0,
                        et.tZ)(dh, {
                            children: n("micBlocked.info1")
                        }), (0,
                        et.tZ)(ch, {
                            src: (0,
                            ti.j)(th)
                        }), (0,
                        et.tZ)(dh, {
                            children: n("micBlocked.info2")
                        }), (0,
                        et.tZ)(ch, {
                            src: (0,
                            ti.j)(ih)
                        }), (0,
                        et.tZ)(dh, {
                            children: n("micBlocked.info3")
                        })]
                    }), (0,
                    et.BX)(Qf.pI, {
                        children: [(0,
                        et.tZ)(vi.z, {
                            variant: "secondary",
                            style: {
                                marginRight: "8px",
                                width: "50%"
                            },
                            onClick: function() {
                                null === window || void 0 === window || window.open(Lt.C_, "_blank", "noopener noreferrer"),
                                e({
                                    type: Et.Z.MODAL_STATUS,
                                    payload: {
                                        showMicBlockedModal: !1
                                    }
                                })
                            },
                            text: n("learnMore")
                        }), (0,
                        et.tZ)(vi.z, {
                            variant: "primary",
                            style: {
                                width: "50%"
                            },
                            onClick: t,
                            text: n("close")
                        })]
                    })]
                })
            })
        }, ph = t(54580), fh = {
            src: "/play/_next/static/media/secretPassageImage.ebf63dee.svg",
            height: 126,
            width: 400
        }, hh = {
            src: "/play/_next/static/media/backArrowIcon.e4ed78b4.svg",
            height: 32,
            width: 30
        }, gh = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, vh = Qe.ZP.div(sf || (sf = gh(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   padding: 40px;\n   color: ", ";\n   max-height: 95vh;\n   max-width: 505px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.64);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   .allowAdsText {\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n   .adBlockMsg {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   padding: 40px;\n   color: ", ";\n   max-height: 95vh;\n   max-width: 505px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.64);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   .allowAdsText {\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n   .adBlockMsg {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), mh = Qe.ZP.button(uf || (uf = gh(["\n   width: 100%;\n   margin-top: 40px;\n   margin-bottom: 52px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 12px;\n   border: none;\n   outline: none;\n   cursor: pointer;\n   padding: 16px;\n   color: ", ";\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"], ["\n   width: 100%;\n   margin-top: 40px;\n   margin-bottom: 52px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 12px;\n   border: none;\n   outline: none;\n   cursor: pointer;\n   padding: 16px;\n   color: ", ";\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), xh = Qe.ZP.div(pf || (pf = gh(["\n   left: 0;\n   right: 0;\n   bottom: 0;\n   top: 0;\n   position: fixed;\n   z-index: 99;\n   background-color: rgba(0, 0, 0, 0.7);\n"], ["\n   left: 0;\n   right: 0;\n   bottom: 0;\n   top: 0;\n   position: fixed;\n   z-index: 99;\n   background-color: rgba(0, 0, 0, 0.7);\n"]))), yh = Qe.ZP.div(ff || (ff = gh(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   padding: 12px;\n   background: rgba(0, 0, 0, 0.6);\n   border-radius: 0px 0px 12px 12px;\n   color: rgba(255, 255, 255, 0.8);\n   width: 100%;\n   position: absolute;\n   bottom: 0;\n"], ["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   padding: 12px;\n   background: rgba(0, 0, 0, 0.6);\n   border-radius: 0px 0px 12px 12px;\n   color: rgba(255, 255, 255, 0.8);\n   width: 100%;\n   position: absolute;\n   bottom: 0;\n"]))), wh = Qe.ZP.p(hf || (hf = gh(["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   margin-right: 12px;\n   margin-bottom: 0;\n"], ["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   margin-right: 12px;\n   margin-bottom: 0;\n"]))), bh = Qe.ZP.p(gf || (gf = gh(["\n   border: 1px solid rgba(255, 255, 255, 0.8);\n   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n   border-radius: 6px;\n   padding: 7px 14px;\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   cursor: pointer;\n   margin: 0;\n"], ["\n   border: 1px solid rgba(255, 255, 255, 0.8);\n   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n   border-radius: 6px;\n   padding: 7px 14px;\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   cursor: pointer;\n   margin: 0;\n"]))), Zh = Qe.ZP.div(vf || (vf = gh(["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 440px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   img {\n      border-radius: 8px;\n      margin-bottom: 12px;\n   }\n   p {\n      margin: 0;\n   }\n"], ["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 440px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   img {\n      border-radius: 8px;\n      margin-bottom: 12px;\n   }\n   p {\n      margin: 0;\n   }\n"]))), Ah = Qe.ZP.p(mf || (mf = gh(["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: ", ";\n"], ["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), kh = Qe.ZP.p(xf || (xf = gh(["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 20px !important;\n"], ["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 20px !important;\n"]))), Sh = Qe.ZP.ul(yf || (yf = gh(["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"], ["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"]))), Eh = Qe.ZP.button(wf || (wf = gh(["\n   width: 100%;\n   margin: 0;\n   padding: 10px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 8px;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   color: ", ";\n   cursor: pointer;\n   border: none;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"], ["\n   width: 100%;\n   margin: 0;\n   padding: 10px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 8px;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   color: ", ";\n   cursor: pointer;\n   border: none;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Ph = Qe.ZP.div(bf || (bf = gh(["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 680px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   video {\n      border-radius: 8px;\n   }\n"], ["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 680px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   video {\n      border-radius: 8px;\n   }\n"]))), Th = Qe.ZP.div(Zf || (Zf = gh(["\n   position: absolute;\n   left: 20px;\n   top: 22px;\n   width: 30px;\n   height: 32px;\n   cursor: pointer;\n"], ["\n   position: absolute;\n   left: 20px;\n   top: 22px;\n   width: 30px;\n   height: 32px;\n   cursor: pointer;\n"]))), Ch = Qe.ZP.p(Af || (Af = gh(["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: #fff;\n   text-align: center;\n   margin-bottom: 20px;\n"], ["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: #fff;\n   text-align: center;\n   margin-bottom: 20px;\n"]))), Dh = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            Ye.useState)(!1)
              , t = e[0]
              , i = (e[1],
            (0,
            Ye.useState)(!1))
              , o = i[0]
              , r = i[1];
            return (0,
            et.BX)(xh, {
                className: "ad-blocker",
                children: [!t && !o && (0,
                et.BX)(vh, {
                    children: [(0,
                    et.tZ)("img", {
                        src: (0,
                        ti.j)($i),
                        alt: "logo",
                        width: 88,
                        height: 88
                    }), (0,
                    et.tZ)("p", {
                        className: "allowAdsText",
                        children: n("pleaseAllowAds")
                    }), (0,
                    et.tZ)("p", {
                        className: "adBlockMsg",
                        children: n("adBlockerMsg")
                    }), (0,
                    et.tZ)(mh, {
                        onClick: function() {
                            (0,
                            mi.iI)("AdblockerOn")
                        },
                        children: n("adBlockerCnfrmMsg")
                    }), (0,
                    et.BX)(yh, {
                        children: [(0,
                        et.tZ)(wh, {
                            children: n("cantTurnOff")
                        }), (0,
                        et.tZ)(bh, {
                            onClick: function() {
                                (0,
                                Ve.L9)("SecretPassageViewed", {}, (function() {
                                    window.open(Lt.o7, "_self", "noreferrer")
                                }
                                ))
                            },
                            children: n("joinOnDiscord")
                        })]
                    })]
                }), t && !o && (0,
                et.BX)(Zh, {
                    children: [(0,
                    et.tZ)(Ah, {
                        children: n("secretPassage")
                    }), (0,
                    et.tZ)(kh, {
                        children: n("toPlayGames")
                    }), (0,
                    et.BX)(Sh, {
                        children: [(0,
                        et.tZ)("li", {
                            children: (0,
                            et.BX)(ph.c, {
                                i18nKey: "searchFor",
                                children: ["Search for \u201c", (0,
                                et.tZ)("span", {
                                    children: "Online games"
                                }), "\u201d on Google Search"]
                            })
                        }), (0,
                        et.tZ)("li", {
                            children: n("findBelow")
                        })]
                    }), (0,
                    et.tZ)("img", {
                        src: (0,
                        ti.j)(fh),
                        alt: n("search"),
                        width: 400,
                        height: 125
                    }), (0,
                    et.tZ)(Eh, {
                        onClick: function() {
                            r(!0),
                            (0,
                            Ve.L9)("SecretPassageHintViewed")
                        },
                        children: n("hint")
                    })]
                }), o && (0,
                et.BX)(Ph, {
                    children: [(0,
                    et.tZ)(Th, {
                        onClick: function() {
                            return r(!1)
                        },
                        children: (0,
                        et.tZ)("img", {
                            src: (0,
                            ti.j)(hh),
                            alt: n("back"),
                            width: 30,
                            height: 32
                        })
                    }), (0,
                    et.tZ)(Ch, {
                        children: n("secretPassageTutorial")
                    }), (0,
                    et.tZ)("video", {
                        width: "640",
                        height: "267.2",
                        autoPlay: !0,
                        muted: !0,
                        style: {
                            background: "white"
                        },
                        loop: !0,
                        children: (0,
                        et.tZ)("source", {
                            src: "https://cdn.now.gg/apps-content/Now.ggActivity.mp4",
                            type: "video/mp4"
                        })
                    })]
                })]
            })
        }, Ih = {
            src: "/play/_next/static/media/watermark.1a9cd7c7.svg",
            height: 48,
            width: 124
        }, Rh = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Oh = Qe.ZP.div(kf || (kf = Rh(["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.border.radius3
        }
        )), Lh = Qe.ZP.div(Sf || (Sf = Rh(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n  gap: 16px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n  gap: 16px;\n"]))), Mh = function() {
            return (Mh = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Bh = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, Xh = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Nh = {
            gameTile: {
                heading: "warning",
                info: "recordingStopOnGameSwitch",
                btn1: "startRecordingSwitch",
                btn2: "stopRecordingSwitch",
                btn3: "continueRecording"
            },
            sessionComplete: {
                heading: "recordingStopped",
                info: "recordingStoppedGametime",
                btn1: "saveRecording",
                btn2: "discardRecordingNoQM"
            },
            duplicateTab: {
                heading: "recordingStopped",
                info: "recordingStoppedDuplicateTab",
                btn1: "saveRecording",
                btn2: "discardRecordingNoQM"
            },
            inactiveTimeout: {
                heading: "recordingStopped",
                info: "recordingStoppedInactivity",
                btn1: "saveRecording",
                btn2: "discardRecordingNoQM"
            },
            userLogin: {
                heading: "warning",
                info: "recordingStoppedLogin",
                btn1: "saveRecordingLogin",
                btn2: "stopRecordingLogin",
                btn3: "continueRecording"
            }
        }, Kh = function() {
            var n = (0,
            Dt.$)().t
              , e = "".concat(n("recordFilenameOp".concat(Math.floor(9 * Math.random()))).replace("{0}", Ue.ZP.appInfo.appName), "  #nowgg #").concat(Ue.ZP.appInfo.appName.replaceAll(" ", "").toLowerCase())
              , t = (0,
            He.I0)()
              , i = (0,
            He.v9)((function(n) {
                return n.play.urlToOpenAfterRecordModalExit
            }
            ))
              , o = (0,
            He.v9)((function(n) {
                return n.play.showRecordingModalBeforeExitSource
            }
            ))
              , r = (0,
            He.v9)((function(n) {
                return n.play.recordingUserAudioTrack
            }
            ))
              , a = (0,
            He.v9)((function(n) {
                return n.play.recordingMediaStream
            }
            ))
              , l = (0,
            He.v9)((function(n) {
                return n.play.recordingMediaRecorder
            }
            ))
              , d = function() {
                if ("continueRecording" !== Nh[o].btn3) {
                    t({
                        type: Et.Z.UPDATE_IS_RECORDING,
                        payload: {
                            showRecordingModalBeforeExit: !1,
                            showRecordingModalBeforeExitSource: "",
                            urlToOpenAfterRecordModalExit: "",
                            isRecording: !1,
                            recordingUserAudioTrack: null
                        }
                    });
                    try {
                        null === r || void 0 === r || r.stop(),
                        null === a || void 0 === a || a.getTracks().forEach((function(n) {
                            return n.stop()
                        }
                        )),
                        null === l || void 0 === l || l.stop()
                    } catch (n) {}
                } else
                    t({
                        type: Et.Z.UPDATE_IS_RECORDING,
                        payload: {
                            showRecordingModalBeforeExit: !1,
                            showRecordingModalBeforeExitSource: "",
                            urlToOpenAfterRecordModalExit: ""
                        }
                    })
            };
            return (0,
            et.tZ)(Qf.aV, {
                children: (0,
                et.BX)(Oh, {
                    children: [(0,
                    et.tZ)(Ea.Z, {
                        style: Mh({
                            marginTop: "auto",
                            marginBottom: "auto",
                            cursor: "pointer"
                        }, !(0,
                        Ge.tq)() && {
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            color: $l.qm.colors.white
                        }),
                        onClick: d,
                        size: 16,
                        name: "cross-thin",
                        id: "ng-info-close"
                    }), (0,
                    et.BX)(rh, {
                        children: [(0,
                        et.tZ)("img", {
                            alt: n("recorder"),
                            src: (0,
                            ti.j)(eh),
                            style: {
                                width: "24px",
                                height: "24px"
                            }
                        }), (0,
                        et.tZ)(Ot.T5, {
                            style: {
                                marginLeft: "8px",
                                marginBottom: "0px"
                            },
                            children: n(Nh[o].heading)
                        })]
                    }), (0,
                    et.tZ)(lh, {
                        children: (0,
                        et.tZ)(dh, {
                            children: n(Nh[o].info)
                        })
                    }), (0,
                    et.BX)(Lh, {
                        children: [(0,
                        et.tZ)(vi.z, {
                            variant: "primary",
                            style: {
                                marginRight: "8px",
                                width: "100%"
                            },
                            onClick: function() {
                                return Bh(void 0, void 0, void 0, (function() {
                                    return Xh(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return [4, (0,
                                            Ge.J0)(e)];
                                        case 1:
                                            return n.sent(),
                                            "userLogin" === o && t({
                                                type: St.Z.TOGGLE_LOGIN,
                                                payload: {
                                                    showLogin: !0
                                                }
                                            }),
                                            t({
                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    showRecordingModalBeforeExit: !1,
                                                    showRecordingModalBeforeExitSource: "",
                                                    stopAndDownloadRecording: !0,
                                                    isRecording: !1,
                                                    recordingData: [],
                                                    isRecordingProcessing: !1
                                                }
                                            }),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            text: n(Nh[o].btn1),
                            id: "ng-exit-recording-save-btn"
                        }), (0,
                        et.tZ)(vi.z, {
                            variant: "secondary",
                            style: {
                                width: "100%"
                            },
                            onClick: function() {
                                var n;
                                if (t({
                                    type: Et.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showRecordingModalBeforeExit: !1,
                                        showRecordingModalBeforeExitSource: ""
                                    }
                                }),
                                "userLogin" === o) {
                                    try {
                                        null === (n = kt.Z.getState().play.recordingUserAudioTrack) || void 0 === n || n.stop(),
                                        null === a || void 0 === a || a.getTracks().forEach((function(n) {
                                            return n.stop()
                                        }
                                        )),
                                        null === l || void 0 === l || l.stop()
                                    } catch (e) {}
                                    t({
                                        type: Et.Z.UPDATE_IS_RECORDING,
                                        payload: {
                                            isRecording: !1,
                                            recordingUserAudioTrack: null
                                        }
                                    }),
                                    t({
                                        type: St.Z.TOGGLE_LOGIN,
                                        payload: {
                                            showLogin: !0
                                        }
                                    })
                                } else
                                    window.open(i, "_self")
                            },
                            text: n(Nh[o].btn2),
                            id: "ng-exit-recording-stop-btn"
                        }), ("gameTile" === o || "userLogin" === o) && (0,
                        et.tZ)(vi.z, {
                            variant: "tertiaryOutline",
                            style: {
                                width: "100%"
                            },
                            onClick: d,
                            text: n(Nh[o].btn3 || "continueRecording"),
                            id: "ng-exit-recording-continue-btn"
                        })]
                    })]
                })
            })
        }, jh = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, zh = Qe.ZP.div(Ef || (Ef = jh(["\nbackground: rgba(0, 0, 0, 0.7);\nborder: 1px solid rgba(255, 255, 255, 0.2);\nbackdrop-filter: blur(12px);\nborder-radius: 6px;\nposition:absolute;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nz-index:2;\nright: 125%;\nwidth: max-content;\n&:after {\n    width: 0;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid rgba(255, 255, 255, 0.2);\n    right: -9px;\n    position: absolute;\n    content: '';\n}\n.video-ready-text {\n  padding: 9px 12px;\n  color : ", "\n}\n.close-option {\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n   border-left: 1px solid rgba(255,255,255,0.2);\n   padding: 9px;\n}\n"], ["\nbackground: rgba(0, 0, 0, 0.7);\nborder: 1px solid rgba(255, 255, 255, 0.2);\nbackdrop-filter: blur(12px);\nborder-radius: 6px;\nposition:absolute;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nz-index:2;\nright: 125%;\nwidth: max-content;\n&:after {\n    width: 0;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid rgba(255, 255, 255, 0.2);\n    right: -9px;\n    position: absolute;\n    content: '';\n}\n.video-ready-text {\n  padding: 9px 12px;\n  color : ", "\n}\n.close-option {\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n   border-left: 1px solid rgba(255,255,255,0.2);\n   padding: 9px;\n}\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Yh = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            Ye.useState)(!0)
              , t = e[0]
              , i = e[1]
              , o = (0,
            He.v9)((function(n) {
                return n.play.recordingUploadStopped
            }
            ))
              , r = (0,
            He.v9)((function(n) {
                return n.play.showMyVideosOnboarding
            }
            ))
              , a = (0,
            He.I0)();
            return t && document.getElementsByClassName("video-portal-action")[0] ? (0,
            Ye.createPortal)((0,
            et.BX)(zh, {
                className: "video-toast",
                children: [(0,
                et.tZ)("div", {
                    className: "video-ready-text",
                    children: (0,
                    et.tZ)(Ot.gd, {
                        children: n(o ? "uploadStopped" : r ? "findVideos" : "videoReady")
                    })
                }), (0,
                et.tZ)("div", {
                    className: "close-option",
                    onClick: function(n) {
                        return function(n) {
                            n.stopPropagation(),
                            n.preventDefault(),
                            i(!1),
                            a({
                                type: Et.Z.MY_VIDEOS_ONBOARDING,
                                payload: {
                                    showMyVideosOnboarding: !1
                                }
                            })
                        }(n)
                    },
                    children: (0,
                    et.tZ)(Ea.Z, {
                        name: "cross-thin"
                    })
                })]
            }), document.getElementsByClassName("video-portal-action")[0]) : null
        }, Hh = t(91469), _h = t(14194), Fh = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Uh = Qe.ZP.div(Pf || (Pf = Fh(["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"], ["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Wh = (0,
        Qe.iv)(Tf || (Tf = Fh(["\n  background: transparent;\n"], ["\n  background: transparent;\n"]))), Gh = (0,
        Qe.iv)(Cf || (Cf = Fh(["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"]))), Vh = (0,
        Qe.ZP)(Ot.Bb)(Df || (Df = Fh(["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"], ["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"]))), qh = Qe.ZP.div(If || (If = Fh(["\n  z-index: 100;\n\n  img {\n    width: 135px;\n    height: 36px;\n    margin: 20px 40px !important;\n  }\n"], ["\n  z-index: 100;\n\n  img {\n    width: 135px;\n    height: 36px;\n    margin: 20px 40px !important;\n  }\n"]))), Qh = Uh, Jh = t(7013), $h = function() {
            return (0,
            Ye.useEffect)((function() {
                (0,
                Ve.L9)(Lt.JP, {
                    loginPageContext: Lt.$6.invitee
                })
            }
            ), []),
            (0,
            et.BX)(et.HY, {
                children: [(0,
                et.tZ)(qh, {
                    children: (0,
                    et.tZ)(ao.Z, {
                        hasTagline: !1,
                        themeType: "light"
                    })
                }), (0,
                et.tZ)(ei.Z, {
                    modalStyles: Gh,
                    overlayStyles: Wh,
                    children: (0,
                    et.BX)(Qh, {
                        children: [(0,
                        et.tZ)(Jh.Z, {
                            height: 144,
                            width: 144,
                            applyAnimation: !0
                        }), (0,
                        et.tZ)(Vh, {
                            children: (0,
                            Uu.t)("invitationToPlay")
                        }), (0,
                        et.tZ)(Ot.lU, {
                            children: (0,
                            Uu.t)("claimPlayTime")
                        }), (0,
                        et.tZ)(_h.Z, {
                            pageContext: Lt.$6.invitee
                        }), (0,
                        et.tZ)(Hh.Z, {})]
                    })
                })]
            })
        }, ng = t(67881), eg = t(6413), tg = t(85992), ig = t(55967), og = {
            src: "/play/_next/static/media/cloudy.ef2ef64d.svg",
            height: 144,
            width: 144
        }, rg = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ag = Qe.ZP.section(Rf || (Rf = rg(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-top: 8px;\n    color: ", ";\n    text-align: center;\n  }\n  h3 {\n    margin-top: 20px;\n    text-align: center;\n    color: ", ";\n  }\n\n  button {\n    margin-top: 16px;\n    padding: 12px 0;\n    width: 100%;\n  }\n\n  @media (max-height: 400px) {\n    img {\n      width: 72px;\n      height: 72px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-top: 8px;\n    color: ", ";\n    text-align: center;\n  }\n  h3 {\n    margin-top: 20px;\n    text-align: center;\n    color: ", ";\n  }\n\n  button {\n    margin-top: 16px;\n    padding: 12px 0;\n    width: 100%;\n  }\n\n  @media (max-height: 400px) {\n    img {\n      width: 72px;\n      height: 72px;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white60
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), lg = (0,
        Qe.iv)(Of || (Of = rg(["\n  width: 420px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"], ["\n  width: 420px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"]))), dg = ag, cg = t(57348), sg = {
            FailureForbidden: {
                heading: "errorFailureForbidden.heading",
                message: "errorFailureForbidden.subHeading",
                cta: "takeMeBack"
            }
        }, ug = function() {
            var n = (0,
            He.v9)((function(n) {
                return n.play.videoModalError
            }
            ))
              , e = (0,
            He.v9)((function(n) {
                return n.play.errorDescription
            }
            ))
              , t = sg[n]
              , i = t.heading
              , o = t.message
              , r = t.cta
              , a = (0,
            He.I0)();
            (0,
            Ye.useEffect)((function() {
                (0,
                Ve.L9)("ErrorScreen", {
                    error: n,
                    errorDescription: e
                })
            }
            ), []);
            return (0,
            et.tZ)(Ju.Z, {
                modalStyles: lg,
                toggle: !0,
                children: (0,
                et.BX)(dg, {
                    children: [(0,
                    et.tZ)("img", {
                        src: (0,
                        ti.j)(og),
                        alt: "",
                        width: 144,
                        height: 144
                    }), (0,
                    et.tZ)(Ot.Bb, {
                        children: (0,
                        Uu.t)(i)
                    }), (0,
                    et.tZ)(Ot.TZ, {
                        children: (0,
                        Uu.t)(o)
                    }), (0,
                    et.tZ)(cg.zx, {
                        onClick: function() {
                            a({
                                type: Et.Z.SET_ERROR,
                                payload: {
                                    videoModalError: ""
                                }
                            })
                        },
                        children: (0,
                        Uu.t)(r)
                    })]
                })
            })
        }, pg = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, fg = (Qe.ZP.div(Lf || (Lf = pg(["\n   display: flex;\n   border-radius: 10px;\n   background: linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 100%);\n   width: 100%;\n"], ["\n   display: flex;\n   border-radius: 10px;\n   background: linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 100%);\n   width: 100%;\n"]))),
        Qe.ZP.img(Mf || (Mf = pg(["\n   height: 32px;\n   width: fit-content;\n"], ["\n   height: 32px;\n   width: fit-content;\n"])))), hg = (Qe.ZP.div(Bf || (Bf = pg(["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   padding: 12px 12px 12px 0;\n\n"], ["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   padding: 12px 12px 12px 0;\n\n"]))),
        Qe.ZP.div(Xf || (Xf = pg(["\n   width: 100px;\n   img {\n      height: 140px;\n      margin-left: -22px;\n   }\n"], ["\n   width: 100px;\n   img {\n      height: 140px;\n      margin-left: -22px;\n   }\n"]))),
        (0,
        Qe.ZP)(gd.Yd)(Nf || (Nf = pg(["\n    font-weight: 600;\n    text-wrap: nowrap;\n    align-self: end;\n    padding: 7px 16px;\n    margin-top: 6px;\n    border-radius: 6px;\n    box-shadow: none;\n    &:disabled {\n      backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"], ["\n    font-weight: 600;\n    text-wrap: nowrap;\n    align-self: end;\n    padding: 7px 16px;\n    margin-top: 6px;\n    border-radius: 6px;\n    box-shadow: none;\n    &:disabled {\n      backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"])), (function(n) {
            return n.theme.colors.white40
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white40
        }
        )),
        {
            src: "/play/_next/static/media/jackpot_title.04d0cfb0.svg",
            height: 34,
            width: 166
        }), gg = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, vg = Qe.ZP.div(Kf || (Kf = gg(["\n    display: flex;\n    flex-direction: column;\n    gap:8px;\n    margin-top: 24px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap:8px;\n    margin-top: 24px;\n"]))), mg = function() {
            var n = (0,
            Dt.$)().t
              , e = (0,
            He.I0)()
              , t = (0,
            Ye.useState)(!1)
              , i = t[0]
              , o = t[1]
              , r = (0,
            Ye.useState)("")
              , a = r[0]
              , l = r[1]
              , d = function() {
                e({
                    type: eg.Z.JACKPOT_FLOW,
                    payload: {
                        showFreeSpinVerification: !1
                    }
                }),
                sessionStorage.removeItem("enableFreeSpin")
            };
            return (0,
            et.BX)(ei.Z, {
                style: {
                    width: "350px",
                    padding: "24px"
                },
                children: [(0,
                et.tZ)(fg, {
                    src: (0,
                    ti.j)(hg)
                }), (0,
                et.tZ)(Yo.A3, {
                    className: "cross-icon",
                    onClick: d,
                    style: {
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "white"
                    },
                    children: (0,
                    et.tZ)(Ea.Z, {
                        name: "cross-thin",
                        size: 16,
                        id: "login-close-icon"
                    })
                }), (0,
                et.BX)(vg, {
                    children: [(0,
                    et.tZ)(Ot.lU, {
                        style: {
                            color: "rgba(255,255,255,0.7)"
                        },
                        children: n("enterEmailForSpin")
                    }), (0,
                    et.tZ)(Qd.II, {
                        title: n("emailId"),
                        onUpdate: function(n) {
                            return function(n) {
                                l(n),
                                n || o(!1)
                            }(n)
                        },
                        error: i,
                        placeholder: n("enterHere")
                    }), i && (0,
                    et.tZ)(Ot.IS, {
                        style: {
                            color: "#FF3A30",
                            marginTop: "-14px",
                            marginBottom: "16px"
                        },
                        children: n("emailMismatchError")
                    }), (0,
                    et.tZ)(vi.z, {
                        variant: "primary",
                        text: n("verifyAndGetSpin"),
                        onClick: function() {
                            var n = (0,
                            Tt.et)();
                            n && (n.email !== a ? o(!0) : (d(),
                            sessionStorage.setItem("showFreeSpinBtn", "true"),
                            e({
                                type: eg.Z.ROBUX_REWARD_DETAILS,
                                payload: {
                                    robuxPopupOpen: !0
                                }
                            }),
                            e({
                                type: eg.Z.JACKPOT_FLOW,
                                payload: {
                                    showJackpotFlow: !0
                                }
                            })))
                        }
                    })]
                })]
            })
        }, xg = t(58169), yg = t(74348), wg = t(62468), bg = {
            src: "/play/_next/static/media/robux-warn.c88be150.svg",
            height: 155,
            width: 162
        }, Zg = t(12422), Ag = function(n) {
            var e = n.taskName
              , t = n.taskRwd
              , i = (0,
            Dt.$)().t
              , o = (0,
            He.I0)();
            return (0,
            Ye.useEffect)((function() {
                (0,
                Ve.L9)("RobuxQuestCompletePromptDisplayed", {
                    task: e
                })
            }
            ), []),
            (0,
            et.tZ)(ei.Z, {
                modalStyles: wg.il,
                children: (0,
                et.BX)(wg.ZP, {
                    children: [(0,
                    et.tZ)(Yo.A3, {
                        className: "cross-icon",
                        onClick: function() {
                            o({
                                type: Zg.Z.UPDATE_TASK,
                                payload: {
                                    showTaskCompletePopup: {}
                                }
                            })
                        },
                        style: {
                            position: "absolute",
                            right: "16px",
                            top: "16px",
                            color: "white"
                        },
                        children: (0,
                        et.tZ)(Ea.Z, {
                            name: "cross-thin",
                            size: 16,
                            id: "login-close-icon"
                        })
                    }), (0,
                    et.tZ)(wg.xg, {
                        children: (0,
                        et.tZ)("img", {
                            src: (0,
                            ti.j)(bg),
                            alt: ""
                        })
                    }), (0,
                    et.tZ)(wg.Dx, {
                        children: i("taskCompleted", {
                            task: e
                        })
                    }), (0,
                    et.tZ)(wg.qY, {
                        children: i("taskCompleteMsg", {
                            task: e,
                            reward: t
                        })
                    }), (0,
                    et.tZ)(vi.z, {
                        variant: "primary",
                        size: "large",
                        onClick: function() {
                            o({
                                type: Zg.Z.TOGGLE_VIEW,
                                payload: {
                                    showProfileView: !1,
                                    showRobuxView: !0,
                                    showLeaderboardView: !1,
                                    showTaskCompletePopup: {}
                                }
                            })
                        },
                        children: i("viewRewards")
                    })]
                })
            })
        }, kg = t(30622), Sg = (t(40993),
        t(202),
        function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
        ), Eg = function(n, e) {
            var t, i, o, r, a = {
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
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Pg = (0,
        Vo.default)((function() {
            return Promise.resolve().then(t.bind(t, 82258))
        }
        ), {
            loading: Qi,
            loadableGenerated: {
                webpack: function() {
                    return [82258]
                },
                modules: ["../src/pages/play/index.tsx -> @components/modals/error"]
            }
        }), Tg = (0,
        Vo.default)((function() {
            return t.e(47).then(t.bind(t, 3047))
        }
        ), {
            loading: Qi,
            loadableGenerated: {
                webpack: function() {
                    return [3047]
                },
                modules: ["../src/pages/play/index.tsx -> @components/html-player"]
            }
        }), Cg = 0, Dg = function(n) {
            var e, t, i, o, r, a, l, d, c, s, u, p, f, h, g, v, m, x, y, w, b, Z, A, k = n.manifest, S = (n.adsConfigUrl,
            n.isAppPage), E = (0,
            Dt.$)().t, P = ((0,
            He.v9)((function(n) {
                return n.play.graceTimeoutType
            }
            )),
            (0,
            He.v9)((function(n) {
                return n.play.error
            }
            ))), T = (0,
            He.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), C = (0,
            He.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), D = (0,
            He.v9)((function(n) {
                return n.ads.imaError
            }
            )), I = (0,
            He.v9)((function(n) {
                return n.ads.adBlocker
            }
            )), R = (0,
            He.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            )), O = (0,
            He.v9)((function(n) {
                return n.auth.isLoginResolved
            }
            )), L = (0,
            He.v9)((function(n) {
                return n.auth.showPreloader
            }
            )), M = (0,
            He.v9)((function(n) {
                return n.play.showSpotInterruptionScreen
            }
            )), B = (0,
            He.v9)((function(n) {
                return n.play.androidWillDisconnectToast
            }
            )), X = (0,
            He.v9)((function(n) {
                return n.play.gameDisplayed
            }
            )), N = (0,
            He.v9)((function(n) {
                return n.play.showTimeLimitExceededScreen
            }
            )), K = (0,
            He.v9)((function(n) {
                return n.play.sessionMigrated
            }
            )), j = (0,
            He.v9)((function(n) {
                return n.play.duplicateTab
            }
            )), z = (0,
            He.v9)((function(n) {
                return n.play.sessionComplete
            }
            )), Y = (0,
            He.v9)((function(n) {
                return n.auth.guestFlow
            }
            )), H = (0,
            He.v9)((function(n) {
                return n.auth.showLogin
            }
            )), _ = (0,
            He.v9)((function(n) {
                return n.auth.manualLogoutShowLogin
            }
            )), F = (0,
            He.v9)((function(n) {
                return n.play.tryNowModal
            }
            )), U = (0,
            He.v9)((function(n) {
                return n.play.endingTryNow
            }
            )), W = (0,
            He.v9)((function(n) {
                return n.play.loginTip
            }
            )), G = (0,
            He.v9)((function(n) {
                return n.play.listenersAttached
            }
            )), V = (0,
            He.v9)((function(n) {
                return n.play.recordingMediaStream
            }
            )), q = null === (t = null === (e = Ue.ZP.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.tryAndDownload) || void 0 === t ? void 0 : t.isEnabled, Q = q && "true" !== (null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem(Lt.Wp)), J = (0,
            Ye.useState)(!S || !Q), $ = J[0], nn = J[1], en = !(0,
            Ge.tq)() || (0,
            Ge.Em)() || (0,
            Ge.zc)() ? null === (d = null === (l = null === (a = Ue.ZP.appInfo.playFeFeatures) || void 0 === a ? void 0 : a.ads) || void 0 === l ? void 0 : l.desktop) || void 0 === d ? void 0 : d.enableDisplayAds : null === (r = null === (o = null === (i = Ue.ZP.appInfo.playFeFeatures) || void 0 === i ? void 0 : i.ads) || void 0 === o ? void 0 : o.mobile) || void 0 === r ? void 0 : r.enableDisplayAds, tn = !(0,
            Ge.tq)() || (0,
            Ge.Em)() || (0,
            Ge.zc)() ? null === (h = null === (f = null === (p = Ue.ZP.appInfo.playFeFeatures) || void 0 === p ? void 0 : p.ads) || void 0 === f ? void 0 : f.desktop) || void 0 === h ? void 0 : h.enablePrerollAds : null === (u = null === (s = null === (c = Ue.ZP.appInfo.playFeFeatures) || void 0 === c ? void 0 : c.ads) || void 0 === s ? void 0 : s.mobile) || void 0 === u ? void 0 : u.enablePrerollAds, on = !(0,
            Ge.tq)() || (0,
            Ge.Em)() || (0,
            Ge.zc)() ? null === (w = null === (y = null === (x = Ue.ZP.appInfo.playFeFeatures) || void 0 === x ? void 0 : x.ads) || void 0 === y ? void 0 : y.desktop) || void 0 === w ? void 0 : w.enableMidrollAds : null === (m = null === (v = null === (g = Ue.ZP.appInfo.playFeFeatures) || void 0 === g ? void 0 : g.ads) || void 0 === v ? void 0 : v.mobile) || void 0 === m ? void 0 : m.enableMidrollAds, rn = en || tn || on, an = !(0,
            Ge.tq)() && !(0,
            Ge.Em)() && !(0,
            Ge.zc)(), ln = !rn || (0,
            Ge.EO)(), dn = (0,
            Ye.useState)(!1), cn = dn[0], sn = dn[1], un = (0,
            Ye.useState)(!1), pn = un[0], fn = un[1], hn = (0,
            Ye.useState)(!1), gn = hn[0], vn = hn[1], mn = (0,
            Ye.useState)(!1), xn = mn[0], yn = mn[1], wn = (0,
            He.v9)((function(n) {
                return n.play.isRecording
            }
            )), bn = (0,
            He.v9)((function(n) {
                return n.play.showRecordModal
            }
            )), Zn = (0,
            He.v9)((function(n) {
                return n.play.showMicBlockedModal
            }
            )), An = (0,
            He.v9)((function(n) {
                return n.play.consoleFooterRef
            }
            )), kn = (0,
            He.v9)((function(n) {
                return n.play.showRecordingTransition
            }
            )), Sn = (0,
            He.v9)((function(n) {
                return n.play.videoRef
            }
            )), En = (0,
            He.v9)((function(n) {
                return n.play.showRecordingModalBeforeExit
            }
            )), Pn = (0,
            He.v9)((function(n) {
                return n.auth.showResetPassword
            }
            )), Tn = (0,
            He.v9)((function(n) {
                var e;
                return null === (e = null === n || void 0 === n ? void 0 : n.play) || void 0 === e ? void 0 : e.isFullscreen
            }
            )), Cn = (0,
            Ye.useState)(!1), Dn = Cn[0], In = Cn[1], Rn = (0,
            tg.p)().creditReward, On = (0,
            He.I0)(), Ln = (0,
            Ye.useContext)(We.x), Mn = (0,
            Ye.useState)(""), Bn = Mn[0], Xn = Mn[1], Nn = (0,
            Ye.useRef)(null), Kn = (0,
            Ye.useRef)(null), jn = (0,
            Ye.useState)(!K && !z && !j && !U), zn = jn[0], Yn = jn[1], Hn = (0,
            He.v9)((function(n) {
                return n.play.recordingUploadCompleted
            }
            )), _n = (0,
            He.v9)((function(n) {
                return n.play.recordingUploadStopped
            }
            )), Fn = (0,
            He.v9)((function(n) {
                return n.play.showMyVideosOnboarding
            }
            )), Un = (0,
            He.v9)((function(n) {
                return n.robuxRewards.accumulatedTimeSecs
            }
            )), Wn = (0,
            Ye.useRef)(null), Gn = (0,
            He.v9)((function(n) {
                return n.robuxRewards.showFreeSpinVerification
            }
            )), Vn = ((0,
            He.v9)((function(n) {
                return n.play.androidActivityName
            }
            )),
            (0,
            He.v9)((function(n) {
                return n.play.videoModalError
            }
            ))), qn = (0,
            He.v9)((function(n) {
                return n.gamification.showTaskCompletePopup
            }
            )), Qn = (0,
            He.v9)((function(n) {
                return n.play.isPlayerLoaded
            }
            )), Jn = function(n) {
                n.key !== Lt.B1 || n.newValue || (0,
                mi.iI)("TokenRemoved")
            }, $n = function(n) {
                yn(!0),
                (0,
                Ve.L9)("ProxyDetected", n)
            }, ne = function() {
                return P === qe.YR.FailureServiceNotInRegion && (0,
                Ge.c6)(Ln.packageName)
            }, ee = function() {
                return !!D && ((0,
                Ve.L9)("AdBlockerDetected"),
                (0,
                Fe.zr)("AdBlockerDetected", !1),
                On({
                    type: _e.Z.UPDATE_IMAERROR,
                    payload: {
                        adBlocker: !0,
                        adsEnded: !0
                    }
                }),
                !!rn)
            }, te = function() {}, ie = function() {
                var n;
                kt.Z.dispatch({
                    type: Et.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !!(Mi.J.fullscreenElement || Mi.J.webkitFullscreenElement || Mi.J.msFullscreenElement || Mi.J.mozFullScreenElement),
                        isSensitivityPopupOpen: !1
                    }
                }),
                (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && (Mi.J.fullscreenElement || Mi.J.webkitFullscreenElement || Mi.J.msFullscreenElement || Mi.J.mozFullScreenElement ? document.body.classList.add("--fullscreen") : document.body.classList.remove("--fullscreen")),
                (0,
                pt.sZ)(),
                (0,
                pt.Ul)()
            };
            (0,
            Ye.useEffect)((function() {
                On({
                    type: Et.Z.UPDATE_PLAY_STATE,
                    payload: {
                        isPlayerLoaded: !0
                    }
                })
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                if (cn)
                    if (an && !ln) {
                        fn(!0),
                        window.googlefc = window.googlefc || {},
                        window.googlefc.ccpa = window.googlefc.ccpa || {},
                        window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
                        var n = setTimeout((function() {
                            clearTimeout(n),
                            vn(!0),
                            sn(!1)
                        }
                        ), 5e3);
                        window.googlefc.callbackQueue.push({
                            AD_BLOCK_DATA_READY: function() {
                                clearTimeout(n);
                                var e = window.googlefc.getAdBlockerStatus()
                                  , t = window.googlefc.getAllowAdsStatus();
                                if (e === window.googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER || e === window.googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER)
                                    if (t === window.googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED)
                                        (0,
                                        sa.cd)(),
                                        On({
                                            type: Et.Z.UPDATE_PLAY_STATE,
                                            payload: {
                                                isAdBlockerEnabled: !0
                                            }
                                        });
                                    else {
                                        if (!cn)
                                            return;
                                        vn(!0),
                                        sn(!1)
                                    }
                                else {
                                    if (!cn)
                                        return;
                                    vn(!0),
                                    sn(!1)
                                }
                            }
                        })
                    } else
                        vn(!0),
                        sn(!1)
            }
            ), [cn]),
            (0,
            Ye.useEffect)((function() {
                var n, e, t;
                kn ? (null === (n = Kn.current) || void 0 === n || n.play(),
                null === (e = Kn.current) || void 0 === e || e.classList.add("slideIn")) : null === (t = Kn.current) || void 0 === t || t.classList.remove("slideIn")
            }
            ), [kn]),
            (0,
            Ye.useEffect)((function() {
                gn && ((0,
                Ve.L9)("GoogleAdBlockCheckCrossed"),
                ee() && an && (!sessionStorage.getItem("isEmbeddedFrame") || rn) ? (On({
                    type: Et.Z.UPDATE_PLAY_STATE,
                    payload: {
                        isAdBlockerEnabled: !0
                    }
                }),
                In(!0)) : (0,
                Ve.L9)("NowggAdBlockCheckCrossed"))
            }
            ), [gn]);
            var oe = function() {
                Ki.CC.onfocus(),
                (0,
                yg.v0)()
            }
              , re = function() {
                var n, e, t, i, o;
                if ((0,
                Ue.DJ)() || sn(!0),
                window.addEventListener("storage", Jn),
                window.addEventListener("blur", ji.ny),
                window.addEventListener("focus", oe),
                window.addEventListener("appinstalled", Go.YL),
                document.addEventListener("touchcancel", yg.v0),
                window.addEventListener("keydown", Ve._b),
                window.addEventListener("pointerdown", Ve._b),
                window.addEventListener("touchstart", Ve.Sg),
                window.addEventListener("touchend", Ve.se),
                "serviceWorker"in navigator) {
                    var r = "".concat((null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.host) || "").concat((null === (t = null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.href) || void 0 === t ? void 0 : t.indexOf("".concat(Ue.ZP.prefix, "/play/"))) > -1 ? "".concat(Ue.ZP.prefix) : "");
                    navigator.serviceWorker.register("https://".concat(r).concat((null === (o = null === (i = null === window || void 0 === window ? void 0 : window.location) || void 0 === i ? void 0 : i.href) || void 0 === o ? void 0 : o.indexOf("/play/")) > -1 ? "/play/" : "/", "sw.js")).then((function(n) {}
                    ), (function(n) {}
                    ))
                }
            }
              , ae = function(n) {
                try {
                    var e = sessionStorage.getItem(Lt.oE);
                    if (e)
                        ((new Date).getTime() - parseInt(e, 10)) / 1e3 < 60 && (0,
                        qo.Ip)({
                            event: "NUlessthan60s"
                        })
                } catch (i) {}
                if (Qn) {
                    var t = sessionStorage.getItem("lastUptimeEventTime") ? Number(sessionStorage.getItem("lastUptimeEventTime")) : Date.now();
                    (0,
                    Ge._n)("/api/play/v1/reportEvent", {
                        isTabVisible: "visible" === document.visibilityState,
                        timeSinceLastUptimeEvent: (Date.now() - t) / 1e3
                    })
                }
                (0,
                zi.LK)(),
                (0,
                Pt.F)(),
                On({
                    type: St.Z.SET_LOGGED_IN,
                    payload: {
                        showPreloader: !0
                    }
                })
            };
            (0,
            Ye.useEffect)((function() {
                On({
                    type: Et.Z.SHOW_BLOXD_ERROR_SCREEN,
                    payload: {
                        showBloxdErrorScreen: P === qe.YR.FailureServiceNotInRegion && (0,
                        Ge.c6)(Ln.packageName)
                    }
                })
            }
            ), [P]),
            (0,
            Ye.useEffect)((function() {
                var n, e;
                (0,
                Ve.L9)("PlayPageLoaded"),
                window.addEventListener("orientationchange", pt.TG),
                window.addEventListener("resize", pt.TG),
                window.addEventListener("beforeunload", ae),
                Ue.ZP.isAppPage || window.addEventListener("beforeinstallprompt", Go.dz),
                (0,
                pt.TG)();
                try {
                    if (Sg(void 0, void 0, void 0, (function() {
                        var n;
                        return Eg(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 5, , 6]),
                                (0,
                                Ue.DJ)() ? (yn(!1),
                                re(),
                                [4, (0,
                                Tt.ZP)({
                                    isPlayer: !0
                                })]) : [3, 2];
                            case 1:
                                return e.sent(),
                                [2];
                            case 2:
                                return re(),
                                Q && nn(!1),
                                S ? [3, 4] : [4, (0,
                                Tt.ZP)({
                                    isPlayer: !0
                                })];
                            case 3:
                                e.sent(),
                                e.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return n = e.sent(),
                                $n({
                                    error: n,
                                    detectionMethod: Lt.fi
                                }),
                                [3, 6];
                            case 6:
                                return [2]
                            }
                        }
                        ))
                    }
                    )),
                    "function" === typeof BroadcastChannel) {
                        var t = new BroadcastChannel("tab")
                          , i = "tab-".concat(Ue.ZP.appInfo.appId);
                        t.postMessage(i),
                        t.addEventListener("message", (function(n) {
                            n.data === i && (kt.Z.getState().play.isRecording && kt.Z.dispatch({
                                type: Et.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    showRecordingModalBeforeExit: !0,
                                    showRecordingModalBeforeExitSource: "duplicateTab"
                                }
                            }),
                            (0,
                            Ve.L9)("DuplicateTab"),
                            On({
                                type: Et.Z.DUPLICATE_TAB,
                                payload: {
                                    duplicateTab: !0
                                }
                            }))
                        }
                        ))
                    }
                } catch (a) {
                    $n({
                        error: a,
                        detectionMethod: Lt.fi
                    })
                }
                if (!G) {
                    var o = ["", "moz", "webkit", "ms"];
                    o.forEach((function(n) {
                        document.addEventListener("".concat(n, "fullscreenchange"), ie, !1)
                    }
                    )),
                    o.forEach((function(n) {
                        document.addEventListener("".concat(n, "fullscreenerror"), te, !1)
                    }
                    )),
                    kt.Z.dispatch({
                        type: Et.Z.LISTENERS_ATTACHED,
                        payload: !0
                    })
                }
                if ((0,
                ka.Z)(),
                (0,
                Ge.yL)() && !sessionStorage.getItem("isEmbeddedFrame")) {
                    var r = void 0;
                    try {
                        r = (null === (e = null === (n = window.top) || void 0 === n ? void 0 : n.location) || void 0 === e ? void 0 : e.href) || "unknown"
                    } catch (l) {}
                    (0,
                    Ve.L9)(Lt.Kt, {
                        currentUrl: window.location.href,
                        parentUrl: r
                    })
                }
                return function() {
                    window.removeEventListener("storage", Jn),
                    window.removeEventListener("beforeunload", ae),
                    window.removeEventListener("orientationchange", pt.TG),
                    window.removeEventListener("resize", pt.TG),
                    window.removeEventListener("blur", ji.ny),
                    window.removeEventListener("focus", oe),
                    document.removeEventListener("touchcancel", yg.v0),
                    window.removeEventListener("orientationchange", pt.TG),
                    window.removeEventListener("resize", pt.TG),
                    window.removeEventListener("keydown", Ve._b),
                    window.removeEventListener("pointerdown", Ve._b),
                    window.removeEventListener("touchstart", Ve.Sg),
                    window.removeEventListener("touchend", Ve.se)
                }
            }
            ), []),
            (0,
            Ye.useEffect)((function() {
                var n = (0,
                Ge.Dx)() && !(0,
                Ue.DJ)();
                return wn && !kn ? (Cg = n ? 300 : 0,
                Wn.current = setInterval((function() {
                    var e = n ? Cg - 1 : Cg + 1;
                    Cg = e;
                    var t = Math.floor(e / 3600)
                      , i = Math.floor(e / 60 % 60);
                    e = Math.floor(e % 60);
                    var o = "".concat(t > 0 ? "".concat(t <= 9 ? "0" : "").concat(t, ":") : "", "\n      ").concat(i <= 9 ? "0" : "").concat(i, ":").concat(e <= 9 ? "0" : "").concat(e);
                    o = o.replaceAll("\n", "").replaceAll(" ", ""),
                    On({
                        type: Et.Z.UPDATE_IS_RECORDING,
                        payload: {
                            recordingTimerText: o
                        }
                    }),
                    (0,
                    Ge.Dx)() && 0 === Cg && On({
                        type: Et.Z.UPDATE_IS_RECORDING,
                        payload: {
                            stopVideoRecording: !0
                        }
                    })
                }
                ), 1e3)) : Wn.current && clearInterval(Wn.current),
                function() {
                    Wn.current && clearInterval(Wn.current)
                }
            }
            ), [wn, kn]);
            (0,
            Ye.useEffect)((function() {
                if (((0,
                Ue.DJ)() && !T || !(0,
                Ue.DJ)() && T) && On((0,
                Qo.J)()),
                (T || (0,
                Ue.DJ)()) && R && ((0,
                Ge.wA)() && (0,
                Ge.WM)(),
                Pt.Z.getVideoChannel({}, {}).then((function(n) {
                    return Sg(void 0, void 0, void 0, (function() {
                        var e, t;
                        return Eg(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return n.status === qe.YR.Success && (On({
                                    type: Et.Z.CHANNEL_DETAILS,
                                    payload: {
                                        channelDisplayName: n.channelDisplayName,
                                        channelHandle: n.channelHandle
                                    }
                                }),
                                window.localStorage.setItem(Lt.OC, null === n || void 0 === n ? void 0 : n.channelHandle)),
                                e = window.localStorage.getItem(Lt.$U),
                                [4, (0,
                                Vf.zo)()];
                            case 1:
                                return t = i.sent(),
                                "true" === window.sessionStorage.getItem(Lt.c8) ? ((0,
                                Vf.GK)(),
                                [3, 5]) : [3, 2];
                            case 2:
                                return t ? [4, (0,
                                Vf.G2)()] : [3, 5];
                            case 3:
                                return i.sent(),
                                [4, (0,
                                Vf.U9)(e || "")];
                            case 4:
                                i.sent(),
                                i.label = 5;
                            case 5:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )).catch((function(n) {}
                ))),
                T && !ne())
                    if (R) {
                        if ((0,
                        Ge.wA)() && (0,
                        Ge.c6)() && Qn) {
                            var n = +(sessionStorage.getItem(Lt.XS) || "");
                            sessionStorage.removeItem(Lt.XS),
                            Sg(void 0, void 0, void 0, (function() {
                                return Eg(this, (function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return n > 0 ? [4, Rn(n)] : [3, 2];
                                    case 1:
                                        e.sent(),
                                        e.label = 2;
                                    case 2:
                                        return (0,
                                        Ge.WM)(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    } else
                        On({
                            type: eg.Z.ROBUX_REWARD_DETAILS,
                            payload: {
                                startRobuxTimer: !0
                            }
                        })
            }
            ), [R, T]),
            (0,
            Ye.useEffect)((function() {
                C && T && sessionStorage.getItem("enableFreeSpin") === Ue.rs && On(R ? {
                    type: eg.Z.JACKPOT_FLOW,
                    payload: {
                        showFreeSpinVerification: !0
                    }
                } : {
                    type: St.Z.TOGGLE_LOGIN,
                    payload: {
                        showLogin: !0
                    }
                })
            }
            ), [C, R, T]),
            (0,
            Ye.useEffect)((function() {
                (0,
                Ge.wA)() && (0,
                Ge.c6)() && Qn && (N || z) && (Rn(Un % Ue.ZP.appInfo.rwdMinPlayTimeIntervalInSecs),
                (0,
                xg.a)())
            }
            ), [N, z]),
            (0,
            Ye.useEffect)((function() {
                var n;
                (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && !(0,
                Ue.DJ)() && document.body.classList[R || Y ? "add" : "remove"]("landscape")
            }
            ), [R, Y, H]),
            (0,
            Ye.useEffect)((function() {
                var n;
                z && (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && document.body.classList.remove(Lt.pp, Lt.Ov)
            }
            ), [z]),
            (0,
            Ye.useEffect)((function() {
                var n;
                if (K || z || j) {
                    try {
                        null === (n = kt.Z.getState().play.recordingUserAudioTrack) || void 0 === n || n.stop(),
                        null === V || void 0 === V || V.getTracks().forEach((function(n) {
                            return n.stop()
                        }
                        ))
                    } catch (e) {}
                    Yn(!1)
                }
            }
            ), [z, K, j]),
            (0,
            Ye.useEffect)((function() {
                if (T) {
                    var n = 0;
                    Nn.current = setInterval((function() {
                        n += 60,
                        On({
                            type: _e.Z.UPDATE_PLAYTIME,
                            payload: {
                                playtime: n / 60
                            }
                        })
                    }
                    ), 6e4)
                }
                C && !T && Nn.current && clearInterval(Nn.current)
            }
            ), [T]),
            (0,
            Ye.useEffect)((function() {
                if (C && T) {
                    (0,
                    Xi.Z2)();
                    var n = (0,
                    Ue.GL)();
                    if (n) {
                        var e = n.type
                          , t = n.graceIntervalSecs
                          , i = n.disconnecTimer
                          , o = e === Lt.FP.TIME_LIMIT;
                        On({
                            type: Et.Z.ANDROID_WILL_DISCONNECT_TOAST,
                            payload: {
                                disconnecTimer: i,
                                graceIntervalSecs: t,
                                showSpotInterruptionScreen: !1,
                                androidWillDisconnectToast: !0,
                                sessionTimeLimitExceeded: o
                            }
                        })
                    }
                    (0,
                    Ge.wA)() && (0,
                    Ge.cv)()
                } else
                    C && ne() && (0,
                    Xi.Z2)()
            }
            ), [C, T]),
            (0,
            Ye.useEffect)((function() {
                X && C && (0,
                Ve.L9)(Lt.Mz)
            }
            ), [X, C]),
            (0,
            Ye.useEffect)((function() {
                var n = (ne() ? "" : P) || (Ln.packageName ? "" : "NoPackageName");
                Xn(n),
                n && (0,
                Ve.L9)("ShowErrorOverlay", {
                    err: n,
                    error: P
                })
            }
            ), [Ln, P]);
            var le = P !== qe.YR.FailureNoResource && !Bn && (!T || !C) && !K && !z && !j
              , de = !(0,
            Ue.DJ)() && L && window.Modernizr.peerconnection
              , ce = !(0,
            Ue.DJ)() && !L && C && le && !T && !ne() && window.Modernizr.peerconnection && !(!Y || H || _) && !U
              , se = (0,
            Ye.useCallback)((function() {
                var n = document.documentElement;
                Tn || Mi.J.fullscreenElement || Mi.J.mozFullScreenElement || Mi.J.webkitFullscreenElement || Mi.J.msFullscreenElement ? Tn && (Mi.J.fullscreenElement || Mi.J.mozFullScreenElement || Mi.J.webkitFullscreenElement || Mi.J.msFullscreenElement) && (0,
                Bi.Qg)(Mi.J) : n && (0,
                Bi.rM)(n),
                kt.Z.dispatch({
                    type: Et.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !Tn
                    }
                }),
                (0,
                pt.sZ)(),
                (0,
                pt.Ul)()
            }
            ), [Tn]);
            (0,
            Ye.useEffect)((function() {
                var n, e;
                Tn ? wn && (0,
                Ge.Dx)() && (null === (e = null === Sn || void 0 === Sn ? void 0 : Sn.current) || void 0 === e || e.classList.add("isRecording")) : null === (n = null === Sn || void 0 === Sn ? void 0 : Sn.current) || void 0 === n || n.classList.remove("isRecording")
            }
            ), [Tn]);
            var ue = function(n) {
                nn(!0),
                null === localStorage || void 0 === localStorage || localStorage.setItem(Lt.Wp, "true"),
                se(),
                "bottomBar" === n ? (0,
                Ve.L9)(Lt.S5, {
                    element: "LaunchQRScreen",
                    action: "TryNowClicked",
                    group: "TryAndDownload"
                }) : (0,
                Ve.L9)(Lt.S5, {
                    element: "LaunchScreen",
                    action: "TryNowClicked",
                    group: "TryAndDownload"
                })
            };
            return (0,
            et.BX)(et.HY, {
                children: [pn && (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Ni.default, {
                        async: !0,
                        src: "https://fundingchoicesmessages.google.com/i/pub-9233878085988971?ers=1",
                        nonce: "qMzTqTjB9TkXzg695cx_KA",
                        onError: function() {
                            (0,
                            Fe.zr)("fundingChoiceLoadError", !1),
                            On({
                                type: _e.Z.UPDATE_IMAERROR,
                                payload: {
                                    imaError: !0,
                                    adsEnded: !0
                                }
                            })
                        }
                    }), (0,
                    et.tZ)(Ni.default, {
                        nonce: "qMzTqTjB9TkXzg695cx_KA",
                        id: "googleInlineScript",
                        dangerouslySetInnerHTML: {
                            __html: '(function () {\n                  function signalGooglefcPresent() {\n                    if (!window.frames["googlefcPresent"]) {\n                      if (document.body) {\n                        const iframe = document.createElement("iframe");\n                        iframe.style =\n                          "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;";\n                        iframe.style.display = "none";\n                        iframe.name = "googlefcPresent";\n                        document.body.appendChild(iframe);\n                      } else {\n                        setTimeout(signalGooglefcPresent, 0);\n                      }\n                    }\n                  }\n                  signalGooglefcPresent();\n                })();'
                        }
                    }), (0,
                    et.tZ)(Ni.default, {
                        id: "googleScript",
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            qo.Ci)()
                        }
                    })]
                }), xn ? (0,
                et.tZ)(ro, {}) : $ ? P === qe.YR.FailureUnderMaintenance || (null === (A = null === (Z = null === (b = null === Ue.ZP || void 0 === Ue.ZP ? void 0 : Ue.ZP.appInfo) || void 0 === b ? void 0 : b.playFeFeatures) || void 0 === Z ? void 0 : Z.maintenanceWindowInfo) || void 0 === A ? void 0 : A.enable) ? (0,
                et.tZ)(Uo, {}) : (O || S) && !R && sessionStorage.getItem(Lt.o_) ? (0,
                et.tZ)($h, {}) : (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Wo.default, {
                        children: !S && k && (0,
                        et.tZ)("link", {
                            rel: "manifest",
                            href: "data:application/json;charset=utf-8,".concat((0,
                            Go.ZP)(Ln.appName, (0,
                            Ge.tq)()))
                        })
                    }), !((0,
                    Ue.DJ)() && (0,
                    Ge.tq)()) && (0,
                    et.BX)(et.HY, {
                        children: [(0,
                        et.tZ)(Rt.Z, {
                            toggle: de,
                            exitingDelay: .3,
                            children: (0,
                            et.tZ)(qt, {
                                toggle: de
                            })
                        }), (0,
                        et.tZ)(Rt.Z, {
                            toggle: ce,
                            exitingDelay: .6,
                            enteringDelay: .3,
                            children: (0,
                            et.tZ)(Vt, {
                                toggle: ce
                            })
                        })]
                    }), Dn && (0,
                    et.tZ)(Dh, {}), (0,
                    Ue.DJ)() && !(0,
                    Ge.tq)() && !L && !Bn && !C && !D && !I && !U && (0,
                    et.tZ)(At, {
                        isAppPage: S
                    }), (0,
                    Ue.DJ)() && (!(0,
                    Ge.tq)() || (0,
                    Ge.tq)() && !L) && (0,
                    et.tZ)(Ji.r, {
                        loading: null,
                        persistor: kt.D,
                        children: (0,
                        et.tZ)(Tg, {
                            isAppPage: S
                        })
                    }), F && (0,
                    et.tZ)(jo, {
                        isAppPage: S,
                        screen: "inGame",
                        handleTryNowClick: ue
                    }), U && (0,
                    et.tZ)(jo, {
                        isAppPage: S,
                        screen: "ending"
                    }), W && (0,
                    et.tZ)(dr, {}), !(0,
                    Ue.DJ)() && !L && (R || Y) && !_ && window.Modernizr.peerconnection && P !== qe.YR.FailureNoResource && !Bn && (!T && !ne() || !C) && !K && !z && !D && !j && !I && !U && (0,
                    et.tZ)(At, {
                        isAppPage: S
                    }), !L && (R || Y) && !_ && window.Modernizr.peerconnection && (0,
                    et.BX)(et.HY, {
                        children: [!(0,
                        Ue.DJ)() && (0,
                        et.tZ)(Ji.r, {
                            loading: null,
                            persistor: kt.D,
                            children: !Bn && (O || S) && (0,
                            et.tZ)(jf, {
                                overlayElement: ne() && C ? (0,
                                et.tZ)(ig.Z, {}) : null
                            })
                        }), (P === qe.YR.FailureServiceNotInRegion && !(0,
                        Ge.c6)(Ln.packageName) || P === qe.YR.FailureAppNotAvailable) && q ? (0,
                        et.tZ)(zo.Z, {}) : P === qe.YR.FailureServiceNotInRegion && (0,
                        Ge.c6)(Ln.packageName) || !P || "string" !== typeof P ? null : (0,
                        et.tZ)(Pg, {
                            error: P,
                            errorName: "PlayPage-".concat(P)
                        })]
                    }), !(0,
                    Ue.DJ)() && M && !B && (0,
                    et.tZ)(Ai, {}), !(0,
                    Ue.DJ)() && B && !M && !j && (0,
                    et.tZ)(Ci, {}), !(0,
                    Ue.DJ)() && !window.Modernizr.peerconnection && (0,
                    et.tZ)(gi, {}), !(0,
                    Ue.DJ)() && !M && !B && !j && N && (0,
                    et.tZ)(Li, {}), !L && window.Modernizr.peerconnection && !R && (!Y || H || _) && Qn && (0,
                    et.tZ)(Ct.default, {}), Pn && (0,
                    et.tZ)(kg.default, {}), zn && (0,
                    ng.Z)() && !(0,
                    Ge.tq)() && !(0,
                    Ge.Em)() && !(0,
                    Ge.zc)() && (0,
                    et.BX)(et.HY, {
                        children: [(0,
                        Ge.Dx)() && (0,
                        et.tZ)(Hf.CF, {
                            preload: "auto",
                            muted: !0,
                            ref: Kn,
                            style: {
                                display: kn ? "block" : "none"
                            },
                            className: "transition-video",
                            children: (0,
                            et.tZ)("source", {
                                src: "".concat(Lt.u1, "clapboardVideo.mp4"),
                                type: "video/mp4"
                            })
                        }), wn && Tn && !L && !ce && (!le || "Html" === Ue.ZP.appInfo.appType) && C && (0,
                        et.BX)(et.HY, {
                            children: [(0,
                            Ge.Dx)() && (0,
                            et.BX)(et.HY, {
                                children: [kn && (0,
                                et.BX)(Hf.B3, {
                                    children: [(0,
                                    et.tZ)(Ot.T1, {
                                        children: E("recordingTransitionTitle")
                                    }), (0,
                                    et.tZ)(Ot.T3, {
                                        children: E("recordingTransitionInfo")
                                    })]
                                }), (0,
                                et.tZ)(Hf.$_, {
                                    children: (0,
                                    et.tZ)("img", {
                                        alt: "Nowgg  ".concat(E("logo")),
                                        src: (0,
                                        ti.j)(Ih),
                                        style: {
                                            width: "124px",
                                            height: "48px",
                                            position: "absolute",
                                            left: "12px",
                                            bottom: "12px"
                                        }
                                    })
                                })]
                            }), (0,
                            et.tZ)(zf.Z, {}), (0,
                            et.tZ)(Yf.Z, {})]
                        }), bn && ((null === An || void 0 === An ? void 0 : An.current) || !(0,
                        Ge.Dx)()) && (0,
                        et.tZ)(nh, {}), Zn && (0,
                        et.tZ)(uh, {}), (Fn || Hn || _n) && (0,
                        et.tZ)(Yh, {})]
                    }), En && (0,
                    et.tZ)(Kh, {}), Gn && (0,
                    et.tZ)(mg, {}), Vn && !(0,
                    Ge.tq)() && (0,
                    et.tZ)(ug, {}), (null === qn || void 0 === qn ? void 0 : qn.name) && (T || (0,
                    Ue.DJ)() || Ue.ZP.isAppPage || Ue.ZP.isHomePage) && (!rn || C) && (0,
                    et.tZ)(Ag, {
                        taskName: qn.name,
                        taskRwd: qn.rewardNumRobux
                    })]
                }) : (0,
                et.tZ)(jo, {
                    isAppPage: S,
                    handleTryNowClick: ue,
                    screen: "loading"
                }), !(0,
                Ue.DJ)() && (0,
                et.BX)(et.HY, {
                    children: [(0,
                    et.tZ)(Vi, {}), (0,
                    et.tZ)(qi, {})]
                })]
            })
        }, Ig = Dg
    }
}]);
//# sourceMappingURL=56-fc0b8363d3fae21b.js.map
