"use strict";

let showBtns = document.querySelectorAll(".show-modal");
let closeBtn = document.querySelector(".close");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
