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
