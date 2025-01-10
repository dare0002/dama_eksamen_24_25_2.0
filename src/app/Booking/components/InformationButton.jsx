"use client";
import { useFormStatus } from "react-dom";

function InformationButton({ btnText }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite"
    >
      {btnText}
    </button>
  );
}
export default InformationButton;
