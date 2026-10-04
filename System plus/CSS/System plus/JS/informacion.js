/* =====================================================
   Q10 - FASE 1
   JAVASCRIPT DE LA PÁGINA DE INFORMACIÓN
   ===================================================== */


/*
   Esperamos a que todo el HTML termine de cargar.

   De esta manera podemos buscar los elementos
   de la página sin errores.
*/

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       MENSAJE DE PRUEBA
       ================================================= */

    console.log(
        "Q10 - Página de información cargada correctamente."
    );



    /* =================================================
       DESPLAZAMIENTO SUAVE
       ================================================= */


    /*
       Buscamos todos los enlaces internos.

       Ejemplos:

       #inicio
       #funciones
       #nosotros
    */

    const enlaces = document.querySelectorAll(
        'a[href^="#"]'
    );



    /*
       Recorremos cada enlace.
    */

    enlaces.forEach((enlace) => {


        enlace.addEventListener("click", (evento) => {


            /*
               Obtenemos el destino del enlace.
            */

            const destino = document.querySelector(
                enlace.getAttribute("href")
            );



            /*
               Comprobamos que el destino exista.
            */

            if (destino) {


                /*
                   Evitamos el salto automático.
                */

                evento.preventDefault();



                /*
                   Movemos la pantalla suavemente
                   hacia la sección.
                */

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });



    /* =================================================
       ANIMACIONES AL HACER SCROLL
       ================================================= */


    /*
       Buscamos todos los elementos que tengan
       la clase "reveal".
    */

    const elementosReveal =
        document.querySelectorAll(".reveal");



    /*
       IntersectionObserver detecta cuándo
       un elemento entra en pantalla.
    */

    const observer = new IntersectionObserver(

        (entradas) => {


            /*
               Revisamos cada elemento detectado.
            */

            entradas.forEach((entrada) => {


                /*
                   Si el elemento está visible...
                */

                if (entrada.isIntersecting) {


                    /*
                       Agregamos "active".

                       CSS se encarga de realizar
                       la animación.
                    */

                    entrada.target.classList.add(
                        "active"
                    );


                    /*
                       Dejamos de observarlo.

                       Así la animación ocurre una sola vez.
                    */

                    observer.unobserve(
                        entrada.target
                    );

                }

            });

        },


        {
            /*
               La animación comienza cuando
               aproximadamente el 15% del elemento
               entra en pantalla.
            */

            threshold: 0.15

        }

    );



    /*
       Activamos el observer para todos
       los elementos con "reveal".
    */

    elementosReveal.forEach((elemento) => {

        observer.observe(elemento);

    });


});