let body = document.querySelector("body");
let pageTitle = document.querySelector(".page-title");
let paragraphEl = document.querySelector(".paragraph");
let btnDarkMode = document.querySelector(".btn-dark-mode");
let btnLightMode = document.querySelector(".btn-light-mode");

pageTitle.innerHTML = "This text is from javascript";
paragraphEl.style.backgroundColor = "gray";

btnDarkMode.addEventListener("click", myClick);

function myClick() {
  body.setAttribute("class", "dark-mode");
}

function myClick() {
  body.setAttribute("class", "dark-mode");
}
