(function () {
  "use strict";

  document.querySelector("#navbarSideCollapse").addEventListener("click", function () {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  });
})();

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
