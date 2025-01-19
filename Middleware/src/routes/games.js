import express from "express"
import { listGames, getGameById } from "../pocketbase/games.js"

const router = express.Router();

// Route to list all games
router.get("/games", async (req, res) => {
  try {
    const games = await listGames();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

// Route to get a game by ID
router.get("/:id", async (req, res) => {
  try {
    const game = await getGameById(req.params.id);
    res.json(game);
  } catch (error) {
    res.status(404).json({ error: "Game not found" });
  }
});

export default router;