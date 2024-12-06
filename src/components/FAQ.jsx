"use client";

import { useState } from "react";
import Item from "./Item";

const Accordion = () => {

    const [isOpen, setIsOpen] = useState (0);

    return ( 
        <section className="w-full max-w-2xl mx-auto  px-4 md:px-6 py-24 bg-transparent bg-no-repeat">
            <h3 className="text-white pb-4">FAQ</h3>
            <p className="text-white text pb-12">Here are some of the frequently asked questions</p>
            <Item isOpen = {isOpen} setIsOpen = {setIsOpen} item = {1}/>
            <Item isOpen = {isOpen} setIsOpen = {setIsOpen} item = {2}/>
            <Item isOpen = {isOpen} setIsOpen = {setIsOpen} item = {3}/>
        </section>
     );
}
 
export default Accordion;