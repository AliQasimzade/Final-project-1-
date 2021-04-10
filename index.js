let container = document.querySelector('body');
let head = document.querySelector('.head');
window.onscroll = function () {
	myFunction();
};

function myFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.querySelector('.nav').style.boxShadow = '0 0 10px -5px #00000070';
		document.querySelector('.nav').style.background = '#f8f9fa';
	} else {
		document.querySelector('.nav').style.boxShadow = 'none';
		document.querySelector('.nav').style.background = 'none';
	}
}
