// =========== Toggle menu navbar ========

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// =========== scroll sections active link ========

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // ============ sticky navbar ===========

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// ============ Remove toggle icon and navbar when clicked===========

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Footer Date
document.getElementById("current-date").innerHTML = new Date().getFullYear();
;
