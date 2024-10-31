import express from "express";
const app = express();
const port = 3300;
let min = 50;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max
let mensaje2 = {}; // Almacena la respuesta del servidor 3

app.use(express.json());

// Ruta para manejar solicitudes POST en la raíz
app.post('/', async function (req, res) {
  let mensaje = req.body; // Captura el cuerpo de la solicitud
  
  // Verifica si la etapa en el mensaje es menor que 2
  if (mensaje.etapa < 2) {
    mensaje.numero.push(numeroAleatorio); // Agrega el número aleatorio al array numero
    mensaje.etapa++; // Incrementa la etapa en 1
    mensaje.sello.push(new Date().toISOString()); // Agrega un sello de tiempo

    // Realiza una solicitud POST al servidor 3
    const respuesta = await fetch("http://localhost:3600",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(mensaje) // Convierte el objeto mensaje a formato JSON
      }
    );
    
    mensaje2 = await respuesta.json(); // Espera la respuesta y la convierte a JSON
    console.log(mensaje2); // Imprime la respuesta en la consola
    res.send(mensaje2); // Envía la respuesta al cliente
  } else {
    res.send(mensaje2);
  }
});

app.get("/", function (req, res) {
  res.send(mensaje2);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
