"use client";

import { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";

const OrderDetails = ({ cartItems, onUpdate }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const bookingFee = 99;

  const generateRandomId = cartItems.map((item) => ({
    ...item,
    id: item.id || crypto.randomUUID(),
  }));

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    onUpdate(updatedCartItems);
  };

  useEffect(() => {
    const calculateTotal = () => {
      const itemsTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
      setTotalPrice(itemsTotal + bookingFee);
    };
    calculateTotal();
  }, [cartItems]);

  const ticketAmount = cartItems.reduce((total, item) => {
    return total + parseInt(item.count, 10);
  }, 0);

  return (
    <div className="bg-offwhite bg-gray-100 p-6 shadow-md w-96">
      <h4 className="text-lg text-black font-semibold mb-4">Order details</h4>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-black"
          >
            <span className="text-sm flex items-center gap-2">
              <BsTrash3
                onClick={() => handleRemoveItem(item.id)}
                className="cursor-pointer"
              />
              {item.title} x {item.count}
            </span>
            <span className="font-medium">
              {(item.price * item.count).toFixed(2)} DKK
            </span>
          </div>
        ))}
        <div className="border-t pt-4 mt-4 text-black">
          <div className="flex justify-between">
            <span>Total Tickets</span>
            <span>{ticketAmount}</span>
          </div>
          <div className="flex justify-between">
            <span>Booking Fee</span>
            <span className="font-medium">{bookingFee}DKK</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>{totalPrice.toFixed(2)}DKK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
