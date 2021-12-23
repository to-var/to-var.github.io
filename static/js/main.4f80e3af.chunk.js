(this.webpackJsonptmjoseantonio = this.webpackJsonptmjoseantonio || []).push([
	[0], {
		20: function(e, t, a) {
			e.exports = a(40)
		},
		25: function(e, t, a) {},
		26: function(e, t, a) {},
		33: function(e, t, a) {},
		34: function(e, t, a) {},
		35: function(e, t, a) {},
		38: function(e, t, a) {},
		39: function(e, t, a) {},
		40: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a(0),
				r = a.n(n),
				o = a(17),
				c = a.n(o),
				l = (a(25), a(26), a(9)),
				i = a(1),
				m = a(18),
				s = a.n(m),
				u = "Jose is a Web Engineer experienced in Web technologies with a strong background and knowledge of accessibility guidelines such as Section 508, W3C WAI, content management systems and JavaScript based web applications",
				d = function() {
					return r.a.createElement(s.a, null, r.a.createElement("meta", {
						charset: "utf-8"
					}), r.a.createElement("title", null, "Jose Tovar - Web Engineer / Technical Lead with a PhD in Meetings"), r.a.createElement("meta", {
						name: "description",
						content: u
					}), r.a.createElement("meta", {
						name: "author",
						content: "Jose Tovar"
					}), r.a.createElement("meta", {
						name: "subject",
						content: "frontend development"
					}), r.a.createElement("meta", {
						name: "description",
						content: u
					}), r.a.createElement("meta", {
						name: "classification",
						content: u
					}), r.a.createElement("meta", {
						name: "keywords",
						content: "frontend, developer, web developer, javascript, html5, front-end, web ui"
					}), r.a.createElement("meta", {
						name: "language",
						content: "english"
					}), r.a.createElement("meta", {
						"http-equiv": "cache-control",
						content: "no-cache"
					}), r.a.createElement("meta", {
						name: "copyright",
						content: "Jose Tovar"
					}), r.a.createElement("meta", {
						name: "distribution",
						content: "global"
					}), r.a.createElement("meta", {
						name: "robots",
						content: "index,follow"
					}), r.a.createElement("meta", {
						property: "og:url",
						content: "https://tovar.dev"
					}), r.a.createElement("meta", {
						property: "og:type",
						content: "website"
					}), r.a.createElement("meta", {
						property: "og:title",
						content: "Jose Tovar - Web Engineer / Technical Lead with a PhD in Meetings"
					}), r.a.createElement("meta", {
						property: "og:description",
						content: u
					}), r.a.createElement("meta", {
						name: "twitter:card",
						content: "summary"
					}), r.a.createElement("meta", {
						name: "twitter:site",
						content: "@to_var_dev"
					}), r.a.createElement("meta", {
						name: "twitter:creator",
						content: "@to_var_dev"
					}), r.a.createElement("meta", {
						name: "viewport",
						content: "width=device-width,initial-scale=1"
					}), r.a.createElement("meta", {
						name: "msapplication-TileColor",
						content: "#ffffff"
					}))
				},
				E = a(5),
				p = (a(33), function(e) {
					var t = e.children,
						a = Object(E.a)(e, ["children"]);
					return r.a.createElement("section", Object.assign({
						className: "fullpage-section"
					}, a), t)
				}),
				h = (a(34), function(e) {
					var t = e.children,
						a = e.link,
						n = Object(E.a)(e, ["children", "link"]);
					return r.a.createElement("li", Object.assign({
						className: "contact-links__list-item"
					}, n), r.a.createElement("a", {
						className: "contact-links__link",
						target: "_blank",
						rel: "noopener noreferrer",
						href: a
					}, t))
				}),
				b = function(e) {
					var t = e.data,
						a = Object(E.a)(e, ["data"]),
						n = t.linkItems.map((function(e, t) {
							var a = e.name,
								n = e.link;
							return r.a.createElement(h, {
								link: n,
								key: t
							}, a)
						}));
					return r.a.createElement("nav", Object.assign({
						className: "contact-links"
					}, a), r.a.createElement("ul", {
						className: "contact-links__list"
					}, n))
				},
				g = (a(35), function(e) {
					var t = e.title,
						a = e.subtitle;
					e.children, Object(E.a)(e, ["title", "subtitle", "children"]);
					return r.a.createElement("header", {
						className: "page-header"
					}, r.a.createElement("h1", {
						className: "page-header__title"
					}, r.a.createElement("span", null, t, "Jose Tovar"), r.a.createElement("small", {
						className: "page-header__title-small"
					}, a, " Web Engineer / Technical Lead with a PhD in Meetings")))
				}),
				f = {
					title: "Jose Tovar",
					subtitle: "Web Engineer / Technical Lead with a PhD in Meetings"
				},
				v = {
					linkItems: [{
						name: "Twitter",
						link: "https://twitter.com/To_var_dev"
					}, {
						name: "Github",
						link: "http://github.com/to-var"
					}, {
						name: "LinkedIn",
						link: "https://www.linkedin.com/in/to-var"
					}]
				},
				w = function() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(p, {
						id: "headline"
					}, r.a.createElement(g, {
						data: f
					}), r.a.createElement(b, {
						data: v
					}), r.a.createElement(l.b, {
						to: "/about"
					}, "< More about Jose >")))
				},
				k = (a(38), function(e) {
					var t = e.data,
						a = e.children,
						n = Object(E.a)(e, ["data", "children"]);
					return r.a.createElement("div", Object.assign({
						className: "profile-summary"
					}, n, {
						dangerouslySetInnerHTML: {
							__html: t
						}
					}), a)
				}),
				j = function() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(p, {
						id: "more-about-jose"
					}, r.a.createElement(k, {
						data: "<p>As Lead Web Engineer, Jose focuses on transforming visual designs, accessibility, and functional requirements into performant, readable, and scalable solutions. Along with ensuring quality delivery across multiple tracks of work, Jose also has experience leading teams of web engineers to develop new skills and broaden their capabilities.</p>"
					}), r.a.createElement(l.b, {
						to: "/"
					}, "< Back to contact info >")))
				},
				y = function() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(p, null, r.a.createElement("p", null, "holaaaa")))
				},
				_ = (a(39), function(e) {
					var t = e.children,
						a = Object(E.a)(e, ["children"]);
					return r.a.createElement("footer", Object.assign({
						className: "page-footer"
					}, a), r.a.createElement("summary", {
						className: "page-footer__summary"
					}, t))
				});
			Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
			c.a.render(r.a.createElement((function() {
				return r.a.createElement(l.a, {
					basename: "/"
				}, r.a.createElement(d, null), r.a.createElement(i.a, {
					exact: !0,
					path: "/",
					component: w
				}), r.a.createElement(i.a, {
					exact: !0,
					path: "/about",
					component: j
				}), r.a.createElement(i.a, {
					path: "/ventas",
					component: y
				}), r.a.createElement(_, null, "\xa9 Jose Tovar"))
			}), null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
				e.unregister()
			}))
		}
	},
	[
		[20, 1, 2]
	]
]);
//# sourceMappingURL=main.4f80e3af.chunk.js.map
