"use client";

import { useState } from "react";
import Accordion from "./components/Accordion";
import OrderDetails from "./components/OrderDetails";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartUpdate = (updatedItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.title === updatedItem.title
      );
      if (existingItem) {
        return prev.map((item) =>
          item.title === updatedItem.title
            ? { ...updatedItem, id: existingItem.id }
            : item
        );
      }
      return [...prev, { ...updatedItem, id: crypto.randomUUID() }];
    });
  };

  return (
    <section className="mb-12">
      <h3 className="text-xl md:text-2xl mb-6 w-full max-w-4xl mx-auto">
        Checkout.
      </h3>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-2 ">
          <Accordion onCartUpdate={handleCartUpdate} cartItems={cartItems} />
        </div>
        <div className="md:col-span-1 lg:col-span-1 md:relative">
          <div className="md:sticky top-6">
            <OrderDetails cartItems={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
