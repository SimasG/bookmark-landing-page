const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul-styling");
// For later maybe
const featureList = document.querySelector(".feature-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
});



