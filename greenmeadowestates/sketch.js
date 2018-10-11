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
  console.log(state);
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
  } else if (state === 3) {
    plot2();
  } else if (state === 4) {
    shop();
  } else {
    //extras
  }
}

//Creates main home page that opens up when game is started
function homeScreen() {
  image(startscreenbackground, 0, 0, windowWidth, windowHeight);
  image(logo, 0, 0, windowWidth, windowWidth);
  startButton();
  //shopButton();
  //settingsButton();
}

//START MENU BUTTONS

//Creates start button that is clickable and brings you to farm plot 1
function startButton() {
  fill(34, 161, 183);
  strokeWeight(windowWidth/300);
  stroke(255);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, windowWidth/6, windowHeight/10, 45);
  fill(0);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(windowWidth/27);
  text("START", windowWidth/2, windowHeight/2);
}

//Creates clickable button that opens up in app purchases
function shopButton() {
  image(shopbutton, windowWidth/2, windowHeight/2, 500, 500);
  // fill(34, 161, 183);
  // ellipse(windowWidth/2, windowHeight/1.8, windowWidth/15, windowWidth/15)

}

//Creates clikcable button that opens up differnt settings (game volume settings, idea how to play)
function settingsButton() {
  image(settingsbutton, windowWidth/2, windowHeight/2, windowWidth/15, windowWidth/15)
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
  textAlign(CENTER);
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

//Changes states with arrow keys
function stateChange() {
  if (state > 1 && keyIsPressed && keyCode === LEFT_ARROW) {
    state -= 1;
    keyIsPressed = false;
    console.log(state);
  } else if (state < 4 && keyIsPressed && keyCode === RIGHT_ARROW) {
    state += 1;
    keyIsPressed = false;
    console.log(state);
  }
}
