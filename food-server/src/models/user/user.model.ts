import { Schema, model, Model } from "mongoose";

const user = new Schema<any>({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  contact: {
    type: Number,
    required: true,
    minLength: [10, "Value should have minimum 10 digits"],
    maxLength: [10, "Value should have maximum 10 digits"],
    match: [/\d{10}/, "Value should only have digits"],
  },

  role: {
    type: String,
    enum: ["customer", "supplier", "deliveryAgent", "admin"],
  },
  userInfo: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: "role",
  },
});
export const User = model("User", user);
