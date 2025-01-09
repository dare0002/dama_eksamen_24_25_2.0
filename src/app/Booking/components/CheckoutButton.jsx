"use client";
import { useFormStatus } from "react-dom";
import Link from "next/link";

function CheckoutButton({ btnText }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite"
    >
      {/* {pending ? "Redirecting to payment..." : "Proceed to payment"} */}
      {pending ? "Redirecting to payment..." : btnText}
    </button>
  );
}

// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { fulfillReservation } from "@/lib/apiforms";

// hjælp til fejlfinding og finde id med localstorage af CHATGPT

//function CheckoutButton({ btnText, reservationId }) {
// const [idFromLocalStorage, setIdFromLocalStorage] = useState(null);

// useEffect(() => {
//   if (!reservationId) {
//     const storedId = localStorage.getItem("reservationId");
//     setIdFromLocalStorage(storedId);
//     console.log("Fetched Reservation ID from Local Storage:", storedId);
//   }
// }, [reservationId]);

//const handleCheckout = async () => {
// const idToUse = reservationId || idFromLocalStorage;
//const response = await fulfillReservation({ id: idToUse });
//console.log("Reservation fulfilled successfully:", response);
//};

//   return (
//     <Link href="/Payment">
//       <button
//         //onClick={handleCheckout}
//         className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite"
//       >
//         {btnText}
//       </button>
//     </Link>
//   );
// }

export default CheckoutButton;
