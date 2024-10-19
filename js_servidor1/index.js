import express from "express";
const app = express();
const port = 3000;
let mensaje2 = {};

app.use(express.json());

app.post('/', async function (req, res) {
  let mensaje = req.body;
  mensaje.numero += 25;
  mensaje.numSaltos++;

  const respuesta = await fetch("http://localhost:3300",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(mensaje)
    }
  );
  mensaje2 = await respuesta.json();
  console.log(mensaje2);
  res.send(mensaje2);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
