import supertest from "supertest";
import app from "../server.js";

const request = supertest(app);

describe("GET /movie", () => {
  test("testing root pat and get response with statusCode 200", async () => {
    const response = await request
      .get("/movie");
    expect(response.statusCode).toBe(200);
  });

  test("correct movie id and get response with statusCode 200", async () => { 
    const response = await request
      .get("/movie/1");
    expect(response.statusCode).toBe(200);
  });

  test("wrong movie id and get response with statusCode 404", async () => {
    const response = await request
      .get("/movie/19");
    expect(response.statusCode).toBe(404);
  });
});

describe("POST /movie", () => {
  describe('adding movie', () => {
    test("correct movie info and get response with statusCode 200", async () => { 
      const response = await request
        .post("/movie")
        .send({
          title: "New Movie3",
          director: "Betul",
          release_date: "2022-10-12"
        });
      expect(response.statusCode).toBe(200);
    });

    test("empty movie info and get response with statusCode 400", async () => { 
      const response = await request
        .post("/movie")
        .send({
          title: "",
          director: "Betul",
          release_date: "2022-10-12"
        });
      expect(response.statusCode).toBe(400);
    });
  })
});

describe("DELETE /movie", () => {
  describe("correct id and get response with statusCode 200", () => { // deleting by id
    test("correct id and get response with statusCode 200 ", async ()=> { 
      const response = await request
        .delete("/movie/1");
      expect(response.statusCode).toBe(200);
    });

    test("wrong id and get response with statusCode 404 ", async ()=> { 
      const response = await request
        .delete("/movie/19");
      expect(response.statusCode).toBe(404);
    });
  })
});