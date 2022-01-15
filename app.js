const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul-styling");
const logo = document.querySelector(".logo")
const socialMediaIcon = document.querySelector(".social-media-icon-container-header");

// const tabs = document.querySelectorAll("[data-tab-target]" + "[data-tab-underline]");
const tabs = document.querySelectorAll("[data-tab-target], [data-tab-underline]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const tabsUnderline = document.querySelectorAll("[data-tab-underline-child]");

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
        // Don't understand how are "dataset" and "tabTarget" related to anything.
        // "dataset" is a set property used to get the data attribute in HTML
        // "tabTarget" is a camelCase version of "tab-target" in HTML
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

        // ATTEMPT 1
        // const underline = document.querySelector(tab.dataset.tabUnderline)
        // tabsUnderline.forEach(tabUnderline => {
        //     tabUnderline.classList.remove("active")
        // })
        // underline.classList.add("active")
        
        // ATTEMPT 2
        // tabsUnderline.forEach(tabUnderline => {
        //     tabUnderline.classList.remove("active")
        // })

        // tabUnderline.classList.add("active")


        // TRY AGAIN TOMORROW

        tab.classList.add("active")
        target.classList.add("active")
        underline.classList.add("active")
    })
})