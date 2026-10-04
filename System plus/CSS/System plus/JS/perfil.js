/* =========================
   CERRAR SESIÓN
========================= */

const logoutButton =
    document.getElementById("logoutButton");

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "cerrar sesion.html";

        }
    );

}


/* =========================
   ANIMACIÓN DE SECCIONES
========================= */

const sections =
    document.querySelectorAll(".profile-section");

sections.forEach(
    (section, index) => {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(20px)";

        setTimeout(() => {

            section.style.transition =
                "opacity .6s ease, transform .6s ease";

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0)";

        }, 150 + (index * 180));

    }
);


/* =========================
   EFECTO EN LOS CAMPOS
========================= */

const inputs =
    document.querySelectorAll(
        ".form-group input"
    );

inputs.forEach(
    (input, index) => {

        input.style.opacity = "0";

        input.style.transform =
            "translateY(8px)";

        setTimeout(() => {

            input.style.transition =
                "opacity .4s ease, transform .4s ease";

            input.style.opacity = "1";

            input.style.transform =
                "translateY(0)";

        }, 300 + (index * 35));

    }
);


/* =========================
   EFECTO DEL ENCABEZADO
========================= */

const heading =
    document.querySelector(".heading");

if (heading) {

    heading.style.opacity = "0";

    heading.style.transform =
        "translateY(-10px)";

    setTimeout(() => {

        heading.style.transition =
            "opacity .5s ease, transform .5s ease";

        heading.style.opacity = "1";

        heading.style.transform =
            "translateY(0)";

    }, 100);

}


/* =========================
   EFECTO DEL BOTÓN VOLVER
========================= */

const backButton =
    document.querySelector(".back-button");

if (backButton) {

    backButton.addEventListener(
        "mouseenter",
        () => {

            backButton.style.transform =
                "translateY(-2px) scale(1.02)";

        }
    );


    backButton.addEventListener(
        "mouseleave",
        () => {

            backButton.style.transform =
                "translateY(0) scale(1)";

        }
    );

}


/* =========================
   EFECTO SIDEBAR
========================= */

const sidebarItems =
    document.querySelectorAll(
        ".sidebar-item"
    );

sidebarItems.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            if (!item.classList.contains("active")) {

                item.style.transform =
                    "translateX(4px)";

            }

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            if (!item.classList.contains("active")) {

                item.style.transform =
                    "translateX(0)";

            }

        }
    );

});
