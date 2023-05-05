function init() {
  // Obtener el enlace "Inicio"
  const inicioLink = document.querySelector(
    "#inicio-link, #conocimientos-link"
  );

  // Agregar un controlador de eventos al enlace
  inicioLink.addEventListener("click", function () {
    // Obtener el header
    const header = document.querySelector("header");

    // Añadir la clase "scroll-header" para contraer el header
    header.classList.add("scroll-header");

    // Obtener los elementos con la clase "header_2"
    const titleNames = document.getElementsByClassName("header_2");

    // Añadir y eliminar las clases necesarias
    for (let i = 0; i < titleNames.length; i++) {
      titleNames[i].classList.add("titleNameNone");
      titleNames[i].classList.remove("header_2");
    }

    // Obtener la barra de navegación
    const nav = document.querySelector("nav");

    // Añadir y eliminar las clases necesarias
    nav.classList.add("nav_scroll");
    nav.classList.remove("nav");
  });

  document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      document.querySelector("header").classList.add("scroll-header");
      const titleNames = document.getElementsByClassName("header_2");
      for (let i = 0; i < titleNames.length; i++) {
        titleNames[i].classList.add("titleNameNone");
        titleNames[i].classList.remove("header_2");
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
      const nav = document.querySelector("nav");
      nav.classList.add("nav_scroll");
      nav.classList.remove("nav");
    }
  });

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
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", init);
