const Artist = async ({ params }) => {
  const { slug } = await params;
  const response = await fetch(`http://localhost:8080/bands${slug}`);
  const band = await response.json();

  return <ArtistCard band={band} />;
};
export default Artist;
