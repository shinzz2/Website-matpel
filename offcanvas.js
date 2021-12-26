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

<script type="module">import {Toast} from 'bootstrap.esm.min.js' Array.from(document.querySelectorAll('.toast')) .forEach(toastNode => new Toast(toastNode))</script>;
