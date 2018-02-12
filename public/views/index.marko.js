// Compiled using marko@4.7.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/CQV$1.0.0/public/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_forEach = marko_helpers.f,
    await_tag = marko_loadTag(require("marko/src/taglibs/async/await-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html c-whitespace=\"preserve\" xmlns=\"http://www.w3.org/1999/html\"><head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"navbar navbar-info\"><div class=\"container-fluid\"><div class=\"navbar-header\"><h1></h1></div><div class=\"nav navbar-nav navbar-right login-bar\">");

  if (((data.isUserAdmin == false) && (data.isUserLecturer == false)) && (data.isUserAttendee == false)) {
    out.w("<a href=\"/api/login\">Login</a>");
  } else {
    out.w("<div class=\"col-xs center_button\"><p>" +
      marko_escapeXml(data.username) +
      "</p><button type=\"button\" class=\"btn btn-default btn-xs \" onclick=\"logOutUser('" +
      marko_escapeXmlAttr(data.username) +
      "')\">Logout</button></div>");
  }

  out.w("</div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-xs-9\"><div class=\"panel panel-info\"><div class=\"panel-heading\"><div class=\"panel-title\"><div class=\"row\"><div class=\"col-xs-6\"><h3 class=\"header_title\">Questions List</h3></div></div></div></div><div class=\"panel-body\">");

  await_tag({
      _dataProvider: data,
      _name: "data",
      renderPlaceholder: function renderBody(out) {
        out.w("<img src=\"img/spinner.gif\">");
      },
      renderBody: function renderBody(out, data) {
        marko_forEach(data.questions, function(item) {
          out.w("<div class=\"row\"><div class=\"col-xs-1 center_button\"><img class=\"img-responsive\" src=\"images/question.png\"></div><div class=\"col-xs-7\"><h4 class=\"product-name\"><strong>" +
            marko_escapeXml(item.content) +
            "</strong></h4></div><div class=\"col-xs-2\"><h6 id=\"label_priority\">Rate<br> from 0 to 10</h6><input class=\"form-control\" type=\"number\" name=\"rate\" min=\"1\" max=\"10\" value=\"" +
            marko_escapeXmlAttr(item.priority) +
            "\" onblur=\"updateQuestion(this.value, '" +
            marko_escapeXmlAttr(item.id) +
            "')\"></div><div class=\"col-xs-2\">");

          if (data.isUserAdmin == true) {
            out.w("<div class=\"col-xs center_button\"><button id=\"'" +
              marko_escapeXmlAttr(item.id) +
              "'\" type=\"button\" class=\"btn btn-link btn-xs\" onclick=\"deleteQuestion('" +
              marko_escapeXmlAttr(item.id) +
              "')\"><span class=\"glyphicon glyphicon-trash\"> </span></button></div>");
          }

          if (data.isUserLecturer == true) {
            out.w("<div class=\"col-xs center_button\"><button type=\"button\" class=\"btn btn-default btn-xs \" onclick=\"closeQuestion('" +
              marko_escapeXmlAttr(item.id) +
              "')\">Close</button></div>");
          }

          out.w("</div></div><hr>");
        });
      }
    }, out, __component, "25");

  out.w("<hr><div class=\"row\">");

  if (data.isUserAttendee == true) {
    out.w("<div class=\"text-center\"><div class=\"col-xs-8\"><input id=\"new_question_id\" type=\"text\" class=\"form-control input-sm\" value=\"\" placeholder=\"Add your question\"></div><div class=\"col-xs-2\"><input class=\"form-control input-sm\" id=\"new_question_priority_id\" type=\"number\" name=\"rate\" min=\"1\" max=\"10\" value=\"\" placeholder=\"set priority\"><h6> 0 to 10</h6></div><div class=\"col-xs-2\"><button type=\"button\" class=\"btn btn-default btn-sm btn-block\" onclick=\"addNewQuestion('" +
      marko_escapeXmlAttr(data.username) +
      "')\">Add</button></div></div>");
  }

  out.w("</div></div><div class=\"panel-footer\"><div class=\"row text-center\"></div></div></div></div></div></div><script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><script type=\"text/javascript\" src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script><script src=\"js/app/Questions/Question.js\"></script><script src=\"js/app/Utilities/const.js\"></script><script src=\"js/app/index.js\"></script>");

  await_reorderer_tag({}, out, __component, "61");

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "62");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/CQV$1.0.0/public/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/async/await-tag",
      "marko/src/taglibs/async/await-reorderer-tag",
      "marko/src/components/taglib/init-components-tag"
    ]
  };
