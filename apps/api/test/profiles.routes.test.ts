import request from "supertest";
import { createApp } from "../src/index";

describe("Profiles routes", () => {
  const app = createApp();

  it("exposes GET /me/profile", async () => {
    const res = await request(app).get("/me/profile");
    expect(res.status).toBe(501);
  });

  it("exposes PUT /me/profile", async () => {
    const res = await request(app).put("/me/profile").send({});
    expect(res.status).toBe(501);
  });

  it("exposes GET /students", async () => {
    const res = await request(app).get("/students");
    expect(res.status).toBe(501);
  });

  it("exposes GET /students/:id", async () => {
    const res = await request(app).get("/students/123");
    expect(res.status).toBe(501);
  });
});

