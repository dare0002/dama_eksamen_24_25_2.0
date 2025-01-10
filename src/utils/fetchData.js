export const fetchSchedule = async () => {
  const response = await fetch(
    "https://kindly-elegant-fork.glitch.me/schedule"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch schedule data");
  }
  return await response.json();
};

export const fetchBands = async () => {
  const response = await fetch("https://kindly-elegant-fork.glitch.me/bands");
  if (!response.ok) {
    throw new Error("Failed to fetch bands data");
  }
  return await response.json();
};
