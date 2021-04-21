let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let dots = Array.from(document.querySelectorAll('.dot'));
let slideContainer = document.querySelector('.slide-container');
let activeCount = 0;
let slideNumber = dots.length;

arrowLeft.addEventListener('click', () => {
	arrowLeft.style.opacity = '0.3';
	prevSlide();
	setTimeout(() => {
		arrowLeft.style.opacity = '1';
	}, 400);
});

arrowRight.addEventListener('click', () => {
	arrowRight.style.opacity = '0.3';
	nextSlide();
	setTimeout(() => {
		arrowRight.style.opacity = '1';
	}, 400);
});

const prevSlide = () => {
	if (activeCount == 0) {
		activeCount = dots.length - 1;
		getDotId(activeCount);
		slideContainer.style.transform = 'translateX(-75%)';
		slideContainer.style.transition = 'none';
	} else {
		let x = -(activeCount - 1) * 25;
		slideContainer.style.transform = `translateX(${x}%)`;
		activeCount--;
		getDotId(activeCount);
		slideContainer.style.transition = 'all 0.5s ease-in-out';
	}
};

const nextSlide = () => {
	if (activeCount == slideNumber - 1) {
		activeCount = 0;
		getDotId(activeCount);
		slideContainer.style.transform = 'translateX(0)';
		slideContainer.style.transition = 'none';
	} else {
		let x = -(activeCount + 1) * 25;
		slideContainer.style.transform = `translateX(${x}%)`;
		activeCount++;
		getDotId(activeCount);
		slideContainer.style.transition = 'all 0.5s ease-in-out';
	}
};

const getDotId = (key) => {
	dots.forEach((item) => item.classList.remove('active'));
	dots[key].classList.add('active');
};

const changeSlideAnimation = (key) => {
	const diff = key - slideNumber;
	const x = -slideNumber * 25 - diff * 25;
	slideContainer.style.transform = `translateX(${x}%)`;
	slideContainer.style.transition = 'all 0.5s ease-in-out';
	activeCount = key;
	getDotId(key);
};