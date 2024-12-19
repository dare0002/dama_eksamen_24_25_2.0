"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({ isOpen, setIsOpen }) {
  const { pending } = useFormStatus();
  return (
    <button
      onClick={() => {
        console.log("open camping section");
        isOpen = setIsOpen(2);
      }}
      disabled={pending}
      type="submit"
      className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
    >
      {pending ? "Redirecting to campingspots..." : "Prebook a camping spot"}
    </button>
  );
}

export default SubmitButton;
