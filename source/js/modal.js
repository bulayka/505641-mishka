var link = document.querySelector(".modal-open");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var bodyr = document.querySelector("body");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  bodyr.classList.add("body-opacity");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  bodyr.classList.remove("body-opacity");
});
