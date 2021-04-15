let container = document.querySelector("body");
let hamburgerButton = document.querySelector(".hamburger-button");
let arrowLeft = document.querySelector(".arrow-left");
let arrowLeftPath = document.querySelector(".arrow-left-path");
let arrowRight = document.querySelector(".arrow-right");
let arrowRightPath = document.querySelector(".arrow-right-path");
let dots = document.querySelectorAll(".dot");
let slidesEl = document.querySelectorAll(".slider");
let sliderContainer = document.querySelector(".slider-container");
let activeCount = 0;
let slideNumber = 4;
let flag = true;

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector("body header").classList.add("active");
  } else {
    document.querySelector("body header").classList.remove("active");
  }
}

hamburgerButton.addEventListener("click", () => {
  if (flag) {
    document.querySelector("body nav").classList.add("active");
    flag = false;
  } else {
    document.querySelector("body nav").classList.remove("active");
    flag = true;
  }
});

arrowLeft.addEventListener("click", () => {
  arrowLeftPath.style.opacity = "0.3";
  if(activeCount == 0){
    activeCount = 3
    sliderContainer.style.transform = "translateX(-75%)"
    sliderContainer.style.transition = "none"
    
  }else {
   let how = -(activeCount - 1) * 25;
   sliderContainer.style.transform = `translateX(${how}%)`;
   activeCount--;
   sliderContainer.style.transition = "all 0.5s ease-in-out"
  }
  setTimeout(() => {
    arrowLeftPath.style.opacity = "1";
  }, 400);
});

arrowRight.addEventListener("click", () => {
  arrowRightPath.style.opacity = "0.3";
  if(activeCount < slideNumber-1){
    let how = -(activeCount + 1) * 25;
    sliderContainer.style.transform = `translateX(${how}%)`
    activeCount++;
    sliderContainer.style.transition = "all 0.5s ease-in-out"
    
  }else {
    activeCount = 0;
  
    sliderContainer.style.transform = "translateX(0)"
    sliderContainer.style.transition = "none"
  }
  setTimeout(() => {
    arrowRightPath.style.opacity = "1";
  }, 400);
});
