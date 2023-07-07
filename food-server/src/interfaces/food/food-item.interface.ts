import { ObjectId } from "mongoose";

export interface foodItemInterface {
  name: string;
  image: string;
  price: number;
  details: string;
  category: ObjectId;
  supplier: ObjectId;
}
export interface foodItemModelInterface extends foodItemInterface {
  rating:
    | Array<{
        user: ObjectId;
        rating: number;
        review: string;
      }>
    | [];
}
