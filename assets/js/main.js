document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu");
    const menuNav = document.getElementById("menuNav");
    const cerrarMenu = document.getElementById("cerrarMenu");

    menuBtn.addEventListener("click", () => {
        menuNav.classList.toggle("hidden");
    });

    cerrarMenu.addEventListener("click", () => {
        menuNav.classList.add("hidden");
    });

    // Cerrar menú si se hace clic fuera
    menuNav.addEventListener("click", (e) => {
        if (e.target === menuNav) {
            menuNav.classList.add("hidden");
        }
    });
});
