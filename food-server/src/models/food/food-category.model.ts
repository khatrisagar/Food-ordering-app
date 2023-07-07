import { Schema, model } from "mongoose";

const foodCategory = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    toJSONJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const FoodCategory = model("FoodCategory", foodCategory);
