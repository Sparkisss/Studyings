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

window.onload = function() {
  let button = document.getElementById('bake');
  button.onclick = function() {
    console.log('Time to bake the cookies');
    cookies.bake(2500);
  }
};

let cookies = {
  instructions: 'Preheat oven 350 ...',
  bake: function(time) {
    console.log('Baking the cookies.');
    setTimeout(done, time);
  }
};

function done() {
  alert('Cookies are ready, take them out to cool.');
  console.log('Cooling the cookies.');
  setTimeout(function() {
    alert('Cookies are cool, time to eat!');
  }, 1000);
}

function vaccine(dosage) {
  if(dosage > 0) {
    inject(dosage);
  }
}

function makePassword(password) {
  return function guess(passwordGuess) {
    return (passwordGuess === password);
  };
}

let tryGuess = makePassword('secret');
console.log('Guessing nope: ' + tryGuess('nope'));
console.log('Guessing secret: ' + tryGuess('secret'));

function setTimer(doneMessage, n) {
  setTimeout(function() {
    //alert(doneMessage);
  }, n);
  doneMessage = 'OUCH';
}
setTimer('Cookies are done!', 1000);

/*                           builder                             */
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function() {
    if(this.weight > 25) {
      //alert(this.name + ' says Woof!');
    }else{
      //alert(this.name + ' says woof!');
    }
  }
};
let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
let dogs = [fido, fluffy, spot];

for(let i = 0; i < dogs.length; i++) {
  dogs[i].bark();
  let size = 'small';
  if(dogs[i].weight > 10) {
    size = 'large';
  }
  console.log('Dog: ' + dogs[i].name 
            + ' is a ' + size
            + ' ' + dogs[i].breed);
}

function Coffe(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function() {
    if(this.ounces === 8) {
    return 'small';
    }else if(this.ounces === 12) {
      return 'medium';
    }else if (this.ounces === 18){
      return 'large';
    } else {
      return 'desmiss';
    }
  };
  this.getString = function() {
    return 'You have ordered a ' + this.getSize() 
          + ' ' + this.roast + ' coffee.';
  };
}

let houseBlend = new Coffe('House Blend', 12);
console.log(houseBlend.getString());
let darkRoast = new Coffe('Dark Roast', 18);
console.log(darkRoast.getString());

function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passangers = params.passangers;
  this.convertible = params.convertible;
  this.milage = params.milage;
  this.started = false;
  this.start = function() {
    this.started = true;
  };
  this.stop = function() {
    this.started = false;
  };
  this.drive = function() {
    if(this.started) {
      console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
    }else {
      console.log('Start the engine first.');
    }
  };
}

let limoParams = {make:'Webvile motors',
                  model: 'limo',
                  year: 1983,
                  color: 'black',
                  passangers: 12,
                  convertible: true,
                  milage: 21120};

let limo = new Car(limoParams);
let limoDog = new Dog('Rhapsoby in Blue', 'Poodle', 40);

let cadiParams = {
  make: 'GM',
  model: 'Cadilac',
  year: 1955,
  color: 'tan',
  passangers: 5,
  convertible: false,
  milage: 12892
};


console.log(limo.make + ' ' + limo.model + ' is a ' + typeof limo);
console.log(limoDog.name + ' is a ' + typeof limoDog);
let cadi = new Car(cadiParams);



/*
let testcar1 = new Car('Test Car one', 'Air', 2057, 'yellow', 5, false, 21);
let testcar2 = new Car('Test Car two', 'ir', 2157, 'yellow', 5, false, 91);
let testcar3 = new Car('Test Car three', 'r', 2257, 'yellow', 5, false, 121);
let testcar4 = new Car('Test Car four', 'Vr', 2357, 'yellow', 5, false, 221);

let cars = [chevy, testcar1, testcar2, testcar3, testcar4];
for(let i = 0; i < cars.length; i++) {
  cars[i].start();
  cars[i].drive();
  cars[i].drive();
  cars[i].stop();
}
*/
cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();
