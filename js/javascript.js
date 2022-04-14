//
//   $(document).ready(function () {
//     const sitesBtns = document.querySelectorAll(".slide-toggle");

//     $(".slide-toggle").click(function (args) {
//       sitesBtns.forEach((btnElement) => {
//         const container = btnElement.querySelector(".notification-container");
//         console.log(container);

//         if (btnElement === args.currentTarget) {
//           container.classList.toggle("ativo");
//         } else if (container.classList.contains("ativo")) {
//           container.classList.remove("ativo");
//         }
//       });
//     });
//   });
// }
//

function initCelular() {
  const celulares = document.querySelectorAll(".zoom");

  function animaCelular() {
    celulares.forEach((celular) => {
      if (celular === this) {
        this.classList.toggle("ativo");
        this.firstElementChild.classList.toggle("ativo");
      } else {
        celular.classList.remove("ativo");
        celular.firstElementChild.classList.remove("ativo");
      }
    });
  }

  celulares.forEach((celular) => {
    celular.addEventListener("click", animaCelular);
  });
}
initCelular();

const sections = document.querySelectorAll(".scroll");
const windowMetade = window.innerHeight * 0.7;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;

    if (sectionTop < 0) {
      section.classList.add("ativo2");
    }
  });
}

window.addEventListener("scroll", animaScroll);

document.addEventListener("click", animaCelular);
