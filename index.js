let container = document.querySelector("body");
let head = document.querySelector(".head");
let hamburgerButton = document.querySelector(".hamburger-button");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector(".nav").classList.add("active");
  } else {
    document.querySelector(".nav").classList.remove("active");
  }
}
let flag = true;

hamburgerButton.addEventListener("click", () => {
  if (flag) {
    document.querySelector(".links").classList.add("active");
    flag = false;
  } else {
    document.querySelector(".links").classList.remove("active");
    flag = true;
  }
});
