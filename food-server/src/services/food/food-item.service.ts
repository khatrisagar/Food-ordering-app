import { FoodCategory, FoodItem } from "@/models";
import { APIFeature } from "@/utils";

export const getFoodItemsDb = async (queryString: object) => {
  try {
    // const foodItemFeatures = new APIFeature(
    //   FoodItem.aggregate([
    //     {
    //       $lookup: {
    //         from: "foodcategories",
    //         localField: "category",
    //         foreignField: "_id",
    //         as: "category",
    //       },
    //     },
    //     { $match: { "category.name": "Burger" } },
    //   ]),
    //   queryString
    // )
    //   .sort()
    //   .filter(["name", "category.name", "price"]);

    const foodItemFeatures = new APIFeature(
      FoodItem.find().populate({
        path: "category",
        select: "-__v -image",
      }),
      queryString
    )
      .sort()
      .filter(["name", "category.name", "price"]);
    const count = await foodItemFeatures.query.clone().count();
    console.log("count", count);
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
export const addFoodItemsDb = async (payload: any) => {
  try {
    const foodItem = await FoodItem.create(payload);
    return foodItem;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getItemsWithCategoryDb = async () => {
  try {
    const foodCategory = await FoodCategory.find().populate({
      path: "itemCategory",
    });

    return foodCategory;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
