import Lineupschedulenew from "./components/LineupSchedulenew";

const Lineup = () => {
  return (
    <>
      <div className="flex flex-col place-content-center place-items-center">
        <h2 className="text-3xl font-bold mb-4">Festival Lineup</h2>
      </div>
      <Lineupschedulenew />
    </>
  );
};

export default Lineup;
