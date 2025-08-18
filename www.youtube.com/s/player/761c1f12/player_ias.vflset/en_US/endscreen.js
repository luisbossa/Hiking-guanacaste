(function(g) {
    var window = this;
    'use strict';
    var C55 = function(k) {
            k.publish("autonavvisibility")
        },
        dwi = function(k, l) {
            k.Bn("onAutonavCoundownStarted", l)
        },
        HO5 = function(k) {
            var l, r, M;
            return k == null ? void 0 : (l = k.playerOverlays) == null ? void 0 : (r = l.playerOverlayRenderer) == null ? void 0 : (M = r.autoplay) == null ? void 0 : M.playerOverlayAutoplayRenderer
        },
        mv = function(k) {
            var l = k.B(),
                r = l.L;
            g.x.call(this, {
                S: "a",
                j: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: r ? l.V : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                C: [{
                    S: "div",
                    RB: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    C: [{
                        S: "div",
                        X: {
                            "aria-label": "{{timestamp}}"
                        },
                        RB: ["ytp-autonav-timestamp"],
                        wQ: "{{duration}}"
                    }, {
                        S: "div",
                        RB: ["ytp-autonav-live-stamp"],
                        wQ: "Live"
                    }, {
                        S: "div",
                        RB: ["ytp-autonav-upcoming-stamp"],
                        wQ: "Upcoming"
                    }, {
                        S: "div",
                        j: "ytp-autonav-list-overlay",
                        C: [{
                            S: "div",
                            j: "ytp-autonav-mix-text",
                            wQ: "Mix"
                        }, {
                            S: "div",
                            j: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    S: "div",
                    RB: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    wQ: "{{title}}"
                }, {
                    S: "div",
                    RB: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    wQ: "{{author}}"
                }, {
                    S: "div",
                    RB: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    wQ: "{{views_and_publish_time}}"
                }]
            });
            this.J = k;
            this.suggestion =
                null;
            this.T = r;
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress)
        },
        Fq = function(k, l) {
            l = l === void 0 ? !1 : l;
            g.x.call(this, {
                S: "div",
                j: "ytp-autonav-endscreen-countdown-overlay"
            });
            var r = this;
            this.K = l;
            this.cancelCommand = this.Y = void 0;
            this.G = 0;
            this.container = new g.x({
                S: "div",
                j: "ytp-autonav-endscreen-countdown-container"
            });
            g.n(this, this.container);
            this.container.IB(this.element);
            l = k.B();
            var M = l.L;
            this.J = k;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.J.getVideoData());
            this.W(k, "videodatachange", this.onVideoDataChange);
            this.T = new g.x({
                S: "div",
                j: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                C: [{
                    S: "div",
                    j: "ytp-autonav-endscreen-upnext-header"
                }, {
                    S: "div",
                    j: "ytp-autonav-endscreen-upnext-alternative-header",
                    wQ: "{{autoplayAlternativeHeader}}"
                }, {
                    S: "a",
                    j: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: M ? l.V : ""
                    },
                    C: [{
                        S: "div",
                        j: "ytp-autonav-endscreen-upnext-thumbnail",
                        X: {
                            style: "{{background}}"
                        },
                        C: [{
                            S: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            RB: ["ytp-autonav-timestamp"],
                            wQ: "{{duration}}"
                        }, {
                            S: "div",
                            RB: ["ytp-autonav-live-stamp"],
                            wQ: "Live"
                        }, {
                            S: "div",
                            RB: ["ytp-autonav-upcoming-stamp"],
                            wQ: "Upcoming"
                        }]
                    }, {
                        S: "div",
                        j: "ytp-autonav-endscreen-video-info",
                        C: [{
                            S: "div",
                            j: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            S: "div",
                            j: "ytp-autonav-endscreen-upnext-title",
                            wQ: "{{title}}"
                        }, {
                            S: "div",
                            j: "ytp-autonav-endscreen-upnext-author",
                            wQ: "{{author}}"
                        }, {
                            S: "div",
                            j: "ytp-autonav-view-and-date",
                            wQ: "{{views_and_publish_time}}"
                        }, {
                            S: "div",
                            j: "ytp-autonav-author-and-view",
                            wQ: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.n(this, this.T);
            this.T.IB(this.container.element);
            M || this.W(this.T.bZ("ytp-autonav-endscreen-link-container"), "click", this.ZC);
            this.J.createClientVe(this.container.element, this, 115127);
            this.J.createClientVe(this.T.bZ("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.x({
                S: "div",
                j: "ytp-autonav-overlay"
            });
            g.n(this, this.overlay);
            this.overlay.IB(this.container.element);
            this.U = new g.x({
                S: "div",
                j: "ytp-autonav-endscreen-button-container"
            });
            g.n(this, this.U);
            this.U.IB(this.container.element);
            this.cancelButton = new g.x({
                S: "button",
                RB: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", l.D("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "Cancel autoplay"
                },
                wQ: "Cancel"
            });
            g.n(this, this.cancelButton);
            this.cancelButton.IB(this.U.element);
            this.cancelButton.listen("click", this.A1, this);
            this.J.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.x({
                S: "a",
                RB: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    l.D("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                wQ: "Play Now"
            });
            g.n(this, this.playButton);
            this.playButton.IB(this.U.element);
            this.playButton.listen("click", this.ZC, this);
            this.J.createServerVe(this.playButton.element, this.playButton, !0);
            (l = this.J.getVideoData()) && BMq(this, l);
            this.L = new g.xn(function() {
                bO$(r)
            }, 500);
            g.n(this, this.L);
            this.WB();
            this.W(k, "autonavvisibility", this.WB);
            this.J.D("web_autonav_color_transition") && (this.W(k, "autonavchange", this.fH), this.W(k, "onAutonavCoundownStarted", this.V11))
        },
        II = function(k) {
            var l = k.J.Io(!0, k.J.isFullscreen());
            g.FD(k.container.element, "ytp-autonav-endscreen-small-mode", k.Yp(l));
            g.FD(k.container.element, "ytp-autonav-endscreen-is-premium", !!k.suggestion && !!k.suggestion.Gv1);
            g.FD(k.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !k.J.Lg());
            g.FD(k.J.getRootNode(), "countdown-running", k.eg());
            g.FD(k.container.element, "ytp-player-content", k.J.Lg());
            g.Td(k.overlay.element, {
                width: l.width + "px"
            });
            if (!k.eg()) {
                k.J.Lg() ? qPx(k, Math.round(Qh9(k) / 1E3)) : qPx(k);
                l = !!k.suggestion && !!k.suggestion.jA;
                var r = k.J.Lg() ||
                    !l;
                g.FD(k.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !r && l);
                g.FD(k.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", r && !l);
                k.U.a4(k.J.Lg());
                g.FD(k.element, "ytp-enable-w2w-color-transitions", iOj(k))
            }
        },
        bO$ = function(k) {
            var l = Qh9(k),
                r = Math,
                M = r.min;
            var U = k.G ? Date.now() - k.G : 0;
            r = M.call(r, U, l);
            qPx(k, Math.ceil((l - r) / 1E3));
            l - r <= 500 && k.eg() ? k.select(!0) : k.eg() && k.L.start()
        },
        Qh9 = function(k) {
            if (k.J.isFullscreen()) {
                var l;
                k = (l = k.J.getVideoData()) == null ? void 0 : l.Uw;
                return k === -1 || k === void 0 ? 8E3 : k
            }
            return k.J.zB() >= 0 ? k.J.zB() : g.lG(k.J.B().experiments, "autoplay_time") || 1E4
        },
        BMq = function(k, l) {
            l = l.getWatchNextResponse();
            var r, M;
            l = (r = HO5(l)) == null ? void 0 : (M = r.nextButton) == null ? void 0 : M.buttonRenderer;
            k.Y = l == null ? void 0 : l.navigationEndpoint;
            r = l == null ? void 0 : l.trackingParams;
            k.playButton && r && k.J.setTrackingParams(k.playButton.element, r)
        },
        iOj = function(k) {
            var l;
            return !((l = k.J.getVideoData()) == null || !l.watchToWatchTransitionRenderer)
        },
        qPx = function(k, l) {
            l = l === void 0 ? -1 : l;
            k = k.T.bZ("ytp-autonav-endscreen-upnext-header");
            g.at(k);
            if (l >= 0) {
                l = String(l);
                var r = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    M = "Up next in $SECONDS".indexOf(r);
                if (M >= 0) {
                    k.appendChild(g.jf("Up next in $SECONDS".slice(0, M)));
                    var U = g.p5("span");
                    g.ly(U, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.yA(U, l);
                    k.appendChild(U);
                    k.appendChild(g.jf("Up next in $SECONDS".slice(M + r.length)));
                    return
                }
            }
            g.yA(k, "Up next")
        },
        Y1 = function(k, l) {
            g.x.call(this, {
                S: "div",
                RB: ["html5-endscreen", "ytp-player-content", l || "base-endscreen"]
            });
            this.created = !1;
            this.player = k
        },
        cX = function(k) {
            g.x.call(this, {
                S: "div",
                RB: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                C: [{
                    S: "div",
                    j: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    S: "span",
                    j: "ytp-upnext-top",
                    C: [{
                        S: "span",
                        j: "ytp-upnext-header",
                        wQ: "Up Next"
                    }, {
                        S: "span",
                        j: "ytp-upnext-title",
                        wQ: "{{title}}"
                    }, {
                        S: "span",
                        j: "ytp-upnext-author",
                        wQ: "{{author}}"
                    }]
                }, {
                    S: "a",
                    j: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
                    C: [{
                        S: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        C: [{
                            S: "circle",
                            j: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            S: "circle",
                            j: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            S: "path",
                            j: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    S: "span",
                    j: "ytp-upnext-bottom",
                    C: [{
                        S: "span",
                        j: "ytp-upnext-cancel"
                    }, {
                        S: "span",
                        j: "ytp-upnext-paused",
                        wQ: "Autoplay is paused"
                    }]
                }]
            });
            this.api = k;
            this.cancelButton = null;
            this.Y = this.bZ("ytp-svg-autoplay-ring");
            this.G = this.notification = this.T = this.suggestion = null;
            this.L = new g.xn(this.O_, 5E3, this);
            this.U = 0;
            var l = this.bZ("ytp-upnext-cancel");
            this.cancelButton = new g.x({
                S: "button",
                RB: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "Cancel autoplay"
                },
                wQ: "Cancel"
            });
            g.n(this, this.cancelButton);
            this.cancelButton.listen("click", this.KH, this);
            this.cancelButton.IB(l);
            this.cancelButton && this.api.createClientVe(this.cancelButton.element,
                this, 115129);
            g.n(this, this.L);
            this.api.createClientVe(this.element, this, 18788);
            l = this.bZ("ytp-upnext-autoplay-icon");
            this.W(l, "click", this.Mp);
            this.api.createClientVe(l, this, 115130);
            this.s$();
            this.W(k, "autonavvisibility", this.s$);
            this.W(k, "mdxnowautoplaying", this.MpB);
            this.W(k, "mdxautoplaycanceled", this.Ea1);
            g.FD(this.element, "ytp-upnext-mobile", this.api.B().U)
        },
        nfO = function(k, l) {
            if (l) return l;
            if (k.api.isFullscreen()) {
                var r;
                k = (r = k.api.getVideoData()) == null ? void 0 : r.Uw;
                return k === -1 || k === void 0 ? 8E3 : k
            }
            return k.api.zB() >= 0 ? k.api.zB() : g.lG(k.api.B().experiments, "autoplay_time") || 1E4
        },
        Kx3 = function(k, l) {
            l = nfO(k, l);
            var r = Math,
                M = r.min;
            var U = (0, g.wG)() - k.U;
            r = M.call(r, U, l);
            l = l === 0 ? 1 : Math.min(r / l, 1);
            k.Y.setAttribute("stroke-dashoffset", "" + -211 * (l + 1));
            l >= 1 && k.eg() && k.api.getPresentingPlayerType() !== 3 ? k.select(!0) : k.eg() && k.T.start()
        },
        E$ = function(k) {
            Y1.call(this, k, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.x({
                S: "div",
                j: "ytp-suggestion-panel",
                C: [{
                    S: "div",
                    RB: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    wQ: "More videos"
                }]
            });
            this.Z = new g.x({
                S: "div",
                j: "ytp-suggestions-container"
            });
            this.videos = [];
            this.G = null;
            this.Y = this.K = !1;
            this.U = new Fq(this.player);
            g.n(this, this.U);
            this.U.IB(this.element);
            k.getVideoData().Zy ? this.T = this.U : (this.T = new cX(k), g.DS(this.player, this.T.element, 4), g.n(this, this.T));
            this.overlay = new g.x({
                S: "div",
                j: "ytp-autonav-overlay-cancelled-state"
            });
            g.n(this, this.overlay);
            this.overlay.IB(this.element);
            this.L = new g.yL(this);
            g.n(this, this.L);
            g.n(this, this.table);
            this.table.IB(this.element);
            this.table.show();
            g.n(this, this.Z);
            this.Z.IB(this.table.element);
            this.hide()
        },
        f1 = function(k) {
            var l = k.Lg();
            l !== k.Y && (k.Y = l, C55(k.player), k.Y ? (k.U !== k.T && k.U.hide(), k.table.hide()) : (k.U !== k.T && k.U.show(), k.table.show()))
        },
        z8c = function(k) {
            Y1.call(this, k, "videowall-endscreen");
            var l = this;
            this.J = k;
            this.stills = [];
            this.G = this.videoData = null;
            this.L = this.K = !1;
            this.Z = null;
            g.MY(this.element, "modern-videowall-endscreen");
            this.U = new g.yL(this);
            g.n(this, this.U);
            this.Y = new g.xn(function() {
                g.MY(l.element, "ytp-show-tiles")
            }, 0);
            g.n(this, this.Y);
            this.table = new g.UQ({
                S: "div",
                j: "ytp-modern-endscreen-content"
            });
            g.n(this, this.table);
            this.table.IB(this.element);
            k.getVideoData().Zy ? this.T = new Fq(k, !0) : this.T = new cX(k);
            g.n(this, this.T);
            g.DS(this.player, this.T.element, 4);
            k.createClientVe(this.element, this, 158789);
            this.hide()
        },
        RI = function(k) {
            return g.kN(k.player) && k.JM() && !k.G
        },
        Ja = function(k) {
            var l = k.Lg();
            l !== k.K && (k.K = l, C55(k.player))
        },
        gfq = function(k) {
            Y1.call(this, k, "subscribecard-endscreen");
            this.T = new g.x({
                S: "div",
                j: "ytp-subscribe-card",
                C: [{
                    S: "img",
                    j: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    S: "div",
                    j: "ytp-subscribe-card-right",
                    C: [{
                        S: "div",
                        j: "ytp-author-name",
                        wQ: "{{author}}"
                    }, {
                        S: "div",
                        j: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.n(this, this.T);
            this.T.IB(this.element);
            var l = k.getVideoData();
            this.subscribeButton = new g.ox("Subscribe", null, "Unsubscribe", null, !0, !1, l.B6, l.subscribed, "trailer-endscreen", null, k, !1);
            g.n(this, this.subscribeButton);
            this.subscribeButton.IB(this.T.bZ("html5-subscribe-button-container"));
            this.W(k, "videodatachange", this.f1);
            this.f1();
            this.hide()
        },
        uY = function(k) {
            var l = k.B(),
                r = g.aX || g.DL ? {
                    style: "will-change: opacity"
                } : void 0,
                M = l.L,
                U = ["ytp-videowall-still"];
            l.U && U.push("ytp-videowall-show-text");
            g.x.call(this, {
                S: "a",
                RB: U,
                X: {
                    href: "{{url}}",
                    target: M ? l.V : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                C: [{
                    S: "div",
                    j: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    S: "span",
                    j: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    C: [{
                        S: "span",
                        j: "ytp-videowall-still-info-bg",
                        C: [{
                            S: "span",
                            j: "ytp-videowall-still-info-content",
                            X: r,
                            C: [{
                                    S: "span",
                                    j: "ytp-videowall-still-info-title",
                                    wQ: "{{title}}"
                                },
                                {
                                    S: "span",
                                    j: "ytp-videowall-still-info-author",
                                    wQ: "{{author_and_views}}"
                                }, {
                                    S: "span",
                                    j: "ytp-videowall-still-info-live",
                                    wQ: "Live"
                                }, {
                                    S: "span",
                                    j: "ytp-videowall-still-info-duration",
                                    wQ: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    S: "span",
                    RB: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    C: [{
                        S: "span",
                        j: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        S: "span",
                        j: "ytp-videowall-still-listlabel-length",
                        C: [" (", {
                            S: "span",
                            wQ: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    S: "span",
                    RB: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    X: {
                        "aria-hidden": "true"
                    },
                    C: [{
                        S: "span",
                        j: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        S: "span",
                        j: "ytp-videowall-still-listlabel-length",
                        wQ: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.U = M;
            this.api = k;
            this.T = new g.yL(this);
            g.n(this, this.T);
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress);
            this.T.W(k, "videodatachange", this.onVideoDataChange);
            k.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        eY = function(k) {
            Y1.call(this, k, "videowall-endscreen");
            var l = this;
            this.J = k;
            this.G = 0;
            this.stills = [];
            this.L = this.videoData = null;
            this.Y = this.Z = !1;
            this.V = null;
            this.U = new g.yL(this);
            g.n(this, this.U);
            this.K = new g.xn(function() {
                g.MY(l.element, "ytp-show-tiles")
            }, 0);
            g.n(this, this.K);
            var r = new g.x({
                S: "button",
                RB: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Previous"
                },
                C: [g.RK()]
            });
            g.n(this, r);
            r.IB(this.element);
            r.listen("click", this.BC, this);
            this.table = new g.UQ({
                S: "div",
                j: "ytp-endscreen-content"
            });
            g.n(this, this.table);
            this.table.IB(this.element);
            r = new g.x({
                S: "button",
                RB: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Next"
                },
                C: [g.Jj()]
            });
            g.n(this, r);
            r.IB(this.element);
            r.listen("click", this.XF, this);
            k.getVideoData().Zy ? this.T = new Fq(k, !0) : this.T =
                new cX(k);
            g.n(this, this.T);
            g.DS(this.player, this.T.element, 4);
            k.createClientVe(this.element, this, 158789);
            this.hide()
        },
        p1 = function(k) {
            return g.kN(k.player) && k.JM() && !k.L
        },
        jY = function(k) {
            var l = k.Lg();
            l !== k.Z && (k.Z = l, C55(k.player))
        },
        NM3 = function(k, l) {
            g.x.call(this, {
                S: "button",
                RB: ["ytp-watch-on-youtube-button", "ytp-button"],
                wQ: "{{content}}"
            });
            this.J = k;
            this.buttonType = this.buttonType = l;
            this.Tr();
            this.buttonType === 2 && g.MY(this.element, "ytp-continue-watching-button");
            this.listen("click", this.onClick);
            this.listen("videodatachange", this.Tr);
            this.a4(!0)
        },
        ha = function(k) {
            Y1.call(this, k, "watch-again-on-youtube-endscreen");
            this.watchButton = new NM3(k, 1);
            g.n(this, this.watchButton);
            this.watchButton.IB(this.element);
            g.WMq(k) && (this.T = new g.DR(k), g.n(this, this.T), this.U = new g.x({
                S: "div",
                RB: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                C: [this.T]
            }), g.n(this, this.U), this.T.IB(this.U.element), this.U.IB(this.element));
            k.createClientVe(this.element, this, 156914);
            this.hide()
        },
        vfi = function(k) {
            g.Zg.call(this, k);
            var l = this;
            this.endScreen = null;
            this.T = this.U = this.G = !1;
            this.listeners = new g.yL(this);
            g.n(this, this.listeners);
            var r = k.B();
            k.isEmbedsShortsMode() ? this.endScreen = new ha(k) : xwc(k) ? (this.G = !0, Lxx(this), this.T ? this.endScreen = new E$(k) : r.D("delhi_modern_endscreen") ? this.endScreen = new z8c(k) : this.endScreen = new eY(k)) : r.qa ? this.endScreen = new gfq(k) : this.endScreen = new Y1(k);
            g.n(this, this.endScreen);
            g.DS(k, this.endScreen.element, 4);
            TM$(this);
            this.listeners.W(k, "videodatachange", this.onVideoDataChange, this);
            this.listeners.W(k, g.Tn("endscreen"), function(M) {
                l.onCueRangeEnter(M)
            });
            this.listeners.W(k, g.v0("endscreen"), function(M) {
                l.onCueRangeExit(M)
            })
        },
        Lxx = function(k) {
            var l = k.player.getVideoData();
            if (!l || k.T === l.y4 && k.U === l.Zy) return !1;
            k.T = l.y4;
            k.U = l.Zy;
            return !0
        },
        xwc = function(k) {
            k = k.B();
            return k.Zy && !k.qa && !k.disableOrganicUi
        },
        TM$ = function(k) {
            k.player.j4("endscreen");
            var l = k.player.getVideoData();
            l = new g.xQ(Math.max((l.lengthSeconds - 10) * 1E3, 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var r = new g.xQ(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            k.player.WF([l, r])
        };
    g.xB.prototype.zB = g.Uv(6, function() {
        return this.app.zB()
    });
    g.pp.prototype.zB = g.Uv(5, function() {
        return this.getVideoData().fT
    });
    g.KA.prototype.FL = g.Uv(4, function(k) {
        this.Ob().FL(k)
    });
    g.OH.prototype.FL = g.Uv(3, function(k) {
        this.Ve !== k && (this.Ve = k, this.Ak())
    });
    g.h(mv, g.x);
    mv.prototype.select = function() {
        this.J.cA(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.LS || void 0) && this.J.logClick(this.element)
    };
    mv.prototype.onClick = function(k) {
        g.VM(k, this.J, this.T, this.suggestion.sessionData || void 0) && this.select()
    };
    mv.prototype.onKeyPress = function(k) {
        switch (k.keyCode) {
            case 13:
            case 32:
                k.defaultPrevented || (this.select(), k.preventDefault())
        }
    };
    g.h(Fq, g.x);
    g.p = Fq.prototype;
    g.p.S6 = function(k) {
        this.suggestion !== k && (this.suggestion = k, g.fR(this.T, k), this.playButton.updateValue("url", this.suggestion.gz()), II(this))
    };
    g.p.eg = function() {
        return this.G > 0
    };
    g.p.tv = function() {
        this.eg() || (this.G = Date.now(), bO$(this), dwi(this.J, Qh9(this)), g.FD(this.J.getRootNode(), "countdown-running", this.eg()))
    };
    g.p.wU = function() {
        this.hY();
        bO$(this);
        var k = this.T.bZ("ytp-autonav-endscreen-upnext-header");
        k && g.yA(k, "Up next")
    };
    g.p.hY = function() {
        this.eg() && (this.L.stop(), this.G = 0)
    };
    g.p.select = function(k) {
        this.J.nextVideo(!1, k === void 0 ? !1 : k);
        this.hY()
    };
    g.p.ZC = function(k) {
        g.VM(k, this.J) && (k.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : k.currentTarget === this.T.bZ("ytp-autonav-endscreen-link-container") && (k = this.T.bZ("ytp-autonav-endscreen-link-container"), this.J.logVisibility(k, !0), this.J.logClick(k)), this.Y ? (this.J.Bn("innertubeCommand", this.Y), this.hY()) : this.select())
    };
    g.p.A1 = function() {
        this.J.logClick(this.cancelButton.element);
        g.Tu(this.J, !0);
        this.cancelCommand && this.J.Bn("innertubeCommand", this.cancelCommand)
    };
    g.p.onVideoDataChange = function(k, l) {
        BMq(this, l);
        k = l.getWatchNextResponse();
        var r, M;
        k = (r = HO5(k)) == null ? void 0 : (M = r.cancelButton) == null ? void 0 : M.buttonRenderer;
        this.cancelCommand = k == null ? void 0 : k.command
    };
    g.p.V11 = function(k) {
        if (iOj(this)) {
            var l = this.J.getVideoData().watchToWatchTransitionRenderer,
                r = l == null ? void 0 : l.fromColorPaletteDark;
            l = l == null ? void 0 : l.toColorPaletteDark;
            if (r && l) {
                var M = this.element;
                M.style.setProperty("--w2w-start-background-color", g.Hw(r.surgeColor));
                M.style.setProperty("--w2w-start-primary-text-color", g.Hw(r.primaryTitleColor));
                M.style.setProperty("--w2w-start-secondary-text-color", g.Hw(r.secondaryTitleColor));
                M.style.setProperty("--w2w-end-background-color", g.Hw(l.surgeColor));
                M.style.setProperty("--w2w-end-primary-text-color", g.Hw(l.primaryTitleColor));
                M.style.setProperty("--w2w-end-secondary-text-color", g.Hw(l.secondaryTitleColor));
                M.style.setProperty("--w2w-animation-duration", k + "ms")
            }
            g.FD(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.p.fH = function(k) {
        this.J.D("web_autonav_color_transition") && k !== 2 && g.FD(this.element, "ytp-w2w-animate", !1)
    };
    g.p.WB = function() {
        var k = this.J.Lg();
        this.K && this.hA !== k && this.a4(k);
        II(this);
        this.J.logVisibility(this.container.element, k);
        this.J.logVisibility(this.cancelButton.element, k);
        this.J.logVisibility(this.T.bZ("ytp-autonav-endscreen-link-container"), k);
        this.J.logVisibility(this.playButton.element, k)
    };
    g.p.Yp = function(k) {
        return k.width < 400 || k.height < 459
    };
    g.h(Y1, g.x);
    g.p = Y1.prototype;
    g.p.create = function() {
        this.created = !0
    };
    g.p.destroy = function() {
        this.created = !1
    };
    g.p.JM = function() {
        return !1
    };
    g.p.Lg = function() {
        return !1
    };
    g.p.SF = function() {
        return !1
    };
    g.h(cX, g.x);
    g.p = cX.prototype;
    g.p.O_ = function() {
        this.notification && (this.L.stop(), this.gi(this.G), this.G = null, this.notification.close(), this.notification = null)
    };
    g.p.S6 = function(k) {
        this.suggestion = k;
        g.fR(this, k, "hqdefault.jpg")
    };
    g.p.s$ = function() {
        this.a4(this.api.Lg());
        this.api.logVisibility(this.element, this.api.Lg());
        this.api.logVisibility(this.bZ("ytp-upnext-autoplay-icon"), this.api.Lg());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.Lg())
    };
    g.p.pr1 = function() {
        window.focus();
        this.O_()
    };
    g.p.tv = function(k) {
        var l = this;
        this.eg() || (g.kb("a11y-announce", "Up Next " + this.suggestion.title), this.U = (0, g.wG)(), this.T = new g.xn(function() {
            Kx3(l, k)
        }, 25), Kx3(this, k), dwi(this.api, nfO(this, k)));
        g.os(this.element, "ytp-upnext-autoplay-paused")
    };
    g.p.hide = function() {
        g.x.prototype.hide.call(this)
    };
    g.p.eg = function() {
        return !!this.T
    };
    g.p.wU = function() {
        this.hY();
        this.U = (0, g.wG)();
        Kx3(this);
        g.MY(this.element, "ytp-upnext-autoplay-paused")
    };
    g.p.hY = function() {
        this.eg() && (this.T.dispose(), this.T = null)
    };
    g.p.select = function(k) {
        k = k === void 0 ? !1 : k;
        if (this.api.B().D("autonav_notifications") && k && window.Notification && typeof document.hasFocus === "function") {
            var l = Notification.permission;
            l === "default" ? Notification.requestPermission() : l !== "granted" || document.hasFocus() || (this.O_(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.QH()
            }), this.G = this.W(this.notification, "click", this.pr1), this.L.start())
        }
        this.hY();
        this.api.nextVideo(!1, k)
    };
    g.p.Mp = function(k) {
        !g.wR(this.cancelButton.element, k.target) && g.VM(k, this.api) && (this.api.Lg() && this.api.logClick(this.bZ("ytp-upnext-autoplay-icon")), this.select())
    };
    g.p.KH = function() {
        this.api.Lg() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.Tu(this.api, !0)
    };
    g.p.MpB = function(k) {
        this.api.getPresentingPlayerType();
        this.show();
        this.tv(k)
    };
    g.p.Ea1 = function() {
        this.api.getPresentingPlayerType();
        this.hY();
        this.hide()
    };
    g.p.Ts = function() {
        this.hY();
        this.O_();
        g.x.prototype.Ts.call(this)
    };
    g.h(E$, Y1);
    g.p = E$.prototype;
    g.p.create = function() {
        Y1.prototype.create.call(this);
        this.L.W(this.player, "appresize", this.LR);
        this.L.W(this.player, "onVideoAreaChange", this.LR);
        this.L.W(this.player, "videodatachange", this.onVideoDataChange);
        this.L.W(this.player, "autonavchange", this.X4);
        this.L.W(this.player, "onAutonavCancelled", this.E5);
        this.onVideoDataChange()
    };
    g.p.show = function() {
        Y1.prototype.show.call(this);
        (this.K || this.G && this.G !== this.videoData.clientPlaybackNonce) && g.Tu(this.player, !1);
        g.kN(this.player) && this.JM() && !this.G ? (f1(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.T.select(!0) : this.T.tv() : this.videoData.autonavState === 3 && this.T.wU()) : (g.Tu(this.player, !0), f1(this));
        this.LR()
    };
    g.p.hide = function() {
        Y1.prototype.hide.call(this);
        this.T.wU();
        f1(this)
    };
    g.p.LR = function() {
        var k = this.player.Io(!0, this.player.isFullscreen());
        f1(this);
        II(this.U);
        g.FD(this.element, "ytp-autonav-cancelled-small-mode", this.Yp(k));
        g.FD(this.element, "ytp-autonav-cancelled-tiny-mode", this.hK(k));
        g.FD(this.element, "ytp-autonav-cancelled-mini-mode", k.width <= 400 || k.height <= 360);
        this.overlay && g.Td(this.overlay.element, {
            width: k.width + "px"
        });
        if (!this.Y)
            for (k = 0; k < this.videos.length; k++) g.FD(this.videos[k].element, "ytp-suggestion-card-with-margin", k % 2 === 1)
    };
    g.p.onVideoDataChange = function() {
        var k = this.player.getVideoData();
        if (this.videoData !== k && k) {
            this.videoData = k;
            if ((k = this.videoData.suggestions) && k.length || this.player.D("web_player_autonav_empty_suggestions_fix")) {
                var l = g.ys(this.videoData);
                l && (this.T.S6(l), this.T !== this.U && this.U.S6(l))
            }
            if (k && k.length)
                for (l = 0; l < Av_.length; ++l) {
                    var r = Av_[l];
                    if (k && k[r]) {
                        this.videos[l] = new mv(this.player);
                        var M = this.videos[l];
                        r = k[r];
                        M.suggestion !== r && (M.suggestion = r, g.fR(M, r));
                        g.n(this, this.videos[l]);
                        this.videos[l].IB(this.Z.element)
                    }
                }
            this.LR()
        }
    };
    g.p.X4 = function(k) {
        k === 1 ? (this.K = !1, this.G = this.videoData.clientPlaybackNonce, this.T.hY(), this.hA && this.LR()) : (this.K = !0, this.Lg() && (k === 2 ? this.T.tv() : k === 3 && this.T.wU()))
    };
    g.p.E5 = function(k) {
        k ? this.X4(1) : (this.G = null, this.K = !1)
    };
    g.p.JM = function() {
        return this.videoData.autonavState !== 1
    };
    g.p.Yp = function(k) {
        return (k.width < 910 || k.height < 459) && !this.hK(k) && !(k.width <= 400 || k.height <= 360)
    };
    g.p.hK = function(k) {
        return k.width < 800 && !(k.width <= 400 || k.height <= 360)
    };
    g.p.Lg = function() {
        return this.hA && g.kN(this.player) && this.JM() && !this.G
    };
    var Av_ = [1, 3, 2, 4];
    g.h(z8c, Y1);
    g.p = z8c.prototype;
    g.p.create = function() {
        Y1.prototype.create.call(this);
        var k = this.player.getVideoData();
        k && (this.videoData = k);
        this.cP();
        this.U.W(this.player, "appresize", this.cP);
        this.U.W(this.player, "onVideoAreaChange", this.cP);
        this.U.W(this.player, "videodatachange", this.onVideoDataChange);
        this.U.W(this.player, "autonavchange", this.Oi);
        this.U.W(this.player, "onAutonavCancelled", this.WC);
        k = this.videoData.autonavState;
        k !== this.Z && this.Oi(k);
        this.U.W(this.element, "transitionend", this.ZB)
    };
    g.p.destroy = function() {
        g.VS(this.U);
        g.mx(this.stills);
        this.stills = [];
        Y1.prototype.destroy.call(this);
        g.os(this.element, "ytp-show-tiles");
        this.Y.stop();
        this.Z = this.videoData.autonavState
    };
    g.p.JM = function() {
        return this.videoData.autonavState !== 1
    };
    g.p.show = function() {
        var k = this.hA;
        Y1.prototype.show.call(this);
        g.os(this.element, "ytp-show-tiles");
        this.player.B().U ? g.AI(this.Y) : this.Y.start();
        (this.L || this.G && this.G !== this.videoData.clientPlaybackNonce) && g.Tu(this.player, !1);
        RI(this) ? (Ja(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.T.select(!0) : this.T.tv() : this.videoData.autonavState === 3 && this.T.wU()) : (g.Tu(this.player, !0), Ja(this));
        k !== this.hA && this.player.logVisibility(this.element, !0)
    };
    g.p.hide = function() {
        var k = this.hA;
        Y1.prototype.hide.call(this);
        this.T.wU();
        Ja(this);
        k !== this.hA && this.player.logVisibility(this.element, !1)
    };
    g.p.ZB = function(k) {
        k.target === this.element && this.cP()
    };
    g.p.cP = function() {
        var k, l, r, M;
        var U = ((k = this.videoData) == null ? 0 : (l = k.suggestions) == null ? 0 : l.length) ? (r = this.videoData) == null ? void 0 : r.suggestions : [(M = this.videoData) == null ? void 0 : g.ys(M)];
        if (U.length) {
            l = this.J.Io(!0, this.J.isFullscreen());
            k = Math.floor((l.width - 64 + 16) / (g.gz(l.width * .27, 250, 450) + 16));
            l = Math.min(3, Math.floor((l.height - 64) / ((l.width - 64 - (k - 1) * 16) / k * .5625 + 70)));
            g.md(this.element, ["ytp-modern-endscreen-limit-rows-1", "ytp-modern-endscreen-limit-rows-2", "ytp-modern-endscreen-limit-rows-3"]);
            g.MY(this.element, "ytp-modern-endscreen-limit-rows-" + l);
            g.FD(this.element, "ytp-modern-endscreen-single-item", k === 1);
            g.FD(this.element, "ytp-modern-endscreen-row-0", l === 0);
            k = this.table.element;
            k.ariaLive = "polite";
            this.T.S6(g.ys(this.videoData));
            this.T instanceof Fq && II(this.T);
            g.FD(this.element, "ytp-endscreen-takeover", RI(this));
            Ja(this);
            l = 0;
            k.ariaBusy = "true";
            r = U.length;
            for (M = 0; M < r; M++) {
                var m = M % r,
                    F = this.stills[M];
                F || (F = new g.R7(this.player), this.stills[M] = F, k.appendChild(F.element));
                g.tCi(F, U[m]);
                l++
            }
            this.stills.length =
                l
        }
    };
    g.p.onVideoDataChange = function() {
        var k = this.player.getVideoData(1);
        this.videoData !== k && (k != null && g.ys(k) ? (this.videoData = k, this.cP()) : this.player.Q$("missg", {
            vid: (k == null ? void 0 : k.videoId) || "",
            cpn: (k == null ? void 0 : k.clientPlaybackNonce) || ""
        }))
    };
    g.p.SF = function() {
        return this.T.eg()
    };
    g.p.Oi = function(k) {
        k === 1 ? (this.L = !1, this.G = this.videoData.clientPlaybackNonce, this.T.hY(), this.hA && this.cP()) : (this.L = !0, this.hA && RI(this) && (k === 2 ? this.T.tv() : k === 3 && this.T.wU()))
    };
    g.p.WC = function(k) {
        if (k) {
            for (k = 0; k < this.stills.length; k++) this.J.logVisibility(this.stills[k].element, !0);
            this.Oi(1)
        } else this.G = null, this.L = !1;
        this.cP()
    };
    g.p.Lg = function() {
        return this.hA && RI(this)
    };
    g.h(gfq, Y1);
    gfq.prototype.f1 = function() {
        var k = this.player.getVideoData();
        this.T.update({
            profilePicture: k.profilePicture,
            author: k.author
        });
        this.subscribeButton.channelId = k.B6;
        var l = this.subscribeButton;
        k.subscribed ? l.T() : l.U()
    };
    g.h(uY, g.x);
    uY.prototype.select = function() {
        this.api.cA(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.LS || void 0) && this.api.logClick(this.element)
    };
    uY.prototype.onClick = function(k) {
        if (g.lr(this.api.B()) && this.api.D("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var l = this.suggestion.gz(),
                r = {};
            g.Gu(this.api, r);
            l = g.h6(l, r);
            g.Zp(l, this.api, k)
        } else g.VM(k, this.api, this.U, this.suggestion.sessionData || void 0) && this.select()
    };
    uY.prototype.onKeyPress = function(k) {
        switch (k.keyCode) {
            case 13:
            case 32:
                k.defaultPrevented || (this.select(), k.preventDefault())
        }
    };
    uY.prototype.onVideoDataChange = function() {
        var k = this.api.getVideoData(),
            l = this.api.B();
        this.U = k.ox ? !1 : l.L
    };
    g.h(eY, Y1);
    g.p = eY.prototype;
    g.p.create = function() {
        Y1.prototype.create.call(this);
        var k = this.player.getVideoData();
        k && (this.videoData = k);
        this.pA();
        this.U.W(this.player, "appresize", this.pA);
        this.U.W(this.player, "onVideoAreaChange", this.pA);
        this.U.W(this.player, "videodatachange", this.onVideoDataChange);
        this.U.W(this.player, "autonavchange", this.Lb);
        this.U.W(this.player, "onAutonavCancelled", this.s5);
        k = this.videoData.autonavState;
        k !== this.V && this.Lb(k);
        this.U.W(this.element, "transitionend", this.pH)
    };
    g.p.destroy = function() {
        g.VS(this.U);
        g.mx(this.stills);
        this.stills = [];
        Y1.prototype.destroy.call(this);
        g.os(this.element, "ytp-show-tiles");
        this.K.stop();
        this.V = this.videoData.autonavState
    };
    g.p.JM = function() {
        return this.videoData.autonavState !== 1
    };
    g.p.show = function() {
        var k = this.hA;
        Y1.prototype.show.call(this);
        g.os(this.element, "ytp-show-tiles");
        this.player.B().U ? g.AI(this.K) : this.K.start();
        (this.Y || this.L && this.L !== this.videoData.clientPlaybackNonce) && g.Tu(this.player, !1);
        p1(this) ? (jY(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.T.select(!0) : this.T.tv() : this.videoData.autonavState === 3 && this.T.wU()) : (g.Tu(this.player, !0), jY(this));
        k !== this.hA && this.player.logVisibility(this.element, !0)
    };
    g.p.hide = function() {
        var k = this.hA;
        Y1.prototype.hide.call(this);
        this.T.wU();
        jY(this);
        k !== this.hA && this.player.logVisibility(this.element, !1)
    };
    g.p.pH = function(k) {
        k.target === this.element && this.pA()
    };
    g.p.pA = function() {
        var k, l, r, M;
        var U = ((k = this.videoData) == null ? 0 : (l = k.suggestions) == null ? 0 : l.length) ? (r = this.videoData) == null ? void 0 : r.suggestions : [(M = this.videoData) == null ? void 0 : g.ys(M)];
        if (U.length) {
            g.MY(this.element, "ytp-endscreen-paginate");
            var m = this.J.Io(!0, this.J.isFullscreen());
            if (k = g.bb(this.J)) k = k.UT() ? 48 : 32, m.width -= k * 2;
            var F = m.width / m.height;
            M = 96 / 54;
            l = k = 2;
            var Y = Math.max(m.width / 96, 2),
                c = Math.max(m.height / 54, 2);
            r = U.length;
            var E = r * 4;
            for (E -= 4; E > 0 && (k < Y || l < c);) {
                var f = k / 2,
                    R = l / 2,
                    J = k <= Y - 2 && E >=
                    R * 4,
                    u = l <= c - 2 && E >= f * 4;
                if ((f + 1) / R * M / F > F / (f / (R + 1) * M) && u) E -= f * 4, l += 2;
                else if (J) E -= R * 4, k += 2;
                else if (u) E -= f * 4, l += 2;
                else break
            }
            M = !1;
            E >= 12 && r * 4 - E <= 6 && (l >= 4 || k >= 4) && (M = !0);
            E = k * 96;
            Y = l * 54;
            F = E / Y < F ? m.height / Y : m.width / E;
            F = Math.min(F, 2);
            E = Math.floor(Math.min(m.width, E * F));
            Y = Math.floor(Math.min(m.height, Y * F));
            m = this.table.element;
            m.ariaLive = "polite";
            g.Mr(m, E, Y);
            g.Td(m, {
                marginLeft: E / -2 + "px",
                marginTop: Y / -2 + "px"
            });
            this.T.S6(g.ys(this.videoData));
            this.T instanceof Fq && II(this.T);
            g.FD(this.element, "ytp-endscreen-takeover",
                p1(this));
            jY(this);
            E += 4;
            Y += 4;
            F = 0;
            m.ariaBusy = "true";
            for (c = 0; c < k; c++)
                for (f = 0; f < l; f++)
                    if (R = F, u = 0, M && c >= k - 2 && f >= l - 2 ? u = 1 : f % 2 === 0 && c % 2 === 0 && (f < 2 && c < 2 ? f === 0 && c === 0 && (u = 2) : u = 2), R = g.Nm(R + this.G, r), u !== 0) {
                        J = this.stills[F];
                        J || (J = new uY(this.player), this.stills[F] = J, m.appendChild(J.element));
                        var e = Math.floor(Y * f / l),
                            X = Math.floor(E * c / k),
                            V = Math.floor(Y * (f + u) / l) - e - 4,
                            t = Math.floor(E * (c + u) / k) - X - 4;
                        g.DD(J.element, X, e);
                        g.Mr(J.element, t, V);
                        g.Td(J.element, "transitionDelay", (f + c) / 20 + "s");
                        g.FD(J.element, "ytp-videowall-still-mini",
                            u === 1);
                        g.FD(J.element, "ytp-videowall-still-large", u > 2);
                        u = Math.max(t, V);
                        g.FD(J.element, "ytp-videowall-still-round-large", u >= 256);
                        g.FD(J.element, "ytp-videowall-still-round-medium", u > 96 && u < 256);
                        g.FD(J.element, "ytp-videowall-still-round-small", u <= 96);
                        R = U[R];
                        J.suggestion !== R && (J.suggestion = R, u = J.api.B(), e = g.rW(J.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", g.fR(J, R, e), g.lr(u) && !J.api.D("web_player_log_click_before_generating_ve_conversion_params") && (u = R.gz(), e = {}, g.t3(J.api, "addEmbedsConversionTrackingParams", [e]), u = g.h6(u, e), J.updateValue("url", u)), (R = (R = R.sessionData) && R.itct) && J.api.setTrackingParams(J.element, R));
                        F++
                    }
            m.ariaBusy = "false";
            g.FD(this.element, "ytp-endscreen-paginate", F < r);
            for (U = this.stills.length - 1; U >= F; U--) k = this.stills[U], g.XZ(k.element), g.oh(k);
            this.stills.length = F
        }
    };
    g.p.onVideoDataChange = function() {
        var k = this.player.getVideoData(1);
        this.videoData !== k && (k != null && g.ys(k) ? (this.G = 0, this.videoData = k, this.pA()) : this.player.Q$("missg", {
            vid: (k == null ? void 0 : k.videoId) || "",
            cpn: (k == null ? void 0 : k.clientPlaybackNonce) || ""
        }))
    };
    g.p.XF = function() {
        this.G += this.stills.length;
        this.pA()
    };
    g.p.BC = function() {
        this.G -= this.stills.length;
        this.pA()
    };
    g.p.SF = function() {
        return this.T.eg()
    };
    g.p.Lb = function(k) {
        k === 1 ? (this.Y = !1, this.L = this.videoData.clientPlaybackNonce, this.T.hY(), this.hA && this.pA()) : (this.Y = !0, this.hA && p1(this) && (k === 2 ? this.T.tv() : k === 3 && this.T.wU()))
    };
    g.p.s5 = function(k) {
        if (k) {
            for (k = 0; k < this.stills.length; k++) this.J.logVisibility(this.stills[k].element, !0);
            this.Lb(1)
        } else this.L = null, this.Y = !1;
        this.pA()
    };
    g.p.Lg = function() {
        return this.hA && p1(this)
    };
    g.h(NM3, g.x);
    g.p = NM3.prototype;
    g.p.Tr = function() {
        switch (this.buttonType) {
            case 1:
                var k = "Watch again on YouTube";
                var l = 156915;
                break;
            case 2:
                k = "Continue watching on YouTube";
                l = 156942;
                break;
            default:
                k = "Continue watching on YouTube", l = 156942
        }
        this.update({
            content: k
        });
        this.J.hasVe(this.element) && this.J.destroyVe(this.element);
        this.J.createClientVe(this.element, this, l)
    };
    g.p.onClick = function(k) {
        this.J.D("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
        g.Zp(this.getVideoUrl(), this.J, k);
        this.J.D("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element)
    };
    g.p.getVideoUrl = function() {
        var k = !0;
        switch (this.buttonType) {
            case 1:
                k = !0;
                break;
            case 2:
                k = !1
        }
        k = this.J.getVideoUrl(k, !1, !1, !0);
        var l = this.J.B();
        if (g.lr(l)) {
            var r = {};
            g.lr(l) && g.t3(this.J, "addEmbedsConversionTrackingParams", [r]);
            k = g.h6(k, r)
        }
        return k
    };
    g.p.logVisibility = function() {
        this.J.logVisibility(this.element, this.hA && this.N)
    };
    g.p.show = function() {
        g.x.prototype.show.call(this);
        this.logVisibility()
    };
    g.p.hide = function() {
        g.x.prototype.hide.call(this);
        this.logVisibility()
    };
    g.p.MQ = function(k) {
        g.x.prototype.MQ.call(this, k);
        this.logVisibility()
    };
    g.h(ha, Y1);
    ha.prototype.hasSuggestions = function() {
        var k;
        return (k = this.T) == null ? void 0 : k.hasSuggestions()
    };
    ha.prototype.show = function() {
        if (this.player.getPlayerState() !== 3) {
            Y1.prototype.show.call(this);
            var k = this.U;
            if (k) {
                var l = this.T.hasSuggestions();
                g.FD(this.element, "ytp-shorts-branded-ui", l);
                l ? k.show() : k.hide()
            }
            var r;
            (r = g.bb(this.player)) == null || r.FL(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.MQ(!0)
        }
    };
    ha.prototype.hide = function() {
        Y1.prototype.hide.call(this);
        var k;
        (k = g.bb(this.player)) == null || k.FL(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.MQ(!1)
    };
    g.h(vfi, g.Zg);
    g.p = vfi.prototype;
    g.p.ER = function() {
        var k = this.player.getVideoData(),
            l = k.mutedAutoplay && (k.limitedPlaybackDurationInSeconds > 0 || k.endSeconds > 0 || k.mutedAutoplayDurationMode !== 2);
        if (this.player.isEmbedsShortsMode() && !l) return !0;
        var r;
        var M = !!((k == null ? 0 : g.ys(k)) || (k == null ? 0 : (r = k.suggestions) == null ? 0 : r.length));
        M = !xwc(this.player) || M;
        k = k.Eb;
        r = this.player.dw();
        return M && !k && !r && !l
    };
    g.p.Lg = function() {
        return this.endScreen.Lg()
    };
    g.p.Dv = function() {
        return this.Lg() ? this.endScreen.SF() : !1
    };
    g.p.Ts = function() {
        this.player.j4("endscreen");
        g.Zg.prototype.Ts.call(this)
    };
    g.p.load = function() {
        var k = this.player.getVideoData();
        var l = k.transitionEndpointAtEndOfStream;
        if (l && l.videoId) {
            var r = this.player.GJ().h$.get("heartbeat"),
                M = g.ys(k);
            !M || l.videoId !== M.videoId || k.wI ? (this.player.cA(l.videoId, void 0, void 0, !0, !0, l), r && r.dj("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), k = !0) : k = !1
        } else k = !1;
        k || (g.Zg.prototype.load.call(this), this.endScreen.show())
    };
    g.p.unload = function() {
        g.Zg.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.p.onCueRangeEnter = function(k) {
        this.ER() && (this.endScreen.created || this.endScreen.create(), k.getId() === "load" && this.load())
    };
    g.p.onCueRangeExit = function(k) {
        k.getId() === "load" && this.loaded && this.unload()
    };
    g.p.onVideoDataChange = function() {
        TM$(this);
        this.G && Lxx(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.T ? this.endScreen = new E$(this.player) : this.endScreen = new eY(this.player), g.n(this, this.endScreen), g.DS(this.player, this.endScreen.element, 4))
    };
    g.VZ("endscreen", vfi);
})(_yt_player);