// "use client";
// import { useFormStatus } from "react-dom";

// function SubmitButton({ setIsOpen, handleReservation }) {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       onClick={() => {
//         setIsOpen(3);
//         handleReservation();
//       }}
//       disabled={pending}
//       type="submit"
//       className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
//     >
//       {pending ? "Redirecting to information..." : "Reserve camping spot"}
//     </button>
//   );
// }

// export default SubmitButton;

"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function ButtonReserveCam({ setIsOpen, handleReservation, selectedArea }) {
  const { pending } = useFormStatus();
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!selectedArea) {
      setError(true);
    } else {
      setError(false);
      handleReservation();
      setIsOpen(3);
    }
  };

  return (
    <div>
      {error && (
        <p className="text-red-400 text-sm mb-2">
          You must choose a camping spot.
        </p>
      )}
      <button
        // onClick={() => {
        //   setIsOpen(3);
        //   handleReservation();
        // }}
        onClick={handleClick}
        disabled={pending}
        type="button"
        className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
      >
        {pending ? "Redirecting to information..." : "Reserve camping spot"}
      </button>
    </div>
  );
}

export default ButtonReserveCam;
