// const Artist = async ({ params }) => {
//   const { slug } = await params;

//   try {
//     const response = await fetch(`http://localhost:8080/bands/${slug}`);

//     if (!response.ok) {
//       console.error(`HTTP error! Status: ${response.status}`);
//       return <div>Error: Band not found or server error.</div>;
//     }

//     const rawText = await response.text(); // Fetch raw text
//     console.log("Raw API Response:", rawText); // Debug response

//     if (!rawText) {
//       throw new Error("Empty response from server.");
//     }

//     const band = JSON.parse(rawText); // Parse JSON safely
//     return <ArtistCard bands={[band]} />;
//   } catch (error) {
//     console.error("Error during fetch:", error.message);
//     return <div>Error: Failed to load artist data.</div>;
//   }
// };

// export default Artist;
import ArtistCard from "./components/ArtistCard";

const Artist = async ({ params }) => {
  const slug = await params;
  const response = await fetch(`http://localhost:8080/bands/${slug} `);

  const band = response.json();

  return <ArtistCard band={band} />;
};
export default Artist;
