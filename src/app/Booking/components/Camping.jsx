"use client";

import { useState, useEffect } from "react";
import { getAvailableSpots, reserveSpot, fulfillReservation } from "@/lib/api";
import Button from "@/components/Button";


const Camping = () => {
    const [campingData, setCampingData] = useState([]);
    const [selectedArea, setSelectedArea] = useState ("");
    // const [amount, setAmount] = useState (1); 
    const [reservationId, setReservationId] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchCampingData = async () => {
            getAvailableSpots()
            .then((spots) => setCampingData(spots))
            .catch((error) => {
                console.error("Error can not fetch camping data", error);
                setMessage("Failed to fetch camping spots");
            });
        };

        fetchCampingData();
    }, []);

    const handleReservation = () => {
        if (!selectedArea) {
            setMessage("Please select an area");
            return;
        }

        reserveSpot(selectedArea,1)
        .then((id) => {
            setReservationId(id);
            setMessage(`Reservation successful! Booking reference: ${id}`);
        })
        .catch((error) => {
            console.error("Error reserving spot;", error);
            setMessage("Failed to reserve spots. Please try again");
        });
    };

    const handleFulfill = () => {
        if(!reservationId) {
            setMessage("No reservation to fulfill");
            return;
        }

        fulfillReservation(reservationId)
        .then(() => {
            setMessage("Reservation confirmed");
            setReservationId("");
        })
        .catch((error) => {
            console.error("Error fulfulling reservation:", error);
            setMessage("Failed to fulfill reservation. Please try again");
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-offwhite rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6"> Camping Spots</h3>

            <ul className="mb-6 space-y-2">
                {campingData.length > 0 ? (
                    campingData.map((spot, index) => (
                        <li 
                        key={index}
                        className="p-4 border rounded-lg bg-gray-50 text-gray-700 flex flex-col"
                        >
                            <strong className="text-lg font-medium text-gray-800">
                                Area: {spot.area}
                            </strong>
                            <span>Total Spots: {spot.spots}</span>
                            <span>Available Spots: {spot.available} </span>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No camping spots Available</li>
                )}
            </ul>
            <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Select Area</h4>
                <div className="space-y-2">
                    {campingData.map((spot, index) => (
                        <label

                        key={index}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                            selectedArea === spot.area
                            ?"bg-blue-100 border-blue-500"
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
                <Button
                onClick= {handleReservation}
                className="w-full py-2 px-4 bg-blue-500 text-offwhite font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <h4>Reserve spot</h4>
                </Button>
                {message && <p className="mt-4 text-red-600">{message}</p>}
            </div>

            {reservationId && (
             <div className="mt-6">
                <button
                onClick={handleFulfill}
                className="w-full py-2 px-4 bg-green-500 text-offwhite font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    <h4>Fulfill reservation</h4>
                </button>
             </div>
            )}
        </div>
    ); 
};


//     const handleAreaSelect = (area) => {
//         setSelectedArea(area === selectedArea ? null : area);
//     };

//     return (
//         <section className="gap-4">
//             <h3 className="text-2xl"> Choose a camping area</h3>
//             <ul className="gap-4">
//                 {campingData.map((area) => (
//                     <li
//                     key={area.area}
//                     className={`p-4 border rounded-lg cursor-pointer ${
//                         selectedArea === area.area ? "bg-green-200" : "bg-gray-50"
//                         }`}
//                         onClick={() => handleAreaSelect(area.area)}
//                     >
//                         <div className="flex justify-between items-center">
//                             <span className="text-lg">{area.area}</span>
//                             <span className="text-sm">{area.available} Available spots</span>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             {selectedArea && (
//                 <p>You have selected:{selectedArea}</p>
//             )}
//         </section>
//       );
// };
 
export default Camping;

// Visa campingområden baserat på JSON data
// Låta brugeren välja ett område (men bara ett åt gången)
// Visa information om antalet available spots