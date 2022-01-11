const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");
// For later
const featureList = document.querySelector(".feature-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
});



