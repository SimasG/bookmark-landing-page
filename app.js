// Header
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul-styling");
const logo = document.querySelector(".logo")
const socialMediaIcon = document.querySelector(".social-media-icon-container-header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
    socialMediaIcon.classList.toggle("active");

    if (navUl.classList.contains("active")){
        logo.src = "images/logo-bookmark-white.svg";
    }else{
        logo.src = "images/logo-bookmark.svg";
    }
});

// TABS
const tabs = document.querySelectorAll("[data-tab-target], [data-tab-underline]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const tabsUnderline = document.querySelectorAll("[data-tab-underline-child]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Don't understand how are "dataset" and "tabTarget" related to anything.
        // "dataset" is a set property used to get the data attribute in HTML
        // "tabTarget" is a camelCase version of "tab-target" in HTML

        // These lines are supposed to connect tab-target with tab-content and tab-underline with tab-underline-child.
        // I don't understand the connection though.
        const target = document.querySelector(tab.dataset.tabTarget)
        const underline = document.querySelector(tab.dataset.tabUnderline)

        tabContents.forEach(tabContent => { 
            tabContent.classList.remove("active")
        })

        tabsUnderline.forEach(tabUnderlineChildEyo => { 
            tabUnderlineChildEyo.classList.remove("active")
        })

        tabs.forEach(tab => { 
            tab.classList.remove("active")
        })

        tab.classList.add("active")
        target.classList.add("active")
        underline.classList.add("active")
    })
})

// FAQs -> the same as Tabs. Only difference - if clicked again, the arrow should turn back and the faq answer removed
const faqs = document.querySelectorAll("[data-faq-target], [data-faq-arrow]");
const faqContents = document.querySelectorAll("[data-faq-content]");
const faqArrows = document.querySelectorAll("[data-faq-arrow-child]");


// All faq arrows
faqs.forEach(faq => {
    // Listen for the "click" for each far arrow
    faq.addEventListener("click", () => {
        // This line is supposed to connect the questions (faq-target) with answers (faq-content).
        // I don't understand the connection though.
        const faqTarget = document.querySelector(faq.dataset.faqTarget)
        // const arrow = document.getElementById("arrow")

        faqTarget.classList.toggle("active")

        // Making sure that all other arrows are "closed" once we click on a new faq
        const arrow = document.querySelector(faq.dataset.faqArrow)

        // faqArrows.forEach(faqArrow => {
        //     faqArrow.classList.remove("active")
        // })
        arrow.classList.toggle("active")
    })
})


// EMAIL VALIDATION
function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#ffffff";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Whoops, make sure it's an email";
        text.style.color = "#ffffff";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}