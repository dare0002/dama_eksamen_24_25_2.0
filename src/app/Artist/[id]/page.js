"use client";
import ArtistCard from "./components/ArtistCard";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Artist = () => {
  const [band, setBand] = useState(null);
  const router = useRouter();
  const { slug } = router.query; // Slug fra URL'en

  useEffect(() => {
    if (!slug) return; // Hvis slug ikke er tilgængelig, gør ikke API-kaldet

    const fetchBand = async () => {
      const response = await fetch(`http://localhost:8080/bands/${slug}`);
      const data = await response.json();
      setBand(data);
    };

    fetchBand();
  }, [slug]);

  if (!band) {
    return <div>Loading...</div>; // Loader hvis data ikke er hentet endnu
  }

  return (
    <section className="grid grid-cols-6 border border-solid mx-20">
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <h2>{band.name}</h2>
      </div>
      <div className="col-start-3 col-span-3 row-start-1 row-span-3 border border-solid border-offwhite">
        <Image src="/image8.png" width={400} height={400} alt={band.name} />
      </div>
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <p>{band.bio}</p>
      </div>
      <div className="row-start-4 border border-solid border-offwhite">
        <h3>Members.</h3>
        {band.members?.map((member, index) => (
          <h4 key={index}>{member.name}</h4>
        ))}
      </div>
      <div className="col-start-3 col-span-1 border border-solid border-offwhite">
        <h4>DATE.</h4>
      </div>
      <div className="border border-solid">
        <h4>{band.date}</h4>
      </div>
      <div className="col-start-3 col-span-1 border border-solid border-offwhite">
        <h4>STAGE.</h4>
      </div>
      <div className="border border-solid border-offwhite">
        <h4>{band.stage}</h4>
      </div>
      <div className="border border-solid col-start-1 border-offwhite">
        <h4>GENRE.</h4>
      </div>
      <div className="col-start-2 col-span-2 border border-solid border-offwhite">
        <h4>{band.genre}</h4>
      </div>
      <div className="bg-orange col-start-3 col-span-2 row-start-6 row-span-2 border border-solid border-offwhite">
        <button>BUY TICKETS.</button>
      </div>
    </section>
  );
};

export default Artist;
