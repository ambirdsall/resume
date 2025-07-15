"use strict";

var _react = _interopRequireDefault(require("react"));
var _server = _interopRequireDefault(require("react-dom/server"));
var _index = _interopRequireDefault(require("../src/pages/index.js"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
// const html = ReactDOMServer.renderToStaticMarkup(<Page sha='butts.gov' />)
const html = _server.default.renderToStaticMarkup(/*#__PURE__*/_react.default.createElement(_index.default, null));
const fullHtml = `<!DOCTYPE html>${html}`;
console.log(fullHtml);