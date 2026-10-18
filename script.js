function mostrarSecreto(id, boton) {
    const secreto = document.getElementById(id);

    secreto.classList.toggle("visible");

    if (secreto.classList.contains("visible")) {
        boton.textContent = "Ocultar secreto";
    } else {
        boton.textContent = "Descubrir secreto";
    }
}