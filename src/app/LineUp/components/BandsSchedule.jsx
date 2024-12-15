import Link from "next/link";

const BandsSchedule = ({ day, bands }) => {
  return (
    <div className="flex flex-col place-content-center">
      <h3 className="text-lg">{day}</h3>

      <ul>
        {bands.map((band, index) => {
          const bandName = band.act.toLowerCase().replace(/\s+/g, "-"); // URL-venligt format

          return (
            <Link href={`/Artist/${bandName}`}>
              <li
                key={bandName}
                className={index < 3 ? "font-bold" : "w-800px flex"}
              >
                {band.act}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default BandsSchedule;
