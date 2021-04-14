let container = document.querySelector("body");
let head = document.querySelector(".head");
let hamburgerButton = document.querySelector(".hamburger-button");

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
let flag = true;

hamburgerButton.addEventListener("click", () => {
  if (flag) {
    document.querySelector("body nav").classList.add("active");
    flag = false;
  } else {
    document.querySelector("body nav").classList.remove("active");
    flag = true;
  }
});
