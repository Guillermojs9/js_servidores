import express from "express";
const app = express();
const port = 3300;

app.get("/", function (req, res) {
  const mensaje = {
    mensaje : "Hola funciona el servidor 2"
}
  res.send(mensaje);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});