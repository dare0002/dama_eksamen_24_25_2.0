const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function apiFetch(url, options = {}) {
  try {
    const response = await fetch(url, options);
    console.log("Raw response:", response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.message || "Unknown error"}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error during fetch:", error);
    return { error: error.message };
  }
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
