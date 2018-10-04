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

function preload() {
  menu = loadImage("assets/startscreen.png");
  settingsbutton = loadImage("assets/settingsbutton.png");
  shopbutton = loadImage("assets/shopbutton.png");
  startbutton = loadImage("assets/startbutton.png");
  startscreenbackground = loadImage("assets/startscreenbackground.png");
  logo = loadImage("assets/greenmeadowsestatelogo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
}

function draw() {
  homeScreen();
  // determineState();
  // stateChange();
  //  image(menu, 0, 0, windowWidth, windowHeight);
}

//Creates main home page that opens up when game is started
function homeScreen() {
  startScreenBackground();
  startScreenLogo();
  startButton();
  shopButton();
  settingsButton();
}

//Determines exactly which menu screen the player is in.
function determineState() {
  if (state === 1) {
    startmenu();
  } else if (state === 2) {
    shop();
  } else if (state === 3) {
    plot1();
  } else if (state === 4) {
    plot2();
  } else {
    console.log("something really weird happend!")
  }
}

//START MENU

//Creates start screen background
function startScreenBackground(){
  image(startscreenbackground, 0, 0, windowWidth, windowHeight);
}

//Adds logo to main screen
function startScreenLogo(){
  image(logo, 0, 0, windowWidth, windowHeight);
}

//Creates start button that is clickable and brings you to different pages
function startButton() {
  image(startbutton, 0, 0, windowWidth/2, windowHeight/2)
  fill(34, 161, 183);
  strokeWeight(windowWidth/300)
  stroke(255);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, windowWidth/8, windowHeight/13, 45)
  fill(0);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(windowWidth/35);
  text("Start", windowWidth/2, windowHeight/2)
}

//Creates clickable button that opens up in app purchases
function shopButton() {

}

//Creates clikcable button that opens up differnt settings (game volume settings, idea how to play)
function settingsButton() {

}

//SHOP
function shop() {
  background(100, 0, 200);
  fill(255);
  textSize(80);
  text("to be continued!", windowWidth / 2, windowHeight / 2);
}

//PLOT 1
function plot1() {
  background(255, 255, 0);
  fill(0);
  textAlign(CENTRE);
  textSize(80);
  text("to be continued!");
}

//PLOT 2
function plot2() {
  background(0, 125, 0);
  fill(255);
  textSize(80);
  text("to be continued!", windowWidth / 2., windowHeight / 2);
}

function stateChange() {
  if (keyIsPressed && keyCode === LEFT_AAROW) {
    state === 3;
  } else if (keyIsPressed && keyCode === RIGHT_ARROW) {
    state === 4;
  }
}
