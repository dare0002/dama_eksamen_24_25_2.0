"use client";

import { useState, useEffect } from "react";
import OrderDetails from "./OrderDetails";
import Amount from "./Amount";

const saveTickets = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleUpdate = (updatedItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.title === updatedItem.title);
            if (existingItem) {
                return prevItems.map((item) => 
                    item.title === updatedItem.title ? {...item, count: updatedItem.count} : item
                );
            } else {
                return [...prevItems, updatedItem];
            }
        });
    };

    return (
        <div className="flex flex-col space-y-6">
            <Amount type="Regular" price={799} onUpdate={handleUpdate}/>
            <Amount type="VIP" price={1299} onUpdate={handleUpdate}/>
            <OrderDetails cartItems={cartItems} onUpdate={setCartItems} />
        </div>
    )
}

export default saveTickets;