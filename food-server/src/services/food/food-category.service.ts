import { FoodCategory } from "@/models";

export const getFoodCategoryDb = async () => {
  try {
    const foodCategory = await FoodCategory.find();
    return foodCategory;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export const addFoodCategoryDb = async (payload: any) => {
  try {
    const foodCategory = await FoodCategory.create(payload);
    return foodCategory;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
