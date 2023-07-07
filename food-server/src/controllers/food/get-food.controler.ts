import { Request, Response } from "express";
import {
  getSingleFoodItemDb,
  getFoodItemsDb,
  getItemsByCategoryDb,
} from "@/services";
import { APIResponse } from "@/utils";
import { httpStatus, apiResponseMessages } from "@/enums";
import { apiFeatureQuerystringInterface } from "@/interfaces";

export const getAllFoodItems = async (req: Request, res: Response) => {
  try {
    const items = await getFoodItemsDb(
      req.query as apiFeatureQuerystringInterface
    );
    return new APIResponse(
      res,
      httpStatus.OK,
      items?.foodItems,
      items?.pagination
    ).success();
  } catch (error) {
    console.log(error);
    return new APIResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      apiResponseMessages.SOMETHING_WENT_WRONG
    ).failed();
  }
};

export const getItemsByCategory = async (req: Request, res: Response) => {
  try {
    const categoryId: string = req.params.categoryId;
    const items = await getItemsByCategoryDb(
      categoryId,
      req.query as apiFeatureQuerystringInterface
    );
    return new APIResponse(
      res,
      httpStatus.OK,
      items?.foodItems,
      items?.pagination
    ).success();
  } catch (error) {
    return new APIResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      apiResponseMessages.SOMETHING_WENT_WRONG
    ).failed();
  }
};

export const getSingleItem = async (req: Request, res: Response) => {
  try {
    const itemId: string = req.params.itemId;
    const item = await getSingleFoodItemDb(itemId);
    return new APIResponse(res, httpStatus.OK, item).success();
  } catch (error) {
    return new APIResponse(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      apiResponseMessages.SOMETHING_WENT_WRONG
    ).failed();
  }
};
