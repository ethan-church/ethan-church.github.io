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
//The state variabke is needed to create differnt areas/screens you can be on. Will be more obvious as the game continues to grow.
//
// Extra for Experts:
// Made cool logo, and added music i guess ;)

let state;
let theWidth, theHeight;
let money, moneyPlus, level;
let rows = 10;
let cols = 10;
let grid;
let cellSize;

function preload() {
  startmenump3 = loadSound("assets/startmenu.mp3");
  menu = loadImage("assets/startscreen.png");
  settingsbutton = loadImage("assets/settingsbutton.png");
  shopbutton = loadImage("assets/shopbutton.png");
  startbutton = loadImage("assets/startbutton.png");
  startscreenbackground = loadImage("assets/startscreenbackground.png");
  logo = loadImage("assets/greenmeadowsestatelogo.png");
  barn1 = loadImage("assets/barn1.jpg");
}

function setup() {
  startmenump3.loop();
  theWidth = windowWidth;
  theHeight = (9 / 16) * windowWidth;
  createCanvas(theWidth, theHeight);
  background(220);
  state = 1;
  money = 0;
  moneyPlus = 1;
  level = 0;
  cellSize = theHeight / cols;
  grid = createRandom2dArray(cols, rows);
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
  // shopButton();
  // settingsButton();
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
  if (state === 1 && mouseX >= theWidth / 2.25 && mouseX <= theWidth / 20 && mouseY >= theHeight / 1.78 && theHeight / 20) {
    state = 3;
  }
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
  displayPlot();
  timeToFarm();
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
  if (state > 2 && keyIsPressed && keyCode === LEFT_ARROW) {
    state -= 1;
    keyIsPressed = false;
  } else if (state < 4 && keyIsPressed && keyCode === RIGHT_ARROW && state != 1) {
    state += 1;
    keyIsPressed = false;
  }
}

function mouseClicked() {
  if (state === 1 && mouseX >= theWidth / 2 - theWidth / 12 && mouseX <= theWidth / 2 + theWidth / 12 && mouseY >= theHeight / 2 - theHeight / 20 && mouseY <= theHeight / 2 + theHeight / 20) {
    state = 2;
  }
}

//Creates original array
function createRandom2dArray(cols, rows){
  let randomGrid = [];
  for (y = 0; y < rows; y++){
    randomGrid.push([]);
    for (let x = 0; x < cols; x++){
      randomGrid[y].push({
        whenPlanted: 0,
        currentState: 0,
       });
    }
  }
  return randomGrid;
}

//Creates Grid
function displayPlot(){
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if (grid[i][j].currentState === 0){
        fill(139, 69, 19);
      } else if (grid[i][j].currentState === 1){
        fill(143,129,47);
      } else if (grid[i][j].currentState === 2){
        fill(242, 201, 104);
      }
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

//changes individual cell change color if you click and plant a seed
function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (state === 2 && grid[x][y].currentState === 0) {
    grid[x][y].currentState = 1;
    grid[x][y].whenPlanted = millis();
  }
  if (state === 2 && grid[x][y].currentState === 2){
    grid[x][y].currentState = 0;
  }
}

//Timer for Crops
function timeToFarm(){
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      if (grid[i][j].currentState === 1 && millis() > grid[i][j].whenPlanted + random(15*1000, 25*1000)){
        grid[i][j].currentState = 2;
      }
    }
  }
}

//If mouse is dragged change colors
function mouseDragged(){
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (state === 2 && grid[x][y].currentState === 0){
  grid[x][y].currentState = 1;
  grid[x][y].whenPlanted = millis();
} else if (state === 2 && grid[x][y].currentState === 2){
  grid[x][y].currentState = 0;
  }
}
