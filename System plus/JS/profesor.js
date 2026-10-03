/* =========================================================
   SYSTEM PLUS
   PROFESOR
========================================================= */


/* =========================================================
   INFORMACIÓN DEL PROFESOR
========================================================= */

const profesor = {

    nombre: "Fabian Fernando Yusti",

    curso: "Desarrollo Web",

    area: "Desarrollo Web",

    estado: "Activo"

};


/* =========================================================
   MOSTRAR INFORMACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const nombreProfesor =
        document.getElementById("nombre-profesor");

    const nombreCompleto =
        document.getElementById("nombre-completo");


    if (nombreProfesor) {

        nombreProfesor.textContent =
            profesor.nombre;

    }


    if (nombreCompleto) {

        nombreCompleto.textContent =
            profesor.nombre;

    }

});