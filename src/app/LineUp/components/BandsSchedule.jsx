import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBands } from "@/utils/fetchData";
import { motion } from "motion/react";

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
           <motion.li
           key={scene.act} className={index < 3 ? "font-bold text-2xl hover:text-pink" : ""}
          initial={{ scale: 1}}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }} >
            <Link href={`/Artist/${band ? band.slug : ""}`}>{scene.act}</Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default BandsSchedule;
