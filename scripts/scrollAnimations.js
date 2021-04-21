const ul = document.querySelector('body ul');
const healthInfo = document.querySelector('.health-info');
const healthImage = document.querySelector('.health-image');
const servicesHeader = document.querySelector('.services-header');
const servicesCards = document.querySelector('.services-cards');
const sectionOneWrapperImg = document.querySelector('.section-one-wrapper img');
const sectionOne = document.querySelector(".section-one");
const sectionThreeimg = document.querySelector('.section-three-image');
const sectionThree = document.querySelector(".section-three");
const cardsArticle = document.querySelector('.cards-article');
const cardsContainer = document.querySelector('.cards-container');
const options = {
	rootMargin:"20px"
}
const handleIntersection = (entries) => {
	entries.map((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(ul);
observer.observe(healthInfo);
observer.observe(healthImage);
observer.observe(servicesHeader);
observer.observe(servicesCards);
observer.observe(sectionOneWrapperImg);
observer.observe(sectionOne);
observer.observe(sectionThree);
observer.observe(sectionThreeimg);
observer.observe(cardsArticle);
observer.observe(cardsContainer);