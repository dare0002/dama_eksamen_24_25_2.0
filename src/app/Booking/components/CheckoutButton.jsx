"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fulfillReservation } from "@/lib/apiforms";

// hjælp til fejlfinding og finde id med localstorage af CHATGPT

function CheckoutButton({ btnText, reservationId, type = "button", disabled, className }) {
  const [idFromLocalStorage, setIdFromLocalStorage] = useState(null);

  useEffect(() => {
    if (!reservationId) {
      const storedId = localStorage.getItem("reservationId");
      setIdFromLocalStorage(storedId);
      console.log("Fetched Reservation ID from Local Storage:", storedId);
    }
  }, [reservationId]);

  const handleCheckout = async () => {
    if(disabled) {
      return;
    }
    const idToUse = reservationId || idFromLocalStorage;
    const response = await fulfillReservation({ id: idToUse });
    console.log("Reservation fulfilled successfully:", response);
  };

  return (
    <Link href="/Payment">
      <button
        onClick={handleCheckout}
        type={type}
        disabled={disabled}
        className={className}
        // className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite"
      >
        {btnText}
      </button>
    </Link>
  );
}

export default CheckoutButton;
