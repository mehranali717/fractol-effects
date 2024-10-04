let testimonials = document.querySelectorAll('.testimonial');
let currentSlide = 0;

document.querySelector('.next-slide').addEventListener('click', function () {
    testimonials[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
});

document.querySelector('.prev-slide').addEventListener('click', function () {
    testimonials[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
});

// Initialize the first slide as active
testimonials[currentSlide].classList.add('active');
