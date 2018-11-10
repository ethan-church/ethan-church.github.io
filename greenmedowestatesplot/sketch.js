// Green Meadow Estates Farm Plot
// Ethan Cjhurch
// October 26 2018
//
//Farm plot that as time goes on the fields will grow and you can harvest them.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 10;
let cols = 10;
let grid;
let cellSize, cellWidth;
let theWidth, theHeight;
let farmingAbility;

function preload(){
  startmenump3 = loadSound("assets/startmenu.mp3");
  seeds = loadImage("assets/seeds.png");
}


function setup() {
  startmenump3.loop();
  //checks to see wether windowHeight or windowWidth is bigger so you can always see the whole grid. WORKS!!!
  // if (windowWidth > windowHeight){
  //   theWidth = windowHeight * (16/9);
  //   theHeight = windowHeight;
  //   cellSize = theHeight / cols;
  // } else {
  //   theWidth = windowWidth;
  //   theHeight = windowWidth * (16 / 9);
  //   cellSize = theWidth / cols;
  // }
theWidth = 700;
theHeight = 700;
cellWidth = theWidth - 100;
cellSize =  cellWidth / cols;
crops = 10;
farmingAbility = 1;
  // creates canvas and grid.
  createCanvas(theWidth, theHeight);
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  displayPlot();
  timeToFarm();
  displaySeedCount();
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

function displaySeedCount(){
  text (crops, 610, 35);
  image(seeds, 670, 5, 30, 35);
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

//changes individual cell change color if you click and plant a seed\
function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (farmingAbility === 1 && crops >= 1&& grid[x][y].currentState === 0) {
    grid[x][y].currentState = 1;
    grid[x][y].whenPlanted = millis();
    crops --;
  }
  if (farmingAbility === 2 && grid[x][y].currentState === 2){
    crops += 2;
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
  if (farmingAbility === 1 && crops >= 1 && grid[x][y].currentState === 0){
  grid[x][y].currentState = 1;
  grid[x][y].whenPlanted = millis();
  crops--;
} else if ( farmingAbility === 2 && grid[x][y].currentState === 2){
  grid[x][y].currentState = 0;
  crops+= 2;
  }
}

function keyPressed(){
  if (keyCode === 83){
    farmingAbility = 1;
  } else if (keyCode === 70){
    farmingAbility = 2;
  }
}
