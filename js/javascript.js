$(document).ready(function () {
  const sitesBtns = document.querySelectorAll(".slide-toggle");
  $(".slide-toggle").click(function (args) {
    sitesBtns.forEach((btnElement) => {
      const container = btnElement.querySelector(".notification-container");

      if (btnElement === args.currentTarget) {
        container.classList.toggle("ativo");
      } else if (container.classList.contains("ativo")) {
        container.classList.remove("ativo");
      }
    });
  });
});
