document.addEventListener('DOMContentLoaded', function() {
    const secondSwiper = new Swiper('.fifthSlider-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 130,
        navigation: {
            nextEl: '.fifthSlider-next',
            prevEl: '.fifthSlider-prev',
        },
    });
});