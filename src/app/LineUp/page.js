"use client";

import { useEffect, useState } from "react";
import { getBands } from "@/lib/api";
import Link from "next/link";

const LineUp = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const fetchBands = async () => {
      const data = await getBands();
      const bandsWithId = data.map((band) => ({
        ...band,
        id: crypto.randomUUID(),
        slug: band.name.toLowerCase().replace(/ /g, "-"),
      }));
      setBands(bandsWithId);
    };

    fetchBands();
  }, []);

  return (
    <div>
      {bands.map((band) => (
        <div key={band.id}>
          {/* Bruger slug som del af URL'en */}
          <Link href={`/artist/${band.slug}`}>
            <h3>{band.act}</h3>
            <p>
              {band.start} - {band.end}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LineUp;
