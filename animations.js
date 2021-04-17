const target = document.querySelector('body ul');
const healthInfo = document.querySelector('.health-info');
const healthImage = document.querySelector('.health-image');
const servicesHeader = document.querySelector('.services-header');
const servicesCards = document.querySelector('.services-cards');
const options = {
	rootMargin: '10px',
	
};
function handleIntersection(entries) {
	entries.map((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}

const observer = new IntersectionObserver(handleIntersection);
const observer2 = new IntersectionObserver(handleIntersection, options);
observer.observe(target);
observer.observe(healthInfo);
observer.observe(healthImage);
observer.observe(servicesHeader);
observer2.observe(servicesCards);
