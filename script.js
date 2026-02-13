// Variáveis
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

// Função para exibir o slide correto
function showSlide(index) {
    const container = document.querySelector('.carrossel-container');
    const slideWidth = slides[0].clientWidth;
    container.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Navegação automática
setInterval(nextSlide, 4000);

// Adicionar os eventos para navegação manual
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

