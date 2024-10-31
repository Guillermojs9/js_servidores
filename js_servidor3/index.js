import express from "express";
const app = express();
const port = 3600;
let min = 50;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
let mensaje = {};

app.use(express.json());

app.post('/', function (req, res) {
  mensaje = req.body;
  mensaje.numero.push(numeroAleatorio);
  mensaje.numSaltos++;
  console.log(mensaje.numero);
  res.send(mensaje);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});