window.onload = init;
function init() {
  let image = document.getElementById("zero");
  image.onclick = showAnswer;
}
function showAnswer() {
  let image = document.getElementById("zero");
  image.src = "../EventHandler/img/2.jpg";
}