import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ArtistCard from "./components/ArtistCard";

const Artist = async ({ params }) => {
  const { slug } = await params;
  const response = await fetch(
    `https://kindly-elegant-fork.glitch.me/bands/${slug} `
  );

  const band = await response.json();

  return (
    <>
      <div className="m-8">
        <Link href="/LineUp" className="flex gap-4 place-items-center">
          <FaArrowLeft />
          <h5> Back to Lineup</h5>
        </Link>
        <ArtistCard band={band} />;
      </div>
    </>
  );
};

export default Artist;
