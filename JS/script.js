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

let passangers = [ {name: 'Jane Air', paid: true, ticket: 'coach'},
                  {name: 'Jane Lovely', paid: false, ticket: 'firstclass'},
                  {name: 'Dr. Evel', paid: true, ticket: 'firstclass'},
                  {name: 'Jane Main', paid: true, ticket: 'coach'},
                  {name: 'Mr. Simpon', paid: true, ticket: 'coachplus'},
                  {name: 'Mr. Junior', paid: true, ticket: 'coachplus'},]
/*
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

let canFly = processPassangers(passangers, noFlyList);
if(!canFly){
  console.log('The plane can not take off: we have a passenger on the no-fly-list.');
}
let allPay = processPassangers(passangers, checkNoPaid);
if(!allPay) {
  console.log('There is a passenger who does not pay!')
}

function printPassenger(passanger) {
  let message = passanger.name;
  if(passanger.paid === true){
    message = message + " get paid";
  }else {
    message = message + " no paid";
  }
  console.log(message);
  return false; //it isn't important
}
processPassangers(passangers, printPassenger);
*/

function createDrinkOrder(passanger) {
  let orderFunction;
  if(passanger.ticket === 'firstclass') {
    orderFunction = function() {
      console.log('Would you like a coctail or wine?');
    }
  }else if(passanger.ticket === 'coach'){
    orderFunction = function() {
      console.log('Would you like a cola or wather?');
    }
  }else {
    orderFunction = function() {
      console.log('Would you like a cola or wather or wine?');
    }
  }
  return orderFunction;
}

function getDinnerOrderFunction(passanger) {
  let dinnerOrderFunction;
  if(passanger.ticket === 'firstclass') {
    dinnerOrderFunction = function() {
      console.log('Would you like a chicken or pasta?');
    }
  }
  if(passanger.ticket === 'coachplus') {
    dinnerOrderFunction = function() {
      console.log('Would you like a snack or cheese plate?');
    }
  }
  if(passanger.ticket === 'coach') {
    dinnerOrderFunction = function() {
      console.log('Would you like nuts or crackers?');
    }
  }
  return dinnerOrderFunction;
}

function serveCustomer(passanger) {
  let getDrinkOrderFunction = createDrinkOrder(passanger);
  let getDinnerOrderFun = getDinnerOrderFunction(passanger);
  getDrinkOrderFunction();
  getDinnerOrderFun();
}

function servePassanger(passangers) {
  for(let i = 0; i < passangers.length; i++) {
    serveCustomer(passangers[i]);
  }
}
servePassanger(passangers);

/* It's a absolutely different code yet*/

let numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
  return num2 - num1;
}
numbersArray.sort(compareNumbers);
console.log(numbersArray);

