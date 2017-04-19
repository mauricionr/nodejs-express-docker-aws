// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rc,
    marko_componentType = marko_registerComponent("/marko-pwa$1.0.0/src/components/app/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    image_template = marko_loadTemplate(require.resolve("../image")),
    marko_loadTag = marko_helpers.t,
    image_tag = marko_loadTag(image_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<section" +
    marko_attr("id", __component.id) +
    ">");

  marko_forEach(input.images, function(i) {
    image_tag({
        src: i
      }, out);
  });

  out.w("</section>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.c(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.less",
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "../image"
    ]
  };
