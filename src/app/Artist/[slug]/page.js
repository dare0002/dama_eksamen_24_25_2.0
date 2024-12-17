import ArtistCard from "./components/ArtistCard";

const Artist = async ({ params }) => {
  const slug = await params;
  const response = await fetch(`http://localhost:8080/bands/${slug} `);

  const band = response.json();

  return <ArtistCard band={band} />;
};
export default Artist;
