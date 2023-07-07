import { Router } from "express";

const router = Router();

import {
  addFoodItems,
  updateFoodItems,
  deleteFoodItems,
} from "@/controllers/food/add-update-delete-food.controller";
import {
  getAllFoodItems,
  getItemsByCategory,
  getSingleItem,
} from "@/controllers/food/get-food.controler";

router.get("/items", getAllFoodItems);
router.get("/items/:itemId", getSingleItem);
router.get("/category/items/:categoryId", getItemsByCategory);
router.post("/items", addFoodItems);
router.patch("/items/:itemId", updateFoodItems);
router.delete("/items/:itemId", deleteFoodItems);

export { router as foodRoutes };
