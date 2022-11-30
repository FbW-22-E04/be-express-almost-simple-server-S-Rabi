import express from "express";

const app = express();

const server = app.listen(3000, () => {});

app.get("/hello", (request, response) => {
  response.send("I don't know");
});

app.get("/time", (request, response) => {
  response.send(new Date().toISOString());
});

app.get("/random", (request, response) => {
  response.send(Math.random().toString());
});

app.get("/isNumber", (request, response) => {
  const value = request.query.value;
  console.log(request.query);
  if (isNaN(value)) {
    response.send("this is not a number");
  } else {
    response.send("this is a number");
  }
});

console.log("The server is calling... 🐒");
