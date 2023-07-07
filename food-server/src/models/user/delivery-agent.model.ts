import { Schema, model } from "mongoose";

const deliveryAgent = new Schema({
  ordersDelivered: [{ type: Schema.Types.ObjectId, ref: "order" }],
  rating: [
    {
      users: { type: Schema.Types.ObjectId, ref: "user" },
      ratings: { type: Number, enum: [1, 2, 3, 4, 5] },
      review: { type: String },
    },
  ],
});
export const DeliveryAgent = model("DeliveryAgent", deliveryAgent);
