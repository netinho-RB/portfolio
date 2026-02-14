/**
 * Gerenciador de Interface - Portfólio Neto
 */
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("mainNavbar");
    const navLinks = document.getElementById("navLinks");
    let lastScrollTop = 0;

    // 1. Função do Menu Mobile
    window.toggleMenu = () => {
        navLinks.classList.toggle("active");
    };

    // 2. Comportamento da Navbar ao Rolar
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Se o menu mobile estiver aberto, não escondemos a barra
        if (navLinks.classList.contains("active")) return;

        if (scrollTop > lastScrollTop && scrollTop > 150) {
            navbar.style.top = "-100px"; // Esconde ao descer
        } else {
            navbar.style.top = "20px";  // Mostra ao subir
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });

    // 3. UX: Fecha o menu automaticamente ao clicar em um link
    document.querySelectorAll(".navbar-links a").forEach(link => {
        link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
});