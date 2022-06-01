import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

var css_248z = ".containerAccordion{\n    margin: auto;\n    width: 100%;\n}\n\n.accordion {\n    background-color: green;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    border: none;\n    /* text-align: left; */\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n}\n  \n.active, .accordion:hover {\n    background-color: #ccc; \n}\n  \n.panel {\n    padding: 0 18px;\n    display: none;\n    background-color: white;\n    overflow: hidden;\n}\n\n  .panelActive {\n    padding: 0 18px;\n    display: block;\n    background-color: gray;\n    /* overflow: hidden; */\n  }";
styleInject(css_248z);

function Accordion({
  title,
  content,
  titleStyle,
  contentStyle,
  style
}) {
  const [panel, setPanel] = useState('panel');

  const accordionOnClick = () => {
    let p = panel === 'panel' ? 'panelActive' : 'panel';
    setPanel(p);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: "containerAccordion"
  }, /*#__PURE__*/React.createElement("div", {
    style: titleStyle,
    className: "accordion",
    onClick: accordionOnClick
  }, title), /*#__PURE__*/React.createElement("div", {
    style: contentStyle,
    className: panel
  }, content));
}
Accordion.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element]),
  content: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element]),
  titleStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  style: PropTypes.object
};

export { Accordion as default };
