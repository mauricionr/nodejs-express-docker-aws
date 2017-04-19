// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>");

  include_tag({
      _target: data.title
    }, out);

  out.w("</title><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"description\" content=\"An Marko progressive web app. Probably the best Marko progressive web app web app there is.\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"canonical\" href=\"https://lit-headland-75537.herokuapp.com/\"><link rel=\"manifest\" href=\"manifest.json\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"application-name\" content=\"Marko progressive web app\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\"><meta name=\"apple-mobile-web-app-title\" content=\"Marko progressive web app\"><link rel=\"icon sizes=192x192\" href=\"/images/w.png\"><link rel=\"apple-touch-icon\" href=\"/images/w.png\"><meta name=\"msapplication-TileImage\" content=\"/images/w.png\"><meta name=\"msapplication-TileColor\" content=\"#000000\"><meta name=\"theme-color\" content=\"#000000\"><meta property=\"og:title\" content=\"Marko progressive web app\"><meta property=\"og:type\" content=\"website\"><meta property=\"og:image\" content=\"\"><meta property=\"og:url\" content=\"https://lit-headland-75537.herokuapp.com/\"><meta property=\"og:description\" content=\"The best and easiest Marko progressive web app web app there is. No install just use it right away in your browser!\"><meta name=\"twitter:card\" content=\"summary\"><meta name=\"twitter:url\" content=\"https://lit-headland-75537.herokuapp.com/\"><meta name=\"twitter:title\" content=\"Marko progressive web app\"><meta name=\"twitter:description\" content=\"The best and easiest Marko progressive web app web app there is. No install just use it right away in your browser!\"><meta name=\"twitter:image\" content=\"\"><meta name=\"twitter:creator\" content=\"@nunesmauricio_\"><link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" media=\"all\" rel=\"stylesheet\">");

  include_tag({
      _target: data.styles
    }, out);

  out.w("</head><body><div class=\"container\"><header>");

  include_tag({
      _target: data.title
    }, out);

  out.w("</header><main id=\"main\">");

  include_tag({
      _target: data.body
    }, out);

  out.w("</main></div>");

  include_tag({
      _target: data.scripts
    }, out);

  browser_refresh_tag({
      enabled: true
    }, out);

  out.w("<script>\n      if('serviceWorker' in navigator) {\n        navigator.serviceWorker.register('/service-worker.js', {scope: '/'})\n          .then(function(registration) {\n                console.log('Service Worker Registered');\n          });\n        navigator.serviceWorker.ready.then(function(registration) {\n           console.log('Service Worker Ready');\n        });\n      }\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    deps: [
      "./style.less"
    ],
    tags: [
      "marko/taglibs/core/include-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/components/taglib/init-components-tag",
      "marko/taglibs/async/await-reorderer-tag"
    ]
  };
