import { Schema, model } from "mongoose";
import { foodItemModelInterface } from "@/interfaces";

const foodItem = new Schema<foodItemModelInterface>({
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
      user: { type: Schema.Types.ObjectId, ref: "user" },
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

export const FoodItem = model("FoodItem", foodItem);
