"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({isOpen, setIsOpen, handleReservation}) {
  const { pending } = useFormStatus();
  return (
    <button onClick={() => {
                        console.log("open information section");
                    isOpen = (setIsOpen(3))} }
      disabled={pending}
      type="submit"
      className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
    >
      {pending ? "Redirecting to information..." : "Reserve camping spot"}
    </button>
  );
}

export default SubmitButton;
