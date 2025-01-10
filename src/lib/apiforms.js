import axios from "axios";

const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL_bookingform;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_bookingform;

async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);

  return response.json();
}

export async function getData() {
  return apiFetch(`${endpoint}?order=id.desc`, {
    method: "GET",
    headers: {
      apikey: supabaseKey,
    },
  });
}

export async function postData(data) {
  return apiFetch(endpoint, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(data),
  });
}

// CAMPING med Axios

export async function getAvailableSpots() {
  try {
    const response = await axios.get("http://localhost:8080/available-spots");
    const data = response.data;

    const spots = Object.keys(data).map((area) => ({
      area: data[area].area,
      spots: data[area].spots,
      available: data[area].available,
    }));

    return spots;
  } catch (error) {
    console.error("Failed to fetch available spots", error.message);
    throw new Error("Failed to fetch available spots");
  }
}

export async function reserveSpot(area, amount) {
  try {
    const response = await axios.put("http://localhost:8080/reserve-spot", {
      area,
      amount,
    });

    if (response.status !== 200) {
      throw new Error("Failed to reserve spot");
    }

    return response.data.id;
  } catch (error) {
    console.error("Error reserving spot:", error.message);
    throw new Error("Failed to reserve spot");
  }
}

export async function fulfillReservation(id) {
  try {
    const response = await axios.post(
      "http://localhost:8080/fullfill-reservation",
      id,
      {}
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fulfill reservation", error.message);
    throw new Error("Failed to fulfill reservation");
  }
}