let min = 50;
let max = 100;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max

// Función que obtiene datos desde la API
async function datos() {
    // Realiza una solicitud GET a la API
    let texto = await fetch("http://localhost:3000");

    // Convierte la respuesta en formato JSON
    let contenido = await texto.json();

    // Imprime el número, la etapa y el sello
    console.log("El numero final es " + contenido.numero + " y ha pasado por " +
        contenido.etapa + " servidores, " + contenido.sello
    );
}

// Objeto que contiene la información que se enviará a la API
const informacion = {
    etapa: 0,
    numero: [numeroAleatorio],
    sello: [],
};

// Realiza una solicitud POST a la API para enviar el objeto informacion
const respuesta = await fetch("http://localhost:3000",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(informacion)
    }
);

// Llama a la función datos
datos();