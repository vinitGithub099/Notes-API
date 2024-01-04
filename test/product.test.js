const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

require("dotenv").config();

var delId = "";

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

afterAll(() => mongoose.connection.close());

/* fetch all notes */
describe("GET /api/notes/fetch-notes", () => {
  it("should return all notes", async () => {
    const res = await request(app).get("/api/notes/fetch-notes");
    expect(res.statusCode).toBe(200);
    expect(
      res.body && res.body.data && res.body.statusCode === res.statusCode
    ).toBeTruthy();
    expect(res.body.data.length).toBeGreaterThanOrEqual(0);
  });
});

/* create a note  */
describe("POST /api/notes/create-note", () => {
  it("should create a note", async () => {
    const res = await request(app).post("/api/notes/create-note").send({
      title: "Testing Note 1",
      content: "This note is used for testing",
    });

    /* set the delId as the id of newly created post for further use */
    delId = res.body.data._id;

    expect(res.statusCode === 200 || res.statusCode === 204).toBeTruthy();

    expect(res.body.statusCode).toBe(201);

    expect(res.body.data.title).toBe("Testing Note 1");

    expect(res.body.data.content).toBe("This note is used for testing");
  });
});

/* fetch single note with id */
describe("GET /api/notes/fetch-notes/:id", () => {
  it("should return a single note with specified id", async () => {
    const res = await request(app).get(`/api/notes/fetch-notes/${delId}`);

    expect(res.statusCode).toBe(200);

    expect(res.body.statusCode).toBe(200);

    expect(
      res.body && res.body.data && res.body.statusCode === res.statusCode
    ).toBeTruthy();

    expect(res.body.data._id).toBe(delId);
  });
});

/* update the note with specified note */
describe("PUT /api/notes/update-note/:id", () => {
  it("should update a note with specified id", async () => {
    const res = await request(app).put(`/api/notes/update-note/${delId}`).send({
      title: "Updated title of test note",
      content: "updated content of the test note",
    });

    expect(res.statusCode === 200 || res.statusCode === 204).toBeTruthy();

    expect(res.body.statusCode).toBe(200);

    expect(res.body.data.title).toBe("Updated title of test note");

    expect(res.body.data.content).toBe("updated content of the test note");
  });
});

/* delete the note with specified id */
describe("DELETE /api/notes/delete-note/:id", () => {
  it("should delete a note wih specified id", async () => {
    const res = await request(app).delete(`/api/notes/delete-note/${delId}`);

    expect(res.statusCode === 200 || res.statusCode === 204).toBeTruthy();
    
    expect(res.body.statusCode).toBe(204);
    
    expect(res.body.data._id).toBe(delId);
  });
});
