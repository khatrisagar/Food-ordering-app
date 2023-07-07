import { Schema, model } from "mongoose";
import { FoodCategory } from "./food-category.model";

const foodItem = new Schema({
  name: {
    type: String,
    required: [true, "Item Name Should not be emplty"],
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Item Price Should not be emplty"],
  },
  details: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "FoodCategory",
  },
  rating: [
    {
      users: { type: Schema.Types.ObjectId, ref: "user" },
      ratings: { type: Number, enum: [1, 2, 3, 4, 5] },
      review: { type: String },
      default: [],
    },
  ],
  supplier: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

foodItem.virtual("itemCategory", {
  ref: "FoodCategory",
  localField: "category",
  foreignField: "_id",
});

// (foodItem as any).set("debug", true);
export const FoodItem = model("FoodItem", foodItem);
