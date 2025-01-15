export const fetchSchedule = async () => {
  const response = await fetch(
    "https://kindly-elegant-fork.glitch.me/schedule"
  );
  return await response.json();
};

export const fetchBands = async () => {
  const response = await fetch("https://kindly-elegant-fork.glitch.me/bands");

  return await response.json();
};
