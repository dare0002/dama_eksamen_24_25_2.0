import ArtistCard from "./components/ArtistCard";

const Artist = async () => {
  const response = await fetch("http://localhost:8080/bands");
  const bands = await response.json();

  return <ArtistCard bands={bands} />;
};

export default Artist;
