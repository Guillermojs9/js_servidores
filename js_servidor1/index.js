import express from "express";
const app = express();
const port = 3000;
let mensaje = {};

async function datos(){
  let texto = await fetch("http://localhost:3300");
  mensaje = await texto.json();
}
datos();

app.get("/", function (req, res) {
  res.send(mensaje);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
