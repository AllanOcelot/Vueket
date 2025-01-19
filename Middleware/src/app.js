import express from "express";
import gamesRoutes from "./routes/games.js";
import cors from "cors"

const app = express();

app.use(cors)

// Middleware
app.use(express.json());

// Routes
app.use("/games", gamesRoutes);

export default app;