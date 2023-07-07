import { Schema, model } from "mongoose";

const order = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    payment: { type: Schema.Types.ObjectId, required: true, ref: "payment" },
    items: [
      {
        item: { type: Schema.Types.ObjectId, ref: "foodItem" },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Order = model("Order", order);
