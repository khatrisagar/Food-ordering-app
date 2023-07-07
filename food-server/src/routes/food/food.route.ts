import { Router } from "express";

const router = Router();

import { addFoodItems } from "@/controllers/food/add-food.controller";
import {
  getAllFoodItems,
  getItemsWithCategory,
} from "@/controllers/food/get-food.controler";

router.get("/items", getAllFoodItems);
router.get("/category", getItemsWithCategory);
router.post("/items", addFoodItems);

export { router as foodRoutes };
