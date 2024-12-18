// import Image from "next/image";

// const ArtistCard = ({ bands }) => {
//   return (
//     <div>
//       {bands.map((band, index) => (
//         <section
//           key={index}
//           className="grid grid-cols-6 border border-solid mx-20"
//         >
//           <div className="col-start-1 col-span-2 border border-solid border-offwhite">
//             <h2>{band.name}</h2>
//           </div>
//           <div className="col-start-3 col-span-3 row-start-1 row-span-3 border border-solid border-offwhite">
//             <Image src={""} width={400} height={400} alt={band.name} />
//           </div>
//           <div className="col-start-1 col-span-2 border border-solid border-offwhite">
//             <p>{band.bio}</p>
//           </div>
//           <div className="row-start-4 border border-solid border-offwhite">
//             <h3>Members.</h3>
//             <h4>
//               {band.members.map((member, i) => (
//                 <span key={i}>{member}</span>
//               ))}
//             </h4>
//           </div>
//           <div className="col-start-3 col-span-1 border border-solid border-offwhite">
//             <h4>DATE.</h4>
//           </div>
//           <div className="border border-solid">
//             <h4>{band.date}</h4>
//           </div>
//           <div className="col-start-3 col-span-1 border border-solid border-offwhite">
//             <h4>STAGE.</h4>
//           </div>
//           <div className="border border-solid border-offwhite">
//             <h4>{band.stage}</h4>
//           </div>
//           <div className="border border-solid col-start-1 border-offwhite">
//             <h4>GENRE.</h4>
//           </div>
//           <div className="col-start-2 col-span-2 border border-solid border-offwhite">
//             <h4>{band.genre}</h4>
//           </div>
//           <div className="bg-orange col-start-3 col-span-2 row-start-6 row-span-2 border border-solid border-offwhite">
//             <button>BUY TICKETS.</button>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default ArtistCard;
