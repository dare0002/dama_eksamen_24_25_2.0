"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-inherit text-offwhite py-2 px-4 hover:bg-orange border border-solid border-offwhite"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
