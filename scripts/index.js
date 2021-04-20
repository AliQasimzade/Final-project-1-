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
let footer = document.querySelector('ul');

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
	window.scroll({top:2500, behavior:'smooth'})
	console.log(ourServices.scroll);
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
});

apps.addEventListener('click', (event) => {
	event.preventDefault();
	sectionThreeWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
});

testimonials.addEventListener('click', (event) => {
	event.preventDefault();
	cardsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
});

aboutUs.addEventListener('click', (event) => {
	event.preventDefault();
	footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
	hamburgerButton.classList.remove('active');
	nav.classList.remove('active');
});