function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;

    if (slides.length === 0) return;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', initHeroSlider);
