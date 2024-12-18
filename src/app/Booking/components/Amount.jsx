"use client"

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const Amount = ({type, price, onUpdate}) => {
    const [tickets, setTickets] = useState (0);

    useEffect(() => {
        const savedTickets = localStorage.getItem(`tickets-${type}`);
        if (savedTickets) {
            setTickets(parseInt(savedTickets, 10));
        }
    }, [type]);

    useEffect(() => {
        localStorage.setItem(`tickets-${type}`, tickets);
    }, [type, tickets]);



    const addTicket = () => {
        const newTickets = tickets +1;
        setTickets(newTickets);
        localStorage.setItem(`tickets-${type}`, newTickets);
        onUpdate({title: type, price, count: newTickets});
    }

    const removeTicket = () => {
        if (tickets > 0) {
            const newTickets = tickets -1;
        setTickets(newTickets);
        // localStorage.setItem(`tickets-${type}`, newTickets);
        onUpdate({title: type, price, count: newTickets });
    }
};

    return (
        <section className="flex items-center justify-between space-x-4 mb-6 p-4 bg-offwhite rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">{type}</h4>
            <div className="flex items-center space-x-4">
                <button 
                    onClick={addTicket}
                    className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <FaPlus className="text-xl" />
                </button>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-50 text-lg text-gray-800">
                    {tickets}
                </div>
                <button 
                    onClick={removeTicket}
                    className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <FaMinus className="text-xl" />
                </button>
            </div>
        </section>


        // <section className="flex items-center space-x-4 mb-6 p-4 bg-offwhite rounded-lg shadow-md">
        //     <h4 className="text-xl font-semibold text-gray-800">{type}</h4>
        //     <div className="flex items-center space-x-4">
        //         <FaPlus onClick={addTicket} className="text-semibold cursor-pointer p-2 rounded" />
        //         <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black text-lg bg-pink">
        //             {tickets}
        //         </div>
        //         <FaMinus onClick={removeTicket} className="text-semibold cursor-pointer"/>
        //     </div>
        // </section>
        
      );
}
 
export default Amount;


