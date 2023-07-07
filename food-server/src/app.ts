import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();
import { connectDB } from "@/config";
connectDB();

const PORT = process.env.PORT || 9999;

app.use(express.json());

import { authenticate } from "@/middlewares";

// auth route
import { authRoutes } from "@/routes";
app.use("/api/auth", authRoutes);

// supplier routes
import { foodRoutes } from "@/routes";
app.use("/api/food", authenticate, foodRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
