document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.firstSliderSwiper', {
        slidesPerView: 'auto', // Автоматическая ширина
        spaceBetween: 0, // Отступы уже заданы в CSS
        centeredSlides: false,
        loop: false, // Отключаем бесконечный цикл
        navigation: {
            nextEl: '.firstSlider-next',
            prevEl: '.firstSlider-prev',
        },
        on: {
            init: updateButtonStyles,
            slideChange: updateButtonStyles
        }
    });

    function updateButtonStyles() {
        const prevBtn = document.querySelector('.firstSlider-prev');
        const nextBtn = document.querySelector('.firstSlider-next');
        const prevArrow = prevBtn.querySelector('path');
        const nextArrow = nextBtn.querySelector('path');

        // Стили для кнопки Prev
        if (swiper.isBeginning) {
            prevBtn.style.backgroundColor = '#f3f3f4';
            prevArrow.setAttribute('stroke', '#BEBEBE');
        } else {
            prevBtn.style.backgroundColor = '#e2e2e5';
            prevArrow.setAttribute('stroke', '#636364');
        }

        // Стили для кнопки Next
        if (swiper.isEnd) {
            nextBtn.style.backgroundColor = '#f3f3f4';
            nextArrow.setAttribute('stroke', '#BEBEBE');
        } else {
            nextBtn.style.backgroundColor = '#e2e2e5';
            nextArrow.setAttribute('stroke', '#636364');
        }
    }
});