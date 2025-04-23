document.addEventListener('DOMContentLoaded', function() {
    const thirdSwiper = new Swiper('.thirdSlider-swiper', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.thirdSlider-next',
            prevEl: '.thirdSlider-prev',
        },
        watchSlidesProgress: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        // Настройки по умолчанию для десктопа
        spaceBetween: 7,
        // Брейкпоинты для мобильной версии
        breakpoints: {
            // когда ширина окна <= 767px
            1068: {
                spaceBetween: 11
            }
        }
    });
});