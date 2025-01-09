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

// import SceneSchedule from "./SceneSchedule";

// const Lineupschedule = async () => {
//   const response = await fetch(
//     "https://kindly-elegant-fork.glitch.me/schedule"
//   );
//   const scheduleData = await response.json();

//   const getScheduleForAllDays = (sceneData) => {
//     const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//     return daysOfWeek.map((day) => {
//       const bands =
//         sceneData?.[day]?.filter((band) => band.act !== "break") || [];
//       return { day, bands };
//     });
//   };

//   const midgardSchedule = getScheduleForAllDays(scheduleData.Midgard);
//   const vanaheimSchedule = getScheduleForAllDays(scheduleData.Vanaheim);
//   const jotunheimSchedule = getScheduleForAllDays(scheduleData.Jotunheim);

//   return (
//     <div className="flex flex-col gap-y-6">
//       <SceneSchedule sceneSchedule={midgardSchedule} scene="Midgard" />
//       <SceneSchedule sceneSchedule={vanaheimSchedule} scene="Vanaheim" />
//       <SceneSchedule sceneSchedule={jotunheimSchedule} scene="Jotunheim" />
//     </div>
//   );
// };
// export default Lineupschedule;
