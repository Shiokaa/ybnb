const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".nav-menu");

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    mobileMenu.contains(event.target) || menu.contains(event.target);

  if (!isClickInsideMenu) {
    mobileMenu.classList.remove("active");
  }
});

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
