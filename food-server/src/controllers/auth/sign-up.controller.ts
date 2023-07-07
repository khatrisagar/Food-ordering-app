import { signUpUserDb, findUserDb } from "@/services";
import { encryptPassword } from "@/utils";
import { Request, Response } from "express";

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await findUserDb(email);
    console.log(isUserExist);
    if (!isUserExist) {
      const encryptedPassword = await encryptPassword(password);
      const user = await signUpUserDb({
        ...req.body,
        password: encryptedPassword,
      });
      res.status(201).json(user);
    } else {
      res.status(200).json({ message: "User already exists" });
    }
  } catch (error) {
    res.json((error as Error).message);
  }
};
