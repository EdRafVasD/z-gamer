let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  let navBar = document.querySelector(".menu");
  navBar.classList.toggle("active");
};