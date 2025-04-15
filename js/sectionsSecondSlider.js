document.addEventListener('DOMContentLoaded', function() {
    const secondSwiper = new Swiper('.secondSlider-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 130,
        navigation: {
            nextEl: '.secondSlider-next',
            prevEl: '.secondSlider-prev',
        },
    });
});