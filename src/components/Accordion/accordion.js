import React, {useState} from 'react'
import './accordion.style.css'
import PropTypes from 'prop-types';
export default function Accordion({title, content, titleStyle, contentStyle, style}){
    const [panel, setPanel]=useState('panel')
    const accordionOnClick =()=>{
        let p = panel === 'panel'? 'panelActive': 'panel'
        setPanel(p)
    }
    return (
        <div style={style} className="containerAccordion" >
            <div style={titleStyle} className="accordion" onClick={accordionOnClick}>
                {title}
            </div>
            <div style={contentStyle} className={panel}>
                {content}
            </div>
        </div>
    )
}

Accordion.PropTypes={
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.element,
    ]),
    content: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.element,
    ]),
    titleStyle: PropTypes.object, 
    contentStyle: PropTypes.object,
    style: PropTypes.object
}