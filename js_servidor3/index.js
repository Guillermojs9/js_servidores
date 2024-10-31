import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3600;
const MONGODB_URI = "mongodb://localhost:27017/MensajesServidoresJS";
mongoose.connect(MONGODB_URI)
    .then(db => console.log("Conexión establecida con MongoDB"))
    .catch(err => console.log("Error al conectarse a MongoDB" + err));
let min = 50;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

app.use(express.json());

app.post('/', function (req, res) {
    let mensaje = req.body;
    if (mensaje.etapa < 2) {
        mensaje.numero.push(numeroAleatorio);
        mensaje.etapa++;
        mensaje.sello.push("Sellado por servidor " + mensaje.etapa);
        console.log(mensaje.numero);
    } else {
        mongoose.connection.collection("objetos").insertOne(mensaje)
            .then(db => console.log("Objeto guardado en MongoDB"))
            .catch(err => console.log("Error al guardar el objeto en MongoDB" + err));
        res.send(mensaje);
    }
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});