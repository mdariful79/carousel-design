const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const paginationDots = document.querySelectorAll('.pagination span');

let currentIndex = 0;
const visibleCards = 1; 


const updateCarousel = () => {
    const offset = currentIndex * -300; 
    track.style.transform = `translateX(${offset}px)`;

    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}, 5000); 
