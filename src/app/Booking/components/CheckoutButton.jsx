"use client";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { fulfillReservation } from "@/lib/apiforms";

function CheckoutButton({ btnText, reservationId }) {
  const { pending } = useFormStatus();

  console.log("reservationId", reservationId);
  return (
    <Link href="/Payment">
      <button
        disabled={pending}
        type="submit"
        className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite"
      >
        {pending ? "Redirecting to payment..." : btnText}
      </button>
    </Link>
  );
}

export default CheckoutButton;
