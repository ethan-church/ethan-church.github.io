// Green Meadow Estates Farm Plot
// Ethan Cjhurch
// October 26 2018
//
//Farm plot that as time goes on the fields will grow and you can harvest them.
//
// Extra for Experts:
// Cool Designs??

let rows = 10;
let cols = 10;
let grid;
let cellSize, cellWidth;
let theWidth, theHeight;
let farmingAbility;
let money;
let crops;

function preload() {
  startmenump3 = loadSound("assets/startmenu.mp3");
  farmbackground = loadImage("assets/farmbackground.png");
}


function setup() {
  startmenump3.loop();
  theWidth = 700;
  theHeight = 700;
  cellWidth = theWidth - 100;
  cellSize = cellWidth / cols;
  crops = 10;
  farmingAbility = 1;
  // creates canvas and grid.
  createCanvas(theWidth, theHeight);
  grid = createRandom2dArray(cols, rows);
  money = 0;
}


function draw() {
  image(farmbackground, 0,0);
  displayPlot();
  timeToFarm();
  displaySeedCount();
  displayMoney();
}

//Creates original array
function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      randomGrid[y].push({
        whenPlanted: 0,
        currentState: 0,
      });
    }
  }
  return randomGrid;
}

function displayMoney(){
  if (money < 10){
    fill(139,69,19);
    text("$" + money, 630, 105);
  } else if (money >= 100){
    fill(139,69,19);
    text("$" + money, 617, 105);
  } else if (money >= 10){
    fill(139,69,19);
    text("$" + money, 625, 105);
  }
}

function displaySeedCount() {
  fill(255);
  rect(610, 5,35,35);
  if (crops < 10){
    fill(139,69,19);
    text(crops, 620, 33);
  } else {
  fill(139, 69, 19);
  text(crops, 610, 33);
  textSize(30);
  }
}

//Creates Grid
function displayPlot() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j].currentState === 0) {
        fill(139, 69, 19);
      } else if (grid[i][j].currentState === 1) {
        fill(143, 129, 47);
      } else if (grid[i][j].currentState === 2) {
        fill(242, 201, 104);
      }
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

//changes individual cell change color if you click and plant a seed. And addes clikable button for seeds.
function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);

// Creates clickable buttons to change tools used. (Hoe, Seeds)
  if (mouseX >= 630 && mouseY >= 160 && mouseX <= 680 && mouseY <= 225){
    farmingAbility = 2;
  } else if (mouseX >= 310 && mouseY >= 220 && mouseX <= 680 && mouseY <= 350){
    farmingAbility = 1;
  } else if (money >= 5 && mouseX >= 330 && mouseY >= 620 && mouseX <= 400 && mouseY <= 685){
    money -= 5;
    crops++;
  } else if (money >= 10 && mouseX >= 420 && mouseY >= 620 && mouseX <= 530 && mouseY <= 685){
    money -= 10;
    crops += 3;
  }else  if (farmingAbility === 1 && crops >= 1 && grid[x][y].currentState === 0) {
      grid[x][y].currentState = 1;
      grid[x][y].whenPlanted = millis();
      crops--;
  }else if (farmingAbility === 2 && grid[x][y].currentState === 2) {
    crops ++;
    money++;
    grid[x][y].currentState = 0;
    console.log("this is what is the problem!");
  } else {
    console.log("You must not be in the hit box");
  }
}

//Timer for Crops
function timeToFarm() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j].currentState === 1 && millis() > grid[i][j].whenPlanted + random(15 * 1000, 25 * 1000)) {
        grid[i][j].currentState = 2;
      }
    }
  }
}

//If mouse is dragged change colors
function mouseDragged() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (farmingAbility === 1 && crops >= 1 && grid[x][y].currentState === 0) {
    grid[x][y].currentState = 1;
    grid[x][y].whenPlanted = millis();
    crops--;
  } else if (farmingAbility === 2 && grid[x][y].currentState === 2) {
    grid[x][y].currentState = 0;
    crops++;
    money+= 1;
  }
}
