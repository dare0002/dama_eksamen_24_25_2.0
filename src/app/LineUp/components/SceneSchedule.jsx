// import Link from "next/link";

import BandsSchedule from "./BandsSchedule";

const SceneSchedule = ({ sceneSchedule, scene }) => {
  return (
    <div className="px-7 sm:px-12 md:px-24 lg:px-40 flex flex-col gap-y-4 ">
      <h3 className="text-xl font-semibold transform capitalize">{scene}</h3>
      {sceneSchedule.map((schedule, index) => (
        <div key={index} className=" ">
          <h4 className="text-lg font-medium transform capitalize">
            {schedule.day}
          </h4>
          <BandsSchedule schedule={schedule.bands} />
        </div>
      ))}
    </div>
  );
};
export default SceneSchedule;
