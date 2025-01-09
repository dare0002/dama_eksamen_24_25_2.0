"use server";
import Lineupschedule from "./components/LineupSchedule";

const Lineup = async () => {
  const response = await fetch(
    "https://kindly-elegant-fork.glitch.me/schedule"
  );
  const scheduleData = await response.json();

  return (
    <div className="flex flex-col place-content-center place-items-center  ">
      <h2 className="text-3xl font-bold mb-4 sm: md: lg: ">Festival Lineup</h2>

      <Lineupschedule scheduleData={scheduleData} />
    </div>
  );
};

export default Lineup;

//  <h2 className="text-3xl font-bold mb-4 sm:px-12 md:px-32 lg:px-72 w-fit ">
