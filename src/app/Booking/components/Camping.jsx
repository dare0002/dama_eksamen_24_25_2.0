"use client";

import { useState, useEffect } from "react";
import { getAvailableSpots, reserveSpot } from "@/lib/apiforms";
import ButtonReserveCam from "./ButtonReserveCam";

const Camping = ({
  isOpen,
  setIsOpen,
  cartItems,
  setReservationId,
  reservationId,
}) => {
  const [campingData, setCampingData] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [message, setMessage] = useState("");

  const ticketAmount = cartItems.reduce((total, item) => {
    return total + parseInt(item.count, 10);
  }, 0);

  useEffect(() => {
    const fetchCampingData = async () => {
      getAvailableSpots().then((spots) => setCampingData(spots));
    };

    fetchCampingData();
  }, []);

  const handleReservation = () => {
    if (!selectedArea) {
      setMessage("Please select an area.");
      return;
    }
    reserveSpot(selectedArea, ticketAmount).then((id) => {
      setReservationId(id);
      localStorage.setItem("reservationId", id);
      console.log("Reservation ID saved to Local Storage:", id);
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-offwhite rounded-lg shadow-md">
      <h3 className="text-base mb-6"> Camping Spots</h3>

      <ul className="mb-6 space-y-2">
        {campingData.length > 0
          ? campingData
              .sort((a, b) => a.available - b.available)
              .map((spot, index) => (
                <li
                  key={index}
                  className={
                    spot.available < ticketAmount
                      ? "bg-red-500/25 p-4 border rounded-lg flex flex-col"
                      : "bg-green-500/25 p-4 border rounded-lg flex flex-col"
                  }
                >
                  <strong className="text-lg font-medium text-gray-800">
                    {spot.area}
                  </strong>
                  <span>Total Spots: {spot.spots}</span>
                  <span>Available Spots: {spot.available} </span>
                </li>
              ))
          : ""}
      </ul>

      <div className="mb-6">
        <h4 className="text-base text-gray-800 mb-4">
          Select Area
        </h4>
        <div className="space-y-2">
          {campingData
            .filter((spot) => spot.available > ticketAmount)
            .sort((a, b) => a.available - b.available)
            .map((spot, index) => (
              <label
                key={index}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  selectedArea === spot.area
                    ? "bg-gray border-pink"
                    : "bg-gray-50 border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value={spot.area}
                  name="area"
                  className="mr-3"
                  checked={selectedArea === spot.area}
                  onChange={() => setSelectedArea(spot.area)}
                />
                <span className="text-gray-700">{spot.area}</span>
              </label>
            ))}
        </div>
      </div>

      <div>
        <ButtonReserveCam
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleReservation={handleReservation}
          selectedArea={selectedArea}
          className="w-full py-2 px-4 text-offwhite font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink"
        >
          <h4>Reserve spot</h4>
        </ButtonReserveCam>
        {message && <p className="mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default Camping;
