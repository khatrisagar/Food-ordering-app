import { verifyToken } from "@/utils";
import { Request, Response, NextFunction } from "express";
import { findByIdUserDb } from "@/services";
import { ObjectId } from "mongoose";
import { httpStatus, apiResponseMessages } from "enums";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.headers.authorization) {
      const decode: any = verifyToken(req.headers.authorization);
      const user: any = await findByIdUserDb(decode.id as ObjectId);
      (req as Request & { user: object }).user = user;
      return next();
    } else {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: apiResponseMessages.UNAUTHORIZED });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: apiResponseMessages.UNAUTHORIZED });
  }
};
