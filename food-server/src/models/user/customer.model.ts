import { Schema, model } from "mongoose";

const customer = new Schema({
  address: {
    type: String,
    required: true,
  },
  cart: [
    {
      itemId: { type: Schema.Types.ObjectId, ref: "foodItem" },
      quantity: { type: Number },
    },
  ],
  orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
});

// total price with virtual

export const Customer = model("Customer", customer);
