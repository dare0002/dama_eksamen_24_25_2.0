import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBands } from "@/lib/fetchData";

const BandsSchedule = ({ schedule }) => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const loadBands = async () => {
      try {
        const bandData = await fetchBands();
        setBands(bandData);
      } catch (error) {
        console.error("Error loading bands:", error);
      }
    };

    loadBands();
  }, []);

  if (bands.length === 0) {
    return <div>Loading bands...</div>;
  }

  return (
    <ul className="flex flex-wrap gap-x-6 place-items-center border p-3">
      {schedule.map((scene, index) => {
        const band = bands.find((b) => b.name === scene.act);

        return (
          <li key={scene.act} className={index < 3 ? "font-bold text-2xl" : ""}>
            <Link href={`/Artist/${band ? band.slug : ""}`}>{scene.act}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BandsSchedule;
