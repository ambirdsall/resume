"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
const formatDate = dateString => dateString.replaceAll("'", "’").replace("-", "–").replaceAll(" ", " ");
const Title = ({
  title,
  titleLink,
  jobTitle
}) => {
  let titleElement;
  if (titleLink) {
    titleElement = /*#__PURE__*/_react.default.createElement("a", {
      href: titleLink,
      className: "entry-title-per-se"
    }, title);
  } else {
    titleElement = /*#__PURE__*/_react.default.createElement("span", {
      className: "entry-title-per-se"
    }, title);
  }
  if (jobTitle) {
    titleElement = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, titleElement, ", ", jobTitle);
  }
  return /*#__PURE__*/_react.default.createElement("h4", {
    className: "entry-title"
  }, titleElement);
};
const Entry = ({
  title,
  titleLink,
  jobTitle,
  dates,
  skills,
  children
}) => /*#__PURE__*/_react.default.createElement("div", {
  className: "entry"
}, /*#__PURE__*/_react.default.createElement(Title, {
  title: title,
  titleLink: titleLink,
  jobTitle: jobTitle
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "entry-dates"
}, /*#__PURE__*/_react.default.createElement(_fa.FaCalendarAlt, null), formatDate(dates)), /*#__PURE__*/_react.default.createElement("div", {
  className: ""
}, skills), /*#__PURE__*/_react.default.createElement("p", {
  className: ""
}, children));
var _default = exports.default = Entry;