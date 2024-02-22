(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    46473: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return L
            },
            Play: function() {
                return O
            }
        });
        var r = n(3021)
          , a = n(43626)
          , o = n(10020)
          , i = n(26544)
          , u = n(22899)
          , s = n(75555)
          , l = n(9008)
          , c = n(58309)
          , p = n(11720)
          , d = n(89598)
          , f = n(78294)
          , v = n(25617)
          , g = n(14266)
          , h = n(66971)
          , y = n(5522)
          , m = n(45628)
          , w = n(68615)
          , S = n(40942)
          , I = n(94381)
          , b = n(20902)
          , N = n(77691)
          , P = n(55072)
          , E = n(82258)
          , Z = n(1568)
          , _ = n(58157)
          , R = n(29061)
          , x = n(46646)
          , D = n(58502)
          , T = n(93056)
          , F = n(97997)
          , A = function() {
            return (A = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ).apply(this, arguments)
        }
          , k = function(e, t, n, r) {
            return new (n || (n = Promise))((function(a, o) {
                function i(e) {
                    try {
                        s(r.next(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(e) {
                    try {
                        s(r.throw(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, u)
                }
                s((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , C = function(e, t) {
            var n, r, a, o, i = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function u(o) {
                return function(u) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, o[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (o = [2 & o[0], a.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    a = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < a[1]) {
                                        i.label = a[1],
                                        a = o;
                                        break
                                    }
                                    if (a && i.label < a[2]) {
                                        i.label = a[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    a[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (u) {
                                o = [6, u],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, u])
                }
            }
        }
          , L = !0
          , O = function(e) {
            var t, n, L, O, U = e.appInfo, Y = e.authServiceHost, B = e.ngNcmHost, H = e.errorStatus, X = e.pwaIconHost, G = e.pwaNudgeDelayMs, j = e.features, M = e.authUseThirdPartyFlow, Q = e.prefix, q = e.authRedirectionUrl, J = (e.playDomain,
            e.errorStatusCode), V = e.adsConfigUrl, W = e.serviceStatus, z = e.countryCode, K = e.isAppPage, $ = e.isQuancastPopupSupportByCountry, ee = e.thirdPartyAuthUrl, te = (0,
            R.Z)({
                appInfo: U,
                ngNcmHost: B,
                features: j,
                authUseThirdPartyFlow: M,
                prefix: Q,
                authRedirectionUrl: q,
                serviceStatus: W,
                countryCode: z,
                isQuancastPopupSupportByCountry: $,
                authServiceHost: Y,
                pwaIconHost: X,
                pwaNudgeDelayMs: G,
                pageType: "playPage",
                thirdPartyAuthUrl: ee
            }), ne = te.isNowGGURL, re = te.adsEnabled, ae = U.media, oe = U.packageName, ie = (U.appType,
            (ae || {}).desktop), ue = (0,
            w.Z)(H ? "".concat(J || "404", " | now.gg") : ""), se = ue[0], le = ue[1], ce = (0,
            p.useRef)(), pe = null === (n = null === (t = U.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === n ? void 0 : n.isEnabled, de = (0,
            v.I0)(), fe = 36e4, ve = (0,
            p.useRef)(null);
            return (0,
            p.useEffect)((function() {
                var e = {};
                (0,
                s.I2)(),
                (0,
                d.L9)("PreloaderDisplayed", e);
                try {
                    if ((0,
                    N.EO)()) {
                        var t = (new Date).getTime();
                        sessionStorage.setItem(I.oE, t.toString())
                    }
                    if (!sessionStorage.getItem(I.bA)) {
                        var n = sessionStorage.getItem(I.UZ);
                        if (n) {
                            var r = Date.now() - parseInt(n, 10);
                            if (r >= fe)
                                (0,
                                y.Ip)({
                                    event: "six_minutes"
                                }),
                                sessionStorage.setItem(I.bA, "true");
                            else {
                                var a = fe - r;
                                ve.current = setTimeout((function() {
                                    (0,
                                    y.Ip)({
                                        event: "six_minutes"
                                    }),
                                    sessionStorage.setItem(I.bA, "true")
                                }
                                ), a)
                            }
                        } else {
                            t = Date.now();
                            sessionStorage.setItem(I.UZ, t.toString()),
                            ve.current = setTimeout((function() {
                                (0,
                                y.Ip)({
                                    event: "six_minutes"
                                }),
                                sessionStorage.setItem(I.bA, "true")
                            }
                            ), fe)
                        }
                    }
                } catch (p) {}
                W && I.VI[W] && (0,
                _.Z)(I.VI[W], "", "NowggIfpSdkEvent"),
                "ropro" === (0,
                f.We)().utmCampaign.toLowerCase() && le("RoPro Cloud Play via now.gg"),
                (0,
                f.DJ)() && le("Play ".concat(f.ZP.appInfo.appName, " Online"));
                var o = window.fetch
                  , i = /^\/play\/_next\/data\/.*\.json/;
                window.fetch = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return k(void 0, void 0, void 0, (function() {
                        var t;
                        return C(this, (function(n) {
                            return t = e[0],
                            i.test(t) ? [2, Promise.reject()] : [2, o.apply(void 0, e)]
                        }
                        ))
                    }
                    ))
                }
                ;
                var u = sessionStorage.getItem(b.$3);
                u && parseInt(u, 10) && de({
                    type: h.Z.SET_ROBLOX_EXPERIENCE_ID,
                    payload: {
                        robloxExperienceId: parseInt(u, 10),
                        currentRobloxExperienceTimer: Date.now()
                    }
                }),
                (0,
                d.L9)("PreloaderDisplayed2", e),
                localStorage.removeItem("A/B-experiment::play-page"),
                ce.current = (0,
                d.wn)(),
                sessionStorage.removeItem(I.dZ),
                de({
                    type: h.Z.UPDATE_ORIENTATION,
                    payload: {
                        orientation: U.initialOrientation
                    }
                }),
                (0,
                S.i1)();
                var l = (0,
                c._B)();
                return de({
                    type: g.Z.GUEST_FLOW,
                    payload: {
                        guestFlow: l
                    }
                }),
                l && de({
                    type: g.Z.SET_LOGGED_IN,
                    payload: {
                        isLoggedIn: !1,
                        showPreloader: !1
                    }
                }),
                (0,
                d.L9)("PreloaderDisplayed3", e),
                function() {
                    clearInterval(ce.current),
                    ve.current && clearTimeout(ve.current)
                }
            }
            ), []),
            H ? (0,
            F.tZ)(D.NotFound, {
                errorStatusCode: J,
                prefix: Q,
                ngNcmHost: B,
                errorReason: "StatusCode".concat(J, "-Play").concat(H),
                isQuancastPopupSupportByCountry: $
            }) : (0,
            F.BX)(i.Pw, {
                children: [(0,
                F.BX)(l.default, {
                    children: [(0,
                    F.tZ)("meta", {
                        name: "robots",
                        content: "noindex,nofollow,noarchive"
                    }), (0,
                    F.tZ)("meta", {
                        httpEquiv: "Cache-control",
                        content: "private, no-cache, no-store, max-age=0, must-revalidate"
                    }), (0,
                    F.tZ)("meta", {
                        httpEquiv: "Pragma",
                        content: "no-cache"
                    }), (0,
                    F.tZ)("script", {
                        dangerouslySetInnerHTML: {
                            __html: (0,
                            y.ZP)(A(A({}, U), {
                                authServiceHost: Y
                            }), oe, Q, !1, null === (O = null === (L = U.playFeFeatures) || void 0 === L ? void 0 : L.tryAndDownload) || void 0 === O ? void 0 : O.isEnabled)
                        }
                    }), (0,
                    Z.LX)((null === U || void 0 === U ? void 0 : U.metaTags) || ""), se && (0,
                    F.tZ)("title", {
                        children: se
                    }), (0,
                    F.tZ)("script", {
                        children: "document.addEventListener('wheel', function(e) { if (e.ctrlKey) { e.preventDefault(); }}, { passive: false });\n          document.addEventListener('touchmove', function (event) { if (event.touches.length > 1) { event.preventDefault();} }, { passive: false });\n          document.addEventListener('gesturestart', function (event) { event.preventDefault() }, { passive: false });\n          document.addEventListener('gesturechange', function (event) { event.preventDefault() }, { passive: false });\n          document.addEventListener('gestureend', function (event) { event.preventDefault() }, { passive: false });"
                    })]
                }), (0,
                F.BX)(r.im, {
                    desktopBanner: null === ie || void 0 === ie ? void 0 : ie.banner,
                    children: [(0,
                    F.tZ)(u.Z, {}), (0,
                    F.tZ)("noscript", {
                        style: {
                            margin: "auto",
                            borderRadius: "20px",
                            padding: "20px",
                            textAlign: "center",
                            fontSize: "x-large",
                            color: "#ffffff",
                            background: "rgba(0, 0, 0, 0.8)"
                        },
                        children: "You need to enable JavaScript to run this app."
                    }), (0,
                    F.tZ)(o.x.Provider, {
                        value: U,
                        children: (0,
                        F.BX)(a.Z, {
                            children: [(!W || W === m.YR.FailureServiceNotInRegion && (0,
                            N.c6)(U.packageName)) && (0,
                            F.BX)(F.HY, {
                                children: [re && (0,
                                F.tZ)(x.Z, {
                                    isNowGGURL: ne
                                }), (0,
                                F.tZ)(T.PlayPage, {
                                    manifest: !0,
                                    adsConfigUrl: V,
                                    isAppPage: K
                                })]
                            }), (W === m.YR.FailureServiceNotInRegion && !(0,
                            N.c6)(U.packageName) || W === m.YR.FailureAppNotAvailable) && pe ? (0,
                            F.tZ)(P.Z, {}) : (W === m.YR.Failure || W === m.YR.FailureNoResource || W === m.YR.FailureMobileNotSupported || W === m.YR.FailureDesktopNotSupported || W === m.YR.FailureTabletNotSupported || W === m.YR.FailureOsNotSupported || W === m.YR.FailureServiceNotInRegion && !(0,
                            N.c6)(U.packageName) || W === m.YR.FailureAppNotAvailable) && (0,
                            F.tZ)(E.default, {
                                error: W,
                                errorName: "PageServiceStatus-".concat(W)
                            })]
                        })
                    })]
                })]
            })
        };
        t.default = O
    },
    45301: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(46473)
        }
        ])
    }
}, function(e) {
    e.O(0, [774, 164, 919, 806, 804, 166, 742, 459, 761, 235, 56, 673, 888, 179], (function() {
        return t = 45301,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=index-a50917ecf3fb1f24.js.map
