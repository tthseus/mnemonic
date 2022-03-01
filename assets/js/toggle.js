 /* event click navbar burger icon */
 $(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
    /* end click navbar burger icon */

    /* back-2-top */
    $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.back-to-top').fadeIn('slow');
    if (scrolled < 200) $('.back-to-top').fadeOut('slow');
    });

    $('.back-to-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
    });
    });
    /* end back-2-top */
        
    /* dark theme toggle */


    const themeToggle = document.querySelector("#toggle-dark");

    const currentTheme = localStorage.getItem("theme");
    var pageTheme = document.body;

    let isDark = true

    if (currentTheme == "dark") {
    pageTheme.classList.add("dark-theme");
    themeToggle.innerText="🌔";
    } else {
        themeToggle.innerText = "🌘"
    }

    function themeMode() {
        isDark = !isDark;
        isDark ? themeToggle.innerText = "🌘" : themeToggle.innerText = "🌔";
        pageTheme.classList.toggle("dark-theme");

        let theme = "light";
        if (pageTheme.classList.contains("dark-theme")) {
        theme = "dark";
        }
        localStorage.setItem("theme", theme);
    }

    themeToggle.addEventListener("click", themeMode);
    /* end dark mode toggle */