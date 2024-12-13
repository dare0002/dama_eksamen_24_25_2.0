"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem"
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import Camping from "./Camping";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState (0);

    const checkoutData = [
        {
            step:<Bs1Circle className="w-12 h-12"/>,
            text: "Tickets",
            answer: ""
        }, 
        {
            step: <Bs2Circle className="w-12 h-12"/>,
            text: "Camping",
            answer: ""
        }, 
        {
            step:<Bs3Circle className="w-12 h-12" />,
            text: "Information",
            answer: ""
        }
    ]



    return (
        <section className="w-full max-w-2xl mx-auto  px-4 md:px-6 py-24 bg-offwhite bg-no-repeat">
            
               {checkoutData.map((item, index) => (
                    <AccordionItem 
                        key={index}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        item={index + 1}
                        step={item.step}
                        text={item.text}
                        answer={item.answer}
                    />
               ))}   
        </section>
    );
};
 
export default Accordion;