const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL_bookingform;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_bookingform;

async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);
  // if (!response.ok) {
  //   const errorData = await response.json();
  //   throw new Error(`API error: ${errorData.message || "Unknown error"}`);
  // }
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

export async function addData(data) {
  console.log("Data sent to Supabase:", data);
  return apiFetch(endpoint, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      "Content-Type": "application/json",
      Prefer: "return=presentation",
    },
    body: JSON.stringify(data),
  });
}


// FORMSSSSSSSS
// DANIIIII CAMPING

export async function getAvailableSpots() {
  const response = await fetch("http://localhost:8080/available-spots");
  const data = await response.json();

  const spots = Object.keys(data).map((area) => ({
    area, // Nyckeln (området)
    spots: data[area].spots, // Totala platser
    available: data[area].available, // Tillgängliga platser
  }));

  return spots; // Returnerar en array av områden med tillhörande data
}


// export async function getAvailableSpots () {
//   const response = await fetch ("http://localhost:8080/available-spots");
//   const data = await response.json();

//   const spots = [];

//   Object.keys(data).forEach((spots) => {
//     Object.keys(data[spots]).forEach((available) => {
//       spots.push(...data[spots][available]); 
//     });
//   });

//   return spots;
// }

// Reserve spot 

export async function reserveSpot (area, amount) {
  const response = await fetch("http://localhost:8080/reserve-spot", {
    method: "PUT", 
    headers: {
      "Content-Type" : "application/json", 
    }, 
    body: JSON.stringify({area, amount}),
  });

  if (!response.ok) {
    throw new Error("Failed to reserve spot");
  }

  // Returnerar ID för den specifika bokningen
  const data = await response.json();
  return data.id;
}

export async function fulfillReservation(id) {
  const response = await fetch("http://localhost:8080/fullfill-reservation", {
    method: "POST", 
    headers: {
      "Content-Type" : "application/json", 
    }, 
    body: JSON.stringify({id}),
  });

  if (!response.ok) {
    throw new Error("Failed to fulfill reservation");
  }

  return await response.json()
}








