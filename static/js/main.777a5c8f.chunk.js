(this["webpackJsonpcar-bike-rental-front"] =
  this["webpackJsonpcar-bike-rental-front"] || []).push([
  [0],
  {
    33: function (e, a, c) {},
    34: function (e, a, c) {},
    35: function (e, a, c) {},
    60: function (e, a, c) {},
    61: function (e, a, c) {},
    62: function (e, a, c) {
      "use strict";
      c.r(a);
      var t = c(1),
        s = c.n(t),
        n = c(27),
        i = c.n(n),
        r = (c(33), c.p + "static/media/logo.de7f50ee.svg"),
        j = (c(11), c(34), c(4)),
        l = c(2),
        b = (c(35), c(0)),
        d = function () {
          return Object(b.jsxs)("div", {
            children: [
              Object(b.jsx)("h1", {
                className: "title",
                children:
                  "\u042f \u0445\u043e\u0447\u0443 \u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c",
              }),
              Object(b.jsxs)("div", {
                className: "columns",
                children: [
                  Object(b.jsx)("div", {
                    className: " column",
                    children: Object(b.jsx)(j.c, {
                      to: "/cars",
                      className: "link-block navbar-item",
                      children:
                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "column",
                    children: Object(b.jsx)(j.c, {
                      to: "/bikes",
                      className: "link-block navbar-item",
                      children:
                        "\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        o = c(13),
        h = c(12),
        m = c.n(h);
      c(60);
      var O = function () {
        var e = Object(t.useState)([]),
          a = Object(o.a)(e, 2),
          c = a[0],
          s = a[1];
        return (
          Object(t.useEffect)(function () {
            m()({
              method: "GET",
              url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/",
            }).then(function (e) {
              s(e.data.cars);
            });
          }, []),
          Object(b.jsxs)("div", {
            children: [
              Object(b.jsx)("h1", {
                children:
                  "\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e",
              }),
              c.map(function (e) {
                e.photo,
                  e.brand,
                  e.price,
                  e.year,
                  e.mileage,
                  j.b,
                  "/cars/".concat(e.id);
              }),
            ],
          })
        );
      };
      c(61);
      var x = function (e) {
        var a = e.match,
          c = Object(t.useState)({}),
          s = Object(o.a)(c, 2),
          n = s[0],
          i = s[1],
          r = a.params.id;
        return (
          Object(t.useEffect)(
            function () {
              m()({
                method: "GET",
                url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/".concat(
                  r,
                  "/"
                ),
              }).then(function (e) {
                i(e.data);
              });
            },
            [r]
          ),
          Object(b.jsxs)("div", {
            children: [
              Object(b.jsx)(j.b, {
                to: "/cars",
                children: "\u041d\u0430\u0437\u0430\u0434",
              }),
              Object(b.jsx)("h1", { children: "\u0410\u0432\u0442\u043e" }),
              Object(b.jsxs)("div", {
                className: "card",
                children: [
                  Object(b.jsx)("div", {
                    className: "card-image",
                    children: Object(b.jsx)("figure", {
                      className: "image is-4by3",
                      children: Object(b.jsx)("img", {
                        src: n.photo,
                        alt: "car image",
                      }),
                    }),
                  }),
                  Object(b.jsxs)("div", {
                    className: "card-content",
                    children: [
                      Object(b.jsx)("div", {
                        className: "media",
                        children: Object(b.jsxs)("div", {
                          className: "media-content",
                          children: [
                            Object(b.jsx)("p", {
                              className: "title is-4",
                              children: n.brand,
                            }),
                            Object(b.jsx)("p", {
                              className: "subtitle is-6",
                              children: n.price,
                            }),
                          ],
                        }),
                      }),
                      Object(b.jsxs)("div", {
                        className: "content",
                        children: [
                          n.year,
                          " \u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430. ",
                          Object(b.jsx)("br", {}),
                          n.mileage,
                          " \u043a\u043c \u043f\u0440\u043e\u0431\u0435\u0433\u0430. ",
                          Object(b.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var v = function () {
          return Object(b.jsxs)("div", {
            className: "App",
            children: [
              Object(b.jsx)("header", {
                children: Object(b.jsxs)("nav", {
                  className: "navbar",
                  role: "navigation",
                  "aria-label": "main navigation",
                  children: [
                    Object(b.jsxs)("div", {
                      className: "navbar-brand",
                      children: [
                        Object(b.jsx)(j.c, {
                          to: "/",
                          className: "navbar-item",
                          children: Object(b.jsx)("img", {
                            src: r,
                            alt: "logo",
                          }),
                        }),
                        Object(b.jsxs)("a", {
                          role: "button",
                          className: "navbar-burger",
                          "aria-label": "menu",
                          "aria-expanded": "false",
                          "data-target": "navbarBasicExample",
                          children: [
                            Object(b.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                            Object(b.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                            Object(b.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(b.jsxs)("div", {
                      id: "navbarBasicExample",
                      className: "navbar-menu",
                      children: [
                        Object(b.jsxs)("div", {
                          className: "navbar-start",
                          children: [
                            Object(b.jsx)(j.c, {
                              to: "/about",
                              className: "navbar-item",
                              children: "\u041e \u043d\u0430\u0441 ",
                            }),
                            Object(b.jsxs)("div", {
                              className:
                                "navbar-item has-dropdown is-hoverable",
                              children: [
                                Object(b.jsx)(j.c, {
                                  to: "/",
                                  className: "navbar-link",
                                  activeClassName: "navbar-link-active",
                                  children:
                                    "\u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c ",
                                }),
                                Object(b.jsxs)("div", {
                                  className: "navbar-dropdown",
                                  children: [
                                    Object(b.jsx)(j.c, {
                                      to: "/cars",
                                      className: "navbar-item",
                                      children:
                                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c ",
                                    }),
                                    Object(b.jsx)("hr", {
                                      className: "navbar-divider",
                                    }),
                                    Object(b.jsx)(j.c, {
                                      to: "/bikes",
                                      className: "navbar-item",
                                      children:
                                        "\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434 ",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(b.jsx)("div", {
                          className: "navbar-end",
                          children: Object(b.jsx)("div", {
                            className: "navbar-item",
                            children: Object(b.jsx)("div", {
                              className: "buttons",
                              children: Object(b.jsx)(j.c, {
                                to: "/profile",
                                className: "button is-primary",
                                children: Object(b.jsx)("strong", {
                                  children:
                                    " \u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 ",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(b.jsxs)(l.c, {
                children: [
                  Object(b.jsx)(l.a, { exact: !0, path: "/", component: d }),
                  Object(b.jsx)(l.a, {
                    exact: !0,
                    path: "/cars",
                    component: O,
                  }),
                  Object(b.jsx)(l.a, { path: "/cars/:id", component: x }),
                ],
              }),
            ],
          });
        },
        u = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 63))
              .then(function (a) {
                var c = a.getCLS,
                  t = a.getFID,
                  s = a.getFCP,
                  n = a.getLCP,
                  i = a.getTTFB;
                c(e), t(e), s(e), n(e), i(e);
              });
        };
      i.a.render(
        Object(b.jsx)(j.a, {
          children: Object(b.jsx)(s.a.StrictMode, {
            children: Object(b.jsx)(v, {}),
          }),
        }),
        document.getElementById("root")
      ),
        u();
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.777a5c8f.chunk.js.map
