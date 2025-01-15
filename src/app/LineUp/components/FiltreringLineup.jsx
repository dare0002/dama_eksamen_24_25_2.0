import { useState } from "react";

const FiltreringLineup = ({ onDayChange }) => {
  const handleDayChange = (event) => {
    onDayChange(event.target.value);
  };

  return (
    <>
      <p className="italic md:mb-8 mb-4">
        To see the lineup for a specific day, choose a day in the dropdown below
      </p>
      <label className=" border border-offwhite p-1 text-offwhite cursor-pointer">
        {/* Select day */}
        <select
          name="day"
          id="day-selector"
          onChange={handleDayChange}
          className="outline-none	 bg-black text-center text-offwhite mx-1 cursor-pointer"
        >
          <option value="All">All Days</option>
          <option value="mon">Monday</option>
          <option value="tue">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thu">Thursday</option>
          <option value="fri">Friday</option>
          <option value="sat">Saturday</option>
          <option value="sun">Sunday</option>
        </select>
      </label>
    </>
  );
};

export default FiltreringLineup;
