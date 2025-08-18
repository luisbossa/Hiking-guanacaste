(function(g) {
    var window = this;
    'use strict';
    var tz = function(k) {
            k.publish("cardstatechange", k.x_() && k.Sy() ? 1 : 0)
        },
        Ps = function(k, l) {
            var r = g.FT(l),
                M = r ? l : arguments;
            for (r = r ? 0 : 1; r < M.length; r++) {
                if (k == null) return;
                k = k[M[r]]
            }
            return k
        },
        tx_ = function(k) {
            var l = g.lA(k);
            k = g.Uj(k);
            return new g.N0(l.x, l.y, k.width, k.height)
        },
        Pu$ = function(k, l, r) {
            var M = M === void 0 ? {} : M;
            var U;
            return U = g.jk(k, l, function() {
                g.hV(U);
                r.apply(k, arguments)
            }, M)
        },
        Hs = function(k) {
            k = g.cq(k);
            delete Cq[k];
            g.us(Cq) && di && di.stop()
        },
        duO = function() {
            di || (di = new g.xn(function() {
                Cu9()
            }, 20));
            var k = di;
            k.isActive() || k.start()
        },
        Cu9 = function() {
            var k = g.uO();
            g.ls(Cq, function(l) {
                HNq(l, k)
            });
            g.us(Cq) || duO()
        },
        Bs = function(k, l, r, M) {
            g.Is.call(this);
            if (!Array.isArray(k) || !Array.isArray(l)) throw Error("Start and end parameters must be arrays");
            if (k.length != l.length) throw Error("Start and end points must be the same length");
            this.U = k;
            this.K = l;
            this.duration = r;
            this.N = M;
            this.coords = [];
            this.progress = this.Y = 0;
            this.L = null
        },
        HNq = function(k, l) {
            l < k.startTime && (k.endTime = l + k.endTime - k.startTime, k.startTime = l);
            k.progress = (l - k.startTime) / (k.endTime - k.startTime);
            k.progress > 1 && (k.progress = 1);
            k.Y = 1E3 / (l - k.L);
            k.L = l;
            BbT(k, k.progress);
            k.progress == 1 ? (k.T = 0, Hs(k), k.onFinish(), k.WR()) : k.isPlaying() && k.Te()
        },
        BbT = function(k, l) {
            typeof k.N === "function" && (l = k.N(l));
            k.coords = Array(k.U.length);
            for (var r = 0; r < k.U.length; r++) k.coords[r] = (k.K[r] - k.U[r]) * l + k.U[r]
        },
        bN3 = function(k, l) {
            g.T7.call(this, k);
            this.coords = l.coords;
            this.x = l.coords[0];
            this.y = l.coords[1];
            this.z = l.coords[2];
            this.duration = l.duration;
            this.progress = l.progress;
            this.fps = l.Y;
            this.state = l.T
        },
        bp = function(k, l, r, M, U) {
            Bs.call(this, l, r, M, U);
            this.element = k
        },
        qwi = function(k, l, r, M, U) {
            if (l.length != 2 || r.length != 2) throw Error("Start and end points must be 2D");
            bp.call(this, k, l, r, M, U)
        },
        QB5 = function(k) {
            return Math.pow(k, 3)
        },
        iNO = function(k) {
            return 3 * k * k - 2 * k * k * k
        },
        ndp = function(k) {
            g.Q.call(this);
            this.U = k || window;
            this.T = []
        },
        qt = function(k) {
            return k.baseUrl || null
        },
        Q1 = function(k, l) {
            return g.Pe(g.a0(k, l), function(r) {
                return !!r
            })
        },
        Ky5 = function(k, l, r) {
            function M(ca) {
                var Fi = ca.hovercardButton;
                if (!Fi) return null;
                Fi = Fi.subscribeButtonRenderer;
                if (!Fi) return null;
                var Ya = m(Fi.unsubscribedButtonText),
                    ln = m(Fi.subscribedButtonText);
                if (Fi.subscribed) {
                    var tn = m(Fi.subscriberCountWithUnsubscribeText);
                    var Ov = m(Fi.subscriberCountText)
                } else tn = m(Fi.subscriberCountText), Ov = m(Fi.subscriberCountWithSubscribeText);
                var Mx = null;
                if (ca.signinEndpoint) {
                    Mx = Ps(ca, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!Mx) {
                        var a$, E9;
                        Mx = (E9 = g.N((a$ = Fi.signInEndpoint) == null ? void 0 : a$.commandMetadata, g.Xe)) == null ?
                            void 0 : E9.url
                    }
                    if (!Mx) return null
                }
                return Ya && (ln || Mx) ? {
                    subscribed: Fi.subscribed,
                    subscribeText: Ya,
                    subscribeCount: tn,
                    unsubscribeText: ln,
                    unsubscribeCount: Ov,
                    enabled: Fi.enabled,
                    signinUrl: Mx,
                    classic: ca.useClassicSubscribeButton
                } : null
            }

            function U(ca) {
                if (ca) {
                    var Fi = [],
                        Ya = ca.videoId;
                    Ya && Fi.push("v=" + Ya);
                    (Ya = ca.playlistId) && Fi.push("list=" + Ya);
                    (ca = ca.startTimeSeconds) && Fi.push("t=" + ca);
                    return "/watch?" + Fi.join("&")
                }
            }

            function m(ca) {
                if (!ca) return null;
                var Fi = ca.simpleText;
                return Fi ? Fi : ca.runs ? g.a0(ca.runs, function(Ya) {
                    return Ya.text
                }).join("") : null
            }
            l = l.endscreenElementRenderer;
            if (!l) return null;
            var F = l.style,
                Y = l.endpoint || {},
                c = null,
                E = null,
                f = !1,
                R = null,
                J = null,
                u = null,
                e = null,
                X = !1,
                V = null,
                t = null,
                W = null,
                d = null,
                q = null,
                z = null;
            if (F === "VIDEO") g.N(Y, g.dS) ? c = g.N(Y, g.dS).url : (z = g.N(Y, g.wO), c = U(z)), E = !1, R = k, l.thumbnailOverlays ? (f = l.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, J = m(f.text), f = f.style === "LIVE") : J = m(l.videoDuration);
            else if (F === "PLAYLIST") g.N(Y, g.dS) ? c = g.N(Y, g.dS).url : (z = g.N(Y, g.wO), c = U(z)), E = !1, R = k, u = m(l.playlistLength);
            else if (F ===
                "CHANNEL") {
                if (X = Ps(Y, "browseEndpoint", "browseId")) e = X, c = "/channel/" + e;
                E = !1;
                R = "new";
                (X = !!l.isSubscribe) ? V = M(l): t = m(l.subscribersText)
            } else F === "WEBSITE" ? ((W = Ps(Y, "urlEndpoint", "url")) && (c = W), E = !0, R = "new", W = l.icon.thumbnails[0].url) : F === "CREATOR_MERCHANDISE" && (l.productPrice && (d = m(l.productPrice)), l.additionalFeesText && (q = m(l.additionalFeesText)), (E = Ps(Y, "urlEndpoint", "url")) && (c = E), E = !0, R = "new");
            k = Ps(l, "title", "accessibility", "accessibilityData", "label");
            var G = l.endpoint ? l.endpoint.clickTrackingParams :
                null,
                v = "";
            if (l.metadata) {
                var IH = m(l.metadata);
                IH && (v = IH)
            }
            return {
                id: "element-" + r,
                type: F,
                title: m(l.title),
                metadata: v,
                callToAction: m(l.callToAction),
                QB: l.image,
                iconUrl: W,
                left: Number(l.left),
                width: Number(l.width),
                top: Number(l.top),
                aspectRatio: Number(l.aspectRatio),
                startMs: Math.floor(Number(l.startMs)),
                endMs: Math.floor(Number(l.endMs)),
                videoDuration: J,
                xB: f,
                playlistLength: u,
                channelId: e,
                subscribeButton: V,
                subscribersText: t,
                isSubscribe: X,
                targetUrl: c || null,
                EH: E,
                sessionData: G ? {
                    itct: G
                } : null,
                MLs: R,
                Uq: k ? k : null,
                isPlaceholder: l.isPlaceholder,
                impressionUrls: Q1(l.impressionUrls || [], qt),
                OH: Q1(l.hovercardShowUrls || [], qt),
                clickUrls: Q1(Y.loggingUrls || [], qt),
                visualElement: g.eu(l.trackingParams),
                productPrice: d,
                additionalFeesText: q,
                watchEndpoint: z || null
            }
        },
        z69 = function(k, l) {
            var r = {
                startMs: Math.floor(Number(k.startMs)),
                impressionUrls: Q1(k.impressionUrls || [], qt),
                elements: Q1(k.elements || [], function(M, U) {
                    return Ky5(l, M, U)
                })
            };
            k.trackingParams && (r.visualElement = g.eu(k.trackingParams));
            return r
        },
        gdi = function(k) {
            g.Zg.call(this, k);
            this.L = this.endscreen = null;
            this.U = {};
            this.Y = {};
            this.N = this.G = null;
            this.Z = [];
            this.T = null;
            this.vn = !0;
            this.K = 0;
            k = k.B();
            this.V = g.Fu(k) || g.Y4(k);
            this.events = new g.yL(this);
            g.n(this, this.events);
            this.events.W(this.player, g.Tn("creatorendscreen"), this.onCueRangeEnter);
            this.events.W(this.player, g.v0("creatorendscreen"), this.onCueRangeExit);
            this.events.W(this.player, "resize", this.XY);
            this.events.W(window, "focus", this.M4Q);
            this.load();
            var l = g.p5("STYLE");
            (g.It("HEAD")[0] || document.body).appendChild(l);
            this.addOnDisposeCallback(function() {
                g.XZ(l)
            });
            l.sheet && (l.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), l.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        Nb0 = function(k) {
            return k.player.getVideoData().ox ? "current" : k.V ? "new" : "current"
        },
        ip = function(k) {
            return k.player.B().playerStyle === "creator-endscreen-editor"
        },
        xux = function(k) {
            var l = k.player.getVideoData(),
                r = l.videoId;
            k.L && k.L.abort();
            r = {
                method: "POST",
                onFinish: function(U) {
                    var m = k.L = null;
                    U.status === 200 && (U = U.responseText, U.substring(0, 3) === ")]}" && (U = U.substring(3), m = JSON.parse(U), m = z69(m, Nb0(k))));
                    nq(k, m)
                },
                urlParams: {
                    v: r
                },
                withCredentials: !0
            };
            k.V && (r.urlParams.ptype = "embedded");
            var M = l.j0;
            M && (r.postParams = {
                ad_tracking: M
            });
            if (l = g.Lsi(l))
                if (l = g.Yt(l), l = g.mj(l)) k.L = g.Sw(l, r)
        },
        nq = function(k, l, r) {
            r = r === void 0 ? !0 : r;
            k.player.j4("creatorendscreen");
            k.G && (k.G.dispose(), k.G = null, k.N.dispose(), k.N = null);
            for (var M = g.S(Object.values(k.U)), U = M.next(); !U.done; U = M.next()) U.value.dispose();
            k.U = {};
            k.Y = {};
            k.Z.length > 0 && (k.Z.forEach(function(Y) {
                Y.dispose()
            }), k.Z.length = 0);
            k.T && (g.os(k.T, "ytp-ce-element-show"), k.T.setAttribute("aria-hidden", "true"));
            k.K = 0;
            if ((k.endscreen = l) && l.elements) {
                r && Lyx(k);
                r = [];
                M = new g.xQ(l.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                r.push(M);
                k.player.B().U || (k.G = new g.x({
                    S: "div",
                    j: "ytp-ce-shadow"
                }), g.DS(k.player, k.G.element, 4), k.N = new g.sQ(k.G, 200));
                for (M = 0; M < l.elements.length; ++M) {
                    U = l.elements[M];
                    var m = Tbx(k, U);
                    if (m) {
                        k.U[U.id] = m;
                        k.Y[U.id] = U;
                        g.DS(k.player, m.element, 4);
                        var F = new g.xQ(U.startMs, U.endMs, {
                            id: "ytp-ce-element-" +
                                U.id,
                            namespace: "creatorendscreen"
                        });
                        r.push(F);
                        vd0(k, m, U)
                    } else g.WD(new g.zj("buildEndscreenElement null", U))
                }
                k.player.WF(r);
                k.XY()
            }
        },
        Lyx = function(k) {
            var l = g.ju(),
                r = g.h8();
            r && l && k.endscreen.visualElement && g.vY(g.KS)(void 0, r, l, k.endscreen.visualElement)
        },
        Tbx = function(k, l) {
            var r = null;
            switch (l.type) {
                case "VIDEO":
                    k = {
                        S: "div",
                        RB: ["ytp-ce-element", "ytp-ce-video"],
                        X: {
                            tabindex: "0",
                            "aria-label": l.Uq || "",
                            "aria-hidden": "true"
                        },
                        C: [{
                            S: "div",
                            j: "ytp-ce-element-shadow"
                        }, {
                            S: "div",
                            j: "ytp-ce-covering-image",
                            X: Kq(l)
                        }, {
                            S: "div",
                            j: "ytp-ce-covering-shadow-top"
                        }, {
                            S: "a",
                            j: "ytp-ce-covering-overlay",
                            X: {
                                href: zU(k, l.targetUrl),
                                tabindex: "-1"
                            },
                            C: [{
                                S: "div",
                                RB: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.Rs(l.title || "")
                                },
                                wQ: l.title
                            }, {
                                S: "div",
                                j: l.xB ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                wQ: l.videoDuration || void 0
                            }]
                        }]
                    };
                    r = new g.x(k);
                    break;
                case "PLAYLIST":
                    k = {
                        S: "div",
                        RB: ["ytp-ce-element", "ytp-ce-playlist"],
                        X: {
                            tabindex: "0",
                            "aria-label": l.Uq || "",
                            "aria-hidden": "true"
                        },
                        C: [{
                            S: "div",
                            j: "ytp-ce-element-shadow"
                        }, {
                            S: "div",
                            j: "ytp-ce-covering-image",
                            X: Kq(l)
                        }, {
                            S: "div",
                            j: "ytp-ce-covering-shadow-top"
                        }, {
                            S: "a",
                            j: "ytp-ce-covering-overlay",
                            X: {
                                href: zU(k, l.targetUrl),
                                tabindex: "-1"
                            },
                            C: [{
                                S: "div",
                                RB: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.Rs(l.title || "")
                                },
                                wQ: l.title
                            }, {
                                S: "div",
                                j: "ytp-ce-playlist-count",
                                C: [{
                                    S: "div",
                                    j: "ytp-ce-playlist-icon"
                                }, {
                                    S: "div",
                                    j: "ytp-ce-playlist-count-text",
                                    wQ: l.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    r = new g.x(k);
                    break;
                case "CHANNEL":
                    r = {
                        S: "div",
                        RB: ["ytp-ce-element", "ytp-ce-channel", l.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        X: {
                            tabindex: "0",
                            "aria-label": l.Uq || "",
                            "aria-hidden": "true"
                        },
                        C: [{
                            S: "div",
                            j: "ytp-ce-element-shadow"
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-overlay",
                            C: [{
                                S: "div",
                                j: "ytp-ce-expanding-overlay-hider"
                            }, {
                                S: "div",
                                j: "ytp-ce-expanding-overlay-background"
                            }, {
                                S: "div",
                                j: "ytp-ce-expanding-overlay-content",
                                C: [{
                                    S: "div",
                                    j: "ytp-ce-expanding-overlay-body",
                                    C: [{
                                        S: "div",
                                        j: "ytp-ce-expanding-overlay-body-padding",
                                        C: [{
                                            S: "a",
                                            RB: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            X: {
                                                href: zU(k, l.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.Rs(l.title || "")
                                            },
                                            wQ: l.title
                                        }, l.subscribeButton ? {
                                            S: "div",
                                            j: "ytp-ce-subscribe-container",
                                            C: [{
                                                S: "div",
                                                j: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", l.subscribersText ? {
                                            S: "div",
                                            j: "ytp-ce-channel-subscribers-text",
                                            wQ: l.subscribersText
                                        } : "", l.metadata ? {
                                            S: "div",
                                            RB: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            wQ: l.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-image",
                            X: Kq(l)
                        }]
                    };
                    r = new g.x(r);
                    var M = g.cn(document, "div", "ytp-ce-channel-subscribe", r.element)[0];
                    if (l.subscribeButton && l.channelId) {
                        g.MY(M, "ytp-ce-subscribe-button");
                        if (k.player.B().U) {
                            var U = null;
                            var m = l.sessionData.itct
                        } else U = "endscreen", m = null;
                        U = new g.ox(l.subscribeButton.subscribeText, l.subscribeButton.subscribeCount, l.subscribeButton.unsubscribeText, l.subscribeButton.unsubscribeCount, !!l.subscribeButton.enabled, !!l.subscribeButton.classic,
                            l.channelId, !!l.subscribeButton.subscribed, U, m, k.player, !1);
                        M.appendChild(U.element);
                        k.Z.push(U)
                    }
                    break;
                case "WEBSITE":
                    k = {
                        S: "div",
                        RB: ["ytp-ce-element", "ytp-ce-website"],
                        X: {
                            tabindex: "0",
                            "aria-label": l.Uq || "",
                            "aria-hidden": "true"
                        },
                        C: [{
                            S: "div",
                            j: "ytp-ce-element-shadow"
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-overlay",
                            C: [{
                                S: "div",
                                j: "ytp-ce-expanding-overlay-hider"
                            }, {
                                S: "div",
                                j: "ytp-ce-expanding-overlay-background"
                            }, {
                                S: "div",
                                j: "ytp-ce-expanding-overlay-content",
                                C: [{
                                    S: "div",
                                    j: "ytp-ce-expanding-overlay-body",
                                    C: [{
                                        S: "div",
                                        j: "ytp-ce-expanding-overlay-body-padding",
                                        C: [{
                                            S: "div",
                                            j: "ytp-ce-website-title",
                                            X: {
                                                dir: g.Rs(l.title || "")
                                            },
                                            wQ: l.title
                                        }, {
                                            S: "div",
                                            j: "ytp-ce-website-metadata",
                                            wQ: l.metadata
                                        }, {
                                            S: "a",
                                            RB: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            X: {
                                                href: zU(k, l.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            wQ: l.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-image",
                            X: Kq(l)
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-icon",
                            X: AZq(l.iconUrl)
                        }]
                    };
                    r = new g.x(k);
                    break;
                case "CREATOR_MERCHANDISE":
                    r = "", l.productPrice && (r = {
                        S: "div",
                        j: "ytp-ce-merchandise-price-container",
                        C: [{
                            S: "div",
                            j: "ytp-ce-merchandise-price",
                            wQ: l.productPrice
                        }]
                    }, l.additionalFeesText && r.C.push({
                        S: "div",
                        j: "ytp-ce-merchandise-additional-fees",
                        wQ: l.additionalFeesText
                    })), k = {
                        S: "div",
                        RB: ["ytp-ce-element", "ytp-ce-merchandise"],
                        X: {
                            tabindex: "0",
                            "aria-label": l.Uq || "",
                            "aria-hidden": "true"
                        },
                        C: [{
                            S: "div",
                            j: "ytp-ce-element-shadow"
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-overlay",
                            C: [{
                                S: "div",
                                j: "ytp-ce-expanding-overlay-hider"
                            }, {
                                S: "div",
                                j: "ytp-ce-expanding-overlay-background"
                            }, {
                                S: "div",
                                j: "ytp-ce-expanding-overlay-content",
                                C: [{
                                    S: "div",
                                    j: "ytp-ce-expanding-overlay-body",
                                    C: [{
                                        S: "div",
                                        j: "ytp-ce-expanding-overlay-body-padding",
                                        C: [{
                                            S: "div",
                                            j: "ytp-ce-merchandise-title",
                                            X: {
                                                dir: g.Rs(l.title || "")
                                            },
                                            wQ: l.title
                                        }, r, {
                                            S: "div",
                                            j: "ytp-ce-merchandise-metadata",
                                            wQ: l.metadata
                                        }, {
                                            S: "a",
                                            RB: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            X: {
                                                href: zU(k, l.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            wQ: l.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            S: "div",
                            j: "ytp-ce-expanding-image",
                            X: Kq(l)
                        }, {
                            S: "div",
                            j: "ytp-ce-merchandise-invideo-cta-container",
                            C: [{
                                S: "div",
                                j: "ytp-ce-merchandise-invideo-cta",
                                wQ: l.callToAction || void 0
                            }]
                        }]
                    }, r = new g.x(k)
            }
            l.isPlaceholder && g.MY(r.element, "ytp-ce-placeholder");
            return r
        },
        Kq = function(k) {
            if (k.QB) var l = k.QB.thumbnails;
            return AZq(l ? l[l.length - 1].url : null)
        },
        AZq = function(k) {
            return k ? {
                style: "background-image: url(" + k + ")"
            } : {}
        },
        vd0 = function(k, l, r) {
            function M(c) {
                c && (l.listen("blur", function() {
                    c.style.display != "none" && k.vn && c.focus()
                }), l.W(c, "focus", m), l.W(c, "blur", F))
            }

            function U(c) {
                k.K += c;
                k.K > 0 ? (g.MY(l.element, "ytp-ce-force-expand"), gi(k, r.id, !0)) : (g.os(l.element, "ytp-ce-force-expand"), g.os(l.element, "ytp-ce-element-hover"), gi(k, r.id, !1))
            }

            function m() {
                U(1)
            }

            function F() {
                U(-1)
            }
            l.listen("mouseenter", function() {
                GZO(k, l, r)
            });
            l.listen("mouseleave", function() {
                sBO(k, l, r)
            });
            k.player.B().U || l.listen("click", function() {
                g.MY(l.element, "ytp-ce-element-hover")
            });
            l.listen("click", function(c) {
                ON3(k, r, c)
            });
            l.listen("keypress", function(c) {
                ON3(k, r, c)
            });
            l.listen("focus", function() {
                GZO(k, l, r)
            });
            l.listen("blur", function() {
                sBO(k, l, r)
            });
            l.listen("touchstart", function() {
                GZO(k, l, r)
            });
            var Y = g.E1("ytp-ce-expanding-overlay-hider", l.element);
            Y && l.W(Y, "touchstart", function(c) {
                c.stopPropagation();
                g.os(l.element, "ytp-ce-element-hover");
                g.os(l.element, "ytp-ce-force-expand")
            });
            l.listen("keydown", function(c) {
                k.vn = c.keyCode === 9 && !c.shiftKey
            });
            M(g.E1("ytp-sb-subscribe", l.element));
            M(g.E1("ytp-sb-unsubscribe", l.element));
            l.listen("focus", m);
            l.listen("blur", F)
        },
        ON3 = function(k, l, r) {
            if (l.targetUrl && (!r || r.type !== "keypress" || r.keyCode === 13)) {
                for (var M = r.target; M && !g.rW(M, "ytp-ce-element");) {
                    g.rW(M, "subscribe-label") && DuT(k, l);
                    if (g.rW(M, "ytp-ce-channel-subscribe")) return;
                    M = M.parentElement || null
                }
                if (!M || g.rW(M, "ytp-ce-element-hover")) {
                    r.preventDefault();
                    r.stopPropagation();
                    if (M = k.U[l.id]) sBO(k, M, l), M.element.blur();
                    if (r.ctrlKey || r.metaKey || l.MLs === "new") DuT(k, l), k.player.sendVideoStatsEngageEvent(17, void 0), k.player.pauseVideo(), r = g.Yt(zU(k, l.targetUrl)), r = g.mj(r), g.nZ(r, void 0, l.sessionData);
                    else {
                        var U = g.Xu(k.player.B()) || k.player.getVideoData().ox,
                            m = function() {
                                var F = zU(k, l.targetUrl),
                                    Y = l.sessionData,
                                    c = l.watchEndpoint,
                                    E =
                                    g.kh(F);
                                U && E && (E.v || E.list) ? k.player.cA(E.v, Y, E.list, !1, void 0, c || void 0) : g.iB(F, Y)
                            };
                        DuT(k, l, function() {
                            k.player.sendVideoStatsEngageEvent(17, m)
                        })
                    }
                }
            }
        },
        zU = function(k, l) {
            k = k.player.B();
            if (l) {
                if (l.startsWith("//")) return k.protocol + ":" + l;
                if (l.startsWith("/")) return g.PS(k) + l
            } else return "";
            return l
        },
        GZO = function(k, l, r) {
            g.rW(l.element, "ytp-ce-element-hover") || (r.type === "VIDEO" || r.type === "PLAYLIST" ? g.MY(l.element, "ytp-ce-element-hover") : k.player.B().U ? (new g.xn(function() {
                g.MY(l.element, "ytp-ce-element-hover")
            }, 200)).start() : g.MY(l.element, "ytp-ce-element-hover"), Nt(k, r.OH), gi(k, r.id, !0))
        },
        sBO = function(k, l, r) {
            g.os(l.element, "ytp-ce-element-hover");
            g.os(l.element, "ytp-ce-force-expand");
            gi(k, r.id, !1)
        },
        gi = function(k, l, r) {
            k.G && (r ? k.N.show() : k.N.hide());
            for (var M = g.S(Object.keys(k.U)), U = M.next(); !U.done; U = M.next()) U = U.value, U !== l && g.FD(k.U[U].element, "ytp-ce-element-shadow-show", r)
        },
        Nt = function(k, l, r) {
            function M() {
                m || (U++, U === l.length && (F.stop(), r && r()))
            }
            if (!l || l.length === 0 || ip(k)) r && r();
            else {
                l = kk9(k, l);
                var U = 0,
                    m = !1,
                    F = new g.xn(function() {
                        m = !0;
                        r && r()
                    }, 1E3, k);
                F.start();
                for (k = 0; k < l.length; k++) g.HP(l[k], M)
            }
        },
        DuT = function(k, l, r) {
            Nt(k, l.clickUrls, r);
            (k = g.h8()) && l.EH && g.Oo(k, l.visualElement)
        },
        kk9 = function(k, l) {
            var r = k.player.getVideoData().clientPlaybackNonce;
            k = k.player.getCurrentTime().toFixed(2);
            r = {
                CPN: r,
                AD_CPN: r,
                MT: k
            };
            k = [];
            for (var M = 0; M < l.length; M++) k.push(lv9(l[M], r));
            return k
        },
        lv9 = function(k, l) {
            return k.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(r) {
                var M = unescape(r);
                M = M.substring(1, M.length - 1);
                return l[M] ? escape(l[M]) : r
            })
        },
        r2O = function(k) {
            return typeof k === "string" ? k : ""
        },
        xE = function(k, l, r) {
            for (var M in l)
                if (l[M] === k) return k;
            return r
        },
        M0j = function(k, l, r, M) {
            this.value = k;
            this.target = l;
            this.showLinkIcon = r;
            this.T = M
        },
        Lq = function(k) {
            return k.value ? k.value : null
        },
        TU = function(k) {
            if (!k) return null;
            var l = g.Yt(r2O(k.value));
            l = g.mj(l);
            if (!l) return null;
            var r = xE(k.target, U8q, "current");
            if (r == null) k = null;
            else {
                var M = k.show_link_icon;
                k = new M0j(l, r, M === "true" || M === "false" ? M === "true" : !0, k.pause_on_navigation != null ? k.pause_on_navigation : !0)
            }
            return k
        },
        oKx = function(k, l, r) {
            this.type = k;
            this.trigger = l;
            this.url = r
        },
        IvT = function(k) {
            if (!k) return null;
            var l = xE(k.type, m8i),
                r = xE(k.trigger, FPq);
            k = k.url;
            k = Array.isArray(k) && k.length ? k[0] : k;
            k = TU(k ? k : null);
            return l ? new oKx(l, r, k) : null
        },
        Yr5 = function(k, l, r, M, U) {
            this.id = k;
            this.type = l;
            this.style = r;
            this.data = U;
            this.action = M || []
        },
        c23 = function(k, l) {
            return g.XT(k.action, l)
        },
        EK$ = function(k, l) {
            this.context = k;
            this.T = l
        },
        fvx = function(k) {
            return k.customMessage ? vs("div", "iv-card-message", k.customMessage) : ""
        },
        Az = function(k, l) {
            k = "background-image: url(" + k + ");";
            var r = [];
            l && r.push(l);
            return {
                S: "div",
                j: "iv-card-image",
                X: {
                    style: k
                },
                C: r
            }
        },
        Rz9 = function(k) {
            if (!k.metaInfo || k.metaInfo.length === 0) return "";
            var l = [];
            k = g.S(k.metaInfo);
            for (var r = k.next(); !r.done; r = k.next()) l.push(vs("li", "", r.value));
            return {
                S: "ul",
                j: "iv-card-meta-info",
                C: l
            }
        },
        vs = function(k, l, r) {
            l ? typeof l === "string" ? l = {
                "class": l
            } : Array.isArray(l) && (l = {
                "class": l.join(" ")
            }) : l = {};
            l.dir = g.Rs(r);
            return {
                S: k,
                X: l,
                wQ: r
            }
        },
        J29 = function(k) {
            if (!k.customMessage) return "";
            var l = ["iv-card-action", "iv-card-primary-link"],
                r = {};
            k.gB && (l.push("iv-card-action-icon"), r.style = "background-image: url(" + k.gB + ");");
            r.dir = g.Rs(k.customMessage);
            var M = [{
                S: "span",
                wQ: k.customMessage
            }];
            k.showLinkIcon && (M.push("\u00a0"), M.push({
                S: "span",
                j: "iv-card-link-icon"
            }));
            return {
                S: "div",
                RB: l,
                X: r,
                C: M
            }
        },
        GU = function(k, l, r, M) {
            if (M) {
                l = g.S(l);
                for (var U = l.next(); !U.done; U = l.next()) k.T(U.value, M, r.id, r.sessionData, r.nx.click, 5)
            }
        },
        umi = function(k, l) {
            this.merchant = k;
            this.price = l
        },
        ez9 = function(k) {
            var l;
            (l = k) && !(l = k.length > 1 ? k.charAt(0) === "/" && k.charAt(1) !== "/" : k === "/") && (l = k.replace(/^(https?:)?\/\//, "").split("/", 1), l = !l || l.length < 1 || !l[0] ? [] : l[0].toLowerCase().split(".").reverse(), l = l[0] === "com" && l[1] === "youtube" || l[0] === "be" && l[1] === "youtu");
            return l ? k.indexOf("/redirect?") === -1 : !1
        },
        p6p = function(k, l) {
            return l ? l : ez9(k) ? "current" : "new"
        },
        si = function(k, l) {
            g.Q.call(this);
            var r = this;
            this.element = k;
            this.context = l;
            this.V$ = !1;
            this.sG = new Map;
            this.XQ = new Map;
            this.context.J.addEventListener(g.Tn("annotations_module"), function(M) {
                (M = r.sG.get(M)) && M.apply(r)
            });
            this.context.J.addEventListener(g.v0("annotations_module"), function(M) {
                (M = r.XQ.get(M)) && M.apply(r)
            })
        },
        Oi = function(k, l, r, M, U, m, F) {
            k.context.T.listen(l, "click", function(Y) {
                k.Ui(r, M, U, m || [], F || 0, Y)
            });
            k.context.T.listen(l, "touchstart", function() {
                k.V$ = !1
            });
            k.context.T.listen(l, "touchmove", function() {
                k.V$ = !0
            })
        },
        jVj = function(k) {
            var l;
            return ((l = g.N(k, g.dS)) == null ? 0 : l.url) ? g.N(k, g.dS).url : (k = g.N(k, g.wO)) && k.videoId ? (l = "/watch?v=" + k.videoId, k.playlistId && (l += "&list=" + k.playlistId), k.index && (l += "&index=" + k.index), k.startTimeSeconds && (l += "&t=" + k.startTimeSeconds), l) : null
        },
        DO = function(k, l, r) {
            return {
                K8: (k.impressionLoggingUrlsV2s || []).map(function(M) {
                    return M.baseUrl || ""
                }),
                click: (r.loggingUrls || []).map(function(M) {
                    return M.baseUrl || ""
                }),
                close: (l.dismissLoggingUrlsV2s || []).map(function(M) {
                    return M.baseUrl || ""
                }),
                Eh: (l.impressionLoggingUrlsV2s || []).map(function(M) {
                    return M.baseUrl || ""
                }),
                DM: (l.clickLoggingUrlsV2s || []).map(function(M) {
                    return M.baseUrl || ""
                })
            }
        },
        hz_ = function(k, l, r) {
            si.call(this, l, r);
            var M = this;
            this.J = k;
            this.eventId = null;
            this.n2 = this.gQ = this.Pr = this.G = this.isInitialized = !1;
            this.cards = [];
            this.q6 = this.N = this.JA = this.Y = this.Dj = this.T = null;
            this.vn = [];
            this.Pn = this.Z = this.uH = this.L1 = null;
            this.K = 0;
            this.S1 = new g.xn(function() {}, r.n1.aP ? 4E3 : 3E3);
            g.n(this, this.S1);
            this.C1 = new g.xn(function() {});
            g.n(this, this.C1);
            this.dQ = new EK$(r, function(U, m, F, Y, c, E) {
                Oi(M, U, m, F, Y, c, E)
            });
            this.V = new g.x({
                S: "div",
                j: "iv-drawer",
                X: {
                    id: "iv-drawer"
                },
                C: [{
                    S: "div",
                    j: "iv-drawer-header",
                    X: {
                        "aria-role": "heading"
                    },
                    C: [{
                        S: "span",
                        j: "iv-drawer-header-text"
                    }, {
                        S: "button",
                        RB: ["iv-drawer-close-button", "ytp-button"],
                        X: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }]
                }, {
                    S: "div",
                    j: "iv-drawer-content"
                }]
            });
            g.n(this, this.V);
            this.L = this.V.element;
            this.M6 = new g.sQ(this.V, 330);
            g.n(this, this.M6);
            this.zs = g.E1("iv-drawer-header-text", this.L);
            this.U = g.E1("iv-drawer-content", this.L);
            this.addCueRange(0, r.videoData.lengthSeconds *
                1E3, "",
                function() {
                    M.Pr && k7(M, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (M.Pr = M.G) && l3(M)
                });
            this.YU = new g.yL(this);
            g.n(this, this.YU);
            this.J.addEventListener("videodatachange", this.eq.bind(this))
        },
        avq = function(k, l) {
            l = l.data;
            l.autoOpenMs && k.addCueRange(l.autoOpenMs, 0x8000000000000, "", function() {
                k7(k, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            l.autoCloseMs && k.addCueRange(l.autoCloseMs, 0x8000000000000, "", function() {
                l3(k)
            });
            var r = l.headerText;
            g.yA(k.zs, r);
            k.N && (k.J.D("player_tooltip_data_title_killswitch") ? k.N.setAttribute("title", r) : k.N.setAttribute("data-tooltip-title", r));
            l.eventId && (k.eventId = l.eventId);
            k.L1 = g.eu(l.trackingParams);
            k.Z = g.eu(l.closeTrackingParams);
            k.uH = g.eu(l.iconTrackingParams)
        },
        SrM = function(k, l) {
            var r = l.cardId ? l.cardId : "cr:" + k.K,
                M = k.J.B().experiments.cn("enable_error_corrections_infocard_web_client");
            if (!l.content && l.teaser.simpleCardTeaserRenderer && M) {
                var U = l.teaser.simpleCardTeaserRenderer,
                    m = l.icon ? l.icon.infoCardIconRenderer : null;
                if (U.channelAvatar && U.channelAvatar.thumbnails && U.channelAvatar.thumbnails.length > 0) var F = rH(U.channelAvatar.thumbnails, 22, 22).url;
                l = {
                    id: r,
                    timestamp: k.K,
                    type: "simple",
                    teaserText: g.cU(U.message),
                    teaserDurationMs: Number(l.cueRanges[0].teaserDurationMs),
                    startMs: Number(l.cueRanges[0].startCardActiveMs),
                    autoOpen: !!l.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    nx: {},
                    ey: null,
                    sb: U.trackingParams ?
                        g.eu(U.trackingParams) : null,
                    uH: m && m.trackingParams ? g.eu(m.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    gB: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: U.onTapCommand || null,
                    Db: F
                };
                MJ(k, l)
            } else {
                var Y;
                if ((Y = l.content) == null ? 0 : Y.simpleCardContentRenderer) {
                    if (!l.cueRanges.length) return;
                    F = (U = l.content) == null ? void 0 : U.simpleCardContentRenderer;
                    U = l.teaser.simpleCardTeaserRenderer;
                    m = l.icon ? l.icon.infoCardIconRenderer : null;
                    l = {
                        id: r,
                        timestamp: k.K,
                        type: "simple",
                        teaserText: g.cU(U.message),
                        teaserDurationMs: Number(l.cueRanges[0].teaserDurationMs),
                        startMs: Number(l.cueRanges[0].startCardActiveMs),
                        autoOpen: !!l.autoOpen,
                        sessionData: U8(k, r, l, F),
                        sponsored: !1,
                        nx: DO(F, U, F.command),
                        ey: F.trackingParams ? g.eu(F.trackingParams) : null,
                        sb: U.trackingParams ? g.eu(U.trackingParams) : null,
                        uH: m && m.trackingParams ? g.eu(m.trackingParams) : null,
                        imageUrl: rH(F.image.thumbnails, 290, 290).url,
                        displayDomain: F.displayDomain ? g.cU(F.displayDomain) : null,
                        showLinkIcon: !!F.showLinkIcon,
                        gB: null,
                        title: F.title ? g.cU(F.title) : "",
                        customMessage: F.callToAction ? g.cU(F.callToAction) : "",
                        url: g.N(F.command, g.dS).url ? TU({
                            pause_on_navigation: !k.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.N(F.command, g.dS).url
                        }) : null,
                        onClickCommand: null
                    };
                    MJ(k, l)
                } else {
                    var c;
                    if ((c = l.content) == null ? 0 : c.collaboratorInfoCardContentRenderer) {
                        if (!l.cueRanges.length) return;
                        F = (m = l.content) == null ? void 0 : m.collaboratorInfoCardContentRenderer;
                        U = l.teaser.simpleCardTeaserRenderer;
                        m = l.icon ? l.icon.infoCardIconRenderer : null;
                        l = {
                            id: r,
                            timestamp: k.K,
                            type: "collaborator",
                            teaserText: g.cU(U.message),
                            teaserDurationMs: Number(l.cueRanges[0].teaserDurationMs),
                            startMs: Number(l.cueRanges[0].startCardActiveMs),
                            autoOpen: !!l.autoOpen,
                            sessionData: U8(k, r, l, F),
                            sponsored: !1,
                            nx: DO(F, U, F.endpoint),
                            ey: F.trackingParams ? g.eu(F.trackingParams) : null,
                            sb: U.trackingParams ? g.eu(U.trackingParams) : null,
                            uH: m && m.trackingParams ? g.eu(m.trackingParams) : null,
                            channelId: g.N(F.endpoint, g.Gr).browseId,
                            customMessage: F.customText ? g.cU(F.customText) : null,
                            profileImageUrl: rH(F.channelAvatar.thumbnails, 290,
                                290).url,
                            title: F.channelName ? g.cU(F.channelName) : "",
                            metaInfo: [F.subscriberCountText ? g.cU(F.subscriberCountText) : ""],
                            url: TU({
                                pause_on_navigation: !k.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.N(F.endpoint, g.Gr).canonicalBaseUrl ? g.N(F.endpoint, g.Gr).canonicalBaseUrl : "/channel/" + g.N(F.endpoint, g.Gr).browseId
                            }),
                            onClickCommand: null
                        };
                        MJ(k, l)
                    } else {
                        var E;
                        if ((E = l.content) == null ? 0 : E.playlistInfoCardContentRenderer) {
                            if (!l.cueRanges.length) return;
                            var f;
                            F = (f = l.content) == null ? void 0 : f.playlistInfoCardContentRenderer;
                            U = l.teaser.simpleCardTeaserRenderer;
                            m = l.icon ? l.icon.infoCardIconRenderer : null;
                            l = {
                                id: r,
                                timestamp: k.K,
                                type: "playlist",
                                teaserText: g.cU(U.message),
                                teaserDurationMs: Number(l.cueRanges[0].teaserDurationMs),
                                startMs: Number(l.cueRanges[0].startCardActiveMs),
                                autoOpen: !!l.autoOpen,
                                sessionData: U8(k, r, l, F),
                                sponsored: !1,
                                nx: DO(F, U, F.action),
                                ey: F.trackingParams ? g.eu(F.trackingParams) : null,
                                sb: U.trackingParams ? g.eu(U.trackingParams) : null,
                                uH: m && m.trackingParams ? g.eu(m.trackingParams) : null,
                                fB: rH(F.playlistThumbnail.thumbnails,
                                    258, 290).url,
                                customMessage: F.customMessage ? g.cU(F.customMessage) : null,
                                playlistVideoCount: g.cU(F.playlistVideoCount),
                                title: F.playlistTitle ? g.cU(F.playlistTitle) : "",
                                metaInfo: [F.channelName ? g.cU(F.channelName) : "", F.videoCountText ? g.cU(F.videoCountText) : ""],
                                url: TU({
                                    pause_on_navigation: !k.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: jVj(F.action)
                                }),
                                onClickCommand: null
                            };
                            MJ(k, l)
                        } else {
                            var R;
                            if ((R = l.content) == null ? 0 : R.videoInfoCardContentRenderer) {
                                if (!l.cueRanges.length) return;
                                var J;
                                F = (J = l.content) ==
                                    null ? void 0 : J.videoInfoCardContentRenderer;
                                U = l.teaser.simpleCardTeaserRenderer;
                                m = l.icon ? l.icon.infoCardIconRenderer : null;
                                l = {
                                    id: r,
                                    timestamp: k.K,
                                    type: "video",
                                    teaserText: g.cU(U.message),
                                    teaserDurationMs: Number(l.cueRanges[0].teaserDurationMs),
                                    startMs: Number(l.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!l.autoOpen,
                                    sessionData: U8(k, r, l, F),
                                    sponsored: !1,
                                    nx: DO(F, U, F.action),
                                    ey: F.trackingParams ? g.eu(F.trackingParams) : null,
                                    sb: U.trackingParams ? g.eu(U.trackingParams) : null,
                                    uH: m && m.trackingParams ? g.eu(m.trackingParams) : null,
                                    fB: rH(F.videoThumbnail.thumbnails, 258, 290).url,
                                    videoDuration: F.lengthString ? g.cU(F.lengthString) : null,
                                    customMessage: F.customMessage ? g.cU(F.customMessage) : null,
                                    title: F.videoTitle ? g.cU(F.videoTitle) : "",
                                    metaInfo: [F.channelName ? g.cU(F.channelName) : "", F.viewCountText ? g.cU(F.viewCountText) : ""],
                                    isLiveNow: !!F.badge,
                                    url: TU({
                                        pause_on_navigation: !k.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: jVj(F.action)
                                    }),
                                    onClickCommand: null
                                };
                                MJ(k, l)
                            }
                        }
                    }
                }
            }
            k.K++
        },
        rH = function(k, l, r) {
            for (var M = -1, U = -1, m = 0; m < k.length; m++) {
                if (k[m].height ===
                    l || k[m].width === r) return k[m];
                ((k[m].height || 0) < l || (k[m].width || 0) < r) && (M < 0 || (k[M].height || 0) < (k[m].height || 0) || (k[M].width || 0) < (k[m].width || 0)) ? M = m: ((k[m].height || 0) >= l || (k[m].width || 0) >= r) && (U < 0 || (k[U].height || 0) > (k[m].height || 0) || (k[U].width || 0) > (k[m].width || 0)) && (U = m)
            }
            return k[U >= 0 ? U : M]
        },
        U8 = function(k, l, r, M) {
            return {
                feature: r.feature ? r.feature : "cards",
                src_vid: k.context.videoData.videoId,
                annotation_id: l,
                ei: k.context.videoData.eventId || "",
                itct: M.trackingParams || ""
            }
        },
        w6i = function(k, l) {
            if (l = X6p(k, l)) l === k.T && (k.T = null), k.J.removeCueRange(l.Kg.id), g.XZ(l.kz), g.Zj(k.cards, l), k.oQ(), oO(k)
        },
        k7 = function(k, l, r) {
            if (!k.G) {
                k.M6.show();
                k.Dj = new g.xn(function() {
                    g.MY(k.context.J.getRootNode(), g.w7.IV_DRAWER_OPEN)
                }, 0);
                k.Dj.start();
                k.YU.W(k.U, "mousewheel", function(F) {
                    k.S1.start();
                    F.preventDefault();
                    F = F || window.event;
                    var Y = 0;
                    F.type == "MozMousePixelScroll" ? Y = 0 == (F.axis == F.HORIZONTAL_AXIS) ? F.detail : 0 : window.opera ? Y = F.detail : Y = F.wheelDelta % 120 == 0 ? "WebkitTransform" in document.documentElement.style ? window.chrome && navigator.platform.indexOf("Mac") == 0 ? F.wheelDeltaY / -30 : F.wheelDeltaY / -1.2 : F.wheelDelta / -1.6 : F.wheelDeltaY / -3;
                    if (F = Y) k.U.scrollTop += F
                });
                k.G = !0;
                var M = g.h8();
                M && k.L1 && k.Z && g.G5(M, [k.L1, k.Z]);
                l = {
                    TRIGGER_TYPE: l
                };
                for (var U = g.S(k.cards), m = U.next(); !m.done; m = U.next()) m = m.value, m.N$ || (m.N$ = !0, y20(k.context.logger, m.Kg.nx.K8, l)), M && g.G5(M, [m.Kg.ey]);
                tz(k.J);
                r && (k.Y = new g.xn(function() {
                    k.JA = k.N;
                    k.q6.focus()
                }, 330), k.Y.start())
            }
        },
        l3 = function(k) {
            k.G && (k.M6.hide(), g.VS(k.YU), g.os(k.context.J.getRootNode(), g.w7.IV_DRAWER_OPEN), k.G = !1, tz(k.J), k.Y && k.Y.stop(), k.Y = new g.xn(function() {
                k.JA && (k.JA.focus(), k.JA = null)
            }, 330), k.Y.start())
        },
        V03 = function(k) {
            g.Um(k.TJ(), [g.w7.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.DS(k.J, k.L, 5);
            k.XC();
            k.N = g.E1("ytp-cards-button", k.J.getRootNode());
            k.q6 = g.E1("iv-drawer-close-button", k.L);
            k.isInitialized = !0
        },
        ZQi = function(k) {
            k.vn.push(g.Od("iv-teaser-shown", k.t1, k));
            k.vn.push(g.Od("iv-teaser-hidden", k.TQf, k));
            k.vn.push(g.Od("iv-teaser-clicked", k.HC, k));
            k.n2 = !0
        },
        $8O = function(k, l) {
            var r;
            return l.onClickCommand && ((r = g.N(l.onClickCommand, g.rRx)) == null ? void 0 : r.targetId) === "engagement-panel-error-corrections" ? (k.Pn = l, !0) : !1
        },
        WP$ = function(k, l) {
            k.Pn = l;
            var r = k.J.getVideoData();
            if (!r) return !1;
            r = g.k6(r);
            if (r == null ? 0 : r.markersMap)
                for (var M, U = 0;
                    ((M = r) == null ? void 0 : M.markersMap.length) > U; U++) {
                    var m = void 0,
                        F = (m = r) == null ? void 0 : m.markersMap[U];
                    if (F.key === "ERROR_CORRECTION_MARKERS" && (m = void 0, (F = (m = F.value) == null ? void 0 : m.markers) && F.length > 0)) return M = void 0, l.startMs = ((M = g.N(F[0], g.wun)) == null ? void 0 : M.timeRangeStartMillis) || 0, k.Pn = null, !0
                }
            return !1
        },
        MJ = function(k, l) {
            if (!$8O(k, l) || WP$(k, l)) {
                var r = t0M(k, l);
                if (r) {
                    var M = {
                        Kg: l,
                        kz: r.element,
                        N$: !1
                    };
                    if (l.onClickCommand) k.J.D("web_infocards_teaser_show_logging_fix") && (k.n2 || ZQi(k), w6i(k, l.id), r = k.findLastIndex(M), g.z0(k.cards, r, 0, M));
                    else {
                        k.isInitialized || V03(k);
                        w6i(k, l.id);
                        var U = k.findLastIndex(M);
                        g.z0(k.cards, U, 0, M);
                        r.IB(k.U, U);
                        k.oQ()
                    }
                    l.autoOpen ? k.addCueRange(l.startMs, 0x8000000000000, l.id, function() {
                        k.G || (k.T = M, oO(k), PqT(k, M), k7(k, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (r = k.context.J.getCurrentTime() * 1E3, r < 5E3 && r > l.startMs && CqT(k, M), k.addCueRange(l.startMs,
                        l.startMs + 1, l.id,
                        function() {
                            CqT(k, M)
                        }), oO(k))
                }
            }
        },
        t0M = function(k, l) {
            switch (l.type) {
                case "simple":
                    k = k.dQ;
                    var r = l.displayDomain ? {
                        S: "div",
                        j: "iv-card-image-text",
                        wQ: l.displayDomain
                    } : void 0;
                    var M = J29(l);
                    r = {
                        S: "div",
                        RB: ["iv-card"],
                        C: [{
                            S: "a",
                            j: "iv-click-target",
                            X: {
                                href: l.url ? Lq(l.url) || "" : ""
                            },
                            C: [Az(l.imageUrl, r), {
                                S: "div",
                                j: "iv-card-content",
                                C: [vs("h2", void 0, l.title), M]
                            }]
                        }]
                    };
                    r = new g.x(r);
                    GU(k, g.YZ("iv-click-target", r.element), l, l.url);
                    l = r;
                    break;
                case "collaborator":
                    k = k.dQ;
                    r = {
                        S: "div",
                        RB: ["iv-card", "iv-card-channel"],
                        C: [{
                            S: "a",
                            RB: ["iv-click-target"],
                            X: {
                                href: Lq(l.url) || "",
                                "data-ytid": l.channelId
                            },
                            C: [Az(l.profileImageUrl),
                                {
                                    S: "div",
                                    j: "iv-card-content",
                                    C: [fvx(l), {
                                        S: "h2",
                                        j: "iv-card-primary-link",
                                        wQ: l.title
                                    }, Rz9(l)]
                                }
                            ]
                        }]
                    };
                    r = new g.x(r);
                    GU(k, g.YZ("iv-click-target", r.element), l, l.url);
                    l = r;
                    break;
                case "playlist":
                    k = k.dQ;
                    r = {
                        S: "div",
                        RB: ["iv-card", "iv-card-playlist"],
                        C: [{
                            S: "a",
                            j: "iv-click-target",
                            X: {
                                href: Lq(l.url) || ""
                            },
                            C: [Az(l.fB, {
                                S: "div",
                                j: "iv-card-image-overlay",
                                C: [{
                                    S: "span",
                                    j: "iv-card-playlist-video-count",
                                    wQ: l.playlistVideoCount
                                }]
                            }), {
                                S: "div",
                                j: "iv-card-content",
                                C: [fvx(l), vs("h2", "iv-card-primary-link", l.title), Rz9(l)]
                            }]
                        }]
                    };
                    r = new g.x(r);
                    GU(k, g.YZ("iv-click-target", r.element), l, l.url);
                    l = r;
                    break;
                case "productListing":
                    k = k.dQ;
                    var U = l.offers.length != 0;
                    r = ["iv-card"];
                    M = "";
                    var m = J29(l);
                    U && (r.push("iv-card-product-listing"), M = "iv-card-primary-link", m = l.offers[0], U = [], m.price && U.push({
                        S: "div",
                        j: "iv-card-offer-price",
                        wQ: m.price
                    }), m.merchant && U.push({
                        S: "div",
                        j: "iv-card-offer-merchant",
                        wQ: m.merchant
                    }), m = {
                        S: "div",
                        C: U
                    });
                    U = l.url ? Lq(l.url) || "" : "";
                    r = {
                        S: "div",
                        RB: r,
                        X: {
                            tabindex: "0"
                        },
                        C: [{
                            S: "a",
                            RB: ["iv-card-image", "iv-click-target"],
                            X: {
                                style: "background-image: url(" +
                                    l.imageUrl + ");",
                                href: U,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            S: "div",
                            j: "iv-card-content",
                            C: [l.sponsored ? {
                                S: "div",
                                j: "iv-card-sponsored",
                                C: ["Sponsored", {
                                    S: "div",
                                    j: "iv-ad-info-container",
                                    C: [{
                                        S: "div",
                                        j: "iv-ad-info",
                                        wQ: "{{adInfo}}"
                                    }, {
                                        S: "div",
                                        j: "iv-ad-info-icon-container",
                                        C: [{
                                            S: "div",
                                            j: "iv-ad-info-icon"
                                        }, {
                                            S: "div",
                                            j: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                S: "a",
                                j: "iv-click-target",
                                X: {
                                    href: U
                                },
                                C: [vs("h2", M, l.title), m]
                            }]
                        }]
                    };
                    r = new g.x(r);
                    M = g.p5("span");
                    g.yA(M, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                    r.aX(M, "adInfo");
                    GU(k, g.YZ("iv-click-target", r.element), l, l.url);
                    l = r;
                    break;
                case "video":
                    k = k.dQ;
                    M = l.videoDuration ? {
                        S: "span",
                        j: "iv-card-video-duration",
                        wQ: l.videoDuration
                    } : void 0;
                    m = l.isLiveNow ? {
                        S: "span",
                        RB: ["yt-badge", "yt-badge-live"],
                        wQ: "LIVE NOW"
                    } : null;
                    U = {
                        S: "div",
                        RB: ["iv-card", "iv-card-video"],
                        C: [{
                            S: "a",
                            j: "iv-click-target",
                            X: {
                                href: ((r = l.url) == null ? void 0 : Lq(r)) || ""
                            },
                            C: [Az(l.fB, M), {
                                S: "div",
                                j: "iv-card-content",
                                C: [fvx(l), vs("h2", "iv-card-primary-link", l.title), Rz9(l), m]
                            }]
                        }]
                    };
                    r = new g.x(U);
                    GU(k, g.YZ("iv-click-target",
                        r.element), l, l.url);
                    l = r;
                    break;
                default:
                    return null
            }
            return l
        },
        d8x = function(k) {
            if (k.T) return k.T.Kg.type === "productListing";
            if (k.J.D("enable_wn_infocards")) {
                var l;
                return !((l = k.cards) == null || !l.length) && g.Sy(k.cards, function(r) {
                    return r.Kg.type === "productListing"
                })
            }
            return g.Sy(k.cards, function(r) {
                return r.Kg.type === "productListing"
            })
        },
        oO = function(k) {
            g.FD(k.J.getRootNode(), "ytp-cards-shopping-active", d8x(k))
        },
        CqT = function(k, l) {
            if (!g.rW(k.J.getRootNode(), "ytp-cards-teaser-shown")) {
                if (k.T !== l) {
                    var r = g.h8(),
                        M = k.T ? k.T.Kg.uH : k.uH;
                    r && M && g.so(r, [M]);
                    k.T = l;
                    oO(k)
                }(r = k.isInitialized && k.TJ().style.display == "none") || (r = k.context.J.getPlayerState(), M = r === 0 && k.context.J.getCurrentTime() === 0, r = !(r === 1 || r === 3 || M));
                if (!r && l.Kg.teaserDurationMs) {
                    var U;
                    r = {
                        teaserText: l.Kg.teaserText,
                        durationMs: l.Kg.teaserDurationMs,
                        onClickCommand: l.Kg.onClickCommand,
                        Db: (U = l.Kg.Db) != null ? U : null
                    };
                    k.J.I3(!0, r)
                }
                k.C1.isActive() || ((!k.G || !k.S1.isActive() && k.gQ) && PqT(k, l), k.C1.start(910 + l.Kg.teaserDurationMs))
            }
        },
        PqT = function(k, l) {
            k.V.hA ? (l = new Bs([0,
                k.U.scrollTop
            ], [0, l.kz.offsetTop], 600, iNO), k.context.G.listen(l, "animate", function(r) {
                k.U.scrollTop = r.y
            }), k.context.G.listen(l, "finish", function(r) {
                k.U.scrollTop = r.y
            }), l.play()) : (k.V.a4(!0), k.U.scrollTop = l.kz.offsetTop, k.V.a4(!1))
        },
        m6 = function(k) {
            return k.T && k.T.Kg ? k.T.Kg : k.cards[0] && k.cards[0].Kg ? k.cards[0].Kg : null
        },
        X6p = function(k, l) {
            return g.XT(k.cards, function(r) {
                return r.Kg.id === l
            })
        },
        F1 = function(k, l, r) {
            si.call(this, k, l);
            this.annotation = r;
            this.isActive = !1
        },
        HQ9 = function(k) {
            var l = k.annotation.data;
            "start_ms" in l && "end_ms" in l && k.addCueRange(Number(l.start_ms), Number(l.end_ms), k.annotation.id, function() {
                k.show()
            }, function() {
                k.hide()
            })
        },
        IO = function(k, l, r) {
            F1.call(this, k, l, r);
            this.U = null;
            this.K = !1;
            this.G = null;
            this.L = !1;
            this.T = this.Y = this.N = null
        },
        B0_ = function(k, l) {
            var r = r === void 0 ? 0 : r;
            var M = tx_(l).width;
            g.DD(l, M);
            r = new qwi(l, [M, l.offsetTop], [M - M - r, l.offsetTop], 200, QB5);
            g.n(k, r);
            k.context.G.listen(r, "begin", function() {
                g.o0(l, !0)
            });
            r.play()
        },
        QVT = function(k, l) {
            if (l.channel_name) {
                var r = k.createElement({
                        S: "div",
                        RB: ["iv-branding-context-name"],
                        wQ: l.channel_name
                    }),
                    M = k.createElement({
                        S: "div",
                        RB: ["iv-branding-context-subscribe"]
                    }),
                    U = l.standalone_subscribe_button_data;
                U && (k.T = new g.ox(U.subscribeText, U.subscribeCount, U.unsubscribeText, U.unsubscribeCount, !!U.enabled, !!U.classic, l.channel_id, !!U.subscribed, U.feature, l.session_data.itct, k.context.J, !1), k.T.IB(M));
                var m = k.createElement({
                        S: "div",
                        RB: ["iv-branding-context-subscribe-caret"]
                    }),
                    F = k.createElement({
                        S: "div",
                        RB: ["branding-context-container-inner"]
                    });
                F.appendChild(m);
                F.appendChild(r);
                F.appendChild(M);
                g.o0(F, !1);
                var Y = k.createElement({
                    S: "div",
                    RB: ["branding-context-container-outer"]
                });
                Y.appendChild(F);
                g.Td(Y, "right", l.image_width + "px");
                g.hR(k.TJ(), Y);
                k.G = new g.xn(function() {
                    bQx(k, F, Y)
                }, 500);
                g.n(k, k.G);
                k.context.T.listen(k.TJ(), "mouseover", function() {
                    qr9(k, F, Y, m, l.image_height)
                });
                k.context.T.listen(k.TJ(), "mouseout", function() {
                    k.G.start()
                })
            }
        },
        qr9 = function(k, l, r, M, U) {
            k.G.stop();
            if (!k.L) {
                var m = g.Uj(l);
                k.T || (l.style.width = g.O1(m.width, !0), r.style.width = g.O1(m.width, !0));
                g.Td(M, "top", m.height - Math.max(Math.min(m.height, U) / 2 + 10, 20) + "px");
                g.Td(M, "right", "1px");
                k.L = !0;
                g.o0(l, !0);
                k.N = new g.xn(function() {
                    g.MY(this.TJ(), "iv-branding-active")
                }, 0, k);
                k.N.start()
            }
        },
        bQx = function(k, l, r) {
            g.os(k.TJ(), "iv-branding-active");
            k.Y = new g.xn(function() {
                g.o0(l, !1);
                k.T || (r.style.width = g.O1(0, !0))
            }, 250);
            k.Y.start();
            k.L = !1
        },
        iQc = function(k, l, r, M, U, m, F) {
            this.T = k;
            this.G = l;
            this.n1 = r;
            this.videoData = M;
            this.logger = U;
            this.J = m;
            this.U = F
        },
        nKx = function(k, l, r) {
            F1.call(this, k, l, r);
            var M = this;
            this.Z = this.isCollapsed = this.V = !1;
            this.Y = 5E3;
            this.U = this.G = this.T = this.L = null;
            this.K = this.createElement({
                S: "div",
                RB: ["iv-promo-contents"]
            });
            this.N = new g.xn(function() {
                M.T.setAttribute("aria-hidden", "true");
                g.o0(M.G, !1);
                g.o0(M.U, !0)
            }, 700, this);
            g.n(this, this.N)
        },
        zzx = function(k) {
            var l = k.annotation.data;
            if (k.annotation.style === "cta") var r = 6;
            else if (k.annotation.style === "video" || k.annotation.style === "playlist") r = 7;
            k.Y = l.collapsedelay_ms || k.Y;
            var M = ["iv-promo", "iv-promo-inactive"];
            k.TJ().setAttribute("aria-hidden", "true");
            k.TJ().setAttribute("aria-label", "Promotion");
            k.TJ().tabIndex = 0;
            var U = k.annotation.NR(),
                m = l.image_url;
            if (m) {
                var F = k.createElement({
                    S: "div",
                    RB: ["iv-promo-img", "iv-click-target"]
                });
                m = k.createElement({
                    S: "img",
                    X: {
                        src: m,
                        "aria-hidden": "true"
                    }
                });
                F.appendChild(m);
                l.video_duration && !l.is_live ?
                    (m = k.createElement({
                        S: "span",
                        j: "iv-promo-video-duration",
                        wQ: l.video_duration
                    }), F.appendChild(m)) : l.playlist_length && (m = k.createElement({
                        S: "span",
                        j: "iv-promo-playlist-length",
                        wQ: l.playlist_length.toString()
                    }), F.appendChild(m));
                U && Oi(k, F, U, k.annotation.id, l.session_data, void 0, r)
            }
            U ? (m = k.createElement({
                S: "a",
                j: "iv-promo-txt"
            }), g.ft(m, Lq(U)), k.T = m) : k.T = k.createElement({
                S: "div",
                j: "iv-promo-txt"
            });
            switch (k.annotation.style) {
                case "cta":
                case "website":
                    var Y = k.createElement({
                        S: "p",
                        C: [{
                            S: "strong",
                            wQ: l.text_line_1
                        }]
                    });
                    var c = k.createElement({
                        S: "p",
                        C: [{
                            S: "span",
                            j: "iv-promo-link",
                            wQ: l.text_line_2
                        }]
                    });
                    if (m = l.text_line_3) {
                        M.push("iv-promo-website-card-cta-redesign");
                        var E = k.createElement({
                            S: "button",
                            RB: ["iv-promo-round-expand-icon", "ytp-button"]
                        });
                        m = k.createElement({
                            S: "button",
                            RB: ["iv-button", "iv-promo-button"],
                            C: [{
                                S: "span",
                                j: "iv-button-content",
                                wQ: m
                            }]
                        });
                        var f = k.createElement({
                            S: "div",
                            j: "iv-promo-button-container"
                        });
                        f.appendChild(m);
                        U && Oi(k, k.TJ(), U, k.annotation.id, l.session_data, void 0, r)
                    }
                    g.MY(k.T, "iv-click-target");
                    U && Oi(k, k.T, U, k.annotation.id, l.session_data, void 0, r);
                    break;
                case "playlist":
                case "video":
                    Y = k.createElement({
                        S: "p",
                        C: [{
                            S: "span",
                            wQ: l.text_line_1
                        }]
                    }), c = k.createElement({
                        S: "p",
                        C: [{
                            S: "strong",
                            wQ: l.text_line_2
                        }]
                    }), l.is_live && (Y = c, c = k.createElement({
                        S: "span",
                        RB: ["yt-badge", "iv-promo-badge-live"],
                        wQ: "LIVE NOW"
                    })), g.MY(k.T, "iv-click-target"), U && Oi(k, k.T, U, k.annotation.id, l.session_data, void 0, r), M.push("iv-promo-video")
            }
            Y && k.T.appendChild(Y);
            c && k.T.appendChild(c);
            k.K.appendChild(k.T);
            f && k.K.appendChild(f);
            r = k.createElement({
                S: "div",
                j: "iv-promo-actions"
            });
            k.U = k.createElement({
                S: "button",
                RB: ["iv-promo-expand", "ytp-button"]
            });
            k.U.title = "Expand";
            k.context.T.listen(k.U, "click", function(R) {
                KP9(k, 5E3, R)
            });
            r.appendChild(k.U);
            g.o0(k.U, !1);
            k.context.T.listen(k.TJ(), "mouseover", k.pn, k);
            k.context.T.listen(k.TJ(), "mouseout", k.Bm, k);
            k.context.T.listen(k.TJ(), "touchend", function(R) {
                KP9(k, 5E3, R)
            });
            k.G = k.createElement({
                S: "button",
                RB: ["iv-promo-close", "ytp-button"]
            });
            k.G.title = "Close";
            k.context.T.listen(k.G, "click", k.annotation.style === "cta" && l.text_line_3 ? k.Em : k.Mj, k);
            r.appendChild(k.G);
            g.Um(k.TJ(), M);
            F && (g.hR(k.TJ(), F), E && F.appendChild(E));
            g.hR(k.TJ(), k.K);
            g.hR(k.TJ(), r)
        },
        KP9 = function(k, l, r) {
            r.stopPropagation();
            gKi(k);
            N0M(k, l);
            k.T.focus()
        },
        x8_ = function(k) {
            k.isCollapsed || k.Z || k.L || (g.MY(k.TJ(), "iv-promo-collapsed"), k.isCollapsed = !0, k.N.start())
        },
        gKi = function(k) {
            k.N.stop();
            k.isCollapsed && (g.md(k.TJ(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), k.isCollapsed = !1, k.T && k.T.removeAttribute("aria-hidden"), g.o0(k.U, !1), g.o0(k.G, !0))
        },
        N0M = function(k, l) {
            k.L || (k.L = g.Q2(function() {
                LPq(this);
                x8_(this)
            }, l, k))
        },
        LPq = function(k) {
            k.L && (g.lO.clearTimeout(k.L), k.L = null)
        },
        T03 = function(k) {
            this.J = k
        },
        y20 = function(k, l, r) {
            l && (r ? Y7(k, l.map(function(M) {
                return g.WW(M, r)
            })) : Y7(k, l))
        },
        Y7 = function(k, l, r, M) {
            var U = 1,
                m = void 0,
                F = -1;
            if (r) {
                var Y = !1;
                m = function() {
                    U--;
                    U || Y || (clearTimeout(F), Y = !0, r())
                };
                F = setTimeout(function() {
                    Y = !0;
                    r()
                }, 1E3)
            }
            l = g.S(l || []);
            for (var c = l.next(); !c.done; c = l.next()) c = c.value, U++, g.HP(c, m);
            M && (U++, M !== 0 && k.J.sendVideoStatsEngageEvent(M, m))
        },
        vK0 = function(k) {
            g.Zg.call(this, k);
            var l = this;
            this.vn = this.Z = !1;
            this.loadNumber = 0;
            this.Y = {};
            this.logger = new T03(this.player);
            this.L = new g.yL(this);
            this.N = this.K = null;
            this.events = new g.yL(this);
            this.ZS = this.V = this.T = null;
            this.Pn = [];
            g.n(this, this.L);
            this.L.W(this.player, "onVideoAreaChange", function() {
                l.publish("onVideoAreaChange")
            });
            this.L.W(this.player, "onHideControls", function() {
                l.publish("onHideControls")
            });
            this.L.W(this.player, "onShowControls", function() {
                l.publish("onShowControls")
            });
            this.L.W(this.player, "resize", function(M) {
                l.publish("resize", M)
            });
            this.L.W(this.player, "presentingplayerstatechange", function(M) {
                l.publish("presentingplayerstatechange", M)
            });
            this.subscribe("presentingplayerstatechange", this.FF, this);
            this.subscribe("resize", this.nf, this);
            this.player.B().gQ.subscribe("vast_info_card_add", this.mX, this);
            g.n(this, this.events);
            this.dQ = this.createElement({
                S: "div",
                j: "video-custom-annotations"
            });
            this.U = new g.x({
                S: "div",
                RB: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.n(this, this.U);
            g.DS(this.player, this.U.element, 4);
            this.U.hide();
            this.G = new g.x({
                S: "div",
                RB: ["ytp-iv-video-content"]
            });
            g.n(this, this.G);
            k = this.createElement({
                S: "div",
                j: "video-annotations"
            });
            k.appendChild(this.dQ);
            this.G.element.appendChild(k);
            this.ER() && this.load();
            var r = this.createElement({
                S: "style"
            });
            (g.It("HEAD")[0] || document.body).appendChild(r);
            this.addOnDisposeCallback(function() {
                g.XZ(r)
            });
            if (k = r.sheet) k.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), k.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), k.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), k.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), k.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), k.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), k.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), k.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), k.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), k.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        A25 = function(k) {
            k = k.createElement({
                S: "div",
                RB: ["annotation", "annotation-type-custom"]
            });
            g.o0(k, !1);
            return k
        },
        Gkx = function(k, l) {
            l = !l.isCued() && !g.T(l, 1024);
            k.U.a4(l);
            k.G.a4(l)
        },
        sVq = function(k, l, r) {
            k.Z = !0;
            k.N = g.Sw(l, r)
        },
        OQ$ = function(k, l) {
            for (var r = {}, M = g.S(l.attributes), U = M.next(); !U.done; U = M.next()) U = U.value, r[U.name] = U.nodeValue;
            for (M = 0; M < l.childNodes.length; M++)
                if (U = l.childNodes[M], g.I$(U) && U.nodeType == 1) {
                    if (r[U.tagName]) var m = r[U.tagName];
                    else if (U.tagName === "data") {
                        U.childNodes.length > 0 && (m = U.childNodes[0].nodeValue, r[U.tagName] = typeof m === "string" ? m.trim() : m);
                        continue
                    } else m = [], r[U.tagName] = m;
                    U && U.tagName === "TEXT" ? U.childNodes.length === 1 && U.childNodes[0].nodeType === 3 ? m.push(U.childNodes[0].nodeValue) : m.push("") : U && m.push(OQ$(k, U))
                }
            return r
        },
        r__ = function(k) {
            var l = k.player.getVideoData();
            if (l.YU) {
                var r = k.player.B().gQ.get(l.videoId);
                if (r) {
                    var M = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(U, m, F) {
                            U = k.loadNumber;
                            m = l.videoId;
                            k.loaded && k.loadNumber === U && k.player.getVideoData().videoId === m && (F = g.c1(F) && F.responseXML ? F.responseXML : null) && D8c(k, F)
                        }
                    };
                    g.s5() && (M.onFinish = kJx(k, M.onFinish));
                    M.postParams = {
                        ic_only: "1"
                    };
                    lP$(M, r);
                    k.Z = !0;
                    g.Sw(l.YU, M)
                }
            }
        },
        lP$ = function(k, l) {
            k.method = "POST";
            k.postParams = k.postParams || {};
            l.TI && (k.postParams.ic_coll = l.TI);
            l.fh && (k.postParams.ic_xml = l.fh);
            l.hG && (k.postParams.ic_track = l.hG)
        },
        Mop = function(k) {
            var l = new g.x({
                S: "div"
            });
            g.o0(l.element, !1);
            var r = new hz_(k.player, l.element, cu(k));
            g.n(r, l);
            l.IB(k.U.element);
            r.bJ();
            return r
        },
        oAi = function(k, l) {
            var r, M;
            if (l = (r = l.getWatchNextResponse()) == null ? void 0 : (M = r.cards) == null ? void 0 : M.cardCollectionRenderer) k.vn = !0, Ue_(k, l), l.headerText && k.ZS && (r = g.cU(l.headerText), k.player.D("player_tooltip_data_title_killswitch") ? k.ZS.setAttribute("title", r) : k.ZS.setAttribute("data-tooltip-title", r))
        },
        cu = function(k) {
            if (!k.V) {
                var l = new ndp(k);
                g.n(k, l);
                var r = new g.uH(k);
                g.n(k, r);
                k.V = new iQc(l, r, k.player.B(), k.player.getVideoData(), k.logger, k.player, k.PM)
            }
            return k.V
        },
        D8c = function(k, l) {
            var r = !1,
                M = l.getElementsByTagName("annotations");
            if (M && !(M.length < 1) && (M = M[0].getAttribute("itct"))) {
                var U = g.h8();
                if (U) {
                    var m = g.ju();
                    m && g.vY(g.nS)(void 0, U, m, [g.eu(M)])
                }
            }
            l = l.getElementsByTagName("annotation");
            for (M = 0; M < l.length; M++) {
                m = OQ$(k, l[M]);
                U = null;
                try {
                    if (m) {
                        var F = m.id,
                            Y = /.+/;
                        var c = typeof F === "string" && Y != null && F != null && F.match(Y) ? F : "";
                        var E = xE(m.type, me3),
                            f = xE(m.style, FJ9),
                            R = r2O(m.data),
                            J = R.length !== 0 ? JSON.parse(R) : {};
                        var u = m.action;
                        m = IvT;
                        if (u == null) var e = null;
                        else if (g.FT(u)) {
                            Y = [];
                            for (var X = g.S(u), V = X.next(); !V.done; V = X.next()) {
                                var t = m(V.value);
                                t && Y.push(t)
                            }
                            e = Y
                        } else {
                            var W = m(u);
                            e = W ? [W] : []
                        }
                        U = c && E ? new Yr5(c, E, f, e, J) : null
                    } else U = null
                } catch (IH) {}
                if (U)
                    if (U.type === "branding" || U.type === "promotion") {
                        m = k;
                        Y = U;
                        var d = A25(m),
                            q = null;
                        switch (Y.type) {
                            case "branding":
                                if (m.player.B().BD) break;
                                m.player.D("web_player_overlay_positioned_layout") ? (d.setAttribute("data-overlay-order", "11"), m.player.Ar(d, 4, !0)) : m.U.element.appendChild(d);
                                q = new IO(d, cu(m), Y);
                                break;
                            case "promotion":
                                g.DS(m.player, d, 4), q = new nKx(d, cu(m), Y)
                        }
                        q && q.bJ();
                        if (m = q) g.n(k, m), k.Y[U.id] = m
                    } else if (U.type ===
                    "card" || U.type === "drawer") {
                    k.T || (k.T = Mop(k), g.n(k, k.T));
                    if (U.type === "card") {
                        d = k.T;
                        var z = (r = U) && r.data && r.data.card_type;
                        U = r.data;
                        if (z) switch (m = U.tracking || {}, m = {
                            K8: m.impression,
                            click: m.click,
                            close: m.close,
                            Eh: m.teaser_impression,
                            DM: m.teaser_click
                        }, Y = U.tracking_params || {}, q = null, z) {
                            case "collaborator":
                                r = {
                                    id: r.id,
                                    timestamp: U.timestamp || 0,
                                    type: U.card_type,
                                    teaserText: U.teaser_text,
                                    teaserDurationMs: U.teaser_duration_ms,
                                    startMs: U.start_ms,
                                    autoOpen: U.auto_open || !1,
                                    sessionData: U.session_data || {},
                                    sponsored: U.sponsored ||
                                        !1,
                                    nx: m,
                                    ey: Y.card ? g.eu(Y.card) : null,
                                    sb: Y.teaser ? g.eu(Y.teaser) : null,
                                    uH: Y.icon ? g.eu(Y.icon) : null,
                                    channelId: U.channel_id,
                                    customMessage: U.custom_message ? U.custom_message : null,
                                    profileImageUrl: U.image_url,
                                    title: U.title,
                                    metaInfo: U.meta_info,
                                    url: TU({
                                        pause_on_navigation: U.pause_on_navigation,
                                        target: U.target || "new",
                                        value: U.url
                                    }),
                                    onClickCommand: null
                                };
                                MJ(d, r);
                                break;
                            case "playlist":
                                r = {
                                    id: r.id,
                                    timestamp: U.timestamp || 0,
                                    type: U.card_type,
                                    teaserText: U.teaser_text,
                                    teaserDurationMs: U.teaser_duration_ms,
                                    startMs: U.start_ms,
                                    autoOpen: U.auto_open || !1,
                                    sessionData: U.session_data || {},
                                    sponsored: U.sponsored || !1,
                                    nx: m,
                                    ey: Y.card ? g.eu(Y.card) : null,
                                    sb: Y.teaser ? g.eu(Y.teaser) : null,
                                    uH: Y.icon ? g.eu(Y.icon) : null,
                                    fB: U.image_url,
                                    playlistVideoCount: U.playlist_video_count,
                                    customMessage: U.custom_message ? U.custom_message : null,
                                    title: U.title,
                                    metaInfo: U.meta_info,
                                    url: TU({
                                        pause_on_navigation: U.pause_on_navigation,
                                        target: U.target || "new",
                                        value: U.url
                                    }),
                                    onClickCommand: null
                                };
                                MJ(d, r);
                                break;
                            case "productListing":
                                U.signin_url && (q = TU({
                                    target: "current",
                                    value: U.signin_url
                                }));
                                z = [];
                                for (var G = U.offers || [], v = 0; v < G.length; v++) z.push(new umi(g.HV(G[v].merchant), g.HV(G[v].price)));
                                r = {
                                    id: r.id,
                                    timestamp: U.timestamp || 0,
                                    type: U.card_type,
                                    teaserText: U.teaser_text,
                                    teaserDurationMs: U.teaser_duration_ms,
                                    startMs: U.start_ms,
                                    autoOpen: U.auto_open || !1,
                                    sessionData: U.session_data || {},
                                    sponsored: U.sponsored || !1,
                                    nx: m,
                                    ey: Y.card ? g.eu(Y.card) : null,
                                    sb: Y.teaser ? g.eu(Y.teaser) : null,
                                    uH: Y.icon ? g.eu(Y.icon) : null,
                                    imageUrl: U.image_url,
                                    displayDomain: U.display_domain ? U.display_domain : null,
                                    showLinkIcon: !!U.show_link_icon,
                                    gB: U.button_icon_url ? U.button_icon_url : null,
                                    title: U.title,
                                    customMessage: U.custom_message ? U.custom_message : null,
                                    url: TU({
                                        pause_on_navigation: U.pause_on_navigation,
                                        target: U.target || "new",
                                        value: U.url
                                    }),
                                    NVj: q,
                                    Y76: U.signin_title ? U.signin_title : void 0,
                                    JPf: U.signin_message ? U.signin_message : void 0,
                                    offers: z,
                                    onClickCommand: null
                                };
                                MJ(d, r);
                                break;
                            case "simple":
                                r = {
                                    id: r.id,
                                    timestamp: U.timestamp || 0,
                                    type: U.card_type,
                                    teaserText: U.teaser_text,
                                    teaserDurationMs: U.teaser_duration_ms,
                                    startMs: U.start_ms,
                                    autoOpen: U.auto_open || !1,
                                    sessionData: U.session_data || {},
                                    sponsored: U.sponsored || !1,
                                    nx: m,
                                    ey: Y.card ? g.eu(Y.card) : null,
                                    sb: Y.teaser ? g.eu(Y.teaser) : null,
                                    uH: Y.icon ? g.eu(Y.icon) : null,
                                    imageUrl: U.image_url,
                                    displayDomain: U.display_domain ? U.display_domain : null,
                                    showLinkIcon: !!U.show_link_icon,
                                    gB: U.button_icon_url ? U.button_icon_url : null,
                                    title: U.title,
                                    customMessage: U.custom_message ? U.custom_message : null,
                                    url: TU({
                                        pause_on_navigation: U.pause_on_navigation,
                                        target: U.target || "new",
                                        value: U.url
                                    }),
                                    onClickCommand: null
                                };
                                MJ(d, r);
                                break;
                            case "video":
                                r = {
                                    id: r.id,
                                    timestamp: U.timestamp || 0,
                                    type: U.card_type,
                                    teaserText: U.teaser_text,
                                    teaserDurationMs: U.teaser_duration_ms,
                                    startMs: U.start_ms,
                                    autoOpen: U.auto_open || !1,
                                    sessionData: U.session_data || {},
                                    sponsored: U.sponsored || !1,
                                    nx: m,
                                    ey: Y.card ? g.eu(Y.card) : null,
                                    sb: Y.teaser ? g.eu(Y.teaser) : null,
                                    uH: Y.icon ? g.eu(Y.icon) : null,
                                    fB: U.image_url,
                                    videoDuration: U.video_duration || null,
                                    customMessage: U.custom_message ? U.custom_message : null,
                                    title: U.title,
                                    metaInfo: U.meta_info,
                                    isLiveNow: !!U.is_live_now,
                                    url: TU({
                                        pause_on_navigation: U.pause_on_navigation,
                                        target: U.target || "new",
                                        value: U.url
                                    }),
                                    onClickCommand: null
                                }, MJ(d, r)
                        }
                    } else avq(k.T, U);
                    r = !0
                }
            }
            r && (tz(k.player), k.nf())
        },
        Ue_ = function(k, l) {
            var r = !1;
            k.T || (k.T = Mop(k), g.n(k, k.T));
            for (var M = g.S(l.cards || []), U = M.next(); !U.done; U = M.next()) U = U.value, U.cardRenderer && (SrM(k.T, U.cardRenderer), r = !0);
            if (r) {
                var m;
                (m = k.player.getVideoData()) != null && g.MG(m) || (r = k.T, M = l.headerText ? g.cU(l.headerText) : "", g.yA(r.zs, M), r.N && (r.J.D("player_tooltip_data_title_killswitch") ? r.N.setAttribute("title", M) : r.N.setAttribute("data-tooltip-title", M)), r.context.videoData.eventId && (r.eventId = r.context.videoData.eventId), r.L1 = l.trackingParams ? g.eu(l.trackingParams) : null, r.Z =
                    l.closeButton.infoCardIconRenderer.trackingParams ? g.eu(l.closeButton.infoCardIconRenderer.trackingParams) : null, r.uH = l.icon.infoCardIconRenderer.trackingParams ? g.eu(l.icon.infoCardIconRenderer.trackingParams) : null, k.nf());
                tz(k.player)
            }
        },
        IPc = function(k, l, r, M, U) {
            if (!k.player.B().BD) {
                var m = [];
                l.navigationEndpoint && g.N(l.navigationEndpoint, g.Gr) && g.N(l.navigationEndpoint, g.Gr).browseId && m.push(new oKx("openUrl", "click", new M0j("/channel/" + g.N(l.navigationEndpoint, g.Gr).browseId, "new", !0, !0)));
                var F = l.watermark.thumbnails[0];
                M = {
                    channel_name: l.channelName,
                    end_ms: l.endTimeMs,
                    image_height: F.height,
                    image_type: 1,
                    image_url: F.url,
                    image_width: F.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: r,
                        ei: U,
                        feature: "iv",
                        itct: l.trackingParams,
                        src_vid: M
                    },
                    start_ms: l.startTimeMs
                };
                if (l.subscribeButton && g.N(l.subscribeButton,
                        g.sf)) {
                    M.channel_id = g.N(l.subscribeButton, g.sf).channelId;
                    var Y;
                    l = g.N(l.subscribeButton, g.sf);
                    F = U = null;
                    l.subscribed ? (l.subscriberCountWithUnsubscribeText && (U = g.cU(l.subscriberCountWithUnsubscribeText)), l.subscriberCountText && (F = g.cU(l.subscriberCountText))) : (l.subscriberCountText && (U = g.cU(l.subscriberCountText)), l.subscriberCountWithSubscribeText && (F = g.cU(l.subscriberCountWithSubscribeText)));
                    var c, E = ((c = g.N((Y = l.signInEndpoint) == null ? void 0 : Y.commandMetadata, g.Xe)) == null ? void 0 : c.url) || "";
                    Y = {
                        subscribeText: g.cU(l.unsubscribedButtonText),
                        subscribeCount: U || "",
                        unsubscribeText: g.cU(l.subscribedButtonText),
                        unsubscribeCount: F || "",
                        enabled: l.enabled || !1,
                        classic: !1,
                        subscribed: l.subscribed || !1,
                        feature: "iv",
                        signInUrl: E
                    };
                    M.standalone_subscribe_button_data = Y
                }
                m = new Yr5(r, "branding", "branding", m, M);
                Y = A25(k);
                k.player.D("web_player_overlay_positioned_layout") ? (Y.setAttribute("data-overlay-order", "11"), k.player.Ar(Y, 4, !0)) : k.U.element.appendChild(Y);
                m = new IO(Y, cu(k), m);
                m.bJ();
                g.n(m, m);
                k.Y[r] = m
            }
        },
        kJx = function(k, l) {
            return function() {
                var r = g.zM.apply(0,
                    arguments);
                k.FQ() || k.Pn.push(g.QW.fJ(function() {
                    l.apply(null, g.un(r))
                }))
            }
        },
        YIj = function(k) {
            return k === "annotation-editor" || k === "live-dashboard"
        };
    g.xB.prototype.I3 = g.Uv(39, function(k, l) {
        var r = g.il(this.GJ());
        r && r.I3(k, l)
    });
    var Cq = {},
        di = null;
    g.pi(Bs, g.Is);
    g.p = Bs.prototype;
    g.p.getDuration = function() {
        return this.duration
    };
    g.p.play = function(k) {
        if (k || this.T == 0) this.progress = 0, this.coords = this.U;
        else if (this.isPlaying()) return !1;
        Hs(this);
        this.startTime = k = g.uO();
        this.isPaused() && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.L = this.startTime;
        this.progress || this.Bc();
        this.GY("play");
        this.isPaused() && this.GY("resume");
        this.T = 1;
        var l = g.cq(this);
        l in Cq || (Cq[l] = this);
        duO();
        HNq(this, k);
        return !0
    };
    g.p.stop = function(k) {
        Hs(this);
        this.T = 0;
        k && (this.progress = 1);
        BbT(this, this.progress);
        this.onStop();
        this.WR()
    };
    g.p.pause = function() {
        this.isPlaying() && (Hs(this), this.T = -1, this.GY("pause"))
    };
    g.p.Ts = function() {
        this.T == 0 || this.stop(!1);
        this.GY("destroy");
        Bs.yj.Ts.call(this)
    };
    g.p.destroy = function() {
        this.dispose()
    };
    g.p.Te = function() {
        this.GY("animate")
    };
    g.p.GY = function(k) {
        this.dispatchEvent(new bN3(k, this))
    };
    g.pi(bN3, g.T7);
    g.pi(bp, Bs);
    bp.prototype.G = function() {};
    bp.prototype.Te = function() {
        this.G();
        bp.yj.Te.call(this)
    };
    bp.prototype.WR = function() {
        this.G();
        bp.yj.WR.call(this)
    };
    bp.prototype.Bc = function() {
        this.G();
        bp.yj.Bc.call(this)
    };
    g.pi(qwi, bp);
    qwi.prototype.G = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.h(ndp, g.Q);
    g.p = ndp.prototype;
    g.p.listen = function(k, l, r, M) {
        r = (0, g.fi)(r, M || this.U);
        k = g.jk(k, l, r);
        this.T.push(k);
        return k
    };
    g.p.gD = function(k, l, r, M) {
        r = (0, g.fi)(r, M || this.U);
        k = Pu$(k, l, r);
        this.T.push(k);
        return k
    };
    g.p.gi = function(k) {
        g.hV(k);
        g.Zj(this.T, k)
    };
    g.p.removeAll = function() {
        g.hV(this.T);
        this.T.length = 0
    };
    g.p.Ts = function() {
        this.removeAll();
        g.Q.prototype.Ts.call(this)
    };
    g.h(gdi, g.Zg);
    g.p = gdi.prototype;
    g.p.load = function() {
        g.Zg.prototype.load.call(this);
        if (!ip(this)) {
            var k = g.TKv(this.player.getVideoData());
            k ? (k = z69(k, Nb0(this)), nq(this, k, !1)) : xux(this)
        }
    };
    g.p.unload = function() {
        nq(this, null);
        this.L && (this.L.abort(), this.L = null);
        g.Zg.prototype.unload.call(this)
    };
    g.p.uQ = function(k, l) {
        return ip(this) ? k === "loadCustomEndscreenRenderer" ? (k = z69(l, "new"), nq(this, k), !0) : null : null
    };
    g.p.getOptions = function() {
        return ip(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.p.XY = function() {
        if (this.endscreen && this.endscreen.elements) {
            var k = this.player.getVideoContentRect();
            if (k && k.width !== 0 && k.height !== 0) {
                var l = this.player.getPlayerSize();
                if (l && l.width !== 0 && l.height !== 0) {
                    var r = k.width / k.height;
                    var M = 0;
                    for (var U = -1, m = 0; m < c_q.length; m++) {
                        var F = Math.abs(l.width - c_q[m]);
                        if (U === -1 || M >= F) U = m, M = F
                    }
                    M = EA$[U];
                    this.G && g.Td(this.G.element, "outline-width", Math.max(l.width, l.height) + "px");
                    for (l = 0; l < this.endscreen.elements.length; ++l)
                        if (m = this.endscreen.elements[l].id, U = this.U[m],
                            F = this.Y[m], U && F) {
                            var Y = F.width * r / F.aspectRatio,
                                c = Math.round(F.width * k.width);
                            m = Math.round(Y * k.height);
                            var E = k.left + Math.round(F.left * k.width),
                                f = k.top + Math.round(F.top * k.height);
                            g.Mr(U.element, c, m);
                            g.DD(U.element, E, f);
                            g.md(U.element, fPp);
                            c > 256 || m > 256 ? g.MY(U.element, "ytp-ce-large-round") : c > 96 || m > 96 ? g.MY(U.element, "ytp-ce-medium-round") : g.MY(U.element, "ytp-ce-small-round");
                            g.md(U.element, Rui);
                            c = F.left + F.width / 2;
                            F = F.top + Y / 2;
                            g.MY(U.element, c <= .5 && F <= .5 ? "ytp-ce-top-left-quad" : c > .5 && F <= .5 ? "ytp-ce-top-right-quad" :
                                c <= .5 && F > .5 ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.md(U.element, EA$);
                            g.MY(U.element, M);
                            (U = g.cn(document, "div", "ytp-ce-expanding-overlay-body", U.element)[0]) && g.Td(U, "height", m + "px")
                        }
                }
            }
        }
    };
    g.p.onCueRangeEnter = function(k) {
        if (this.endscreen)
            if (k.getId() === "ytp-ce-in-endscreen") Nt(this, this.endscreen.impressionUrls), (k = g.h8()) && this.endscreen.visualElement && g.A8(k, this.endscreen.visualElement), this.T && (g.MY(this.T, "ytp-ce-element-show"), this.T.removeAttribute("aria-hidden"), this.player.x_() ? g.MY(this.T, "ytp-ce-hide-button-lower") : g.os(this.T, "ytp-ce-hide-button-lower"));
            else {
                k = k.getId().substring(15);
                var l = this.U[k],
                    r = this.Y[k];
                g.MY(l.element, "ytp-ce-element-show");
                l.element.removeAttribute("aria-hidden");
                l = this.player.getRootNode();
                g.MY(l, "ytp-ce-shown");
                Nt(this, r.impressionUrls);
                (l = g.h8()) && g.A8(l, r.visualElement);
                this.player.B().Z && this.player.Bn("endscreenelementshown", k)
            }
    };
    g.p.onCueRangeExit = function(k) {
        if (k.getId() === "ytp-ce-in-endscreen") this.T && (g.os(this.T, "ytp-ce-element-show"), this.T.setAttribute("aria-hidden", "true"));
        else {
            k = k.getId().substring(15);
            var l = this.U[k];
            g.os(l.element, "ytp-ce-element-show");
            l.element.setAttribute("aria-hidden", "true");
            l = this.player.getRootNode();
            g.os(l, "ytp-ce-shown");
            this.player.B().Z && this.player.Bn("endscreenelementhidden", k)
        }
    };
    g.p.M4Q = function(k) {
        var l = this;
        k.target === window && (new g.xn(function() {
            for (var r = g.S(Object.values(l.U)), M = r.next(); !M.done; M = r.next()) g.md(M.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    g.p.a4 = function(k) {
        for (var l = g.S(Object.values(this.U)), r = l.next(); !r.done; r = l.next()) r = r.value, k ? r.element.setAttribute("hidden", "") : r.element.removeAttribute("hidden")
    };
    g.p.npU = function(k) {
        this.T && this.player.getRootNode().removeChild(this.T);
        k && (g.MY(k, "ytp-ce-hide-button-container"), this.T = k, g.DS(this.player, this.T, 4))
    };
    var c_q = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        EA$ = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        Rui = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        fPp = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var U8q = {
        eTQ: "current",
        mJs: "new"
    };
    var m8i = {
            CLOSE: "close",
            nD$: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        FPq = {
            xmU: "click",
            CLOSE: "close",
            gyj: "hidden",
            cXB: "rollOut",
            ur$: "rollOver",
            oA1: "shown"
        };
    Yr5.prototype.NR = function() {
        var k = c23(this, function(l) {
            return l.type === "openUrl" && l.url != null
        });
        return k ? k.url : null
    };
    var FJ9 = {
            QsQ: "anchored",
            qk: "branding",
            CHANNEL: "channel",
            IDQ: "cta",
            FIj: "highlightText",
            TFQ: "label",
            PLAYLIST: "playlist",
            POPUP: "popup",
            baQ: "speech",
            SUBSCRIBE: "subscribe",
            JYs: "title",
            VIDEO: "video",
            PWj: "website"
        },
        me3 = {
            qk: "branding",
            pMZ: "card",
            fDG: "drawer",
            tgQ: "highlight",
            imQ: "marker",
            JXQ: "promotion",
            TEXT: "text",
            ZM$: "widget"
        };
    g.h(si, g.Q);
    g.p = si.prototype;
    g.p.addCueRange = function(k, l, r, M, U) {
        k = new g.xQ(k, l, {
            id: r,
            namespace: "annotations_module"
        });
        M && this.sG.set(k, M);
        U && this.XQ.set(k, U);
        this.context.J.WF([k], 1)
    };
    g.p.bJ = function() {
        this.context.U.subscribe("resize", this.oQ, this)
    };
    g.p.TJ = function() {
        return this.element
    };
    g.p.Ui = function(k, l, r, M, U, m) {
        if (this.V$) return !1;
        m && (m.stopPropagation(), m.preventDefault());
        this.navigate(k, r, M, U);
        return !1
    };
    g.p.show = function() {};
    g.p.hide = function() {};
    g.p.destroy = function() {
        g.XZ(this.TJ())
    };
    g.p.oQ = function() {};
    g.p.navigate = function(k, l, r, M) {
        var U = this,
            m = Lq(k);
        if (m) {
            var F = p6p(m, k.target),
                Y = function() {
                    k.T && U.context.J.pauseVideo();
                    var c = U.context.videoData.ox || !1,
                        E = g.kh(m || "");
                    c && E && (E.v || E.list) ? U.context.J.cA(E.v, l, E.list, !1) : g.nZ(m || "", F === "current" ? "_top" : void 0, l)
                };
            F === "new" && (Y(), Y = null);
            Y7(this.context.logger, r, Y, M);
            ez9(m) || (r = g.h8(), M = l.itct, r && M && g.Oo(r, g.eu(M)))
        }
    };
    g.p.Ts = function() {
        this.sG.clear();
        this.XQ.clear();
        g.Q.prototype.Ts.call(this)
    };
    g.p.createElement = function(k) {
        k = new g.x(k);
        g.n(this, k);
        return k.element
    };
    g.h(hz_, si);
    g.p = hz_.prototype;
    g.p.eq = function() {
        this.Pn && MJ(this, this.Pn)
    };
    g.p.isAvailable = function() {
        var k;
        if (k = !!this.cards.length)(k = this.J.getRootNode()) ? (k = g.Uj(k), k = 173 < k.width && 173 < k.height) : k = !1;
        return k
    };
    g.p.oQ = function() {
        var k = this.isAvailable();
        g.o0(this.TJ(), k);
        g.FD(this.context.J.getRootNode(), g.w7.IV_DRAWER_ENABLED, k);
        tz(this.J)
    };
    g.p.destroy = function() {
        this.J.I3(!1);
        try {
            this.J.getRootNode().removeChild(this.L)
        } catch (k) {}
        g.Db(this.vn);
        g.VS(this.YU);
        this.Dj && this.Dj.dispose();
        this.Y && this.Y.dispose();
        si.prototype.destroy.call(this)
    };
    g.p.XC = function() {
        var k = this;
        this.context.T.listen(g.E1("iv-drawer-close-button", this.L), "click", this.EJ, this);
        this.context.T.listen(this.U, "touchend", function() {
            k.S1.start()
        });
        this.context.T.listen(this.U, "scroll", this.P7, this);
        this.context.U.subscribe("onHideControls", function() {
            k.gQ = !0
        });
        this.context.U.subscribe("onShowControls", function() {
            k.gQ = !1
        });
        this.context.U.subscribe("onVideoAreaChange", function() {
            k.gQ = g.rW(k.J.getRootNode(), "ytp-autohide")
        });
        this.vn.push(g.Od("iv-button-shown", this.wnU, this));
        this.vn.push(g.Od("iv-button-hidden", this.PZQ, this));
        ZQi(this)
    };
    g.p.findLastIndex = function(k) {
        if (this.cards.length === 0) return 0;
        var l = g.w5(this.cards, function(r) {
            return k.Kg.startMs > r.Kg.startMs || k.Kg.startMs === r.Kg.startMs && k.Kg.timestamp >= r.Kg.timestamp ? !0 : !1
        });
        return l === -1 ? 0 : l + 1
    };
    g.p.EJ = function() {
        if (this.G) {
            Y7(this.context.logger, m6(this).nx.close);
            var k = g.h8();
            k && this.Z && g.Oo(k, this.Z);
            l3(this)
        }
    };
    g.p.P7 = function() {
        g.FD(this.L, "iv-drawer-scrolled", this.U.scrollTop > 0)
    };
    g.p.wnU = function() {
        var k = g.h8(),
            l = m6(this);
        l = l ? l.uH : this.uH;
        k && l && g.G5(k, [l])
    };
    g.p.PZQ = function() {
        var k = g.h8(),
            l = m6(this);
        l = l ? l.uH : this.uH;
        k && l && g.so(k, [l])
    };
    g.p.t1 = function() {
        var k = m6(this);
        Y7(this.context.logger, k.nx.Eh);
        var l = g.h8();
        if (l && k)
            if (this.J.D("web_infocards_teaser_show_logging_fix")) {
                var r = [];
                k.sb && r.push(k.sb);
                k.uH && r.push(k.uH);
                r.length > 0 && g.G5(l, r)
            } else g.G5(l, [k.sb, k.uH])
    };
    g.p.TQf = function() {
        var k = g.h8(),
            l = m6(this);
        k && l && g.so(k, [l.sb])
    };
    g.p.HC = function(k) {
        var l = m6(this),
            r = g.h8();
        this.T ? k ? (k = this.context.logger, Y7(k, l.nx.DM), k.J.sendVideoStatsEngageEvent(4, void 0), r && l.sb && g.Oo(r, l.sb)) : (k = this.context.logger, Y7(k, l.nx.DM), k.J.sendVideoStatsEngageEvent(4, void 0), r && l.uH && g.Oo(r, l.uH)) : (k = this.context.logger, Y7(k, l.nx.DM), k.J.sendVideoStatsEngageEvent(4, void 0), r && this.uH && g.Oo(r, this.uH))
    };
    g.h(F1, si);
    F1.prototype.bJ = function() {
        si.prototype.bJ.call(this);
        HQ9(this)
    };
    F1.prototype.show = function() {
        si.prototype.show.call(this);
        var k = g.h8(),
            l = this.annotation.data;
        k && l && (l = l.session_data) && g.G5(k, [g.eu(l.itct)])
    };
    F1.prototype.hide = function() {
        si.prototype.hide.call(this);
        var k = g.h8(),
            l = this.annotation.data;
        k && l && (l = l.session_data) && g.so(k, [g.eu(l.itct)])
    };
    g.h(IO, F1);
    IO.prototype.show = function() {
        if (!this.isActive) {
            F1.prototype.show.call(this);
            if (!this.K) {
                g.MY(this.TJ(), "iv-branding");
                var k = this.annotation.data;
                this.U = this.createElement({
                    S: "img",
                    RB: ["branding-img", "iv-click-target"],
                    X: {
                        "aria-label": "Channel watermark",
                        src: k.image_url,
                        width: k.image_width,
                        height: k.image_height
                    }
                });
                g.o0(this.U, !1);
                var l = this.createElement({
                    S: "button",
                    RB: ["branding-img-container", "ytp-button"]
                });
                l.appendChild(this.U);
                this.TJ().appendChild(l);
                var r = this.annotation.NR();
                r && Oi(this, l,
                    r, this.annotation.id, k.session_data);
                this.context.J.D("disable_branding_context") || QVT(this, k);
                this.K = !0
            }
            g.o0(this.TJ(), !0);
            this.isActive = !0;
            if (this.U) {
                try {
                    B0_(this, this.U)
                } catch (M) {}
                g.MY(this.context.J.getRootNode(), "ytp-branding-shown");
                this.context.J.getRootNode().style.setProperty("--branding-image-width", this.U.getAttribute("width") + "px")
            }
        }
    };
    IO.prototype.hide = function() {
        this.isActive && (F1.prototype.hide.call(this), g.o0(this.TJ(), !1), this.isActive = !1, g.os(this.context.J.getRootNode(), "ytp-branding-shown"))
    };
    IO.prototype.destroy = function() {
        this.T && (this.T.dispose(), this.T = null);
        g.os(this.context.J.getRootNode(), "ytp-branding-shown");
        F1.prototype.destroy.call(this)
    };
    g.h(nKx, F1);
    g.p = nKx.prototype;
    g.p.show = function() {
        this.isActive || (F1.prototype.show.call(this), this.V || (zzx(this), this.V = !0), g.o0(this.TJ(), !0), g.Q2(function() {
            g.os(this.TJ(), "iv-promo-inactive")
        }, 100, this), this.TJ().removeAttribute("aria-hidden"), this.isActive = !0, LPq(this), gKi(this), N0M(this, this.Y))
    };
    g.p.hide = function() {
        this.isActive && (g.MY(this.TJ(), "iv-promo-inactive"), this.isActive = !1, this.TJ().setAttribute("aria-hidden", "true"))
    };
    g.p.Ui = function(k, l, r, M, U, m) {
        return this.isCollapsed ? !1 : F1.prototype.Ui.call(this, k, l, r, M, U, m)
    };
    g.p.pn = function(k) {
        this.Z = !0;
        KP9(this, 500, k)
    };
    g.p.Bm = function() {
        this.Z = !1;
        x8_(this)
    };
    g.p.Mj = function(k) {
        k.stopPropagation();
        this.hide()
    };
    g.p.Em = function(k) {
        k.stopPropagation();
        LPq(this);
        this.isCollapsed = !0;
        g.MY(this.TJ(), "iv-promo-collapsed-no-delay");
        this.N.start()
    };
    g.p.destroy = function() {
        this.N.dispose();
        F1.prototype.destroy.call(this)
    };
    g.h(vK0, g.Zg);
    g.p = vK0.prototype;
    g.p.uQ = function(k, l) {
        if (!YIj(this.player.B().playerStyle)) return null;
        switch (k) {
            case "loadCustomAnnotationsXml":
                return (k = g.sO(l)) && D8c(this, k), !0;
            case "removeCustomAnnotationById":
                return l && this.T && (w6i(this.T, l), tz(this.player)), !0
        }
        return null
    };
    g.p.getOptions = function() {
        return YIj(this.player.B().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.p.ER = function() {
        var k = this.player.B(),
            l = this.player.getVideoData(),
            r = k.annotationsLoadPolicy || l.annotationsLoadPolicy;
        return l.ox || this.player.isMutedByEmbedsMutedAutoplay() ? !1 : r === 1 && !l.oA || k.gQ.get(l.videoId) || g.U4(l) || g.of(l) ? !0 : !1
    };
    g.p.nf = function() {
        if (this.G) {
            var k = this.player.lZ().getVideoContentRect(!0);
            g.Mr(this.G.element, k.width, k.height);
            g.DD(this.G.element, k.left, k.top)
        }
        if (this.T) {
            var l = this.player.Io();
            k = this.T;
            l = l.width;
            g.FD(k.L, "iv-drawer-small", l <= 426);
            g.FD(k.L, "iv-drawer-big", l >= 1280)
        }
    };
    g.p.FF = function(k) {
        Gkx(this, k.state);
        g.T(k.state, 2) && (this.x_() && this.Sy() && this.player.getPresentingPlayerType() !== 2 && this.eW(!1), this.I3(!1))
    };
    g.p.load = function() {
        function k(F) {
            var Y = l.loadNumber;
            l.N = null;
            l.loaded && l.loadNumber === Y && l.player.getVideoData().videoId === M && (F = g.c1(F) && F.responseXML ? F.responseXML : null) && (D8c(l, F), g.MY(l.player.getRootNode(), "iv-module-loaded"))
        }
        var l = this;
        g.Zg.prototype.load.call(this);
        Gkx(this, this.player.getPlayerStateObject());
        this.loadNumber++;
        var r = this.player.getVideoData(),
            M = r.videoId;
        g.s5() && (k = kJx(this, k));
        var U = {
            format: "XML",
            onFinish: k,
            onError: function() {
                l.N = null
            },
            urlParams: {}
        };
        r.isPharma && (U.urlParams.pharma = "1");
        U.method = "POST";
        U.withCredentials = !0;
        var m = this.player.B().gQ.get(M);
        m && lP$(U, m);
        m = m && (m.fh || m.TI);
        if (!r.Xf || m) r.YU ? sVq(this, r.YU, U) : (this.K = function() {
            if (!l.Z) l.onVideoDataChange(U);
            var F = l.player.getVideoData();
            (F == null ? 0 : g.MG(F)) && !l.vn && oAi(l, F)
        }, this.player.addEventListener("videodatachange", this.K));
        g.DS(this.player, this.G.element, 4);
        this.nf();
        (m = g.U4(r)) && Ue_(this, m);
        (m = g.of(r)) && m.featuredChannel && IPc(this, m.featuredChannel, m.annotationId || "branding", r.videoId || null, r.eventId || null);
        this.ZS = g.E1("ytp-cards-button", this.player.getRootNode());
        g.MG(r) && oAi(this, r)
    };
    g.p.onVideoDataChange = function(k) {
        var l = this.player.getVideoData();
        l.YU && sVq(this, l.YU, k)
    };
    g.p.unload = function() {
        this.player.j4("annotations_module");
        for (var k = g.S(Object.keys(this.Y)), l = k.next(); !l.done; l = k.next()) this.Y[l.value].destroy();
        this.V = null;
        this.T && (this.T.destroy(), this.T = null, tz(this.player));
        this.Z = !1;
        this.N && (this.N.abort(), this.N = null);
        this.vn = !1;
        this.Y = {};
        this.U.hide();
        g.Zg.prototype.unload.call(this);
        this.G.detach();
        this.K && (this.player.removeEventListener("videodatachange", this.K), this.K = null)
    };
    g.p.mX = function(k) {
        k === this.player.getVideoData().videoId && (this.loaded ? r__(this) : this.load())
    };
    g.p.x_ = function() {
        var k;
        return ((k = this.T) == null ? void 0 : k.isAvailable()) || this.vn
    };
    g.p.Sy = function() {
        return !!this.T && this.T.G
    };
    g.p.eW = function(k, l, r) {
        l = l === void 0 ? !1 : l;
        this.x_();
        this.T && (k ? r ? k7(this.T, r, l) : k7(this.T, "YOUTUBE_DRAWER_AUTO_OPEN", l) : l3(this.T))
    };
    g.p.I3 = function(k, l) {
        this.player.publish(k ? "cardsteasershow" : "cardsteaserhide", l)
    };
    g.p.Ts = function() {
        this.player.B().gQ.unsubscribe("vast_info_card_add", this.mX, this);
        g.os(this.player.getRootNode(), g.w7.IV_DRAWER_OPEN);
        for (var k = this.Pn, l = g.QW, r = 0, M = k.length; r < M; r++) l.rz(k[r]);
        this.Pn.length = 0;
        g.Zg.prototype.Ts.call(this)
    };
    g.p.createElement = function(k) {
        k = new g.x(k);
        g.n(this, k);
        return k.element
    };
    g.VZ("annotations_module", vK0);
    g.VZ("creatorendscreen", gdi);
})(_yt_player);