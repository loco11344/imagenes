document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.section-slide');
    const arrows = document.querySelectorAll('.arrow');
    let currentSlide = 0;

    // Initially show the first slide
    slides[currentSlide].classList.add('active-slide');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const direction = arrow.dataset.direction;

            // Remove active class from current slide
            slides[currentSlide].classList.remove('active-slide');

            // Determine the next slide
            if (direction === 'next') {
                currentSlide = (currentSlide + 1) % slides.length;
            } else if (direction === 'prev') {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            }

            // Add active class to the new current slide
            slides[currentSlide].classList.add('active-slide');

            // You could add more complex animations here if needed
            // For a simple fade or slide, CSS transitions on `transform` are good
        });
    });
});