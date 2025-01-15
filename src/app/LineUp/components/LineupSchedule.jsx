import SceneSchedule from "./SceneSchedule";

const Lineupschedule = ({ scheduleData, selectedDay }) => {
  const getScheduleForSelectedDay = (sceneData) => {
    const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const filteredDays = selectedDay === "All" ? daysOfWeek : [selectedDay];

    return filteredDays.map((day) => {
      const bands =
        sceneData?.[day]?.filter((band) => band.act !== "break") || [];
      return { day, bands };
    });
  };

  const midgardSchedule = getScheduleForSelectedDay(scheduleData.Midgard);
  const vanaheimSchedule = getScheduleForSelectedDay(scheduleData.Vanaheim);
  const jotunheimSchedule = getScheduleForSelectedDay(scheduleData.Jotunheim);

  return (
    <div className="flex flex-col gap-y-6 lg:w-3/4 mt-12 mb-24">
      <SceneSchedule sceneSchedule={midgardSchedule} scene="Midgard" />
      <SceneSchedule sceneSchedule={vanaheimSchedule} scene="Vanaheim" />
      <SceneSchedule sceneSchedule={jotunheimSchedule} scene="Jotunheim" />
    </div>
  );
};

export default Lineupschedule;
