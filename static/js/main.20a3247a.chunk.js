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
        n = c.n(t),
        s = c(26),
        i = c.n(s),
        r = (c(33), c.p + "static/media/logo.de7f50ee.svg"),
        l = (c(11), c(34), c(4)),
        j = c(2),
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
                    children: Object(b.jsx)(l.c, {
                      to: "/cars",
                      className: "link-block navbar-item",
                      children:
                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                    }),
                  }),
                  Object(b.jsx)("div", {
                    className: "column",
                    children: Object(b.jsx)(l.c, {
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
        o = c(12),
        h = c.n(o);
      c(60);
      var m = function () {
          var e = Object(t.useState)({}),
            a = e.cars,
            c = e.setCar;
          return (
            Object(t.useEffect)(
              function () {
                h()({
                  method: "GET",
                  url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars",
                }).then(function (e) {
                  c(e.data.cars);
                });
              },
              [c]
            ),
            Object(b.jsxs)("div", {
              children: [
                Object(b.jsx)("h1", {
                  children:
                    "\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e",
                }),
                a.map(function (e) {
                  e.photo,
                    e.brand,
                    e.price,
                    e.year,
                    e.mileage,
                    l.b,
                    "/cars/".concat(e.id);
                }),
              ],
            })
          );
        },
        v = c(28);
      c(61);
      var x = function (e) {
        var a = e.match,
          c = Object(t.useState)({}),
          n = Object(v.a)(c, 2),
          s = (n[0], n[1]),
          i = a.params.id;
        return (
          Object(t.useEffect)(
            function () {
              h()({
                method: "GET",
                url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/".concat(
                  i
                ),
              }).then(function (e) {
                s(e.data);
              });
            },
            [i]
          ),
          Object(b.jsx)("div", {
            children: Object(b.jsx)("h1", {
              children: "\u0410\u0432\u0442\u043e",
            }),
          })
        );
      };
      var O = function () {
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
                        Object(b.jsx)(l.c, {
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
                            Object(b.jsx)(l.c, {
                              to: "/about",
                              className: "navbar-item",
                              children: "\u041e \u043d\u0430\u0441 ",
                            }),
                            Object(b.jsxs)("div", {
                              className:
                                "navbar-item has-dropdown is-hoverable",
                              children: [
                                Object(b.jsx)(l.c, {
                                  to: "/",
                                  className: "navbar-link",
                                  activeClassName: "navbar-link-active",
                                  children:
                                    "\u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c ",
                                }),
                                Object(b.jsxs)("div", {
                                  className: "navbar-dropdown",
                                  children: [
                                    Object(b.jsx)(l.c, {
                                      to: "/cars",
                                      className: "navbar-item",
                                      children:
                                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c ",
                                    }),
                                    Object(b.jsx)("hr", {
                                      className: "navbar-divider",
                                    }),
                                    Object(b.jsx)(l.c, {
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
                              children: Object(b.jsx)(l.c, {
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
              Object(b.jsxs)(j.c, {
                children: [
                  Object(b.jsx)(j.a, { exact: !0, path: "/", component: d }),
                  Object(b.jsx)(j.a, {
                    exact: !0,
                    path: "/cars",
                    component: m,
                  }),
                  Object(b.jsx)(j.a, { path: "/cars/:id", component: x }),
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
                  n = a.getFCP,
                  s = a.getLCP,
                  i = a.getTTFB;
                c(e), t(e), n(e), s(e), i(e);
              });
        };
      i.a.render(
        Object(b.jsx)(l.a, {
          children: Object(b.jsx)(n.a.StrictMode, {
            children: Object(b.jsx)(O, {}),
          }),
        }),
        document.getElementById("root")
      ),
        u();
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.20a3247a.chunk.js.map
