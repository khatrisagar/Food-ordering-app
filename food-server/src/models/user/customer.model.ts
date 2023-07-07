import { Schema, model } from "mongoose";

const customer = new Schema({
  address: {
    type: String,
    required: true,
  },

  orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
});
export const Customer = model("Customer", customer);
