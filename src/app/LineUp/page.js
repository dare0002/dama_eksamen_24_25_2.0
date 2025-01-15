"use client";
import { useState, useEffect } from "react";
import FiltreringLineup from "./components/FiltreringLineup";
import Lineupschedule from "./components/LineupSchedule";
import { fetchSchedule } from "@/lib/fetchData";

const Lineup = () => {
  const [scheduleData, setScheduleData] = useState(null);
  const [selectedDay, setSelectedDay] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSchedule = async () => {
      const data = await fetchSchedule();
      setScheduleData(data);
      setLoading(false);
    };

    loadSchedule();
  }, []);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  if (loading) {
    return (
      <div className="text-center text-lg my-6">
        Loading Line Up Schedule...
      </div>
    );
  }

  return (
    <div className="flex flex-col place-content-center place-items-center">
      <h2 className="text-3xl font-bold mb-4">Festival Schedule</h2>
      <FiltreringLineup onDayChange={handleDayChange} />
      <Lineupschedule scheduleData={scheduleData} selectedDay={selectedDay} />
    </div>
  );
};

export default Lineup;
