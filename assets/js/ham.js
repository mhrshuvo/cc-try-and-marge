const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".Ham_navbar");
menuIcon.addEventListener("click",() => {
 navbar.classList.toggle("change");
});