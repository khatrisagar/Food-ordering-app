import { foodItemInterface } from "@/interfaces";
import { FoodItem } from "@/models";
import { APIFeature } from "@/utils";
import { apiFeatureQuerystringInterface } from "@/interfaces";

export const getFoodItemsDb = async (
  queryString: apiFeatureQuerystringInterface
) => {
  try {
    const allowedSearchFields: any = [
      {
        field: "name",
        type: "string",
      },
      { field: "price", type: "number" },
    ];
    const foodItemFeatures = new APIFeature(
      FoodItem.find().populate({ path: "category" }),
      queryString
    )
      .sort()
      .filter(allowedSearchFields);
    const count = await foodItemFeatures.query.clone().count();
    const foodItems = await foodItemFeatures.pagination().query;

    const pagination = {
      itemCount: foodItems.length,
      count,
      page: foodItemFeatures.page,
      limit: foodItemFeatures.limit,
      skip: foodItemFeatures.skip,
    };
    return {
      foodItems,
      pagination,
    };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getItemsByCategoryDb = async (
  categoryId: string,
  queryString: apiFeatureQuerystringInterface
) => {
  try {
    const allowedSearchFields: any = [
      {
        field: "name",
        type: "string",
      },
      { field: "price", type: "number" },
    ];
    const foodItemFeatures = new APIFeature(
      FoodItem.find({ category: categoryId }).populate({
        path: "category",
      }),
      queryString
    )
      .sort()
      .filter(allowedSearchFields);
    const count = await foodItemFeatures.query.clone().count();
    const foodItems = await foodItemFeatures.pagination().query;

    const pagination = {
      itemCount: foodItems.length,
      count,
      page: foodItemFeatures.page,
      limit: foodItemFeatures.limit,
      skip: foodItemFeatures.skip,
    };
    return {
      foodItems,
      pagination,
    };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getSingleFoodItemDb = async (itemId: string) => {
  try {
    const item = await FoodItem.findById(itemId);
    return item;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const addFoodItemsDb = async (payload: foodItemInterface) => {
  try {
    const foodItem = await FoodItem.create(payload);
    return foodItem;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const updateFoodItemsDb = async (itemId: string, payload: any) => {
  try {
    const item = await FoodItem.findByIdAndUpdate(itemId, payload, {
      new: true,
    });
    return item;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export const deleteFoodItemsDb = async (itemId: string) => {
  try {
    const item = await FoodItem.findByIdAndDelete(itemId);
    return item;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
