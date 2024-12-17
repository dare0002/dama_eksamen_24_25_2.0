import ArtistCard from "./components/ArtistCard";

const Artist = async () => {
  const response = await fetch(
    "https://kindly-elegant-fork.glitch.me/schedule"
  );
  const bands = await response.json();

  return <ArtistCard bands={bands} />;
};

export default Artist;
