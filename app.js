const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul-styling");
const logo = document.querySelector(".logo")

// For later maybe
const featureList = document.querySelector(".feature-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");

    // Logo color toggle
    if (navUl.classList.contains("active")){
        logo.src = "images/logo-bookmark-white.svg";
    }else{
        logo.src = "images/logo-bookmark.svg";
    }
});



