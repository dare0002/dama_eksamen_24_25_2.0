import Link from "next/link";
import { motion } from "motion/react";

const BandsSchedule = async ({ schedule }) => {
  const response = await fetch("https://kindly-elegant-fork.glitch.me/bands");
  const bands = await response.json();

  return (
    <ul className="flex flex-wrap gap-x-6 place-items-center place-content: center; ">
      {schedule.map((scene, index) => {
        // Find bandet i listen baseret på scene.act
        const band = bands.find((b) => b.name === scene.act);

        return (
          <li
            key={scene.act}
            className={index < 3 ? "font-bold text-2xl " : "flex"}
          >
            <Link href={`/Artist/${band ? band.slug : ""}`}>{scene.act}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BandsSchedule;
