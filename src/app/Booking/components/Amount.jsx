"use client";

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Amount = ({ type, price, onUpdate }) => {
  const [tickets, setTickets] = useState(0);
  const [error, setError] = useState(null); 

  const updateTickets = (newTickets) => {
    if (newTickets < 0) return;
    try{
      localStorage.setItem(`tickets-${type}`, newTickets);
      onUpdate({ title: type, price, count: newTickets });
      setTickets(newTickets);
      setError(null);
    } catch(err) {
      setError("You must choose a ticket. Please try again. ")
    }
  };

  const addTicket = () => {
    updateTickets(tickets + 1);
  };

  const removeTicket = () => {
    if (tickets > 0) {
      updateTickets(tickets - 1);
    }
  };

  useEffect(() => {
    try{
      const savedTickets = localStorage.getItem(`tickets-${type}`);
      if (savedTickets) {
      const parsedTickets = parseInt(savedTickets);
      if (!isNaN(parsedTickets)) {
      setTickets(parsedTickets);
      onUpdate({ title: type, price, count: savedTickets });
    }
  }
  } catch (err) {
    setError("Failed to load saved tickets. ")
  }
}, [type]);

  return (
    <section className="flex items-center justify-between space-x-4 mb-6 p-4 bg-offwhite rounded-lg shadow-md">
      <h4 className="text-xl font-semibold text-gray-800">{type}</h4>
      <div className="flex items-center space-x-4">
        <button
          onClick={addTicket}
          className="p-2 rounded-full bg-orange text-white hover:bg-orange/60 focus:outline-none focus:ring-2 focus:ring-orange/100"
        >
          <FaPlus className="text-xl" />
        </button>
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-50 text-lg text-gray-800">
          {tickets}
        </div>
        <button
          onClick={removeTicket}
          className="p-2 rounded-full bg-orange text-white hover:bg-orange/60 focus:outline-none focus:ring-2 focus:ring-orange/100"
        >
          <FaMinus className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Amount;
