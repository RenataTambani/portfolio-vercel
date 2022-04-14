// function init() {
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
// init();

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
