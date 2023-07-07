import { Router } from "express";

const router = Router();

import { signUpUser } from "@/controllers/auth/sign-up.controller";
import { loginUser } from "@/controllers/auth/login.controller";

router.post("/sign-up", signUpUser);
router.post("/login", loginUser);

export { router as authRoutes };
