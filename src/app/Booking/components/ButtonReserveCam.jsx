"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({ setIsOpen, handleReservation }) {
  const { pending } = useFormStatus();
  return (
    <button
      onClick={() => {
        setIsOpen(3);
        handleReservation();
      }}
      disabled={pending}
      type="submit"
      className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
    >
      {pending ? "Redirecting to information..." : "Reserve camping spot"}
    </button>
  );
}

export default SubmitButton;
