"use server";
import BandsSchedule from "./components/BandsSchedule";

export async function getBands() {
  const response = await fetch("http://localhost:8080/schedule");

  const data = await response.json();

  const bands = [];
  Object.keys(data).forEach((location) => {
    Object.keys(data[location]).forEach((day) => {
      bands.push(...data[location][day]);
    });
  });

  return bands;
}

const LineUp = () => {
  return (
    <div>
      <BandsSchedule getBands={getBands} />
    </div>
  );
};

export default LineUp;
