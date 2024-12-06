"use client";

import { useState } from "react";
import Item from "./Item";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState (0);

    const faqData = [
        {
            question: "Can I buy a ticket without a camping spot?",
            answer: "No, you will have to preebook a camping spot"
        }, 
        {
            question: "Can you buy booze at the festival or do you have to bring your own?",
            answer: "We will be selling booze during the festival. You are allowed to bring up to 1L onto the festival camping area. Please notice that we do not accept booze in glass. "
        }, 
        {
            question: "Can I get a refund for concert tickets and camping tickets?",
            answer: "Purchased tickets through REWU are none-refundable, regardless payment methods. If the event is cancelled, the ticket is refunded within 30 days after the date of the event. The fixed bookingfee is not refundable."
        }
    ]

    return (
        <section className="w-full max-w-2xl mx-auto  px-4 md:px-6 py-24 bg-transparent bg-no-repeat">
               <h3 className="text-white pb-4">FAQ</h3>
               <p className="text-white text pb-12">Frequently asked questions</p>
               {faqData.map((item, index) => (
                    <Item 
                        key={index}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        item={index + 1}
                        question={item.question}
                        answer={item.answer}
                    />
               ))}   
        </section>
    );
};
 
export default Accordion;