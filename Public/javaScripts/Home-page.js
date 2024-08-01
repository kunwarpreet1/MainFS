    // scripts.js
    let slideIndex = 0;

    function moveSlide(n) {
        const slides = document.querySelectorAll('.carousel-slide');
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        const offset = -slideIndex * 100;
        document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
    }
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('r1').addEventListener('click', () => {
        window.location.href = 'https://news.un.org/en/story/2021/09/1101532';
    });
    document.getElementById('r2').addEventListener('click', () => {
        window.location.href = 'https://timesofagriculture.in/food-wastage-in-india-farm-to-bin/#:~:text=According%20to%20the%20UNEP%E2%80%99s%20%28United%20Nations%20Environment%20Programme%29,household%20wastage%20of%20food%20only%20followed%20by%20China.';
    });
    document.getElementById('r3').addEventListener('click', () => {
        window.location.href = 'https://sharefood.eatrightindia.gov.in/';
    });
});