const express = require("express");
// iniciar express
const app = express();

// ruta principal
app.get("/", (req, res) => {
  res.send({ message: "Hello", change: "UNIR" }).status(200);
});

// ruta sumar
app.get("/add/:number/:additor", (req, res) => {
  const result = parseInt(req.params.number, 10) + parseInt(req.params.additor, 10);
  res.send({ result }).status(200);
});

app.get("/substract/:number/:substractor", (req, res) => {
  const result = parseInt(req.params.number, 10) - parseInt(req.params.substractor, 10);
  res.send({ result }).status(200);
});

module.exports = app;
