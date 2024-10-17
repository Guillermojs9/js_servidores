async function datos(){
    let texto = await fetch("http://localhost:3000");
    let informacion = await texto.json();
    console.log(informacion.mensaje);
}
datos();