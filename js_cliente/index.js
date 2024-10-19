async function datos() {
    let texto = await fetch("http://localhost:3000");
    let informacion = await texto.json();
    console.log(informacion);
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