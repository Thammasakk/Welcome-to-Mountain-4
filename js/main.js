/*========== SHOW MENU ==========*/
const primaryNav = document.querySelector('.nav__list');
const navToggle = document.querySelector('.nav__mobile__toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

/*========== SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__content`, {delay: 500})
sr.reveal(`.about__title`, {delay: 500})
sr.reveal(`.about__description`, {origin: 'bottom'})
sr.reveal(`.mountain__title`, {delay: 500})
sr.reveal(`.mountain__boards`, {interval: 300})
sr.reveal(`.blog__data`, {interval: 100})


