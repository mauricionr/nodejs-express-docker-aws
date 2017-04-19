// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    default_template = marko_loadTemplate(require.resolve("src/layouts/default")),
    app_template = marko_loadTemplate(require.resolve("../../components/app")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_tag = marko_loadTag(app_template),
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: default_template,
      title: {
          renderBody: function renderBody(out) {
            out.w("About pwa and MarkoJS");
          }
        },
      styles: {
          renderBody: function renderBody(out) {
            out.w("<link href=\"/static/bundle.css\" media=\"all\" rel=\"stylesheet\">");
          }
        },
      scripts: {
          renderBody: function renderBody(out) {
            out.w("<script src=\"/static/bundle.js\"></script>");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            out.w("<header><h1> <a href=\"/\">Go home</a></h1></header>");

            app_tag({
                images: [
                    "https://farm3.staticflickr.com/2871/33868366335_49419e8972_c.jpg",
                    "https://farm3.staticflickr.com/2805/33484547310_02ba26ba7a_c.jpg",
                    "https://farm3.staticflickr.com/2849/33467950470_aaf48eca38_c.jpg",
                    "https://farm4.staticflickr.com/3927/33060581733_e523d557f1_c.jpg",
                    "https://farm3.staticflickr.com/2808/33056122303_cd986f6588_c.jpg",
                    "https://farm3.staticflickr.com/2941/33056095083_e94c995377_c.jpg",
                    "https://farm4.staticflickr.com/3684/33030436354_918ccf97d6_c.jpg",
                    "https://farm4.staticflickr.com/3953/33025571234_95408e3ac8_c.jpg"
                  ].reverse()
              }, out);
          }
        }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "src/layouts/default",
      "../../components/app",
      "marko/taglibs/core/include-tag"
    ]
  };
