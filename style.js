/* alert("Hola, bienvenido a la zona gamer") */
let Nombre = "Esperamos que te diviertas recordando los videojuegos de la vieja escuela"
// alert(Nombre)
Nombre = "Esta pagina web ha sido creado con el fin de divertirte al 100%"
// alert(Nombre)
const Apellido = "WELCOME TO MY WEBSITE"
// alert(Apellido)
let texto = document.querySelector(".acerca");
console.log(texto);
texto.innerHTML = "Hola";
let texto2 = texto.innerText;
if(texto2=="Hola"){
    texto.innerHTML = "Una página web donde tu diversión tendrás al jugar videojuegos"
}