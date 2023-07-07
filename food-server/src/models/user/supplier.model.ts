import { Schema, model } from "mongoose";

const supplier = new Schema({
  name: {
    type: "string",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});
export const Supplier = model("Supplier", supplier);
