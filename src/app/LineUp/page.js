"use server";
import BandsSchedule from "./components/BandsSchedule";

async function getBands(day) {
  const response = await fetch("http://localhost:8080/schedule");
  const data = await response.json();

  const dayBands = [];

  // Gennemgå data og find bands for den ønskede dag
  Object.keys(data).forEach((location) => {
    if (data[location][day]) {
      const filteredBands = data[location][day].filter(
        (band) => band.act !== "break"
      );
      dayBands.push(...filteredBands);
    }
  });

  return dayBands;
}

// Komponent for Mandag
const MondaySchedule = async () => {
  const mondayBands = await getBands("mon");
  return <BandsSchedule day="Monday" bands={mondayBands} />;
};

// Komponent for Tirsdag
const TuesdaySchedule = async () => {
  const tuesdayBands = await getBands("tue");
  return <BandsSchedule day="Tuesday" bands={tuesdayBands} />;
};

// Komponent for Onsdag
const WednesdaySchedule = async () => {
  const wednesdayBands = await getBands("wed");
  return <BandsSchedule day="Wednesday" bands={wednesdayBands} />;
};

// Komponent for Torsdag
const ThursdaySchedule = async () => {
  const thursdayBands = await getBands("thu");
  return <BandsSchedule day="Thursday" bands={thursdayBands} />;
};
// Komponent for Fredag
const FridaySchedule = async () => {
  const fridayBands = await getBands("fri");
  return <BandsSchedule day="Friday" bands={fridayBands} />;
};
// Komponent for Lørdag
const SaturdaySchedule = async () => {
  const saturdayBands = await getBands("sat");
  return <BandsSchedule day="Saturday" bands={saturdayBands} />;
};
// Komponent for Søndag
const SundaySchedule = async () => {
  const sundayBands = await getBands("sun");
  return <BandsSchedule day="Sunday" bands={sundayBands} />;
};

const LineUp = () => {
  return (
    <div>
      <h2 className="text-2xl">PROGRAM.</h2>
      <MondaySchedule />
      <TuesdaySchedule />
      <WednesdaySchedule />
      <ThursdaySchedule />
      <FridaySchedule />
      <SaturdaySchedule />
      <SundaySchedule />
    </div>
  );
};

export default LineUp;
