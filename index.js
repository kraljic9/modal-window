"use strict";

let showBtns = document.querySelectorAll(".show-modal");
let closeBtn = document.querySelector(".close");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

console.log(showBtns);

// Added eventListener to all buttons in the Node list items buttons in this case
for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Added eventListener to close button
closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Added eventListener to overlay
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Added eventListener to document
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
