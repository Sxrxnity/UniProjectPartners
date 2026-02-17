import request from "supertest";
import { createApp } from "../src/index";

describe("Blocking routes", () => {
  const app = createApp();

  it("exposes GET /me/blocks", async () => {
    const res = await request(app).get("/me/blocks");
    expect(res.status).toBe(501);
  });

  it("exposes POST /me/blocks", async () => {
    const res = await request(app).post("/me/blocks").send({});
    expect(res.status).toBe(501);
  });

  it("exposes DELETE /me/blocks/:userId", async () => {
    const res = await request(app).delete("/me/blocks/123");
    expect(res.status).toBe(501);
  });
});

