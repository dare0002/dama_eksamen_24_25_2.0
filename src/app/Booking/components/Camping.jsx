"use client";

import { useState, useEffect } from "react";


const Camping = () => {
    const [campingData, setCampingData] = useState([]);
    const [selectedArea, setSelectedArea] = useState (null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/available-spots").then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch camping data, try again");
            }
            return response.json();
        })
        .then((data) => {
            setCampingData(data);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
        })
        
    }
)





    const handleAreaSelect = (area) => {
        setSelectedArea(area === selectedArea ? null : area);
    };

    return (
        <section className="gap-4">
            <h3 className="text-2xl"> Choose a camping area</h3>
            <ul className="gap-4">
                {campingData.map((area) => (
                    <li
                    key={area.area}
                    className={`p-4 border rounded-lg cursor-pointer ${
                        selectedArea === area.area ? "bg-green-200" : "bg-gray-50"
                        }`}
                        onClick={() => handleAreaSelect(area.area)}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-lg">{area.area}</span>
                            <span className="text-sm">{area.available} Available spots</span>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedArea && (
                <p>You have selected:{selectedArea}</p>
            )}
        </section>
      );
};
 
export default Camping;

// Visa campingområden baserat på JSON data
// Låta brugeren välja ett område (men bara ett åt gången)
// Visa information om antalet available spots