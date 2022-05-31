import React from "react";
import Accordion from "../components/Accordion";


export default {
    title: "Accordion",
    component: Accordion,
}

const Accordions = (args) => <Accordion {...args} />;
export const Accord = Accordions.bind({})
Accord.args={
    title: "This is my title",
    content: "This is my content", 
    //titleStyle: ,
    //contentStyle: ,
    //style: ,
}