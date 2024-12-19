import axios from "axios";

const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL_bookingform;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_bookingform;

async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);

  return response.json();
}

export async function getData() {
  const data = await apiFetch(`${endpoint}?order=id.desc`, {
    method: "GET",
    headers: {
      apikey: supabaseKey,
    },
  });

  console.log("API response:", data); // Log dataen for at se, hvad der kommer tilbage

  // Fortsæt med at behandle dataen, hvis den er korrekt
  return data;
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

export async function getAvailableSpots () {
  try {
    const response = await axios.get("http://localhost:8080/available-spots");
    const data = response.data;

    const spots = Object.keys(data).map((area) => ({
      area: data[area].area, 
      spots: data[area].spots, 
      available: data[area].available,
    }));

    return spots;
  }
  catch (error) {
    console.error("Failed to fetch available spots", error.message)
    throw new Error ("Failed to fetch available spots");
  }
}

// Camping GET Available spots uden Axios 

// export async function getAvailableSpots() {
//   const response = await fetch("http://localhost:8080/available-spots");
//   const data = await response.json();

//   const spots = Object.keys(data).map((area) => ({
//     area: data[area].area, 
//     spots: data[area].spots, 
//     available: data[area].available,
//   }));

//   return spots;
// }



// Reservespot med Axios

export async function reserveSpot (area, amount) {
  try {
    const response = await axios.put("http://localhost:8080/reserve-spot", {
      area, 
      amount, 
    });

    if (response.status !== 200) {
      throw new Error ("Failed to reserve spot");
    }

      return response.data.id;
    } catch (error) {
    console.error("Error reserving spot:", error.message);
    throw new Error("Failed to reserve spot");
  }
}


// Reserve spot uden Axios 
// export async function reserveSpot (area, amount) {
//   const response = await fetch("http://localhost:8080/reserve-spot", {
//     method: "PUT", 
//     headers: {
//       "Content-Type" : "application/json", 
//     }, 
//     body: JSON.stringify({area, amount}),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to reserve spot");
//   }

//   // Returnerer ID 
//   const data = await response.json();
//   return data.id;
// }



export async function fulfillReservation(id) {
  try{
    const response = await axios.post("http://localhost:8080/fullfill-reservation",
      id, {
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fulfill reservation", error.message);
    throw new Error("Failed to fulfill reservation");
  }
}


// fulFillReservation med fetch, uden axios
// export async function fulfillReservation(id) {
//   const response = await fetch("http://localhost:8080/fullfill-reservation", {
//     method: "POST", 
//     headers: {
//       "Content-Type" : "application/json", 
//     }, 
//     body: JSON.stringify({id}),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fulfill reservation");
//   }

//   return await response.json()
// }








