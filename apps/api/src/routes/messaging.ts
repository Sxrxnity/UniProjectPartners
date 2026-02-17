import { Router } from "express";

export const messagingRouter = Router();

// POST /conversations
messagingRouter.post("/conversations", (_req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// GET /conversations
messagingRouter.get("/conversations", (_req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// GET /conversations/:id/messages
messagingRouter.get("/conversations/:id/messages", (_req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

// POST /conversations/:id/messages
messagingRouter.post("/conversations/:id/messages", (_req, res) => {
  res.status(501).json({ error: "Not implemented" });
});

