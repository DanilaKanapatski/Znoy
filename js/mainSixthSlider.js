document.addEventListener('DOMContentLoaded', function() {
    const thirdSwiper = new Swiper('.sixthSlider-swiper', {
        slidesPerView: 'auto',  // Автоматически показывает столько слайдов, сколько влезает
        spaceBetween: 11,       // Отступ между слайдами 11px (теперь через spaceBetween)
        freeMode: true,         // Плавное перелистывание без привязки к слайдам
        navigation: {
            nextEl: '.sixthSlider-next',
            prevEl: '.sixthSlider-prev',
        },
        watchSlidesProgress: true,
        // Дополнительно, чтобы слайды не обрезались
        slidesOffsetBefore: 0,  // Убираем отступы по бокам контейнера
        slidesOffsetAfter: 0,
    });
});