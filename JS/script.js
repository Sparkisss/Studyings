window.onload = init;
function init() {
  let images = document.getElementsByTagName("img");
  for(let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = reblur;
  }
}
function showAnswer(eventObj) {
  let image = eventObj.target;
  let name = image.id;
  name = "../EventHandler/img/" + name + ".jpg";
  image.src = name;
  //setTimeout(reblur, 2000, image);
}
function reblur(eventObj) {
  let image = eventObj.target;
  let name = image.id;
  name = "../EventHandler/img/" + name + "blur.jpg";
  image.src = name;
}