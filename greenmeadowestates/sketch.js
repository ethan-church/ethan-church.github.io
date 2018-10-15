// Green Meadows Estate
// Ethan Church
// September 27, 2018
//
// Idea of the game is to be a farmer where you have differnt places (idea based off of the papa's freezeria you can be in the ...The Shop, Farm Plot, The Barn, etc.
/*
The mouse clicking will opperate the differnt menu screens, kinda like in papa's freezeria
For now just starts in the farm with simplified controls like cutting crops, etc.
Later build on menu screen and creating own chatecter, etc.
*/
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let theWidth, theHeight;
let money, moneyPlus;

function preload() {
  menu = loadImage("assets/startscreen.png");
  settingsbutton = loadImage("assets/settingsbutton.png");
  shopbutton = loadImage("assets/shopbutton.png");
  startbutton = loadImage("assets/startbutton.png");
  startscreenbackground = loadImage("assets/startscreenbackground.png");
  logo = loadImage("assets/greenmeadowsestatelogo.png");
  barn1 = loadImage("assets/barn1.jpg");
}

function setup() {
  theWidth = windowWidth;
  theHeight = (9 / 16) * windowWidth;
  createCanvas(theWidth, theHeight);
  state = 1;
  money = 0;
  moneyPlus = 1;
}

function draw() {
  determineState();
  stateChange();
}

//Determines exactly which menu screen the player is in.
function determineState() {
  if (state === 1) {
    homeScreen();
  } else if (state === 2) {
    plot1();
    text("$" + money, theWidth/2, theHeight/5);
  } else if (state === 4) {
    plot2();
  } else if (state === 3) {
    shop();
  } else {
    //extras
  }
}

//Creates main home page that opens up when game is started
function homeScreen() {
  image(startscreenbackground, 0, 0, theWidth, theHeight);
  image(logo, 50, 30, theWidth / 3, theHeight / 3);
  startButton();
  shopButton();
  settingsButton();
}

//START MENU BUTTONS

//Creates start button that is clickable and brings you to farm plot 1
function startButton() {
  fill(34, 161, 183);
  strokeWeight(theWidth / 300);
  stroke(255);
  rectMode(CENTER);
  rect(theWidth / 2, theHeight / 2, theWidth / 6, theHeight / 10, 45);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(theWidth / 27);
  text("START", theWidth / 2, theHeight / 2);
}

//Creates clickable button that opens up in app purchases
function shopButton() {
  image(shopbutton, theWidth / 2.25, theHeight / 1.78, theWidth / 20, theWidth / 20)
  // fill(34, 161, 183);
  // ellipse(theWidth/2, theHeight/1.8, theWidth/15, theWidth/15)

}

//Creates clikcable button that opens up differnt settings (game volume settings, idea how to play)
function settingsButton() {
  image(settingsbutton, theWidth / 2, theHeight / 1.78, theWidth / 20, theWidth / 20)
}

//SHOP
function shop() {
  background(100, 0, 200);
  fill(255);
  textSize(30);
  text("Buy Upgrade?  $10", theWidth / 2, theHeight / 2);
}

//PLOT 1
function plot1() {
  image(barn1, 0, 0, theWidth, theHeight);
  fill(0);
  textAlign(CENTER);
  textSize(80);
  text("To Be Continued!");
}

//PLOT 2
function plot2() {
  background(0, 125, 0);
  fill(255);
  textSize(80);
  text("To Be Continued!", theWidth / 2., theHeight / 2);
}

//Changes states with arrow keys
function stateChange() {
  if (state > 1 && keyIsPressed && keyCode === LEFT_ARROW) {
    state -= 1;
    keyIsPressed = false;
  } else if (state < 4 && keyIsPressed && keyCode === RIGHT_ARROW) {
    state += 1;
    keyIsPressed = false;
  }
}

function mouseClicked(){
  if (state === 2){
    money += moneyPlus;
  } else if  (state === 3 && money >= 10){
    moneyPlus += 9
  }
}
