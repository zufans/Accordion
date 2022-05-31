'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

module.exports = Accordion;