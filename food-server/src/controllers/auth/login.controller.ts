import { Request, Response } from "express";
import { findUserDb } from "@/services";
import { verifyPassword, createJWTToken } from "@/utils";
import { ObjectId } from "mongoose";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await findUserDb(email);
    if (user) {
      const isRightPassword = await verifyPassword(
        password,
        user?.password.toString()
      );
      if (isRightPassword) {
        const token = createJWTToken(user._id as ObjectId);
        res.status(200).json({ data: token });
      }
    } else {
      res.json({ message: "user not found" });
    }
  } catch (error) {
    res.json((error as Error).message);
  }
};
