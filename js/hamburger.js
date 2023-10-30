// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Menutup form Hamburger Mobile ketika area di luar form diklik
document.addEventListener('click', function (event) {
    const isClickInsideHamburger = hamburger.contains(event.target);
    const isClickInsideNavMenu = navMenu.contains(event.target);

    if (!isClickInsideHamburger && !isClickInsideNavMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});