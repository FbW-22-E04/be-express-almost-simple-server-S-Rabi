import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is calling... 🐒");
});

app.get("/hello", (request, response) => {
  response.send("I don't know");
});

app.get("/time", (request, response) => {
  response.send(new Date().toISOString());
});

app.get("/random", (request, response) => {
  response.send(Math.random().toString());
});
