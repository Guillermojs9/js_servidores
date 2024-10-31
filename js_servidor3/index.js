import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3600;
const MONGODB_URI = "mongodb://localhost:27017/MensajesServidoresJS";

// Establece la conexión con MongoDB
mongoose.connect(MONGODB_URI)
    .then(db => console.log("Conexión establecida con MongoDB")) // Mensaje de éxito al conectarse
    .catch(err => console.log("Error al conectarse a MongoDB" + err)); // Mensaje de error por si falla la conexión

let min = 50;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max

app.use(express.json());

// Ruta para manejar solicitudes POST en la raíz
app.post('/', function (req, res) {
    let mensaje = req.body; // Captura el cuerpo de la solicitud

    // Verifica si la etapa en el mensaje es menor que 2 
    if (mensaje.etapa < 2) {
        // Tal y como está el proyecto el servidor 3 nunca hará esta parte del código, pero la he hecho por si se añadiese un cuarto servidor
        mensaje.numero.push(numeroAleatorio); // Agrega el número aleatorio al array numero
        mensaje.etapa++; // Incrementa la etapa en 1
        mensaje.sello.push(new Date().toISOString()); // Agrega un sello de tiempo
        console.log(mensaje.numero); // Imprime el array de números en la consola
    } else {
        // Si la etapa es 2 o más, guarda el objeto en la base de datos MongoDB
        mongoose.connection.collection("objetos").insertOne(mensaje)
            .then(db => console.log("Objeto guardado en MongoDB")) // Mensaje de éxito al guardar
            .catch(err => console.log("Error al guardar el objeto en MongoDB" + err)); // Mensaje de error por si falla el guardado
        res.send(mensaje); // Devuelve el objeto recibido al cliente
    }
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
