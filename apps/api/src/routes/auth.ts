import { Router, type Request, type Response } from "express";

export const authRouter = Router();

// POST /auth/register
authRouter.post("/register", (_req: Request, res: Response) => {
  // TODO: implement registration
  res.status(501).json({ error: "Not implemented" });
});

// POST /auth/login
authRouter.post("/login", (_req: Request, res: Response) => {
  // TODO: implement login
  res.status(501).json({ error: "Not implemented" });
});

// POST /auth/logout
authRouter.post("/logout", (_req: Request, res: Response) => {
  // TODO: implement logout
  res.status(501).json({ error: "Not implemented" });
});

// GET /auth/me
authRouter.get("/me", (_req: Request, res: Response) => {
  // TODO: return current user
  res.status(501).json({ error: "Not implemented" });
});

