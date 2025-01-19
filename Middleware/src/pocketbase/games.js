import { pb }  from "./client.js";

// Fetch all games
export const listGames = async () => {
  try {
    return await pb.collection("games").getFullList();
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

// Fetch a game by ID
export const getGameById = async (id) => {
  try {
    return await pb.collection("games").getOne(id);
  } catch (error) {
    console.error(`Error fetching game with ID ${id}:`, error);
    throw error;
  }
};
