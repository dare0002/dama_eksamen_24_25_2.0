import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const ArtistCard = ({ band }) => {
  return (
    <section className="grid grid-cols-4 border border-solid mx-20 my-12">
      <div className="col-start-1 col-span-2 row-span-1 border border-solid border-offwhite">
        <h2>{band.name}</h2>
      </div>
      <div className="col-start-3 col-span-2  row-span-3 border border-solid border-offwhite">
        <Image
          src={
            band.logo.startsWith("https://")
              ? band.logo
              : `http://localhost:8080/logos/${band.logo}`
          }
          width={400}
          height={400}
          alt={band.name}
        />
      </div>
      <div className="col-start-1 col-span-2 row-start-2 row-span-2 border border-solid border-offwhite">
        <p>{band.bio}</p>
      </div>
      <div className="row-start-4 col-span-2 border border-solid border-offwhite">
        <h3>Members.</h3>
        <h4>
          {band.members.map((member, i) => (
            <span key={i}>{member}</span>
          ))}
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
      <div className="col-start-2  border border-solid border-offwhite">
        <h4>{band.genre}</h4>
      </div>
      <div className="col-start-3 col-span-2 row-start-6  border border-solid border-offwhite">
        <motion.a>
          <span>BUY TICKETS.</span>
        </motion.a>
        {/* <Link href="/Tickets">
          <motion.button className="border border-offwhite py-2 px-6 w-fit bg-orange/0 transition-colors hover:bg-orange">
            <span className="text-xl font-semibold">TICKETS</span>
          </motion.button>
        </Link> */}
      </div>
    </section>
  );
};

export default ArtistCard;
