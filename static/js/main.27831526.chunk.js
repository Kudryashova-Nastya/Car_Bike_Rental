(this["webpackJsonpcar-bike-rental-front"] =
  this["webpackJsonpcar-bike-rental-front"] || []).push([
  [0],
  {
    37: function (e, t, a) {},
    38: function (e, t, a) {},
    39: function (e, t, a) {},
    64: function (e, t, a) {},
    65: function (e, t, a) {},
    66: function (e, t, a) {},
    67: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a(1),
        s = a.n(c),
        n = a(31),
        i = a.n(n),
        l = (a(37), a(5)),
        r = a.p + "static/media/logo.de7f50ee.svg",
        o = (a(12), a(38), a(4)),
        j = a(2),
        d = (a(39), a(0)),
        b = function () {
          return Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)("h1", {
                className: "title",
                children:
                  "\u042f \u0445\u043e\u0447\u0443 \u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c",
              }),
              Object(d.jsxs)("div", {
                className: "columns",
                children: [
                  Object(d.jsx)("div", {
                    className: " column",
                    children: Object(d.jsx)(o.c, {
                      to: "/cars",
                      className: "link-block navbar-item",
                      children:
                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "column",
                    children: Object(d.jsx)(o.c, {
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
        h = a(10),
        m = a.n(h);
      a(64);
      var O = function () {
        var e = Object(c.useState)([]),
          t = Object(l.a)(e, 2),
          a = t[0],
          s = t[1];
        return (
          Object(c.useEffect)(function () {
            m()({
              method: "GET",
              url: "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/",
            }).then(function (e) {
              s(e.data);
            });
          }, []),
          Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)("h1", {
                className: "title",
                children:
                  "\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e",
              }),
              Object(d.jsx)("div", {
                className: "card-container",
                children: a.map(function (e) {
                  return Object(d.jsxs)(
                    "div",
                    {
                      className: "card",
                      children: [
                        Object(d.jsx)("div", {
                          className: "card-image",
                          children: Object(d.jsx)("img", {
                            src: e.photo,
                            alt: "car image",
                          }),
                        }),
                        Object(d.jsxs)("div", {
                          className: "card-content",
                          children: [
                            Object(d.jsx)("div", {
                              className: "media",
                              children: Object(d.jsxs)("div", {
                                className: "media-content",
                                children: [
                                  Object(d.jsx)("p", {
                                    className: "title is-4",
                                    children: e.brand,
                                  }),
                                  Object(d.jsxs)("p", {
                                    className: "subtitle is-6",
                                    children: [
                                      e.price,
                                      " \u0440\u0443\u0431/\u0434\u0435\u043d\u044c",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(d.jsxs)("div", {
                              className: "content",
                              children: [
                                e.year,
                                " \u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430. ",
                                Object(d.jsx)("br", {}),
                                e.mileage,
                                " \u043a\u043c \u043f\u0440\u043e\u0431\u0435\u0433\u0430. ",
                                Object(d.jsx)("br", {}),
                                Object(d.jsx)(o.b, {
                                  to: {
                                    pathname: "/cars/".concat(e.id),
                                    fromDashboard: !1,
                                  },
                                  class:
                                    "card-footer-item button is-primary is-light",
                                  children:
                                    " \u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c ",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  );
                }),
              }),
            ],
          })
        );
      };
      a(65);
      var u = function (e, t) {
        var a = this,
          s = e.match,
          n = Object(c.useState)({}),
          i = Object(l.a)(n, 2),
          r = i[0],
          j = i[1],
          b = s.params.id,
          h = Object(c.useState)({}),
          O = Object(l.a)(h, 2),
          u = O[0],
          x = O[1],
          v = Object(c.useState)({}),
          p = Object(l.a)(v, 2),
          N = (p[0], p[1]);
        Object(c.useEffect)(
          function () {
            m.a
              .get(
                "http://carbikerental.std-953.ist.mospolytech.ru/api/cars/".concat(
                  b,
                  "/"
                )
              )
              .then(function (e) {
                return (
                  j(e.data),
                  m.a.get(
                    "http://carbikerental.std-953.ist.mospolytech.ru/api/car_models/".concat(
                      e.data.car_model_id,
                      "/"
                    )
                  )
                );
              })
              .then(function (e) {
                x(e.data, function () {
                  return console.log(a.delivery.id);
                });
              });
          },
          [b]
        );
        var g = Object(c.useState)({
            start: new Date().toISOString().slice(0, 10),
          }),
          f = Object(l.a)(g, 2),
          y = f[0],
          S = f[1],
          k = Object(c.useState)({ startTime: "9:00" }),
          T = Object(l.a)(k, 2),
          _ = T[0],
          C = T[1],
          w = Object(c.useState)({
            end: new Date().toISOString().slice(0, 10),
          }),
          D = Object(l.a)(w, 2),
          P = D[0],
          E = D[1],
          B = Object(c.useState)({ endTime: "9:00" }),
          q = Object(l.a)(B, 2),
          I = q[0],
          L = q[1],
          J = Object(c.useState)({ region: "" }),
          M = Object(l.a)(J, 2),
          A = M[0],
          F = M[1],
          G = Object(c.useState)({ location: "" }),
          z = Object(l.a)(G, 2),
          R = z[0],
          U = z[1],
          H = Object(c.useState)({ comment: "" }),
          K = Object(l.a)(H, 2),
          Q = K[0],
          V = K[1],
          W = Object(c.useState)({ totalPrice: "0" }),
          X = Object(l.a)(W, 2),
          Y = X[0],
          Z = X[1],
          $ = 0,
          ee = 0,
          te = new Date(y.start),
          ae = new Date(P.end),
          ce = 0;
        if (t) {
          console.log(t);
          var se = Object(d.jsx)("p", {
            children: "\u041f\u0440\u0438\u0432\u0435\u0442!",
          });
        } else {
          console.log(t);
          se = Object(d.jsxs)("form", {
            onSubmit: function (e) {
              e.preventDefault();
              var t = m.a
                  .post(
                    "http://carbikerental.std-953.ist.mospolytech.ru/api/deliverys/",
                    {
                      type_delivery: "\u0430\u0442",
                      user_id: 1,
                      deliveryman_id: 1,
                      location_id: r.location_id,
                      delivery_location: R.location,
                      time: y.start + " " + _.startTime,
                    }
                  )
                  .then(function (e) {
                    console.log(e.data), ($ = e.data.id);
                  }),
                a = m.a
                  .post(
                    "http://carbikerental.std-953.ist.mospolytech.ru/api/deliverys/",
                    {
                      type_delivery: "\u0430\u043e",
                      user_id: 1,
                      deliveryman_id: 1,
                      location_id: r.location_id,
                      delivery_location: R.location,
                      time: P.end + " " + I.endTime,
                    }
                  )
                  .then(function (e) {
                    console.log(e), (ee = e.data.id);
                  });
              Promise.all([t, a])
                .then(function () {
                  return m.a.post(
                    "http://carbikerental.std-953.ist.mospolytech.ru/api/car_rents/",
                    {
                      user_id: 1,
                      car_id: r.id,
                      start: y.start + " " + _.startTime,
                      end: P.end + " " + I.endTime,
                      region: A.region,
                      delivery_to_id: $,
                      delivery_from_id: ee,
                      limit: r.max_limit,
                      price: Y.totalPrice,
                      comment: Q.comment,
                    }
                  );
                })
                .then(function (e) {
                  console.log(e),
                    alert(
                      "\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0430\u0440\u0435\u043d\u0434\u0443 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0430\u043d\u0430. \u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435. \u0412\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0435"
                    ),
                    S({ start: "" }),
                    E({ end: "" }),
                    C({ startTime: "9:00" }),
                    L({ endTime: "9:00" }),
                    F({ region: "" }),
                    U({ location: "" }),
                    V({ comment: "" });
                })
                .catch(function (e) {
                  N(),
                    console.log(e),
                    e.response
                      ? (console.log(
                          "---------------------------------------------"
                        ),
                        console.log(e.response.data),
                        console.log(e.response.status),
                        console.log(e.response.headers))
                      : e.request
                      ? (console.log("*************************"),
                        console.log(e.request))
                      : (console.log("++++++++++++++++++++++++"),
                        console.log("Error", e.message)),
                    console.log(e.config),
                    alert(
                      "\u041e\u0448\u0438\u0431\u043a\u0430 " +
                        e.response.status
                    );
                });
            },
            children: [
              Object(d.jsx)("label", {
                className: "label",
                children:
                  "\u041f\u0435\u0440\u0438\u043e\u0434 \u0430\u0440\u0435\u043d\u0434\u044b",
              }),
              Object(d.jsx)("br", {}),
              Object(d.jsxs)("div", {
                className: "field has-addons",
                children: [
                  Object(d.jsx)("p", {
                    className: "control",
                    children: Object(d.jsx)("span", {
                      className: "select",
                      children: Object(d.jsxs)("select", {
                        className: "selected",
                        value: _.startTime,
                        onChange: function (e) {
                          C({ startTime: e.target.value });
                        },
                        children: [
                          Object(d.jsx)("option", {
                            value: "09:00",
                            children: "09:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "10:00",
                            children: "10:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "11:00",
                            children: "11:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "12:00",
                            children: "12:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "13:00",
                            children: "13:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "14:00",
                            children: "14:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "15:00",
                            children: "15:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "16:00",
                            children: "16:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "17:00",
                            children: "17:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "18:00",
                            children: "18:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "19:00",
                            children: "19:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "20:00",
                            children: "20:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "21:00",
                            children: "21:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "22:00",
                            children: "22:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "23:00",
                            children: "23:00",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(d.jsx)("p", {
                    className: "control",
                    children: Object(d.jsx)("input", {
                      className: "input",
                      type: "date",
                      min: new Date().toISOString().slice(0, 10),
                      value: y.start,
                      onChange: function (e) {
                        S({ start: e.target.value }),
                          (te = new Date(e.target.value)),
                          (ce =
                            Math.ceil(
                              Math.abs(ae.getTime() - te.getTime()) / 864e5
                            ) + 1),
                          Z({ totalPrice: r.price * ce });
                      },
                      required: !0,
                    }),
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "field has-addons",
                children: [
                  Object(d.jsx)("p", {
                    className: "control",
                    children: Object(d.jsx)("span", {
                      className: "select",
                      children: Object(d.jsxs)("select", {
                        className: "selected",
                        value: I.endTime,
                        onChange: function (e) {
                          L({ endTime: e.target.value });
                        },
                        children: [
                          Object(d.jsx)("option", {
                            value: "09:00",
                            children: "09:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "10:00",
                            children: "10:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "11:00",
                            children: "11:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "12:00",
                            children: "12:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "13:00",
                            children: "13:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "14:00",
                            children: "14:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "15:00",
                            children: "15:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "16:00",
                            children: "16:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "17:00",
                            children: "17:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "18:00",
                            children: "18:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "19:00",
                            children: "19:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "20:00",
                            children: "20:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "21:00",
                            children: "21:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "22:00",
                            children: "22:00",
                          }),
                          Object(d.jsx)("option", {
                            value: "23:00",
                            children: "23:00",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(d.jsx)("p", {
                    className: "control",
                    children: Object(d.jsx)("input", {
                      className: "input",
                      type: "date",
                      min: new Date().toISOString().slice(0, 10),
                      value: P.end,
                      onChange: function (e) {
                        E({ end: e.target.value }),
                          (ae = new Date(e.target.value)),
                          (ce =
                            Math.ceil(
                              Math.abs(ae.getTime() - te.getTime()) / 864e5
                            ) + 1),
                          Z({ totalPrice: r.price * ce });
                      },
                      required: !0,
                    }),
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "field",
                children: [
                  Object(d.jsx)("label", {
                    className: "label",
                    children:
                      "\u0420\u0435\u0433\u0438\u043e\u043d \u043f\u043e\u0435\u0437\u0434\u043a\u0438",
                  }),
                  Object(d.jsx)("div", {
                    className: "control",
                    children: Object(d.jsx)("input", {
                      className: "input",
                      type: "text",
                      placeholder:
                        "\u041c\u0435\u0441\u0442\u043e, \u043a\u0443\u0434\u0430 \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u043f\u043e\u0435\u0445\u0430\u0442\u044c",
                      maxlength: "40",
                      value: A.region,
                      onChange: function (e) {
                        F({ region: e.target.value });
                      },
                      required: !0,
                    }),
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "field",
                children: [
                  Object(d.jsx)("label", {
                    className: "label",
                    children:
                      "\u0410\u0434\u0440\u0435\u0441 \u0432\u044b\u0434\u0430\u0447\u0438 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u043c\u0430\u0448\u0438\u043d\u044b",
                  }),
                  Object(d.jsx)("div", {
                    className: "control",
                    children: Object(d.jsx)("input", {
                      className: "input",
                      type: "text",
                      placeholder:
                        "\u041c\u0435\u0441\u0442\u043e, \u0433\u0434\u0435 \u0432\u044b \u0437\u0430\u0431\u0435\u0440\u0451\u0442\u0435 \u0438 \u043a\u0443\u0434\u0430 \u0432\u0435\u0440\u043d\u0451\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                      maxlength: "100",
                      value: R.location,
                      onChange: function (e) {
                        U({ location: e.target.value });
                      },
                      required: !0,
                    }),
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "field",
                children: [
                  Object(d.jsx)("label", {
                    className: "label",
                    children:
                      "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 (\u043f\u043e \u0436\u0435\u043b\u0430\u043d\u0438\u044e)",
                  }),
                  Object(d.jsx)("div", {
                    className: "control",
                    children: Object(d.jsx)("textarea", {
                      className: "textarea",
                      placeholder:
                        "\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                      maxlength: "200",
                      value: Q.comment,
                      onChange: function (e) {
                        V({ comment: e.target.value });
                      },
                    }),
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                children: [
                  "\u0418\u0442\u043e\u0433\u043e: ",
                  Object(d.jsx)("b", { children: Y.totalPrice }),
                ],
              }),
              Object(d.jsx)("div", {
                className: "control",
                children: Object(d.jsx)("button", {
                  className: "button is-link",
                  type: "submit",
                  children: "Submit",
                }),
              }),
            ],
          });
        }
        return Object(d.jsxs)("div", {
          children: [
            Object(d.jsx)(o.b, {
              className: "back",
              to: "/cars",
              children: "\u041d\u0430\u0437\u0430\u0434",
            }),
            Object(d.jsx)("h1", { className: "title", children: u.name }),
            Object(d.jsx)("div", {
              className: "card-image",
              children: Object(d.jsx)("img", {
                src: r.photo,
                alt: "car image",
              }),
            }),
            Object(d.jsxs)("div", {
              className: "title_price",
              children: [
                r.price,
                " \u0440\u0443\u0431/\u0434\u0435\u043d\u044c",
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: r.year }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u0426\u0432\u0435\u0442",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: r.color }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u041f\u0440\u043e\u0431\u0435\u0433",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsxs)("div", {
                  className: "val",
                  children: [r.mileage, " \u043a\u043c"],
                }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0412\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0431\u0435\u0433",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsxs)("div", {
                  className: "val",
                  children: [r.max_limit, " \u043a\u043c"],
                }),
              ],
            }),
            Object(d.jsx)("h1", {
              className: "title-2",
              children:
                "\u041e\u0431\u0449\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u041a\u043e\u0440\u043e\u0431\u043a\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: u.gearbox }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u041a\u0443\u0437\u043e\u0432",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: u.body }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0412\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: u.seats }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u041f\u0440\u0438\u0432\u043e\u0434",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: u.drive }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children:
                    "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: u.engine }),
              ],
            }),
            Object(d.jsxs)("div", {
              className: "params",
              children: [
                Object(d.jsx)("div", {
                  className: "name",
                  children: "\u0420\u0443\u043b\u044c",
                }),
                Object(d.jsx)("div", { className: "filler" }),
                Object(d.jsx)("div", { className: "val", children: u.rudder }),
              ],
            }),
            Object(d.jsx)("h1", {
              className: "title-2",
              children:
                "\u0424\u043e\u0440\u043c\u0430 \u0430\u0440\u0435\u043d\u0434\u044b",
            }),
            se,
          ],
        });
      };
      a(66);
      var x = function () {
          return Object(d.jsxs)("div", {
            children: [
              Object(d.jsx)("h1", {
                className: "title",
                children: "\u041e \u043d\u0430\u0441",
              }),
              Object(d.jsx)("div", {
                className: "container",
                children:
                  "\u041a\u043b\u0430\u0441\u0441\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0430\u0440\u0435\u043d\u0434\u044b \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0438 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432 \u0432 \u043b\u0438\u0446\u0435 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043a\u0438 2 \u043a\u0443\u0440\u0441\u0430 \u041a\u0443\u0434\u0440\u044f\u0448\u043e\u0432\u043e\u0439 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u0438 \u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b 191-321",
              }),
            ],
          });
        },
        v = a(14),
        p = a(15),
        N = a(17),
        g = a(16),
        f = (function (e) {
          Object(N.a)(a, e);
          var t = Object(g.a)(a);
          function a() {
            var e;
            Object(v.a)(this, a);
            for (var c = arguments.length, s = new Array(c), n = 0; n < c; n++)
              s[n] = arguments[n];
            return (
              ((e = t.call.apply(t, [this].concat(s))).state = {
                credentials: { username: "", password: "" },
              }),
              (e.login = function (t) {
                fetch("http://carbikerental.std-953.ist.mospolytech.ru/auth/", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e.state.credentials),
                })
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    e.props.userLogin(t);
                  })
                  .catch(function (e) {
                    return console.error(e);
                  });
              }),
              (e.register = function (t) {
                fetch(
                  "http://carbikerental.std-953.ist.mospolytech.ru/api/users/",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(e.state.credentials),
                  }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    console.log(e);
                  })
                  .catch(function (e) {
                    return console.error(e);
                  });
              }),
              (e.inputChanged = function (t) {
                var a = e.state.credentials;
                (a[t.target.name] = t.target.value),
                  e.setState({ credentials: a });
              }),
              e
            );
          }
          return (
            Object(p.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(d.jsxs)("div", {
                    children: [
                      Object(d.jsx)("h1", { children: "Login user form" }),
                      Object(d.jsxs)("label", {
                        children: [
                          "Username:",
                          Object(d.jsx)("input", {
                            type: "text",
                            name: "username",
                            value: this.state.credentials.username,
                            onChange: this.inputChanged,
                          }),
                        ],
                      }),
                      Object(d.jsx)("br", {}),
                      Object(d.jsxs)("label", {
                        children: [
                          "Password:",
                          Object(d.jsx)("input", {
                            type: "password",
                            name: "password",
                            value: this.state.credentials.password,
                            onChange: this.inputChanged,
                          }),
                        ],
                      }),
                      Object(d.jsx)("br", {}),
                      Object(d.jsx)("button", {
                        onClick: this.login,
                        children: "Login",
                      }),
                      Object(d.jsx)("button", {
                        onClick: this.register,
                        children: "Register",
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(c.Component),
        y = (function (e) {
          Object(N.a)(a, e);
          var t = Object(g.a)(a);
          function a() {
            var e;
            Object(v.a)(this, a);
            for (var c = arguments.length, s = new Array(c), n = 0; n < c; n++)
              s[n] = arguments[n];
            return (
              ((e = t.call.apply(t, [this].concat(s))).user = e.props.user),
              (e.state = { books: [] }),
              (e.loadBooks = function () {
                fetch(
                  "http://carbikerental.std-953.ist.mospolytech.ru/api/books/",
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Token ".concat(e.props.token),
                    },
                    body: JSON.stringify(e.state.credentials),
                  }
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (t) {
                    e.setState({ books: t });
                  })
                  .catch(function (e) {
                    return console.error(e);
                  });
              }),
              e
            );
          }
          return (
            Object(p.a)(a, [
              {
                key: "render",
                value: function () {
                  return 0 == this.user.id
                    ? Object(d.jsx)(j.a, { push: !0, to: "/login" })
                    : Object(d.jsxs)("div", {
                        children: [
                          Object(d.jsx)("h1", {
                            children:
                              "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",
                          }),
                          Object(d.jsx)("button", {
                            onClick: this.loadBooks,
                            children: "Load Books",
                          }),
                        ],
                      });
                },
              },
            ]),
            a
          );
        })(c.Component);
      var S = function () {
          var e = Object(c.useState)({ id: 0, name: "" }),
            t = Object(l.a)(e, 2),
            a = t[0],
            s = t[1],
            n = function (e) {
              s(e);
            };
          return Object(d.jsxs)("div", {
            className: "App",
            children: [
              Object(d.jsx)("header", {
                children: Object(d.jsxs)("nav", {
                  className: "navbar",
                  role: "navigation",
                  "aria-label": "main navigation",
                  children: [
                    Object(d.jsxs)("div", {
                      className: "navbar-brand",
                      children: [
                        Object(d.jsx)(o.c, {
                          to: "/",
                          className: "navbar-item",
                          children: Object(d.jsx)("img", {
                            src: r,
                            alt: "logo",
                          }),
                        }),
                        Object(d.jsxs)("a", {
                          role: "button",
                          className: "navbar-burger",
                          "aria-label": "menu",
                          "aria-expanded": "false",
                          "data-target": "navbarBasicExample",
                          children: [
                            Object(d.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                            Object(d.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                            Object(d.jsx)("span", {
                              "aria-hidden": "true",
                              children: " ",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(d.jsxs)("div", {
                      id: "navbarBasicExample",
                      className: "navbar-menu",
                      children: [
                        Object(d.jsxs)("div", {
                          className: "navbar-start",
                          children: [
                            Object(d.jsxs)(o.c, {
                              to: "/about",
                              className: "navbar-item",
                              children: ["\u041e \u043d\u0430\u0441", " "],
                            }),
                            Object(d.jsxs)("div", {
                              className:
                                "navbar-item has-dropdown is-hoverable",
                              children: [
                                Object(d.jsxs)(o.c, {
                                  to: "/",
                                  className: "navbar-link",
                                  activeClassName: "navbar-link-active",
                                  children: [
                                    "\u0410\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c",
                                    " ",
                                  ],
                                }),
                                Object(d.jsxs)("div", {
                                  className: "navbar-dropdown",
                                  children: [
                                    Object(d.jsxs)(o.c, {
                                      to: "/cars",
                                      className: "navbar-item",
                                      children: [
                                        "\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c",
                                        " ",
                                      ],
                                    }),
                                    Object(d.jsx)("hr", {
                                      className: "navbar-divider",
                                    }),
                                    Object(d.jsxs)(o.c, {
                                      to: "/bikes",
                                      className: "navbar-item",
                                      children: [
                                        "\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434",
                                        " ",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(d.jsxs)("div", {
                          className: "navbar-end",
                          children: [
                            Object(d.jsx)("div", {
                              className: "navbar-item",
                              children: a.name,
                            }),
                            Object(d.jsx)("div", {
                              className: "navbar-item",
                              children: Object(d.jsx)("div", {
                                className: "buttons",
                                children: Object(d.jsx)(o.c, {
                                  to: "/profile",
                                  className: "button is-primary",
                                  children: Object(d.jsx)("strong", {
                                    children:
                                      " \u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442 ",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(d.jsxs)(j.d, {
                children: [
                  Object(d.jsx)(j.b, { exact: !0, path: "/", component: b }),
                  Object(d.jsx)(j.b, { path: "/about", component: x }),
                  Object(d.jsx)(j.b, {
                    exact: !0,
                    path: "/cars",
                    component: O,
                  }),
                  Object(d.jsx)(j.b, {
                    path: "/cars/:id",
                    component: u,
                    user: n,
                  }),
                  Object(d.jsx)(j.b, {
                    exact: !0,
                    path: "/profile",
                    component: y,
                    user: n,
                  }),
                  Object(d.jsx)(j.b, {
                    exact: !0,
                    path: "/login",
                    component: f,
                    user: n,
                  }),
                ],
              }),
            ],
          });
        },
        k = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 68))
              .then(function (t) {
                var a = t.getCLS,
                  c = t.getFID,
                  s = t.getFCP,
                  n = t.getLCP,
                  i = t.getTTFB;
                a(e), c(e), s(e), n(e), i(e);
              });
        };
      i.a.render(
        Object(d.jsx)(o.a, {
          children: Object(d.jsx)(s.a.StrictMode, {
            children: Object(d.jsx)(S, {}),
          }),
        }),
        document.getElementById("root")
      ),
        k();
    },
  },
  [[67, 1, 2]],
]);
//# sourceMappingURL=main.27831526.chunk.js.map
