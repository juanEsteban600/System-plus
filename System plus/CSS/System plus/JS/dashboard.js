/* =========================
   CURSOS
========================= */

const courses = [

    {
        id: 1,
        name: "Excel Avanzado",
        type: "Curso",
        progress: 60,
        duration: "2 meses",
        remaining: "32 días",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 2,
        name: "Python Básico",
        type: "Curso",
        progress: 35,
        duration: "3 meses",
        remaining: "42 días",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: 3,
        name: "Desarrollo Web",
        type: "Técnico",
        progress: 100,
        duration: "14 meses",
        remaining: "8 días",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
    }

];


/* =========================
   ELEMENTOS
========================= */

const coursesGrid =
    document.getElementById("coursesGrid");

const activeCourses =
    document.getElementById("activeCourses");

const generalProgress =
    document.getElementById("generalProgress");

const completedCourses =
    document.getElementById("completedCourses");

const logoutButton =
    document.getElementById("logoutButton");


/* =========================
   CALCULAR RESUMEN
========================= */

function updateSummary() {

    /*
        Cursos terminados:
        progreso igual a 100%.
    */

    const completed =
        courses.filter(
            course => course.progress === 100
        );


    /*
        Cursos activos:
        progreso menor a 100%.
    */

    const active =
        courses.filter(
            course => course.progress < 100
        );


    /*
        Calcular progreso general.
    */

    let totalProgress = 0;


    courses.forEach(course => {

        totalProgress += course.progress;

    });


    let averageProgress = 0;


    if (courses.length > 0) {

        averageProgress =
            Math.round(
                totalProgress / courses.length
            );

    }


    /*
        Actualizar estadísticas.
    */

    if (activeCourses) {

        activeCourses.textContent =
            active.length;

    }


    if (completedCourses) {

        completedCourses.textContent =
            completed.length;

    }


    if (generalProgress) {

        generalProgress.textContent =
            `${averageProgress}%`;

    }

}


/* =========================
   MOSTRAR CURSOS
========================= */

function renderCourses() {

    if (!coursesGrid) {
        return;
    }


    coursesGrid.innerHTML = "";


    /* =========================
       OBSERVER PARA PROGRESO
    ========================== */

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const card =
                        entry.target;


                    const progressFill =
                        card.querySelector(
                            ".progress-fill"
                        );


                    const progress =
                        Number(
                            card.dataset.progress
                        );


                    if (!progressFill) {
                        return;
                    }


                    /*
                        Animar barra.
                    */

                    setTimeout(() => {

                        progressFill.style.transition =
                            "width 1s ease";

                        progressFill.style.width =
                            `${progress}%`;

                    }, 150);


                    observer.unobserve(card);

                });

            },
            {
                threshold: 0.3
            }
        );


    /* =========================
       CREAR TARJETAS
    ========================== */

    courses.forEach(
        (course, index) => {

            const card =
                document.createElement("article");


            card.className =
                "course-card";


            card.dataset.progress =
                course.progress;


            /*
                Estado inicial.
            */

            card.style.opacity =
                "0";

            card.style.transform =
                "translateY(20px)";


            /* =========================
               CONTENIDO
            ========================== */

            card.innerHTML = `

                <div class="course-image">

                    <img
                        src="${course.image}"
                        alt="${course.name}"
                    >

                </div>


                <span class="course-type">

                    ${course.type}

                </span>


                <h3>

                    ${course.name}

                </h3>


                <div class="progress-header">

                    <span>
                        Progreso
                    </span>

                    <strong>
                        ${course.progress}%
                    </strong>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width: 0%">
                    </div>

                </div>


                <div class="course-data">

                    <div>

                        <span>
                            Duración
                        </span>

                        <strong>
                            ${course.duration}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Tiempo restante
                        </span>

                        <strong>
                            ${course.remaining}
                        </strong>

                    </div>

                </div>


                <button
                    type="button"
                    class="continue-button"
                    data-course-id="${course.id}"
                >

                    Continuar curso

                </button>

            `;


            coursesGrid.appendChild(card);


            /* =========================
               ANIMACIÓN DE TARJETA
            ========================== */

            setTimeout(() => {

                card.style.transition =
                    "opacity .5s ease, transform .5s ease";

                card.style.opacity =
                    "1";

                card.style.transform =
                    "translateY(0)";

            }, 100 + (index * 120));


            /* =========================
               OBSERVAR TARJETA
            ========================== */

            observer.observe(card);


            /* =========================
               BOTÓN CURSO
            ========================== */

            const button =
                card.querySelector(
                    ".continue-button"
                );


            if (button) {

                button.addEventListener(
                    "click",
                    () => {

                        openCourse(course.id);

                    }
                );

            }

        }
    );

}


/* =========================
   ABRIR CURSO
========================= */

function openCourse(id) {

    window.location.href =
        `curso.html?id=${id}`;

}


/* =========================
   CERRAR SESIÓN
========================= */

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            /*
                Ir a la pantalla
                de confirmación.
            */

            window.location.href =
                "cerrar sesion.html";

        }
    );

}


/* =========================
   INICIAR DASHBOARD
========================= */

updateSummary();

renderCourses();
