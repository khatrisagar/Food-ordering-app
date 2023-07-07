import { Request, Response } from "express";
import { addFoodItemsDb, updateFoodItemsDb } from "@/services";
import { httpStatus, apiResponseMessages } from "@/enums";
import { APIResponse } from "@/utils";
import {
  deleteFoodItemsDb,
  getSingleFoodItemDb,
} from "@/services/food/food-item.service";
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

export const updateFoodItems = async (req: Request, res: Response) => {
  try {
    const { name, image, price, details, category } = req.body;
    const itemId: string = req.params.itemId;
    const item = await updateFoodItemsDb(itemId, {
      name,
      image,
      price,
      details,
      category,
    });
    return new APIResponse(res, httpStatus.OK, item).success();
  } catch (error) {}
  return new APIResponse(
    res,
    httpStatus.INTERNAL_SERVER_ERROR,
    apiResponseMessages.SOMETHING_WENT_WRONG
  ).failed();
};

export const deleteFoodItems = async (req: Request, res: Response) => {
  try {
    const itemId: string = req.params.itemId;
    const isItemExist = await getSingleFoodItemDb(itemId);
    if (isItemExist) {
      const item = await deleteFoodItemsDb(itemId);
      // used failed method of class for response to send message
      return new APIResponse(
        res,
        httpStatus.OK,
        apiResponseMessages.DELETED_SUCCESS
      ).successMessage();
    } else {
      return new APIResponse(
        res,
        httpStatus.RESOURCE_NOT_FOUND,
        apiResponseMessages.ITEM_NOT_FOUND
      ).failed();
    }
  } catch (error) {
    return new APIResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      apiResponseMessages.SOMETHING_WENT_WRONG
    ).failed(error as Error);
  }
};
