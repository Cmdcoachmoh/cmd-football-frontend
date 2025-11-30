import api from "../../lib/api";

// DTO types (optional)
export interface PlayerDTO {
  id: string;
  name: string;
  age: number;
  position: string;
  level: number;
  milestones: string[];
}

// Fetch all players
export const getAllPlayers = async (): Promise<PlayerDTO[]> => {
  const response = await api.get("/players");
  return response.data;
};

// Fetch single player by ID
export const getPlayerById = async (id: string): Promise<PlayerDTO> => {
  const response = await api.get(`/players/${id}`);
  return response.data;
};

// Create a new player
export const createPlayer = async (data: Partial<PlayerDTO>): Promise<PlayerDTO> => {
  const response = await api.post("/players", data);
  return response.data;
};

// Update player
export const updatePlayer = async (id: string, data: Partial<PlayerDTO>): Promise<PlayerDTO> => {
  const response = await api.put(`/players/${id}`, data);
  return response.data;
};

// Delete player
export const deletePlayer = async (id: string): Promise<void> => {
  await api.delete(`/players/${id}`);
};
