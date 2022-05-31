'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "";
styleInject(css_248z);

function Accordion({
  title,
  content,
  titleStyle,
  contentStyle,
  style
}) {
  const [panel, setPanel] = React.useState('panel');

  const accordionOnClick = () => {
    let p = panel === 'panel' ? 'panelActive' : 'panel';
    setPanel(p);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: style,
    class: "containerAccordion"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: titleStyle,
    class: "accordion",
    onClick: accordionOnClick
  }, title), /*#__PURE__*/React__default["default"].createElement("div", {
    style: contentStyle,
    class: panel
  }, content));
}
Accordion.PropTypes = {
  title: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].object, PropTypes__default["default"].element]),
  content: PropTypes__default["default"].PropTypes.oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].object, PropTypes__default["default"].element]),
  titleStyle: PropTypes__default["default"].object,
  contentStyle: PropTypes__default["default"].object,
  style: PropTypes__default["default"].object
};

module.exports = Accordion;
