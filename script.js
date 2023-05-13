function init() {
  const isMobile = window.innerWidth <= 850;

  const inicioLink = document.querySelector("#inicio-link");
  inicioLink.addEventListener("click", function () {
    if (!isMobile) {
      const header = document.querySelector("header");
      header.classList.add("scroll-header");

      const titleNames = document.getElementsByClassName("header_2");
      for (let i = 0; i < titleNames.length; i++) {
        titleNames[i].classList.add("titleNameNone");
        titleNames[i].classList.remove("header_2");
      }

      const nav = document.querySelector("nav");
      nav.classList.add("nav_scroll");
      nav.classList.remove("nav");
    }
  });

  const conocimientosLink = document.querySelector("#conocimientos-link");
  conocimientosLink.addEventListener("click", function () {
    if (!isMobile) {
      const header = document.querySelector("header");
      header.classList.add("scroll-header");

      const titleNames = document.getElementsByClassName("header_2");
      for (let i = 0; i < titleNames.length; i++) {
        titleNames[i].classList.add("titleNameNone");
        titleNames[i].classList.remove("header_2");
      }

      const nav = document.querySelector("nav");
      nav.classList.add("nav_scroll");
      nav.classList.remove("nav");
    }
  });

  document.addEventListener("scroll", function () {
    if (!isMobile) {
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
    }
  });

  const links = document.querySelectorAll(".proyectos a,.a_card,.a_nav");

  links.forEach((link) => {
    link.setAttribute("target", "_blank");
  });

  const navLinks = document.querySelectorAll("a_nav");

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

// // Selecciona el elemento h1
const h1 = document.querySelector("h1");

if (window.matchMedia) {
  const mediaQuery = window.matchMedia("(max-width: 844px)");
  mediaQuery.addListener(function () {
    if (mediaQuery.matches) {
      h1.textContent = "RICARDO MORENO";
    } else {
      h1.textContent = "RICARDO";
    }
  });
}
