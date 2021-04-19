let hamburgerButton = document.querySelector('.hamburger-button');
let headerEl = document.querySelector('body header');
let nav = document.querySelector('body nav');
let findDoctor = document.querySelector('.find-doctor');
let apps = document.querySelector('.apps');
let testimonials = document.querySelector('.testimonials');
let aboutUs = document.querySelector('.about-us');
let ourServices = document.querySelector('.our-services');
let sectionThreeWrapper = document.querySelector('.section-three-wrapper');
let cardsWrapper = document.querySelector('.cards-wrapper');
let footer = document.querySelector('.view');

window.addEventListener('scroll', () => {
	headerAnimation();
});

const headerAnimation = () => {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		headerEl.classList.add('active');
	} else {
		headerEl.classList.remove('active');
	}
};

hamburgerButton.addEventListener('click', () => {
	hamburgerButton.classList.toggle('active');
	nav.classList.toggle('active');
});

findDoctor.addEventListener('click', (event) => {
	event.preventDefault();
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
	ourServices.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

apps.addEventListener('click', (event) => {
	event.preventDefault();
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
	sectionThreeWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

testimonials.addEventListener('click', (event) => {
	event.preventDefault();
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
	cardsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

aboutUs.addEventListener('click', (event) => {
	event.preventDefault();
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
	footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
});