export async function getPlayers() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const res = await fetch(`${apiUrl}/players`);
  if (!res.ok) throw new Error("Failed to fetch players");
  return res.json();
}
