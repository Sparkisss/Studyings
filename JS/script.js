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

/* It's a absolutely different code */

let passangers = [ {name: 'Jane Air', paid: true},
                  {name: 'Jane Lovely', paid: false},
                  {name: 'Dr. Evel', paid: true},
                  {name: 'Jane Main', paid: true},]

function processPassangers(passangers, testFunction) {
  for(let i = 0; i < passangers.length; i++) {
    if(testFunction(passangers[i])) {
      return false;
    }
  }
  return true;
}

function noFlyList(passangers) {
  return (passangers.name === 'Dr. Evel');
}

function checkNoPaid (passangers) {
  return (!passangers.paid);
}