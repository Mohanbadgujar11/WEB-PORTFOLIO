document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');

    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 725) {
            navLinks.style.display = 'flex';
        }
        else {
            navLinks.style.display = ''; // Let CSS handle it
        }
    });
})