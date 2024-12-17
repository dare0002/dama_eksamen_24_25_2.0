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