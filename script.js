function mostrarSecreto(id, boton) {
    const secreto = document.getElementById(id);

    secreto.classList.toggle("visible");

    if (secreto.classList.contains("visible")) {
        boton.textContent = "Ocultar secreto";
    } else {
        boton.textContent = "Descubrir secreto";
    }
}
// BOTÓN PARA ENTRAR A GRAVITY FALLS
const botonEntrar = document.getElementById("botonEntrar");
const portada = document.getElementById("portada");

botonEntrar.addEventListener("click", function () {
    portada.classList.add("oculta");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
