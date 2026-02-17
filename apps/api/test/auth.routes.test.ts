import request from "supertest";
import { createApp } from "../src/index";

describe("Auth routes", () => {
  const app = createApp();

  it("exposes /auth/register", async () => {
    const res = await request(app).post("/auth/register").send({});
    expect(res.status).toBe(501);
  });

  it("exposes /auth/login", async () => {
    const res = await request(app).post("/auth/login").send({});
    expect(res.status).toBe(501);
  });

  it("exposes /auth/logout", async () => {
    const res = await request(app).post("/auth/logout");
    expect(res.status).toBe(501);
  });

  it("exposes /auth/me", async () => {
    const res = await request(app).get("/auth/me");
    expect(res.status).toBe(501);
  });
}
*** End Patch```}
