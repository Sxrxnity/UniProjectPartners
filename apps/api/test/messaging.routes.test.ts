import request from "supertest";
import { createApp } from "../src/index";

describe("Messaging routes", () => {
  const app = createApp();

  it("exposes POST /conversations", async () => {
    const res = await request(app).post("/conversations").send({});
    expect(res.status).toBe(501);
  });

  it("exposes GET /conversations", async () => {
    const res = await request(app).get("/conversations");
    expect(res.status).toBe(501);
  });

  it("exposes GET /conversations/:id/messages", async () => {
    const res = await request(app).get("/conversations/1/messages");
    expect(res.status).toBe(501);
  });

  it("exposes POST /conversations/:id/messages", async () => {
    const res = await request(app).post("/conversations/1/messages").send({});
    expect(res.status).toBe(501);
  });
});

