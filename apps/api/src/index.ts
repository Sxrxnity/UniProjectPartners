import express from "express";
import type { Request, Response } from "express";
import { json } from "express";

import { authRouter } from "./routes/auth";
import { profilesRouter } from "./routes/profiles";
import { messagingRouter } from "./routes/messaging";
import { blockingRouter } from "./routes/blocking";

const PORT = Number(process.env.PORT ?? 3001);

export const createApp = () => {
  const app = express();

  app.use(json());

  app.get("/health", (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  // Core auth routes
  app.use("/auth", authRouter);

  // Profiles
  app.use("/", profilesRouter);

  // Messaging
  app.use("/", messagingRouter);

  // Blocking
  app.use("/", blockingRouter);

  return app;
};

if (process.env.NODE_ENV !== "test") {
  const app = createApp();
  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
}