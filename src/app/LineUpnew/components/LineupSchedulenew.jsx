"use client";
import { fetchBands } from "@/lib/fetchData";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Lineupschedulenew = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const loadBands = async () => {
      const bandData = await fetchBands();
      setBands(bandData);
    };

    loadBands();
  }, []);

  if (bands.length === 0) {
    return <div>Loading bands...</div>;
  }

  return (
    <div className="flex">
      <ul className="flex flex-row flex-wrap gap-6 place-content-center">
        {bands.map((band, index) => (
          <Link className="min-h-32" key={index} href={`/Artist/${band.slug}`}>
            <li className="border p-3  ">
              <Image
                className=""
                src={
                  band.logo.startsWith("https://")
                    ? band.logo
                    : `https://kindly-elegant-fork.glitch.me/logos/${band.logo}`
                }
                width={400}
                height={400}
                alt={band.name}
              />
              <h3 className="">{band.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Lineupschedulenew;
