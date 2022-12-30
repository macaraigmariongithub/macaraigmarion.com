let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}



//header background//

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//scroll top//

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});



//scroll reveal animations
//common reveal options to create reveal animations
ScrollReveal({
    // reset: true,
    distance: '50px',
    duration: 2500,
    delay: 100 
 });


 //target elements, and specify options to create reveal animations
 ScrollReveal().reveal('.home .home-img, .home-text p, .footer p, .heading', { delay: 500, origin:'left'});
 ScrollReveal().reveal('.home .home-text h3, .home-text h2, .about-text p, .btn', { delay: 600, origin:'right'});
 ScrollReveal().reveal('.services, .services-box, .btn', { delay: 700, origin:'bottom'});
 ScrollReveal().reveal('.social i, .contact-left li', { delay: 500, origin:'left', interval: 200 });
 ScrollReveal().reveal('.project, .project-box span, .project-box, .contact-form', { delay: 500, origin:'right', interval: 200 });
 ScrollReveal().reveal('.portfolio, .portfolio-box, .contact-form input', { delay: 700, origin:'left'});
 ScrollReveal().reveal('footer, .footer-links', { delay: 500, origin:'top', interval: 200 });




