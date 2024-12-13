"use client"

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Amount = ({type}) => {

    const [tickets, setTickets] = useState (0);

    function addTicket(){
        setTickets(tickets + 1);
    }

    function removeTicket(){
        if (tickets > 0) {
        setTickets(tickets - 1);
    }}

    return (
        <section className="flex items-center space-x-4">
            <h4 className="text-xl">{type}</h4>
            <div className="flex items-center space-x-4">
                <FaPlus onClick={addTicket} className="text-xl" />
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black text-lg bg-pink">
                    {tickets}
                </div>
                <FaMinus onClick={removeTicket} className="text-xl"/>
            </div>
        </section>
      );
}
 
export default Amount;