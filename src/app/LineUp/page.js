import SceneSchedule from "./components/SceneSchedule";

const Lineup = async () => {
  // const response = await fetch("https://localhost:8080/schedule");
  // const data = await response.json();

  const response = await fetch(
    "https://kindly-elegant-fork.glitch.me/schedule"
  );
  const data = await response.json();

  // Funktion til at hente bands for alle dage (mon, tue, wed, etc.)
  const getScheduleForAllDays = (sceneData) => {
    const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

    return daysOfWeek.map((day) => {
      const bands =
        sceneData?.[day]?.filter((band) => band.act !== "break") || [];
      return { day, bands }; // Returner et objekt med dag og tilhørende bands
    });
  };

  const midgardSchedule = getScheduleForAllDays(data.Midgard);
  const vanaheimSchedule = getScheduleForAllDays(data.Vanaheim);
  const jotunheimSchedule = getScheduleForAllDays(data.Jotunheim);

  return (
    <div className="flex flex-col place-content-center p-8">
      <h2 className="text-3xl font-bold mb-4 sm:px-12 md:px-24 lg:px-40">
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
