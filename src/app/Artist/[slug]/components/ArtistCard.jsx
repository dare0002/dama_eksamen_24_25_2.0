import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const ArtistCard = ({ band }) => {
  return (
    <section className="lg:grid grid-cols-4 border border-solid md:mx-20 my-12">
      <div className="col-start-1 col-span-2 row-span-1 border border-solid border-offwhite flex place-content-center place-items-center py-4">
        <h2 className="text-2xl">{band.name}</h2>
      </div>
      <div className="col-start-3 col-span-2 row-span-3 border border-solid border-offwhite flex place-content-center place-items-center py-8 px-8">
        <Image
          src={
            band.logo.startsWith("https://")
              ? band.logo
              : `https://kindly-elegant-fork.glitch.me/logos/${band.logo}`
          }
          width={400}
          height={400}
          alt={band.name}
        />
      </div>
      <div className="col-start-1 col-span-2 row-start-2 row-span-2 border border-solid border-offwhite py-8 px-4 flex place-content-center">
        <p className="max-w-96 text-base">{band.bio}</p>
      </div>
      <div className="row-start-4 col-span-2 border border-solid border-offwhite pt-4">
        <h3 className="text-lg  px-8">Members.</h3>
        <div className="grid py-4 px-8 grid-cols-2">
          {band.members.map((member, i) => (
            <h5 key={i}>{member}</h5>
          ))}
        </div>
      </div>
      {/* <div className="col-start-3 col-span-1 border border-solid border-offwhite">
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
      </div>*/}
      <div className="flex w-full md:grid grid-cols-2 col-start-1 col-span-2 row-start-5 ">
        <div className="border border-solid  border-offwhite flex place-items-center w-full">
          <h4 className="text-lg py-1 px-8 ">GENRE.</h4>
        </div>
        <div className="  border border-solid border-offwhite w-full">
          <h4 className="capitalize text-lg py-1 px-8">{band.genre}</h4>
        </div>
      </div>
      <div className="col-start-3 col-span-2 row-start-4 row-span-2 border border-solid border-offwhite">
        <Link href="/Tickets">
          <button className="py-2 px-6 w-full h-full bg-orange/0 transition-colors hover:bg-orange">
            <span className="text-xl font-semibold">TICKETS.</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ArtistCard;
