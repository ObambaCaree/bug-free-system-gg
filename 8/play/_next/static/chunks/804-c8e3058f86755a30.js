"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[804], {
    7940: function(n, o, t) {
        t.d(o, {
            z: function() {
                return x
            }
        });
        var i = t(92809)
          , r = (t(11720),
        t(59930))
          , e = t(15132)
          , a = t(30150)
          , p = t(94564)
          , l = t(97997)
          , d = function(n) {
            var o = n.text
              , t = void 0 === o ? "" : o
              , i = n.size;
            switch (void 0 === i ? "small" : i) {
            case "small":
                return (0,
                l.tZ)(p.Rh, {
                    children: t
                });
            case "medium":
                return (0,
                l.tZ)(p.QV, {
                    children: t
                });
            case "large":
                return (0,
                l.tZ)(p.js, {
                    children: t
                });
            default:
                return (0,
                l.tZ)(p.IS, {
                    children: t
                })
            }
        };
        function c(n, o) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                o && (i = i.filter((function(o) {
                    return Object.getOwnPropertyDescriptor(n, o).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function s(n) {
            for (var o = 1; o < arguments.length; o++) {
                var t = null != arguments[o] ? arguments[o] : {};
                o % 2 ? c(Object(t), !0).forEach((function(o) {
                    (0,
                    i.Z)(n, o, t[o])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(o) {
                    Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(t, o))
                }
                ))
            }
            return n
        }
        var m = function(n, o) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && o.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(n); r < i.length; r++)
                    o.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
            }
            return t
        }
          , x = function(n) {
            var o = n.children
              , t = n.icon
              , i = n.text
              , p = n.size
              , c = void 0 === p ? "medium" : p
              , x = n.isLoading
              , h = void 0 !== x && x
              , g = m(n, ["children", "icon", "text", "size", "isLoading"]);
            return (0,
            l.BX)(a.Yd, s(s({}, g), {}, {
                size: c,
                isLoading: h,
                children: [h && (0,
                l.tZ)(e.Z, {
                    borderWidth: 1,
                    style: {
                        width: "24px",
                        height: "24px"
                    }
                }), o, (null === t || void 0 === t ? void 0 : t.name) && (0,
                l.tZ)(r.Z, {
                    name: t.name,
                    size: t.size || 32,
                    style: t.style
                }), i && (0,
                l.tZ)(d, {
                    text: i,
                    size: c
                })]
            }))
        }
    },
    30150: function(n, o, t) {
        t.d(o, {
            Yd: function() {
                return m
            }
        });
        var i, r, e = t(26544), a = t(50445), p = function(n, o) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: o
            }) : n.raw = o,
            n
        }, l = {
            primary: {
                color: e.qm.colors.white,
                hoverColor: e.qm.colors.white,
                disableColor: e.qm.colors.white40,
                backgroundColorNormal: e.qm.colors.ascent,
                backgroundColorHover: e.qm.colors.ascent40,
                backgroundColorDisable: e.qm.colors.white10,
                boxShadowNormal: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                borderColor: "",
                loadingBgColor: "rgba(255, 255, 255, 0.1)",
                loadingTextColor: "rgba(255, 255, 255, 0.4)",
                loadingBoxShadowNormal: "",
                loadingBackdropFilter: "blur(120px)"
            },
            outline: {
                color: e.qm.colors.ascent,
                hoverColor: e.qm.colors.white,
                disableColor: e.qm.colors.white40,
                backgroundColorNormal: e.qm.colors.transparent,
                backgroundColorHover: e.qm.colors.ascent,
                backgroundColorDisable: e.qm.colors.white10,
                boxShadowNormal: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                borderColor: e.qm.colors.ascent
            },
            secondary: {
                color: e.qm.colors.base700,
                hoverColor: e.qm.colors.ascent,
                disableColor: e.qm.colors.base100,
                backgroundColorNormal: e.qm.colors.white,
                backgroundColorHover: e.qm.colors.white,
                backgroundColorDisable: e.qm.colors.base50,
                boxShadowNormal: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
                boxShadowDisable: "",
                borderColor: ""
            },
            tertiary: {
                color: e.qm.colors.base800,
                hoverColor: e.qm.colors.base900,
                disableColor: e.qm.colors.white40,
                backgroundColorNormal: e.qm.colors.white70,
                backgroundColorHover: e.qm.colors.white90,
                backgroundColorDisable: e.qm.colors.white10,
                boxShadowNormal: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
                boxShadowDisable: "",
                borderColor: ""
            },
            tertiaryOutline: {
                color: e.qm.colors.white80,
                hoverColor: e.qm.colors.white,
                disableColor: e.qm.colors.white40,
                backgroundColorNormal: e.qm.colors.transparent,
                backgroundColorHover: e.qm.colors.transparent,
                backgroundColorDisable: e.qm.colors.white10,
                boxShadowNormal: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
                boxShadowDisable: "",
                borderColor: e.qm.colors.white80,
                borderColorHover: e.qm.colors.white
            },
            google: {
                color: e.qm.colors.black80,
                backgroundColorNormal: e.qm.colors.white,
                backgroundColorHover: e.qm.colors.white90,
                boxShadowNormal: "",
                boxShadowDisable: "",
                borderColor: ""
            },
            facebook: {
                color: e.qm.colors.white,
                backgroundColorNormal: "#2178FA",
                backgroundColorHover: "#176EF0",
                boxShadowNormal: "",
                borderColor: ""
            },
            discord: {
                color: e.qm.colors.white,
                backgroundColorNormal: "#6944FF",
                backgroundColorHover: "#5F3AF5",
                boxShadowNormal: "",
                borderColor: ""
            },
            defaultOutline: {
                color: e.qm.colors.white80,
                borderColor: e.qm.colors.white80,
                backgroundColorNormal: e.qm.colors.transparent,
                backgroundColorHover: e.qm.colors.transparent,
                borderColorHover: e.qm.colors.white,
                hoverColor: e.qm.colors.white,
                boxShadowNormal: "0 4px 4px 0 rgba(0, 0, 0, 0.33)",
                backgroundColorDisable: e.qm.colors.base700,
                boxShadowDisable: "0 4px 4px 0 rgba(0, 0, 0, 0.20)",
                disableColor: e.qm.colors.white30,
                borderColorDisable: e.qm.colors.base700
            }
        }, d = function(n, o, t) {
            void 0 === o && (o = "primary");
            var i = l[o]
              , r = i.color
              , e = i.hoverColor
              , a = i.backgroundColorNormal
              , p = i.backgroundColorHover
              , d = i.backgroundColorDisable
              , c = i.boxShadowNormal
              , s = i.boxShadowDisable
              , m = i.disableColor
              , x = i.borderColor
              , h = i.borderColorDisable
              , g = i.borderColorHover
              , f = i.loadingBgColor
              , u = i.loadingTextColor
              , b = i.loadingBoxShadowNormal
              , y = i.loadingBackdropFilter;
            return "\n    color: ".concat(t ? "".concat(u, " !important") : r, ";\n    background: ").concat(t ? "".concat(f, " !important") : a, ";\n    border: ").concat(x ? "1px solid ".concat(t ? f : x) : "0px", ";\n    box-shadow: ").concat(t ? b : c, ";\n    ").concat(t ? "pointer-events:none;" : "", "\n    ").concat(y ? "backdrop-filter:".concat(y, ";") : "", "\n\n    &:hover, &:active, &:focus {\n      background: ").concat(p, ";\n      color: ").concat(e, ";\n      border-color: ").concat(g, ";\n    }\n    &:disabled, &:hover:disabled {\n      cursor: default;\n      color: ").concat(m, ";\n      background: ").concat(d, ";\n      box-shadow: ").concat(s, ";\n      border-color: ").concat(h, ";\n      backdrop-filter: none;\n      box-shadow: none;\n    }\n  ")
        }, c = function(n, o) {
            switch (o) {
            case "small":
                return "\n      gap: 16px;\n      padding: 3px;\n      border-radius: ".concat(n.border.radius, ";\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 16px;\n      letter-spacing: 0.05em;\n    ");
            case "medium":
                return "\n      gap: 16px;\n      padding: 7px 16px;\n      border-radius: 6px;\n      font-weight: 500;\n      font-size: 12px;\n      line-height: 150%;\n    ";
            case "large":
                return "\n      gap: 8px;\n      padding: 7.5px;\n      border-radius: ".concat(n.border.radius2, ";\n      font-weight: 500;\n      font-size: 14px;\n      line-height: 150%;\n    ");
            case "xlarge":
                return "\n      gap: 16px;\n      padding: 12px;\n      border-radius: ".concat(n.border.radius3, ";\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 150%;\n    ");
            default:
                return "\n      gap: 16px;\n      padding: 10px;\n      border-radius: ".concat(n.border.radius, ";\n      font-weight: 500;\n      font-size: 12px;\n      line-height: 150%;\n    ")
            }
        }, s = function(n) {
            return "\n  width: ".concat(n, ";\n  height: ").concat(n, ";\n  flex-direction: column;\n  gap: 0;\n  &::before, &::after {\n    display: none;\n  }\n")
        }, m = a.ZP.button(i || (i = p(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  border-radius: 54px;\n  font-family: inherit;\n\n  ", "\n  ", "\n  ", "\n\n  &.more-cta {\n    font-size: 14px;\n    padding: 9px 27px;\n    margin: auto;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        width: 100%;\n    }\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  border-radius: 54px;\n  font-family: inherit;\n\n  ", "\n  ", "\n  ", "\n\n  &.more-cta {\n    font-size: 14px;\n    padding: 9px 27px;\n    margin: auto;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        width: 100%;\n    }\n  }\n"])), (function(n) {
            var o = n.variant
              , t = (n.theme,
            n.isLoading);
            return d(0, o, t)
        }
        ), (function(n) {
            var o = n.size
              , t = n.theme;
            return c(t, o)
        }
        ), (function(n) {
            var o = n.rounded;
            return o ? s(o.diameter) : ""
        }
        ));
        a.ZP.a(r || (r = p(["\n  cursor: pointer;\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  border-radius: 54px;\n  text-decoration: none;\n\n  ", "\n  ", "\n  ", "\n\n"], ["\n  cursor: pointer;\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  border-radius: 54px;\n  text-decoration: none;\n\n  ", "\n  ", "\n  ", "\n\n"])), (function(n) {
            var o = n.variant;
            n.theme;
            return d(0, o)
        }
        ), (function(n) {
            var o = n.size
              , t = n.theme;
            return c(t, o)
        }
        ), (function(n) {
            var o = n.rounded;
            return o ? s(o.diameter) : ""
        }
        ))
    },
    15132: function(n, o, t) {
        t.d(o, {
            Z: function() {
                return h
            }
        });
        var i, r, e, a, p = t(50445), l = function(n, o) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: o
            }) : n.raw = o,
            n
        }, d = p.ZP.div(i || (i = l(["\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  position:relative;\n  border-radius:50%;\n"], ["\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  position:relative;\n  border-radius:50%;\n"]))), c = p.ZP.div(r || (r = l(["\n  width: 100%;\n  height: 100%;\n  border-radius:50%;\n  border: ", " ;\n  position:absolute;\n  top:0;\n  left:0;\n"], ["\n  width: 100%;\n  height: 100%;\n  border-radius:50%;\n  border: ", " ;\n  position:absolute;\n  top:0;\n  left:0;\n"])), (function(n) {
            var o = n.theme
              , t = n.borderWidth;
            return "".concat(t, "px solid ").concat(o.colors.white40)
        }
        )), s = (0,
        p.F4)(e || (e = l(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))), m = p.ZP.div(a || (a = l(["\n  width: 100%;\n  height: 100%;\n  border-radius:50%;\n  border: ", " ;\n  border-bottom-color:transparent;\n  position:absolute;\n  top:0;\n  left:0;\n  animation: ", " 1.5s linear infinite;\n"], ["\n  width: 100%;\n  height: 100%;\n  border-radius:50%;\n  border: ", " ;\n  border-bottom-color:transparent;\n  position:absolute;\n  top:0;\n  left:0;\n  animation: ", " 1.5s linear infinite;\n"])), (function(n) {
            var o = n.theme
              , t = n.borderWidth;
            return "".concat(t, "px solid ").concat(o.colors.white)
        }
        ), s), x = t(97997), h = function(n) {
            var o = n.style
              , t = n.borderWidth
              , i = void 0 === t ? 2 : t;
            return (0,
            x.BX)(d, {
                style: o,
                children: [(0,
                x.tZ)(c, {
                    borderWidth: i
                }), (0,
                x.tZ)(m, {
                    borderWidth: i
                })]
            })
        }
    },
    79322: function(n, o, t) {
        t.d(o, {
            cy: function() {
                return V
            },
            xB: function() {
                return I
            },
            A3: function() {
                return J
            },
            mz: function() {
                return M
            },
            mU: function() {
                return T
            },
            Zt: function() {
                return K
            },
            tz: function() {
                return U
            },
            Vr: function() {
                return rn
            },
            nL: function() {
                return en
            },
            jK: function() {
                return an
            },
            tH: function() {
                return ln
            },
            J0: function() {
                return cn
            },
            XJ: function() {
                return mn
            },
            GA: function() {
                return hn
            },
            Y2: function() {
                return gn
            },
            zt: function() {
                return un
            },
            OO: function() {
                return wn
            },
            W2: function() {
                return vn
            },
            VY: function() {
                return kn
            },
            w3: function() {
                return Cn
            }
        });
        var i, r, e, a, p, l, d, c, s, m, x, h, g, f, u, b, y, w, v, k, C, z, E, q, P, Z, j, O, N, S, F, D, H, B, X, Y, W, A, L = t(50445), R = function(n, o) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: o
            }) : n.raw = o,
            n
        }, _ = (0,
        L.F4)(i || (i = R(["\n  0% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), V = (L.ZP.div(r || (r = R(["\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  display: flex;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 10;\n  transform: inherit;\n"], ["\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  display: flex;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 10;\n  transform: inherit;\n"]))),
        L.ZP.div(e || (e = R(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])))), G = (L.ZP.div(a || (a = R(["\n  margin: auto;\n  z-index: 2;\n  width: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  border: ", ";\n  box-shadow: ", ";\n  color: ", ";\n"], ["\n  margin: auto;\n  z-index: 2;\n  width: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  border: ", ";\n  box-shadow: ", ";\n  color: ", ";\n"])), (function(n) {
            var o = n.size;
            return "small" === o ? "320px" : "medium" === o ? "360px" : "380px"
        }
        ), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.border.radius4
        }
        ), (function(n) {
            return n.theme.colors.backgroundGlass
        }
        ), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.shadow.big
        }
        ), (function(n) {
            var o = n.theme
              , t = n.color;
            return t ? o.colors[t] : o.colors.base200
        }
        )),
        L.ZP.h3(p || (p = R(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 200%;\n  margin: 0;\n"], ["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 200%;\n  margin: 0;\n"])))), I = L.ZP.header(l || (l = R(["\n  display: flex;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 8px;\n  span + ", " {\n    margin-left: 12px;\n  }\n"], ["\n  display: flex;\n  border-bottom: 1px solid currentColor;\n  padding-bottom: 8px;\n  span + ", " {\n    margin-left: 12px;\n  }\n"])), G), J = (L.ZP.span(d || (d = R(["\n  margin-right: 12px;\n"], ["\n  margin-right: 12px;\n"]))),
        L.ZP.span(c || (c = R(["\n  color: ", ";\n  cursor: pointer;\n  margin: 0 0 0 auto;\n  padding: 5px;\n"], ["\n  color: ", ";\n  cursor: pointer;\n  margin: 0 0 0 auto;\n  padding: 5px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ))), M = L.ZP.footer(s || (s = R(["\n  border-top: ", ";\n  margin-top: 16px;\n  padding-top: 16px;\n  display: flex;\n  justify-content: ", ";\n"], ["\n  border-top: ", ";\n  margin-top: 16px;\n  padding-top: 16px;\n  display: flex;\n  justify-content: ", ";\n"])), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.center ? "center" : "space-between"
        }
        )), T = L.ZP.div(m || (m = R(["\n  z-index: 2;\n  background: radial-gradient(\n      32.85% 62.63% at 50% 30.49%,\n      rgba(81, 165, 201, 0.2) 0%,\n      rgba(51, 80, 111, 0) 100%\n    ),\n    radial-gradient(\n      14.95% 28.47% at 64.37% 56.79%,\n      rgba(179, 214, 97, 0.2) 0%,\n      rgba(179, 214, 97, 0) 100%\n    ),\n    radial-gradient(\n      20.82% 39.68% at 37.22% 60.32%,\n      rgba(255, 66, 165, 0.2) 0%,\n      rgba(255, 66, 165, 0) 100%\n    ),\n    #0b0223;\n\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: white;\n  overflow: scroll;\n"], ["\n  z-index: 2;\n  background: radial-gradient(\n      32.85% 62.63% at 50% 30.49%,\n      rgba(81, 165, 201, 0.2) 0%,\n      rgba(51, 80, 111, 0) 100%\n    ),\n    radial-gradient(\n      14.95% 28.47% at 64.37% 56.79%,\n      rgba(179, 214, 97, 0.2) 0%,\n      rgba(179, 214, 97, 0) 100%\n    ),\n    radial-gradient(\n      20.82% 39.68% at 37.22% 60.32%,\n      rgba(255, 66, 165, 0.2) 0%,\n      rgba(255, 66, 165, 0) 100%\n    ),\n    #0b0223;\n\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  color: white;\n  overflow: scroll;\n"]))), K = L.ZP.div(x || (x = R(["\n  @media only screen and (max-height: 500px) {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    .mobileErr.-landscape & {\n      height: calc(100vh + 65px);\n    }\n  }\n"], ["\n  @media only screen and (max-height: 500px) {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    .mobileErr.-landscape & {\n      height: calc(100vh + 65px);\n    }\n  }\n"]))), Q = (0,
        L.F4)(h || (h = R(["\n  0% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n"], ["\n  0% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n"]))), U = L.ZP.div(g || (g = R(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 24vh 0px 0px 0px;\n  visibility: hidden;\n  animation-name: ", ";\n  animation-duration: 0s;\n  animation-delay: 3.5s;\n  animation-fill-mode: forwards;\n  &.tokenErr {\n    padding: calc(19.23vh + 92px) 0px 0px 0px;\n  }\n  .mobileErr.-portrait & {\n    padding: 18.49vmax 0px 0px 0px;\n  }\n  .mobileErr.-portrait.errorCode & {\n    @media only screen and (max-height: 675px) {\n      padding: 20vmax 0px 0px 0px;\n    }\n  }\n  @media only screen and (max-height: 850px) {\n    padding: 27vh 0px 0px 0px;\n  }\n  .desktopErr & {\n    @media only screen and (max-height: 700px) {\n      transform: scale(0.9);\n    }\n    @media only screen and (max-height: 580px) {\n      transform: scale(0.7);\n      h2{\n        transform: scale(1.42);\n      }\n    }\n    @media only screen and (max-height: 500px) {\n      padding: 18vh 0px 0px 0px;\n      transform: scale(0.5);\n      h2{\n        transform: scale(2);\n      }\n    }\n    @media only screen and (max-height: 364px) {\n      padding: 16vh 0px 0px 0px;\n      transform: scale(0.4);\n      h2{\n        transform: scale(2);\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 24vh 0px 0px 0px;\n  visibility: hidden;\n  animation-name: ", ";\n  animation-duration: 0s;\n  animation-delay: 3.5s;\n  animation-fill-mode: forwards;\n  &.tokenErr {\n    padding: calc(19.23vh + 92px) 0px 0px 0px;\n  }\n  .mobileErr.-portrait & {\n    padding: 18.49vmax 0px 0px 0px;\n  }\n  .mobileErr.-portrait.errorCode & {\n    @media only screen and (max-height: 675px) {\n      padding: 20vmax 0px 0px 0px;\n    }\n  }\n  @media only screen and (max-height: 850px) {\n    padding: 27vh 0px 0px 0px;\n  }\n  .desktopErr & {\n    @media only screen and (max-height: 700px) {\n      transform: scale(0.9);\n    }\n    @media only screen and (max-height: 580px) {\n      transform: scale(0.7);\n      h2{\n        transform: scale(1.42);\n      }\n    }\n    @media only screen and (max-height: 500px) {\n      padding: 18vh 0px 0px 0px;\n      transform: scale(0.5);\n      h2{\n        transform: scale(2);\n      }\n    }\n    @media only screen and (max-height: 364px) {\n      padding: 16vh 0px 0px 0px;\n      transform: scale(0.4);\n      h2{\n        transform: scale(2);\n      }\n    }\n  }\n"])), Q), $ = (0,
        L.F4)(f || (f = R(["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  50% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: 19vh;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  50% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: 19vh;\n    opacity: 1;\n  }\n"]))), nn = (0,
        L.F4)(u || (u = R(["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  50% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: 11.9vmax;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  50% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: 11.9vmax;\n    opacity: 1;\n  }\n"]))), on = (0,
        L.F4)(b || (b = R(["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  50% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: 19.25vh;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  50% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: 19.25vh;\n    opacity: 1;\n  }\n"]))), tn = (0,
        L.F4)(y || (y = R(["\n  0% {\n    left: 50%;\n    opacity: 0;\n  }\n  15% {\n    left: 50%;\n    opacity: 1;\n  }\n  40% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n  100% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    left: 50%;\n    opacity: 0;\n  }\n  15% {\n    left: 50%;\n    opacity: 1;\n  }\n  40% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n  100% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n"]))), rn = L.ZP.div(w || (w = R(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n  animation-name: ", ";\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n  &.noResource {\n    animation-name: ", ";\n  }\n  .mobileErr.-portrait & {\n    animation-name: ", ";\n  }\n  .mobileErr.-landscape & {\n    animation-name: ", ";\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n  animation-name: ", ";\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n  &.noResource {\n    animation-name: ", ";\n  }\n  .mobileErr.-portrait & {\n    animation-name: ", ";\n  }\n  .mobileErr.-landscape & {\n    animation-name: ", ";\n  }\n"])), $, on, nn, tn), en = L.ZP.h2(v || (v = R(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  text-align: center;\n  &.noResource {\n    width: 348px;\n  }\n  .mobileErr.-portrait & {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .mobileErr.-portrait.errorCode & {\n    @media only screen and (max-height: 675px) {\n      line-height: 120%;\n    }\n  }\n  .mobileErr.-landscape & {\n    max-width: 36.1vmax;\n    text-align: left;\n  }\n"], ["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  text-align: center;\n  &.noResource {\n    width: 348px;\n  }\n  .mobileErr.-portrait & {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .mobileErr.-portrait.errorCode & {\n    @media only screen and (max-height: 675px) {\n      line-height: 120%;\n    }\n  }\n  .mobileErr.-landscape & {\n    max-width: 36.1vmax;\n    text-align: left;\n  }\n"]))), an = L.ZP.h2(k || (k = R(["\n  width: fit-content;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0px 0px 16px 0px;\n  padding: 4px 12px;\n  .mobileErr & {\n    margin: 0px 0px 8px 0px;\n  }\n"], ["\n  width: fit-content;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0px 0px 16px 0px;\n  padding: 4px 12px;\n  .mobileErr & {\n    margin: 0px 0px 8px 0px;\n  }\n"]))), pn = (0,
        L.F4)(C || (C = R(["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  10% {\n    top: 50%;\n    opacity: 1;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: calc(14.32vh);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 50%;\n    opacity: 0;\n  }\n  10% {\n    top: 50%;\n    opacity: 1;\n  }\n  30% {\n    top: 50%;\n    opacity: 1;\n  }\n  100% {\n    top: calc(14.32vh);\n    opacity: 1;\n  }\n"]))), ln = L.ZP.div(z || (z = R(["\n  width: 100%;\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    margin: 0px 0px 8px 0px;\n    text-align: center;\n    animation-name: ", ";\n  }\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n  animation-name: ", ";\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n"], ["\n  width: 100%;\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    margin: 0px 0px 8px 0px;\n    text-align: center;\n    animation-name: ", ";\n  }\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n  animation-name: ", ";\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n"])), nn, pn), dn = (0,
        L.F4)(E || (E = R(["\n  0% {\n    top: calc(50% + 24px);\n    opacity: 0;\n  }\n  10% {\n    top:calc(50% + 24px);\n    opacity: 0;\n  }\n  30% {\n    top: calc(50% + 24px);\n    opacity: 0;\n  }\n  55% {\n    top: calc(50%);\n    opacity: 1;\n  }\n  80% {\n    top: calc(50%);\n    opacity: 1;\n  }\n  100% {\n    top: calc(19.23vh + 26px);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: calc(50% + 24px);\n    opacity: 0;\n  }\n  10% {\n    top:calc(50% + 24px);\n    opacity: 0;\n  }\n  30% {\n    top: calc(50% + 24px);\n    opacity: 0;\n  }\n  55% {\n    top: calc(50%);\n    opacity: 1;\n  }\n  80% {\n    top: calc(50%);\n    opacity: 1;\n  }\n  100% {\n    top: calc(19.23vh + 26px);\n    opacity: 1;\n  }\n"]))), cn = L.ZP.div(q || (q = R(["\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /*animation-name: ", ";*/\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n  p {\n    color: ", ";\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    margin: 0px 0px 16px 0px;\n  }\n  .mobileErr.-landscape & {\n    position: static;\n    transform: translate(0%, 0%);\n    display: block;\n    align-items: left;\n    p {\n      font-size: 14px;\n    }\n    div {\n      margin: 0px 0px 16px 0px;\n    }\n  }\n"], ["\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /*animation-name: ", ";*/\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n  p {\n    color: ", ";\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    margin: 0px 0px 16px 0px;\n  }\n  .mobileErr.-landscape & {\n    position: static;\n    transform: translate(0%, 0%);\n    display: block;\n    align-items: left;\n    p {\n      font-size: 14px;\n    }\n    div {\n      margin: 0px 0px 16px 0px;\n    }\n  }\n"])), dn, (function(n) {
            return n.theme.colors.blue
        }
        )), sn = (0,
        L.F4)(P || (P = R(["\n  0% {\n    left: 50%;\n    opacity: 0;\n  }\n  15% {\n    left: 50%;\n    opacity: 1;\n  }\n  40% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n  100% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    left: 50%;\n    opacity: 0;\n  }\n  15% {\n    left: 50%;\n    opacity: 1;\n  }\n  40% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n  100% {\n    left: 25.05vmax;\n    opacity: 1;\n  }\n"]))), mn = L.ZP.h2(Z || (Z = R(["\n  margin: 0px 0px 24px 0px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: ", ";\n  &.tokenErr {\n    margin: 0px 0px 16px 0px;\n  }\n  .mobileErr.-portrait & {\n    margin: 0px 16px 40px 16px;\n    &.tokenErr {\n      margin: 50px 16px 40px 16px;\n    }\n  }\n  .mobileErr.-portrait.errorCode & {\n    @media only screen and (max-height: 675px) {\n      margin: 0px 16px 20px 16px;\n    }\n\n  }\n  .mobileErr.-landscape & {\n    max-width: 36.1vmax;\n    /*animation-name: ", ";*/\n    text-align: left;\n\n    position: absolute;\n    top: 50%;\n    left: 25.05vmax;\n    transform: translate(-50%, -50%);\n    z-index: 9;\n    /*animation-name: ", ";*/\n    animation-duration: 3s;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  margin: 0px 0px 24px 0px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: ", ";\n  &.tokenErr {\n    margin: 0px 0px 16px 0px;\n  }\n  .mobileErr.-portrait & {\n    margin: 0px 16px 40px 16px;\n    &.tokenErr {\n      margin: 50px 16px 40px 16px;\n    }\n  }\n  .mobileErr.-portrait.errorCode & {\n    @media only screen and (max-height: 675px) {\n      margin: 0px 16px 20px 16px;\n    }\n\n  }\n  .mobileErr.-landscape & {\n    max-width: 36.1vmax;\n    /*animation-name: ", ";*/\n    text-align: left;\n\n    position: absolute;\n    top: 50%;\n    left: 25.05vmax;\n    transform: translate(-50%, -50%);\n    z-index: 9;\n    /*animation-name: ", ";*/\n    animation-duration: 3s;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.theme.colors.white60
        }
        ), tn, sn), xn = (0,
        L.F4)(j || (j = R(["\n  0% {\n    top: 60vmin;\n    opacity: 0;\n  }\n  100% {\n    top: calc(50% - 35px);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 60vmin;\n    opacity: 0;\n  }\n  100% {\n    top: calc(50% - 35px);\n    opacity: 1;\n  }\n"]))), hn = L.ZP.div(O || (O = R(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 0px 186px;\n  margin: 0px 0px 20px 0px;\n  gap: 16px;\n  .mobileErr.-portrait & {\n    flex-wrap: wrap;\n    padding: 0px 4vmin;\n    gap: 3vmin;\n  }\n  .mobileErr.-landscape & {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    padding: 0px 4vmin;\n    gap: 2vmax;\n    width: 46vmax;\n    padding: 0px 0px;\n    position: absolute;\n    right: 7vmax;\n    top: 40vmin;\n    transform: translateY(-50%);\n    animation-name: ", ";\n    animation-delay: 1s;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n  .desktopErr & {\n    @media only screen and (max-width: 900px) {\n      transform: scale(0.7);\n      margin: 0px 0px 0px 0px;\n    }\n    @media only screen and (max-width: 650px) {\n      transform: scale(0.5);\n      margin: 0px 0px 0px 0px;\n    }\n    @media only screen and (max-width: 450px) {\n      transform: scale(0.3);\n      margin: 0px 0px 0px 0px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 0px 186px;\n  margin: 0px 0px 20px 0px;\n  gap: 16px;\n  .mobileErr.-portrait & {\n    flex-wrap: wrap;\n    padding: 0px 4vmin;\n    gap: 3vmin;\n  }\n  .mobileErr.-landscape & {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    padding: 0px 4vmin;\n    gap: 2vmax;\n    width: 46vmax;\n    padding: 0px 0px;\n    position: absolute;\n    right: 7vmax;\n    top: 40vmin;\n    transform: translateY(-50%);\n    animation-name: ", ";\n    animation-delay: 1s;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n  .desktopErr & {\n    @media only screen and (max-width: 900px) {\n      transform: scale(0.7);\n      margin: 0px 0px 0px 0px;\n    }\n    @media only screen and (max-width: 650px) {\n      transform: scale(0.5);\n      margin: 0px 0px 0px 0px;\n    }\n    @media only screen and (max-width: 450px) {\n      transform: scale(0.3);\n      margin: 0px 0px 0px 0px;\n    }\n  }\n"])), xn), gn = L.ZP.div(N || (N = R(["\n  position: absolute;\n  padding: 0px 13px 13px 13px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.16) 26.04%,\n    rgba(0, 0, 0, 0.6) 57.81%,\n    rgba(0, 0, 0, 0.88) 100%\n  );\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  cursor:pointer;\n\n  p {\n    font-weight: 600;\n    font-size: 13.2388px;\n    line-height: 150%;\n  }\n  div {\n    width: 100%;\n    max-height: 26.48px;\n    background: ", ";\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);\n    border-radius: ", ";\n    font-weight: 600;\n    font-size: 11.0324px;\n    padding: 5px;\n    cursor: pointer;\n    text-align: center;\n  }\n"], ["\n  position: absolute;\n  padding: 0px 13px 13px 13px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.16) 26.04%,\n    rgba(0, 0, 0, 0.6) 57.81%,\n    rgba(0, 0, 0, 0.88) 100%\n  );\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  cursor:pointer;\n\n  p {\n    font-weight: 600;\n    font-size: 13.2388px;\n    line-height: 150%;\n  }\n  div {\n    width: 100%;\n    max-height: 26.48px;\n    background: ", ";\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);\n    border-radius: ", ";\n    font-weight: 600;\n    font-size: 11.0324px;\n    padding: 5px;\n    cursor: pointer;\n    text-align: center;\n  }\n"])), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), fn = (0,
        L.F4)(S || (S = R(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))), un = L.ZP.div(F || (F = R(["\n  position: relative;\n  backdrop-filter: blur(12px);\n  border-radius: ", ";\n  display: flex;\n\n  .imgContainer {\n    position: relative;\n    border-radius: ", ";\n    width: 165px;\n    height: 220px;\n    overflow: hidden;\n    .mobileErr.-portrait & {\n      width: 28vmin;\n      height: 37.49vmin;\n    }\n    .mobileErr.-landscape & {\n      width: 20.9vmin;\n      height: 28vmin;\n    }\n  }\n\n  .imgBorder {\n      width: 100%;\n      height: 100%;\n      border: ", ";\n      border-radius: ", ";\n      position: absolute;\n      pointer-events: none;\n    }\n\n  &:before {\n    content: '';\n    background: rgb(255, 66, 165);\n    filter: blur(8px);\n    position: absolute;\n    height: calc(100% + 2px);\n    width: calc(100% + 2px);\n    border-radius: ", ";\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:hover {\n    &:before {\n      opacity: 1;\n      animation-name: ", ";\n      animation-duration: 1s;\n      animation-fill-mode: forwards;\n    }\n    .tileContent {\n      opacity: 1;\n    }\n\n    .imgBorder {\n      border: ", ";\n    }\n  }\n  .mobileErr.-landscape & {\n    img {\n      width: unset;\n      height: 28vmin;\n    }\n  }\n"], ["\n  position: relative;\n  backdrop-filter: blur(12px);\n  border-radius: ", ";\n  display: flex;\n\n  .imgContainer {\n    position: relative;\n    border-radius: ", ";\n    width: 165px;\n    height: 220px;\n    overflow: hidden;\n    .mobileErr.-portrait & {\n      width: 28vmin;\n      height: 37.49vmin;\n    }\n    .mobileErr.-landscape & {\n      width: 20.9vmin;\n      height: 28vmin;\n    }\n  }\n\n  .imgBorder {\n      width: 100%;\n      height: 100%;\n      border: ", ";\n      border-radius: ", ";\n      position: absolute;\n      pointer-events: none;\n    }\n\n  &:before {\n    content: '';\n    background: rgb(255, 66, 165);\n    filter: blur(8px);\n    position: absolute;\n    height: calc(100% + 2px);\n    width: calc(100% + 2px);\n    border-radius: ", ";\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:hover {\n    &:before {\n      opacity: 1;\n      animation-name: ", ";\n      animation-duration: 1s;\n      animation-fill-mode: forwards;\n    }\n    .tileContent {\n      opacity: 1;\n    }\n\n    .imgBorder {\n      border: ", ";\n    }\n  }\n  .mobileErr.-landscape & {\n    img {\n      width: unset;\n      height: 28vmin;\n    }\n  }\n"])), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), fn, (function(n) {
            return n.theme.border.base7
        }
        )), bn = (0,
        L.F4)(D || (D = R(["\n  0% {\n    top: 40%;\n    left: 50%;\n    opacity: 0;\n  }\n  50% {\n    top: 40%;\n    left: 7vmax;\n    transform: translateX(0%);\n    opacity: 1;\n  }\n  100% {\n    top: calc(50% - 32px);\n    left: 7vmax;\n    transform: translateX(0%);\n    transform: translateY(-50%);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 40%;\n    left: 50%;\n    opacity: 0;\n  }\n  50% {\n    top: 40%;\n    left: 7vmax;\n    transform: translateX(0%);\n    opacity: 1;\n  }\n  100% {\n    top: calc(50% - 32px);\n    left: 7vmax;\n    transform: translateX(0%);\n    transform: translateY(-50%);\n    opacity: 1;\n  }\n"]))), yn = (0,
        L.F4)(H || (H = R(["\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), wn = L.ZP.div(B || (B = R(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 36vmax;\n  animation-name: ", ";\n  animation-duration: 2s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n  h2 {\n    margin: 0px 0px 16px 0px;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 150%;\n  }\n  h3 {\n    margin: 0px 0px 24px 0px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    color: ", ";;\n    opacity: 0;\n    animation-name: ", ";\n    animation-delay: 1s;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 36vmax;\n  animation-name: ", ";\n  animation-duration: 2s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n  h2 {\n    margin: 0px 0px 16px 0px;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 150%;\n  }\n  h3 {\n    margin: 0px 0px 24px 0px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    color: ", ";;\n    opacity: 0;\n    animation-name: ", ";\n    animation-delay: 1s;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n  }\n"])), bn, (function(n) {
            return n.theme.colors.white60
        }
        ), yn), vn = L.ZP.div(X || (X = R(["\n  z-index: 2;\n  background: #000;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &::before {\n    content: '';\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  }\n"], ["\n  z-index: 2;\n  background: #000;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &::before {\n    content: '';\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  }\n"]))), kn = L.ZP.div(Y || (Y = R(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  color: ", ";\n  background: ", ";\n  margin-bottom: inherit;\n  div {\n    margin: ", ";\n    width: 380px;\n    max-width: 100%;\n    padding: 0 16px;\n  }\n  button {\n    margin-top: ", ";\n    width: 380px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  color: ", ";\n  background: ", ";\n  margin-bottom: inherit;\n  div {\n    margin: ", ";\n    width: 380px;\n    max-width: 100%;\n    padding: 0 16px;\n  }\n  button {\n    margin-top: ", ";\n    width: 380px;\n  }\n"])), (function(n) {
            return n.theme.colors.black
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.spacing.base8
        }
        ), (function(n) {
            return n.theme.spacing.base2
        }
        )), Cn = L.ZP.div(A || (A = R(["\n  animation-name: ", ";\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: 5s;\n  display: flex;\n  gap: 16px;\n\n  ", "\n\n  button {\n    width: ", "\n  }\n\n  &.noAnimation {\n    animation: none;\n  }\n\n  .mobileErr.-portrait & button {\n    width: 92.27vmin;\n    animation-duration: 4s;\n  }\n"], ["\n  animation-name: ", ";\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: 5s;\n  display: flex;\n  gap: 16px;\n\n  ", "\n\n  button {\n    width: ", "\n  }\n\n  &.noAnimation {\n    animation: none;\n  }\n\n  .mobileErr.-portrait & button {\n    width: 92.27vmin;\n    animation-duration: 4s;\n  }\n"])), _, (function(n) {
            var o = n.isMobile
              , t = n.theme;
            return o && (0,
            L.iv)(W || (W = R(["\n    flex-direction: column;\n    button:first-child {\n      background: ", ";\n      color: ", ";\n    }\n  "], ["\n    flex-direction: column;\n    button:first-child {\n      background: ", ";\n      color: ", ";\n    }\n  "])), t.colors.base50, t.colors.ascent)
        }
        ), (function(n) {
            return n.isMobile ? "160px" : "195px"
        }
        ))
    }
}]);
//# sourceMappingURL=804-c8e3058f86755a30.js.map
