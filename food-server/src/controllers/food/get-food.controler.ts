import { Request, Response } from "express";
import { FoodItem } from "@/models";
import { getFoodItemsDb, getItemsWithCategoryDb } from "@/services";
import { APIResponse } from "@/utils";
import { httpStatus } from "@/enums";

export const getAllFoodItems = async (req: Request, res: Response) => {
  try {
    const items = await getFoodItemsDb(req.query as object);
    return new APIResponse(
      res,
      httpStatus.OK,
      items.foodItems,
      items.pagination
    ).success();
  } catch (error) {
    return new APIResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      error
    ).failed();
  }
};

export const getItemsWithCategory = async (req: Request, res: Response) => {
  try {
    const items = await getItemsWithCategoryDb();
    return new APIResponse(res, httpStatus.OK, {
      data: items,
    }).success();
  } catch (error) {
    return new APIResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      error
    ).failed();
  }
};
