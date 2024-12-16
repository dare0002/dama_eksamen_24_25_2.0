import Link from "next/link";

const BandsSchedule = ({ schedule }) => {
  return (
    <ul className="flex flex-wrap gap-x-6 place-items-center place-content: center; ">
      {schedule.map((scene, index) => (
        <li
          key={scene.act}
          className={index < 3 ? "font-bold text-2xl " : "flex"}
        >
          <Link href={`/Artist/${scene.act}`}>{scene.act}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BandsSchedule;
