import { useState } from "react";

const FiltreringLineup = ({ onDayChange }) => {
  const handleDayChange = (event) => {
    onDayChange(event.target.value);
  };

  return (
    <label>
      Select day
      <select name="day" id="day-selector" onChange={handleDayChange}>
        <option value="All">All</option>
        <option value="mon">Monday</option>
        <option value="tue">Tuesday</option>
        <option value="wed">Wednesday</option>
        <option value="thu">Thursday</option>
        <option value="fri">Friday</option>
        <option value="sat">Saturday</option>
        <option value="sun">Sunday</option>
      </select>
    </label>
  );
};

export default FiltreringLineup;
