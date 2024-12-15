"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const BandsSchedule = ({ getBands }) => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const fetchBands = async () => {
      const data = await getBands();
      const bandsWithId = data.map((band) => ({
        ...band,
        id: crypto.randomUUID(),
      }));
      setBands(bandsWithId);
    };

    fetchBands();
  }, []);

  return (
    <div>
      {bands.length === 0 ? (
        <p>No bands available</p>
      ) : (
        bands.map((band) => (
          <div key={band.id}>
            <Link href={`/Artist/${band.id}`}>
              <h3>{band.act}</h3>
              <p>
                {band.start} - {band.end}
              </p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BandsSchedule;
