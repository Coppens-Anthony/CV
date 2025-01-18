document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const header = document.getElementById('header');
    const overlay = document.querySelector('.overlay');

    window.addEventListener('scroll', () => {
        const headerHeight = header.getBoundingClientRect().height;
        if (window.scrollY > headerHeight && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });

    overlay.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});