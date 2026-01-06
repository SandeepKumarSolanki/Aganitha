import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.route.js";
import pasteRoutes from "./routes/paste.route.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Api is working"})
})
app.use("/api", healthRoutes);
app.use("/api", pasteRoutes);
