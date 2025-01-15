import BandsSchedule from "./BandsSchedule";

const SceneSchedule = ({ sceneSchedule, scene }) => {
  return (
    <>
      <div className="px-7 sm: md: lg: flex flex-col">
        <h3 className="text-2xl font-semibold transform uppercase text-pink md:mb-6 mb-4">{scene}</h3>
        {sceneSchedule.map((schedule, index) => (
          <div key={index} className=" border border-offwhite flex ">
            <div className="px-3 pr-16 w-16 md:pr-24 md:w-20 pt-3">
              <h4 className="text-lg font-medium transform uppercase">
                {schedule.day}
              </h4>
            </div>
            <BandsSchedule className="" schedule={schedule.bands} />
          </div>
        ))}
      </div>
    </>
  );
};
export default SceneSchedule;
