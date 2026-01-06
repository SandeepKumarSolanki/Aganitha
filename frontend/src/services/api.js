const API = import.meta.env.VITE_API_URL;

export async function createPaste(payload) {
  const res = await fetch(`${API}/api/pastes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function getPaste(id) {
  const res = await fetch(`${API}/api/pastes/${id}`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
}

export async function checkHealth() {
  const res = await fetch(`${API}/api/healthz`);
  if (!res.ok) throw new Error("Health check failed");
  return res.json();
}

