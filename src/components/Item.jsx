"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

const Item = ({isOpen, setIsOpen, item}) => {

    return (
        <div className="py-4 px-12 border"> 
            <header>

            <button onClick={() => {
                
              isOpen === item ? setIsOpen(0) : setIsOpen (item);
            }} 
                className="flex items-center justify-between w-full text-left font-semibold py-2">

            <span className = "text-offwhite" > 
                Can I buy a ticket without campingspot?
                </span>
            <span className="ml-8 self-start">

                {isOpen === item ? (
                <IoClose className = "text-2xl"/> 
            ) : (
                <IoRemove className = "text-2xl"/>
                )}

                </span>
            </button>
        </header>

        {isOpen === item && (
        
        <section className="text-sm text-offwhite">

            <p className="pb-3">
                No you can´t 
            </p>

            </section> )}
        </div>
      );
}
 
export default Item;