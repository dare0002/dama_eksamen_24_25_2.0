const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`API error: ${errorData.message || "Unknown error"}`);
  }
  return await response.json();
}

export async function getBands() {
  const response = await fetch("http://localhost:8080/schedule");
  const data = await response.json();

  const bands = [];

  // Brug forEach til at gennemgå hver location og dag, og flad dataene ud
  Object.keys(data).forEach((location) => {
    Object.keys(data[location]).forEach((day) => {
      bands.push(...data[location][day]); // Tilføj alle bands fra denne dag til arrayet
    });
  });

  return bands;
}








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










export async function getData() {
  const data = await apiFetch(`${endpoint}?order=id.desc`, {
    method: "GET",
    headers: {
      apikey: supabaseKey,
    },
  });

  console.log("API response:", data); // Log dataen for at se, hvad der kommer tilbage

  if (data.error) {
    console.error("Fejl ved hentning af data:", data.error);
    return [];
  }

  // Fortsæt med at behandle dataen, hvis den er korrekt
  return data;
}

export async function addData(data) {
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

//

//    export async function getBands(){
//     return apiFetch
//    }

//    const headersList = {
//     "Accept": "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)"
//    }

//    const response = await fetch("http://localhost:8080/bands", {
//     method: "GET",
//     headers: headersList
//   });

//   const data = await response.json();
//   console.log(data);
