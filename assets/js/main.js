const navToggle = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav ul');
const yearPlaceholder = document.getElementById('year');

const updateMenuState = (expanded) => {
  navToggle.setAttribute('aria-expanded', expanded);
  navList.setAttribute('aria-hidden', String(!expanded));
};

if (navToggle && navList) {
  updateMenuState(false);

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    updateMenuState(!isExpanded);
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => updateMenuState(false));
  });
}

if (yearPlaceholder) {
  yearPlaceholder.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll('.project-card, .timeline__item, .stat').forEach((element) => {
  element.classList.add('will-animate');
  observer.observe(element);
});
