function toggleEnlaces() {
    var enlacesAdicionales = document.getElementById("enlaces-adicionales");
    if (enlacesAdicionales.style.display === "none" || enlacesAdicionales.style.display === "") {
        enlacesAdicionales.style.display = "block"; /* Mostrar los enlaces adicionales */
    } else {
        enlacesAdicionales.style.display = "none"; /* Ocultar los enlaces adicionales */
    }
}

document.querySelector(".enlace-principal").addEventListener("click", toggleEnlaces);
