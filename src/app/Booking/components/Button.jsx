"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-black text-offwhite py-4 px-6 hover:bg-green-700 border border-solid border-offwhite"
    >
      {pending ? "Redirecting to payment..." : "Proceed to payment"}
    </button>
  );
}

export default SubmitButton;
