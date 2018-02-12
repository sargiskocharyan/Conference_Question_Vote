// Compiled using marko@4.7.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/CQV$1.0.0/public/views/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html c-whitespace=\"preserve\"><head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"navbar navbar-info\"><div class=\"container-fluid\"><div class=\"navbar-collapse collapse navbar-responsive-collapse\"><h3>Please enter username</h3></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"text-center\"><div class=\"col-xs-2\"><input id=\"login_input\" type=\"text\" class=\"form-control input-sm\" value=\"\" placeholder=\"username\"></div></div><div><p>Please insert 'attendee' to login as attendee, 'lecturer' to login as lecturer and 'moderator' to login as moderator</p></div></div><div class=\"row\"><p></p></div><div class=\"row\"><div class=\"text-center\"><div class=\"col-xs-2\"><input id=\"pass_login\" type=\"text\" class=\"form-control input-sm\" value=\"\" placeholder=\"password\"></div></div></div><div class=\"row\"><p></p></div><div class=\"row\"><div class=\"col-xs-2\"><button type=\"button\" class=\"btn btn-default btn-sm btn-block\" onclick=\"loginUser()\">Login</button></div></div></div></div><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script><script src=\"../js/app/Questions/Question.js\"></script><script src=\"../js/app/Utilities/const.js\"></script><script src=\"../js/app/index.js\"></script><script src=\"../js/app/User/login.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "33");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/CQV$1.0.0/public/views/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
