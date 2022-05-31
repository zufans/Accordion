import React, {useState} from 'react'
import './accordion.style.css'
export default function Accordion({title, content, titleStyle, contentStyle, style}){
    const [panel, setPanel]=useState('panel')
    const accordionOnClick =()=>{
        let p = panel === 'panel'? 'panelActive': 'panel'
        setPanel(p)
    }
    return (
        <div style={style} class="containerAccordion" >
            <div style={titleStyle} class="accordion" onClick={accordionOnClick}>
                {title}
            </div>
            <div style={contentStyle} class={panel}>
                {content}
            </div>
        </div>
    )
}