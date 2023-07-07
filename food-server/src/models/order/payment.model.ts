import { Schema, model } from "mongoose";

const payment = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    order: { type: Schema.Types.ObjectId, required: true, ref: "order" },
    amount: { type: Number, required: true },
    paymentMode: {
      type: String,
      required: true,
      enum: ["Cash On Delivery", "UPI"],
    },
  },
  {
    timestamps: true,
  }
);

export const Payment = model("Payment", payment);
