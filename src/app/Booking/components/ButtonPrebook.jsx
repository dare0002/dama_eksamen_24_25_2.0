// "use client";
// import { useFormStatus } from "react-dom";

// function SubmitButton({ isOpen, setIsOpen }) {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       onClick={() => {
//         console.log("open camping section");
//         isOpen = setIsOpen(2);
//       }}
//       disabled={pending}
//       type="submit"
//       className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
//     >
//       {pending ? "Redirecting to campingspots..." : "Prebook a camping spot"}
//     </button>
//   );
// }

// export default SubmitButton;

"use client";

import { useState } from "react";

function ButtonPrebook({ isOpen, setIsOpen, ticketAmount }) {
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (ticketAmount === 0) {
      setError(true);
    } else {
      setError(false);
      setIsOpen(2);
    }
  };

  return (
    <div>
      {error && (
        <p className="text-red-400 text-sm mb-2">
          You must choose at least one ticket. Please try again.
        </p>
      )}
      <button
        onClick={handleClick}
        type="button"
        className="w-full bg-black text-offwhite py-4 px-6 hover:bg-lightgray border border-solid"
      >
        Preebook a campingspot
      </button>
    </div>
  );
}

export default ButtonPrebook;
