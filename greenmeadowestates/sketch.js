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

function preload(){
  menu = loadImage("assets/greenmeadowsestatehomescreen.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(menu, 0, 0, );
}
/*
//Creates main home page that opens up when game is started
function homeScreen(){
  startButton();
  shopButton();
  settingsButton();
}

//Creates start button that is clickable and brings you to different pages
function startButton(){
}

//Creates clickable button that opens up in app purchases
function shopButton(){
}

//Creates clikcable button that opens up differnt settings (game volume settings, idea how to play)
function settingsButton(){
}
*/
