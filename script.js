const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.dot')];

let current = 0;
let timer;

function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === current);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
    });
}

function startSlider() {
    timer = setInterval(() => {
        showSlide(current + 1);
    }, 5000);
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        clearInterval(timer);
        showSlide(i);
        startSlider();
    });
});

startSlider();

const form = document.getElementById('registrationForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', function () {
    msg.textContent = 'آپ کی درخواست جمع ہو رہی ہے...';
});
