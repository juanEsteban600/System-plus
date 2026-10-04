/* =====================================================
   SYSTEM PLUS
   CURSO.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       PROGRESO DEL CURSO
    ================================================= */

    const progressCircle =
        document.querySelector(".progress-circle");

    const progressText =
        document.querySelector(".progress-circle span");


    if (progressCircle && progressText) {

        const finalProgress =
            Number(
                progressCircle.dataset.progress || 48
            );

        let currentProgress = 0;


        const progressAnimation =
            setInterval(() => {

                currentProgress++;


                progressText.textContent =
                    `${currentProgress}%`;


                progressCircle.style.background =
                    `conic-gradient(
                        #ffffff ${currentProgress}%,
                        rgba(255,255,255,0.20) ${currentProgress}%
                    )`;


                if (currentProgress >= finalProgress) {

                    clearInterval(progressAnimation);

                }

            }, 25);
    }


    /* =================================================
       NÚMEROS DEL RESUMEN
    ================================================= */

    const counters =
        document.querySelectorAll(
            ".summary-info strong[data-number]"
        );


    counters.forEach((counter, index) => {

        const finalNumber =
            Number(counter.dataset.number);


        let currentNumber = 0;


        const duration = 700;

        const steps = 35;

        const increment =
            finalNumber / steps;


        setTimeout(() => {

            const animation =
                setInterval(() => {

                    currentNumber += increment;


                    if (currentNumber >= finalNumber) {

                        currentNumber =
                            finalNumber;

                        clearInterval(animation);
                    }


                    counter.textContent =
                        Math.floor(currentNumber);

                }, duration / steps);

            }, 250 + (index * 100));

    });


    /* =================================================
       ANIMACIÓN DE ANUNCIOS AL HACER SCROLL
    ================================================= */

    const announcements =
        document.querySelectorAll(
            ".announcement-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateX(0)";

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        announcements.forEach(card => {

            card.style.opacity = "0";

            card.style.transform =
                "translateX(-15px)";

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";


            observer.observe(card);

        });

    }


    console.log(
        "System Plus | Curso cargado correctamente."
    );

});