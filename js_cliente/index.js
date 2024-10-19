async function datos() {
    let texto = await fetch("http://localhost:3000");
    let contenido = await texto.json();
    console.log("El numero final es " + contenido.numero + " y ha pasado por " + 
        contenido.numSaltos + " servidores"
    );
}

const informacion = {
    numero: 30,
    numSaltos: 0
};
const respuesta = await fetch("http://localhost:3000",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(informacion)
    }
);

datos();