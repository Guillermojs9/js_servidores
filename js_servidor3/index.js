import express from "express";
const app = express();
const port = 3600;
let min = 50;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

app.use(express.json());

app.post('/', function (req, res) {
    let mensaje = req.body;
    if (mensaje.etapa < 2) {
        mensaje.numero.push(numeroAleatorio);
        mensaje.etapa++;
        console.log(mensaje.numero);
    } else {
        res.send(mensaje);

    }
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});