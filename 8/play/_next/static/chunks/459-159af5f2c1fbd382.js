(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[459, 762], {
    18552: function(n, e, t) {
        var i = t(10852)(t(55639), "DataView");
        n.exports = i
    },
    53818: function(n, e, t) {
        var i = t(10852)(t(55639), "Promise");
        n.exports = i
    },
    58525: function(n, e, t) {
        var i = t(10852)(t(55639), "Set");
        n.exports = i
    },
    70577: function(n, e, t) {
        var i = t(10852)(t(55639), "WeakMap");
        n.exports = i
    },
    9454: function(n, e, t) {
        var i = t(44239)
          , r = t(37005);
        n.exports = function(n) {
            return r(n) && "[object Arguments]" == i(n)
        }
    },
    38749: function(n, e, t) {
        var i = t(44239)
          , r = t(41780)
          , o = t(37005)
          , a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0,
        a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1,
        n.exports = function(n) {
            return o(n) && r(n.length) && !!a[i(n)]
        }
    },
    280: function(n, e, t) {
        var i = t(27360)
          , r = t(86916)
          , o = Object.prototype.hasOwnProperty;
        n.exports = function(n) {
            if (!i(n))
                return r(n);
            var e = [];
            for (var t in Object(n))
                o.call(n, t) && "constructor" != t && e.push(t);
            return e
        }
    },
    7518: function(n) {
        n.exports = function(n) {
            return function(e) {
                return n(e)
            }
        }
    },
    64160: function(n, e, t) {
        var i = t(18552)
          , r = t(57071)
          , o = t(53818)
          , a = t(58525)
          , l = t(70577)
          , c = t(44239)
          , d = t(80346)
          , s = "[object Map]"
          , p = "[object Promise]"
          , u = "[object Set]"
          , f = "[object WeakMap]"
          , g = "[object DataView]"
          , h = d(i)
          , x = d(r)
          , m = d(o)
          , b = d(a)
          , w = d(l)
          , y = c;
        (i && y(new i(new ArrayBuffer(1))) != g || r && y(new r) != s || o && y(o.resolve()) != p || a && y(new a) != u || l && y(new l) != f) && (y = function(n) {
            var e = c(n)
              , t = "[object Object]" == e ? n.constructor : void 0
              , i = t ? d(t) : "";
            if (i)
                switch (i) {
                case h:
                    return g;
                case x:
                    return s;
                case m:
                    return p;
                case b:
                    return u;
                case w:
                    return f
                }
            return e
        }
        ),
        n.exports = y
    },
    27360: function(n) {
        var e = Object.prototype;
        n.exports = function(n) {
            var t = n && n.constructor;
            return n === ("function" == typeof t && t.prototype || e)
        }
    },
    86916: function(n, e, t) {
        var i = t(5569)(Object.keys, Object);
        n.exports = i
    },
    31167: function(n, e, t) {
        n = t.nmd(n);
        var i = t(31957)
          , r = e && !e.nodeType && e
          , o = r && n && !n.nodeType && n
          , a = o && o.exports === r && i.process
          , l = function() {
            try {
                var n = o && o.require && o.require("util").types;
                return n || a && a.binding && a.binding("util")
            } catch (e) {}
        }();
        n.exports = l
    },
    5569: function(n) {
        n.exports = function(n, e) {
            return function(t) {
                return n(e(t))
            }
        }
    },
    35694: function(n, e, t) {
        var i = t(9454)
          , r = t(37005)
          , o = Object.prototype
          , a = o.hasOwnProperty
          , l = o.propertyIsEnumerable
          , c = i(function() {
            return arguments
        }()) ? i : function(n) {
            return r(n) && a.call(n, "callee") && !l.call(n, "callee")
        }
        ;
        n.exports = c
    },
    1469: function(n) {
        var e = Array.isArray;
        n.exports = e
    },
    98612: function(n, e, t) {
        var i = t(23560)
          , r = t(41780);
        n.exports = function(n) {
            return null != n && r(n.length) && !i(n)
        }
    },
    44144: function(n, e, t) {
        n = t.nmd(n);
        var i = t(55639)
          , r = t(95062)
          , o = e && !e.nodeType && e
          , a = o && n && !n.nodeType && n
          , l = a && a.exports === o ? i.Buffer : void 0
          , c = (l ? l.isBuffer : void 0) || r;
        n.exports = c
    },
    41609: function(n, e, t) {
        var i = t(280)
          , r = t(64160)
          , o = t(35694)
          , a = t(1469)
          , l = t(98612)
          , c = t(44144)
          , d = t(27360)
          , s = t(36719)
          , p = Object.prototype.hasOwnProperty;
        n.exports = function(n) {
            if (null == n)
                return !0;
            if (l(n) && (a(n) || "string" == typeof n || "function" == typeof n.splice || c(n) || s(n) || o(n)))
                return !n.length;
            var e = r(n);
            if ("[object Map]" == e || "[object Set]" == e)
                return !n.size;
            if (d(n))
                return !i(n).length;
            for (var t in n)
                if (p.call(n, t))
                    return !1;
            return !0
        }
    },
    41780: function(n) {
        n.exports = function(n) {
            return "number" == typeof n && n > -1 && n % 1 == 0 && n <= 9007199254740991
        }
    },
    36719: function(n, e, t) {
        var i = t(38749)
          , r = t(7518)
          , o = t(31167)
          , a = o && o.isTypedArray
          , l = a ? r(a) : i;
        n.exports = l
    },
    95062: function(n) {
        n.exports = function() {
            return !1
        }
    },
    20948: function(n, e, t) {
        "use strict";
        var i = t(66749)
          , r = t(66971)
          , o = t(50912)
          , a = t(11720)
          , l = t(25617)
          , c = t(14266)
          , d = t(78294)
          , s = t(58309)
          , p = t(97997);
        e.Z = function() {
            var n = (0,
            l.I0)()
              , e = (0,
            l.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , t = (0,
            a.useState)(null)
              , u = t[0]
              , f = t[1]
              , g = (0,
            l.v9)((function(n) {
                return n.play.draggableState
            }
            ))
              , h = (0,
            l.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , x = (0,
            l.v9)((function(n) {
                return n.auth.guestFlow
            }
            ));
            (0,
            a.useEffect)((function() {
                var n = e ? (0,
                s.et)() : null;
                n && f(n),
                !e && (0,
                d.Us)() && o.Z.dispatch({
                    type: r.Z.UPDATE_LOGIN_TOOLTIP,
                    payload: {
                        isTooltipVisible: !0
                    }
                })
            }
            ), []);
            var m = function() {
                "drag" !== g && ((0,
                d.Sr)(),
                o.Z.dispatch({
                    type: r.Z.UPDATE_LOGIN_TOOLTIP,
                    payload: {
                        isTooltipVisible: !1
                    }
                }),
                o.Z.dispatch({
                    type: r.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                }),
                n(!h || e ? x && !e ? {
                    type: c.Z.TOGGLE_LOGIN,
                    payload: {
                        showLogin: !0
                    }
                } : {
                    type: r.Z.MODAL_STATUS,
                    payload: {
                        showAboutUs: !0
                    }
                } : {
                    type: r.Z.UPDATE_IS_RECORDING,
                    payload: {
                        showRecordingModalBeforeExit: !0,
                        showRecordingModalBeforeExitSource: "userLogin"
                    }
                }))
            };
            return (0,
            p.tZ)(i.Z, {
                isLoggedIn: e,
                user: u,
                src: null === u || void 0 === u ? void 0 : u.avatar,
                click: function() {
                    return m()
                },
                size: 24
            })
        }
    },
    39475: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return g
            }
        });
        var i, r, o, a = t(79354), l = t(77691), c = t(20902), d = t(50445), s = t(44141), p = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, u = (0,
        d.ZP)(s.aU)(o || (o = p(["\n  width: 40px;\n  height: 40px;\n  ", "\n\n  ", "\n"], ["\n  width: 40px;\n  height: 40px;\n  ", "\n\n  ", "\n"])), (function(n) {
            return n.isPortrait && "\n    order: 3;\n    margin-bottom: auto;\n  "
        }
        ), (function(n) {
            var e = n.isMobile
              , t = n.isPortrait;
            return e || t ? (0,
            d.iv)(i || (i = p(["\n    &> svg:nth-child(2) {\n      display: none;\n    }\n  "], ["\n    &> svg:nth-child(2) {\n      display: none;\n    }\n  "]))) : (0,
            d.iv)(r || (r = p(["\n    &> svg:nth-child(1) {\n      display: none;\n    } \n  "], ["\n    &> svg:nth-child(1) {\n      display: none;\n    } \n  "])))
        }
        )), f = t(97997), g = function(n) {
            var e = n.isPortrait;
            return (0,
            f.BX)(u, {
                isPortrait: e,
                isMobile: (0,
                l.tq)(),
                onClick: function() {
                    return (0,
                    c.vT)(!0)
                },
                className: "back-btn",
                children: [(0,
                f.tZ)(a.eJ, {}), (0,
                f.tZ)(a.lU, {})]
            })
        }
    },
    50855: function(n, e, t) {
        "use strict";
        var i = t(59930)
          , r = t(11720)
          , o = t(26793)
          , a = t(25617)
          , l = t(97997)
          , c = {
            support: {
                title: "helpAndSupport",
                action: "GET_SUPPORT"
            },
            gamepad: {
                title: "controls.title",
                action: "TOGGLE_SIDEBAR",
                fontSize: "23px"
            }
        };
        e.Z = function(n) {
            var e = n.type
              , t = (0,
            r.useState)({})
              , d = t[0]
              , s = t[1]
              , p = (0,
            o.$)().t
              , u = (0,
            a.I0)()
              , f = (0,
            a.v9)((function(n) {
                return n.play.draggableState
            }
            ));
            (0,
            r.useEffect)((function() {
                s(e && c[e] ? c[e] : {})
            }
            ), [e]);
            var g = (0,
            r.useCallback)((function() {
                u({
                    type: d.action
                })
            }
            ), [d]);
            return (0,
            l.tZ)(i.Z, {
                title: p(d.title),
                onClick: "drag" === f ? function() {}
                : g,
                name: e
            })
        }
    },
    79717: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return u
            }
        });
        var i = t(25617)
          , r = t(77691)
          , o = t(26793)
          , a = t(66971)
          , l = t(44141)
          , c = t(45024)
          , d = {
            src: "/play/_next/static/media/dollar.77f6adad.svg",
            height: 25,
            width: 24
        }
          , s = t(7969)
          , p = t(97997)
          , u = function() {
            var n = (0,
            i.I0)()
              , e = (0,
            o.$)().t;
            return (0,
            i.v9)((function(n) {
                return n.play.iapUserLogin
            }
            )) ? null : (0,
            p.tZ)(l.aU, {
                isMobile: (0,
                r.tq)(),
                id: "ng-iap",
                onClick: function() {
                    return n({
                        type: a.Z.TOGGLE_IAP_POPUP_STATE
                    })
                },
                children: (0,
                p.tZ)(s.X7, {
                    className: "".concat((0,
                    r.tq)() && "mobile"),
                    children: (0,
                    p.tZ)("img", {
                        alt: e("iap"),
                        style: {
                            opacity: (0,
                            r.tq)() ? .7 : 1
                        },
                        src: (0,
                        c.j)(d)
                    })
                })
            })
        }
    },
    7969: function(n, e, t) {
        "use strict";
        t.d(e, {
            X7: function() {
                return u
            },
            Bp: function() {
                return f
            },
            wf: function() {
                return g
            },
            RV: function() {
                return h
            },
            iO: function() {
                return x
            }
        });
        var i, r, o, a, l, c, d = t(50445), s = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, p = (0,
        d.F4)(i || (i = s(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))), u = d.ZP.div(r || (r = s(["\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n"], ["\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n"]))), f = d.ZP.div(o || (o = s(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  &.mobile{\n    z-index: 99;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  &.mobile{\n    z-index: 99;\n  }\n"])), (function(n) {
            return n.theme.colors.black70
        }
        )), g = d.ZP.div(a || (a = s(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(60px);\n  border-radius: ", ";\n  padding: 12px 16px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  i{\n    position: absolute;\n    top: 18px;\n    right: 18px;\n    cursor: pointer;\n  }\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0px;\n    max-width: 313px;\n  }\n  img{\n    animation: ", " 1s linear infinite;\n    width: 28px;\n    height: 28px;\n    margin: 0px auto;\n    margin-bottom: 12px;\n  }\n  &.loaderContainer{\n    padding: 20px 24px 24px 24px;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(60px);\n  border-radius: ", ";\n  padding: 12px 16px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  i{\n    position: absolute;\n    top: 18px;\n    right: 18px;\n    cursor: pointer;\n  }\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0px;\n    max-width: 313px;\n  }\n  img{\n    animation: ", " 1s linear infinite;\n    width: 28px;\n    height: 28px;\n    margin: 0px auto;\n    margin-bottom: 12px;\n  }\n  &.loaderContainer{\n    padding: 20px 24px 24px 24px;\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.border.base3
        }
        ), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), p), h = d.ZP.div(l || (l = s(["\n  height: 36px;\n  background: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: ", ";\n  margin-top: 16px;\n\n  cursor: pointer;\n  h6{\n    margin: 0px;\n    line-height: 36px;\n    text-align: center;\n  }\n"], ["\n  height: 36px;\n  background: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: ", ";\n  margin-top: 16px;\n\n  cursor: pointer;\n  h6{\n    margin: 0px;\n    line-height: 36px;\n    text-align: center;\n  }\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        )), x = d.ZP.div(c || (c = s(["\n  position: fixed;\n  left: 50%;\n  top: -10px;\n  transform: translate(-50%, -100%);\n  padding: 8px 16px;\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 1s ease-in-out;\n  z-index: 99;\n  &.slideUp {\n    top: -100px;\n    opacity: 0;\n  }\n  &.slideDown {\n    top: 100px;\n    opacity: 1;\n  }\n  i{\n    font-size: 15px;\n    color: ", ";\n    margin-right: 5px;\n  }\n  p{\n    margin: 0px;\n  }\n"], ["\n  position: fixed;\n  left: 50%;\n  top: -10px;\n  transform: translate(-50%, -100%);\n  padding: 8px 16px;\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 1s ease-in-out;\n  z-index: 99;\n  &.slideUp {\n    top: -100px;\n    opacity: 0;\n  }\n  &.slideDown {\n    top: 100px;\n    opacity: 1;\n  }\n  i{\n    font-size: 15px;\n    color: ", ";\n    margin-right: 5px;\n  }\n  p{\n    margin: 0px;\n  }\n"])), (function(n) {
            return n.theme.colors.green
        }
        ), (function(n) {
            return n.theme.border.base5
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ))
    },
    39426: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            ActionItems: function() {
                return Gs
            },
            Controller: function() {
                return Ts
            },
            GameActions: function() {
                return Ys
            },
            GlobalActions: function() {
                return Vs
            },
            MouseLock: function() {
                return Ds
            },
            MouseSensitivity: function() {
                return _s
            },
            ProfilesAction: function() {
                return Ns
            },
            RecordMic: function() {
                return Ls
            },
            RecordWidget: function() {
                return Xs
            },
            SoftKeyboardAction: function() {
                return Ms
            },
            SupportAction: function() {
                return Fs
            },
            TopActions: function() {
                return Hs
            },
            VideoPortalAction: function() {
                return Us
            },
            default: function() {
                return Qs
            }
        });
        var i, r, o, a, l, c, d, s, p, u, f, g, h, x, m, b, w, y, v, Z, P, k, A, S, E, O, I, C, j, R, B, z, T, D, X, L, _, F, U, M, N, G, V, Y, H, Q, q, W, J, K, $, nn, en, tn, rn, on, an, ln, cn, dn, sn, pn, un, fn, gn, hn, xn, mn, bn, wn, yn, vn, Zn, Pn, kn, An, Sn, En, On, In, Cn, jn, Rn, Bn, zn, Tn, Dn, Xn, Ln, _n, Fn, Un, Mn, Nn, Gn, Vn, Yn, Hn, Qn, qn, Wn, Jn, Kn, $n, ne, ee, te, ie, re, oe, ae, le, ce, de, se, pe, ue, fe, ge, he, xe, me, be, we, ye, ve, Ze, Pe, ke, Ae, Se, Ee, Oe, Ie, Ce, je, Re, Be, ze, Te, De, Xe, Le, _e, Fe, Ue, Me, Ne, Ge, Ve, Ye, He, Qe, qe, We, Je, Ke, $e, nt, et, tt, it, rt, ot, at, lt, ct, dt, st, pt, ut, ft, gt, ht, xt, mt, bt, wt, yt, vt, Zt, Pt, kt, At, St, Et, Ot, It, Ct, jt, Rt, Bt, zt, Tt, Dt, Xt, Lt, _t, Ft, Ut, Mt, Nt, Gt, Vt, Yt, Ht, Qt, qt, Wt, Jt, Kt, $t, ni, ei, ti, ii, ri, oi, ai, li, ci, di, si = t(92809), pi = t(78294), ui = t(50912), fi = t(89598), gi = t(3053), hi = t(80252), xi = t(79717), mi = t(25617), bi = t(11720), wi = t(94381), yi = t(88557), vi = t(26793), Zi = {
            src: "/play/_next/static/media/video-folder.cf40a9ae.svg",
            height: 24,
            width: 24
        }, Pi = {
            src: "/play/_next/static/media/soft-keyboard.bf96f83c.svg",
            height: 24,
            width: 24
        }, ki = {
            src: "/play/_next/static/media/leaderboard-cup.20bae4fd.svg",
            height: 24,
            width: 24
        }, Ai = t(45024), Si = t(67881), Ei = t(77691), Oi = t(66971), Ii = t(74803), Ci = t(99719), ji = t(4532), Ri = t(51591), Bi = t(12422), zi = t(79305), Ti = t(45628), Di = t(50855), Xi = t(61740), Li = t(59930), _i = t(98219), Fi = t(97997), Ui = function() {
            var n = (0,
            vi.$)().t
              , e = (0,
            mi.v9)((function(n) {
                return n.play.mouseLockActive
            }
            ));
            return (0,
            Fi.tZ)(Li.Z, {
                alt: n("lockCursor"),
                title: n("lockCursor"),
                onClick: function(n) {
                    (0,
                    _i.E4)(n.clientX, n.clientY)
                },
                name: e ? "lock" : "unlock"
            })
        }, Mi = t(40434), Ni = t(6094), Gi = t(50445), Vi = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Yi = Gi.ZP.div(i || (i = Vi(["\n  position: absolute;\n  top: 40px;\n  right: 0px;\n  background: ", ";\n  vertical-align: middle;\n  padding: 8px;\n  width: 200px;\n  z-index: 1;\n  justify-content: center;\n  pointer-events: all;\n  border-radius: 0px 0px 4px  4px;\n  flex-direction: column;\n"], ["\n  position: absolute;\n  top: 40px;\n  right: 0px;\n  background: ", ";\n  vertical-align: middle;\n  padding: 8px;\n  width: 200px;\n  z-index: 1;\n  justify-content: center;\n  pointer-events: all;\n  border-radius: 0px 0px 4px  4px;\n  flex-direction: column;\n"])), (function(n) {
            return n.theme.colors.base600
        }
        )), Hi = Gi.ZP.p(r || (r = Vi(["\n  color: ", ";\n  margin: 0;\n  text-align: left;\n  font-size: 10px;\n  line-height: 15px;\n  font-weight: 500;\n"], ["\n  color: ", ";\n  margin: 0;\n  text-align: left;\n  font-size: 10px;\n  line-height: 15px;\n  font-weight: 500;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Qi = Gi.ZP.div(o || (o = Vi(["\n  display: flex;\n  align-items: center;\n  \n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      margin: 0; \n  }\n"], ["\n  display: flex;\n  align-items: center;\n  \n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      margin: 0; \n  }\n"]))), qi = Gi.ZP.input(a || (a = Vi(["\n  width: 142px;\n  margin-right: 8px;\n  accent-color: ", ";\n  height: 3px;\n  cursor: pointer;\n"], ["\n  width: 142px;\n  margin-right: 8px;\n  accent-color: ", ";\n  height: 3px;\n  cursor: pointer;\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        )), Wi = Gi.ZP.input(l || (l = Vi(["\n  width: 32px;\n  height: 24px;\n  background: ", ";\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n  text-align: center;\n  border: 0px;\n"], ["\n  width: 32px;\n  height: 24px;\n  background: ", ";\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n  text-align: center;\n  border: 0px;\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), Ji = function(n) {
            var e = n.fsWidget
              , t = n.heading
              , i = void 0 === t ? "mouseSensitivity" : t
              , r = n.prepend
              , o = void 0 === r ? null : r
              , a = (0,
            vi.$)().t
              , l = (0,
            mi.v9)((function(n) {
                return n.appPreferences.mouseSensitivity || wi.rL
            }
            ))
              , c = (0,
            mi.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            ))
              , d = (0,
            mi.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , s = (0,
            mi.I0)();
            return (0,
            Fi.BX)(Fi.HY, {
                children: [(0,
                Fi.tZ)(Li.Z, {
                    id: "ng-sensitivity",
                    alt: a("mouseSensitivity"),
                    title: a("mouseSensitivity"),
                    onClick: function() {
                        s({
                            type: Oi.Z.SET_SENSITIVITY_POPUP,
                            payload: {
                                isSensitivityPopupOpen: !c
                            }
                        })
                    },
                    name: "sensi"
                }), (0,
                Fi.BX)(Yi, {
                    style: {
                        display: c && (d && e || !d && !e) ? "inherit" : "none"
                    },
                    children: [o, (0,
                    Fi.tZ)(Hi, {
                        children: a(i)
                    }), (0,
                    Fi.BX)(Qi, {
                        children: [(0,
                        Fi.tZ)(qi, {
                            id: "sensitivity-slider",
                            type: "range",
                            min: "1",
                            max: "10",
                            value: l,
                            step: "1",
                            onChange: function(n) {
                                var e = parseInt(n.target.value, 10);
                                s({
                                    type: Mi.Z.MOUSE_SENSITIVITY,
                                    payload: {
                                        mouseSensitivity: e
                                    }
                                }),
                                Ni.ZP.updateCfgWithSensitivity()
                            }
                        }), (0,
                        Fi.tZ)(Wi, {
                            id: "sensitivity-box",
                            type: "number",
                            min: "1",
                            max: "10",
                            step: "1",
                            value: l,
                            onChange: function(n) {
                                var e = parseInt(n.target.value, 10);
                                e < 1 && (e = 1),
                                e > 10 && (e = 10),
                                s({
                                    type: Mi.Z.MOUSE_SENSITIVITY,
                                    payload: {
                                        mouseSensitivity: e
                                    }
                                }),
                                Ni.ZP.updateCfgWithSensitivity()
                            },
                            onFocus: function() {
                                s({
                                    type: Oi.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !0
                                    }
                                })
                            },
                            onBlur: function() {
                                s({
                                    type: Oi.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !1
                                    }
                                })
                            }
                        })]
                    })]
                })]
            })
        }, Ki = t(44141), $i = t(66749), nr = t(58309), er = t(95509), tr = {
            src: "/play/_next/static/media/recents.97c17e89.svg",
            height: 16,
            width: 16
        }, ir = t(14266), rr = t(13978), or = {
            src: "/play/_next/static/media/help.5d35d39c.svg",
            height: 24,
            width: 24
        }, ar = {
            src: "/play/_next/static/media/close.16e94527.svg",
            height: 18,
            width: 18
        }, lr = {
            src: "/play/_next/static/media/selector.4ef27b8a.svg",
            height: 55,
            width: 88
        }, cr = t(7940), dr = t(93772), sr = t(93224), pr = t(94564), ur = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, fr = Gi.ZP.div(c || (c = ur(["\n  display: flex;\n  width: 340px;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  background: rgba(255, 255, 255, 0.20);\n  backdrop-filter: blur(60px);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  .profile-edit {\n    margin: 0;\n    width: 100%;\n\n    &:before {\n      content: '@';\n      position: absolute;\n      font-size: 16px;\n      font-style: normal;\n      left: 9px;\n      top: 2px;\n      color: #fff;\n    }\n    label {\n      display: none;\n    }\n    input {\n      font-size: 14px;\n      line-height: 18px;\n      padding: 6px 12px 6px 28px;\n      &:not(:focus) {\n        border-color: ", ";\n      }\n    }\n  }\n\n  .icon-cross-thin {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  display: flex;\n  width: 340px;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  background: rgba(255, 255, 255, 0.20);\n  backdrop-filter: blur(60px);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  .profile-edit {\n    margin: 0;\n    width: 100%;\n\n    &:before {\n      content: '@';\n      position: absolute;\n      font-size: 16px;\n      font-style: normal;\n      left: 9px;\n      top: 2px;\n      color: #fff;\n    }\n    label {\n      display: none;\n    }\n    input {\n      font-size: 14px;\n      line-height: 18px;\n      padding: 6px 12px 6px 28px;\n      &:not(:focus) {\n        border-color: ", ";\n      }\n    }\n  }\n\n  .icon-cross-thin {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), gr = Gi.ZP.div(d || (d = ur(["\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  align-self: stretch;\n  border-radius: 8px;\n"], ["\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  align-self: stretch;\n  border-radius: 8px;\n"]))), hr = (Gi.ZP.div(s || (s = ur(["\n  display: flex;\n  flex-direction: column;\n  align-items: normal;\n  gap: 8px;\n  flex: 1 0 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: normal;\n  gap: 8px;\n  flex: 1 0 0;\n"]))),
        Gi.ZP.div(p || (p = ur(["\n  display: flex;\n  padding-top: 4px;\n  align-items: flex-start;\n  gap: 16px;\n  align-self: stretch;\n\n  button {\n    width: 50%;\n  }\n"], ["\n  display: flex;\n  padding-top: 4px;\n  align-items: flex-start;\n  gap: 16px;\n  align-self: stretch;\n\n  button {\n    width: 50%;\n  }\n"])))), xr = Gi.ZP.div(u || (u = ur(["\n  display: flex;\n  width: auto;\n  height: auto;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  width: auto;\n  height: auto;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"]))), mr = Gi.ZP.div(f || (f = ur(["\n  display: flex;\n  padding: 6px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border-radius: 50%;\n  background: rgba(255, 66, 165, 1);\n  z-index: 1;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"], ["\n  display: flex;\n  padding: 6px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border-radius: 50%;\n  background: rgba(255, 66, 165, 1);\n  z-index: 1;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"])), (0,
        sr.gB)(Ci.Z.t("newAvatar"))), br = (Gi.ZP.div(g || (g = ur(["\n  width: 124px;\n  align-self: flex-start;\n  margin-top: 8px;\n  gap: 4px;\n  background: transparent;\n  display: -webkit-box;\n  cursor: pointer;\n"], ["\n  width: 124px;\n  align-self: flex-start;\n  margin-top: 8px;\n  gap: 4px;\n  background: transparent;\n  display: -webkit-box;\n  cursor: pointer;\n"]))),
        Gi.ZP.div(h || (h = ur(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n\n"])))), wr = (0,
        Gi.ZP)(pr.Rh)(x || (x = ur(["\n  color: ", ";\n  text-transform: uppercase;\n\n"], ["\n  color: ", ";\n  text-transform: uppercase;\n\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), yr = Gi.ZP.div(m || (m = ur(["\n  display: flex;\n  width: 292px;\n  height: 32px;\n  padding: 4px 0px 4px 12px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.10);\n"], ["\n  display: flex;\n  width: 292px;\n  height: 32px;\n  padding: 4px 0px 4px 12px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.10);\n"]))), vr = Gi.ZP.div(b || (b = ur(["\n  background: rgba(255, 66, 165, 1);\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    top: unset !important;\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"], ["\n  background: rgba(255, 66, 165, 1);\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    top: unset !important;\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"])), (0,
        sr.gB)(Ci.Z.t("newUsername"))), Zr = (Gi.ZP.label(w || (w = ur(["\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0.15em;\n  text-align: left;\n  margin-bottom: -12px;\n  text-transform: uppercase;\n"], ["\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0.15em;\n  text-align: left;\n  margin-bottom: -12px;\n  text-transform: uppercase;\n"]))),
        {
            src: "/play/_next/static/media/tick.f57f2ee3.svg",
            height: 16,
            width: 16
        }), Pr = t(15132), kr = t(79354), Ar = t(59532), Sr = function(n) {
            var e = n.onBack
              , t = (0,
            vi.$)().t
              , i = (0,
            bi.useState)("")
              , r = i[0]
              , o = i[1]
              , a = (0,
            bi.useState)("")
              , l = a[0]
              , c = a[1]
              , d = (0,
            bi.useState)("")
              , s = d[0]
              , p = d[1]
              , u = (0,
            bi.useState)("")
              , f = u[0]
              , g = u[1]
              , h = (0,
            bi.useState)("")
              , x = h[0]
              , m = h[1]
              , b = (0,
            bi.useState)("")
              , w = b[0]
              , y = b[1]
              , v = (0,
            bi.useState)(!1)
              , Z = v[0]
              , P = v[1]
              , k = (0,
            bi.useState)(!1)
              , A = k[0]
              , S = k[1]
              , E = (0,
            mi.I0)()
              , O = function() {
                g(""),
                m(""),
                y("")
            };
            return (0,
            Fi.BX)(fr, {
                style: {
                    alignItems: "center"
                },
                children: [(0,
                Fi.BX)(Ar.Lb, {
                    style: {
                        justifyContent: "space-between",
                        width: "100%"
                    },
                    children: [(0,
                    Fi.tZ)("span", {
                        onClick: e,
                        children: (0,
                        Fi.tZ)(kr.eJ, {
                            style: {
                                cursor: "pointer"
                            }
                        })
                    }), (0,
                    Fi.tZ)(pr.Bb, {
                        style: {
                            fontSize: "20px"
                        },
                        children: t("changePassword")
                    }), (0,
                    Fi.tZ)(Li.Z, {
                        onClick: function() {
                            E({
                                type: ir.Z.UPDATE_PASSWORD,
                                payload: {
                                    showChangePwdModal: !1
                                }
                            })
                        },
                        name: "cross-thin",
                        size: 14,
                        style: {
                            position: "static"
                        }
                    })]
                }), (0,
                Fi.BX)("div", {
                    style: {
                        width: "100%"
                    },
                    children: [(0,
                    Fi.tZ)(dr.II, {
                        title: t("currentPwd"),
                        onUpdate: function(n) {
                            o(n),
                            O()
                        },
                        placeholder: "********",
                        type: "password",
                        error: !!f,
                        errorMsg: f
                    }), (0,
                    Fi.tZ)(dr.II, {
                        title: t("newPwd"),
                        onUpdate: function(n) {
                            c(n),
                            O()
                        },
                        placeholder: "******",
                        type: "password",
                        showInfoIcon: !0,
                        error: !!x,
                        errorMsg: x
                    }), (0,
                    Fi.tZ)(dr.II, {
                        title: t("confirmPwd"),
                        onUpdate: function(n) {
                            p(n),
                            O()
                        },
                        placeholder: "******",
                        type: "password",
                        error: !!w,
                        errorMsg: w
                    }), (0,
                    Fi.BX)(cr.z, {
                        style: {
                            width: "100%"
                        },
                        variant: "primary",
                        onClick: function() {
                            l === s ? (P(!0),
                            zi.Z.updatePassword({}, {
                                oldPwd: r,
                                newPwd: l
                            }).then((function(n) {
                                var e;
                                n.success ? (S(!0),
                                P(!1),
                                g("")) : n.status === Ti.YR.FailureUnexpectedHttpStatusCode && ("INCORRECT_EMAIL_OR_PASSWORD" === (null === (e = n.errorData) || void 0 === e ? void 0 : e.code) ? (g("incorrectEmailOrPwd"),
                                P(!1)) : (m("chooseAStrongPwd"),
                                P(!1)))
                            }
                            )).catch((function(n) {
                                P(!1)
                            }
                            ))) : y("pwdMismatch")
                        },
                        disabled: !r || !l || !s || Z || A,
                        children: [(0,
                        Fi.tZ)(pr.IS, {
                            children: t(A ? "pwdUpdated" : Z ? "updatingPassword" : "updatePassword")
                        }), A ? (0,
                        Fi.tZ)("img", {
                            src: (0,
                            Ai.j)(Zr),
                            alt: ""
                        }) : Z ? (0,
                        Fi.tZ)(Pr.Z, {
                            style: {
                                height: "16px",
                                width: "16px"
                            }
                        }) : null]
                    })]
                })]
            })
        }, Er = {
            src: "/play/_next/static/media/profile-controls-bg.e750a7f8.svg",
            height: 116,
            width: 48
        }, Or = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ir = (0,
        Gi.F4)(y || (y = Or(["\n  100% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n"], ["\n  100% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n"]))), Cr = (0,
        Gi.F4)(v || (v = Or(["\n  0% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n  100% {\n    background: transparent;\n  }\n"], ["\n  0% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n  100% {\n    background: transparent;\n  }\n"]))), jr = Gi.ZP.div(Z || (Z = Or(["\n  background: ", ";\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  flex-direction: row-reverse;\n  z-index: 20;\n  color: ", ";\n\n  animation-name: ", ";\n  animation-duration: 0.5s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  background: ", ";\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  flex-direction: row-reverse;\n  z-index: 20;\n  color: ", ";\n\n  animation-name: ", ";\n  animation-duration: 0.5s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.theme.colors.transparent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), Ir, Cr), Rr = (0,
        Gi.F4)(P || (P = Or(["\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"], ["\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))), Br = (0,
        Gi.F4)(k || (k = Or(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"]))), zr = Gi.ZP.div(A || (A = Or(["\n  width: 348px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  opacity: 0;\n  transform: translateX(100px);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  width: 348px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  opacity: 0;\n  transform: translateX(100px);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), Rr, Br), Tr = Gi.ZP.img(S || (S = Or(["\n  width: 68px;\n  height: 68px;\n  border-radius: 12px;\n  cursor: pointer;\n"], ["\n  width: 68px;\n  height: 68px;\n  border-radius: 12px;\n  cursor: pointer;\n"]))), Dr = (0,
        Gi.F4)(E || (E = Or(["\n  0% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))), Xr = (0,
        Gi.F4)(O || (O = Or(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"]))), Lr = Gi.ZP.div(I || (I = Or(["\n  background: transparent;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 116px;\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 4px;\n  gap: 2px;\n  transform: translate(50px, -5%);\n  backdrop-filter: blur(60px);\n  clip-path: polygon(0% 0%, 0% 77%, 5% 80%, 93% 91%, 100% 94%, 100% 0%);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  clip-path: polygon(0% 0%, 0% 71%, 5% 75%, 93% 91%, 100% 94%, 100% 0%);\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  background: transparent;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 116px;\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 4px;\n  gap: 2px;\n  transform: translate(50px, -5%);\n  backdrop-filter: blur(60px);\n  clip-path: polygon(0% 0%, 0% 77%, 5% 80%, 93% 91%, 100% 94%, 100% 0%);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  clip-path: polygon(0% 0%, 0% 71%, 5% 75%, 93% 91%, 100% 94%, 100% 0%);\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.bgImg && "url('".concat(pi.ZP.prefix).concat((null === Er || void 0 === Er ? void 0 : Er.src) || "", "')")
        }
        ), Dr, Xr), _r = Gi.ZP.div(C || (C = Or(["\n  padding: 8px;\n  color: ", ";\n  cursor: pointer;\n  border-radius: 8px;\n  height: 40px;\n  width: 40px;\n  &.close {\n    ", "\n  }\n  &.support {\n    ", "\n  }\n  &:before {\n    transform: translateX(calc(-100% - 14px)) !important;\n    top: unset !important;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: 8px;\n  color: ", ";\n  cursor: pointer;\n  border-radius: 8px;\n  height: 40px;\n  width: 40px;\n  &.close {\n    ", "\n  }\n  &.support {\n    ", "\n  }\n  &:before {\n    transform: translateX(calc(-100% - 14px)) !important;\n    top: unset !important;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        ), (0,
        sr.gB)(Ci.Z.t("close"), !1, !1), (0,
        sr.gB)(Ci.Z.t("support"), !1, !1), (function(n) {
            return n.theme.colors.white30
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Fr = Gi.ZP.p(j || (j = Or(["\n  min-height: 42px;\n  color: ", ";\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 150%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(270deg, rgba(255, 255, 255, 0.2) 30.75%, rgba(255, 255, 255, 0) 100%) 1;\n  position: sticky;\n  top: 0;\n  margin: 0;\n  \n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  width: 326px;\n\n  img {\n    width: 88px;\n    height: 55px;\n    position: absolute;\n    transform: translate(183px, -14px);\n    transition: 0.3s all;\n  }\n"], ["\n  min-height: 42px;\n  color: ", ";\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 150%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(270deg, rgba(255, 255, 255, 0.2) 30.75%, rgba(255, 255, 255, 0) 100%) 1;\n  position: sticky;\n  top: 0;\n  margin: 0;\n  \n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  width: 326px;\n\n  img {\n    width: 88px;\n    height: 55px;\n    position: absolute;\n    transform: translate(183px, -14px);\n    transition: 0.3s all;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Ur = (0,
        Gi.F4)(R || (R = Or(["\n  0% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n"]))), Mr = (0,
        Gi.F4)(B || (B = Or(["\n  0% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n"]))), Nr = Gi.ZP.div(z || (z = Or(["\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  transform: translate(44px, 4px);\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  transform: translate(44px, 4px);\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), Ur, Mr), Gr = Gi.ZP.div(T || (T = Or(["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 25.52%,\n    rgba(255, 255, 255, 0.10) 75%, rgba(255, 255, 255, 0.00) 100%) 1;\n  margin: 4px 0px;\n"], ["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 25.52%,\n    rgba(255, 255, 255, 0.10) 75%, rgba(255, 255, 255, 0.00) 100%) 1;\n  margin: 4px 0px;\n"]))), Vr = Gi.ZP.div(D || (D = Or(["\n  padding-top: 20px;\n  gap: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow-Y: auto;\n  overflow-X: hidden;\n  width: 100%;\n  height: 100%;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"], ["\n  padding-top: 20px;\n  gap: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow-Y: auto;\n  overflow-X: hidden;\n  width: 100%;\n  height: 100%;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), Yr = {
            src: "/play/_next/static/media/edit-white.35ac48b4.svg",
            height: 24,
            width: 24
        }, Hr = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Qr = Gi.ZP.div(X || (X = Hr(["\n  display: flex;\n  gap: 12px;\n"], ["\n  display: flex;\n  gap: 12px;\n"]))), qr = Gi.ZP.div(L || (L = Hr(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  button {\n    margin-top: 6px;\n    width: 62px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  button {\n    margin-top: 6px;\n    width: 62px;\n  }\n"]))), Wr = Gi.ZP.div(_ || (_ = Hr(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  h5 {\n    color: ", ";\n  }\n\n  p{\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  h5 {\n    color: ", ";\n  }\n\n  p{\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white70
        }
        )), Jr = Gi.ZP.div(F || (F = Hr(["\n  display: flex;\n  width: 100%;\n\n  img {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n\n  img {\n    cursor: pointer;\n  }\n"]))), Kr = (Gi.ZP.div(U || (U = Hr(["\n  display: flex;\n  padding: 2px 6px 2px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30.059px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  margin-top: 6px;\n  width: fit-content;\n"], ["\n  display: flex;\n  padding: 2px 6px 2px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30.059px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  margin-top: 6px;\n  width: fit-content;\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        )),
        Gi.ZP.div(M || (M = Hr(["\n  display: flex;\n  width: 284px;\n  padding: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 12px;\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  backdrop-filter: blur(60px);\n  position: absolute;\n  right: 20px;\n  top: 64px;\n  z-index: 7;\n  opacity: 0;\n  pointer-events: none;\n"], ["\n  display: flex;\n  width: 284px;\n  padding: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 12px;\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  backdrop-filter: blur(60px);\n  position: absolute;\n  right: 20px;\n  top: 64px;\n  z-index: 7;\n  opacity: 0;\n  pointer-events: none;\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )),
        Gi.ZP.div(N || (N = Hr(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-self: stretch;\n\n  p {\n    color: ", ";\n    width: 55px;\n    text-align: center;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-self: stretch;\n\n  p {\n    color: ", ";\n    width: 55px;\n    text-align: center;\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )),
        Gi.ZP.div(G || (G = Hr(['\n  background-size: cover;\n  margin-right: auto;\n  padding: 3px 10px 3px 24px;\n  margin-top: 5px;\n  font-size: 10px;\n  position: relative;\n  border-radius: 30px;\n  background-position: 5px;\n  background-size: 17px;\n\n  background-image: url("', "social/tiktok.svg\");\n  background-repeat: no-repeat;\n\n  &:before, &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 30px;\n    pointer-events: none;\n  }\n  &:before {\n    z-index: -2;\n    background: linear-gradient(\n      180deg, rgba(0, 242, 234, 0.9) 0.03%,\n      rgba(255, 255, 255, 0.9) 45.27%,\n      rgba(255, 0, 79, 0.9) 88.67%\n    );\n  }\n  &:after {\n    margin: 1px;\n    z-index: -1;\n    background-color: #3e3c3e;\n  }\n"], ['\n  background-size: cover;\n  margin-right: auto;\n  padding: 3px 10px 3px 24px;\n  margin-top: 5px;\n  font-size: 10px;\n  position: relative;\n  border-radius: 30px;\n  background-position: 5px;\n  background-size: 17px;\n\n  background-image: url("', "social/tiktok.svg\");\n  background-repeat: no-repeat;\n\n  &:before, &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 30px;\n    pointer-events: none;\n  }\n  &:before {\n    z-index: -2;\n    background: linear-gradient(\n      180deg, rgba(0, 242, 234, 0.9) 0.03%,\n      rgba(255, 255, 255, 0.9) 45.27%,\n      rgba(255, 0, 79, 0.9) 88.67%\n    );\n  }\n  &:after {\n    margin: 1px;\n    z-index: -1;\n    background-color: #3e3c3e;\n  }\n"])), wi.u1)), $r = function(n) {
            var e = n.userStore
              , t = n.onEdit
              , i = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , r = (0,
            bi.useRef)(null)
              , o = (0,
            bi.useRef)(null)
              , a = (0,
            mi.I0)()
              , l = (0,
            mi.v9)((function(n) {
                return n.auth.userStoreUpdated
            }
            ));
            (0,
            bi.useEffect)((function() {
                l && a((0,
                er.J)())
            }
            ), [l]),
            (0,
            bi.useEffect)((function() {
                r.current && (r.current.addEventListener("mouseenter", (function() {
                    o.current && (o.current.style.opacity = "1")
                }
                )),
                r.current.addEventListener("mouseleave", (function() {
                    o.current && (o.current.style.opacity = "0")
                }
                )))
            }
            ), [r]);
            return (0,
            Fi.BX)(Qr, {
                children: [(0,
                Fi.tZ)($i.Z, {
                    user: e,
                    isLoggedIn: i,
                    size: 64,
                    src: null === e || void 0 === e ? void 0 : e.avatar
                }), (0,
                Fi.BX)(qr, {
                    children: [(0,
                    Fi.BX)(Jr, {
                        children: [(0,
                        Fi.BX)(Wr, {
                            children: [(0,
                            Fi.tZ)(pr.QV, {
                                children: (null === e || void 0 === e ? void 0 : e.handle) || (0,
                                rr.t)("guest")
                            }), ((0,
                            Ei.wA)() || i) && (0,
                            Fi.tZ)(pr.gd, {
                                children: (null === e || void 0 === e ? void 0 : e.email) || (0,
                                rr.t)("signInToClaimReward")
                            }), (null === e || void 0 === e ? void 0 : e.tiktokUsername) && (0,
                            Fi.tZ)(Kr, {
                                children: null === e || void 0 === e ? void 0 : e.tiktokUsername
                            })]
                        }), i && (0,
                        Fi.tZ)("img", {
                            alt: "",
                            src: (0,
                            Ai.j)(Yr),
                            height: 18,
                            width: 18,
                            onClick: t
                        })]
                    }), !i && (0,
                    Fi.tZ)(cr.z, {
                        size: "small",
                        onClick: function() {
                            a({
                                type: ir.Z.TOGGLE_LOGIN,
                                payload: {
                                    showLogin: !0
                                }
                            }),
                            a({
                                type: ir.Z.UPDATE_LOGIN_CONTEXT,
                                payload: {
                                    loginContext: wi.$6.profile
                                }
                            })
                        },
                        id: "ng-sign-in",
                        children: (0,
                        rr.t)("signIn")
                    })]
                })]
            })
        }, no = {
            src: "/play/_next/static/media/total-playtime.688cd24a.svg",
            height: 37,
            width: 36
        }, eo = {
            src: "/play/_next/static/media/played-games.3c8915d7.svg",
            height: 37,
            width: 36
        }, to = {
            src: "/play/_next/static/media/lock-filled.5a2e104a.svg",
            height: 16,
            width: 16
        }, io = {
            src: "/play/_next/static/media/stats-bg.e68cb41d.svg",
            height: 48,
            width: 92
        }, ro = {
            src: "/play/_next/static/media/stats-bg-left.290018ff.svg",
            height: 47,
            width: 92
        }, oo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ao = Gi.ZP.div(Y || (Y = oo(["\n  width: 100%;\n  border: 1px solid ", ";\n  background: ", ";\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: right;\n  border-radius: 12px;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n\n  ", "\n"], ["\n  width: 100%;\n  border: 1px solid ", ";\n  background: ", ";\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: right;\n  border-radius: 12px;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n\n  ", "\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.black20
        }
        ), (function(n) {
            var e, t = n.left;
            return "url('".concat(pi.ZP.prefix).concat((null === (e = t ? ro : io) || void 0 === e ? void 0 : e.src) || "", "')")
        }
        ), (function(n) {
            return n.left && (0,
            Gi.iv)(V || (V = oo(["\n    background-position: left;\n    flex-flow: row-reverse;\n\n    div {\n      align-items: end;\n    }\n  "], ["\n    background-position: left;\n    flex-flow: row-reverse;\n\n    div {\n      align-items: end;\n    }\n  "])))
        }
        )), lo = Gi.ZP.div(H || (H = oo(["\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fill-available;\n  gap: 4px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fill-available;\n  gap: 4px;\n"]))), co = Gi.ZP.div(Q || (Q = oo(["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n  border-radius: 12px;\n  width: 100%;\n  height: 50px;\n"], ["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n  border-radius: 12px;\n  width: 100%;\n  height: 50px;\n"]))), so = Gi.ZP.div(q || (q = oo(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 12px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 12px;\n"]))), po = Gi.ZP.div(W || (W = oo(["\n  display: flex;\n  height: 34px;\n  padding: 0px 16px 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 10px;\n  border: 1px solid #67C3BB;\n  background: rgba(103, 195, 187, 0.20);\n  color: ", ";\n"], ["\n  display: flex;\n  height: 34px;\n  padding: 0px 16px 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 10px;\n  border: 1px solid #67C3BB;\n  background: rgba(103, 195, 187, 0.20);\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.success
        }
        )), uo = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , e = (0,
            mi.v9)((function(n) {
                return n.user.totalPlaytime
            }
            ))
              , t = (0,
            mi.v9)((function(n) {
                return n.user.totalPlayedApps
            }
            ))
              , i = (0,
            bi.useState)("".concat(e))
              , r = i[0]
              , o = i[1]
              , a = (0,
            bi.useState)("".concat(t))
              , l = a[0]
              , c = a[1];
            return (0,
            bi.useEffect)((function() {
                t < 10 && c("0".concat(t));
                var n = e / 60
                  , i = n / 60;
                i = parseInt("".concat(i), 10),
                n = parseInt("".concat(n % 60), 10),
                o("".concat(i > 0 ? "".concat(i, " hr ") : "").concat(n % 60, " min"))
            }
            ), [t]),
            (0,
            bi.useEffect)((function() {
                var n = e / 60
                  , t = n / 60;
                t = parseInt("".concat(t), 10),
                n = parseInt("".concat(n % 60), 10),
                o("".concat(t > 0 ? "".concat(t, " hr ") : "").concat(n % 60, " min"))
            }
            ), [e]),
            (0,
            Fi.BX)(so, {
                children: [(0,
                Fi.BX)(co, {
                    children: [(0,
                    Fi.BX)(ao, {
                        children: [(0,
                        Fi.BX)(lo, {
                            children: [(0,
                            Fi.tZ)(pr.tZ, {
                                style: {
                                    color: "rgba(255, 255, 255, 0.7)",
                                    letterSpacing: "0.2px"
                                },
                                children: (0,
                                rr.t)("gamesPlayed")
                            }), n && (0,
                            Fi.tZ)(pr.IS, {
                                children: l
                            }), !n && (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("lock"),
                                src: (0,
                                Ai.j)(to),
                                width: 16,
                                height: 16
                            })]
                        }), (0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("games"),
                            src: (0,
                            Ai.j)(eo),
                            width: 36,
                            height: 36
                        })]
                    }), (0,
                    Fi.BX)(ao, {
                        children: [(0,
                        Fi.BX)(lo, {
                            children: [(0,
                            Fi.tZ)(pr.tZ, {
                                style: {
                                    color: "rgba(255, 255, 255, 0.7)",
                                    letterSpacing: "0.2px"
                                },
                                children: (0,
                                rr.t)("totalPlaytime")
                            }), n && (0,
                            Fi.tZ)(pr.IS, {
                                children: r
                            }), !n && (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("lock"),
                                src: (0,
                                Ai.j)(to),
                                width: 16,
                                height: 16
                            })]
                        }), (0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("time"),
                            src: (0,
                            Ai.j)(no),
                            width: 36,
                            height: 36
                        })]
                    })]
                }), !n && (0,
                Fi.tZ)(po, {
                    children: (0,
                    Fi.tZ)(pr.gd, {
                        children: (0,
                        rr.t)("loginForUserMetrics")
                    })
                })]
            })
        }, fo = t(94391), go = {
            src: "/play/_next/static/media/youtube.9b67e93b.svg",
            height: 16,
            width: 16
        }, ho = {
            src: "/play/_next/static/media/tiktok.4866f7c7.svg",
            height: 16,
            width: 16
        }, xo = {
            src: "/play/_next/static/media/logout.bcc56170.svg",
            height: 16,
            width: 17
        }, mo = t(78943), bo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, wo = Gi.ZP.div(J || (J = bo(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 12px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 12px;\n"]))), yo = Gi.ZP.div(K || (K = bo(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: align-content: flex-start;;\n  gap: 8px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  color: ", ";\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: align-content: flex-start;;\n  gap: 8px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), vo = Gi.ZP.div($ || ($ = bo(["\n  align-items: center;\n  align-content: flex-start;\n  align-self: baseline;\n  display: flex;\n  gap: 4px;\n\n  p {\n    cursor: pointer;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"], ["\n  align-items: center;\n  align-content: flex-start;\n  align-self: baseline;\n  display: flex;\n  gap: 4px;\n\n  p {\n    cursor: pointer;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )), Zo = Gi.ZP.div(nn || (nn = bo(["\n  height: 3px;\n  width: 3px;\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n"], ["\n  height: 3px;\n  width: 3px;\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), Po = Gi.ZP.div(en || (en = bo(["\n  display: flex;\n  gap: 12px;\n"], ["\n  display: flex;\n  gap: 12px;\n"]))), ko = Gi.ZP.a(tn || (tn = bo(["\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  border-radius: 6px;\n  border: 1px solid ", ";\n\n  &:before {\n    top: unset !important;\n    transform: translateY(calc(-100% - 8px)) !important;\n  }\n\n  &.discord {\n    ", "\n  }\n\n  &.tiktok {\n    ", "\n  }\n\n  &.yt {\n    ", "\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  border-radius: 6px;\n  border: 1px solid ", ";\n\n  &:before {\n    top: unset !important;\n    transform: translateY(calc(-100% - 8px)) !important;\n  }\n\n  &.discord {\n    ", "\n  }\n\n  &.tiktok {\n    ", "\n  }\n\n  &.yt {\n    ", "\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white80
        }
        ), (0,
        sr.gB)(Ci.Z.t("discord")), (0,
        sr.gB)(Ci.Z.t("tiktok")), (0,
        sr.gB)(Ci.Z.t("youtube")), (function(n) {
            return n.theme.colors.white
        }
        )), Ao = Gi.ZP.div(rn || (rn = bo(["\n  height: 1px;\n  width: 100%;\n  background: ", ";\n  display: inline-block;\n"], ["\n  height: 1px;\n  width: 100%;\n  background: ", ";\n  display: inline-block;\n"])), (function(n) {
            return n.theme.colors.white10
        }
        )), So = Gi.ZP.div(on || (on = bo(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  align-self: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-top: 4px;\n"], ["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  align-self: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-top: 4px;\n"]))), Eo = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ));
            return (0,
            Fi.BX)(wo, {
                children: [(0,
                Fi.BX)(yo, {
                    children: [(0,
                    Fi.BX)(vo, {
                        children: [(0,
                        Fi.tZ)(pr.gd, {
                            onClick: function() {
                                window.location.href = (0,
                                yi.wh)("https://now.gg")
                            },
                            children: (0,
                            rr.t)("allGames")
                        }), (0,
                        Fi.tZ)(Zo, {}), (0,
                        Fi.tZ)(pr.gd, {
                            onClick: function() {
                                window.location.href = (0,
                                yi.wh)(mo.j7)
                            },
                            children: (0,
                            rr.t)("developers")
                        })]
                    }), (0,
                    Fi.BX)(vo, {
                        children: [(0,
                        Fi.tZ)(pr.gd, {
                            onClick: function() {
                                window.location.href = (0,
                                yi.wh)("https://now.gg/aboutus.html")
                            },
                            children: (0,
                            rr.t)("aboutUs")
                        }), (0,
                        Fi.tZ)(Zo, {}), (0,
                        Fi.tZ)(pr.gd, {
                            onClick: function() {
                                window.location.href = (0,
                                yi.wh)("https://now.gg/terms-and-privacy.html?utm_source=dev.now.gg&utm_medium=dev-site&utm_campaign=dev-home#terms")
                            },
                            children: (0,
                            rr.t)("termAndConditions")
                        })]
                    })]
                }), (0,
                Fi.tZ)(Ao, {}), (0,
                Fi.BX)(So, {
                    children: [(0,
                    Fi.BX)(Po, {
                        children: [(0,
                        Fi.tZ)(ko, {
                            href: wi.ul,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "discord",
                            id: "ng-discord-btn",
                            children: (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("discord"),
                                src: (0,
                                Ai.j)(fo.Z),
                                width: 16,
                                height: 16,
                                loading: "lazy"
                            })
                        }), (0,
                        Fi.tZ)(ko, {
                            href: "https://www.tiktok.com/@nowgg_games",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "tiktok",
                            id: "ng-tiktok-btn",
                            children: (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("tiktok"),
                                src: (0,
                                Ai.j)(ho),
                                width: 16,
                                height: 16,
                                loading: "lazy"
                            })
                        }), (0,
                        Fi.tZ)(ko, {
                            href: "https://www.youtube.com/channel/UCJ56IoBJr4vtNrtTw0CEpYg",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "yt",
                            id: "ng-youtube-btn",
                            children: (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("youtube"),
                                src: (0,
                                Ai.j)(go),
                                width: 16,
                                height: 16,
                                loading: "lazy"
                            })
                        })]
                    }), n && (0,
                    Fi.BX)(cr.z, {
                        id: "ng-logout",
                        variant: "defaultOutline",
                        style: {
                            width: "124px",
                            alignSelf: "center",
                            gap: "4px"
                        },
                        onClick: function() {
                            var n, e;
                            (0,
                            fi.L9)("LogoutClicked"),
                            (0,
                            pi.u_)(),
                            (0,
                            pi.Hh)(),
                            (0,
                            nr.kS)({
                                reason: "ManualLogout",
                                url: null === (e = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.href) || void 0 === e ? void 0 : e.split("?")[0]
                            })
                        },
                        children: [(0,
                        rr.t)("logout"), (0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("logout"),
                            src: (0,
                            Ai.j)(xo),
                            width: 16,
                            height: 16
                        })]
                    })]
                })]
            })
        }, Oo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Io = Gi.ZP.section(an || (an = Oo(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-height: 100%;\n"]))), Co = Gi.ZP.div(ln || (ln = Oo(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(90deg);\n    cursor: pointer;\n    scale: 1.5\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(90deg);\n    cursor: pointer;\n    scale: 1.5\n  }\n"]))), jo = Gi.ZP.div(cn || (cn = Oo(["\n  display: flex;\n  gap: 11px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  overflow: auto;\n"], ["\n  display: flex;\n  gap: 11px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  overflow: auto;\n"]))), Ro = function(n) {
            var e = n.onBack
              , t = n.apps
              , i = void 0 === t ? [] : t
              , r = n.headerText
              , o = void 0 === r ? "recentlyPlayed" : r
              , a = (0,
            mi.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , l = (0,
            mi.I0)();
            return (0,
            Fi.BX)(Io, {
                children: [(0,
                Fi.BX)(Co, {
                    title: (0,
                    rr.t)("back"),
                    onClick: e,
                    children: [(0,
                    Fi.tZ)(kr.pL, {}), (0,
                    Fi.tZ)(pr.QV, {
                        children: (0,
                        rr.t)(o)
                    })]
                }), (0,
                Fi.tZ)(jo, {
                    children: i.map((function(n) {
                        return (0,
                        Fi.tZ)(Tr, {
                            src: n.icon,
                            onClick: function() {
                                var e;
                                e = n.playUrl,
                                a ? l({
                                    type: Oi.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showRecordingModalBeforeExit: !0,
                                        showRecordingModalBeforeExitSource: "gameTile",
                                        urlToOpenAfterRecordModalExit: e
                                    }
                                }) : window.location.href = (0,
                                yi.ZP)(e)
                            },
                            title: n.name
                        })
                    }
                    ))
                })]
            })
        }, Bo = {
            src: "/play/_next/static/media/lock.3d40d416.svg",
            height: 24,
            width: 24
        }, zo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, To = Gi.ZP.div(dn || (dn = zo(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))), Do = Gi.ZP.div(sn || (sn = zo(["\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(-90deg);\n    margin: 0px;\n    transition: all 300ms ease-out;\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &:hover {\n    p {\n      color: ", ";\n    }\n    svg {\n      margin-left: 4px;\n    }\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(-90deg);\n    margin: 0px;\n    transition: all 300ms ease-out;\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &:hover {\n    p {\n      color: ", ";\n    }\n    svg {\n      margin-left: 4px;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white90
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Xo = Gi.ZP.div(pn || (pn = zo(["\n  gap: 12px;\n  display: flex;\n"], ["\n  gap: 12px;\n  display: flex;\n"]))), Lo = Gi.ZP.div(un || (un = zo(["\n  display: flex;\n  height: 64px;\n  padding: 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 8px;\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25'\n    xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8'\n    stroke='rgba(255, 255, 255, 0.1)' stroke-width='2' stroke-dasharray='8.1' stroke-dashoffset='6'\n    stroke-linecap='round'/%3e%3c/svg%3e\");\n  border-radius: 8px;\n  color: ", ";\n"], ["\n  display: flex;\n  height: 64px;\n  padding: 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 8px;\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25'\n    xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8'\n    stroke='rgba(255, 255, 255, 0.1)' stroke-width='2' stroke-dasharray='8.1' stroke-dashoffset='6'\n    stroke-linecap='round'/%3e%3c/svg%3e\");\n  border-radius: 8px;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )), _o = function(n) {
            var e = n.onOpen
              , t = n.apps
              , i = void 0 === t ? [] : t
              , r = n.headerImg
              , o = n.headerText
              , a = void 0 === o ? "recentlyPlayed" : o
              , l = n.noAppText
              , c = void 0 === l ? "noAppRecents" : l
              , d = n.noAppsDisable
              , s = void 0 === d ? "false" : d
              , p = (0,
            mi.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , u = (0,
            mi.I0)();
            return (0,
            Fi.BX)(To, {
                children: [(0,
                Fi.BX)(Do, {
                    onClick: e,
                    className: s && i.length < 1 ? "disabled" : "",
                    children: [(0,
                    Fi.tZ)("img", {
                        alt: "",
                        src: (0,
                        Ai.j)(r),
                        width: 16,
                        height: 16
                    }), (0,
                    Fi.tZ)(pr.IS, {
                        children: (0,
                        rr.t)(a)
                    }), (0,
                    Fi.tZ)(kr.pL, {
                        color: "ascent"
                    })]
                }), i.length > 0 && (0,
                Fi.tZ)(Xo, {
                    children: i.slice(0, 4).map((function(n) {
                        return (0,
                        Fi.tZ)(Tr, {
                            src: n.icon,
                            onClick: function() {
                                var e, t;
                                e = n.playUrl,
                                t = n.packageName,
                                (0,
                                fi.L9)(wi.S5, {
                                    element: "ProfileRecentlyPlayed",
                                    action: "Clicked",
                                    packageName: t
                                }, (function() {
                                    p ? u({
                                        type: Oi.Z.UPDATE_IS_RECORDING,
                                        payload: {
                                            showRecordingModalBeforeExit: !0,
                                            showRecordingModalBeforeExitSource: "gameTile",
                                            urlToOpenAfterRecordModalExit: e
                                        }
                                    }) : window.location.href = (0,
                                    yi.ZP)(e, "ProfileRecentlyPlayed")
                                }
                                ))
                            },
                            title: n.name
                        })
                    }
                    ))
                }), 0 === i.length && (0,
                Fi.BX)(Lo, {
                    children: [(0,
                    Fi.tZ)("img", {
                        alt: "",
                        src: (0,
                        Ai.j)(Bo),
                        width: 24,
                        height: 24
                    }), (0,
                    Fi.tZ)(pr.gd, {
                        children: (0,
                        rr.t)(c)
                    })]
                })]
            })
        }, Fo = {
            src: "/play/_next/static/media/shuffle.b7667e55.svg",
            height: 13,
            width: 12
        }, Uo = {
            src: "/play/_next/static/media/pwd-reset.ae3d6969.svg",
            height: 17,
            width: 16
        }, Mo = t(41609), No = t.n(Mo), Go = function() {
            return (Go = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }, Vo = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }, Yo = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, Ho = function(n) {
            var e = n.onClose
              , t = n.onUpdate
              , i = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , r = (0,
            bi.useState)(null)
              , o = r[0]
              , a = r[1]
              , l = (0,
            bi.useState)("")
              , c = l[0]
              , d = l[1]
              , s = (0,
            bi.useState)("")
              , p = s[0]
              , u = s[1]
              , f = (0,
            bi.useState)("")
              , g = f[0]
              , h = f[1]
              , x = (0,
            bi.useState)(!1)
              , m = x[0]
              , b = x[1]
              , w = (0,
            bi.useState)("")
              , y = w[0]
              , v = w[1]
              , Z = (0,
            bi.useState)([])
              , P = Z[0]
              , k = Z[1]
              , A = (0,
            bi.useState)([])
              , S = A[0]
              , E = A[1]
              , O = (0,
            bi.useRef)(null)
              , I = (0,
            mi.I0)();
            (0,
            bi.useEffect)((function() {
                var n = i ? (0,
                nr.et)() : null;
                n && (a(n),
                d(n.handle),
                h(n.nickname),
                v(n.avatar),
                u(n.tiktokUsername)),
                Vo(void 0, void 0, void 0, (function() {
                    var n, e;
                    return Yo(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, zi.Z.getHandleSuggestions({}, {})];
                        case 1:
                            return (n = t.sent()).success && (e = n.suggestions.filter((function(n) {
                                return n.handle
                            }
                            )),
                            E(n.avatarSuggestions.slice(1, n.avatarSuggestions.length)),
                            k(e)),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), []);
            return (0,
            Fi.BX)(fr, {
                children: [(0,
                Fi.tZ)(pr.Bb, {
                    style: {
                        fontSize: "20px"
                    },
                    children: (0,
                    rr.t)("yourProfile")
                }), (0,
                Fi.tZ)(Li.Z, {
                    size: 24,
                    name: "cross-thin",
                    onClick: e,
                    title: (0,
                    rr.t)("close")
                }), (0,
                Fi.tZ)(gr, {
                    children: (0,
                    Fi.BX)(xr, {
                        children: [(0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("profilePic"),
                            src: y,
                            width: 80,
                            height: 80,
                            ref: O
                        }), (0,
                        Fi.tZ)(mr, {
                            onClick: function() {
                                return Vo(void 0, void 0, void 0, (function() {
                                    var n, e;
                                    return Yo(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return S.length > 0 ? (v(S[0]),
                                            E(S.slice(1, S.length)),
                                            [2]) : [4, zi.Z.getHandleSuggestions({}, {})];
                                        case 1:
                                            return (n = t.sent()).success && (e = n.suggestions.filter((function(n) {
                                                return n.handle
                                            }
                                            )),
                                            v(n.avatarSuggestions[0]),
                                            E(n.avatarSuggestions.slice(1, n.avatarSuggestions.length)),
                                            k(e)),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            children: (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("new"),
                                src: (0,
                                Ai.j)(Fo),
                                width: 12,
                                height: 12
                            })
                        })]
                    })
                }), (0,
                Fi.BX)(br, {
                    children: [(0,
                    Fi.tZ)(wr, {
                        children: (0,
                        rr.t)("userName")
                    }), (0,
                    Fi.BX)(yr, {
                        children: [(0,
                        Fi.tZ)(pr.gd, {
                            children: c
                        }), (0,
                        Fi.tZ)(vr, {
                            onClick: function() {
                                return Vo(void 0, void 0, void 0, (function() {
                                    var n, e;
                                    return Yo(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return P.length > 0 ? (d(P[0].handle),
                                            h(P[0].nickname),
                                            k(P.slice(1, P.length)),
                                            [2]) : [4, zi.Z.getHandleSuggestions({}, {})];
                                        case 1:
                                            return (n = t.sent()).success && (e = n.suggestions.filter((function(n) {
                                                return n.handle
                                            }
                                            )),
                                            d(e[0].handle),
                                            h(e[0].nickname),
                                            k(e.slice(1, e.length)),
                                            E(n.avatarSuggestions)),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            children: (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("new"),
                                src: (0,
                                Ai.j)(Fo),
                                width: 16,
                                height: 16
                            })
                        })]
                    })]
                }), (0,
                Fi.BX)(br, {
                    children: [(0,
                    Fi.tZ)(wr, {
                        children: (0,
                        rr.t)("tiktokAccount")
                    }), (0,
                    Fi.tZ)(dr.II, {
                        title: "",
                        value: p,
                        wrapperClass: "profile-edit",
                        onUpdate: function(n) {
                            return u(n)
                        },
                        placeholder: (0,
                        rr.t)("tiktokPlaceholder")
                    })]
                }), (null === o || void 0 === o ? void 0 : o.isPwdSet) && (0,
                Fi.BX)(br, {
                    children: [(0,
                    Fi.tZ)(wr, {
                        children: (0,
                        rr.t)("account")
                    }), (0,
                    Fi.BX)(cr.z, {
                        variant: "tertiaryOutline",
                        onClick: function() {
                            e(),
                            I({
                                type: ir.Z.UPDATE_PASSWORD,
                                payload: {
                                    showChangePwdModal: !0
                                }
                            })
                        },
                        children: [(0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("new"),
                            src: (0,
                            Ai.j)(Uo),
                            width: 16,
                            height: 16
                        }), (0,
                        Fi.tZ)(pr.IS, {
                            children: (0,
                            rr.t)("updatePassword")
                        })]
                    })]
                }), (0,
                Fi.BX)(hr, {
                    children: [(0,
                    Fi.tZ)(cr.z, {
                        variant: "tertiary",
                        size: "default",
                        text: (0,
                        rr.t)("cancel"),
                        style: {
                            margin: 0
                        },
                        disabled: m,
                        onClick: function() {
                            e()
                        }
                    }), (0,
                    Fi.tZ)(cr.z, {
                        variant: "primary",
                        size: "default",
                        text: (0,
                        rr.t)("save"),
                        style: {
                            margin: 0
                        },
                        disabled: c === (null === o || void 0 === o ? void 0 : o.handle) && y === (null === o || void 0 === o ? void 0 : o.avatar) && p === o.tiktokUsername || m,
                        onClick: function() {
                            Vo(void 0, void 0, void 0, (function() {
                                var n, r;
                                return Yo(this, (function(l) {
                                    switch (l.label) {
                                    case 0:
                                        return b(!0),
                                        n = p ? p.trim() : "",
                                        r = Go(Go(Go({}, c !== (null === o || void 0 === o ? void 0 : o.handle) && {
                                            handle: c,
                                            nickname: g
                                        }), y !== (null === o || void 0 === o ? void 0 : o.avatar) && {
                                            avatar: y
                                        }), n && n !== (null === o || void 0 === o ? void 0 : o.tiktokUsername) && {
                                            tiktokUsername: n
                                        }),
                                        No()(r) ? (e(),
                                        [2]) : [4, zi.Z.updateUserProfile({}, r)];
                                    case 1:
                                        return l.sent(),
                                        zi.Z.getUserProfile({}, {}).then((function(n) {
                                            (0,
                                            nr.Lj)(n),
                                            t();
                                            var r = i ? (0,
                                            nr.et)() : null;
                                            r && (a(r),
                                            d(r.handle),
                                            h(r.nickname),
                                            v(r.avatar)),
                                            e()
                                        }
                                        )),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                    })]
                })]
            })
        }, Qo = t(6413), qo = t(98424), Wo = {
            src: "/play/_next/static/media/robux-jackpot-title.fa9b37cd.svg",
            height: 72,
            width: 192
        }, Jo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ko = Gi.ZP.section(fn || (fn = Jo(["\n    display: flex;\n    flex-direction: column;\n    gap: ", ";\n    padding: 40px 0px 20px 0px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: ", ";\n    padding: 40px 0px 20px 0px;\n"])), (function(n) {
            return n.showRewardPopup ? "6px" : "24px"
        }
        )), $o = Gi.ZP.div(gn || (gn = Jo(["\n    display: flex;\n    justify-content: center;\n"], ["\n    display: flex;\n    justify-content: center;\n"]))), na = Gi.ZP.div(hn || (hn = Jo(["\n    width: 191px;\n    height: 72px;\n"], ["\n    width: 191px;\n    height: 72px;\n"]))), ea = Gi.ZP.div(xn || (xn = Jo(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:8px;\n"], ["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:8px;\n"]))), ta = Gi.ZP.div(mn || (mn = Jo(["\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n    width: 100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n    width: 100%;\n"]))), ia = Gi.ZP.section(bn || (bn = Jo(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))), ra = ((0,
        Gi.ZP)(pr.lU)(wn || (wn = Jo(["\n    color: #FF0096;\n"], ["\n    color: #FF0096;\n"]))),
        (0,
        Gi.ZP)(pr.TZ)(yn || (yn = Jo(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), (function(n) {
            return n.theme.colors.white80
        }
        ))), oa = Gi.ZP.p(vn || (vn = Jo(["\n    background: linear-gradient(270deg, #A277FF 0%, #00D8FF 99.48%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n    opacity:0.9;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.6px;\n    text-transform: uppercase;\n    margin: 0;\n"], ["\n    background: linear-gradient(270deg, #A277FF 0%, #00D8FF 99.48%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n    opacity:0.9;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.6px;\n    text-transform: uppercase;\n    margin: 0;\n"]))), aa = {
            src: "/play/_next/static/media/striked-robux.2407cfd8.svg",
            height: 12,
            width: 23
        }, la = t(30150), ca = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, da = Gi.ZP.div(Zn || (Zn = ca(["\n    display: flex;\n    flex-direction:column;\n    gap: 24px;\n    align-items:center;\n    width: 100%;\n"], ["\n    display: flex;\n    flex-direction:column;\n    gap: 24px;\n    align-items:center;\n    width: 100%;\n"]))), sa = Gi.ZP.div(Pn || (Pn = ca(["\n    display: flex;\n    gap: 8px;\n    margin-bottom: 4px;\n"], ["\n    display: flex;\n    gap: 8px;\n    margin-bottom: 4px;\n"]))), pa = Gi.ZP.div(kn || (kn = ca(["\n    display: flex;\n    gap: 16px;\n    width: 100%;\n"], ["\n    display: flex;\n    gap: 16px;\n    width: 100%;\n"]))), ua = Gi.ZP.div(An || (An = ca(["\n    position: relative;\n    width: calc((100% - 24px) / 3);\n    aspect-ratio: 1;\n"], ["\n    position: relative;\n    width: calc((100% - 24px) / 3);\n    aspect-ratio: 1;\n"]))), fa = Gi.ZP.div(Sn || (Sn = ca(["\n    top: -420px;\n    width: 100%;\n    transition: top ease-in-out 2s;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 8px;\n    position:absolute;\n"], ["\n    top: -420px;\n    width: 100%;\n    transition: top ease-in-out 2s;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 8px;\n    position:absolute;\n"]))), ga = Gi.ZP.div(En || (En = ca(["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    border: 1px solid  rgba(255, 255, 255, 0.20);\n    background: rgba(0, 0, 0, 0.20);\n    box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.24) inset, 0px -24px 24px 0px rgba(0, 0, 0, 0.24) inset;\n"], ["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    border: 1px solid  rgba(255, 255, 255, 0.20);\n    background: rgba(0, 0, 0, 0.20);\n    box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.24) inset, 0px -24px 24px 0px rgba(0, 0, 0, 0.24) inset;\n"]))), ha = Gi.ZP.img(On || (On = ca(["\n    height: 64px;\n    width: 64px;\n"], ["\n    height: 64px;\n    width: 64px;\n"]))), xa = (0,
        Gi.ZP)(la.Yd)(In || (In = ca(["\n    gap: 4px;\n    padding: 7px 16px;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n    }\n\n"], ["\n    gap: 4px;\n    padding: 7px 16px;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n    }\n\n"])), (function(n) {
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
        )), ma = (0,
        Gi.ZP)(la.Yd)(Cn || (Cn = ca(["\n    color: #FF3392;\n    padding: 7px 16px;\n    &:disabled {\n        backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n}\n"], ["\n    color: #FF3392;\n    padding: 7px 16px;\n    &:disabled {\n        backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n}\n"])), (function(n) {
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
        )), ba = Gi.ZP.div(jn || (jn = ca(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n"]))), wa = da, ya = {
            src: "/play/_next/static/media/gambling-chip.30064988.svg",
            height: 58,
            width: 52
        }, va = {
            src: "/play/_next/static/media/gambling-coin.b07c4539.svg",
            height: 58,
            width: 54
        }, Za = {
            src: "/play/_next/static/media/game-bag.c1e4342d.svg",
            height: 58,
            width: 54
        }, Pa = {
            src: "/play/_next/static/media/gem1.6888250b.svg",
            height: 50,
            width: 58
        }, ka = {
            src: "/play/_next/static/media/gem2.40ab99bf.svg",
            height: 58,
            width: 52
        }, Aa = {
            src: "/play/_next/static/media/gift-box.9e5a21a5.svg",
            height: 64,
            width: 64
        }, Sa = {
            src: "/play/_next/static/media/heart.5499afe3.svg",
            height: 64,
            width: 64
        }, Ea = {
            src: "/play/_next/static/media/star.7cc20cdf.svg",
            height: 64,
            width: 64
        }, Oa = {
            src: "/play/_next/static/media/gold-coin.4f4c0791.svg",
            height: 64,
            width: 64
        }, Ia = function() {
            return (Ia = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }, Ca = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }, ja = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, Ra = function() {
            var n = (0,
            mi.I0)()
              , e = (0,
            vi.$)().t
              , t = sessionStorage.getItem("showFreeSpinBtn") || ""
              , i = [(0,
            bi.useRef)(null), (0,
            bi.useRef)(null), (0,
            bi.useRef)(null)]
              , r = [ya, va, Za, Pa, ka, Aa, Sa, Oa, Ea, ya, va, Za, Pa, ka, Aa, Sa, Oa, Ea]
              , o = pi.ZP.appInfo.rwdDailySpinLimit
              , a = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.dailySpinCount
            }
            ))
              , l = (0,
            bi.useState)(!1)
              , c = l[0]
              , d = l[1]
              , s = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxCreditsEarned
            }
            ))
              , p = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , u = function(n, e) {
                n && (n.style.top = "".concat(e, "px"))
            }
              , f = function(e) {
                return Ca(void 0, void 0, void 0, (function() {
                    var t, o, a;
                    return ja(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return p ? (d(!0),
                            i.forEach((function(n) {
                                n && n.current && u(n.current, 100)
                            }
                            )),
                            [4, zi.Z.getJackpotReward({}, Ia(Ia({}, (0,
                            Ei.h9)()), {
                                feSessionTags: (0,
                                Ei.pC)(),
                                robuxCreditsUsed: "freeSpin" === e ? 0 : pi.ZP.appInfo.rwdRobuxCreditsRequiredForSpin
                            }))]) : (n({
                                type: ir.Z.TOGGLE_LOGIN,
                                payload: {
                                    showLogin: !0
                                }
                            }),
                            [2]);
                        case 1:
                            return (t = l.sent()).status === Ti.YR.Success ? ((0,
                            fi.L9)("RobuxJackpotSpinClicked", {
                                robuxUsed: "freeSpin" === e ? 0 : pi.ZP.appInfo.rwdRobuxCreditsRequiredForSpin,
                                robuxRewarded: t.robuxCreditsRewarded
                            }),
                            n({
                                type: Qo.Z.ROBUX_REWARD_CREDIT,
                                payload: {
                                    robuxCreditsEarned: t.totalRobuxCreditsEarned,
                                    totalRobuxCreditsEarnedByAllUsers: t.totalRobuxCreditsEarnedByAllUsers
                                }
                            }),
                            n({
                                type: Qo.Z.ROBUX_REWARD_DETAILS,
                                payload: {
                                    dailySpinCount: t.dailySpinCount
                                }
                            }),
                            800 === (o = t.robuxCreditsRewarded) ? a = 7 : 2 === o ? a = 1 : 10 === o ? a = 2 : 5 === o && (a = 3),
                            i.forEach((function(n) {
                                n && n.current && function(n, e) {
                                    if (n) {
                                        var t = n.children[e || Math.floor(Math.random() * r.length)];
                                        u(n, 14 - t.offsetTop)
                                    }
                                }(n.current, a)
                            }
                            )),
                            setTimeout((function() {
                                n({
                                    type: Qo.Z.JACKPOT_FLOW,
                                    payload: {
                                        robuxCreditsRewarded: o,
                                        showRewardPopup: !0
                                    }
                                }),
                                d(!1),
                                "freeSpin" === e && sessionStorage.removeItem("showFreeSpinBtn")
                            }
                            ), 4e3)) : (d(!1),
                            (0,
                            fi.L9)("RobuxJackpotSpinClicked", {
                                robuxUsed: pi.ZP.appInfo.rwdRobuxCreditsRequiredForSpin
                            })),
                            [2]
                        }
                    }
                    ))
                }
                ))
            };
            return (0,
            Fi.BX)(wa, {
                children: [(0,
                Fi.BX)(pa, {
                    children: [(0,
                    Fi.tZ)(ua, {
                        children: (0,
                        Fi.tZ)(ga, {
                            children: (0,
                            Fi.tZ)(fa, {
                                ref: i[0],
                                children: r.map((function(n) {
                                    return (0,
                                    Fi.tZ)(ha, {
                                        src: (0,
                                        Ai.j)(n),
                                        alt: ""
                                    })
                                }
                                ))
                            })
                        })
                    }), (0,
                    Fi.tZ)(ua, {
                        children: (0,
                        Fi.tZ)(ga, {
                            children: (0,
                            Fi.tZ)(fa, {
                                ref: i[1],
                                children: r.map((function(n) {
                                    return (0,
                                    Fi.tZ)(ha, {
                                        src: (0,
                                        Ai.j)(n),
                                        alt: ""
                                    })
                                }
                                ))
                            })
                        })
                    }), (0,
                    Fi.tZ)(ua, {
                        children: (0,
                        Fi.tZ)(ga, {
                            children: (0,
                            Fi.tZ)(fa, {
                                ref: i[2],
                                children: r.map((function(n) {
                                    return (0,
                                    Fi.tZ)(ha, {
                                        src: (0,
                                        Ai.j)(n),
                                        alt: ""
                                    })
                                }
                                ))
                            })
                        })
                    })]
                }), (0,
                Fi.BX)(ba, {
                    children: [(0,
                    Fi.BX)(sa, {
                        children: [(0,
                        Fi.BX)(xa, {
                            variant: "primary",
                            onClick: function() {
                                return f()
                            },
                            disabled: o - a < 1 || c || s < 1,
                            children: [(0,
                            Fi.BX)(pr.IS, {
                                children: [e("spinFor"), " ", pi.ZP.appInfo.rwdRobuxCreditsRequiredForSpin]
                            }), (0,
                            Fi.tZ)(kr.EH, {
                                opacity: o - a < 1 || c || s < 1 ? "0.4" : "1"
                            }), (0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(aa),
                                height: 12,
                                style: {
                                    marginBottom: "2px"
                                },
                                alt: ""
                            })]
                        }), t && (0,
                        Fi.tZ)(ma, {
                            variant: "secondary",
                            onClick: function() {
                                return f("freeSpin")
                            },
                            disabled: o - a < 1 || c,
                            children: e("freeSpin")
                        })]
                    }), (0,
                    Fi.BX)(oa, {
                        style: o - a < 1 ? {
                            color: "#FF3A30"
                        } : {},
                        children: [o - a, "/", o, " ", e("dailySpinsRemaining")]
                    })]
                })]
            })
        }, Ba = (0,
        bi.memo)(Ra), za = {
            src: "/play/_next/static/media/robux-sad.ccae6838.svg",
            height: 106,
            width: 106
        }, Ta = t(79322), Da = t(61569), Xa = t(95860), La = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, _a = (Gi.ZP.section(Rn || (Rn = La(["\n  ", "\n"], ["\n  ", "\n"])), Xa.be),
        (0,
        Gi.ZP)(la.Yd)(Bn || (Bn = La(["\n  padding: 7px 16px;\n  margin-left: 6px;\n"], ["\n  padding: 7px 16px;\n  margin-left: 6px;\n"]))),
        (0,
        Gi.F4)(zn || (zn = La(["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"])))), Fa = (0,
        Gi.F4)(Tn || (Tn = La(["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"]))), Ua = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ma = Gi.ZP.div(Dn || (Dn = Ua(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 272px;\n    padding: 32px 24px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.10);\n    position:relative;\n    animation: ", " 0.6s ease-out;\n    gap: 20px;\n\n    .reward-close {\n        padding: 0;\n        &:hover {\n            border-radius: 6px;\n            background: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 272px;\n    padding: 32px 24px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.10);\n    position:relative;\n    animation: ", " 0.6s ease-out;\n    gap: 20px;\n\n    .reward-close {\n        padding: 0;\n        &:hover {\n            border-radius: 6px;\n            background: ", ";\n        }\n    }\n"])), _a, (function(n) {
            return n.theme.colors.white20
        }
        )), Na = Gi.ZP.div(Xn || (Xn = Ua(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:8px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:8px;\n"]))), Ga = Ma, Va = function() {
            var n = (0,
            vi.$)().t
              , e = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxCreditsRewarded
            }
            ))
              , t = (0,
            mi.I0)()
              , i = function() {
                t({
                    type: Qo.Z.JACKPOT_FLOW,
                    payload: {
                        showRewardPopup: !1
                    }
                })
            };
            return (0,
            Fi.BX)(Ga, {
                children: [0 !== e && (0,
                Fi.tZ)(Ta.A3, {
                    className: "cross-icon reward-close",
                    onClick: i,
                    style: {
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "white"
                    },
                    children: (0,
                    Fi.tZ)(Li.Z, {
                        name: "cross-thin",
                        size: 16,
                        id: "login-close-icon"
                    })
                }), (0,
                Fi.tZ)("img", {
                    src: (0,
                    Ai.j)(0 === e ? za : Oa),
                    alt: "",
                    width: 0 === e ? 106 : 72
                }), (0,
                Fi.tZ)(Na, {
                    children: 0 === e ? (0,
                    Fi.BX)(Fi.HY, {
                        children: [(0,
                        Fi.tZ)(pr.Bb, {
                            children: n("betterLuck")
                        }), (0,
                        Fi.tZ)(cr.z, {
                            style: {
                                padding: "7px 16px",
                                color: "#FF0096"
                            },
                            variant: "secondary",
                            text: n("goBack"),
                            onClick: i
                        })]
                    }) : (0,
                    Fi.BX)(Fi.HY, {
                        children: [(0,
                        Fi.BX)(Da.GN, {
                            style: {
                                alignItems: "center"
                            },
                            children: [(0,
                            Fi.tZ)(pr.Bb, {
                                style: {
                                    marginTop: "8px"
                                },
                                children: n("yay")
                            }), (0,
                            Fi.tZ)(pr.Bb, {
                                children: n("robuxCount", {
                                    robuxCreditsRewarded: e
                                })
                            })]
                        }), (0,
                        Fi.BX)(cr.z, {
                            variant: "discord",
                            style: {
                                background: "rgba(114, 137, 218, 1)",
                                padding: "7px 16px",
                                gap: "4px"
                            },
                            onClick: function() {
                                return window.open(wi.o7)
                            },
                            children: [(0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(fo.Z),
                                alt: "",
                                width: 16,
                                height: 16
                            }), (0,
                            Fi.tZ)(pr.IS, {
                                children: n("shareOnDiscord")
                            })]
                        }), (0,
                        Fi.BX)(pr.lU, {
                            onClick: i,
                            style: {
                                color: "rgba(255,255,255,0.7)",
                                cursor: "pointer"
                            },
                            children: [n("tryAgain"), "?"]
                        })]
                    })
                })]
            })
        }, Ya = function() {
            var n = (0,
            vi.$)().t
              , e = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.showRewardPopup
            }
            ));
            return (0,
            Fi.BX)(Ko, {
                showRewardPopup: e,
                children: [(0,
                Fi.tZ)($o, {
                    children: (0,
                    Fi.tZ)(na, {
                        children: (0,
                        Fi.tZ)("img", {
                            src: (0,
                            Ai.j)(Wo),
                            width: 191,
                            height: 72,
                            alt: ""
                        })
                    })
                }), (0,
                Fi.tZ)(ea, {
                    children: e ? (0,
                    Fi.tZ)(Va, {}) : (0,
                    Fi.BX)(ta, {
                        children: [(0,
                        Fi.tZ)(ia, {
                            children: (0,
                            Fi.BX)(Ar.Lb, {
                                gap: "6",
                                children: [(0,
                                Fi.tZ)(ra, {
                                    children: n("get")
                                }), (0,
                                Fi.BX)(Ar.Lb, {
                                    gap: "1",
                                    children: [(0,
                                    Fi.tZ)(kr.EH, {
                                        opacity: "0.8",
                                        height: "24",
                                        width: "22"
                                    }), (0,
                                    Fi.tZ)(kr.EH, {
                                        opacity: "0.8",
                                        height: "24",
                                        width: "22"
                                    }), (0,
                                    Fi.tZ)(kr.EH, {
                                        opacity: "0.8",
                                        height: "24",
                                        width: "22"
                                    })]
                                }), (0,
                                Fi.tZ)(ra, {
                                    children: n("winARobuxCard")
                                })]
                            })
                        }), (0,
                        Fi.tZ)(Ba, {})]
                    })
                })]
            })
        }, Ha = t(60925), Qa = t(30550), qa = {
            src: "/play/_next/static/media/robux-coin.85fea872.svg",
            height: 40,
            width: 40
        }, Wa = {
            src: "/play/_next/static/media/gift-card-bg1.eb187c88.jpg",
            height: 340,
            width: 664,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAgMBAAAAAAAAAAAAAAABAgADBRESkf/EABUBAQEAAAAAAAAAAAAAAAAAAAQG/8QAGREBAQADAQAAAAAAAAAAAAAAAQIAAwQR/9oADAMBAAIRAxEAPwCDmbnvC0WkOOQ3WgG9EREptIEAYzhprmhp9c//2Q=="
        }, Ja = {
            src: "/play/_next/static/media/gift-card-bg2.53262ce5.jpg",
            height: 340,
            width: 664,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAEAAgIDAQAAAAAAAAAAAAABAAIDEQQFEiH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8An/YV9cvHhsthqKutvyIiB//Z"
        }, Ka = {
            src: "/play/_next/static/media/gift-card-error-bg.3dbc08fa.jpg",
            height: 340,
            width: 664,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIRUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCe3VVW0231gAD/2Q=="
        }, $a = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, nl = Gi.ZP.div(Ln || (Ln = $a(["\n    display:flex;\n    flex-direction: column;\n    gap:16px;\n"], ["\n    display:flex;\n    flex-direction: column;\n    gap:16px;\n"]))), el = Gi.ZP.section(Fn || (Fn = $a(["\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 12px;\n    border-radius: 10px;\n    ", "\n    background: ", ";\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 12px;\n    border-radius: 10px;\n    ", "\n    background: ", ";\n"])), (function(n) {
            return n.isNewCode && (0,
            Gi.iv)(_n || (_n = $a(["border: 1px solid #C8A839;"], ["border: 1px solid #C8A839;"])))
        }
        ), (function(n) {
            var e = n.theme;
            return n.isNewCode ? "rgba(200, 168, 57, 0.15)" : e.colors.white10
        }
        )), tl = Gi.ZP.div(Un || (Un = $a(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n\n    p {\n        margin-left: auto;\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n\n    p {\n        margin-left: auto;\n        color: ", ";\n    }\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), il = Gi.ZP.div(Mn || (Mn = $a(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))), rl = (0,
        Gi.ZP)(pr.lU)(Nn || (Nn = $a(["\n    color: ", ";\n    letter-spacing: 2px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(100% - 120px);\n"], ["\n    color: ", ";\n    letter-spacing: 2px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(100% - 120px);\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), ol = Gi.ZP.div(Gn || (Gn = $a(["\n    padding: 0px 5px;\n    margin-left: auto;\n    border-radius: 4px;\n    background: rgba(255, 255, 255, 0.10);\n\n    p {\n        color: #B89B34;\n    }\n"], ["\n    padding: 0px 5px;\n    margin-left: auto;\n    border-radius: 4px;\n    background: rgba(255, 255, 255, 0.10);\n\n    p {\n        color: #B89B34;\n    }\n"]))), al = (0,
        Gi.ZP)(la.Yd)(Vn || (Vn = $a(["\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 3px 10px;\n    box-shadow: none;\n\n    .copy-tooltip {\n        bottom: 0;\n        right: 0;\n        transform: translate(-20%, -120%);\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 3px 10px;\n    box-shadow: none;\n\n    .copy-tooltip {\n        bottom: 0;\n        right: 0;\n        transform: translate(-20%, -120%);\n    }\n"]))), ll = (0,
        Gi.ZP)(la.Yd)(Yn || (Yn = $a(["\n    margin-top: 4px;\n    padding: 7px 16px;\n    box-shadow: none;\n"], ["\n    margin-top: 4px;\n    padding: 7px 16px;\n    box-shadow: none;\n"]))), cl = (Gi.ZP.div(Hn || (Hn = $a(["\n    display: flex;\n    gap: 50px;\n    align-items: center;\n \n"], ["\n    display: flex;\n    gap: 50px;\n    align-items: center;\n \n"]))),
        Gi.ZP.img(Qn || (Qn = $a(["\n   cursor: pointer;\n"], ["\n   cursor: pointer;\n"]))),
        Gi.ZP.div(qn || (qn = $a(["\n    width: 332px;\n    height: 170px;\n    position: relative;\n    background-image:", " ;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    ", "\n"], ["\n    width: 332px;\n    height: 170px;\n    position: relative;\n    background-image:", " ;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    ", "\n"])), (function(n) {
            var e = n.redemptionCode
              , t = n.redemptionCodeError;
            return e ? "url('".concat(pi.ZP.prefix).concat((null === Ja || void 0 === Ja ? void 0 : Ja.src) || "", "')") : t ? "url('".concat(pi.ZP.prefix).concat((null === Ka || void 0 === Ka ? void 0 : Ka.src) || "", "')") : "url('".concat(pi.ZP.prefix).concat((null === Wa || void 0 === Wa ? void 0 : Wa.src) || "", "')")
        }
        ), (function(n) {
            return n.redemptionCodeError && "\n    border: 1px solid rgba(255,255,255,0.3);\n    padding: 6px 16px;\n    "
        }
        )),
        Gi.ZP.div(Wn || (Wn = $a(["\n    display: flex;\n    width: 100%;\n    gap:8px;\n\n"], ["\n    display: flex;\n    width: 100%;\n    gap:8px;\n\n"]))),
        Gi.ZP.img(Jn || (Jn = $a(["\n    position: absolute;\n    height: 200px;\n"], ["\n    position: absolute;\n    height: 200px;\n"]))),
        Gi.ZP.div(Kn || (Kn = $a(["\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    right: 8px;\n    align-items: center;\n\n"], ["\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    right: 8px;\n    align-items: center;\n\n"]))),
        (0,
        Gi.ZP)(pr.dH)($n || ($n = $a(["\n    letter-spacing: 16px;\n    text-transform: uppercase;\n    ", "\n"], ["\n    letter-spacing: 16px;\n    text-transform: uppercase;\n    ", "\n"])), (function(n) {
            return n.redemptionCodeError && "\n    font-size: 8px;\n    color: rgba(255,255,255,0.3);\n    letter-spacing: 10px;\n    "
        }
        )),
        Gi.ZP.div(ne || (ne = $a(["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n"], ["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n"]))),
        Gi.ZP.p(ee || (ee = $a(["\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin:0;\n    color: ", ";\n    ", "\n"], ["\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin:0;\n    color: ", ";\n    ", "\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.redemptionCodeError && "\n    font-size: 20px;\n    color: rgba(255,255,255,0.3);\n \n    "
        }
        )),
        Gi.ZP.div(te || (te = $a(["\n    display: flex;\n    justify-content: space-between;\n    background: rgba(255, 255, 255, 0.05);\n    width:332px;\n    padding: 7px 12px;\n    align-items: center;\n    gap: 8px;\n    margin-bottom:12px;\n    border-radius: 6px;\n    position:relative;\n\n    &:first-child {\n        border: 1px solid #CEA609;\n    }\n\n    .ellipsis {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    background: rgba(255, 255, 255, 0.05);\n    width:332px;\n    padding: 7px 12px;\n    align-items: center;\n    gap: 8px;\n    margin-bottom:12px;\n    border-radius: 6px;\n    position:relative;\n\n    &:first-child {\n        border: 1px solid #CEA609;\n    }\n\n    .ellipsis {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"]))),
        Gi.ZP.div(ie || (ie = $a(["\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    position: absolute;\n    top: 20%;\n"], ["\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    position: absolute;\n    top: 20%;\n"]))),
        (0,
        Gi.ZP)(pr.qm)(re || (re = $a(["\n    color: #BE9A08;\n"], ["\n    color: #BE9A08;\n"]))),
        function() {
            var n = (0,
            vi.$)().t
              , e = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.redemptionCode
            }
            ))
              , t = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxRedemptionCodeList
            }
            ))
              , i = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.redemptionCodeError
            }
            ))
              , r = (0,
            bi.useState)(!0)
              , o = r[0]
              , a = r[1]
              , l = (0,
            bi.useState)("")
              , c = l[0]
              , d = l[1]
              , s = (0,
            bi.useState)(o ? t.slice(0, 2) : t)
              , p = s[0]
              , u = s[1];
            return (0,
            bi.useEffect)((function() {
                u(o ? t.slice(0, 2) : t)
            }
            ), [t, o]),
            (0,
            Fi.BX)(nl, {
                children: [p.map((function(t) {
                    return (0,
                    Fi.BX)(el, {
                        isNewCode: e === t.redemptionCode && !i,
                        children: [(0,
                        Fi.BX)(tl, {
                            children: [(0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(qa),
                                alt: "",
                                width: "16",
                                height: "18"
                            }), (0,
                            Fi.tZ)(pr.QV, {
                                children: n("robuxCode", {
                                    robux: pi.ZP.appInfo.rwdMinRedemptionCredits
                                })
                            }), e !== t.redemptionCode || i ? (0,
                            Fi.tZ)(pr.qm, {
                                children: (0,
                                Ei.p6)(1e3 * t.redemptionDateSecs)
                            }) : (0,
                            Fi.tZ)(ol, {
                                children: (0,
                                Fi.tZ)(pr.qm, {
                                    children: n("new")
                                })
                            })]
                        }), (0,
                        Fi.BX)(il, {
                            children: [(0,
                            Fi.tZ)(rl, {
                                children: t.redemptionCode
                            }), (0,
                            Fi.BX)(al, {
                                variant: "defaultOutline",
                                size: "small",
                                onClick: function() {
                                    return n = t.redemptionCode,
                                    (0,
                                    Qa.FF)("copyBtn" === n ? e : n),
                                    d(n || ""),
                                    void setTimeout((function() {
                                        d("")
                                    }
                                    ), 2e3);
                                    var n
                                },
                                children: [c === t.redemptionCode && (0,
                                Fi.tZ)(Ha.YV, {
                                    className: "copy-tooltip",
                                    children: n("codeCopied")
                                }), (0,
                                Fi.tZ)(Li.Z, {
                                    size: 12,
                                    name: "copy"
                                }), (0,
                                Fi.tZ)(pr.qm, {
                                    children: n("copyCode")
                                })]
                            })]
                        })]
                    }, t.redemptionCode)
                }
                )), 0 !== p.length && o && (0,
                Fi.tZ)(ll, {
                    variant: "defaultOutline",
                    size: "medium",
                    onClick: function() {
                        return a(!1)
                    },
                    children: (0,
                    Fi.tZ)(pr.IS, {
                        children: n("viewAllPreviousCodes")
                    })
                })]
            })
        }
        ), dl = t(88879), sl = {
            src: "/play/_next/static/media/arrow-right.156f9ff2.svg",
            height: 16,
            width: 16
        }, pl = t(50063), ul = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, fl = Gi.ZP.div(oe || (oe = ul(["\n    background: ", ";\n    display: flex;\n    flex-direction: ", ";\n    justify-content: center;\n    align-items: ", ";\n    gap: 8px;\n    border-radius: 10px;\n    padding: ", ";\n    border: 1px solid ", ";\n\n    p {\n        color: ", ";\n    }\n"], ["\n    background: ", ";\n    display: flex;\n    flex-direction: ", ";\n    justify-content: center;\n    align-items: ", ";\n    gap: 8px;\n    border-radius: 10px;\n    padding: ", ";\n    border: 1px solid ", ";\n\n    p {\n        color: ", ";\n    }\n"])), (function(n) {
            var e = n.theme;
            return n.error ? "rgba(243, 54, 33, 0.15)" : e.colors.white20
        }
        ), (function(n) {
            return n.showGuestNotification ? "row" : "column"
        }
        ), (function(n) {
            return n.showGuestNotification ? "center" : "flex-start"
        }
        ), (function(n) {
            return n.showGuestNotification ? "7px 10px 7px 12px" : "12px"
        }
        ), (function(n) {
            var e = n.theme;
            return n.error ? "#DE5A48" : e.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white70
        }
        )), gl = Gi.ZP.div(ae || (ae = ul(["\n   display: flex;\n   gap: 4px;\n   align-items: center;\n   \n"], ["\n   display: flex;\n   gap: 4px;\n   align-items: center;\n   \n"]))), hl = Gi.ZP.div(le || (le = ul(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n"], ["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n"]))), xl = Gi.ZP.span(ce || (ce = ul(["\n    height: 16px;\n    width: 16px;\n"], ["\n    height: 16px;\n    width: 16px;\n"]))), ml = (0,
        Gi.ZP)(la.Yd)(de || (de = ul(["\n    ", "\n    height: 32px;\n    font-weight: 600;\n    box-shadow: none;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"], ["\n    ", "\n    height: 32px;\n    font-weight: 600;\n    box-shadow: none;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"])), Xa.be, (function(n) {
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
        )), bl = Gi.ZP.div(se || (se = ul(["\n    position: absolute;\n    right: 0px;\n    padding-right: 10px;\n    padding-left: 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height:100%;\n    border-top-right-radius: inherit;\n    border-bottom-right-radius: inherit;\n\n    &:hover {\n      background: ", ";\n    }\n\n"], ["\n    position: absolute;\n    right: 0px;\n    padding-right: 10px;\n    padding-left: 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height:100%;\n    border-top-right-radius: inherit;\n    border-bottom-right-radius: inherit;\n\n    &:hover {\n      background: ", ";\n    }\n\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), wl = fl, yl = function() {
            return (yl = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }, vl = function(n) {
            var e = n.loginToClaim
              , t = (0,
            vi.$)().t
              , i = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , r = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxCreditsEarned
            }
            ))
              , o = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.redemptionCodeError
            }
            ))
              , a = (0,
            mi.I0)()
              , l = pi.ZP.appInfo
              , c = l.rwdMinPlayTimeIntervalInSecs
              , d = l.rwdMinRedemptionCredits
              , s = (0,
            bi.useState)(!localStorage.getItem(wi.FD) && !i && !r)
              , p = s[0]
              , u = s[1]
              , f = function() {
                return zi.Z.getRedemptionHistory({}, {
                    uaSessionId: (0,
                    Ei.io)(wi.K3),
                    uaId: (0,
                    Ei.Fz)(wi.nP),
                    playSessionId: pi.ZP.playSessionId || (pi.ZP.isAppPage || pi.ZP.isHomePage || (0,
                    pi.DJ)() ? "NA" : "")
                }).then((function(n) {
                    n.status === Ti.YR.Success && a({
                        type: Qo.Z.REDEMPTION_FLOW,
                        payload: {
                            robuxRedemptionCodeList: n.redemptionCodes
                        }
                    })
                }
                )).catch((function(n) {}
                ))
            };
            return (0,
            bi.useEffect)((function() {
                i && f()
            }
            ), [i]),
            (0,
            bi.useEffect)((function() {
                return function() {
                    a({
                        type: Qo.Z.REDEMPTION_FLOW,
                        payload: {
                            redemptionCodeError: !1,
                            redemptionCode: ""
                        }
                    })
                }
            }
            ), []),
            (0,
            Fi.tZ)(Fi.HY, {
                children: p ? (0,
                Fi.BX)(wl, {
                    error: o,
                    showGuestNotification: p,
                    style: {
                        position: "relative"
                    },
                    children: [(0,
                    Fi.tZ)(xl, {
                        children: (0,
                        Fi.tZ)(kr.Qp, {})
                    }), (0,
                    Fi.tZ)(pr.js, {
                        style: {
                            color: "rgba(255,255,255,0.7)"
                        },
                        children: t("oneRobuxForGameplay", {
                            minutes: Math.floor(c / 60)
                        })
                    }), (0,
                    Fi.tZ)(bl, {
                        onClick: function() {
                            localStorage.setItem(wi.FD, "true"),
                            u(!1)
                        },
                        children: (0,
                        Fi.tZ)(Li.Z, {
                            size: 16,
                            name: "cross-thin"
                        })
                    })]
                }) : (!i && r || i) && (0,
                Fi.BX)(wl, {
                    showGuestNotification: p,
                    error: o,
                    children: [(0,
                    Fi.BX)(gl, {
                        children: [(0,
                        Fi.tZ)("img", {
                            src: (0,
                            Ai.j)(o ? pl.Z : dl.Z),
                            alt: "",
                            height: "18",
                            width: "16"
                        }), (0,
                        Fi.tZ)(pr.QV, {
                            children: o ? t("couponUnavailable") : t("haveRobux", {
                                robuxCreditsEarned: pi.ZP.appInfo.rwdMinRedemptionCredits
                            })
                        })]
                    }), (0,
                    Fi.BX)(hl, {
                        children: [(0,
                        Fi.BX)(pr.gd, {
                            style: {
                                display: "flex",
                                gap: "4px"
                            },
                            children: [o ? t("checkBackWithin", {
                                time: 24
                            }) : t("youCanRedeemRobux"), !o && (0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(sl),
                                alt: "",
                                height: "16"
                            })]
                        }), !i && r && (0,
                        Fi.tZ)(ml, {
                            onClick: e,
                            variant: "primary",
                            style: {
                                height: "24px",
                                width: "108px"
                            },
                            children: t("loginToClaim")
                        }), i && (0,
                        Fi.BX)(ml, {
                            onClick: function() {
                                return n = "giftCard",
                                a({
                                    type: Qo.Z.REDEMPTION_FLOW,
                                    payload: {
                                        showRedemptionFlow: !0,
                                        redemptionType: n
                                    }
                                }),
                                void ("giftCard" === n ? zi.Z.redeemReward({}, yl({
                                    feSessionTags: (0,
                                    Ei.pC)()
                                }, (0,
                                Ei.h9)())).then((function(n) {
                                    n.status === Ti.YR.Success ? (a({
                                        type: Qo.Z.REDEMPTION_FLOW,
                                        payload: {
                                            redemptionCode: n.redemptionCode,
                                            redemptionCodeError: !1
                                        }
                                    }),
                                    a({
                                        type: Qo.Z.ROBUX_REWARD_DETAILS,
                                        payload: {
                                            robuxCreditsEarned: r - d
                                        }
                                    }),
                                    f()) : n.status === Ti.YR.FailureTryAgain && a({
                                        type: Qo.Z.REDEMPTION_FLOW,
                                        payload: {
                                            redemptionCodeError: !0
                                        }
                                    })
                                }
                                )).catch((function(n) {}
                                )) : f());
                                var n
                            },
                            style: {
                                whiteSpace: "nowrap",
                                gap: "8px",
                                padding: "0px 8px",
                                height: "24px"
                            },
                            variant: "primary",
                            size: "small",
                            disabled: o,
                            children: [t("redeemRobux", {
                                rewardRedemption: d
                            }), (0,
                            Fi.tZ)(kr.fX, {})]
                        })]
                    })]
                })
            })
        }, Zl = {
            src: "/play/_next/static/media/robux-no.0aea8634.svg",
            height: 77,
            width: 77
        }, Pl = {
            src: "/play/_next/static/media/bell.19de3e5b.svg",
            height: 16,
            width: 14
        }, kl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Al = Gi.ZP.section(pe || (pe = kl(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100%;\n"]))), Sl = Gi.ZP.div(ue || (ue = kl(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  padding: 20px 0px;\n  overflow: hidden;\n  border-radius: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  padding: 20px 0px;\n  overflow: hidden;\n  border-radius: 8px;\n"]))), El = Gi.ZP.img(he || (he = kl(["\n  position: absolute;\n\n  ", "\n  ", "\n"], ["\n  position: absolute;\n\n  ", "\n  ", "\n"])), (function(n) {
            return n.first && (0,
            Gi.iv)(fe || (fe = kl(["\n    left: -11px;\n    top: 42px;\n    transform: rotate(-180deg);\n  "], ["\n    left: -11px;\n    top: 42px;\n    transform: rotate(-180deg);\n  "])))
        }
        ), (function(n) {
            return !n.first && (0,
            Gi.iv)(ge || (ge = kl(["\n    top: -2px;\n    left: 11px;\n  "], ["\n    top: -2px;\n    left: 11px;\n  "])))
        }
        )), Ol = (Gi.ZP.div(me || (me = kl(["\n  ", "\n\n  > section {\n    width: 100%;\n  }\n"], ["\n  ", "\n\n  > section {\n    width: 100%;\n  }\n"])), (function(n) {
            return n.isJockpotFlowEnabled && (0,
            Gi.iv)(xe || (xe = kl(["\n    flex: 1;\n    display:flex;\n    align-items: center;\n  "], ["\n    flex: 1;\n    display:flex;\n    align-items: center;\n  "])))
        }
        )),
        Gi.ZP.div(be || (be = kl(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"])))), Il = Gi.ZP.section(we || (we = kl(["\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 8px;\n  border: 1px dashed ", ";\n\n  svg {\n    flex-shrink: 0;\n  }\n  p {\n    color: ", ";\n  }\n"], ["\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 8px;\n  border: 1px dashed ", ";\n\n  svg {\n    flex-shrink: 0;\n  }\n  p {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white70
        }
        )), Cl = Gi.ZP.div(ye || (ye = kl(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"]))), jl = Gi.ZP.div(ve || (ve = kl(["\n  display: flex;\n  min-height: 32px;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 7px 12px;\n  gap: 8px;\n  color: ", ";\n"], ["\n  display: flex;\n  min-height: 32px;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 7px 12px;\n  gap: 8px;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )), Rl = (Gi.ZP.div(Ze || (Ze = kl(["\n  margin-top: auto;\n  padding: 16px 0 24px;\n  border-top: 1px dashed ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n\n  p {\n    font-weight: 400;\n    line-height: normal;\n    max-width: 275px;\n    text-align: center;\n  }\n"], ["\n  margin-top: auto;\n  padding: 16px 0 24px;\n  border-top: 1px dashed ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n\n  p {\n    font-weight: 400;\n    line-height: normal;\n    max-width: 275px;\n    text-align: center;\n  }\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white40
        }
        )),
        Gi.ZP.div(Pe || (Pe = kl(["\n  border-radius: 30px;\n  border: 1px solid #AF8723;\n  padding: 0px 8px;\n  background: #483800;\n  width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 1s;\n"], ["\n  border-radius: 30px;\n  border: 1px solid #AF8723;\n  padding: 0px 8px;\n  background: #483800;\n  width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 1s;\n"])))), Bl = Gi.ZP.div(ke || (ke = kl(["\n  display: flex;\n  margin-bottom: 20px;\n"], ["\n  display: flex;\n  margin-bottom: 20px;\n"]))), zl = (0,
        Gi.F4)(Ae || (Ae = kl(["\n  0% {\n    left: -44%;\n  }\n  100% {\n    left: 100%;\n  }\n"], ["\n  0% {\n    left: -44%;\n  }\n  100% {\n    left: 100%;\n  }\n"]))), Tl = Gi.ZP.div(Se || (Se = kl(["\n  width: 50.406px;\n  height: 145.087px;\n  transform: rotate(26.632deg);\n  flex-shrink: 0;\n  position: absolute;\n  opacity: 0.4;\n  background:linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.56) 50%,\n    rgba(255, 255, 255, 0.00) 100%);\n  left: -44%;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-delay: 1s;\n"], ["\n  width: 50.406px;\n  height: 145.087px;\n  transform: rotate(26.632deg);\n  flex-shrink: 0;\n  position: absolute;\n  opacity: 0.4;\n  background:linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.56) 50%,\n    rgba(255, 255, 255, 0.00) 100%);\n  left: -44%;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-delay: 1s;\n"])), zl), Dl = Al, Xl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ll = Gi.ZP.div(Ee || (Ee = Xl(["\n  display: flex;\n  border-radius: 6.5px;\n  gap: 2px;\n  padding: 2px;\n  background: ", ";\n  height: 32px;\n  width: 100%;\n"], ["\n  display: flex;\n  border-radius: 6.5px;\n  gap: 2px;\n  padding: 2px;\n  background: ", ";\n  height: 32px;\n  width: 100%;\n"])), (function(n) {
            return n.theme.colors.black20
        }
        )), _l = Gi.ZP.div(Oe || (Oe = Xl(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  flex: 1 0 0;\n  border-radius: 5px;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 400;\n  min-height: 26px;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &.active {\n    background: ", ";\n    color: ", ";\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  flex: 1 0 0;\n  border-radius: 5px;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 400;\n  min-height: 26px;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &.active {\n    background: ", ";\n    color: ", ";\n    pointer-events: none;\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white30
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Fl = function(n) {
            var e = n.tabs
              , t = (0,
            bi.useState)(0)
              , i = t[0]
              , r = t[1];
            return (0,
            Fi.tZ)(Ll, {
                children: e.map((function(n, e) {
                    return (0,
                    Fi.tZ)(_l, {
                        className: e === i ? "active" : "",
                        onClick: function() {
                            return function(n, e) {
                                n.event && (0,
                                fi.L9)(n.event),
                                r(e),
                                n.onClick()
                            }(n, e)
                        },
                        children: (0,
                        Fi.tZ)(pr.IS, {
                            children: n.title
                        })
                    })
                }
                ))
            })
        }, Ul = {
            src: "/play/_next/static/media/timer.30a49d06.svg",
            height: 16,
            width: 16
        }, Ml = t(26544), Nl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Gl = Gi.ZP.div(Ie || (Ie = Nl(["\n  width: 100%;\n  border-bottom: 1px solid transparent;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  padding-bottom: 12px;\n"], ["\n  width: 100%;\n  border-bottom: 1px solid transparent;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  padding-bottom: 12px;\n"]))), Vl = Gi.ZP.div(Ce || (Ce = Nl(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n\n  .ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n\n  .ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: ", ";\n  }\n"])), (function(n) {
            return "PlayGameXForYDays" === n.itemType ? "110px" : "160px"
        }
        )), Yl = Gi.ZP.div(je || (je = Nl(["\n  width: 246px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"], ["\n  width: 246px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"]))), Hl = Gi.ZP.div(Re || (Re = Nl(["\n  border-radius: 40px;\n  background: ", ";\n  display: flex;\n  padding: 2px 4px;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n"], ["\n  border-radius: 40px;\n  background: ", ";\n  display: flex;\n  padding: 2px 4px;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n"])), (function(n) {
            return n.theme.colors.black20
        }
        )), Ql = (Gi.ZP.div(Be || (Be = Nl(["\n  height: 4px;\n  border-radius: 36px;\n  width:80%;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  border: 1px solid green;\n"], ["\n  height: 4px;\n  border-radius: 36px;\n  width:80%;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  border: 1px solid green;\n"]))),
        Gi.ZP.div(ze || (ze = Nl(["\n  border-radius: 12px;\n  height: 3px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n  backdrop-filter: blur(12px);\n  \n  > img {  \n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"], ["\n  border-radius: 12px;\n  height: 3px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n  backdrop-filter: blur(12px);\n  \n  > img {  \n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"])), (function(n) {
            return n.theme.colors.black10
        }
        ))), ql = Gi.ZP.div(Te || (Te = Nl(["\n  position: relative;\n  border-radius: 6px;\n  height: 4px;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  transform: translateY(-0.5px);\n  background: repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 6px,\n    rgba(0, 0, 0, 0.09) 6px,\n    rgba(0, 0, 0, 0.09) 12px\n  ),\n  linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n"], ["\n  position: relative;\n  border-radius: 6px;\n  height: 4px;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  transform: translateY(-0.5px);\n  background: repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 6px,\n    rgba(0, 0, 0, 0.09) 6px,\n    rgba(0, 0, 0, 0.09) 12px\n  ),\n  linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n"])), (function(n) {
            return n.width
        }
        )), Wl = Gi.ZP.div(De || (De = Nl(["\n  border-radius: 40px;\n  border: 1px solid #F33621;\n  display: flex;\n  align-items: center;\n  gap:3px;\n  padding: 2px 3px 2px 6px;\n  width: max-content;\n"], ["\n  border-radius: 40px;\n  border: 1px solid #F33621;\n  display: flex;\n  align-items: center;\n  gap:3px;\n  padding: 2px 3px 2px 6px;\n  width: max-content;\n"]))), Jl = function() {
            return (Jl = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }, Kl = function(n) {
            var e = n.item
              , t = (0,
            vi.$)().t
              , i = (0,
            bi.useState)(!1)
              , r = i[0]
              , o = i[1]
              , a = (0,
            bi.useState)(!1)
              , l = a[0]
              , c = a[1]
              , d = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , s = (0,
            mi.I0)()
              , p = "PlayGameXForYDays" === e.type ? e.requiredDays : "PlayGameXForYDaysInARow" === e.type ? e.requiredStreakDays : "PlayGameXForYMinutes" === e.type || "PlayForYMinutes" === e.type ? e.requiredMinutes : "PlayXGamesForMinYMinutesEach" === e.type ? e.requiredGames : e.requiredLaunches
              , u = Math.floor((Date.parse(e.questEndDateTimeUTC.toString()) - Date.now()) / 864e5)
              , f = Math.floor((Date.parse(e.questEndDateTimeUTC.toString()) - Date.now()) / 36e5);
            return (0,
            Fi.BX)(Gl, {
                children: [(0,
                Fi.BX)(Ar.Lb, {
                    gap: "12",
                    onClick: function() {
                        d || (s({
                            type: ir.Z.TOGGLE_LOGIN,
                            payload: {
                                showLogin: !0
                            }
                        }),
                        s({
                            type: ir.Z.UPDATE_LOGIN_CONTEXT,
                            payload: {
                                loginContext: wi.$6.profile
                            }
                        }))
                    },
                    style: {
                        cursor: d ? "" : "pointer"
                    },
                    children: [(0,
                    Fi.tZ)("img", {
                        src: e.icon,
                        alt: "",
                        width: 48,
                        height: 48,
                        style: {
                            borderRadius: "8px"
                        }
                    }), (0,
                    Fi.BX)(Yl, {
                        children: [(0,
                        Fi.BX)(Vl, {
                            itemType: e.type,
                            children: [(0,
                            Fi.tZ)(pr.IS, {
                                className: "ellipsis",
                                children: e.name
                            }), (0,
                            Fi.BX)(Ar.Lb, {
                                gap: "8",
                                children: [(0,
                                Fi.BX)(Wl, {
                                    children: [u > 0 ? "".concat(u, " ").concat(t(u < 2 ? "dayLeft" : "daysLeft")) : "".concat(f, " ").concat(t(f < 2 ? "hourLeft" : "hoursLeft")), (0,
                                    Fi.tZ)("img", {
                                        src: (0,
                                        Ai.j)(Ul),
                                        alt: "",
                                        width: 16,
                                        height: 16
                                    })]
                                }), (0,
                                Fi.BX)(Hl, {
                                    children: [(0,
                                    Fi.BX)(pr.tZ, {
                                        children: ["+", e.rewardNumRobux]
                                    }), (0,
                                    Fi.tZ)("img", {
                                        src: (0,
                                        Ai.j)(qa),
                                        alt: "",
                                        height: 16,
                                        width: 16
                                    })]
                                })]
                            })]
                        }), (0,
                        Fi.tZ)("div", {
                            children: 1 === e.progressRatio && e.earnCount - e.claimCount !== 0 ? (0,
                            Fi.BX)(cr.z, {
                                variant: "primary",
                                size: "small",
                                disabled: r || l,
                                onClick: function() {
                                    d && (o(!0),
                                    zi.Z.claimQuestReward({}, Jl({
                                        questId: e.questId,
                                        feSessionTags: (0,
                                        Ei.pC)()
                                    }, (0,
                                    Ei.h9)())).then((function(n) {
                                        n.status === Ti.YR.Success && (o(!1),
                                        s({
                                            type: Qo.Z.ROBUX_REWARD_CREDIT,
                                            payload: {
                                                robuxCreditsEarned: n.robuxCreditsEarned,
                                                totalRobuxCreditsEarnedByAllUsers: n.totalRobuxCreditsEarnedByAllUsers
                                            }
                                        }),
                                        c(!0),
                                        s({
                                            type: Bi.Z.UPDATE_TASK,
                                            payload: {
                                                questClaimed: !0
                                            }
                                        }),
                                        setTimeout((function() {
                                            (0,
                                            Ei.cv)(),
                                            s({
                                                type: Bi.Z.UPDATE_TASK,
                                                payload: {
                                                    questClaimed: !1
                                                }
                                            })
                                        }
                                        ), 2e3))
                                    }
                                    )).catch((function(n) {
                                        o(!1)
                                    }
                                    )))
                                },
                                style: {
                                    padding: "4px 12px",
                                    gap: "6px"
                                },
                                children: [(0,
                                Fi.tZ)(pr.qm, {
                                    children: t(r ? "claiming" : l ? "claimed" : "claimNow")
                                }), l && (0,
                                Fi.tZ)("img", {
                                    src: (0,
                                    Ai.j)(Zr),
                                    alt: ""
                                })]
                            }) : (0,
                            Fi.tZ)(pr.gd, {
                                style: {
                                    color: Ml.qm.colors.white70
                                },
                                children: e.description
                            })
                        })]
                    })]
                }), (0,
                Fi.BX)(Ar.Lb, {
                    gap: "12",
                    style: {
                        marginTop: "4px",
                        padding: "2.5px 0px"
                    },
                    children: [(0,
                    Fi.tZ)(Ql, {
                        style: {
                            height: "3px"
                        },
                        children: (0,
                        Fi.tZ)(ql, {
                            width: "".concat(100 * e.progressRatio, "%")
                        })
                    }), "PlayGameXForYDays" === e.type || "PlayXGames" === e.type || "PlayXGamesForMinYMinutesEach" === e.type || "PlayGameXForYDaysInARow" === e.type ? (0,
                    Fi.BX)(pr.tZ, {
                        children: [Math.round(e.progressRatio * p), "/", p]
                    }) : (0,
                    Fi.BX)(pr.tZ, {
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: [Math.round(e.requiredMinutes * e.progressRatio), " ", "mins"]
                    })]
                })]
            })
        }, $l = (0,
        bi.memo)(Kl), nc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ec = Gi.ZP.div(Xe || (Xe = nc(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))), tc = (0,
        Gi.ZP)(pr.qm)(Le || (Le = nc(["\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), ic = Gi.ZP.div(_e || (_e = nc(["\n  border-radius: 12px;\n  height: 12px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n\n  > img {\n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"], ["\n  border-radius: 12px;\n  height: 12px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n\n  > img {\n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"])), (function(n) {
            return n.theme.colors.black40
        }
        )), rc = Gi.ZP.div(Fe || (Fe = nc(["\n  position: relative;\n  border-radius: 6px;\n  display: inline-block;\n  height: 100%;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  background: linear-gradient(266deg, #FFD509 2.69%, #987B05 99.76%);\n"], ["\n  position: relative;\n  border-radius: 6px;\n  display: inline-block;\n  height: 100%;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  background: linear-gradient(266deg, #FFD509 2.69%, #987B05 99.76%);\n"])), (function(n) {
            return n.width
        }
        )), oc = (0,
        Gi.ZP)(pr.tZ)(Ue || (Ue = nc(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  font-weight: 400;\n  line-height: 15px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  font-weight: 400;\n  line-height: 15px;\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), ac = ec, lc = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.accumulatedTimeSecs
            }
            )) % pi.ZP.appInfo.rwdMinPlayTimeIntervalInSecs
              , e = 100 * n / pi.ZP.appInfo.rwdMinPlayTimeIntervalInSecs;
            return (0,
            Fi.BX)(ac, {
                children: [(0,
                Fi.BX)(tc, {
                    children: [(0,
                    Fi.tZ)("span", {
                        children: (0,
                        rr.t)("winRobuxEveryMinutes", {
                            minutes: Math.floor(pi.ZP.appInfo.rwdMinPlayTimeIntervalInSecs / 60)
                        })
                    }), (0,
                    Fi.tZ)("span", {
                        children: "+1"
                    })]
                }), (0,
                Fi.BX)(ic, {
                    children: [(0,
                    Fi.tZ)(rc, {
                        width: "".concat(e, "%")
                    }), (0,
                    Fi.tZ)("img", {
                        src: (0,
                        Ai.j)(qa),
                        alt: "",
                        height: 15,
                        width: 15
                    })]
                }), (0,
                Fi.BX)(oc, {
                    children: [(0,
                    Fi.tZ)("span", {
                        children: "0m"
                    }), (0,
                    Fi.tZ)("span", {
                        children: (0,
                        rr.t)("remainingMinutes", {
                            minutes: Math.floor((pi.ZP.appInfo.rwdMinPlayTimeIntervalInSecs - n) / 60)
                        })
                    }), (0,
                    Fi.tZ)("span", {
                        children: "".concat(Math.floor(pi.ZP.appInfo.rwdMinPlayTimeIntervalInSecs / 60), "m")
                    })]
                })]
            })
        }, cc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, dc = Gi.ZP.div(Me || (Me = cc(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow: auto;\n  margin-bottom: 40px;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow: auto;\n  margin-bottom: 40px;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), sc = Gi.ZP.div(Ne || (Ne = cc(["\n   display: flex;\n   align-items: center;\n   gap: 8px;\n   width: 100%;\n   border-bottom: 1px solid transparent;\n   border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%);\n   border-image-slice: 1;\n   padding-bottom: 12px;\n"], ["\n   display: flex;\n   align-items: center;\n   gap: 8px;\n   width: 100%;\n   border-bottom: 1px solid transparent;\n   border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%);\n   border-image-slice: 1;\n   padding-bottom: 12px;\n"]))), pc = Gi.ZP.div(Ge || (Ge = cc(["\nopacity: 0.3;\n"], ["\nopacity: 0.3;\n"]))), uc = Gi.ZP.div(Ve || (Ve = cc(["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  margin: 4px 0px;\n"], ["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  margin: 4px 0px;\n"]))), fc = dc, gc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, hc = (Gi.ZP.section(Ye || (Ye = gc(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  background-color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  background-color: ", ";\n"])), (function(n) {
            return n.theme.colors.white10
        }
        )),
        Gi.ZP.div(He || (He = gc(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n\n  svg {\n    transition: all 0.3s ease-out;\n    transform: rotate(90deg) translateY(0);\n    height: 20px;\n    width: 20px;\n  }\n\n  &:hover {\n    svg {\n      transform: rotate(90deg) translateY(5px);\n    }\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n\n  svg {\n    transition: all 0.3s ease-out;\n    transform: rotate(90deg) translateY(0);\n    height: 20px;\n    width: 20px;\n  }\n\n  &:hover {\n    svg {\n      transform: rotate(90deg) translateY(5px);\n    }\n  }\n"]))),
        Gi.ZP.div(Qe || (Qe = gc(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  padding-right: 12px;\n  border-right: 1px solid ", ";\n"], ["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  padding-right: 12px;\n  border-right: 1px solid ", ";\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ))), xc = Gi.ZP.div(qe || (qe = gc(["\n  display: flex;\n  border-radius: 12px;\n  padding: 16px 12px 16px 8px;\n  border: 1px solid #DFAC2C;\n  background: rgba(0, 0, 0, 0.20);\n  height: 80px;\n\n  > div:nth-child(2) {\n    flex: 1;\n    padding-left: 12px;\n  }\n"], ["\n  display: flex;\n  border-radius: 12px;\n  padding: 16px 12px 16px 8px;\n  border: 1px solid #DFAC2C;\n  background: rgba(0, 0, 0, 0.20);\n  height: 80px;\n\n  > div:nth-child(2) {\n    flex: 1;\n    padding-left: 12px;\n  }\n"]))), mc = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.user.questsInfo
            }
            ))
              , e = (0,
            mi.v9)((function(n) {
                return n.user.questsIcon
            }
            ))
              , t = (0,
            mi.v9)((function(n) {
                return n.user.questsTitle
            }
            ))
              , i = (0,
            vi.$)().t
              , r = (0,
            bi.useState)([])
              , o = r[0]
              , a = r[1]
              , l = (0,
            bi.useState)([])
              , c = l[0]
              , d = l[1];
            return (0,
            bi.useEffect)((function() {
                if (n.length) {
                    var e = n.filter((function(n) {
                        return n.earnCount - n.claimCount === 0 && 1 === n.progressRatio
                    }
                    ));
                    a(e);
                    var t = n.filter((function(n) {
                        return !(n.earnCount - n.claimCount === 0 && 1 === n.progressRatio)
                    }
                    ));
                    d(t)
                }
            }
            ), [n]),
            (0,
            Fi.BX)(fc, {
                children: [(0,
                Fi.BX)(sc, {
                    children: [e && (0,
                    Fi.tZ)("img", {
                        src: e,
                        alt: "",
                        height: 16,
                        width: 16
                    }), (0,
                    Fi.tZ)(pr.uH, {
                        children: t
                    })]
                }), (0,
                Ei.c6)() && (0,
                Fi.BX)(Fi.HY, {
                    children: [(0,
                    Fi.BX)(xc, {
                        children: [(0,
                        Fi.tZ)(hc, {
                            children: (0,
                            Fi.tZ)("img", {
                                alt: "",
                                src: (0,
                                Ai.O)({
                                    src: "https://cdn.now.gg/apps-content/com.roblox.client/icon/roblox.png",
                                    width: 64,
                                    quality: 70
                                }),
                                height: 64,
                                width: 64,
                                style: {
                                    borderRadius: "8px"
                                }
                            })
                        }), (0,
                        Fi.tZ)(lc, {})]
                    }), (0,
                    Fi.tZ)(uc, {})]
                }), c.map((function(n) {
                    return (0,
                    Fi.tZ)($l, {
                        item: n
                    })
                }
                )), o.length > 0 && (0,
                Fi.BX)(Fi.HY, {
                    children: [(0,
                    Fi.tZ)(sc, {
                        children: (0,
                        Fi.tZ)(pr.uH, {
                            style: {
                                marginTop: "4px"
                            },
                            children: i("completed")
                        })
                    }), (0,
                    Fi.tZ)(pc, {
                        children: o.map((function(n) {
                            return (0,
                            Fi.tZ)($l, {
                                item: n
                            })
                        }
                        ))
                    })]
                })]
            })
        }, bc = (0,
        bi.memo)(mc), wc = t(54580), yc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, vc = Gi.ZP.section(We || (We = yc(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n\n  a,p {\n    color: ", ";\n  }\n  p {\n    ", "\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  strong {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n\n  a,p {\n    color: ", ";\n  }\n  p {\n    ", "\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  strong {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        ), Xa.be, (function(n) {
            return n.theme.colors.white
        }
        )), Zc = vc, Pc = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.totalRobuxCreditsEarnedByAllUsers
            }
            ));
            return (0,
            Fi.tZ)(Zc, {
                children: (0,
                Fi.tZ)(pr.gd, {
                    children: (0,
                    Fi.tZ)(wc.c, {
                        i18nKey: "footerText",
                        values: {
                            totalDistributedRobux: (0,
                            Ei.uf)(n)
                        },
                        components: {
                            img: (0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(qa),
                                width: 16,
                                height: 16,
                                alt: ""
                            }),
                            strong: (0,
                            Fi.tZ)("strong", {}),
                            a: (0,
                            Fi.tZ)("a", {
                                href: "https://now.gg/terms-and-privacy.html?".concat((0,
                                Ei.wr)()),
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0,
                                rr.t)("termAndConditions")
                            })
                        }
                    })
                })
            })
        }, kc = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }, Ac = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, Sc = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxCreditsEarned
            }
            ))
              , e = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxRedemptionCodeList
            }
            ))
              , t = (0,
            bi.useState)(!0)
              , i = t[0]
              , r = t[1]
              , o = (0,
            bi.useState)(!0)
              , a = o[0]
              , l = o[1]
              , c = (0,
            bi.useState)("true" !== localStorage.getItem("ng-no-robux-notif-closed"))
              , d = c[0]
              , s = c[1]
              , p = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , u = (0,
            mi.v9)((function(n) {
                return n.gamification.questClaimed
            }
            ))
              , f = (0,
            mi.I0)();
            return (0,
            bi.useEffect)((function() {
                p && kc(void 0, void 0, void 0, (function() {
                    var n;
                    return Ac(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, zi.Z.getRedemptionHistory({}, {
                                uaSessionId: (0,
                                Ei.io)(wi.K3),
                                uaId: (0,
                                Ei.Fz)(wi.nP),
                                playSessionId: pi.ZP.playSessionId || (pi.ZP.isAppPage || pi.ZP.isHomePage || (0,
                                pi.DJ)() ? "NA" : "")
                            })];
                        case 1:
                            return (n = e.sent()).status === Ti.YR.Success && f({
                                type: Qo.Z.REDEMPTION_FLOW,
                                payload: {
                                    robuxRedemptionCodeList: n.redemptionCodes
                                }
                            }),
                            [3, 3];
                        case 2:
                            return e.sent(),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), []),
            (0,
            Fi.BX)(Dl, {
                children: [(0,
                Fi.BX)(Sl, {
                    children: [u && (0,
                    Fi.tZ)(Tl, {}), (0,
                    Fi.tZ)("img", {
                        src: (0,
                        Ai.j)(qa),
                        alt: "",
                        height: 48,
                        width: 48
                    }), u && (0,
                    Fi.BX)(Fi.HY, {
                        children: [(0,
                        Fi.tZ)(El, {
                            src: (0,
                            Ai.j)(qo.Z),
                            alt: "",
                            height: 43,
                            width: 43,
                            first: !0
                        }), (0,
                        Fi.tZ)(El, {
                            src: (0,
                            Ai.j)(qo.Z),
                            alt: "",
                            height: 43,
                            width: 43,
                            first: !1
                        })]
                    }), (0,
                    Fi.BX)(Da.GN, {
                        style: {
                            gap: "4px"
                        },
                        children: [(0,
                        Fi.tZ)(pr.IS, {
                            children: (0,
                            rr.t)("robuxWonSoFar")
                        }), (0,
                        Fi.tZ)(Rl, {
                            style: u ? {
                                border: "1px solid #23AF29",
                                background: "#004803"
                            } : {},
                            children: n
                        })]
                    })]
                }), (0,
                Fi.tZ)(Bl, {
                    children: (0,
                    Fi.tZ)(Fl, {
                        tabs: [{
                            title: (0,
                            rr.t)("quests"),
                            onClick: function() {
                                r(!0),
                                l(!1)
                            },
                            event: "RobuxQuestButtonClicked"
                        }, {
                            title: (0,
                            rr.t)("jackpot"),
                            onClick: function() {
                                r(!1),
                                l(!0)
                            },
                            event: "RobuxJackpotButtonClicked"
                        }, {
                            title: (0,
                            rr.t)("redeem"),
                            onClick: function() {
                                r(!1),
                                l(!1)
                            },
                            event: "RobuxRedeemButtonClicked"
                        }]
                    })
                }), i ? (0,
                Fi.tZ)(bc, {}) : a ? (0,
                Fi.BX)(Fi.HY, {
                    children: [(0,
                    Fi.tZ)(Ya, {}), (0,
                    Fi.tZ)(Pc, {})]
                }) : (0,
                Fi.BX)(Ol, {
                    children: [n >= pi.ZP.appInfo.rwdMinRedemptionCredits ? (0,
                    Fi.tZ)(vl, {
                        loginToClaim: function() {
                            f({
                                type: ir.Z.TOGGLE_LOGIN,
                                payload: {
                                    showLogin: !0
                                }
                            })
                        }
                    }) : 0 === e.length ? (0,
                    Fi.BX)(Fi.HY, {
                        children: [d && (0,
                        Fi.BX)(jl, {
                            children: [(0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(Pl),
                                alt: "",
                                height: 16,
                                width: 16
                            }), (0,
                            Fi.tZ)(pr.gd, {
                                children: (0,
                                rr.t)("boostRobuxChances")
                            }), (0,
                            Fi.tZ)("img", {
                                alt: (0,
                                rr.t)("close"),
                                src: (0,
                                Ai.j)(ar),
                                style: {
                                    width: "14px",
                                    height: "14px",
                                    marginLeft: "12px",
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    localStorage.setItem("ng-no-robux-notif-closed", "true"),
                                    s(!1)
                                }
                            })]
                        }), (0,
                        Fi.BX)(Il, {
                            children: [(0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(Zl),
                                alt: "",
                                height: 77,
                                width: 77
                            }), (0,
                            Fi.BX)(Cl, {
                                children: [(0,
                                Fi.tZ)(pr.gd, {
                                    children: (0,
                                    rr.t)("notEnoughRobuxHead")
                                }), (0,
                                Fi.tZ)(pr.IS, {
                                    style: {
                                        color: "white"
                                    },
                                    children: (0,
                                    rr.t)("earnRobuxToRedeem", {
                                        minRobuxRqd: pi.ZP.appInfo.rwdMinRedemptionCredits
                                    })
                                })]
                            })]
                        })]
                    }) : null, 0 !== e.length && (0,
                    Fi.tZ)(cl, {})]
                })]
            })
        }, Ec = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Oc = Gi.ZP.div(Je || (Je = Ec(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  max-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  max-height: 100%;\n"]))), Ic = Oc, Cc = function() {
            var n = (0,
            mi.I0)();
            return (0,
            bi.useEffect)((function() {
                return function() {
                    n({
                        type: Qo.Z.JACKPOT_FLOW,
                        payload: {
                            showJackpotFlow: !1,
                            showRewardPopup: !1
                        }
                    })
                }
            }
            ), []),
            (0,
            Fi.tZ)(Ic, {
                children: (0,
                Fi.tZ)(Sc, {})
            })
        }, jc = {
            src: "/play/_next/static/media/robux-coin-shadow.3dd0b674.svg",
            height: 70,
            width: 64
        }, Rc = {
            src: "/play/_next/static/media/meter-compact-bg.97e400da.svg",
            height: 81,
            width: 101
        }, Bc = {
            src: "/play/_next/static/media/meter-success-bg.19af1de9.svg",
            height: 69,
            width: 320
        }, zc = {
            src: "/play/_next/static/media/meter-error-bg.fd0b26c3.svg",
            height: 69,
            width: 320
        }, Tc = {
            src: "/play/_next/static/media/robux-dollars.3f76bf4e.svg",
            height: 16,
            width: 16
        }, Dc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Xc = Gi.ZP.div(Ke || (Ke = Dc(["\n  padding: 1px;\n  border-radius: 12px;\n\n  .header {\n    margin-bottom: 8px;\n  }\n"], ["\n  padding: 1px;\n  border-radius: 12px;\n\n  .header {\n    margin-bottom: 8px;\n  }\n"]))), Lc = Gi.ZP.div($e || ($e = Dc(["\n  padding: 14.5px 16px;\n  border-radius: 11.5px;\n  background-color: ", ';\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n\n  &:before {\n    padding: 1px;\n    content: "";\n    position: absolute;\n    inset: 0;\n    border-radius: 11.5px;\n    background: linear-gradient(185.47deg, rgba(223, 126, 44, 0.2) 3.91%, #DFAC2C 95.17%);\n    -webkit-mask: \n      linear-gradient(#fff 0 0) content-box, \n      linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n    pointer-events: none;\n  }\n\n  > div:first-child {\n    flex: 1;\n  }\n\n  > img {\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n'], ["\n  padding: 14.5px 16px;\n  border-radius: 11.5px;\n  background-color: ", ';\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n\n  &:before {\n    padding: 1px;\n    content: "";\n    position: absolute;\n    inset: 0;\n    border-radius: 11.5px;\n    background: linear-gradient(185.47deg, rgba(223, 126, 44, 0.2) 3.91%, #DFAC2C 95.17%);\n    -webkit-mask: \n      linear-gradient(#fff 0 0) content-box, \n      linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n    pointer-events: none;\n  }\n\n  > div:first-child {\n    flex: 1;\n  }\n\n  > img {\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n'])), (function(n) {
            return n.theme.colors.black20
        }
        )), _c = Gi.ZP.div(nt || (nt = Dc(["\n  width: 80px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n\n  img {\n    position: absolute;\n    bottom: 16px;\n  }\n"], ["\n  width: 80px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n\n  img {\n    position: absolute;\n    bottom: 16px;\n  }\n"]))), Fc = Gi.ZP.div(et || (et = Dc(["\n  z-index: 1;\n  min-width: 52px;\n  padding: 0 13px;\n  background-color: #483800;\n  border: 1px solid #AF8723;\n  border-radius: 30px;\n  ", "\n\n  h4 {\n    font-weight: 700;\n  }\n"], ["\n  z-index: 1;\n  min-width: 52px;\n  padding: 0 13px;\n  background-color: #483800;\n  border: 1px solid #AF8723;\n  border-radius: 30px;\n  ", "\n\n  h4 {\n    font-weight: 700;\n  }\n"])), Xa.be), Uc = Gi.ZP.div(tt || (tt = Dc(["\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: relative;\n  padding: 32px 16px 12px;\n  color: ", ";\n  position: absolute;\n  bottom: 5px;\n"], ["\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: relative;\n  padding: 32px 16px 12px;\n  color: ", ";\n  position: absolute;\n  bottom: 5px;\n"])), (function(n) {
            return n.bgUrl
        }
        ), (function(n) {
            return n.success ? "#00C9BD" : "#FF3A30"
        }
        )), Mc = Gi.ZP.div(it || (it = Dc(["\n  height: 64px;\n  position: relative;\n"], ["\n  height: 64px;\n  position: relative;\n"]))), Nc = Xc, Gc = function(n) {
            var e = n.onOpen
              , t = (0,
            mi.v9)((function(n) {
                return n.robuxRewards.robuxCreditsEarned
            }
            ))
              , i = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , r = !i && t >= 1
              , o = i && t >= pi.ZP.appInfo.rwdMinRedemptionCredits;
            return (0,
            Fi.BX)(Nc, {
                children: [(0,
                Fi.BX)(Do, {
                    className: "header",
                    onClick: e,
                    children: [(0,
                    Fi.tZ)("img", {
                        alt: "",
                        src: (0,
                        Ai.j)(Tc),
                        width: 16,
                        height: 16
                    }), (0,
                    Fi.tZ)(pr.IS, {
                        children: (0,
                        rr.t)("robuxRewards")
                    }), (0,
                    Fi.tZ)(kr.pL, {
                        color: "ascent"
                    })]
                }), (0,
                Fi.BX)(Lc, {
                    children: [(0,
                    Fi.tZ)(lc, {}), (0,
                    Fi.BX)(_c, {
                        children: [(0,
                        Fi.tZ)("img", {
                            alt: "",
                            src: (0,
                            Ai.j)(jc),
                            height: 68,
                            width: 62
                        }), (0,
                        Fi.tZ)(Fc, {
                            children: (0,
                            Fi.tZ)(pr.js, {
                                children: t
                            })
                        })]
                    }), (0,
                    Fi.tZ)("img", {
                        alt: "",
                        src: (0,
                        Ai.j)(Rc),
                        height: 80,
                        width: 101
                    })]
                }), 0 !== t && (r || o) && (0,
                Fi.tZ)(Mc, {
                    children: (0,
                    Fi.tZ)(Uc, {
                        success: o,
                        bgUrl: (0,
                        Ai.j)(o ? Bc : zc),
                        children: (0,
                        Fi.tZ)(pr.gd, {
                            children: (0,
                            rr.t)(o ? "claimRobux" : "loginClaimRobux")
                        })
                    })
                })]
            })
        }, Vc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Yc = Gi.ZP.div(rt || (rt = Vc(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  height: calc(100% - 52px);\n  margin-top: 20px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  height: calc(100% - 52px);\n  margin-top: 20px;\n"]))), Hc = Gi.ZP.div(ot || (ot = Vc(["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 12px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 12px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.black20
        }
        ), (function(n) {
            return n.theme.colors.white70
        }
        )), Qc = (0,
        Gi.ZP)(pr.gd)(at || (at = Vc(["\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  text-align: end;\n  text-transform: uppercase;\n"], ["\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  text-align: end;\n  text-transform: uppercase;\n"]))), qc = Gi.ZP.div(lt || (lt = Vc(["\n  display: flex;\n  padding: 0px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  width: 100%;\n  color: ", ";\n"], ["\n  display: flex;\n  padding: 0px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  width: 100%;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Wc = (0,
        Gi.ZP)(pr.gd)(ct || (ct = Vc(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n\n  img {\n    border-radius: 50%;\n  }\n"]))), Jc = Gi.ZP.div(dt || (dt = Vc(["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.black20
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Kc = Gi.ZP.div(st || (st = Vc(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-align: end;\n  width: 100%;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-align: end;\n  width: 100%;\n\n  img {\n    border-radius: 50%;\n  }\n"]))), $c = (0,
        Gi.ZP)(pr.lU)(pt || (pt = Vc(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  text-align: left;\n"], ["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  text-align: left;\n"]))), nd = (0,
        Gi.ZP)(pr.gd)(ut || (ut = Vc(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n  color: ", ";\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n  color: ", ";\n\n  img {\n    border-radius: 50%;\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )), ed = Gi.ZP.div(ft || (ft = Vc(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  gap: 15px;\n  overflow-y: auto;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"], ["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  gap: 15px;\n  overflow-y: auto;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        )), td = Gi.ZP.p(gt || (gt = Vc(["\n  color: ", ";\n  text-align: center;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin: 8px 0px;\n"], ["\n  color: ", ";\n  text-align: center;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin: 8px 0px;\n"])), (function(n) {
            return n.theme.colors.white70
        }
        )), id = function() {
            var n, e = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            )), t = (0,
            bi.useState)(null), i = t[0], r = t[1], o = (0,
            mi.v9)((function(n) {
                return n.gamification.dailyRankings
            }
            )), a = (0,
            mi.v9)((function(n) {
                return n.gamification.selfDailyRank
            }
            )), l = (0,
            mi.v9)((function(n) {
                return n.gamification.weeklyRankings
            }
            )), c = (0,
            mi.v9)((function(n) {
                return n.gamification.selfWeeklyRank
            }
            )), d = (0,
            mi.v9)((function(n) {
                return n.gamification.monthlyRankings
            }
            )), s = (0,
            mi.v9)((function(n) {
                return n.gamification.selfMonthlyRank
            }
            )), p = (0,
            mi.v9)((function(n) {
                return n.gamification.lastUpdatedAt
            }
            )), u = (0,
            bi.useState)(o), f = u[0], g = u[1], h = (0,
            bi.useState)(a), x = h[0], m = h[1], b = parseInt(((Date.now() - p) / 1e3).toString(), 10), w = (0,
            bi.useState)(b < 300 ? "".concat((0,
            rr.t)("seconds", {
                seconds: b
            })) : new Date(p).toLocaleString()), y = w[0], v = w[1], Z = (0,
            mi.I0)(), P = (0,
            bi.useRef)(null), k = [{
                title: (0,
                rr.t)("today"),
                onClick: function() {
                    g(o),
                    m(a)
                },
                event: "LeaderboardDailyButtonClicked"
            }, {
                title: (0,
                rr.t)("thisWeek"),
                onClick: function() {
                    g(l),
                    m(c)
                },
                event: "LeaderboardWeeklyButtonClicked"
            }, {
                title: (0,
                rr.t)("thisMonth"),
                onClick: function() {
                    g(d),
                    m(s)
                },
                event: "LeaderboardMonthlyButtonClicked"
            }], A = function() {
                var n = e ? (0,
                nr.et)() : null;
                n && r(n)
            };
            return (0,
            bi.useEffect)((function() {
                return A(),
                setInterval((function() {
                    var n = ui.Z.getState().gamification.lastUpdatedAt
                      , e = parseInt(((Date.now() - n) / 1e3).toString(), 10);
                    v(e < 300 ? "".concat((0,
                    rr.t)("seconds", {
                        seconds: e
                    })) : new Date(n).toLocaleString())
                }
                ), 1e3),
                window.addEventListener("nggProfileDetailsUpdated", A),
                function() {
                    window.removeEventListener("nggProfileDetailsUpdated", A)
                }
            }
            ), []),
            (0,
            Fi.BX)(Yc, {
                children: [(0,
                Fi.tZ)(Fl, {
                    tabs: k
                }), (0,
                Fi.tZ)(td, {
                    children: "".concat((0,
                    rr.t)("lastUpdated"), " ").concat(y)
                }), (0,
                Fi.BX)(Hc, {
                    children: [(0,
                    Fi.tZ)(pr.gd, {
                        style: {
                            width: "26px"
                        },
                        children: "#"
                    }), (0,
                    Fi.tZ)(pr.gd, {
                        style: {
                            width: "-webkit-fill-available",
                            textTransform: "uppercase"
                        },
                        children: (0,
                        rr.t)("name")
                    }), (0,
                    Fi.BX)(Qc, {
                        children: [(0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("robux"),
                            src: (0,
                            Ai.j)(dl.Z),
                            width: 12,
                            height: 12
                        }), (0,
                        rr.t)("robuxWon")]
                    })]
                }), (0,
                Fi.tZ)(ed, {
                    children: f.map((function(n, e) {
                        return (0,
                        Fi.BX)(qc, {
                            children: [(0,
                            Fi.tZ)(pr.gd, {
                                style: {
                                    width: "26px"
                                },
                                children: e + 1
                            }), (0,
                            Fi.BX)(Wc, {
                                children: [(0,
                                Fi.tZ)("img", {
                                    alt: "U",
                                    src: n.avatar,
                                    width: 24,
                                    height: 24
                                }), n.handle]
                            }), (0,
                            Fi.tZ)(pr.IS, {
                                style: {
                                    color: Ml.qm.colors.caution,
                                    textAlign: "right"
                                },
                                children: n.robuxEarned
                            })]
                        })
                    }
                    ))
                }), (0,
                Fi.BX)(Jc, {
                    style: {
                        paddingRight: e ? "12px" : "6px"
                    },
                    children: [(0,
                    Fi.tZ)(pr.QV, {
                        ref: P,
                        style: {
                            marginRight: "4px",
                            minWidth: e ? "unset" : "24px"
                        },
                        children: e ? x.rank : "--"
                    }), e ? (0,
                    Fi.BX)(Kc, {
                        style: {
                            width: "".concat(274 - ((null === (n = P.current) || void 0 === n ? void 0 : n.getBoundingClientRect().width) || 20), "px")
                        },
                        children: [(0,
                        Fi.tZ)("img", {
                            src: null === i || void 0 === i ? void 0 : i.avatar,
                            alt: "U",
                            width: 28,
                            height: 28
                        }), (0,
                        Fi.tZ)($c, {
                            children: null === i || void 0 === i ? void 0 : i.handle
                        }), (0,
                        Fi.tZ)(pr.lU, {
                            children: "[".concat((0,
                            rr.t)("you"), "]")
                        }), (0,
                        Fi.tZ)(pr.QV, {
                            style: {
                                color: Ml.qm.colors.caution,
                                textAlign: "right"
                            },
                            children: x.robuxEarned
                        })]
                    }) : (0,
                    Fi.BX)(Fi.HY, {
                        children: [(0,
                        Fi.BX)(nd, {
                            children: [(0,
                            Fi.tZ)($i.Z, {
                                isLoggedIn: e,
                                user: i,
                                src: null === i || void 0 === i ? void 0 : i.avatar,
                                size: 28
                            }), (0,
                            rr.t)("loginToViewRank")]
                        }), (0,
                        Fi.tZ)(cr.z, {
                            size: "small",
                            onClick: function() {
                                Z({
                                    type: ir.Z.TOGGLE_LOGIN,
                                    payload: {
                                        showLogin: !0
                                    }
                                }),
                                Z({
                                    type: ir.Z.UPDATE_LOGIN_CONTEXT,
                                    payload: {
                                        loginContext: wi.$6.profile
                                    }
                                })
                            },
                            style: {
                                padding: "4px 11px"
                            },
                            children: (0,
                            rr.t)("login")
                        })]
                    })]
                })]
            })
        }, rd = {
            src: "/play/_next/static/media/leaderboard.bd6c1332.svg",
            height: 16,
            width: 16
        }, od = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ad = Gi.ZP.div(ht || (ht = od(["\n  display: inline-flex;\n  padding: 4px 6px 4px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  color:  ", ";\n  font-size: 10px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  height: 24px;\n  z-index: 1;\n"], ["\n  display: inline-flex;\n  padding: 4px 6px 4px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  color:  ", ";\n  font-size: 10px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  height: 24px;\n  z-index: 1;\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.black40
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), ld = Gi.ZP.div(xt || (xt = od(["\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  border-radius: 50%;\n  align-self: self-end;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  border-radius: 50%;\n  align-self: self-end;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))), cd = Gi.ZP.div(mt || (mt = od(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"]))), dd = Gi.ZP.div(bt || (bt = od(["\n  display: flex;\n  width: 81px;\n  height: 71px;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  width: 81px;\n  height: 71px;\n  justify-content: space-between;\n"]))), sd = Gi.ZP.img(wt || (wt = od(["\n  border-radius: 50%;\n  position: absolute;\n  margin-left: 16px;\n  transform: translateY(7px);\n"], ["\n  border-radius: 50%;\n  position: absolute;\n  margin-left: 16px;\n  transform: translateY(7px);\n"]))), pd = function(n) {
            var e = n.onOpen
              , t = (0,
            mi.v9)((function(n) {
                return n.gamification.dailyRankings
            }
            ));
            return (0,
            Fi.BX)(To, {
                children: [(0,
                Fi.BX)(Do, {
                    onClick: e,
                    children: [(0,
                    Fi.tZ)("img", {
                        alt: (0,
                        rr.t)("leaderboard"),
                        src: (0,
                        Ai.j)(rd),
                        width: 16,
                        height: 16
                    }), (0,
                    Fi.tZ)(pr.IS, {
                        children: (0,
                        rr.t)("rankings")
                    }), (0,
                    Fi.tZ)(kr.pL, {
                        color: "ascent"
                    })]
                }), (0,
                Fi.tZ)(Lc, {
                    style: {
                        height: "60px",
                        marginTop: "24px"
                    },
                    children: (0,
                    Fi.tZ)(cd, {
                        children: t.slice(0, 3).map((function(n, e) {
                            return (0,
                            Fi.BX)(dd, {
                                children: [(0,
                                Fi.BX)(ad, {
                                    children: [(0,
                                    Fi.tZ)("img", {
                                        alt: (0,
                                        rr.t)("robux"),
                                        src: (0,
                                        Ai.j)(dl.Z),
                                        width: 12,
                                        height: 12
                                    }), n.robuxEarned]
                                }), (0,
                                Fi.tZ)(sd, {
                                    alt: (0,
                                    rr.t)("user"),
                                    src: n.avatar,
                                    width: 64,
                                    height: 64
                                }), (0,
                                Fi.tZ)(ld, {
                                    children: (0,
                                    Fi.tZ)(pr.qm, {
                                        children: "#".concat(e + 1)
                                    })
                                })]
                            })
                        }
                        ))
                    })
                })]
            })
        }, ud = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }, fd = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, gd = function(n) {
            var e = n.robuxView
              , t = n.profileView
              , i = n.leaderboardView
              , r = n.onClose
              , o = n.onUpdate
              , a = (0,
            mi.I0)()
              , l = (0,
            mi.v9)((function(n) {
                var e;
                return null === (e = n.user) || void 0 === e ? void 0 : e.recentPlayedApps
            }
            ))
              , c = (0,
            bi.useState)(!1)
              , d = c[0]
              , s = c[1]
              , p = (0,
            bi.useState)(!1)
              , u = p[0]
              , f = p[1]
              , g = (0,
            bi.useState)([])
              , h = g[0]
              , x = g[1]
              , m = (0,
            bi.useState)("")
              , b = m[0]
              , w = m[1]
              , y = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , v = (0,
            bi.useState)(null)
              , Z = v[0]
              , P = v[1]
              , k = (0,
            bi.useRef)(null)
              , A = (0,
            bi.useRef)(null)
              , S = (0,
            bi.useRef)(null)
              , E = (0,
            bi.useRef)(null)
              , O = (0,
            bi.useRef)(null)
              , I = (0,
            mi.v9)((function(n) {
                return n.gamification.dailyRankings
            }
            ))
              , C = (0,
            mi.v9)((function(n) {
                return n.gamification.lastUpdatedAt
            }
            ))
              , j = (0,
            mi.v9)((function(n) {
                return n.play.isAdBlockerEnabled
            }
            ))
              , R = (0,
            mi.v9)((function(n) {
                return n.user.questsInfo
            }
            ))
              , B = (0,
            mi.v9)((function(n) {
                return n.auth.showChangePwdModal
            }
            ))
              , z = function() {
                var n, e, t, i;
                setTimeout((function() {
                    r()
                }
                ), 500),
                null === (n = k.current) || void 0 === n || n.classList.add("close"),
                null === (e = A.current) || void 0 === e || e.classList.add("close"),
                null === (t = S.current) || void 0 === t || t.classList.add("close"),
                null === (i = E.current) || void 0 === i || i.classList.add("close"),
                R.forEach((function(n) {
                    1 === n.progressRatio && n.earnCount - n.claimCount !== 0 && a({
                        type: Bi.Z.UPDATE_ACTION,
                        payload: {
                            showNotifDot: !0
                        }
                    })
                }
                ))
            }
              , T = function() {
                f(!1)
            }
              , D = function() {
                var n = y ? (0,
                nr.et)() : null;
                n && P(n)
            };
            (0,
            bi.useEffect)((function() {
                i && Date.now() - C > 6e4 && ud(void 0, void 0, void 0, (function() {
                    var n;
                    return fd(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, zi.Z.getLeaderboard({}, {})];
                        case 1:
                            return n = e.sent(),
                            (0,
                            Ei.Hg)(n),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), [i]),
            (0,
            bi.useEffect)((function() {
                D()
            }
            ), [y]),
            (0,
            bi.useEffect)((function() {
                return window.addEventListener("nggProfileDetailsUpdated", D),
                function() {
                    window.removeEventListener("nggProfileDetailsUpdated", D)
                }
            }
            ), []);
            return (0,
            bi.createPortal)((0,
            Fi.BX)(jr, {
                ref: E,
                onClick: function(n) {
                    n.target === E.current && z()
                },
                style: d ? {
                    zIndex: "100"
                } : {},
                children: [(0,
                Fi.BX)(zr, {
                    ref: k,
                    children: [!d && (0,
                    Fi.BX)(Fr, {
                        children: [i ? (0,
                        rr.t)("rankings") : e ? (0,
                        rr.t)("winRobuxTitle") : (0,
                        rr.t)("profile"), (0,
                        Fi.tZ)("img", {
                            alt: "",
                            src: (0,
                            Ai.j)(lr),
                            style: {
                                transform: i || !(0,
                                Ei.wA)() ? "translate(239px, -14px)" : e || !e && j ? "translate(191px, -14px)" : "translate(143px, -14px)"
                            }
                        })]
                    }), t && !d && (0,
                    Fi.BX)(Fi.HY, {
                        children: [(0,
                        Fi.BX)(Vr, {
                            children: [(0,
                            Fi.tZ)($r, {
                                userStore: Z,
                                onEdit: function() {
                                    y ? f(!0) : a({
                                        type: ir.Z.TOGGLE_LOGIN,
                                        payload: {
                                            showLogin: !0
                                        }
                                    })
                                }
                            }), (0,
                            Fi.tZ)(uo, {}), (0,
                            Fi.tZ)(Gr, {}), (0,
                            Ei.wA)() && (0,
                            Ei.c6)() && (0,
                            Fi.BX)(Fi.HY, {
                                children: [(0,
                                Fi.tZ)(Gc, {
                                    onOpen: function() {
                                        a({
                                            type: Bi.Z.TOGGLE_VIEW,
                                            payload: {
                                                showProfileView: !1,
                                                showRobuxView: !0,
                                                showLeaderboardView: !1
                                            }
                                        })
                                    }
                                }), (0,
                                Fi.tZ)(Gr, {})]
                            }), I.length > 0 && (0,
                            Fi.BX)(Fi.HY, {
                                children: [(0,
                                Fi.tZ)(pd, {
                                    onOpen: function() {
                                        a({
                                            type: Bi.Z.TOGGLE_VIEW,
                                            payload: {
                                                showProfileView: !1,
                                                showRobuxView: !1,
                                                showLeaderboardView: !0
                                            }
                                        })
                                    }
                                }), (0,
                                Fi.tZ)(Gr, {})]
                            }), (0,
                            Fi.tZ)(_o, {
                                onOpen: function() {
                                    var n, e;
                                    n = l,
                                    e = "recentlyPlayed",
                                    s(!0),
                                    x(n),
                                    w(e)
                                },
                                apps: l,
                                headerImg: tr,
                                headerText: "recentlyPlayed",
                                noAppText: "noAppRecents",
                                noAppsDisable: !0
                            }), (0,
                            Fi.tZ)(Gr, {})]
                        }), (0,
                        Fi.tZ)(Eo, {})]
                    }), e && !d && (0,
                    Fi.tZ)(Cc, {}), d && (0,
                    Fi.tZ)(Ro, {
                        onBack: function() {
                            s(!1)
                        },
                        apps: h,
                        headerText: b
                    }), i && (0,
                    Fi.tZ)(id, {})]
                }), (0,
                Fi.tZ)(Lr, {
                    bgImg: !0,
                    ref: A
                }), (0,
                Fi.BX)(Nr, {
                    ref: S,
                    children: [(0,
                    Fi.tZ)(_r, {
                        onClick: z,
                        className: "close",
                        children: (0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("close"),
                            src: (0,
                            Ai.j)(ar),
                            style: {
                                width: "18px",
                                height: "18px",
                                margin: "3px"
                            }
                        })
                    }), (0,
                    Fi.tZ)(_r, {
                        onClick: function() {
                            a({
                                type: "GET_SUPPORT"
                            })
                        },
                        className: "support",
                        children: (0,
                        Fi.tZ)("img", {
                            alt: (0,
                            rr.t)("support"),
                            src: (0,
                            Ai.j)(or)
                        })
                    })]
                }), u && !B && (0,
                Fi.tZ)(jr, {
                    ref: O,
                    onClick: function(n) {
                        n.target === O.current && T()
                    },
                    children: (0,
                    Fi.tZ)(Ho, {
                        onClose: T,
                        onUpdate: function() {
                            D(),
                            o()
                        }
                    })
                }), B && (0,
                Fi.tZ)(jr, {
                    children: (0,
                    Fi.tZ)(Sr, {
                        onBack: function() {
                            f(!0),
                            a({
                                type: ir.Z.UPDATE_PASSWORD,
                                payload: {
                                    showChangePwdModal: !1
                                }
                            })
                        }
                    })
                })]
            }), document.body)
        }, hd = t(17744), xd = function() {
            var n, e = (0,
            mi.I0)(), t = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            )), i = (0,
            mi.v9)((function(n) {
                return n.gamification.showRobuxView
            }
            )), r = (0,
            mi.v9)((function(n) {
                return n.gamification.showProfileView
            }
            )), o = (0,
            bi.useState)(null), a = o[0], l = o[1], c = (0,
            mi.v9)((function(n) {
                return n.play.draggableState
            }
            )), d = ((0,
            mi.v9)((function(n) {
                return n.play.isRecording
            }
            )),
            (0,
            mi.v9)((function(n) {
                return n.auth.userStoreUpdated
            }
            ))), s = (0,
            mi.v9)((function(n) {
                return n.gamification.showLeaderboardView
            }
            )), p = (0,
            mi.v9)((function(n) {
                return n.play.isFullscreen
            }
            )), u = function() {
                var n = t ? (0,
                nr.et)() : null;
                n && l(n),
                n && !n.handle && zi.Z.getUserProfile({}, {}).then((function(n) {
                    (0,
                    nr.Lj)(n);
                    var e = t ? (0,
                    nr.et)() : null;
                    e && l(e)
                }
                ))
            };
            (0,
            bi.useEffect)((function() {
                u(),
                !t && (0,
                pi.Us)() && ui.Z.dispatch({
                    type: Oi.Z.UPDATE_LOGIN_TOOLTIP,
                    payload: {
                        isTooltipVisible: !0
                    }
                })
            }
            ), []),
            (0,
            bi.useEffect)((function() {
                u(),
                e((0,
                er.J)())
            }
            ), [d, t]);
            var f = function() {
                "drag" !== c && ((0,
                pi.Sr)(),
                ui.Z.dispatch({
                    type: Oi.Z.UPDATE_LOGIN_TOOLTIP,
                    payload: {
                        isTooltipVisible: !1
                    }
                }),
                ui.Z.dispatch({
                    type: Oi.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                }),
                e({
                    type: Bi.Z.TOGGLE_VIEW,
                    payload: {
                        showProfileView: !0,
                        showRobuxView: !1,
                        showLeaderboardView: !1
                    }
                }),
                (0,
                fi.L9)(wi.Kf))
            };
            return (0,
            Fi.BX)(Fi.HY, {
                children: [!p && (0,
                Fi.tZ)(hd.S1, {
                    isLoggedIn: t,
                    children: (0,
                    Fi.tZ)($i.Z, {
                        id: "ng-profile",
                        isLoggedIn: t,
                        user: a,
                        src: null === a || void 0 === a ? void 0 : a.avatar,
                        click: function() {
                            return f()
                        }
                    })
                }), (r || i || s) && (0,
                Fi.tZ)(gd, {
                    robuxView: i && "mob" !== (null === (n = null === window || void 0 === window ? void 0 : window.nggClientIpInfo) || void 0 === n ? void 0 : n.browserCode),
                    profileView: r,
                    leaderboardView: s,
                    onClose: function() {
                        e({
                            type: Bi.Z.TOGGLE_VIEW,
                            payload: {
                                showProfileView: !1,
                                showRobuxView: !1,
                                showLeaderboardView: !1
                            }
                        })
                    },
                    onUpdate: function() {
                        var n = t ? (0,
                        nr.et)() : null;
                        l(n)
                    }
                })]
            })
        }, md = t(25186), bd = t(77360), wd = t(71660), yd = t(39475), vd = function(n) {
            var e = n.icon
              , t = n.element
              , i = n.channelUrl;
            return (0,
            Fi.tZ)(Ki.aU, {
                onClick: function() {
                    (0,
                    fi.L9)("UserInteraction", {
                        element: t,
                        action: "Clicked"
                    }),
                    window.open(i, "_blank", "noopener")
                },
                className: t.toLowerCase(),
                children: (0,
                Fi.tZ)("img", {
                    alt: "",
                    src: (0,
                    Ai.j)(e),
                    style: {
                        width: "24px",
                        height: "24px"
                    }
                })
            })
        }, Zd = t(42385), Pd = t(20948), kd = t(29871), Ad = {
            src: "/play/_next/static/media/secretPassage.56f8c667.jpg",
            height: 460,
            width: 760,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEDERITMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABMQL/2gAMAwEAAhEDEQA/AJvNoYhEYzYceZtfPatERDpeqf/Z"
        }, Sd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ed = Gi.ZP.div(yt || (yt = Sd(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Od = (0,
        Gi.iv)(vt || (vt = Sd(["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 0px;\n    margin: 0;\n  }\n"], ["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 0px;\n    margin: 0;\n  }\n"]))), Id = Gi.ZP.div(Zt || (Zt = Sd(["\n  ", "\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 8px; \n\n  > p {\n    color: ", ";\n    text-align: center; \n  }\n"], ["\n  ", "\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 8px; \n\n  > p {\n    color: ", ";\n    text-align: center; \n  }\n"])), Xa.be, (function(n) {
            return n.theme.colors.white70
        }
        )), Cd = (0,
        Gi.ZP)(pr.Bb)(Pt || (Pt = Sd(["\n  margin: 8px auto 12px;\n  text-align: center;\n"], ["\n  margin: 8px auto 12px;\n  text-align: center;\n"]))), jd = (0,
        Gi.ZP)(la.Yd)(kt || (kt = Sd(["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"], ["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"]))), Rd = Gi.ZP.div(At || (At = Sd(["\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px 16px;\n  margin: 16px -24px 0px -24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.8);\n"], ["\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px 16px;\n  margin: 16px -24px 0px -24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.8);\n"]))), Bd = Gi.ZP.div(St || (St = Sd(["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n"]))), zd = Gi.ZP.p(Et || (Et = Sd(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin: 0 0 0 4px;\n  &:after {\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    content: '';\n    transform: translate(-50%, -50%) rotate(45deg);\n    left: 50%;\n    top: 50%;\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\n    border-right: 1px solid rgba(255, 255, 255, 0.8);\n  }\n"], ["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin: 0 0 0 4px;\n  &:after {\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    content: '';\n    transform: translate(-50%, -50%) rotate(45deg);\n    left: 50%;\n    top: 50%;\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\n    border-right: 1px solid rgba(255, 255, 255, 0.8);\n  }\n"]))), Td = Gi.ZP.p(Ot || (Ot = Sd(["\n   font-weight: 600;\n   font-size: 20px;\n   line-height: 150%;\n   margin: 0;\n   color: ", ";\n"], ["\n   font-weight: 600;\n   font-size: 20px;\n   line-height: 150%;\n   margin: 0;\n   color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Dd = Gi.ZP.p(It || (It = Sd(["\n   color: rgba(255, 255, 255, 1);\n   font-size: 16px;\n   line-height: 24px;\n   font-weight: 600;\n   margin: 0;\n"], ["\n   color: rgba(255, 255, 255, 1);\n   font-size: 16px;\n   line-height: 24px;\n   font-weight: 600;\n   margin: 0;\n"]))), Xd = Gi.ZP.a(Ct || (Ct = Sd(["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n  text-decoration: none;\n  .hover {\n    display: initial;\n  }\n  img {\n    margin-right: 4px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n  text-decoration: none;\n  .hover {\n    display: initial;\n  }\n  img {\n    margin-right: 4px;\n  }\n"]))), Ld = Gi.ZP.div(jt || (jt = Sd(["\n  display: flex;\n  align-items: center;\n  margin: 0 0 16px 0;\n"], ["\n  display: flex;\n  align-items: center;\n  margin: 0 0 16px 0;\n"]))), _d = Gi.ZP.ul(Rt || (Rt = Sd(["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.7);\n   margin-bottom: 8px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"], ["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.7);\n   margin-bottom: 8px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"]))), Fd = Gi.ZP.p(Bt || (Bt = Sd(["\n   margin: 0 2px 0 0;\n"], ["\n   margin: 0 2px 0 0;\n"]))), Ud = Ed, Md = t(7013), Nd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Gd = Gi.ZP.div(zt || (zt = Nd(["\n  padding: 10px 14px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 6px;\n\n  h6 {\n    font-weight: 700;\n  }\n"], ["\n  padding: 10px 14px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 6px;\n\n  h6 {\n    font-weight: 700;\n  }\n"])), (function(n) {
            return n.theme.colors.black20
        }
        ), (function(n) {
            return n.theme.colors.success
        }
        )), Vd = function() {
            return (0,
            Fi.tZ)(Gd, {
                children: (0,
                Fi.tZ)(pr.IS, {
                    children: (0,
                    rr.t)("rewardValue")
                })
            })
        }, Yd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Hd = ((0,
        Gi.ZP)(la.Yd)(Tt || (Tt = Yd(["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"], ["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"]))),
        Gi.ZP.div(Dt || (Dt = Yd(["\n  ", "\n  gap: 5px;\n  background: ", ";\n  border-radius: 8px;\n  padding: 10.5px 24px;\n  margin: 32px auto 0;\n  width: fit-content;\n"], ["\n  ", "\n  gap: 5px;\n  background: ", ";\n  border-radius: 8px;\n  padding: 10.5px 24px;\n  margin: 32px auto 0;\n  width: fit-content;\n"])), Xa.be, (function(n) {
            return n.theme.colors.black20
        }
        ))), Qd = Gi.ZP.span(Xt || (Xt = Yd(["\n  position: relative;\n\n  i {\n    color: ", ";\n    position: relative;\n    z-index: 1;\n  }\n  &::after {\n    content: '';\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: ", ";\n  }\n"], ["\n  position: relative;\n\n  i {\n    color: ", ";\n    position: relative;\n    z-index: 1;\n  }\n  &::after {\n    content: '';\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.green
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), qd = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }, Wd = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, Jd = function(n) {
            var e = n.showMessage
              , t = void 0 === e || e
              , i = n.btnText
              , r = void 0 === i ? "" : i
              , o = n.onCopied
              , a = (0,
            bi.useState)(!1)
              , l = a[0]
              , c = a[1]
              , d = (0,
            mi.v9)((function(n) {
                return n.play.inviteLink
            }
            ))
              , s = (0,
            mi.I0)();
            return (0,
            bi.useEffect)((function() {
                qd(void 0, void 0, void 0, (function() {
                    var n;
                    return Wd(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            if (d)
                                return [2];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                            [4, zi.Z.getInviteLink({
                                appId: pi.ZP.appInfo.appId
                            }, {})];
                        case 2:
                            return (n = e.sent()).status === Ti.YR.Success && s({
                                type: Oi.Z.UPDATE_REFER_EARN_DATA,
                                payload: {
                                    inviteLink: n.inviteUrl
                                }
                            }),
                            [3, 4];
                        case 3:
                            return e.sent(),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), [d]),
            l && t ? (0,
            Fi.BX)(Hd, {
                children: [(0,
                Fi.tZ)(Qd, {
                    children: (0,
                    Fi.tZ)(Li.Z, {
                        name: "active",
                        size: 22
                    })
                }), (0,
                Fi.tZ)(pr.QV, {
                    children: (0,
                    rr.t)("inviteLinkCopied")
                })]
            }) : (0,
            Fi.tZ)(jd, {
                onClick: function() {
                    d && ((0,
                    Qa.FF)(d),
                    c(!0),
                    (0,
                    fi.L9)(wi.ss),
                    o && o())
                },
                disabled: !d,
                children: (0,
                Fi.tZ)(pr.QV, {
                    children: (0,
                    rr.t)(r || "copyInviteLink")
                })
            })
        }, Kd = function(n) {
            var e = n.toggle
              , t = n.onClose
              , i = n.loginToInvite
              , r = n.setSecretPassageState
              , o = n.secretPassage
              , a = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , l = (0,
            vi.$)().t
              , c = function() {
                (0,
                fi.L9)("SecretPassageViewed"),
                r(!0)
            };
            return (0,
            Fi.tZ)(kd.Z, {
                modalStyles: Od,
                onClose: function() {
                    setTimeout((function() {
                        r(!1)
                    }
                    ), 500),
                    t && t()
                },
                toggle: e,
                children: o ? (0,
                Fi.BX)("div", {
                    children: [(0,
                    Fi.tZ)(Ld, {
                        children: (0,
                        Fi.tZ)(Td, {
                            children: l("playRoblox")
                        })
                    }), (0,
                    Fi.BX)(Dd, {
                        children: [l("hint"), ":"]
                    }), (0,
                    Fi.BX)(_d, {
                        children: [(0,
                        Fi.tZ)("li", {
                            children: (0,
                            Fi.BX)(wc.c, {
                                i18nKey: "findSolitaire",
                                children: ["Play \u201c", (0,
                                Fi.tZ)("span", {
                                    children: "Solitaire"
                                }), "\u201d on now.gg."]
                            })
                        }), (0,
                        Fi.tZ)("li", {
                            children: l("getAdFree")
                        })]
                    }), (0,
                    Fi.tZ)("img", {
                        src: (0,
                        Ai.j)(Ad),
                        alt: "secretPassage",
                        width: 380,
                        height: 230
                    }), (0,
                    Fi.BX)(Rd, {
                        children: [(0,
                        Fi.tZ)(pr.QV, {
                            children: l("stilConfused")
                        }), (0,
                        Fi.BX)(Xd, {
                            href: wi.ul,
                            target: "_blank",
                            onClick: c,
                            rel: "noopener",
                            id: "ng-discord-btn",
                            children: [(0,
                            Fi.tZ)("img", {
                                src: (0,
                                Ai.j)(fo.Z),
                                alt: "search",
                                width: 16,
                                height: 16
                            }), (0,
                            Fi.tZ)(pr.IS, {
                                children: l("askForHelp")
                            })]
                        })]
                    })]
                }) : (0,
                Fi.BX)(Ud, {
                    children: [(0,
                    Fi.tZ)(Md.Z, {
                        height: 144,
                        width: 144,
                        applyAnimation: !0
                    }), (0,
                    Fi.tZ)(Cd, {
                        children: l("invite&Earn")
                    }), (0,
                    Fi.BX)(Id, {
                        children: [(0,
                        Fi.tZ)(pr.TZ, {
                            children: l("inviteFriends")
                        }), (0,
                        Fi.tZ)(Vd, {})]
                    }), a ? (0,
                    Fi.tZ)(Jd, {}) : (0,
                    Fi.tZ)(jd, {
                        onClick: i,
                        children: (0,
                        Fi.tZ)(pr.QV, {
                            children: l("loginToInvite")
                        })
                    }), (0,
                    Fi.BX)(Rd, {
                        children: [(0,
                        Fi.tZ)(pr.QV, {
                            children: l("cheatCode")
                        }), (0,
                        Fi.BX)(Bd, {
                            onClick: c,
                            children: [(0,
                            Fi.tZ)(Fd, {
                                children: "\u26a1"
                            }), (0,
                            Fi.tZ)(pr.IS, {
                                children: l("playInstantly")
                            }), (0,
                            Fi.tZ)(zd, {})]
                        })]
                    })]
                })
            })
        }, $d = t(64857), ns = t(49555), es = t(91469), ts = t(14194), is = t(60034), rs = function(n) {
            var e = n.toggle
              , t = n.onClose;
            return (0,
            bi.useEffect)((function() {
                e && (0,
                fi.L9)(wi.JP, {
                    loginPageContext: wi.$6.inviter
                })
            }
            ), [e]),
            (0,
            Fi.tZ)(kd.Z, {
                modalStyles: is.il,
                onClose: t,
                toggle: e,
                children: (0,
                Fi.BX)(is.ZP, {
                    children: [(0,
                    Fi.tZ)(Md.Z, {
                        height: 144,
                        width: 144,
                        applyAnimation: !0
                    }), (0,
                    Fi.tZ)(is.Dx, {
                        children: (0,
                        rr.t)("signinToPlayAdFreeTime")
                    }), (0,
                    Fi.tZ)(pr.lU, {
                        children: (0,
                        rr.t)("claimPlayTime")
                    }), (0,
                    Fi.tZ)(ts.Z, {
                        pageContext: wi.$6.inviter,
                        params: {
                            triggeredBy: "rewards"
                        }
                    }), (0,
                    Fi.tZ)(es.Z, {})]
                })
            })
        }, os = t(22012), as = t(68472), ls = t(12812), cs = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ds = Gi.ZP.div(Ft || (Ft = cs(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  .modal-overlay {\n    top: ", "px;\n    background: ", ";\n    transition: all 0.6s ease-out;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  .modal-overlay {\n    top: ", "px;\n    background: ", ";\n    transition: all 0.6s ease-out;\n  }\n\n  ", "\n"])), (function(n) {
            return n.topOffset
        }
        ), (function(n) {
            return n.theme.colors.black
        }
        ), (function(n) {
            return n.toggle ? (0,
            Gi.iv)(Lt || (Lt = cs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), _a) : (0,
            Gi.iv)(_t || (_t = cs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Fa)
        }
        )), ss = (0,
        Gi.iv)(Ut || (Ut = cs(["\n  width: 460px;\n  > div {\n    color: ", ";\n    margin: 24px 24px 32px;\n  }\n"], ["\n  width: 460px;\n  > div {\n    color: ", ";\n    margin: 24px 24px 32px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), ps = Gi.ZP.div(Mt || (Mt = cs(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), us = ds, fs = function(n) {
            var e = n.toggle
              , t = n.earnedMinutes
              , i = n.onClose
              , r = (0,
            bi.useState)(0)
              , o = r[0]
              , a = r[1]
              , l = (0,
            mi.v9)((function(n) {
                return n.play.consoleHeaderRef
            }
            ))
              , c = (0,
            bi.useCallback)((function() {
                var n;
                a((null === (n = null === l || void 0 === l ? void 0 : l.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) || 0)
            }
            ), [l]);
            return (0,
            bi.useEffect)((function() {
                return c(),
                window.addEventListener("resizeDone", c),
                function() {
                    window.removeEventListener("resizeDone", c)
                }
            }
            ), [c]),
            bi.default.createPortal((0,
            Fi.tZ)(ls.Z, {
                toggle: e,
                exitingDelay: .6,
                children: (0,
                Fi.tZ)(us, {
                    topOffset: o,
                    toggle: e,
                    children: (0,
                    Fi.BX)(os.Z, {
                        modalStyles: ss,
                        children: [(0,
                        Fi.tZ)(as.T, {
                            onClick: i,
                            children: (0,
                            Fi.tZ)(Li.Z, {
                                name: "cross-thin",
                                size: 24
                            })
                        }), (0,
                        Fi.tZ)(Md.Z, {
                            height: 144,
                            width: 144,
                            applyAnimation: !0
                        }), (0,
                        Fi.tZ)(Cd, {
                            children: (0,
                            rr.t)("earnedAdFreeMinutes", {
                                minutes: t
                            })
                        }), (0,
                        Fi.BX)(Id, {
                            children: [(0,
                            Fi.tZ)(pr.TZ, {
                                children: (0,
                                rr.t)("inviteMoreFriends")
                            }), (0,
                            Fi.tZ)(Vd, {})]
                        }), (0,
                        Fi.tZ)(Jd, {})]
                    })
                })
            }), document.body)
        }, gs = {
            src: "/play/_next/static/media/account-exists.8b2ddecd.svg",
            height: 144,
            width: 144
        }, hs = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, xs = Gi.ZP.div(Nt || (Nt = hs(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), ms = (0,
        Gi.iv)(Gt || (Gt = hs(["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"], ["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"]))), bs = Gi.ZP.div(Vt || (Vt = hs(["\n  display: flex;\n  width: fit-content;\n  margin: auto;\n"], ["\n  display: flex;\n  width: fit-content;\n  margin: auto;\n"]))), ws = xs, ys = function(n) {
            var e = n.toggle
              , t = n.onClose;
            return (0,
            Fi.tZ)(kd.Z, {
                modalStyles: ms,
                onClose: t,
                toggle: e,
                children: (0,
                Fi.BX)(ws, {
                    children: [(0,
                    Fi.tZ)(bs, {
                        children: (0,
                        Fi.tZ)("img", {
                            src: (0,
                            Ai.j)(gs),
                            height: 144,
                            width: 144,
                            alt: "account exist"
                        })
                    }), (0,
                    Fi.tZ)(Cd, {
                        children: (0,
                        rr.t)("accountAlreadyExists")
                    }), (0,
                    Fi.BX)(Id, {
                        children: [(0,
                        Fi.BX)(pr.TZ, {
                            children: [(0,
                            Fi.tZ)("strong", {
                                children: (0,
                                rr.t)("stillWinAdFreeTime")
                            }), (0,
                            Fi.tZ)("br", {}), (0,
                            rr.t)("inviteMoreFriends")]
                        }), (0,
                        Fi.tZ)(Vd, {})]
                    }), (0,
                    Fi.tZ)(Jd, {})]
                })
            })
        }, vs = {
            src: "/play/_next/static/media/play-time.f80859eb.svg",
            height: 110,
            width: 101
        }, Zs = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ps = (Gi.ZP.section(qt || (qt = Zs(["\n  ", "\n  padding: 11px 12px 11px 9px;\n  background: ", ";\n  margin-top: -12px;\n  margin-bottom: -12px;\n  position: relative;\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n  padding: 11px 12px 11px 9px;\n  background: ", ";\n  margin-top: -12px;\n  margin-bottom: -12px;\n  position: relative;\n\n  ", "\n\n  ", "\n"])), Xa.be, (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            var e = n.countDownStarted
              , t = n.theme;
            return e && (0,
            Gi.iv)(Yt || (Yt = Zs(["\n    background: rgba(243, 54, 33, 0.1);\n    position: relative;\n\n    &::before {\n      content: '';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      background: ", ";\n    }\n  "], ["\n    background: rgba(243, 54, 33, 0.1);\n    position: relative;\n\n    &::before {\n      content: '';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      background: ", ";\n    }\n  "])), t.colors.error)
        }
        ), (function(n) {
            return n.toggle ? (0,
            Gi.iv)(Ht || (Ht = Zs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), _a) : (0,
            Gi.iv)(Qt || (Qt = Zs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Fa)
        }
        )),
        Gi.ZP.div(Wt || (Wt = Zs(["\n  ", "\n  gap: 18px;\n  margin-left: 25px;\n\n  button {\n    border: 1px solid ", ";\n    padding: 4px 12px;\n    background: transparent;\n    color: ", ";\n    border-radius: ", ";\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n    box-shadow: none;\n    \n    &:hover, &:focus {\n      background: transparent;\n      color: ", ";\n    }\n  }\n\n  img {\n    cursor: pointer;\n    transition: transform 0.6s ease-out;\n    transform: ", ";\n  }\n"], ["\n  ", "\n  gap: 18px;\n  margin-left: 25px;\n\n  button {\n    border: 1px solid ", ";\n    padding: 4px 12px;\n    background: transparent;\n    color: ", ";\n    border-radius: ", ";\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n    box-shadow: none;\n    \n    &:hover, &:focus {\n      background: transparent;\n      color: ", ";\n    }\n  }\n\n  img {\n    cursor: pointer;\n    transition: transform 0.6s ease-out;\n    transform: ", ";\n  }\n"])), Xa.be, (function(n) {
            return n.theme.colors.white80
        }
        ), (function(n) {
            return n.theme.colors.white80
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.colors.white80
        }
        ), (function(n) {
            return n.openModal ? "rotateX(0)" : "rotateX(180deg)"
        }
        )),
        (0,
        Gi.iv)(Jt || (Jt = Zs(["\n  display: none;\n"], ["\n  display: none;\n"]))),
        (0,
        Gi.iv)(Kt || (Kt = Zs(["\n  z-index: 1 !important;\n"], ["\n  z-index: 1 !important;\n"]))),
        Gi.ZP.div(ei || (ei = Zs(["\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: -3px;\n  transform: translateY(-100%);\n  background: ", ";\n  padding: 16px;\n  border-radius: 12px;\n  isolation: isolate;\n\n  h4 {\n    margin-bottom: 8px;\n    font-weight: 700;\n  }\n\n  button {\n    margin: 0;\n    padding: 7px 16px;\n    white-space: nowrap;\n    border-radius: 6px;\n\n    h5 {\n      font-size: 12px;\n      line-height: 18px;\n    }\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(60px);\n    z-index: -1;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: -3px;\n  transform: translateY(-100%);\n  background: ", ";\n  padding: 16px;\n  border-radius: 12px;\n  isolation: isolate;\n\n  h4 {\n    margin-bottom: 8px;\n    font-weight: 700;\n  }\n\n  button {\n    margin: 0;\n    padding: 7px 16px;\n    white-space: nowrap;\n    border-radius: 6px;\n\n    h5 {\n      font-size: 12px;\n      line-height: 18px;\n    }\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(60px);\n    z-index: -1;\n  }\n\n  ", "\n"])), (function(n) {
            return n.theme.colors.black30
        }
        ), (function(n) {
            return n.theme.colors.white70
        }
        ), (function(n) {
            return n.toggle ? (0,
            Gi.iv)($t || ($t = Zs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), _a) : (0,
            Gi.iv)(ni || (ni = Zs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Fa)
        }
        )),
        Gi.ZP.div(ti || (ti = Zs(["\n  ", "\n  gap: 12px;\n"], ["\n  ", "\n  gap: 12px;\n"])), Xa.be),
        Gi.ZP.span(ii || (ii = Zs(["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"]))),
        Gi.ZP.div(ai || (ai = Zs(["\n  position: absolute;\n  top: 22px;\n  right: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  padding: 4px 6px;\n\n  p {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  top: 22px;\n  right: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  padding: 4px 6px;\n\n  p {\n    color: ", ";\n  }\n\n  ", "\n"])), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.toggle ? (0,
            Gi.iv)(ri || (ri = Zs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), _a) : (0,
            Gi.iv)(oi || (oi = Zs(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Fa)
        }
        ))), ks = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, As = Gi.ZP.div(li || (li = ks(["\n  color: ", ";\n\n  button {\n    color: ", ";\n    border: 1px solid ", ";\n    filter: drop-shadow(0px 4px 4px ", ");\n    border-radius: 8px;\n    background: none;\n    box-shadow: none;\n    padding: 9.5px 45.5px;\n\n    &:hover, &:focus {\n      background: none;\n    }\n  }\n\n  h3 {\n    margin-top: 36px;\n  }\n"], ["\n  color: ", ";\n\n  button {\n    color: ", ";\n    border: 1px solid ", ";\n    filter: drop-shadow(0px 4px 4px ", ");\n    border-radius: 8px;\n    background: none;\n    box-shadow: none;\n    padding: 9.5px 45.5px;\n\n    &:hover, &:focus {\n      background: none;\n    }\n  }\n\n  h3 {\n    margin-top: 36px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white80
        }
        ), (function(n) {
            return n.theme.colors.white80
        }
        ), (function(n) {
            return n.theme.colors.black20
        }
        )), Ss = (0,
        Gi.iv)(ci || (ci = ks(["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"], ["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"]))), Es = (0,
        Gi.ZP)(Ps)(di || (di = ks(["\n  top: auto;\n  right: 50%;\n  bottom: 88px;\n  transform: translateX(50%);\n"], ["\n  top: auto;\n  right: 50%;\n  bottom: 88px;\n  transform: translateX(50%);\n"]))), Os = As, Is = function(n) {
            var e = n.toggle
              , t = n.onClose
              , i = (0,
            bi.useState)(!1)
              , r = i[0]
              , o = i[1];
            return (0,
            Fi.tZ)(kd.Z, {
                modalStyles: Ss,
                onClose: t,
                toggle: e,
                children: (0,
                Fi.BX)(Os, {
                    children: [(0,
                    Fi.tZ)(Md.Z, {
                        height: 110,
                        width: 110,
                        src: vs
                    }), (0,
                    Fi.tZ)(Cd, {
                        children: (0,
                        rr.t)("adFreeTimeOver")
                    }), (0,
                    Fi.BX)(Id, {
                        children: [(0,
                        Fi.tZ)(pr.TZ, {
                            children: (0,
                            rr.t)("inviteMoreFriends")
                        }), (0,
                        Fi.tZ)(Vd, {})]
                    }), (0,
                    Fi.tZ)(ls.Z, {
                        toggle: r,
                        exitingDelay: .6,
                        children: (0,
                        Fi.tZ)(Es, {
                            toggle: r,
                            children: (0,
                            Fi.tZ)(pr.tZ, {
                                children: (0,
                                rr.t)("linkCopied")
                            })
                        })
                    }), (0,
                    Fi.tZ)(Jd, {
                        btnText: "copyLink",
                        showMessage: !1,
                        onCopied: function() {
                            o(!0),
                            window.setTimeout((function() {
                                o(!1)
                            }
                            ), 2e3)
                        }
                    })]
                })
            })
        }, Cs = function(n) {
            var e = n.toggle
              , t = n.earnedMinutes
              , i = n.onClose;
            return (0,
            Fi.tZ)(kd.Z, {
                modalStyles: Od,
                onClose: i,
                toggle: e,
                children: (0,
                Fi.BX)(ps, {
                    children: [(0,
                    Fi.tZ)(Md.Z, {
                        height: 144,
                        width: 144,
                        applyAnimation: !0
                    }), (0,
                    Fi.tZ)(Cd, {
                        children: (0,
                        rr.t)("earnedMinutes", {
                            minutes: t
                        })
                    }), (0,
                    Fi.BX)(Id, {
                        children: [(0,
                        Fi.tZ)(pr.TZ, {
                            children: (0,
                            rr.t)("inviteMoreFriends")
                        }), (0,
                        Fi.tZ)(Vd, {})]
                    }), (0,
                    Fi.tZ)(Jd, {})]
                })
            })
        }, js = function() {
            var n = (0,
            bi.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = (0,
            bi.useState)(!1)
              , r = i[0]
              , o = i[1]
              , a = (0,
            bi.useState)(!1)
              , l = a[0]
              , c = a[1]
              , d = (0,
            bi.useState)(!1)
              , s = d[0]
              , p = d[1]
              , u = (0,
            bi.useState)(!1)
              , f = u[0]
              , g = u[1]
              , h = (0,
            bi.useState)(!1)
              , x = h[0]
              , m = h[1]
              , b = (0,
            bi.useState)(!1)
              , w = b[0]
              , y = b[1]
              , v = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , Z = (0,
            mi.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            ))
              , P = (0,
            mi.v9)((function(n) {
                return n.play.adFreeTimeGainedSecs
            }
            ))
              , k = (0,
            mi.v9)((function(n) {
                return n.play.adFreeTimeSecs
            }
            ))
              , A = (0,
            mi.v9)((function(n) {
                return n.play.rewardStatus
            }
            ))
              , S = (0,
            mi.v9)((function(n) {
                return n.play.isNewInvitee
            }
            ))
              , E = (0,
            mi.v9)((function(n) {
                return n.ads.disableAllAds
            }
            ))
              , O = (0,
            mi.I0)();
            (0,
            bi.useEffect)((function() {
                v && Z && "rewards" === localStorage.getItem(wi.mu) && (t(!0),
                y(!0),
                localStorage.removeItem(wi.mu))
            }
            ), [v, Z]),
            (0,
            bi.useEffect)((function() {
                P && P > 0 && (S ? c(!0) : m(!0))
            }
            ), [P, S]),
            (0,
            bi.useEffect)((function() {
                O({
                    type: $d.Z.UPDATE_ADS_STATE,
                    payload: {
                        disableAllAds: k > 0
                    }
                })
            }
            ), [k]),
            (0,
            bi.useEffect)((function() {
                (0,
                ns.Ul)()
            }
            ), [E]),
            (0,
            bi.useEffect)((function() {
                document.body.addEventListener("click", (function() {
                    t(!1),
                    o(!1),
                    c(!1),
                    p(!1),
                    g(!1),
                    m(!1),
                    setTimeout((function() {
                        y(!1)
                    }
                    ), 500)
                }
                ))
            }
            ), []),
            (0,
            bi.useEffect)((function() {
                A === Ti.fr.FailureAccountAlreadyExists && (p(!0),
                (0,
                fi.L9)(wi.M_))
            }
            ), [A]);
            return (0,
            Fi.BX)(Fi.HY, {
                children: [(0,
                Fi.tZ)(Kd, {
                    toggle: e,
                    onClose: function() {
                        return t(!1)
                    },
                    loginToInvite: function() {
                        (0,
                        fi.L9)(wi.Tk),
                        t(!1),
                        o(!0)
                    },
                    setSecretPassageState: y,
                    secretPassage: w
                }), (0,
                Fi.tZ)(rs, {
                    toggle: r,
                    onClose: function() {
                        return o(!1)
                    }
                }), (0,
                Fi.tZ)(Is, {
                    onClose: function() {
                        return g(!1)
                    },
                    toggle: f
                }), (0,
                Fi.tZ)(ys, {
                    toggle: s,
                    onClose: function() {
                        return p(!1)
                    }
                }), (0,
                Fi.tZ)(fs, {
                    toggle: l,
                    earnedMinutes: Math.floor((P || 0) / 60),
                    onClose: function() {
                        c(!1),
                        O({
                            type: Oi.Z.UPDATE_REFER_EARN_DATA,
                            payload: {
                                adFreeTimeGainedSecs: 0
                            }
                        })
                    }
                }), (0,
                Fi.tZ)(Cs, {
                    toggle: x,
                    earnedMinutes: Math.floor((P || 0) / 60),
                    onClose: function() {
                        m(!1),
                        O({
                            type: Oi.Z.UPDATE_REFER_EARN_DATA,
                            payload: {
                                adFreeTimeGainedSecs: 0
                            }
                        })
                    }
                })]
            })
        };
        function Rs(n, e) {
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
        var Bs = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , zs = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , Ts = function(n) {
            var e = n.widget
              , t = (0,
            mi.I0)()
              , i = (0,
            mi.v9)((function(n) {
                return n.imap.guideVisible
            }
            ))
              , r = (0,
            mi.v9)((function(n) {
                return n.imap.initialized
            }
            ))
              , o = (0,
            mi.v9)((function(n) {
                return n.user.gameGuideNotificationCount
            }
            ))
              , a = (0,
            mi.v9)((function(n) {
                return n.user.lastGameGuideNotifDate
            }
            ))
              , l = (0,
            bi.useState)(!1)
              , c = l[0]
              , d = l[1]
              , s = (0,
            bi.useState)(!1)
              , p = s[0]
              , u = s[1];
            return (0,
            bi.useEffect)((function() {
                d(!e && o < 3 && (0,
                hi.J)(a, (new Date).toDateString()))
            }
            ), []),
            (0,
            bi.useEffect)((function() {
                c && t({
                    type: gi.Z.GAME_GUIDE_NOTIF_COUNT_UPDATE,
                    payload: {
                        gameGuideNotificationCount: o + 1,
                        lastGameGuideNotifDate: (new Date).toDateString()
                    }
                })
            }
            ), [c]),
            (0,
            bi.useEffect)((function() {
                i && u(!0)
            }
            ), [i]),
            r ? (0,
            Fi.BX)(Ki.aU, {
                id: "ng-controls",
                active: i,
                onClick: function() {
                    return (0,
                    fi.L9)(wi.S5, {
                        element: "GameGuide",
                        state: "".concat(i ? "Disabled" : "Enabled"),
                        robloxExperience: ui.Z.getState().play.robloxExperienceId
                    })
                },
                children: [(0,
                Fi.tZ)(Di.Z, {
                    type: "gamepad"
                }), (0,
                Fi.tZ)(bd.F9, {
                    style: {
                        display: !c || i || p ? "none" : "block"
                    }
                })]
            }) : null
        }
          , Ds = function() {
            var n, e, t, i, r, o, a = (0,
            mi.v9)((function(n) {
                return n.play.mouseLockActive
            }
            )), l = (0,
            mi.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            )), c = ui.Z.getState().appPreferences.legacyControls, d = pi.ZP.appInfo.playFeFeatures.enableMouseLock, s = ui.Z.getState().play.isFullscreen;
            return !l || !d || s || c || (null === (e = null === (n = null === pi.ZP || void 0 === pi.ZP ? void 0 : pi.ZP.appInfo) || void 0 === n ? void 0 : n.playFeFeatures) || void 0 === e ? void 0 : e.enableNativePointer) ? null : (0,
            Fi.tZ)(Ki.aU, {
                active: a,
                className: "mouse-lock",
                style: {
                    margin: (null === (i = null === (t = null === pi.ZP || void 0 === pi.ZP ? void 0 : pi.ZP.appInfo) || void 0 === t ? void 0 : t.playFeFeatures) || void 0 === i ? void 0 : i.enableNativePointer) ? "0" : void 0,
                    border: (null === (o = null === (r = null === pi.ZP || void 0 === pi.ZP ? void 0 : pi.ZP.appInfo) || void 0 === r ? void 0 : r.playFeFeatures) || void 0 === o ? void 0 : o.enableNativePointer) ? "none" : void 0
                },
                children: (0,
                Fi.tZ)(Ui, {})
            })
        }
          , Xs = function() {
            (0,
            vi.$)().t;
            var n = (0,
            mi.I0)()
              , e = (0,
            bi.useRef)(null)
              , t = (0,
            bi.useRef)(null)
              , i = (0,
            mi.v9)((function(n) {
                return n.user.gameplayRecordingTooltipCount
            }
            ))
              , r = ((0,
            mi.v9)((function(n) {
                return n.user.lastGameplayRecordingTooltipDate
            }
            )),
            (0,
            mi.v9)((function(n) {
                return n.play.isRecording
            }
            )))
              , o = function(t) {
                var r;
                (null === (r = e.current) || void 0 === r ? void 0 : r.contains(t.target)) || n({
                    type: gi.Z.RECORDING_UPDATE,
                    payload: {
                        gameplayRecordingTooltipCount: i + 1,
                        lastGameplayRecordingTooltipDate: (new Date).toDateString()
                    }
                })
            };
            return (0,
            bi.useEffect)((function() {
                return n({
                    type: Oi.Z.UPDATE_IS_RECORDING,
                    payload: {
                        recordActionRef: t
                    }
                }),
                document.body.addEventListener("click", o),
                function() {
                    document.body.removeEventListener("click", o)
                }
            }
            ), []),
            (0,
            Si.Z)() ? (0,
            Fi.tZ)(Ki.aU, {
                className: "record-screen",
                isRecordingWidget: r,
                id: "ng-record-screen",
                ref: t,
                children: (0,
                Fi.tZ)(wd.Z, {})
            }) : (0,
            Fi.tZ)(Fi.HY, {})
        }
          , Ls = function() {
            return (0,
            Fi.tZ)(Ki.aU, {
                className: "record-mic",
                children: (0,
                Fi.tZ)(Zd.Z, {})
            })
        }
          , _s = function(n) {
            var e = n.widget
              , t = (0,
            mi.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            ))
              , i = (0,
            mi.v9)((function(n) {
                return n.imap.initialized
            }
            ))
              , r = (0,
            mi.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            ))
              , o = ui.Z.getState().appPreferences.legacyControls;
            return i || r && !o ? (0,
            Fi.tZ)(Ki.aU, {
                active: t,
                className: "mouse-sensitivity",
                children: (0,
                Fi.tZ)(Ji, {
                    fsWidget: e
                })
            }) : null
        }
          , Fs = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.support.showSupport
            }
            ));
            return (0,
            Fi.tZ)(Ki.aU, {
                id: "ng-support",
                active: n,
                children: (0,
                Fi.tZ)(Di.Z, {
                    type: "support"
                })
            })
        }
          , Us = function() {
            var n = (0,
            mi.v9)((function(n) {
                return n.play.channelHandle
            }
            ));
            return (0,
            Fi.tZ)(Ki.aU, {
                className: "video-portal-action",
                onClick: function() {
                    window.open((0,
                    yi.ZP)("".concat(window.location.origin, "/videos/").concat(n)))
                },
                children: (0,
                Fi.tZ)("img", {
                    src: (0,
                    Ai.j)(Zi),
                    alt: "videos"
                })
            })
        }
          , Ms = function() {
            var n = (0,
            vi.$)().t
              , e = (0,
            bi.useState)(!1)
              , t = e[0]
              , i = e[1];
            return (0,
            Fi.tZ)(Ki.aU, {
                className: "soft-keyboard-action",
                onClick: function() {
                    i(!t),
                    t ? (0,
                    Ii.f)(wi.vK.keyboard.disable) : (0,
                    Ii.f)(wi.vK.keyboard.enable)
                },
                active: t,
                children: (0,
                Fi.tZ)("img", {
                    src: (0,
                    Ai.j)(Pi),
                    alt: n("onScreenKeyboard")
                })
            })
        }
          , Ns = function(n) {
            var e = n.topbarRef
              , t = n.searchIconRef
              , i = n.loginResolved
              , r = void 0 === i || i
              , o = (0,
            mi.v9)((function(n) {
                return n.play.isAdBlockerEnabled
            }
            ))
              , a = (0,
            mi.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , l = (0,
            bi.useRef)(null)
              , c = (0,
            mi.v9)((function(n) {
                return n.gamification.selfDailyRank
            }
            ))
              , d = (0,
            bi.useState)("")
              , s = d[0]
              , p = d[1]
              , u = (0,
            mi.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , f = (0,
            mi.I0)();
            (0,
            bi.useEffect)((function() {
                p(sessionStorage.getItem("isEmbeddedFrame")),
                f({
                    type: Bi.Z.UPDATE_ACTION,
                    payload: {
                        gamificationActionsRef: l
                    }
                });
                var n = 0;
                l.current && (n = l.current.getBoundingClientRect().width);
                var i = null === e || void 0 === e ? void 0 : e.current;
                i && (i.style.paddingRight = "".concat(n + 8, "px"));
                var r = null === t || void 0 === t ? void 0 : t.current;
                r && (r.style.marginRight = "".concat(n + 16, "px"))
            }
            ), [l]);
            return (0,
            bi.useEffect)((function() {
                r && (0,
                Ei.wA)() && Bs(void 0, void 0, void 0, (function() {
                    var n, e;
                    return zs(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, zi.Z.getLeaderboard({}, {})];
                        case 1:
                            return n = t.sent(),
                            (0,
                            Ei.Hg)(n),
                            n.status !== Ti.YR.Success || n.dailyLeaderboard.status === Ti.YR.Success && n.weeklyLeaderboard.status === Ti.YR.Success && n.monthlyLeaderboard.status === Ti.YR.Success ? [3, 3] : [4, zi.Z.getLeaderboard({}, {})];
                        case 2:
                            e = t.sent(),
                            (0,
                            Ei.Hg)(e),
                            t.label = 3;
                        case 3:
                            return setInterval((function() {
                                Bs(void 0, void 0, void 0, (function() {
                                    var n;
                                    return zs(this, (function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return [4, zi.Z.getLeaderboard({}, {})];
                                        case 1:
                                            return n = e.sent(),
                                            (0,
                                            Ei.Hg)(n),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), 3e5),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), [r]),
            s ? (0,
            Fi.tZ)(Fi.HY, {}) : (0,
            Fi.BX)(Ki.v2, {
                ref: l,
                children: [(0,
                Fi.tZ)(xd, {}), !o && (0,
                Ei.wA)() && (0,
                Fi.tZ)(ji.default, {}), (0,
                Ei.wA)() && !u && (0,
                Fi.BX)(Ri.ZP, {
                    onClick: function() {
                        f({
                            type: Bi.Z.TOGGLE_VIEW,
                            payload: {
                                showProfileView: !1,
                                showRobuxView: !1,
                                showLeaderboardView: !0
                            }
                        }),
                        (0,
                        fi.L9)("LeaderboardIconClicked")
                    },
                    children: [(0,
                    Fi.tZ)("img", {
                        src: (0,
                        Ai.j)(ki),
                        width: 24,
                        alt: ""
                    }), (0,
                    Fi.tZ)(Ri.XF, {
                        children: a ? c.rank : "--"
                    })]
                })]
            })
        }
          , Gs = function(n) {
            var e = n.widget
              , t = (0,
            mi.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , i = (0,
            mi.v9)((function(n) {
                return n.play.channelHandle
            }
            ))
              , r = sessionStorage.getItem("isEmbeddedFrame");
            return (0,
            Fi.BX)(Fi.HY, {
                children: [(0,
                Fi.BX)("div", {
                    style: {
                        display: "flex",
                        flexDirection: (0,
                        yi.hu)() ? "column" : "row"
                    },
                    children: [pi.ZP.appInfo.iapLoginPromptEnabled && (0,
                    Fi.tZ)(xi.Z, {}), i && !r && (0,
                    Fi.tZ)(Us, {}), t && (0,
                    Fi.tZ)(Ls, {}), (0,
                    Si.Z)() && (0,
                    Fi.tZ)(Xs, {}), !(0,
                    pi.DJ)() && !r && !(0,
                    Ei.nI)() && (0,
                    Fi.tZ)(Pd.Z, {}), !r && (0,
                    Fi.tZ)(Fs, {}), !(0,
                    yi.hu)() && (0,
                    Fi.BX)(Fi.HY, {
                        children: [(0,
                        Fi.tZ)(_s, {
                            widget: e
                        }), (0,
                        Fi.tZ)(Ds, {}), !(0,
                        pi.DJ)() && (0,
                        Fi.tZ)(Ki.Ol, {
                            id: "ng-sound",
                            children: (0,
                            Fi.tZ)(md.Z, {
                                showSlider: !0
                            })
                        }), (0,
                        Fi.tZ)(Ts, {
                            widget: e
                        })]
                    }), ((0,
                    pi.DJ)() || !(0,
                    yi.hu)()) && (0,
                    Fi.tZ)(Ki.aU, {
                        id: "ng-fs",
                        children: (0,
                        Fi.tZ)(Xi.Z, {})
                    })]
                }), (0,
                yi.hu)() && (0,
                Fi.BX)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [(0,
                    Fi.tZ)(_s, {
                        widget: e
                    }), (0,
                    Fi.tZ)(Ds, {}), (0,
                    Fi.tZ)(Ts, {
                        widget: e
                    }), (0,
                    Fi.tZ)(Ki.Ol, {
                        id: "ng-sound",
                        children: (0,
                        Fi.tZ)(md.Z, {
                            showSlider: !0
                        })
                    }), (0,
                    Fi.tZ)(Ki.aU, {
                        id: "ng-fs",
                        children: (0,
                        Fi.tZ)(Xi.Z, {})
                    })]
                })]
            })
        }
          , Vs = function(n) {
            n.widget;
            var e, t, i = n.isPortrait, r = n.style, o = (n.countryCode,
            n.testDriveUi), a = void 0 !== o && o, l = sessionStorage.getItem("isEmbeddedFrame"), c = (0,
            vi.$)().t;
            return (0,
            Fi.BX)(Ki.zi, {
                isPortrait: i,
                style: r,
                children: [!(0,
                pi.DJ)() && (0,
                Fi.tZ)(yd.Z, {
                    isPortrait: i
                }), !(0,
                pi.DJ)() && !l && !(0,
                Ei.nI)() && (0,
                Fi.tZ)(Pd.Z, {}), !l && !a && (0,
                Fi.tZ)(Fs, {}), (null === (t = null === (e = null === pi.ZP || void 0 === pi.ZP ? void 0 : pi.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.enableSocialIcons) && !i && !a && wi.Yg.map((function(n) {
                    return (0,
                    Fi.tZ)(vd, function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? Rs(Object(t), !0).forEach((function(e) {
                                (0,
                                si.Z)(n, e, t[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Rs(Object(t)).forEach((function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                            }
                            ))
                        }
                        return n
                    }({}, n), n.element)
                }
                )), !i && !(0,
                Ei.tq)() && (0,
                Ei.c6)() && !l && !a && (0,
                Fi.tZ)(js, {}), a && (0,
                Fi.tZ)(Ki.td, {
                    children: c("testDrive")
                })]
            })
        }
          , Ys = function(n) {
            var e = n.widget
              , t = n.isPortrait
              , i = (0,
            mi.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , r = (0,
            mi.v9)((function(n) {
                return n.play.channelHandle
            }
            ))
              , o = sessionStorage.getItem("isEmbeddedFrame");
            return (0,
            Fi.BX)(Ki.zi, {
                isPortrait: t,
                isGameAction: !0,
                children: [(0,
                Fi.BX)(Ki.kC, {
                    isPortrait: t,
                    children: [r && !o && (0,
                    Fi.tZ)(Us, {}), i && (0,
                    Fi.tZ)(Ls, {}), (0,
                    Fi.tZ)(Xs, {}), (0,
                    Fi.tZ)(Ds, {}), (0,
                    Fi.tZ)(_s, {
                        widget: e
                    }), (0,
                    Ei.nI)() && navigator && navigator.maxTouchPoints > 0 && "en" === Ci.Z.resolvedLanguage && (0,
                    Fi.tZ)(Ms, {}), (0,
                    Fi.tZ)(Ts, {
                        widget: e
                    })]
                }), (0,
                Fi.BX)(Ki.kC, {
                    isPortrait: t,
                    children: [pi.ZP.appInfo.iapLoginPromptEnabled && (0,
                    Fi.tZ)(xi.Z, {}), !(0,
                    pi.DJ)() && (0,
                    Fi.tZ)(Ki.Ol, {
                        id: "ng-sound",
                        children: (0,
                        Fi.tZ)(md.Z, {
                            showSlider: !0
                        })
                    }), (0,
                    Fi.tZ)(Ki.aU, {
                        id: "ng-fs",
                        children: (0,
                        Fi.tZ)(Xi.Z, {})
                    })]
                })]
            })
        }
          , Hs = function() {
            return (0,
            Fi.tZ)(Ki.eX, {
                style: {
                    color: "#A198B9"
                },
                children: (0,
                Fi.tZ)(Gs, {
                    widget: !1
                })
            })
        }
          , Qs = Hs
    },
    77360: function(n, e, t) {
        "use strict";
        t.d(e, {
            Co: function() {
                return d
            },
            ug: function() {
                return s
            },
            F9: function() {
                return p
            },
            ed: function() {
                return u
            }
        });
        var i, r, o, a, l = t(50445), c = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, d = l.ZP.div(i || (i = c(["\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(12px);\n  box-sizing: border-box;\n  border-radius: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 12;\n  padding: 8px 20px 0px 20px;\n  position: fixed;\n  top: 5px;\n"], ["\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(12px);\n  box-sizing: border-box;\n  border-radius: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 12;\n  padding: 8px 20px 0px 20px;\n  position: fixed;\n  top: 5px;\n"])), (function(n) {
            return n.theme.colors.backgroundGlass
        }
        ), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), s = l.ZP.p(r || (r = c(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), p = l.ZP.div(o || (o = c(["\n  height: 6px;\n  width: 6px;\n  background-color: #DE5A48;\n  border-radius: 50%;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 2;\n"], ["\n  height: 6px;\n  width: 6px;\n  background-color: #DE5A48;\n  border-radius: 50%;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 2;\n"]))), u = l.ZP.div(a || (a = c(["\n  visibility: collapse;\n  border: 4px solid #DE5A48;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 8;\n  transition: transform 2s, top 2s, width 2s, height 2s, left 2s, visibility 0s;\n  transition-timing-function: cubic-bezier(0, .86, .01, .99);\n"], ["\n  visibility: collapse;\n  border: 4px solid #DE5A48;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 8;\n  transition: transform 2s, top 2s, width 2s, height 2s, left 2s, visibility 0s;\n  transition-timing-function: cubic-bezier(0, .86, .01, .99);\n"])))
    },
    42385: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return b
            }
        });
        var i = t(11720)
          , r = t(25617)
          , o = {
            src: "/play/_next/static/media/micMute.81551a0f.svg",
            height: 20,
            width: 20
        }
          , a = {
            src: "/play/_next/static/media/micUnmute.e4e62bb7.svg",
            height: 20,
            width: 20
        }
          , l = {
            src: "/play/_next/static/media/micBlocked.f838d6ff.svg",
            height: 20,
            width: 20
        }
          , c = t(45024)
          , d = t(66971)
          , s = t(3053)
          , p = t(89598)
          , u = t(77691)
          , f = t(94381)
          , g = t(96788)
          , h = t(97997)
          , x = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , m = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , b = function() {
            var n = (0,
            r.I0)()
              , e = (0,
            r.v9)((function(n) {
                return n.play.recordingUserAudioTrack
            }
            ))
              , t = (0,
            r.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , b = (0,
            r.v9)((function(n) {
                return n.play.recordingAudioDestinationNode
            }
            ))
              , w = (0,
            r.v9)((function(n) {
                return n.play.recordingAudioContext
            }
            ))
              , y = (0,
            r.v9)((function(n) {
                return n.user.micRecordingEnabled
            }
            ))
              , v = (0,
            i.useState)(!(null === e || void 0 === e ? void 0 : e.enabled))
              , Z = v[0]
              , P = v[1]
              , k = (0,
            i.useState)(!1)
              , A = k[0]
              , S = k[1]
              , E = (0,
            i.useState)((0,
            c.j)(a))
              , O = E[0]
              , I = E[1]
              , C = function() {
                return x(void 0, void 0, void 0, (function() {
                    return m(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, navigator.mediaDevices.getUserMedia({
                                audio: !0
                            }).then((function(e) {
                                return x(void 0, void 0, void 0, (function() {
                                    return m(this, (function(t) {
                                        return b && w && new MediaStreamAudioSourceNode(w,{
                                            mediaStream: e
                                        }).connect(b),
                                        n({
                                            type: d.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                recordingUserAudioTrack: e.getAudioTracks()[0]
                                            }
                                        }),
                                        P(!1),
                                        (0,
                                        p.L9)(f.S5, {
                                            element: "VideoRecorderMic",
                                            state: "Enabled"
                                        }),
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            )).catch((function(n) {
                                S(!0)
                            }
                            ))];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            };
            return (0,
            i.useEffect)((function() {
                I(A ? (0,
                c.j)(l) : Z ? (0,
                c.j)(a) : (0,
                c.j)(o))
            }
            ), [A, Z]),
            (0,
            i.useEffect)((function() {
                try {
                    navigator.permissions.query({
                        name: "microphone"
                    }).then((function(n) {
                        "denied" === n.state && S(!0),
                        n.onchange = function() {
                            "denied" === n.state ? S(!0) : (S(!1),
                            P(!0))
                        }
                    }
                    )).catch((function(n) {}
                    ))
                } catch (n) {}
                !A && y && x(void 0, void 0, void 0, (function() {
                    return m(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, C()];
                        case 1:
                            return n.sent(),
                            [2]
                        }
                    }
                    ))
                }
                )),
                (0,
                p.L9)(f.S5, {
                    element: "VideoRecorderMic",
                    state: A || !y ? "Disabled" : "Enabled"
                })
            }
            ), []),
            (0,
            h.tZ)(g.AO, {
                onClick: function() {
                    return x(void 0, void 0, void 0, (function() {
                        return m(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return e ? (e.enabled = !(null === e || void 0 === e ? void 0 : e.enabled),
                                P(!Z),
                                n({
                                    type: s.Z.RECORDING_UPDATE,
                                    payload: {
                                        micRecordingEnabled: e.enabled
                                    }
                                }),
                                (0,
                                p.L9)(f.S5, {
                                    element: "VideoRecorderMic",
                                    state: e.enabled ? "Enabled" : "Disabled"
                                }),
                                [3, 3]) : [3, 1];
                            case 1:
                                return A ? (n({
                                    type: d.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showMicBlockedModal: !0
                                    }
                                }),
                                [2]) : [4, C()];
                            case 2:
                                t.sent(),
                                t.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                },
                isFullscreen: t,
                isAdFree: (0,
                u.Dx)(),
                children: (0,
                h.tZ)("img", {
                    alt: "Record",
                    src: O
                })
            })
        }
    },
    71660: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return S
            }
        });
        var i = t(11720)
          , r = {
            src: "/play/_next/static/media/recorderImg.822cd89f.svg",
            height: 25,
            width: 24
        }
          , o = {
            src: "/play/_next/static/media/recordingBlink.84be0f58.svg",
            height: 7,
            width: 6
        }
          , a = {
            src: "/play/_next/static/media/stopRecording.26f4a0e8.svg",
            height: 7,
            width: 6
        }
          , l = {
            src: "/play/_next/static/media/download.7afc2051.svg",
            height: 11,
            width: 10
        }
          , c = t(45024)
          , d = t(25617)
          , s = t(50912)
          , p = t(66971)
          , u = t(89598)
          , f = t(88557)
          , g = t(77691)
          , h = t(94381)
          , x = t(26544)
          , m = t(56817)
          , b = t(49555)
          , w = t(96788)
          , y = t(61740)
          , v = t(97997)
          , Z = function() {
            return (Z = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }
          , P = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , k = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , A = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var i, r = 0, o = e.length; r < o; r++)
                    !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)),
                    i[r] = e[r]);
            return n.concat(i || Array.prototype.slice.call(e))
        }
          , S = function() {
            var n = (0,
            d.I0)()
              , e = (0,
            d.v9)((function(n) {
                return n.play.isRecording
            }
            ))
              , t = (0,
            d.v9)((function(n) {
                return n.play.recordingMediaRecorder
            }
            ))
              , S = (0,
            d.v9)((function(n) {
                return n.play.recordingMediaStream
            }
            ))
              , E = (0,
            d.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , O = (0,
            d.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , I = (0,
            d.v9)((function(n) {
                return n.play.recordingTimerText
            }
            ))
              , C = (0,
            d.v9)((function(n) {
                return n.play.stopVideoRecording
            }
            ))
              , j = (0,
            d.v9)((function(n) {
                return n.play.isRecordingProcessing
            }
            ))
              , R = (0,
            d.v9)((function(n) {
                return n.play.stopAndDownloadRecording
            }
            ))
              , B = (0,
            i.useState)((0,
            g.Dx)() ? "05:00" : "00:00")
              , z = B[0]
              , T = B[1]
              , D = (0,
            i.useRef)(null)
              , X = (0,
            d.v9)((function(n) {
                return n.play.recordingUploadInProgress
            }
            ))
              , L = (0,
            d.v9)((function(n) {
                return n.play.recordingData
            }
            ))
              , _ = function(e) {
                return function(e) {
                    return P(void 0, void 0, void 0, (function() {
                        var t, i;
                        return k(this, (function(r) {
                            return e.data && e.data.size <= 0 || (t = s.Z.getState().play.recordingData,
                            i = A(A([], t, !0), [e.data], !1),
                            n({
                                type: p.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    recordingData: i
                                }
                            })),
                            [2]
                        }
                        ))
                    }
                    ))
                }(e)
            }
              , F = function() {
                var e, i;
                (0,
                g.Dx)() && ((0,
                m.Qg)(y.J),
                s.Z.dispatch({
                    type: p.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !1
                    }
                }),
                null === (e = null === E || void 0 === E ? void 0 : E.current) || void 0 === e || e.classList.remove("isRecording"),
                (0,
                b.sZ)(),
                (0,
                b.Ul)()),
                n({
                    type: p.Z.UPDATE_IS_RECORDING,
                    payload: {
                        showRecordModal: !0,
                        stopVideoRecording: !1
                    }
                });
                try {
                    null === (i = s.Z.getState().play.recordingUserAudioTrack) || void 0 === i || i.stop(),
                    null === S || void 0 === S || S.getTracks().forEach((function(n) {
                        return n.stop()
                    }
                    )),
                    null === t || void 0 === t || t.stop()
                } catch (r) {}
                (0,
                g.Dx)() ? T("05:00") : T((0,
                f.hu)() ? "00\n00" : "00:00"),
                n({
                    type: p.Z.UPDATE_IS_RECORDING,
                    payload: {
                        isRecording: !1,
                        recordingUserAudioTrack: null
                    }
                })
            }
              , U = function(e) {
                return P(void 0, void 0, void 0, (function() {
                    var t, i, r, o;
                    return k(this, (function(a) {
                        return (t = new MediaStream).addTrack(function(e, t, i) {
                            var r, o = [], a = new AudioContext, l = Math.min(Math.max(0, (null === (r = null === E || void 0 === E ? void 0 : E.current) || void 0 === r ? void 0 : r.volume) || 1), .65);
                            if (o.push({
                                track: e,
                                gain: .2
                            }),
                            o.push({
                                track: t,
                                gain: l
                            }),
                            i && o.push({
                                track: i,
                                gain: 1
                            }),
                            1 === o.length)
                                return o[0].track.getAudioTracks();
                            for (var c = a.createMediaStreamDestination(), d = 0; d < o.length; d += 1)
                                if (o[d].track && o[d].track.getAudioTracks().length > 0) {
                                    var s = a.createMediaStreamSource(o[d].track)
                                      , u = a.createGain();
                                    u.gain.value = o[d].gain,
                                    s.connect(u).connect(c)
                                }
                            return n({
                                type: p.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    recordingAudioDestinationNode: c,
                                    recordingAudioContext: a
                                }
                            }),
                            c.stream.getAudioTracks()
                        }(e, null === (o = null === E || void 0 === E ? void 0 : E.current) || void 0 === o ? void 0 : o.srcObject)[0]),
                        t.addTrack(e.getVideoTracks()[0]),
                        i = {
                            mimeType: (0,
                            g.Hh)().mime
                        },
                        (r = new MediaRecorder(t,i)).ondataavailable = _,
                        r.start(2e3),
                        n({
                            type: p.Z.UPDATE_IS_RECORDING,
                            payload: {
                                isRecording: !0,
                                recordingMediaStream: e,
                                recordingMediaRecorder: r
                            }
                        }),
                        e.getVideoTracks()[0].onended = function() {
                            r.stop(),
                            F();
                            var n = s.Z.getState().play.recordingTimerText.split(":")
                              , e = 2 === n.length ? 60 * parseInt(n[0], 10) + parseInt(n[1], 10) : 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10);
                            (0,
                            u.L9)(h.S5, {
                                element: "VideoRecorder",
                                action: "ScreenShareStopped",
                                duration: (0,
                                g.Dx)() ? 300 - e : e
                            })
                        }
                        ,
                        [2]
                    }
                    ))
                }
                ))
            };
            return (0,
            i.useEffect)((function() {
                if ((0,
                f.hu)() && !O) {
                    var n = I.split(":");
                    ":" === n[0] && n.splice(0, 1),
                    T(n.join("\n"))
                } else
                    T(I)
            }
            ), [I]),
            (0,
            i.useEffect)((function() {
                C && F()
            }
            ), [C]),
            (0,
            i.useEffect)((function() {
                R && F()
            }
            ), [R]),
            (0,
            i.useEffect)((function() {
                if (j)
                    var n = I.split(":")
                      , e = 2 === n.length ? 60 * parseInt(n[0], 10) + parseInt(n[1], 10) : 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10)
                      , t = 0
                      , i = setInterval((function() {
                        D.current && (t += 1,
                        D.current.style.borderImage = "conic-gradient(".concat(x.qm.colors.ascent, " ").concat(3.6 * t, "deg, ").concat(x.qm.colors.white20, " 0deg) 1"),
                        90 === t && clearInterval(i))
                    }
                    ), 2 * (e / 60 + (e / 60 > 5 ? 6 : 1)) * 1e3 / 90)
            }
            ), [j]),
            (0,
            i.useEffect)((function() {
                (0,
                g.Dx)() ? T((0,
                f.hu)() && !O ? "05\n00" : "05:00") : T((0,
                f.hu)() ? "00\n00" : "00:00")
            }
            ), []),
            (0,
            v.tZ)(w.bg, {
                onClick: function() {
                    if (!j) {
                        var t = {
                            element: "VideoRecorder",
                            action: e ? "StopIconClicked" : "StartIconClicked"
                        };
                        if (e) {
                            var i = I.split(":")
                              , r = 2 === i.length ? 60 * parseInt(i[0], 10) + parseInt(i[1], 10) : 60 * parseInt(i[0], 10) * 60 + 60 * parseInt(i[1], 10) + parseInt(i[2], 10);
                            t = Z(Z({}, t), {
                                duration: (0,
                                g.Dx)() ? 300 - r : r
                            })
                        }
                        (0,
                        u.L9)(h.S5, t),
                        e ? F() : L.length || X ? n({
                            type: p.Z.UPDATE_IS_RECORDING,
                            payload: {
                                showRecordModal: !0
                            }
                        }) : P(void 0, void 0, Promise, (function() {
                            return k(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, P(void 0, void 0, void 0, (function() {
                                        return k(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return [4, navigator.mediaDevices.getDisplayMedia({
                                                    video: {
                                                        width: window.innerWidth,
                                                        height: window.innerHeight
                                                    },
                                                    audio: {
                                                        suppressLocalAudioPlayback: !1
                                                    },
                                                    preferCurrentTab: !0
                                                }).then((function(e) {
                                                    return P(void 0, void 0, void 0, (function() {
                                                        var t;
                                                        return k(this, (function(i) {
                                                            switch (i.label) {
                                                            case 0:
                                                                return (0,
                                                                g.Dx)() && (n({
                                                                    type: p.Z.UPDATE_IS_RECORDING,
                                                                    payload: {
                                                                        showRecordingTransition: !0,
                                                                        isRecording: !0
                                                                    }
                                                                }),
                                                                (0,
                                                                g.xF)(),
                                                                s.Z.dispatch({
                                                                    type: p.Z.SET_FULLSCREEN,
                                                                    payload: {
                                                                        isFullscreen: !0
                                                                    }
                                                                }),
                                                                null === (t = null === E || void 0 === E ? void 0 : E.current) || void 0 === t || t.classList.add("isRecording"),
                                                                (0,
                                                                b.sZ)(),
                                                                (0,
                                                                b.Ul)()),
                                                                (0,
                                                                u.L9)(h.S5, {
                                                                    element: "VideoRecorder",
                                                                    action: "ScreenShareAllowed"
                                                                }),
                                                                (0,
                                                                g.Dx)() ? [4, (0,
                                                                g.gw)(3e3)] : [3, 2];
                                                            case 1:
                                                                i.sent(),
                                                                n({
                                                                    type: p.Z.UPDATE_IS_RECORDING,
                                                                    payload: {
                                                                        showRecordingTransition: !1
                                                                    }
                                                                }),
                                                                i.label = 2;
                                                            case 2:
                                                                return U(e),
                                                                [2]
                                                            }
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                )).catch((function() {
                                                    (0,
                                                    u.L9)(h.S5, {
                                                        element: "VideoRecorder",
                                                        action: "ScreenShareCancelled"
                                                    })
                                                }
                                                ))];
                                            case 1:
                                                return e.sent(),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                },
                isFullscreen: O,
                isPortrait: (0,
                f.hu)(),
                isAdFree: (0,
                g.Dx)(),
                children: e ? (0,
                v.BX)(w.BZ, {
                    isFullscreen: O,
                    isPortrait: (0,
                    f.hu)(),
                    children: [(0,
                    v.tZ)(w.AU, {
                        isFullscreen: O,
                        isPortrait: (0,
                        f.hu)(),
                        src: (0,
                        c.j)(o)
                    }), (0,
                    v.tZ)(w.lV, {
                        children: z
                    }), (0,
                    v.tZ)(w.Tw, {
                        children: (0,
                        v.tZ)("img", {
                            alt: "Stop",
                            src: (0,
                            c.j)(a),
                            style: {
                                width: "8px",
                                height: "8px"
                            }
                        })
                    })]
                }) : (0,
                v.BX)(v.HY, {
                    children: [(0,
                    v.tZ)(w.AO, {
                        ref: D,
                        className: "recordIcon",
                        isProcessing: j,
                        isAdFree: (0,
                        g.Dx)(),
                        children: (0,
                        v.tZ)("img", {
                            alt: "Record",
                            src: (0,
                            c.j)(j ? l : r)
                        })
                    }), X && (0,
                    v.tZ)(w.EB, {
                        width: "32px",
                        children: (0,
                        v.tZ)(w.ko, {})
                    })]
                })
            })
        }
    },
    96788: function(n, e, t) {
        "use strict";
        t.d(e, {
            AO: function() {
                return P
            },
            bg: function() {
                return k
            },
            BZ: function() {
                return A
            },
            AU: function() {
                return E
            },
            lV: function() {
                return O
            },
            Tw: function() {
                return I
            },
            $_: function() {
                return C
            },
            CF: function() {
                return z
            },
            B3: function() {
                return T
            },
            EB: function() {
                return D
            },
            ko: function() {
                return X
            }
        });
        var i, r, o, a, l, c, d, s, p, u, f, g, h, x, m, b, w, y = t(50445), v = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Z = (0,
        y.F4)(i || (i = v(["\n  from {\n      width: 0;\n  }\n"], ["\n  from {\n      width: 0;\n  }\n"]))), P = y.ZP.div(r || (r = v(["\n  background: transparent;\n  display: flex;\n  margin: 0px;\n  cursor: pointer;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n  border: ", ";\n  border-radius: 50%;\n  border-image: ", ";\n\n  img {\n\n    ", "\n  }\n"], ["\n  background: transparent;\n  display: flex;\n  margin: 0px;\n  cursor: pointer;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n  border: ", ";\n  border-radius: 50%;\n  border-image: ", ";\n\n  img {\n\n    ", "\n  }\n"])), (function(n) {
            return n.isFullscreen ? "absolute" : ""
        }
        ), (function(n) {
            return n.isAdFree ? "" : "12px"
        }
        ), (function(n) {
            return n.isAdFree ? "24px" : ""
        }
        ), (function(n) {
            return n.isAdFree ? "100px" : "94px"
        }
        ), (function(n) {
            return n.isFullscreen ? "22px" : "calc(var(--vw, 1vw) * 1.5)"
        }
        ), (function(n) {
            return n.isFullscreen ? "22px" : "calc(var(--vw, 1vw) * 1.5)"
        }
        ), (function(n) {
            return n.isProcessing ? "2px solid" : ""
        }
        ), (function(n) {
            var e = n.isProcessing
              , t = n.theme;
            return e ? "conic-gradient(".concat(t.colors.ascent, " 3.6deg, ").concat(t.colors.white20, " 0deg) 1") : ""
        }
        ), (function(n) {
            return n.isProcessing && "\n      width: 10px;\n    "
        }
        )), k = y.ZP.div(o || (o = v(["\n  align-items: center;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  justify-content: center;\n"], ["\n  align-items: center;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  justify-content: center;\n"])), (function(n) {
            return n.isFullscreen ? "absolute" : ""
        }
        ), (function(n) {
            return n.isAdFree ? "" : "12px"
        }
        ), (function(n) {
            return n.isAdFree ? "24px" : ""
        }
        ), (function(n) {
            return n.isAdFree ? "32px" : "24px"
        }
        ), (function(n) {
            return n.isFullscreen ? "37px" : ""
        }
        )), A = y.ZP.div(a || (a = v(["\n  display: flex;\n  flex-direction: ", ";\n  padding: 0px;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #F33621;\n  border-radius: ", ";\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  padding: 0px;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #F33621;\n  border-radius: ", ";\n"])), (function(n) {
            var e = n.isPortrait
              , t = n.isFullscreen;
            return e && !t ? "column" : "row"
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), S = (0,
        y.F4)(l || (l = v(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))), E = y.ZP.img(c || (c = v(["\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-direction: alternate;\n  width: 8px;\n  height: 8px;\n  margin: ", ";\n"], ["\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-direction: alternate;\n  width: 8px;\n  height: 8px;\n  margin: ", ";\n"])), S, (function(n) {
            var e = n.isPortrait
              , t = n.isFullscreen;
            return e && !t ? "6px 6px 0px 6px" : "6px 0px 6px 6px"
        }
        )), O = y.ZP.p(d || (d = v(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  white-space: pre-line;\n"], ["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  white-space: pre-line;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), I = y.ZP.div(s || (s = v(["\n  width: 20px;\n  height: 20px;\n  background: #F3362133;\n  border-radius: 0px 4px 4px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 20px;\n  height: 20px;\n  background: #F3362133;\n  border-radius: 0px 4px 4px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))), C = (y.ZP.div(p || (p = v(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 12px 16px;\n  gap: 4px;\n\n  width: 379px;\n  height: 52px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 12px 16px;\n  gap: 4px;\n\n  width: 379px;\n  height: 52px;\n"]))),
        y.ZP.div(u || (u = v(["\n  height: 72px;\n  background: ", ";\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"], ["\n  height: 72px;\n  background: ", ";\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"])), (function(n) {
            return n.theme.colors.black70
        }
        ))), j = (0,
        y.F4)(f || (f = v(["\n  0% {\n    top: 100%;\n    left: 100%;\n    opacity: 1;\n  }\n  12.5% {\n    top: 0;\n    left: 0;\n    opacity: 0.85;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    top: 100%;\n    left: 100%;\n    opacity: 1;\n  }\n  12.5% {\n    top: 0;\n    left: 0;\n    opacity: 0.85;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 0;\n  }\n"]))), R = (0,
        y.F4)(g || (g = v(["\n  10% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n    top: 21.43vh;\n  }\n  70% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 100%);\n    opacity: 0;\n  }\n"], ["\n  10% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n    top: 21.43vh;\n  }\n  70% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 100%);\n    opacity: 0;\n  }\n"]))), B = (0,
        y.F4)(h || (h = v(["\n  10% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  70% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 200%);\n    opacity: 0;\n  }\n"], ["\n  10% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  70% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 200%);\n    opacity: 0;\n  }\n"]))), z = y.ZP.video(x || (x = v(["\n  background: ", ";\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 72px);\n  object-fit: fill;\n  top: 100%;\n  left: 100%;\n  z-index: 1;\n  opacity: 1;\n\n  &.slideIn {\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  background: ", ";\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 72px);\n  object-fit: fill;\n  top: 100%;\n  left: 100%;\n  z-index: 1;\n  opacity: 1;\n\n  &.slideIn {\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.theme.colors.black20
        }
        ), j), T = y.ZP.div(m || (m = v(["\n  z-index: 1;\n\n  >h1 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n    text-align: center;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 32px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 24px;\n    }\n  }\n  >h3 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 18px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 14px;\n    }\n  }\n"], ["\n  z-index: 1;\n\n  >h1 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n    text-align: center;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 32px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 24px;\n    }\n  }\n  >h3 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 18px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 14px;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), R, (function(n) {
            return n.theme.colors.white
        }
        ), B), D = y.ZP.div(b || (b = v(["\n    width: ", ";\n    height: 4px;\n    margin-top: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 2px;\n"], ["\n    width: ", ";\n    height: 4px;\n    margin-top: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 2px;\n"])), (function(n) {
            var e = n.width;
            return "".concat(e)
        }
        )), X = y.ZP.div(w || (w = v(["\n    background: ", ";\n    border-radius: 2px;\n    width: 85%;\n    display: block;\n    height: 100%;\n    animation: ", " 5s ease-in 1;\n"], ["\n    background: ", ";\n    border-radius: 2px;\n    width: 85%;\n    display: block;\n    height: 100%;\n    animation: ", " 5s ease-in 1;\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        ), Z)
    },
    44141: function(n, e, t) {
        "use strict";
        t.d(e, {
            eX: function() {
                return y
            },
            aU: function() {
                return v
            },
            Ol: function() {
                return Z
            },
            zi: function() {
                return P
            },
            kC: function() {
                return k
            },
            td: function() {
                return A
            },
            v2: function() {
                return S
            }
        });
        var i, r, o, a, l, c, d, s, p, u, f, g, h, x, m = t(50445), b = t(94564), w = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, y = m.ZP.div(i || (i = w(["\n  display: flex;\n  align-items: center;\n  z-index: 2;\n  padding: 0;\n  margin: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  z-index: 2;\n  padding: 0;\n  margin: 0;\n"]))), v = m.ZP.button(r || (r = w(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  border-radius: ", ";\n  outline: none;\n  color: inherit;\n  background: ", ";\n  border: 0;\n  padding: 8px;\n  justify-content: center;\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  i {\n    font-size: 24px;\n  }\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  border-radius: ", ";\n  outline: none;\n  color: inherit;\n  background: ", ";\n  border: 0;\n  padding: 8px;\n  justify-content: center;\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  i {\n    font-size: 24px;\n  }\n\n  ", "\n"])), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            var e = n.theme;
            return n.active ? e.colors.ascent : "none"
        }
        ), (function(n) {
            var e, t = n.theme;
            return n.active ? "" : null === (e = t.colors) || void 0 === e ? void 0 : e.white20
        }
        ), (function(n) {
            var e = n.active
              , t = n.theme;
            return e ? "&:after{\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      background: ".concat(t.colors.ascent, ";\n      z-index: -1;\n      border-radius: 8px;\n      bottom: 0;\n    }") : ""
        }
        ), (function(n) {
            return n.isMobile && "\n    padding: 0px;\n  "
        }
        )), Z = (m.ZP.div(o || (o = w(["\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(\n    180deg,\n    rgba(11, 2, 35, 0.24) 0%,\n    rgba(11, 2, 35, 0.16) 100%),\n    rgba(255, 255, 255, 0.15\n  );\n  backdrop-filter: blur(24px);\n  border: 1px solid hsla(0, 0%, 100%, .2);\n  border-radius: 12px;\n  padding: 0 10px;\n  margin: 0;\n\n  > ", " > span {\n    filter: brightness(100);\n  }\n  &:hover {\n    background: linear-gradient(rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.30);\n  }\n  li:hover {\n    background: hsla(0,0%,100%,.1);\n  }\n  .dragging & {\n    pointer-events: none;\n  }\n\n  &.fixed {\n    width: fit-content;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(\n    180deg,\n    rgba(11, 2, 35, 0.24) 0%,\n    rgba(11, 2, 35, 0.16) 100%),\n    rgba(255, 255, 255, 0.15\n  );\n  backdrop-filter: blur(24px);\n  border: 1px solid hsla(0, 0%, 100%, .2);\n  border-radius: 12px;\n  padding: 0 10px;\n  margin: 0;\n\n  > ", " > span {\n    filter: brightness(100);\n  }\n  &:hover {\n    background: linear-gradient(rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.30);\n  }\n  li:hover {\n    background: hsla(0,0%,100%,.1);\n  }\n  .dragging & {\n    pointer-events: none;\n  }\n\n  &.fixed {\n    width: fit-content;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n"])), v),
        m.ZP.ul(c || (c = w(["\n  flex-direction: column;\n  display: block;\n  padding: 8px;\n  transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n  border-radius: 8px 8px 100px 100px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n\n  ", "\n\n  ", "\n"], ["\n  flex-direction: column;\n  display: block;\n  padding: 8px;\n  transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n  border-radius: 8px 8px 100px 100px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n\n  ", "\n\n  ", "\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black80
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white20
        }
        ), (function(n) {
            return "show" === (null === n || void 0 === n ? void 0 : n.display) && (0,
            m.iv)(a || (a = w(["\n    pointer-events: all\n  "], ["\n    pointer-events: all\n  "])))
        }
        ), (function(n) {
            return "hide" === (null === n || void 0 === n ? void 0 : n.display) && (0,
            m.iv)(l || (l = w(["\n    gap: 16px;\n    border: ", ";\n  "], ["\n    gap: 16px;\n    border: ", ";\n  "])), (function(n) {
                var e;
                return null === (e = n.theme.border) || void 0 === e ? void 0 : e.base
            }
            ))
        }
        )),
        (0,
        m.ZP)(v)(d || (d = w(['\n  cursor: pointer;\n  &:hover div {\n    display: flex;\n  }\n  &:hover::before {\n    content: "";\n    background: ', ";\n    height: 200px;\n    @-moz-document url-prefix() {\n      height: 230px;\n    }\n    position: absolute;\n    z-index: -1;\n    width: 46px;\n    top: -1px;\n    left: -6px;\n    border-radius: ", ";\n  }\n}"], ['\n  cursor: pointer;\n  &:hover div {\n    display: flex;\n  }\n  &:hover::before {\n    content: "";\n    background: ', ";\n    height: 200px;\n    @-moz-document url-prefix() {\n      height: 230px;\n    }\n    position: absolute;\n    z-index: -1;\n    width: 46px;\n    top: -1px;\n    left: -6px;\n    border-radius: ", ";\n  }\n}"])), (function(n) {
            return n.theme.colors.base600
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ))), P = (m.ZP.div(s || (s = w(["\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 256px;\n  min-width: 160px;\n  width: max-content;\n  position: absolute;\n  transform: ", ";\n  top: ", ";\n  left: ", ";\n  right: ", ";\n  bottom: ", ";\n  color: ", ';\n  background: #62676A;\n  border-radius: 12px;\n  text-align: left;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n\n  &:after {\n    content: " ";\n    position: absolute;\n    transform: ', ";\n    left: ", ";\n    bottom: ", ";\n    right: ", ";\n    width: 0;\n    height: 0;\n    border-top: 9px solid ", ";\n    border-bottom: 9px solid transparent;\n    border-left: 9px solid ", ";\n    border-right: 9px solid transparent;\n    z-index: 2;\n    transition: border-color 0.2s ease;\n    clip-path: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 256px;\n  min-width: 160px;\n  width: max-content;\n  position: absolute;\n  transform: ", ";\n  top: ", ";\n  left: ", ";\n  right: ", ";\n  bottom: ", ";\n  color: ", ';\n  background: #62676A;\n  border-radius: 12px;\n  text-align: left;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n\n  &:after {\n    content: " ";\n    position: absolute;\n    transform: ', ";\n    left: ", ";\n    bottom: ", ";\n    right: ", ";\n    width: 0;\n    height: 0;\n    border-top: 9px solid ", ";\n    border-bottom: 9px solid transparent;\n    border-left: 9px solid ", ";\n    border-right: 9px solid transparent;\n    z-index: 2;\n    transition: border-color 0.2s ease;\n    clip-path: ", ";\n  }\n"])), (function(n) {
            var e = n.isPortrait
              , t = n.isH5Game;
            return e ? "none" : t ? "translateY(-100%)" : "translate(-50%, -100%)"
        }
        ), (function(n) {
            return n.isPortrait ? "auto" : "-24px"
        }
        ), (function(n) {
            var e = n.isPortrait
              , t = n.isH5Game;
            return e || t ? "auto" : "50%"
        }
        ), (function(n) {
            var e = n.isPortrait
              , t = n.isH5Game;
            return e ? "58px" : t ? "0" : "auto"
        }
        ), (function(n) {
            return n.isPortrait ? "-6px" : "auto"
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.isPortrait ? "translateX(99%)" : "translateX(-50%)"
        }
        ), (function(n) {
            var e = n.isPortrait
              , t = n.isH5Game;
            return e || t ? "auto" : "50%"
        }
        ), (function(n) {
            return n.isPortrait ? "15px" : "-18px"
        }
        ), (function(n) {
            var e = n.isPortrait
              , t = n.isH5Game;
            return e || t ? "0" : "auto"
        }
        ), (function(n) {
            return n.isPortrait ? "transparent" : "#62676A"
        }
        ), (function(n) {
            return n.isPortrait ? "#62676A" : "transparent"
        }
        ), (function(n) {
            return n.isPortrait ? "polygon(0% 0%, 50% 50%, 0% 100%)" : "polygon(0% 0%, 100% 0%, 50% 50%)"
        }
        )),
        (0,
        m.ZP)(b.lU)(p || (p = w(["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"]))),
        m.ZP.div(u || (u = w(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n\n  ", "\n"])), (function(n) {
            var e = n.isPortrait
              , t = n.isGameAction;
            return e && "\n    flex-direction: column-reverse;\n    ".concat(t ? "justify-content: space-between;" : "", "\n  ")
        }
        ))), k = m.ZP.div(g || (g = w(["\n  display: flex;\n  gap: 6px;\n  ", "\n"], ["\n  display: flex;\n  gap: 6px;\n  ", "\n"])), (function(n) {
            return n.isPortrait && (0,
            m.iv)(f || (f = w(["\n    flex-direction: column;\n    &:last-child {\n      flex-direction: column-reverse;\n    }\n  "], ["\n    flex-direction: column;\n    &:last-child {\n      flex-direction: column-reverse;\n    }\n  "])))
        }
        )), A = (0,
        m.ZP)(b.IS).attrs({
            as: "span"
        })(h || (h = w(["\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 3px;\n  background: ", ";\n  color: ", ";\n  align-self: center;\n  margin-left: 8px;\n  letter-spacing: 1px;\n"], ["\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 3px;\n  background: ", ";\n  color: ", ";\n  align-self: center;\n  margin-left: 8px;\n  letter-spacing: 1px;\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), S = m.ZP.div(x || (x = w(["\n  display: flex;\n  height: 40px;\n  padding-right: 0px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 120px;\n  margin-right: 4px;\n  align-self: center;\n  cursor: pointer;\n  position absolute;\n  top: 12px;\n  right: 20px;\n  z-index: 100;\n"], ["\n  display: flex;\n  height: 40px;\n  padding-right: 0px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 120px;\n  margin-right: 4px;\n  align-self: center;\n  cursor: pointer;\n  position absolute;\n  top: 12px;\n  right: 20px;\n  z-index: 100;\n"])))
    },
    25186: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return A
            }
        });
        var i, r, o = t(11720), a = t(25617), l = t(23279), c = t.n(l), d = t(50912), s = t(86296), p = t(26793), u = t(94381), f = t(74803), g = t(59930), h = t(66971), x = t(26544), m = t(95509), b = t(50445), w = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, y = b.ZP.div(i || (i = w(["\n    display: none;\n    position: absolute;\n    top: 97px;\n    right: -60px;\n    @-moz-document url-prefix() {\n        right: -76px;\n        top: 110px;\n    }\n    z-index: 1;\n    padding: 12px;\n    transform: rotate(-90deg);\n"], ["\n    display: none;\n    position: absolute;\n    top: 97px;\n    right: -60px;\n    @-moz-document url-prefix() {\n        right: -76px;\n        top: 110px;\n    }\n    z-index: 1;\n    padding: 12px;\n    transform: rotate(-90deg);\n"]))), v = b.ZP.input(r || (r = w(["\n    accent-color:  ", ";\n    height: 3px;\n    background: ", ";\n    cursor: pointer;\n    width: 128px;\n    outline: none;\n    appearance: none;\n    -webkit-appearance: none;\n\n    &::-webkit-slider-thumb {\n      appearance: none;\n      -webkit-appearance: none;\n      border: none;\n      height: 16px;\n      width: 16px;\n      border-radius: 50%;\n      background: ", ";\n      margin-top: 0px;\n    }\n\n    &::-moz-range-thumb {\n        appearance: none;\n        -moz-appearance: none;\n        border: none;\n        height: 16px;\n        width: 16px;\n        border-radius: 50%;\n        background: ", ";\n        margin-top: 0px;\n      }\n"], ["\n    accent-color:  ", ";\n    height: 3px;\n    background: ", ";\n    cursor: pointer;\n    width: 128px;\n    outline: none;\n    appearance: none;\n    -webkit-appearance: none;\n\n    &::-webkit-slider-thumb {\n      appearance: none;\n      -webkit-appearance: none;\n      border: none;\n      height: 16px;\n      width: 16px;\n      border-radius: 50%;\n      background: ", ";\n      margin-top: 0px;\n    }\n\n    &::-moz-range-thumb {\n        appearance: none;\n        -moz-appearance: none;\n        border: none;\n        height: 16px;\n        width: 16px;\n        border-radius: 50%;\n        background: ", ";\n        margin-top: 0px;\n      }\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            var e = n.theme
              , t = n.value;
            return "linear-gradient(to right,  0%, ".concat(e.colors.ascent, " ").concat(t, "%,         ").concat(e.colors.white, " ").concat(t, "%, ").concat(e.colors.white, " 100%)")
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        )), Z = t(97997), P = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }, k = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, A = function(n) {
            var e = n.showSlider
              , t = (0,
            p.$)().t
              , i = (0,
            o.useRef)(null)
              , r = (0,
            a.v9)((function(n) {
                return n.appPreferences.volume
            }
            ))
              , l = (0,
            a.v9)((function(n) {
                return n.play.muted
            }
            ))
              , b = (0,
            a.I0)();
            (0,
            o.useEffect)((function() {
                var n = l ? "0" : (10 * r).toString();
                i.current && (i.current.value = n,
                i.current.style.background = "linear-gradient(to right, ".concat(x.qm.colors.ascent, " 0%,         ").concat(x.qm.colors.ascent, " ").concat(10 * parseInt(n, 10), "%, ").concat(x.qm.colors.white, " ").concat(10 * parseInt(n, 10), "%,         ").concat(x.qm.colors.white, " 100%)"))
            }
            ), [r, l]);
            return (0,
            Z.BX)(Z.HY, {
                children: [(0,
                Z.tZ)(g.Z, {
                    id: "ng-vol",
                    alt: t(l ? "mutedSoundIcon" : "soundIcon"),
                    onClick: function() {
                        return P(void 0, void 0, void 0, (function() {
                            var n, t, i;
                            return k(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return l ? e ? [3, 1] : (n = d.Z.getState(),
                                    (t = n.play.videoRef) && t.current && (t.current.muted = !1),
                                    i = n.appPreferences.volume,
                                    b((0,
                                    m.i)({
                                        volume: i
                                    })),
                                    d.Z.dispatch({
                                        type: h.Z.MUTE,
                                        payload: {
                                            muted: !1
                                        }
                                    }),
                                    (0,
                                    f.f)(u.vK.audio.unmute),
                                    [3, 3]) : [3, 4];
                                case 1:
                                    return [4, (0,
                                    s.ZP)()];
                                case 2:
                                    r.sent(),
                                    r.label = 3;
                                case 3:
                                    return [3, 5];
                                case 4:
                                    (0,
                                    s.LR)(),
                                    r.label = 5;
                                case 5:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    },
                    name: l ? "mute-icon" : "sound-icon"
                }), e && (0,
                Z.tZ)(y, {
                    id: "volume-slider",
                    children: (0,
                    Z.tZ)(v, {
                        onChange: c()((function(n) {
                            if (i.current) {
                                i.current.value = n.target.value;
                                var e = parseInt(n.target.value, 10)
                                  , t = e / 10
                                  , r = e < 1;
                                !r && l && (0,
                                f.f)(u.vK.audio.unmute),
                                r && !l && (0,
                                f.f)(u.vK.audio.mute),
                                b({
                                    type: h.Z.MUTE,
                                    payload: {
                                        muted: r
                                    }
                                }),
                                b((0,
                                m.i)({
                                    volume: t
                                }))
                            }
                        }
                        ), 250),
                        onInput: function(n) {
                            if (i.current) {
                                i.current.value = n.target.value;
                                var e = 10 * parseInt(n.target.value, 10);
                                i.current.style.background = "linear-gradient(to right, ".concat(x.qm.colors.ascent, " 0%,         ").concat(x.qm.colors.ascent, " ").concat(e, "%, ").concat(x.qm.colors.white, " ").concat(e, "%, ").concat(x.qm.colors.white, " 100%)")
                            }
                        },
                        ref: i,
                        type: "range",
                        min: 0,
                        max: 10,
                        id: "ng-vol"
                    })
                })]
            })
        }
    },
    12812: function(n, e, t) {
        "use strict";
        var i = t(11720)
          , r = t(97997);
        e.Z = function(n) {
            var e = n.initialRender
              , t = void 0 !== e && e
              , o = n.toggle
              , a = n.children
              , l = n.enteringDelay
              , c = void 0 === l ? 0 : l
              , d = n.exitingDelay
              , s = void 0 === d ? 0 : d
              , p = n.exitingCallBack
              , u = void 0 === p ? function() {}
            : p
              , f = (0,
            i.useState)(t)
              , g = f[0]
              , h = f[1]
              , x = (0,
            i.useRef)(-1)
              , m = (0,
            i.useRef)(-1);
            return (0,
            i.useEffect)((function() {
                window.clearTimeout(x.current),
                window.clearTimeout(m.current),
                o && c ? x.current = window.setTimeout((function() {
                    return h(o)
                }
                ), 1e3 * c) : !o && s ? m.current = window.setTimeout((function() {
                    h(o),
                    u()
                }
                ), 1e3 * s) : (h(o),
                o || u())
            }
            ), [c, s, o]),
            g ? (0,
            r.tZ)(r.HY, {
                children: a
            }) : null
        }
    },
    66749: function(n, e, t) {
        "use strict";
        var i = t(26793)
          , r = t(17744)
          , o = t(97997);
        e.Z = function(n) {
            var e = n.user
              , t = n.click
              , a = n.isLoggedIn
              , l = n.size
              , c = void 0 === l ? 40 : l
              , d = n.src
              , s = void 0 === d ? "" : d
              , p = n.id
              , u = void 0 === p ? "" : p
              , f = (null === e || void 0 === e ? void 0 : e.avatar) || ""
              , g = (0,
            i.$)().t;
            return (0,
            o.tZ)(r.t, {
                bgImg: !0,
                onClick: t,
                size: c,
                children: a && f && (0,
                o.tZ)("img", {
                    alt: g("profilePic"),
                    src: "" === s ? f : s,
                    id: u,
                    width: c,
                    height: c
                })
            })
        }
    },
    17744: function(n, e, t) {
        "use strict";
        t.d(e, {
            S1: function() {
                return s
            },
            t: function() {
                return d
            }
        });
        var i, r, o = t(78294), a = t(50445), l = {
            src: "/play/_next/static/media/default-profile.af9e1b7d.svg",
            height: 40,
            width: 40
        }, c = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, d = a.ZP.div(i || (i = c(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  aspect-ratio: 1;\n  &:before {\n    content: '';\n    background-image: ", ";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: ", ";\n    height: ", ";\n    color: ", ";\n    font-size: 16px;\n    z-index: -1;\n  }\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  aspect-ratio: 1;\n  &:before {\n    content: '';\n    background-image: ", ";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: ", ";\n    height: ", ";\n    color: ", ";\n    font-size: 16px;\n    z-index: -1;\n  }\n  img {\n    border-radius: 50%;\n  }\n"])), (function(n) {
            var e = n.size;
            return "".concat(e, "px")
        }
        ), (function(n) {
            var e = n.size;
            return "".concat(e, "px")
        }
        ), (function(n) {
            return n.bgImg && "url('".concat(o.ZP.prefix).concat((null === l || void 0 === l ? void 0 : l.src) || "", "')")
        }
        ), (function(n) {
            var e = n.size;
            return "".concat(e, "px")
        }
        ), (function(n) {
            var e = n.size;
            return "".concat(e, "px")
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), s = a.ZP.div(r || (r = c(["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 50%;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  ", "\n\n  ", "\n\n"], ["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 50%;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  ", "\n\n  ", "\n\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white40
        }
        ), (function(n) {
            return n.isLoggedIn && "\n    width: 42px;\n    height: 42px;\n  "
        }
        ), (function(n) {
            return !n.isLoggedIn && "\n    div:nth-child(1) {\n      transform: translate(-1px, -1px);\n    }\n  "
        }
        ))
    },
    91469: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return p
            }
        });
        var i, r = t(92809), o = (t(11720),
        t(26793)), a = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, l = t(50445).ZP.div(i || (i = a(["\n  ", "\n"], ["\n  ", "\n"])), (function(n) {
            var e = n.theme;
            return "\n    color: ".concat(e.colors.white60, ";\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    a {\n      color: ").concat(e.colors.white60, ";\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 150%;\n    }\n  ")
        }
        )), c = t(97997);
        function d(n, e) {
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
        function s(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(t), !0).forEach((function(e) {
                    (0,
                    r.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var p = function(n) {
            var e = (0,
            o.$)().t;
            return (0,
            c.BX)(l, s(s({}, n), {}, {
                children: [e("disclaimer"), " ", (0,
                c.tZ)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://now.gg/terms-and-privacy.html#terms",
                    children: e("termsOfUse")
                }), " ".concat(e("and"), " "), (0,
                c.tZ)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://now.gg/terms-and-privacy.html#privacy",
                    children: e("privacyPolicy")
                }), ", ".concat(e("including"), " "), (0,
                c.tZ)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://now.gg/terms-and-privacy.html#cookie-policy",
                    children: e("cookieUse")
                })]
            }))
        }
    },
    29871: function(n, e, t) {
        "use strict";
        var i = t(92809)
          , r = t(11720)
          , o = t(25617)
          , a = t(23279)
          , l = t.n(a)
          , c = t(22012)
          , d = t(59930)
          , s = t(12812)
          , p = t(68472)
          , u = t(97997);
        function f(n, e) {
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
        function g(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? f(Object(t), !0).forEach((function(e) {
                    (0,
                    i.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var h = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(n); r < i.length; r++)
                    e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
            }
            return t
        };
        e.Z = function(n) {
            var e = n.children
              , t = n.toggle
              , i = void 0 === t || t
              , a = n.onClose
              , f = h(n, ["children", "toggle", "onClose"])
              , x = (0,
            o.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , m = (0,
            r.useState)({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            })
              , b = m[0]
              , w = m[1]
              , y = ((0,
            o.v9)((function(n) {
                return n.play.orientation
            }
            )),
            function() {
                var n, e = null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                return {
                    top: (null === e || void 0 === e ? void 0 : e.top) || 0,
                    right: (null === e || void 0 === e ? void 0 : e.right) || 0,
                    bottom: (null === e || void 0 === e ? void 0 : e.bottom) || 0,
                    left: (null === e || void 0 === e ? void 0 : e.left) || 0,
                    width: (null === e || void 0 === e ? void 0 : e.width) || window.innerWidth,
                    height: (null === e || void 0 === e ? void 0 : e.height) || window.innerHeight
                }
            }
            );
            return (0,
            r.useEffect)((function() {
                var n = l()((function() {
                    w(y())
                }
                ), 250);
                return window.addEventListener("resizeDone", n),
                function() {
                    window.removeEventListener("resizeDone", n)
                }
            }
            ), []),
            (0,
            r.useEffect)((function() {
                w(y())
            }
            ), [y, x]),
            r.default.createPortal((0,
            u.tZ)(s.Z, {
                toggle: i,
                exitingDelay: .6,
                children: (0,
                u.tZ)(p.Z, g(g({}, b), {}, {
                    toggle: i,
                    style: {
                        "--overlay-width": Math.max(400, b.height, b.width)
                    },
                    children: (0,
                    u.BX)(c.Z, g(g({}, f), {}, {
                        children: [e, a && (0,
                        u.tZ)(p.T, {
                            onClick: a,
                            children: (0,
                            u.tZ)(d.Z, {
                                name: "cross-thin",
                                size: 24
                            })
                        })]
                    }))
                }))
            }), document.body)
        }
    },
    68472: function(n, e, t) {
        "use strict";
        t.d(e, {
            T: function() {
                return g
            }
        });
        var i, r, o, a, l, c, d = t(50445), s = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, p = (0,
        d.F4)(i || (i = s(["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"]))), u = (0,
        d.F4)(r || (r = s(["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"]))), f = d.ZP.div(l || (l = s(["\n  .modal-overlay {\n    z-index: 2;\n    top: ", "px;\n    right: ", "px;\n    bottom: ", "px;\n    left: ", "px;\n    width: ", "px;\n    height: ", "px;\n   \n    ", "\n  }\n"], ["\n  .modal-overlay {\n    z-index: 2;\n    top: ", "px;\n    right: ", "px;\n    bottom: ", "px;\n    left: ", "px;\n    width: ", "px;\n    height: ", "px;\n   \n    ", "\n  }\n"])), (function(n) {
            return n.top
        }
        ), (function(n) {
            return n.right
        }
        ), (function(n) {
            return n.bottom
        }
        ), (function(n) {
            return n.left
        }
        ), (function(n) {
            return n.width
        }
        ), (function(n) {
            return n.height
        }
        ), (function(n) {
            return n.toggle ? (0,
            d.iv)(o || (o = s(["\n      animation: ", " 0.6s ease-out;\n    "], ["\n      animation: ", " 0.6s ease-out;\n    "])), p) : (0,
            d.iv)(a || (a = s(["\n      animation: ", " 0.6s ease-out;\n    "], ["\n      animation: ", " 0.6s ease-out;\n    "])), u)
        }
        )), g = d.ZP.span(c || (c = s(["\n  display: inline-block;\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  cursor: pointer;\n  color: ", ";\n"], ["\n  display: inline-block;\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  cursor: pointer;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white80
        }
        ));
        e.Z = f
    },
    60925: function(n, e, t) {
        "use strict";
        t.d(e, {
            E$: function() {
                return p
            },
            dl: function() {
                return u
            },
            Xz: function() {
                return f
            },
            YV: function() {
                return g
            },
            OL: function() {
                return h
            }
        });
        var i, r, o, a, l, c = t(94564), d = t(50445), s = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, p = d.ZP.div(i || (i = s(["\n    display : flex;\n    border-radius: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.30);\n    background: rgba(0, 0, 0, 0.50);\n    backdrop-filter: blur(12px);\n    width: ", ";\n    flex-direction:column;\n    left: ", ";\n    top:", ";\n    position: ", ";\n    transform: ", ";\n\n     .caret{\n        border: solid rgba(255,255,255,0.3);\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: 3px;\n        transform: rotate(-45deg);\n        -webkit-transform: rotate(-45deg);\n        margin-left: -5px;\n    }\n\n    .edit-icon {\n        cursor:pointer;\n    }\n\n\n      @media only screen and (max-width: 1240px) and (orientation: portrait) {\n        width: 100%;\n      }\n"], ["\n    display : flex;\n    border-radius: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.30);\n    background: rgba(0, 0, 0, 0.50);\n    backdrop-filter: blur(12px);\n    width: ", ";\n    flex-direction:column;\n    left: ", ";\n    top:", ";\n    position: ", ";\n    transform: ", ";\n\n     .caret{\n        border: solid rgba(255,255,255,0.3);\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: 3px;\n        transform: rotate(-45deg);\n        -webkit-transform: rotate(-45deg);\n        margin-left: -5px;\n    }\n\n    .edit-icon {\n        cursor:pointer;\n    }\n\n\n      @media only screen and (max-width: 1240px) and (orientation: portrait) {\n        width: 100%;\n      }\n"])), (function(n) {
            return n.isVideoPage ? "70%" : "80%"
        }
        ), (function(n) {
            return n.isVideoPage ? "50%" : ""
        }
        ), (function(n) {
            return n.isVideoPage ? "100px" : ""
        }
        ), (function(n) {
            return n.isVideoPage ? "relative" : ""
        }
        ), (function(n) {
            return n.isVideoPage ? "translateX(-50%)" : ""
        }
        )), u = d.ZP.div(r || (r = s(["\n    display : flex;\n    padding: 12px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n"], ["\n    display : flex;\n    padding: 12px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n"]))), f = d.ZP.div(o || (o = s(["\n    display : flex;\n    padding: 16px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n"], ["\n    display : flex;\n    padding: 16px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n"]))), g = d.ZP.div(a || (a = s(["\n        color: ", ";\n        background: ", ";\n        position: absolute;\n        font-size: 10px;\n        padding: 4px 6px;\n        gap: 4px;\n        right: 0;\n        bottom: 8%;\n        transform: translateX(-50%);\n        border: 1px solid ", ";\n        border-radius: 4px;\n        z-index:10;\n"], ["\n        color: ", ";\n        background: ", ";\n        position: absolute;\n        font-size: 10px;\n        padding: 4px 6px;\n        gap: 4px;\n        right: 0;\n        bottom: 8%;\n        transform: translateX(-50%);\n        border: 1px solid ", ";\n        border-radius: 4px;\n        z-index:10;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        )), h = (0,
        d.ZP)(c.lU)(l || (l = s(["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 280px;\n    color: rgba(255, 255, 255, 0.70)\n"], ["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 280px;\n    color: rgba(255, 255, 255, 0.70)\n"])))
    },
    53574: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return L
            }
        });
        var i, r, o, a, l, c, d, s, p, u, f, g, h = t(11720), x = t(79354), m = t(50301), b = t(7763), w = t(25617), y = t(77036), v = t(45628), Z = t(72742), P = t(50445), k = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, A = (0,
        P.F4)(i || (i = k(["\n  0% {\n    top: 100px;\n    opacity: 0;\n  } 100% {\n    top: 0;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 100px;\n    opacity: 0;\n  } 100% {\n    top: 0;\n    opacity: 1;\n  }\n"]))), S = (0,
        P.F4)(r || (r = k(["\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n  50% {\n    top: 100px;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n  50% {\n    top: 100px;\n    opacity: 0;\n  }\n"]))), E = P.ZP.div(a || (a = k(["\n  overflow: auto;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: calc(var(--vw, 1vw) * 100);\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " 0.3s ease-out;\n  /* ", "  */\n"], ["\n  overflow: auto;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: calc(var(--vw, 1vw) * 100);\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " 0.3s ease-out;\n  /* ", "  */\n"])), A, (function(n) {
            return n.hide && (0,
            P.iv)(o || (o = k(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), S)
        }
        )), O = P.ZP.div(l || (l = k(["\n  padding: 20px 24px;\n  position: sticky;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  z-index: 20;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (orientation: landscape) {\n    padding: 16px 24px;\n  }\n"], ["\n  padding: 20px 24px;\n  position: sticky;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  z-index: 20;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (orientation: landscape) {\n    padding: 16px 24px;\n  }\n"])), (function(n) {
            return n.theme.colors.black70
        }
        )), I = P.ZP.div(c || (c = k(["\n  background: ", ";\n  backdrop-filter: blur(60px);\n  width: 100%;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  background: ", ";\n  backdrop-filter: blur(60px);\n  width: 100%;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])), (function(n) {
            return n.theme.colors.black70
        }
        )), C = P.ZP.div(d || (d = k(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 24px;\n\n  img {\n    width: 124px;\n    height: 32px;\n  }\n\n  @media only screen and (orientation: landscape) {\n    img {\n      position: absolute;\n      clip: rect(0, 48px, 32px, 0);\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 24px;\n\n  img {\n    width: 124px;\n    height: 32px;\n  }\n\n  @media only screen and (orientation: landscape) {\n    img {\n      position: absolute;\n      clip: rect(0, 48px, 32px, 0);\n    }\n  }\n"]))), j = P.ZP.div(s || (s = k(["\n  position: relative;\n  height: 32px;\n"], ["\n  position: relative;\n  height: 32px;\n"]))), R = P.ZP.span(p || (p = k(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  z-index: 20;\n  position: absolute;\n  top: 24px;\n  right: 20px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  z-index: 20;\n  position: absolute;\n  top: 24px;\n  right: 20px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"]))), B = P.ZP.div(u || (u = k(["\n  margin-top: 76px;\n\n  @media only screen and (orientation: landscape) {\n    margin-top: 0;\n  }\n\n  @media only screen and (orientation: portrait) {\n    width: 100%;\n  }\n"], ["\n  margin-top: 76px;\n\n  @media only screen and (orientation: landscape) {\n    margin-top: 0;\n  }\n\n  @media only screen and (orientation: portrait) {\n    width: 100%;\n  }\n"]))), z = P.ZP.div(f || (f = k(["\n  padding: 24px;\n  &>div {\n    padding: 0;\n    width: 100% !important;\n    position: relative;\n    border: 0;\n    gap: 24px;\n    background: transparent;\n\n    &.fit-html {\n      left: 0;\n    }\n  }\n\n  .icon-cross-thin, .genre-list {\n    display: none;\n  }\n\n  .trending-section {\n    display: block;\n  }\n"], ["\n  padding: 24px;\n  &>div {\n    padding: 0;\n    width: 100% !important;\n    position: relative;\n    border: 0;\n    gap: 24px;\n    background: transparent;\n\n    &.fit-html {\n      left: 0;\n    }\n  }\n\n  .icon-cross-thin, .genre-list {\n    display: none;\n  }\n\n  .trending-section {\n    display: block;\n  }\n"]))), T = P.ZP.div(g || (g = k(["\n  &>div {\n    top: 0px;\n    bottom: 0px;\n    position: relative;\n    width: 100%;\n    padding: 24px;\n    background: transparent;\n    backdrop-filter: none;\n\n    h3 {\n      text-align: left;\n    }\n\n    &.fit-html {\n      left: 0;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      left: 0 !important;\n      width: 100% !important;\n      padding-top: 24px;\n    }\n  }\n\n  .icon-cross-thin {\n    display: none;\n  }\n"], ["\n  &>div {\n    top: 0px;\n    bottom: 0px;\n    position: relative;\n    width: 100%;\n    padding: 24px;\n    background: transparent;\n    backdrop-filter: none;\n\n    h3 {\n      text-align: left;\n    }\n\n    &.fit-html {\n      left: 0;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      left: 0 !important;\n      width: 100% !important;\n      padding-top: 24px;\n    }\n  }\n\n  .icon-cross-thin {\n    display: none;\n  }\n"]))), D = E, X = t(97997), L = function(n) {
            var e = n.close
              , t = n.origin
              , i = (0,
            w.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , r = (0,
            h.useState)(!1)
              , o = r[0]
              , a = r[1]
              , l = (0,
            h.useState)("browse" === t)
              , c = l[0]
              , d = l[1]
              , s = (0,
            h.useState)()
              , p = s[0]
              , u = s[1]
              , f = (0,
            h.useState)(null)
              , g = (f[0],
            f[1]);
            (0,
            h.useEffect)((function() {
                return document.body.classList.add("revert-rotation", "overflow-hidden"),
                function() {
                    document.body.classList.remove("revert-rotation", "overflow-hidden")
                }
            }
            ), []);
            return (0,
            h.createPortal)((0,
            X.BX)(D, {
                hide: o,
                ref: function(n) {
                    return g(n)
                },
                children: [(0,
                X.BX)(O, {
                    children: [(0,
                    X.tZ)(C, {
                        isPortrait: v.cj.portrait === i,
                        children: (0,
                        X.tZ)(j, {
                            children: (0,
                            X.tZ)(Z.Z, {
                                className: "app-logo"
                            })
                        })
                    }), (0,
                    X.tZ)(B, {
                        children: (0,
                        X.tZ)(y.Z, {
                            autoFocus: "browse" === t,
                            onFocus: function() {
                                d(!0)
                            },
                            onChange: function(n) {
                                return u(n)
                            }
                        })
                    }), (0,
                    X.tZ)(R, {
                        onClick: function() {
                            a(!0),
                            e()
                        },
                        children: (0,
                        X.tZ)(x.x8, {})
                    })]
                }), (0,
                X.BX)(I, {
                    children: [c && (0,
                    X.tZ)(z, {
                        children: (0,
                        X.tZ)(m.Z, {
                            isOverlay: !0,
                            overlayKeywords: p
                        })
                    }), !c && (0,
                    X.tZ)(T, {
                        children: (0,
                        X.tZ)(b.default, {
                            isOverlay: !0
                        })
                    })]
                })]
            }), document.body)
        }
    },
    57762: function(n, e, t) {
        "use strict";
        t.d(e, {
            il: function() {
                return Z
            },
            aI: function() {
                return P
            },
            r2: function() {
                return k
            },
            W2: function() {
                return A
            },
            xg: function() {
                return S
            },
            mo: function() {
                return E
            },
            __: function() {
                return O
            },
            X2: function() {
                return I
            },
            qp: function() {
                return C
            },
            LD: function() {
                return j
            },
            ao: function() {
                return R
            },
            C0: function() {
                return B
            },
            vx: function() {
                return z
            },
            xv: function() {
                return T
            },
            cw: function() {
                return D
            },
            xR: function() {
                return X
            }
        });
        var i, r, o, a, l, c, d, s, p, u, f, g, h, x, m, b, w = t(50445), y = t(45628), v = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Z = (0,
        w.iv)(i || (i = v(["\n    @media screen and (orientation: landscape) and (max-height: 300px),\n    (orientation: portrait) and (max-width: 300px) {\n        height: 100%;\n    }\n\n    @media screen and (max-width: 400px) {\n        width: 100%;\n    }\n    max-width: 440px;\n"], ["\n    @media screen and (orientation: landscape) and (max-height: 300px),\n    (orientation: portrait) and (max-width: 300px) {\n        height: 100%;\n    }\n\n    @media screen and (max-width: 400px) {\n        width: 100%;\n    }\n    max-width: 440px;\n"]))), P = (0,
        w.iv)(r || (r = v(["\n  ", "\n"], ["\n  ", "\n"])), Z), k = (0,
        w.iv)(o || (o = v(["\n    padding: 20px;\n"], ["\n    padding: 20px;\n"]))), A = w.ZP.div(a || (a = v(["\n    padding: 24px;\n    .link {\n        font-size: 12px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        color: ", "\n    }\n"], ["\n    padding: 24px;\n    .link {\n        font-size: 12px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        color: ", "\n    }\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), S = w.ZP.div(l || (l = v(["\n    display: flex;\n    justify-content: space-between;\n    height: 45px;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    height: 45px;\n"]))), E = w.ZP.span(c || (c = v(["\n   margin-left: 4px;\n"], ["\n   margin-left: 4px;\n"]))), O = w.ZP.label(d || (d = v(["\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n    margin-left: 8px;\n    > input {\n        visibility: hidden;\n    }\n    > span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: ", ";\n        border: 1px solid ", ';\n        width: 24px;\n        height: 12px;\n        margin: auto 0px;\n    }\n    > span:before {\n        position: absolute;\n        content: "";\n        height: 80%;\n        aspect-ratio: 1;\n        left: 10%;\n        top: 10%;\n        background-color: ', ";\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    > input:checked + span {\n        background-color: ", ";\n        &:before {\n            background-color: ", ";\n        }\n    }\n    > input:checked + span:before {\n        transform: translateX(130%);\n    }\n"], ["\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n    margin-left: 8px;\n    > input {\n        visibility: hidden;\n    }\n    > span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: ", ";\n        border: 1px solid ", ';\n        width: 24px;\n        height: 12px;\n        margin: auto 0px;\n    }\n    > span:before {\n        position: absolute;\n        content: "";\n        height: 80%;\n        aspect-ratio: 1;\n        left: 10%;\n        top: 10%;\n        background-color: ', ";\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    > input:checked + span {\n        background-color: ", ";\n        &:before {\n            background-color: ", ";\n        }\n    }\n    > input:checked + span:before {\n        transform: translateX(130%);\n    }\n"])), (function(n) {
            return n.theme.border.radius12
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), I = w.ZP.div(s || (s = v(["\n    display: flex;\n    flex-direction: row;\n    color: ", ";\n    margin: 8px 0px 0px 0px;\n    span, a {\n        color: ", " !important;\n    }\n     .linkStyle {\n        text-align: center;\n        color: ", ";\n        font-size: 12px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    color: ", ";\n    margin: 8px 0px 0px 0px;\n    span, a {\n        color: ", " !important;\n    }\n     .linkStyle {\n        text-align: center;\n        color: ", ";\n        font-size: 12px;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), C = w.ZP.div(p || (p = v(["\n    display: flex;\n    justify-content: space-between;\n    padding-top: ", ";\n    color: ", ";\n\n    span, a {\n        color: ", " !important;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding-top: ", ";\n    color: ", ";\n\n    span, a {\n        color: ", " !important;\n    }\n"])), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), j = w.ZP.div(u || (u = v(["\n    border-radius: 8px;\n    background: ", ";\n    padding: 18px;\n    margin-bottom: 16px;\n\n    > div {\n        display: flex;\n        align-items: center;\n\n        > div:first-child {\n            flex-basis: 44px;\n            height: 44px;\n        }\n        ", "\n        \n    }\n\n    img {\n        width: 44px;\n        height: 44px;\n    }\n\n    button {\n        width: 100px;\n    }\n"], ["\n    border-radius: 8px;\n    background: ", ";\n    padding: 18px;\n    margin-bottom: 16px;\n\n    > div {\n        display: flex;\n        align-items: center;\n\n        > div:first-child {\n            flex-basis: 44px;\n            height: 44px;\n        }\n        ", "\n        \n    }\n\n    img {\n        width: 44px;\n        height: 44px;\n    }\n\n    button {\n        width: 100px;\n    }\n"])), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            var e = n.orientation
              , t = n.isMobile;
            return e === y.cj.portrait && t && "\n            flex-direction: column;\n            justify-content: center;\n            tex-align: center;\n            gap: 8px;\n        "
        }
        )), R = w.ZP.div(f || (f = v(["\n    display: flex;\n    flex-direction: column;\n    transform: translateX(18px);\n    max-width: 50%;\n\n\n    ", "\n"], ["\n    display: flex;\n    flex-direction: column;\n    transform: translateX(18px);\n    max-width: 50%;\n\n\n    ", "\n"])), (function(n) {
            var e = n.orientation
              , t = n.isMobile;
            return e === y.cj.portrait && t && "\n        align-items: center;\n        transform: none;\n        max-width: 100%;\n        "
        }
        )), B = w.ZP.span(g || (g = v(["\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 150%;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n"], ["\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 150%;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n"])), (function(n) {
            return n.theme.colors.white60
        }
        )), z = w.ZP.p(h || (h = v(["\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 150%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0;\n    color: ", ";\n    display: flex;\n"], ["\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 150%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0;\n    color: ", ";\n    display: flex;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), T = w.ZP.div(x || (x = v(["\n    a {\n        color: rgba(255, 255, 255, 0.8);\n    }\n"], ["\n    a {\n        color: rgba(255, 255, 255, 0.8);\n    }\n"]))), D = w.ZP.div(m || (m = v(["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: ", ";\n"], ["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), X = w.ZP.div(b || (b = v(["\n    display: flex;\n"], ["\n    display: flex;\n"])))
    },
    14194: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return k
            }
        });
        var i = t(11720)
          , r = t(25617)
          , o = t(13978)
          , a = {
            src: "/play/_next/static/media/google.ad9f69b8.svg",
            height: 32,
            width: 32
        }
          , l = t(94391)
          , c = {
            src: "/play/_next/static/media/facebook.76e2ef04.svg",
            height: 25,
            width: 25
        }
          , d = t(45024)
          , s = t(78294)
          , p = t(89598)
          , u = t(77691)
          , f = t(7940)
          , g = t(58309)
          , h = t(14266)
          , x = t(94381)
          , m = t(11163)
          , b = t(94564)
          , w = t(45628)
          , y = t(26544)
          , v = t(14556)
          , Z = t(97997)
          , P = function() {
            return (P = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }
          , k = function(n) {
            var e = n.pageContext
              , t = void 0 === e ? x.$6.pre : e
              , k = n.showGuestBtn
              , A = n.params
              , S = void 0 === A ? {} : A
              , E = (0,
            m.useRouter)()
              , O = (0,
            r.v9)((function(n) {
                return n.robuxRewards.accumulatedTimeSecs
            }
            ))
              , I = (0,
            r.v9)((function(n) {
                return n.play.isPlayerLoaded
            }
            ))
              , C = (0,
            r.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , j = (0,
            r.I0)()
              , R = C === w.cj.landscape && (0,
            u.tq)();
            (0,
            i.useEffect)((function() {
                O > 0 && sessionStorage.setItem(x.XS, "".concat(O))
            }
            ), [O]);
            var B = function(n, e) {
                (0,
                p.L9)(x.q3, {
                    authProvider: n,
                    loginPageContext: e
                }),
                (null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.isAppPage) && I && (0,
                s.mv)();
                var t = s.ZP.authUseThirdPartyFlow ? window.location.pathname : window.location.href.split("?")[0]
                  , i = s.ZP.authRedirectionUrl.replace("$provider", n).replace("$continueUrl", (0,
                u.KW)(t, P({
                    ng_visitId: encodeURIComponent(window.ngVisitId),
                    ng_feSessionId: encodeURIComponent(window.feSessionId || ""),
                    pageReferrer: encodeURIComponent(sessionStorage.getItem("pageReferrer") || "NA"),
                    loginPageContext: e
                }, S)));
                window.location.href = i
            };
            return (0,
            Z.BX)(v.ZP, {
                className: "login-options",
                children: [(0,
                Z.BX)(f.z, {
                    onClick: function() {
                        return B("discord", t)
                    },
                    variant: "discord",
                    size: "large",
                    style: R ? {
                        width: "100%",
                        justifyContent: "space-between"
                    } : {},
                    children: [(0,
                    Z.tZ)("img", {
                        alt: "",
                        loading: "lazy",
                        src: (0,
                        d.j)(l.Z),
                        width: 20,
                        height: 20
                    }), R && (0,
                    Z.BX)(Z.HY, {
                        children: [(0,
                        Z.tZ)(b.QV, {
                            children: (0,
                            o.t)("discord")
                        }), (0,
                        Z.tZ)(v.UV, {
                            style: {
                                borderColor: y.qm.colors.white50
                            }
                        })]
                    })]
                }), (0,
                Z.BX)(f.z, {
                    onClick: function() {
                        return B("google", t)
                    },
                    id: "ng-google",
                    variant: "google",
                    size: "large",
                    style: R ? {
                        width: "100%",
                        justifyContent: "space-between"
                    } : {},
                    children: [(0,
                    Z.tZ)("img", {
                        alt: "",
                        loading: "lazy",
                        src: (0,
                        d.j)(a),
                        width: 20,
                        height: 20
                    }), R && (0,
                    Z.BX)(Z.HY, {
                        children: [(0,
                        Z.tZ)(b.QV, {
                            children: (0,
                            o.t)("google")
                        }), (0,
                        Z.tZ)(v.UV, {})]
                    })]
                }), (0,
                Z.BX)(f.z, {
                    onClick: function() {
                        return B("facebook", t)
                    },
                    variant: "facebook",
                    size: "large",
                    style: R ? {
                        width: "100%",
                        justifyContent: "space-between"
                    } : {},
                    children: [(0,
                    Z.tZ)("img", {
                        alt: "",
                        loading: "lazy",
                        src: (0,
                        d.j)(c),
                        width: 20,
                        height: 20
                    }), R && (0,
                    Z.BX)(Z.HY, {
                        children: [(0,
                        Z.tZ)(b.QV, {
                            children: (0,
                            o.t)("facebook")
                        }), (0,
                        Z.tZ)(v.UV, {
                            style: {
                                borderColor: y.qm.colors.white50
                            }
                        })]
                    })]
                }), !s.ZP.features.requireAuth && k && "/browse" !== E.pathname && (0,
                Z.tZ)(f.z, {
                    id: "goRogueBtn",
                    className: "guest-btn",
                    variant: "tertiaryOutline",
                    text: (0,
                    o.t)("goRogue"),
                    onClick: function() {
                        return function(n) {
                            var e, t;
                            (0,
                            p.L9)("PlayAsGuestClicked", {
                                loginPageContext: n
                            }),
                            (null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.isAppPage) && I && (0,
                            s.mv)(),
                            (0,
                            s.dr)(),
                            (0,
                            g.hB)(),
                            (0,
                            g.kS)({
                                reason: "PlayAsGuestClicked",
                                url: null === (t = null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.href) || void 0 === t ? void 0 : t.split("?")[0]
                            }),
                            j({
                                type: h.Z.GUEST_FLOW,
                                payload: {
                                    guestFlow: !0,
                                    showPreloader: !1
                                }
                            })
                        }(t)
                    }
                })]
            })
        }
    },
    14556: function(n, e, t) {
        "use strict";
        t.d(e, {
            An: function() {
                return d
            },
            UV: function() {
                return s
            }
        });
        var i, r, o, a = t(50445), l = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, c = a.ZP.div(i || (i = l(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    gap: 5px;\n    min-width: 120px;\n    @media screen and (orientation: portrait)  {\n      min-width: 94px;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    gap: 5px;\n    min-width: 120px;\n    @media screen and (orientation: portrait)  {\n      min-width: 94px;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"]))), d = a.ZP.p(r || (r = l(["\n    position: relative;\n    font-size: 14px;\n    line-height: 150%;\n    color: ", ";\n    text-align: center;\n    margin: 10px 0;\n    width: 100%;\n    font-display: swap;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      margin:3px 0;\n    }\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      height: 0.5px;\n      background: ", ";\n      width: calc(50% - 70px);\n      top: 48%;\n    }\n\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n"], ["\n    position: relative;\n    font-size: 14px;\n    line-height: 150%;\n    color: ", ";\n    text-align: center;\n    margin: 10px 0;\n    width: 100%;\n    font-display: swap;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      margin:3px 0;\n    }\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      height: 0.5px;\n      background: ", ";\n      width: calc(50% - 70px);\n      top: 48%;\n    }\n\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n"])), (function(n) {
            return n.theme.colors.base500
        }
        ), (function(n) {
            return n.theme.colors.base500
        }
        )), s = a.ZP.div(o || (o = l(["\n    border: solid ", ";\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 5px;\n    margin-right: 2px;\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n\n"], ["\n    border: solid ", ";\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 5px;\n    margin-right: 2px;\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n\n"])), (function(n) {
            return n.theme.colors.black40
        }
        ));
        e.ZP = c
    },
    60034: function(n, e, t) {
        "use strict";
        t.d(e, {
            il: function() {
                return s
            },
            Dx: function() {
                return p
            }
        });
        var i, r, o, a = t(94564), l = t(50445), c = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, d = l.ZP.div(i || (i = c(["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"], ["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), s = (0,
        l.iv)(r || (r = c(["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"]))), p = (0,
        l.ZP)(a.Bb)(o || (o = c(["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"], ["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"])));
        e.ZP = d
    },
    7013: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return b
            }
        });
        var i, r, o, a = t(92809), l = {
            src: "/play/_next/static/media/no-ads.da3e4483.png",
            height: 360,
            width: 360,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHaeX3huLrnxcbhiIvefX+dahTGYWHJVVrRYmXXeXm3S0/el3nMWVzhjpDclGzeb3HokJDbiXvPYGPun5jUa3DhkY7on6HutLbwjI7wo4mT6CkDAAAAFnRSTlMA8vv6/aoGFVDpQT12ncnY0xfwwNlmHtlGBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwVyscBgDAMwEClOqGFagP7Dwr56D4CkC0DXMntbYK8PqbvCRwxeFuA2YK/EzA61Tj0u9RauiDy9wNOZwHuHdGUhAAAAABJRU5ErkJggg=="
        }, c = t(45024), d = t(95860), s = t(50445), p = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, u = (0,
        s.F4)(i || (i = p(["\n  0% { transform: rotate(-15deg) }\n  4% { transform: rotate(-5deg) }\n  6% { transform: rotate(-15deg) }\n  8% { transform: rotate(-10deg) }\n  10% { transform: rotate(-15deg) }\n\n  // pause\n  45% { transform: rotate(-15deg) }\n\n  50% { transform: rotate(15deg) }\n  54% { transform: rotate(5deg) }\n  56% { transform: rotate(15deg) }\n  58% { transform: rotate(10deg) }\n  60% { transform: rotate(15deg) }\n\n  // pause\n  95% { transform: rotate(15deg) }\n\n  // back to initial position\n  100% { transform: rotate(-15deg) }\n"], ["\n  0% { transform: rotate(-15deg) }\n  4% { transform: rotate(-5deg) }\n  6% { transform: rotate(-15deg) }\n  8% { transform: rotate(-10deg) }\n  10% { transform: rotate(-15deg) }\n\n  // pause\n  45% { transform: rotate(-15deg) }\n\n  50% { transform: rotate(15deg) }\n  54% { transform: rotate(5deg) }\n  56% { transform: rotate(15deg) }\n  58% { transform: rotate(10deg) }\n  60% { transform: rotate(15deg) }\n\n  // pause\n  95% { transform: rotate(15deg) }\n\n  // back to initial position\n  100% { transform: rotate(-15deg) }\n"]))), f = s.ZP.div(o || (o = p(["\n  ", "\n  ", "\n\n  ", "\n"], ["\n  ", "\n  ", "\n\n  ", "\n"])), d.be, (function(n) {
            var e = n.$style;
            return e && (0,
            s.iv)(e)
        }
        ), (function(n) {
            return n.applyAnimation && (0,
            s.iv)(r || (r = p(["\n    animation: ", " 5s infinite;\n  "], ["\n    animation: ", " 5s infinite;\n  "])), u)
        }
        )), g = t(97997);
        function h(n, e) {
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
        function x(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(Object(t), !0).forEach((function(e) {
                    (0,
                    a.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var m = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(n); r < i.length; r++)
                    e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
            }
            return t
        }
          , b = function(n) {
            var e = n.src
              , t = n.style
              , i = n.applyAnimation
              , r = m(n, ["src", "style", "applyAnimation"]);
            return (0,
            g.tZ)(f, {
                $style: t,
                applyAnimation: i,
                children: (0,
                g.tZ)("img", x({
                    src: (0,
                    c.j)(e || l),
                    alt: "reward & earn"
                }, r))
            })
        }
    },
    51591: function(n, e, t) {
        "use strict";
        t.d(e, {
            XF: function() {
                return x
            },
            op: function() {
                return m
            }
        });
        var i, r, o, a, l, c, d, s, p = t(50445), u = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, f = (0,
        p.F4)(i || (i = u(["\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n"], ["\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n"]))), g = (0,
        p.F4)(r || (r = u(["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))), h = p.ZP.div(o || (o = u(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  height: 100%;\n  transition: all 0.3s ease-out;\n  border-radius: 120px;\n  border: 1px solid ", ";\n  background: ", ";\n  box-shadow: 0px 8px 16px 0px ", ";\n  padding: 0px 8px;\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  height: 100%;\n  transition: all 0.3s ease-out;\n  border-radius: 120px;\n  border: 1px solid ", ";\n  background: ", ";\n  box-shadow: 0px 8px 16px 0px ", ";\n  padding: 0px 8px;\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.white10
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.colors.white40
        }
        )), x = p.ZP.p(a || (a = u(["\n  animation: ", " 0.3s ease-out;\n  color: white;\n  text-align: center;\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0.16px;\n  position: absolute;\n  border-radius: 36px;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  height: 10px;\n  padding: 0px 4px;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(17px);\n"], ["\n  animation: ", " 0.3s ease-out;\n  color: white;\n  text-align: center;\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0.16px;\n  position: absolute;\n  border-radius: 36px;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  height: 10px;\n  padding: 0px 4px;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(17px);\n"])), g, (function(n) {
            return n.theme.colors.white20
        }
        )), m = (p.ZP.span(l || (l = u([""], [""]))),
        p.ZP.div(c || (c = u(["\n    position: absolute;\n    top: 0;\n    right: 10px;\n    &:before, &:after {\n      content: '';\n      color: white;\n      position: absolute;\n      top: 0.25em;\n      left: 0;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background-color: #FF5B36;\n    }\n\n    &:before {\n      animation: ", " 1.7s ease infinite;\n      opacity: 0.25;\n    }\n"], ["\n    position: absolute;\n    top: 0;\n    right: 10px;\n    &:before, &:after {\n      content: '';\n      color: white;\n      position: absolute;\n      top: 0.25em;\n      left: 0;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background-color: #FF5B36;\n    }\n\n    &:before {\n      animation: ", " 1.7s ease infinite;\n      opacity: 0.25;\n    }\n"])), f));
        p.ZP.span(s || (s = u(["\n  width: 16px;\n  height: 16px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n  transition: all 0.3s ease-out;\n  ", ";\n"], ["\n  width: 16px;\n  height: 16px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n  transition: all 0.3s ease-out;\n  ", ";\n"])), (function(n) {
            return n.rotate && (0,
            p.iv)(d || (d = u(["transform: rotateX(180deg)"], ["transform: rotateX(180deg)"])))
        }
        ));
        e.ZP = h
    },
    20377: function(n, e, t) {
        "use strict";
        t.d(e, {
            il: function() {
                return m
            },
            h4: function() {
                return b
            },
            uT: function() {
                return w
            },
            Dx: function() {
                return y
            },
            xv: function() {
                return v
            },
            zx: function() {
                return Z
            },
            $_: function() {
                return P
            }
        });
        var i, r, o, a, l, c, d, s, p = t(50445), u = t(30150), f = t(94564), g = t(95860), h = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, x = p.ZP.div(i || (i = h(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n\n  h3 {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n\n  h3 {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.white90
        }
        )), m = (0,
        p.iv)(r || (r = h(["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"]))), b = p.ZP.div(o || (o = h(["\n  display: flex;\n  position: relative;\n  img {\n    max-width: 170px;\n  }\n\n  img:nth-child(2), img:nth-child(3) {\n    position: absolute;\n    transform: scale(0.5)\n  }\n  img:nth-child(2) {\n    left: -40px;\n    top: -75px;\n  }\n  img:nth-child(3) {\n    top: 20px;\n    left: 41px;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  img {\n    max-width: 170px;\n  }\n\n  img:nth-child(2), img:nth-child(3) {\n    position: absolute;\n    transform: scale(0.5)\n  }\n  img:nth-child(2) {\n    left: -40px;\n    top: -75px;\n  }\n  img:nth-child(3) {\n    top: 20px;\n    left: 41px;\n  }\n"]))), w = p.ZP.div(a || (a = h(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), g.be), y = (0,
        p.ZP)(f.Bb)(l || (l = h(["\n  font-size: 20px;\n  line-height: 150%;\n"], ["\n  font-size: 20px;\n  line-height: 150%;\n"]))), v = (0,
        p.ZP)(f.TZ)(c || (c = h(["\n  margin-top: 8px;\n  color: ", ";\n  text-align: center;\n"], ["\n  margin-top: 8px;\n  color: ", ";\n  text-align: center;\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), Z = (0,
        p.ZP)(u.Yd)(d || (d = h(["\n  margin-top: 24px;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"], ["\n  margin-top: 24px;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"]))), P = p.ZP.div(s || (s = h(["\n  p, a {\n    color: ", ";\n    text-align: center;\n  }\n"], ["\n  p, a {\n    color: ", ";\n    text-align: center;\n  }\n"])), (function(n) {
            return n.theme.colors.white70
        }
        ));
        e.ZP = x
    },
    62468: function(n, e, t) {
        "use strict";
        t.d(e, {
            il: function() {
                return m
            },
            xg: function() {
                return b
            },
            Dx: function() {
                return w
            },
            qY: function() {
                return y
            },
            eX: function() {
                return v
            },
            zx: function() {
                return Z
            }
        });
        var i, r, o, a, l, c, d, s = t(95860), p = t(94564), u = t(50445), f = t(30150), g = t(20377), h = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, x = u.ZP.div(i || (i = h(["\n  ", "\n  flex-direction: column;\n\n  h3 {\n    color: ", ";\n  }\n"], ["\n  ", "\n  flex-direction: column;\n\n  h3 {\n    color: ", ";\n  }\n"])), s.be, (function(n) {
            return n.theme.colors.white
        }
        )), m = (0,
        u.iv)(r || (r = h(["\n  width: 460px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"], ["\n  width: 460px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"]))), b = u.ZP.div(o || (o = h(["\n  ", "\n  width: 144px;\n  height: 144px;\n  margin-bottom: 20px;\n\n  img {\n    width: 100%;\n  }\n"], ["\n  ", "\n  width: 144px;\n  height: 144px;\n  margin-bottom: 20px;\n\n  img {\n    width: 100%;\n  }\n"])), s.be), w = (0,
        u.ZP)(p.Bb)(a || (a = h(["\n  margin-bottom: 8px;\n  text-wrap: balance;\n  overflow-wrap: anywhere;\n  text-align: center;\n"], ["\n  margin-bottom: 8px;\n  text-wrap: balance;\n  overflow-wrap: anywhere;\n  text-align: center;\n"]))), y = (0,
        u.ZP)(g.xv)(l || (l = h(["\n  color: ", ";\n  margin-bottom: 16px;\n  width: -webkit-fill-available;\n  overflow: auto;\n  overflow-wrap: anywhere;\n"], ["\n  color: ", ";\n  margin-bottom: 16px;\n  width: -webkit-fill-available;\n  overflow: auto;\n  overflow-wrap: anywhere;\n"])), (function(n) {
            return n.theme.colors.white80
        }
        )), v = u.ZP.div(c || (c = h(["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n"], ["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n"]))), Z = (0,
        u.ZP)(f.Yd)(d || (d = h(["\n  flex: 1 0 0;\n  font-weight: 600;\n"], ["\n  flex: 1 0 0;\n  font-weight: 600;\n"])));
        e.ZP = x
    },
    4532: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            default: function() {
                return rn
            }
        });
        var i, r, o, a, l, c, d, s = t(25617), p = t(11720), u = t(50912), f = t(94381), g = t(6413), h = t(12812), x = function() {
            var n = (0,
            p.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = function() {
                t(!0)
            }
              , r = function() {
                t(!1)
            };
            return (0,
            p.useEffect)((function() {
                return document.addEventListener("mouseleave", i),
                document.addEventListener("mouseenter", r),
                function() {
                    document.removeEventListener("mouseleave", i),
                    document.removeEventListener("mouseenter", r)
                }
            }
            ), []),
            [e]
        }, m = t(85992), b = t(78294), w = t(89598), y = t(12422), v = t(77691), Z = t(50445), P = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, k = Z.ZP.div(i || (i = P(["\n  position: relative;\n"], ["\n  position: relative;\n"]))), A = t(88879), S = t(45024), E = t(51591), O = t(97997), I = function() {
            var n = (0,
            s.v9)((function(n) {
                return n.robuxRewards.robuxCreditsEarned
            }
            ));
            return (0,
            O.BX)(E.ZP, {
                onClick: function() {
                    (0,
                    w.L9)(f.Jv)
                },
                children: [(0,
                O.tZ)("img", {
                    src: (0,
                    S.j)(A.Z),
                    width: 24,
                    alt: ""
                }), (0,
                O.tZ)(E.XF, {
                    children: n
                })]
            })
        }, C = t(26793), j = t(59930), R = t(94564), B = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, z = (0,
        Z.F4)(r || (r = B(["\n  0% {\n    opacity: 0;\n    top: 0;\n  }\n  100% {\n    opacity: 1;\n    top: 120%\n  }\n"], ["\n  0% {\n    opacity: 0;\n    top: 0;\n  }\n  100% {\n    opacity: 1;\n    top: 120%\n  }\n"]))), T = Z.ZP.div(o || (o = B(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  background: ", ";\n  border-radius: 6px;\n  border: 1px solid ", ";\n  height:36px;\n  gap: 8px;\n  right: 48px;\n  top: ", ";\n  backdrop-filter: blur(12px);\n  padding: 8px 12px 8px 12px;\n  cursor: pointer;\n  animation: ", " 0.3s ease-out;\n\n  &:before {\n    content: '';\n    display: ", ";\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid ", ";\n    top: -6px;\n    right: 13px;\n  }\n  \n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  background: ", ";\n  border-radius: 6px;\n  border: 1px solid ", ";\n  height:36px;\n  gap: 8px;\n  right: 48px;\n  top: ", ";\n  backdrop-filter: blur(12px);\n  padding: 8px 12px 8px 12px;\n  cursor: pointer;\n  animation: ", " 0.3s ease-out;\n\n  &:before {\n    content: '';\n    display: ", ";\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid ", ";\n    top: -6px;\n    right: 13px;\n  }\n  \n  ", "\n"])), (function(n) {
            return n.theme.colors.black70
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.isFullscreen ? "10px" : "120%"
        }
        ), z, (function(n) {
            return n.isFullscreen ? "none" : "block"
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return !n.isQuestCompleteToast && "&:hover {\n    padding-right: 0px;\n    .close-option {\n      display: block;\n    }\n  }"
        }
        )), D = (0,
        Z.ZP)(R.gd)(a || (a = B(["\n  color: ", ";\n  width: max-content;\n"], ["\n  color: ", ";\n  width: max-content;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), X = Z.ZP.div(l || (l = B(["\n    display: none;\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n    border-left: 1px solid rgba(255,255,255,0.2);\n    padding: 9px;\n"], ["\n    display: none;\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n    border-left: 1px solid rgba(255,255,255,0.2);\n    padding: 9px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), L = function() {
            var n = (0,
            C.$)().t
              , e = (0,
            p.useState)(!0)
              , t = e[0]
              , i = e[1]
              , r = (0,
            s.I0)()
              , o = (0,
            s.v9)((function(n) {
                return n.gamification.showTaskCompleteToast
            }
            ))
              , a = (0,
            s.v9)((function(n) {
                return n.play.isFullscreen
            }
            ));
            (0,
            p.useEffect)((function() {
                setTimeout((function() {
                    i(!1),
                    r({
                        type: g.Z.SHOW_ROBUX_TOAST,
                        payload: {
                            showRobuxToast: !1
                        }
                    }),
                    r({
                        type: y.Z.UPDATE_TASK,
                        payload: {
                            showTaskCompleteToast: !1
                        }
                    }),
                    sessionStorage.setItem(f.Zc, "true")
                }
                ), 3e3)
            }
            ), []);
            return t ? (0,
            O.BX)(T, {
                isQuestCompleteToast: o,
                isFullscreen: a,
                children: [(0,
                O.tZ)("img", {
                    src: (0,
                    S.j)(A.Z),
                    height: 24,
                    width: 22,
                    alt: ""
                }), (0,
                O.tZ)(D, {
                    children: n(o ? "completedNewQuest" : "earnedRobux")
                }), !o && (0,
                O.tZ)(X, {
                    className: "close-option",
                    onClick: function(n) {
                        return function(n) {
                            n.stopPropagation(),
                            n.preventDefault(),
                            i(!1),
                            r({
                                type: g.Z.SHOW_ROBUX_TOAST,
                                payload: {
                                    showRobuxToast: !1
                                }
                            }),
                            r({
                                type: y.Z.UPDATE_TASK,
                                payload: {
                                    showTaskCompleteToast: !1
                                }
                            })
                        }(n)
                    },
                    children: (0,
                    O.tZ)(j.Z, {
                        name: "cross-thin"
                    })
                })]
            }) : null
        }, _ = t(13978), F = t(29871), U = t(98424), M = {
            src: "/play/_next/static/media/robux-star-coin.749b5eac.svg",
            height: 104,
            width: 116
        }, N = t(20377), G = function(n) {
            var e = n.toggle
              , t = n.onClose
              , i = n.loginToClaim
              , r = n.closeFlyout
              , o = (0,
            s.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ));
            (0,
            p.useEffect)((function() {
                (0,
                w.L9)(f.Ab)
            }
            ), []);
            return (0,
            O.tZ)(F.Z, {
                toggle: e,
                onClose: t,
                modalStyles: N.il,
                onPopupClick: r,
                children: (0,
                O.BX)(N.ZP, {
                    children: [(0,
                    O.BX)(N.h4, {
                        children: [(0,
                        O.tZ)("img", {
                            src: (0,
                            S.j)(M),
                            alt: ""
                        }), (0,
                        O.tZ)("img", {
                            src: (0,
                            S.j)(U.Z),
                            alt: ""
                        }), (0,
                        O.tZ)("img", {
                            src: (0,
                            S.j)(U.Z),
                            alt: ""
                        })]
                    }), (0,
                    O.BX)(N.uT, {
                        children: [(0,
                        O.tZ)(N.Dx, {
                            children: (0,
                            _.t)("wonRobuxMessage")
                        }), (0,
                        O.tZ)(N.xv, {
                            children: (0,
                            _.t)("wonRobuxAfterGameplay", {
                                minutes: Math.floor(b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs / 60)
                            })
                        }), !o && (0,
                        O.tZ)(N.zx, {
                            onClick: function() {
                                i && i(f.$6.firstRobuxPopup),
                                (0,
                                w.L9)(f.tc)
                            },
                            children: (0,
                            O.tZ)(R.QV, {
                                children: (0,
                                _.t)("loginToClaim")
                            })
                        })]
                    }), (0,
                    O.tZ)(N.$_, {
                        children: (0,
                        O.BX)(R.gd, {
                            children: [(0,
                            _.t)("robuxTermsCondition"), "\xa0", (0,
                            O.tZ)("a", {
                                href: "https://now.gg/terms-and-privacy.html",
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0,
                                _.t)("termAndConditions")
                            })]
                        })
                    })]
                })
            })
        }, V = t(91469), Y = t(14194), H = t(60034), Q = t(16678), q = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, W = (0,
        Z.iv)(c || (c = q(["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n\n  h3 {\n    margin: 20px auto 16px;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n\n  h3 {\n    margin: 20px auto 16px;\n  }\n"]))), J = Z.ZP.div(d || (d = q(["\n  margin-bottom: 32px;\n  img {\n    width: 190px;\n    height: 48px;\n  }\n"], ["\n  margin-bottom: 32px;\n  img {\n    width: 190px;\n    height: 48px;\n  }\n"]))), K = function(n) {
            var e = n.toggle
              , t = n.pageContext
              , i = n.onClose
              , r = n.closeFlyout;
            return (0,
            p.useEffect)((function() {
                (0,
                w.L9)(f.JP, {
                    loginPageContext: t
                })
            }
            ), [t]),
            (0,
            O.tZ)(F.Z, {
                modalStyles: W,
                onClose: i,
                toggle: e,
                onPopupClick: r,
                children: (0,
                O.BX)(H.ZP, {
                    children: [(0,
                    O.tZ)(J, {
                        children: (0,
                        O.tZ)(Q.Z, {
                            style: {
                                margin: "0px"
                            },
                            themeType: "light",
                            hasTagline: !1
                        })
                    }), (0,
                    O.tZ)(H.Dx, {
                        children: (0,
                        _.t)("signInProg")
                    }), (0,
                    O.tZ)(Y.Z, {
                        pageContext: t
                    }), (0,
                    O.tZ)(V.Z, {})]
                })
            })
        }, $ = {
            src: "/play/_next/static/media/lose-reward.7289a6ea.svg",
            height: 144,
            width: 145
        }, nn = t(62468), en = function(n) {
            var e = n.toggle
              , t = n.claimReward
              , i = n.onClose
              , r = n.loginToClaim
              , o = n.onLoseReward
              , a = n.closeFlyout
              , l = (0,
            s.v9)((function(n) {
                return n.robuxRewards.accumulatedTimeSecs
            }
            ))
              , c = b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs - l % b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs;
            (0,
            p.useEffect)((function() {
                t ? (0,
                w.L9)(f.tF) : (0,
                w.L9)(f.V5)
            }
            ), []);
            return (0,
            O.tZ)(F.Z, {
                toggle: e,
                onClose: i,
                modalStyles: nn.il,
                onPopupClick: a,
                children: (0,
                O.BX)(nn.ZP, {
                    children: [(0,
                    O.tZ)(nn.xg, {
                        children: (0,
                        O.tZ)("img", {
                            src: (0,
                            S.j)($),
                            alt: ""
                        })
                    }), (0,
                    O.tZ)(nn.Dx, {
                        children: (0,
                        _.t)(t ? "claimReward" : "dontLoseReward")
                    }), (0,
                    O.tZ)(nn.qY, {
                        children: (0,
                        _.t)(t ? "robuxInAccount" : "quitNowMessage", {
                            minutes: "".concat(Math.floor(c / 60))
                        })
                    }), (0,
                    O.BX)(nn.eX, {
                        children: [(0,
                        O.tZ)(nn.zx, {
                            variant: "secondary",
                            size: "large",
                            onClick: o,
                            children: (0,
                            _.t)("loseReward")
                        }), t ? (0,
                        O.tZ)(nn.zx, {
                            variant: "primary",
                            size: "large",
                            onClick: function() {
                                r && r(f.$6.exitRobuxPopup),
                                (0,
                                w.L9)(f.dx)
                            },
                            children: (0,
                            _.t)("loginToClaim")
                        }) : (0,
                        O.tZ)(nn.zx, {
                            variant: "primary",
                            size: "large",
                            onClick: i,
                            children: (0,
                            _.t)("keepPlaying")
                        })]
                    })]
                })
            })
        }, tn = t(58169), rn = function() {
            var n = (0,
            s.v9)((function(n) {
                return n.robuxRewards.showRobuxToast
            }
            ))
              , e = (0,
            s.v9)((function(n) {
                return n.gamification.showTaskCompleteToast
            }
            ))
              , t = (0,
            s.v9)((function(n) {
                return n.gamification.showNotifDot
            }
            ))
              , i = (0,
            s.v9)((function(n) {
                return n.robuxRewards.robuxPopupOpen
            }
            ))
              , r = (0,
            p.useState)(!1)
              , o = r[0]
              , a = r[1]
              , l = (0,
            p.useState)(!1)
              , c = l[0]
              , d = l[1]
              , Z = (0,
            p.useState)(!1)
              , P = Z[0]
              , A = Z[1]
              , S = (0,
            p.useState)("")
              , C = S[0]
              , j = S[1]
              , R = (0,
            s.v9)((function(n) {
                return n.play.isPlayerLoaded
            }
            ))
              , B = (0,
            s.v9)((function(n) {
                return n.robuxRewards.robuxCreditsEarned
            }
            ))
              , z = (0,
            s.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            ))
              , T = (0,
            s.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , D = (0,
            s.v9)((function(n) {
                return n.robuxRewards.startRobuxTimer
            }
            ))
              , X = (0,
            s.v9)((function(n) {
                return n.robuxRewards.accumulatedTimeSecs
            }
            ))
              , _ = (0,
            s.v9)((function(n) {
                return n.robuxRewards.extraTimeSecs
            }
            ))
              , F = ((0,
            s.v9)((function(n) {
                return n.play.isGamePlayerOnFromAppPage
            }
            )),
            (0,
            p.useRef)(),
            (0,
            p.useRef)(0))
              , U = (0,
            p.useRef)(!1)
              , M = (0,
            s.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , N = x()[0]
              , V = (0,
            m.p)().creditReward
              , Y = (0,
            s.I0)()
              , H = function() {
                U.current && (d(!1),
                sessionStorage.setItem(f.gj, "true"))
            }
              , Q = function() {
                a(!1),
                A(!1),
                H()
            }
              , q = function() {
                var n = u.Z.getState().play.isPlayerLoaded;
                (!b.ZP.isAppPage || b.ZP.isAppPage && n) && (0,
                v.c6)() && (0,
                v.wA)() && (0,
                tn.Z)()
            }
              , W = function() {
                (0,
                tn.a)()
            };
            (0,
            p.useEffect)((function() {
                (0,
                v.c6)() && (0,
                v.wA)() && R && 0 !== X && X % b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs === 0 && ((0,
                w.L9)(f.N5),
                V(_ || b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs),
                _ && Y({
                    type: g.Z.ROBUX_REWARD_DETAILS,
                    payload: {
                        extraTimeSecs: 0
                    }
                }))
            }
            ), [X]),
            (0,
            p.useEffect)((function() {
                D && (0,
                tn.Z)()
            }
            ), [D]);
            var J = function() {
                var n = u.Z.getState().robuxRewards;
                (!u.Z.getState().auth.isLoggedIn && n.robuxCreditsEarned > 0 || 0 === n.robuxCreditsEarned) && (a(!1),
                d(!0))
            }
              , $ = function() {
                (0,
                tn.a)(),
                J()
            };
            (0,
            p.useEffect)((function() {
                return document.body.addEventListener("click", Q),
                window.addEventListener("blur", W),
                window.addEventListener("focus", q),
                window.addEventListener("confirmbeforeunload", $),
                function() {
                    document.body.removeEventListener("click", Q),
                    window.removeEventListener("blur", W),
                    window.removeEventListener("focus", q),
                    window.removeEventListener("confirmbeforeunload", $)
                }
            }
            ), []),
            (0,
            p.useEffect)((function() {
                z && N && J()
            }
            ), [N, z]),
            (0,
            p.useEffect)((function() {
                void 0 !== F.current && 0 === F.current && 1 === B ? a(!0) : F.current = B
            }
            ), [B]),
            (0,
            p.useEffect)((function() {
                U.current = c
            }
            ), [c]);
            var nn = function(n) {
                a(!1),
                d(!1),
                j(n),
                A(!0)
            }
              , rn = function() {
                Y({
                    type: g.Z.ROBUX_REWARD_DETAILS,
                    payload: {
                        robuxPopupOpen: !1
                    }
                })
            };
            return (0,
            O.BX)(O.HY, {
                children: [!M && (0,
                O.BX)(k, {
                    onClick: function(n) {
                        return function(n) {
                            n.stopPropagation();
                            var e = localStorage.getItem(f.X7)
                              , t = e ? (Number(e) + 1).toString() : "1";
                            (0,
                            v.cv)(),
                            localStorage.setItem(f.X7, t),
                            Y({
                                type: g.Z.ROBUX_REWARD_DETAILS,
                                payload: {
                                    robuxPopupViewCount: t,
                                    robuxPopupOpen: !i
                                }
                            }),
                            Y({
                                type: y.Z.TOGGLE_VIEW,
                                payload: {
                                    showProfileView: !1,
                                    showRobuxView: !0,
                                    showLeaderboardView: !1,
                                    showNotifDot: !1
                                }
                            })
                        }(n)
                    },
                    children: [(0,
                    O.tZ)(I, {}), t && (0,
                    O.tZ)(E.op, {})]
                }), (n && !i || e) && (0,
                O.tZ)(L, {}), (0,
                O.tZ)(h.Z, {
                    toggle: o && (0,
                    v.c6)(),
                    exitingDelay: .3,
                    children: (0,
                    O.tZ)(G, {
                        toggle: o,
                        onClose: function() {
                            return a(!1)
                        },
                        loginToClaim: nn,
                        closeFlyout: rn
                    })
                }), (0,
                O.tZ)(h.Z, {
                    toggle: c && !sessionStorage.getItem(f.gj) && (0,
                    v.c6)(),
                    exitingDelay: .3,
                    children: (0,
                    O.tZ)(en, {
                        toggle: c && !sessionStorage.getItem(f.gj),
                        onClose: H,
                        loginToClaim: nn,
                        onLoseReward: H,
                        claimReward: 0 !== B && !T,
                        closeFlyout: rn
                    })
                }), (0,
                O.tZ)(h.Z, {
                    toggle: P,
                    exitingDelay: .3,
                    children: (0,
                    O.tZ)(K, {
                        pageContext: C,
                        toggle: P,
                        onClose: function() {
                            A(!1)
                        },
                        closeFlyout: rn
                    })
                })]
            })
        }
    },
    58169: function(n, e, t) {
        "use strict";
        t.d(e, {
            a: function() {
                return a
            }
        });
        var i, r = t(6413), o = t(50912), a = function() {
            clearInterval(i)
        };
        e.Z = function() {
            return clearInterval(i),
            i = setInterval((function() {
                o.Z.dispatch({
                    type: r.Z.UPDATE_ACCUMULATED_TIME_SECS
                })
            }
            ), 1e3)
        }
    },
    95509: function(n, e, t) {
        "use strict";
        t.d(e, {
            J: function() {
                return h
            },
            i: function() {
                return x
            }
        });
        var i = t(45628)
          , r = t(79305)
          , o = t(78294)
          , a = t(50912)
          , l = t(40434)
          , c = function() {
            return (c = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }
          , d = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , s = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , p = "fe-user-preferences"
          , u = "fe-recent-played-apps"
          , f = function() {
            return JSON.parse(window.localStorage.getItem(p) || "[]").find((function(n) {
                return n.appId === o.ZP.appInfo.appId
            }
            ))
        }
          , g = function() {
            return d(void 0, void 0, void 0, (function() {
                var n;
                return s(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, r.Z.getPlaytime({}, {})];
                    case 1:
                        return (n = e.sent()).status === i.YR.Success && a.Z.dispatch({
                            type: l.Z.UPDATE_PREFERENCES,
                            payload: {
                                totalPlaytime: n.totalPlaytime
                            }
                        }),
                        [2]
                    }
                }
                ))
            }
            ))
        }
          , h = function() {
            return function(n) {
                return d(void 0, void 0, void 0, (function() {
                    var e, t, h, x, m, b, w, y, v, Z, P;
                    return s(this, (function(k) {
                        switch (k.label) {
                        case 0:
                            return a.Z.getState().auth.isLoggedIn ? [4, d(void 0, void 0, void 0, (function() {
                                var n, e;
                                return s(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return n = f(),
                                        (0,
                                        o.DJ)() && !n ? [2] : (e = {
                                            recentPlayedApp: o.ZP.appInfo.appId,
                                            appId: o.ZP.appInfo.appId,
                                            appPreferences: n ? n.appPreferences : {}
                                        },
                                        [4, r.Z.updateUserPreferences({}, e)]);
                                    case 1:
                                        return t.sent().status === i.YR.Success && (window.localStorage.removeItem(p),
                                        window.localStorage.removeItem(u)),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))] : [3, 5];
                        case 1:
                            return k.sent(),
                            e = {
                                recentPlayedApp: o.ZP.appInfo.appId
                            },
                            [4, r.Z.updateUserPreferences({}, e)];
                        case 2:
                            return k.sent(),
                            [4, r.Z.getUserPreferences({
                                appId: o.ZP.appInfo.appId
                            }, {})];
                        case 3:
                            return (t = k.sent()).status === i.YR.Success && (h = t.appPreferences,
                            x = h.imapOverlay,
                            m = h.imapScheme,
                            b = h.volume,
                            w = void 0 === b ? 0 : b,
                            sessionStorage.setItem("userVolume", null === w || void 0 === w ? void 0 : w.toString()),
                            n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: c(c(c(c({}, void 0 !== x && {
                                    imapOverlay: x
                                }), void 0 !== m && {
                                    imapScheme: m
                                }), void 0 !== w && {
                                    volume: w
                                }), {
                                    recentPlayedApps: t.recentPlayedApps,
                                    totalPlayedApps: t.totalPlayedApps
                                })
                            })),
                            [4, g()];
                        case 4:
                            return k.sent(),
                            (0,
                            o.DJ)() && setInterval((function() {
                                g()
                            }
                            ), 6e4),
                            [3, 6];
                        case 5:
                            y = f(),
                            v = function() {
                                var n = a.Z.getState().play.isPlayerLoaded
                                  , e = JSON.parse(window.localStorage.getItem(u) || "[]")
                                  , t = e.find((function(n) {
                                    return n.appId === o.ZP.appInfo.appId
                                }
                                ));
                                return t ? e = e.filter((function(n) {
                                    return n.appId !== o.ZP.appInfo.appId
                                }
                                )) : n && (t = {
                                    appId: o.ZP.appInfo.appId,
                                    icon: o.ZP.appInfo.media.icon,
                                    name: o.ZP.appInfo.appName,
                                    playUrl: window.location.href,
                                    appPageUrl: o.ZP.appInfo.appPageUrl,
                                    packageName: o.ZP.appInfo.packageName
                                }),
                                t && "portal" !== (null === t || void 0 === t ? void 0 : t.appId) && e.unshift(t),
                                window.localStorage.setItem(u, JSON.stringify(e)),
                                e
                            }(),
                            sessionStorage.setItem("userVolume", (null === (P = null === (Z = null === y || void 0 === y ? void 0 : y.appPreferences) || void 0 === Z ? void 0 : Z.volume) || void 0 === P ? void 0 : P.toString()) || "0"),
                            (y || v) && n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: c(c({}, null === y || void 0 === y ? void 0 : y.appPreferences), {
                                    recentPlayedApps: v
                                })
                            }),
                            k.label = 6;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
          , x = function(n) {
            var e = n.imapScheme
              , t = n.imapOverlay
              , u = n.volume;
            return function(n) {
                return d(void 0, void 0, void 0, (function() {
                    var d, f, g, h;
                    return s(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return d = a.Z.getState().auth.isLoggedIn,
                            f = c(c(c({}, void 0 !== t && {
                                imapOverlay: t
                            }), void 0 !== e && {
                                imapScheme: e
                            }), void 0 !== u && u >= 0 && u <= 1 && {
                                volume: u
                            }),
                            g = {
                                appId: o.ZP.appInfo.appId,
                                appPreferences: f
                            },
                            (h = null === f || void 0 === f ? void 0 : f.volume) && sessionStorage.setItem("userVolume", (null === h || void 0 === h ? void 0 : h.toString()) || "0"),
                            d ? [4, r.Z.updateUserPreferences({}, g)] : [3, 2];
                        case 1:
                            return s.sent().status === i.YR.Success && n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: f
                            }),
                            [3, 3];
                        case 2:
                            !function(n) {
                                var e = n.appId
                                  , t = n.appPreferences
                                  , i = JSON.parse(window.localStorage.getItem(p) || "[]")
                                  , r = i.findIndex((function(n) {
                                    return n.appId === e
                                }
                                ));
                                -1 !== r ? i[r].appPreferences = c(c({}, i[r].appPreferences), t) : i.push({
                                    appId: e,
                                    appPreferences: t
                                }),
                                window.localStorage.setItem(p, JSON.stringify(i))
                            }(g),
                            n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: f
                            }),
                            s.label = 3;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
    },
    85992: function(n, e, t) {
        "use strict";
        t.d(e, {
            p: function() {
                return f
            }
        });
        var i = t(11720)
          , r = t(79305)
          , o = t(94381)
          , a = t(25617)
          , l = t(45628)
          , c = t(78294)
          , d = t(77691)
          , s = t(6413)
          , p = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        c(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                c((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , u = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , f = function() {
            var n = (0,
            i.useState)(!1)
              , e = n[0]
              , t = n[1]
              , f = (0,
            a.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , g = (0,
            a.I0)();
            return {
                loading: e,
                creditReward: function(n) {
                    return p(void 0, void 0, void 0, (function() {
                        var e, i, a;
                        return u(this, (function(p) {
                            switch (p.label) {
                            case 0:
                                t(!0),
                                p.label = 1;
                            case 1:
                                return p.trys.push([1, , 6, 7]),
                                f ? (e = (0,
                                d.Fz)(o.nP),
                                i = (0,
                                d.io)(o.K3),
                                e && i ? [4, r.Z.creditReward({}, {
                                    uaId: e,
                                    uaSessionId: i,
                                    playTimeSecs: n,
                                    playSessionId: c.ZP.playSessionId
                                })] : [3, 3]) : [3, 4];
                            case 2:
                                (a = p.sent()).status === l.YR.Success && (g({
                                    type: s.Z.ROBUX_REWARD_CREDIT,
                                    payload: {
                                        robuxCreditsEarned: a.robuxCreditsEarned,
                                        totalRobuxCreditsEarnedByAllUsers: a.totalRobuxCreditsEarnedByAllUsers
                                    }
                                }),
                                g({
                                    type: s.Z.SHOW_ROBUX_TOAST,
                                    payload: {
                                        showRobuxToast: !0
                                    }
                                })),
                                p.label = 3;
                            case 3:
                                return [3, 5];
                            case 4:
                                g({
                                    type: s.Z.ROBUX_REWARD_CREDIT
                                }),
                                g({
                                    type: s.Z.SHOW_ROBUX_TOAST,
                                    payload: {
                                        showRobuxToast: !0
                                    }
                                }),
                                p.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return t(!1),
                                [7];
                            case 7:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
    },
    94391: function(n, e) {
        "use strict";
        e.Z = {
            src: "/play/_next/static/media/discord.9b1f269d.svg",
            height: 25,
            width: 25
        }
    },
    50063: function(n, e) {
        "use strict";
        e.Z = {
            src: "/play/_next/static/media/alert.bfbcd90b.svg",
            height: 24,
            width: 24
        }
    },
    88879: function(n, e) {
        "use strict";
        e.Z = {
            src: "/play/_next/static/media/robux-coin.b55c8ccb.svg",
            height: 16,
            width: 16
        }
    },
    98424: function(n, e) {
        "use strict";
        e.Z = {
            src: "/play/_next/static/media/sparkling-stars.a3790ffe.gif",
            height: 1004,
            width: 1e3
        }
    }
}]);
//# sourceMappingURL=459-159af5f2c1fbd382.js.map
