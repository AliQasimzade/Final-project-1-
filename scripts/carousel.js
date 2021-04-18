let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let dots = Array.from(document.querySelectorAll('.dot'));
let sliderContainer = document.querySelector('.slider-container');
let activeCount = 0;
let slideNumber = dots.length;

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
	arrowLeft.style.opacity = '0.3';
	prevSlide();
	setTimeout(() => {
		arrowLeft.style.opacity = '1';
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
	arrowRight.style.opacity = '0.3';
	nextSlide();
	setTimeout(() => {
		arrowRight.style.opacity = '1';
	}, 400);
});
const getDotId = (key) => {
	dots.forEach((item) => item.classList.remove('active'));
	dots[key].classList.add('active');
};

const changeSlideAnimation = (key) => {
	const diff = key - slideNumber;
	const x = -slideNumber * 25 - diff * 25;
	sliderContainer.style.transform = `translateX(${x}%)`;
	sliderContainer.style.transition = 'all 0.5s ease-in-out';
	activeCount = key;
	getDotId(key);
};