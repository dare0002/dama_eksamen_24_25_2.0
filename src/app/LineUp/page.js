import SceneSchedule from "./components/SceneSchedule";

const Lineup = async () => {
  const response = await fetch(
    "https://kindly-elegant-fork.glitch.me/schedule"
  );
  const data = await response.json();

  const getScheduleForAllDays = (sceneData) => {
    const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    return daysOfWeek.map((day) => {
      const bands =
        sceneData?.[day]?.filter((band) => band.act !== "break") || [];
      return { day, bands };
    });
  };

  const midgardSchedule = getScheduleForAllDays(data.Midgard);
  const vanaheimSchedule = getScheduleForAllDays(data.Vanaheim);
  const jotunheimSchedule = getScheduleForAllDays(data.Jotunheim);

  return (
    <div className="flex flex-col place-content-center p-8 w-fit">
      <h2 className="text-3xl font-bold mb-4 sm:px-12 md:px-32 lg:px-72 w-fit">
        Festival Lineup.
      </h2>

      <div className=" flex flex-col gap-y-6 ">
        <div className="px-7 sm:px-12 md:px-24 lg:px-48 ">
          <SceneSchedule sceneSchedule={midgardSchedule} scene="Midgard" />
        </div>

        <div className="px-7 sm:px-12 md:px-24 lg:px-48 ">
          <SceneSchedule sceneSchedule={vanaheimSchedule} scene="Vanaheim" />
        </div>

        <div className="px-7 sm:px-12 md:px-24 lg:px-48 ">
          <SceneSchedule sceneSchedule={jotunheimSchedule} scene="Jotunheim" />
        </div>
      </div>
    </div>
  );
};

export default Lineup;
