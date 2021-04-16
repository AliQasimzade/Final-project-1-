let container = document.querySelector('body');
let hamburgerButton = document.querySelector('.hamburger-button');
let arrowLeft = document.querySelector('.arrow-left');
let arrowLeftPath = document.querySelector('.arrow-left-path');
let arrowRight = document.querySelector('.arrow-right');
let arrowRightPath = document.querySelector('.arrow-right-path');
let dots = Array.from(document.querySelectorAll('.dot'));
let slideEl = document.querySelectorAll('.slider');
let sliderContainer = document.querySelector('.slider-container');
let headerEl = document.querySelector('body header');
let activeCount = 0;
let slideNumber = dots.length;
let flag = true;

window.onscroll = function () {
	myFunction();
};

function myFunction() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		headerEl.classList.add('active');
	} else {
		headerEl.classList.remove('active');
	}
}

hamburgerButton.addEventListener('click', () => {
	if (flag) {
		document.querySelector('body nav').classList.add('active');
		flag = false;
	} else {
		document.querySelector('body nav').classList.remove('active');
		flag = true;
	}
});
const prevSlide = () => {
	if (activeCount == 0) {
		activeCount = dots.length - 1;
		getDotId(activeCount);
		sliderContainer.style.transform = 'translateX(-75%)';
		sliderContainer.style.transition = 'none';
	} else {
		let how = -(activeCount - 1) * 25;
		sliderContainer.style.transform = `translateX(${how}%)`;
		activeCount--;
		getDotId(activeCount);
		sliderContainer.style.transition = 'all 0.5s ease-in-out';
	}
};
arrowLeft.addEventListener('click', () => {
	arrowLeftPath.style.opacity = '0.3';
	prevSlide();
	setTimeout(() => {
		arrowLeftPath.style.opacity = '1';
	}, 400);
});
const nextSlide = () => {
	if (activeCount == slideNumber - 1) {
		activeCount = 0;
		getDotId(activeCount);
		sliderContainer.style.transform = 'translateX(0)';
		sliderContainer.style.transition = 'none';
	} else {
		let how = -(activeCount + 1) * 25;
		sliderContainer.style.transform = `translateX(${how}%)`;
		activeCount++;
		getDotId(activeCount);
		sliderContainer.style.transition = 'all 0.5s ease-in-out';
	}
};
arrowRight.addEventListener('click', () => {
	arrowRightPath.style.opacity = '0.3';
	nextSlide();
	setTimeout(() => {
		arrowRightPath.style.opacity = '1';
	}, 400);
});
const getDotId = (key) => {
	dots.forEach((item) => item.children[0].classList.remove('active'));
	dots[key].children[0].classList.add('active');
};

const changeSlideAnimation = (key) => {
	const diff = key - slideNumber;
	const x = -slideNumber * 25 - diff * 25;
	sliderContainer.style.transform = `translateX(${x}%)`;
	sliderContainer.style.transition = 'all 0.5s ease-in-out';
	activeCount = key;
	getDotId(key);
};
