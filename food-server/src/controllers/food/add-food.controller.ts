import { Request, Response } from "express";
import { addFoodItemsDb } from "@/services";

export const addFoodItems = async (req: Request, res: Response) => {
  try {
    const { name, image, price, details, category } = req.body;
    const supplier = (req as Request & { user: any }).user._id;
    const item = await addFoodItemsDb({
      name,
      image,
      price,
      details,
      category,
      supplier,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
};
