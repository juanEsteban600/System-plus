const confirmLogout = document.getElementById("confirmLogout");
const cancelLogout = document.getElementById("cancelLogout");

// Confirmar cierre de sesión
confirmLogout.addEventListener("click", () => {

    // Limpiar información temporal de la sesión
    sessionStorage.clear();

    // Redirigir al inicio de sesión
    window.location.href = "inicio-sesion.html";
});

// Cancelar y volver al dashboard
cancelLogout.addEventListener("click", () => {
    window.location.href = "dashboard.html";
});
