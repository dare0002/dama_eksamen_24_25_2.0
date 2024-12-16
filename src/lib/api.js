const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL_newsletter;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_newsletter;

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

export async function getDataById(id) {
  return apiFetch(`${endpoint}?id=eq.${id}`, {
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
