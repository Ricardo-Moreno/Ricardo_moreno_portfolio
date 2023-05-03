// Seleccionar el header
// const header = document.querySelector("header");

// // Agregar un event listener al hacer scroll
// window.addEventListener("scroll", () => {
//   // Comprobar si la posición de la ventana es mayor que la altura del header
//   if (window.scrollY > header.offsetHeight) {
//     // Agregar la clase "scroll-header" al header
//     header.classList.add("scroll-header");
//   } else {
//     // Eliminar la clase "scroll-header" del header
//     header.classList.remove("scroll-header");
//   }
// });

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    document.querySelector("header").classList.add("scroll-header");
    const titleNames = document.getElementsByClassName("header_2");
    for (let i = 0; i < titleNames.length; i++) {
      titleNames[i].classList.add("titleNameNone");
      titleNames[i].classList.remove("header_2");
    }
    const ulNav = document.getElementsByClassName("ul_nav");
    console.log(ulNav);
    for (let i = 0; i < ulNav.length; i++) {
      ulNav[i].classList.add("ul_li_scroll");
      ulNav[i].classList.remove("ul_nav");
    }
    const nav = document.querySelector("nav");
    nav.classList.add("nav_scroll");
    nav.classList.remove("nav");
  } else {
    document.querySelector("header").classList.remove("scroll-header");
    const titleNames = document.getElementsByClassName("titleNameNone");
    for (let i = 0; i < titleNames.length; i++) {
      titleNames[i].classList.add("header_2");
      titleNames[i].classList.remove("titleNameNone");
    }
    const ulNav = document.getElementsByClassName("ul_nav");
    for (let i = 0; i < ulNav.length; i++) {
      ulNav[i].classList.add("ul_nav");
      ulNav[i].classList.remove("ul_li_scroll");
    }
    const nav = document.querySelector("nav");
    nav.classList.add("nav_scroll");
    nav.classList.remove("nav");
  }
});

// document.addEventListener("scroll", function () {
//   var scrollPosition = window.scrollY;

//   if (scrollPosition > 100) {
//     document.querySelector("header").classList.add("scroll-header");
//     const titleName = document.getElementsByClassName("header_2");
//     titleName.classList.add("titleNameNone");
//     titleName.classList.remove("header_2");
// const h2 = document.querySelector("h2");
// h2.classList.add("h2-scroll");
// h2.classList.remove("h2");
// const ul = document.querySelector("ul");
// ul.classList.add("ul_li_scroll");
// ul.classList.remove("ul");
// } else {
//   document.querySelector("header").classList.remove("scroll-header");
//   const titleName = document.getElementsByClassName("header_2");
//   titleName.classList.add("header_2");
//   titleName.classList.remove("titleNameNone");
// const h2 = document.querySelector("h2");
// h2.classList.add("h2");
// h2.classList.remove("h2-scroll");
// const ul = document.querySelector("ul");
// ul.classList.add("ul");
// ul.classList.remove("ul_li_scroll");
//   }
// });

const links = document.querySelectorAll(".proyectos a,.a_card");

links.forEach((link) => {
  link.setAttribute("target", "_blank");
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.hash);
    const navHeight = document.querySelector("header").offsetHeight + 40;
    const offset =
      target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  });
});
