var container = document.querySelector("container");
var img = document.querySelector(".imgOverflow");
function logIn() {
    img.classList.remove("imgOverflow");
    img.classList.add("right");
}

function signUp () {
    img.classList.remove("right");
    img.classList.add("imgOverflow");
}