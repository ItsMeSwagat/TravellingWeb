const app = require("../index");
// const User = require("../backend/models/userModel");
const mongoose = require("mongoose");
const supertest = require("supertest");
beforeEach((done) => {
  mongoose.connect(
    "mongodb://localhost:27017/Way2Heaven",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
  jest.setTimeout(60000);
});
afterEach((done) => {
  mongoose.connection.close(() => done());
});
  test("POST /Register/add", async () => {
    const data = { Name: "naruto11saaaa", Email: "narutao11s9@gmail.com" ,Num: 9869105740,
    Password : "Soft@1234", confirmPassword:"Soft@1234",
    reward : 0
  };
    await supertest(app).post("/Register/add")
      .send(data)
      .expect(200)
    //   .then(async (response) => {
    //     expect(response).toBe("Registration Added");
    //   });
  });

// test("POST api/v1/login", async () => {
//   const data = { email: "itsmanjils@gmail.com" ,password: "123456789" };
//   await supertest(app).post("/api/v1/login")
//     .send(data)
//     .expect(200)
//     .then(async (response) => {
//       expect(response.body.user.role).toBe("admin");

//     });
// });


// test("POST api/v1/password/forgot", async () => {
//   const data = { email: "itsmanjils@gmail.com" };
//   await supertest(app).post("/api/v1/password/forgot")
//     .send(data)
//     .expect(200)
//     .then(async (response) => {
//       expect(response.body.success).toBe(true);

//     });
// });

// test("GET /api/v1/products", async () => {
//   const data = {token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDgxNDNiMGUxODcxZDY3ZGFjZDgzYSIsImlhdCI6MTY1ODQ5Nzc3MywiZXhwIjoxNjU4OTI5NzczfQ.SR6JkWCIR4VQW3hxDx9pD2h0nsgLdOhQvul2XzYxDuc"};

//   await supertest(app).get("/api/v1/products")
//   .send(data)
//     .expect(200)
//     .then(async (response) => {
//       expect(response.body.success).toBe(true);

//     });
// });

// test("GET /api/v1/product/:id", async () => {
//   const data1 ={id:"629a35740f04faf5a16b26da"};
//   const data2={token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDgxNDNiMGUxODcxZDY3ZGFjZDgzYSIsImlhdCI6MTY1ODQ5Nzc3MywiZXhwIjoxNjU4OTI5NzczfQ.SR6JkWCIR4VQW3hxDx9pD2h0nsgLdOhQvul2XzYxDuc"}

//   await supertest(app).get("/api/v1/product/629a35740f04faf5a16b26da")
//   .send(data1)
//   .send(data2)
//     .expect(200)
//     .then(async (response) => {
//       expect(response.body.success).toBe(true);

//     });
// });

// test("DELETE /api/v1/user/:id", async () => {
//   const data1 ={id:"62ac7ac77950897432a65b04"};
//   const data2={token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDgxNDNiMGUxODcxZDY3ZGFjZDgzYSIsImlhdCI6MTY1ODQ5Nzc3MywiZXhwIjoxNjU4OTI5NzczfQ.SR6JkWCIR4VQW3hxDx9pD2h0nsgLdOhQvul2XzYxDuc"}

//   await supertest(app).delete("/api/v1/user/629a35740f04faf5a16b26da")
//   .send(data1)
//   .send(data2)
//     .expect(200)
//     .then(async (response) => {
//       expect(response.body.success).toBe(true);

//     });
// });

// test("DELETE /api/v1/user/:id", async () => {
//   const data1 ={id:"62ac7ac77950897432a65b04"};
//   const data2={token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDgxNDNiMGUxODcxZDY3ZGFjZDgzYSIsImlhdCI6MTY1ODQ5Nzc3MywiZXhwIjoxNjU4OTI5NzczfQ.SR6JkWCIR4VQW3hxDx9pD2h0nsgLdOhQvul2XzYxDuc"}

//   await supertest(app).delete("/api/v1/user/629a35740f04faf5a16b26da")
//   .send(data1)
//   .send(data2)
//     .expect(200)
//     .then(async (response) => {
//       expect(response.body.success).toBe(true);

//     });
// });








