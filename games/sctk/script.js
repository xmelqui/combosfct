function toggleEnlaces() {
    var enlacesAdicionales = document.getElementById("enlaces-adicionales");
    if (enlacesAdicionales.style.display === "none" || enlacesAdicionales.style.display === "") {
        enlacesAdicionales.style.display = "block"; /* Mostrar los enlaces adicionales */
    } else {
        enlacesAdicionales.style.display = "none"; /* Ocultar los enlaces adicionales */
    }
}

document.querySelector(".enlace-principal").addEventListener("click", toggleEnlaces);


function moveArrow(event) {
    if (event.target.classList.contains('arrow')) {
        let arrow = event.target;
        let currentValue = arrow.getAttribute('data-value');
        console.log('Valor guardado: ' + currentValue);
        
        // Obtener todas las flechas
        let arrows = document.querySelectorAll('.arrow');
        
        // Ajustar las z-index y posiciones
        arrows.forEach((a) => {
            let zIndex = parseInt(a.style.zIndex);
            if (zIndex > parseInt(arrow.style.zIndex)) {
                a.style.zIndex = zIndex - 1;
            }
        });

        arrow.style.zIndex = arrows.length; // Aseguramos que la flecha clicada esté al frente
    }
}


function toggleForm() {
    var form = document.getElementById("comboForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}