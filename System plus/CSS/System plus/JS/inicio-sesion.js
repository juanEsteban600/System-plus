/* =====================================================
   Q10 - FASE 2
   SISTEMA DE INICIO DE SESIÓN
   ===================================================== */


/* =====================================================
   DATOS TEMPORALES
   ===================================================== */

/*
   Estos datos son solamente para realizar pruebas.

   IMPORTANTE:

   En una aplicación real NO debemos guardar
   contraseñas directamente en JavaScript.

   Cuando agreguemos backend y base de datos,
   estos datos serán reemplazados por una
   petición a nuestra API.
*/

const usuarioDemo = {

    usuario: "1234",

    password: "1234",

    nombre: "Estudiante Demo",

    rol: "estudiante"

};



/* =====================================================
   ELEMENTOS DEL HTML
   ===================================================== */

const loginForm =
    document.getElementById("loginForm");

const usuarioInput =
    document.getElementById("usuario");

const passwordInput =
    document.getElementById("password");

const loginMessage =
    document.getElementById("loginMessage");

const loginButton =
    document.getElementById("loginButton");

const togglePassword =
    document.getElementById("togglePassword");



/* =====================================================
   MOSTRAR / OCULTAR CONTRASEÑA
   ===================================================== */

togglePassword.addEventListener("click", () => {


    /*
       Comprobamos si la contraseña está oculta.
    */

    if (passwordInput.type === "password") {


        /* Mostramos la contraseña */

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

        togglePassword.setAttribute(
            "aria-label",
            "Ocultar contraseña"
        );


    } else {


        /* Ocultamos nuevamente la contraseña */

        passwordInput.type = "password";

        togglePassword.textContent = "👁️";

        togglePassword.setAttribute(
            "aria-label",
            "Mostrar contraseña"
        );

    }

});



/* =====================================================
   PROCESAMIENTO DEL LOGIN
   ===================================================== */

loginForm.addEventListener("submit", (evento) => {


    /*
       Evitamos que el formulario recargue
       completamente la página.
    */

    evento.preventDefault();


    /*
       Obtenemos los datos introducidos.
    */

    const usuario =
        usuarioInput.value.trim();

    const password =
        passwordInput.value;


    /*
       Limpiamos el mensaje anterior.
    */

    loginMessage.textContent = "";


    /*
       Desactivamos el botón mientras
       procesamos la solicitud.
    */

    loginButton.disabled = true;

    loginButton.textContent =
        "Verificando...";


    /*
       Simulamos el tiempo de respuesta
       que posteriormente podría tener
       una API.
    */

    setTimeout(() => {


        /*
           Comparamos las credenciales.
        */

        const credencialesCorrectas =
            usuario === usuarioDemo.usuario &&
            password === usuarioDemo.password;



        /* =================================================
           LOGIN CORRECTO
           ================================================= */

        if (credencialesCorrectas) {


            /*
               Guardamos una sesión temporal.

               sessionStorage se elimina cuando
               termina la sesión del navegador.
            */

            sessionStorage.setItem(
                "q10Sesion",
                "activa"
            );


            /*
               Guardamos el usuario.

               En el futuro este valor vendrá
               desde nuestra API.
            */

            sessionStorage.setItem(
                "q10Usuario",
                usuarioDemo.usuario
            );


            /*
               Mostramos confirmación.
            */

            loginMessage.textContent =
                "Inicio de sesión correcto.";

            loginMessage.style.color =
                "#16a34a";


            /*
               En la Fase 3 enviaremos al
               usuario al panel principal.
            */

            setTimeout(() => {

                window.location.href = 
                "/HTML/dashboard.html";

            }, 700);


        }


        /* =================================================
           LOGIN INCORRECTO
           ================================================= */

        else {


            loginMessage.textContent =
                "Usuario o contraseña incorrectos.";

            loginMessage.style.color =
                "#dc2626";


            /*
               Volvemos a activar el botón.
            */

            loginButton.disabled = false;

            loginButton.textContent =
                "Iniciar sesión";

        }

    }, 500);

});