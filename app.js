const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul-styling");
const logo = document.querySelector(".logo")
const socialMediaIcon = document.querySelector(".social-media-icon-container-header");

const tabs = document.querySelectorAll("[data-tab-target");

// For later maybe
const featureList = document.querySelector(".feature-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
    socialMediaIcon.classList.toggle("active");

    // Logo color toggle
    if (navUl.classList.contains("active")){
        logo.src = "images/logo-bookmark-white.svg";
    }else{
        logo.src = "images/logo-bookmark.svg";
    }
});

// Loop for Tabs
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Don't understand how are "dataset" and "tabTarget" related to anything
        const target = document.querySelector(tab.dataset.tabTarget)
    })
})



