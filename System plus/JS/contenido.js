/* =========================================
   CONTENIDO.JS
   SYSTEM PLUS
========================================= */


/* =========================================
   ESPERA A QUE CARGUE EL DOM
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       MÓDULOS DESPLEGABLES
    ========================================= */

    const modules = document.querySelectorAll(".module");

    modules.forEach((module, index) => {

        const header = module.querySelector(".module-header");
        const arrow = module.querySelector(".module-arrow");

        if (!header) return;


        /* Animación inicial de cada módulo */

        module.style.opacity = "0";
        module.style.transform = "translateY(20px)";


        setTimeout(() => {

            module.style.transition =
                "opacity .6s ease, transform .6s ease";

            module.style.opacity = "1";
            module.style.transform = "translateY(0)";

        }, 150 + (index * 120));


        /* Click para abrir/cerrar */

        header.addEventListener("click", () => {

            module.classList.toggle("collapsed");


            /* Animación de la flecha */

            if (arrow) {

                if (module.classList.contains("collapsed")) {

                    arrow.style.transform =
                        "rotate(-90deg)";

                } else {

                    arrow.style.transform =
                        "rotate(0deg)";

                }

            }

        });

    });


    /* =========================================
       BOTONES DE EVIDENCIAS
    ========================================= */

    const evidenceButtons =
        document.querySelectorAll(".evidence-button");


    evidenceButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();


            const card =
                button.closest(".evidence-card");


            if (!card) return;


            const titleElement =
                card.querySelector("h4");


            const title =
                titleElement
                    ? titleElement.textContent.trim()
                    : "Evidencia";


            /* Animación del botón */

            button.style.transform =
                "scale(.95)";


            setTimeout(() => {

                button.style.transform =
                    "scale(1)";

            }, 120);


            console.log(
                "Evidencia seleccionada:",
                title
            );


            /*
                Más adelante podemos cambiar esto por:

                window.location.href =
                    `evidencia.html?id=${id}`;

                cuando tengamos la página
                individual de cada evidencia.
            */

        });

    });


    /* =========================================
       BOTONES DE ACTIVIDADES
    ========================================= */

    const activityButtons =
        document.querySelectorAll(
            ".activity-action button"
        );


    activityButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();


            const activity =
                button.closest(".activity-item");


            if (!activity) return;


            const titleElement =
                activity.querySelector("h4");


            const title =
                titleElement
                    ? titleElement.textContent.trim()
                    : "Actividad";


            /* Animación del botón */

            button.style.transform =
                "scale(.95)";


            setTimeout(() => {

                button.style.transform =
                    "scale(1)";

            }, 120);


            console.log(
                "Actividad seleccionada:",
                title
            );

        });

    });


    /* =========================================
       ANIMACIÓN DE EVIDENCIAS AL HACER SCROLL
    ========================================= */

    const evidenceCards =
        document.querySelectorAll(
            ".evidence-card"
        );


    const evidenceObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";


                    evidenceObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.15
            }
        );


    evidenceCards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";


        card.style.transition =
            `
            opacity .55s ease ${index * 0.08}s,
            transform .55s ease ${index * 0.08}s
            `;


        evidenceObserver.observe(card);

    });


    /* =========================================
       ANIMACIÓN DE ACTIVIDADES AL HACER SCROLL
    ========================================= */

    const activities =
        document.querySelectorAll(
            ".activity-item"
        );


    const activityObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateX(0)";


                    /*
                        CORREGIDO:
                        antes estaba usando
                        activityObserver.unobserve(activity)

                        Ahora se utiliza correctamente
                        entry.target.
                    */

                    activityObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.15
            }
        );


    activities.forEach((activity, index) => {

        activity.style.opacity = "0";

        activity.style.transform =
            "translateX(-20px)";


        activity.style.transition =
            `
            opacity .5s ease ${index * 0.09}s,
            transform .5s ease ${index * 0.09}s
            `;


        activityObserver.observe(activity);

    });


    /* =========================================
       ANIMACIÓN DEL ANUNCIO
    ========================================= */

    const announcement =
        document.querySelector(
            ".announcement-card"
        );


    if (announcement) {

        announcement.style.opacity = "0";

        announcement.style.transform =
            "translateY(-15px)";


        requestAnimationFrame(() => {

            announcement.style.transition =
                "opacity .6s ease, transform .6s ease";

            announcement.style.opacity = "1";

            announcement.style.transform =
                "translateY(0)";

        });

    }


    /* =========================================
       EFECTO HOVER EN EVIDENCIAS
    ========================================= */

    evidenceCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-4px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* =========================================
       EFECTO HOVER EN ACTIVIDADES
    ========================================= */

    activities.forEach(activity => {

        activity.addEventListener(
            "mouseenter",
            () => {

                activity.style.transform =
                    "translateX(5px)";

            }
        );


        activity.addEventListener(
            "mouseleave",
            () => {

                activity.style.transform =
                    "translateX(0)";

            }
        );

    });


    /* =========================================
       CERRAR SESIÓN
    ========================================= */

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            () => {

                const confirmLogout =
                    confirm(
                        "¿Quieres cerrar sesión?"
                    );


                if (confirmLogout) {

                    /*
                        Pequeña animación antes
                        de cambiar de página.
                    */

                    document.body.style.opacity = "0";

                    document.body.style.transition =
                        "opacity .35s ease";


                    setTimeout(() => {

                        window.location.href =
                            "cerrar sesion.html";

                    }, 350);

                }

            }
        );

    }


    /* =========================================
       ANIMACIÓN GENERAL DE LA PÁGINA
    ========================================= */

    document.body.style.opacity = "0";


    requestAnimationFrame(() => {

        document.body.style.transition =
            "opacity .45s ease";

        document.body.style.opacity = "1";

    });


});