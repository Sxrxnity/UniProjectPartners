import { Router, type Request, type Response } from "express";

export const profilesRouter = Router();

// GET /me/profile
profilesRouter.get("/me/profile", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

// PUT /me/profile
profilesRouter.put("/me/profile", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

// GET /students
profilesRouter.get("/students", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

// GET /students/:id
profilesRouter.get("/students/:id", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

