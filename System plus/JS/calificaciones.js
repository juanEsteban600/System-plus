/* =========================================================
   SYSTEM PLUS
   CALIFICACIONES
========================================================= */


/* =========================================================
   DATOS DE CALIFICACIONES
========================================================= */

const calificaciones = [

    {
        modulo: "01 - HTML",
        actividad: "Evidencia de conocimiento - HTML",
        fecha: "25 Sep 2026",
        calificacion: 4.5,
        estado: "Entregada"
    },

    {
        modulo: "01 - HTML",
        actividad: "Evidencia de desempeño - Página web",
        fecha: "27 Sep 2026",
        calificacion: 4.2,
        estado: "Entregada"
    },

    {
        modulo: "02 - CSS",
        actividad: "Evidencia de conocimiento - CSS",
        fecha: "29 Sep 2026",
        calificacion: 4.7,
        estado: "Entregada"
    },

    {
        modulo: "02 - CSS",
        actividad: "Evidencia de desempeño - Diseño web",
        fecha: "30 Sep 2026",
        calificacion: 4.0,
        estado: "Entregada"
    },

    {
        modulo: "03 - JavaScript",
        actividad: "Evidencia de conocimiento - JavaScript",
        fecha: "05 Oct 2026",
        calificacion: null,
        estado: "Pendiente"
    },

    {
        modulo: "03 - JavaScript",
        actividad: "Evidencia de desempeño - Interactividad",
        fecha: "10 Oct 2026",
        calificacion: null,
        estado: "Pendiente"
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const tablaCalificaciones =
    document.getElementById("tabla-calificaciones");

const promedioGeneral =
    document.getElementById("promedio-general");


/* =========================================================
   MOSTRAR CALIFICACIONES
========================================================= */

function cargarCalificaciones() {

    tablaCalificaciones.innerHTML = "";

    let suma = 0;

    let cantidad = 0;


    calificaciones.forEach((item) => {

        const fila = document.createElement("tr");


        /* -----------------------------------------
           CALIFICACIÓN
        ----------------------------------------- */

        let calificacionTexto = "-";

        let claseCalificacion = "pending";


        if (item.calificacion !== null) {

            calificacionTexto =
                item.calificacion.toFixed(1);

            claseCalificacion = "approved";

            suma += item.calificacion;

            cantidad++;
        }


        /* -----------------------------------------
           ESTADO
        ----------------------------------------- */

        const claseEstado =
            item.estado === "Entregada"
                ? "delivered"
                : "pending";


        fila.innerHTML = `

            <td>
                ${item.modulo}
            </td>

            <td>
                ${item.actividad}
            </td>

            <td>
                ${item.fecha}
            </td>

            <td>
                <span class="grade ${claseCalificacion}">
                    ${calificacionTexto}
                </span>
            </td>

            <td>
                <span class="status ${claseEstado}">
                    ${item.estado}
                </span>
            </td>

        `;


        tablaCalificaciones.appendChild(fila);

    });


    /* =====================================================
       PROMEDIO
    ====================================================== */

    if (cantidad > 0) {

        const promedio = suma / cantidad;

        promedioGeneral.textContent =
            promedio.toFixed(1);

    } else {

        promedioGeneral.textContent = "0.0";

    }

}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    cargarCalificaciones
);