window.addEventListener("load", function () {
    /*--------------------- page loader-----------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function () {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
    /*------------------animation on scroll------------------------*/
    AOS.init();

});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "App Developer", " Web Developer", "Technophile"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Learner", "App Developer", " Web Developer", "Technophile"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    });
    // animation on scroll
    AOS.init();
});
/*-----------------close nav when clicking on a  nav item------------*/
document.addEventListener("click", function (e) {
    if (e.target.closest(".menu")) {
        toggleNav();
    }
});