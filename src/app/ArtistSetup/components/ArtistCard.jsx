import Image from "next/image";

const ArtistCard = () => {
  return (
    <section className="grid grid-cols-6 border border-solid mx-20">
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <h2>Led Zeppelin</h2>
      </div>
      <div className="col-start-3 col-span-3 row-start-1 row-span-3 border border-solid border-offwhite">
        <Image src="/image8.png" width={400} height={400} alt="led zeppelin" />
      </div>
      <div className="col-start-1 col-span-2 border border-solid border-offwhite">
        <p>
          Led Zeppelin were an English rock band formed in London in 1968. The
          group consisted of Robert Plant (Vocal), Jimmy Page (Guitar), John
          Paul Jones (Bass, Keyboard) and John Bonham (Drums). The band's heavy,
          guitar-driven sound, rooted in blues and psychedelia on their early
          albums, has earned them recognition as one of the progenitors of heavy
          metal. They achieved significant commercial success with albums such
          as Led Zeppelin (1969), Led Zeppelin II (1969), Led Zeppelin III
          (1970), Led Zeppelin IV (1971), Houses of the Holy (1973), and
          Physical Graffiti (1975). Their song ‘Stairway to Heaven’ is among the
          most popular and influential rock music of all time.Led Zeppelin are
          widely considered one of the most successful, innovative, and
          influential rock groups in history.They are one of the best - selling
          music artists in the history of audio recording;various sources
          estimate the group 's record sales at 200 to 300 million units
          worldwide. With RIAA-certified sales of 111.5 million units, they are
          the second-best-selling band in the United States. They were inducted
          into the Rock Hall of Fame in 1995.
        </p>
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
