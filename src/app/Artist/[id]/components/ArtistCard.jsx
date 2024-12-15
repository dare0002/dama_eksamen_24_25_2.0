import Image from "next/image";

const ArtistCard = () => {
  return (
    <section className="grid grid-cols-6 border border-solid mx-20">
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <h2>naaavn</h2>
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

export default ArtistCard;
