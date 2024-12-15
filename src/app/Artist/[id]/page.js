//"use client";
import ArtistCard from "./components/ArtistCard";

//import { useEffect, useState } from "react";
//import { useRouter } from "next/router";
import Image from "next/image";

const Artist = async ({ params }) => {
  const id = (await params).id;
  const response = await fetch(`http://localhost:8080/schedule/${id}`);
  const band = await response.json();

  console.log("bands", band.act);
  // const router = useRouter();
  // const { slug } = router.query;

  // useEffect(() => {
  //   if (!slug) return;

  // const fetchBand = async () => {
  //   const response = await fetch(`http://localhost:8080/bands/${id}`);
  //   const data = await response.json();
  //   setBand(data);
  // };

  // fetchBand();

  return (
    <section className="grid grid-cols-6 border border-solid mx-20">
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <h2>navn</h2>
      </div>
      <div className="col-start-3 col-span-3 row-start-1 row-span-3 border border-solid border-offwhite">
        <Image src="/image8.png" width={400} height={400} alt="led zeppelin" />
      </div>
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <p>biooo</p>
      </div>
      <div className="row-start-4 border border-solid border-offwhite">
        <h3>Members.</h3>
        <h4>
          Jimmy Page <br />
          Robert Plant
        </h4>
        <h4>
          John Bonham <br />
          John Paul Jones
        </h4>
      </div>
      <div className="col-start-3 col-span-1 border border-solid border-offwhite">
        <h4>DATE.</h4>
      </div>
      <div className="border border-solid">
        <h4>TUESDAY 05 JUNE 2025</h4>
      </div>
      <div className="col-start-3 col-span-1 border border-solid border-offwhite">
        <h4>STAGE.</h4>
      </div>
      <div className="border border-solid border-offwhite">
        <h4>ANAHEIM</h4>
      </div>
      <div className="border border-solid col-start-1 border-offwhite">
        <h4>GENRE.</h4>
      </div>
      <div className="col-start-2 col-span-2 border border-solid border-offwhite">
        <h4>ROCK</h4>
      </div>
      <div className="bg-orange col-start-3 col-span-2 row-start-6 row-span-2 border border-solid border-offwhite">
        <button>BUY TICKETS.</button>
      </div>
    </section>
  );
};
export default Artist;
