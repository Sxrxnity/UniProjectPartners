import { Router, type Request, type Response } from "express";

export const blockingRouter = Router();

// GET /me/blocks
blockingRouter.get("/me/blocks", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

// POST /me/blocks
blockingRouter.post("/me/blocks", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

  // DELETE /me/blocks/:userId
  blockingRouter.delete("/me/blocks/:userId", (_req: Request, res: Response) => {
  res.status(501).json({ error: "Not implemented" });
});

