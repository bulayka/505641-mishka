var link = document.querySelectorAll(".modal-open"), i;
var popup = document.querySelector(".modal");
var opacity = document.querySelector(".body-opacity");

for (i = 0; i < link.length; ++i) {
  link[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("modal-show");
    opacity.classList.add("body-opacity1");
  })
}

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            opacity.classList.remove("body-opacity1");
        }
    }
});
