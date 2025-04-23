document.addEventListener('DOMContentLoaded', function() {
    const secondSwiper = new Swiper('.secondSlider-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 70,
        navigation: {
            nextEl: '.secondSlider-next',
            prevEl: '.secondSlider-prev',
        },

        breakpoints: {
            // когда ширина окна <= 767px
            1068: {
                spaceBetween: 130
            }
        }

    });
});