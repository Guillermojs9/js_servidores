import express from "express";
const app = express();
const port = 3300;
let mensaje = {};

app.use(express.json());

app.post('/', function (req, res) {
  mensaje = req.body;
  mensaje.numero += 20;
  mensaje.numSaltos++;
  //No me gusta
  res.status(200).json(mensaje);
});

app.get("/", function (req, res) {
  res.send(mensaje);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});