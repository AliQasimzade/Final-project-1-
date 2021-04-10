let container = document.querySelector("body");
let head = document.querySelector(".head");
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav").classList.add("active");
  } else {
    document.querySelector(".nav").classList.remove("active");
  }
}
