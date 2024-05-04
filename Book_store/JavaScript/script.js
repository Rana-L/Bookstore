const menuBar = document.querySelector('#menu-bar');
const menuDropdown = document.querySelector('#mobile-dropdown');

menuBar.onclick = function() {
  menuDropdown.classList.toggle('mobile-active');
}