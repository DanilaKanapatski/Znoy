document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header-mob');

    menuToggle.addEventListener('click', function () {
        header.classList.toggle('menu-open');
    });
});
