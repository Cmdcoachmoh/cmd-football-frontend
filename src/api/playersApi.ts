const baseURL = import.meta.env.VITE_API_URL;

export interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  team: string;
}

export const fetchPlayers = async (): Promise<Player[]> => {
  const res = await fetch(`${baseURL}/api/players`);
  if (!res.ok) throw new Error("Failed to fetch players");
  return res.json();
};
