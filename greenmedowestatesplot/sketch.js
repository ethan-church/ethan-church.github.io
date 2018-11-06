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
let cellSize;
let theWidth, theHeight;


function setup() {
  theWidth = windowWidth;
  theHeight = (9 / 16) * windowWidth;
  createCanvas(theWidth, theHeight);
  cellSize = theHeight / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  displayPlot();
  timeToFarm();
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

//changes individual cell change color if you click and plant a seed\
function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (grid[x][y].currentState === 0) {
    grid[x][y].currentState = 1;
    grid[x][y].whenPlanted = millis();
  }
  if (grid[x][y].currentState === 2){
    grid[x][y].currentState = 0;
  }
}

//Timer for Crops
function timeToFarm(){
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      if ( grid[i][j].currentState === 1 && millis() > grid[i][j].whenPlanted + random(15*1000, 25*1000)){
        grid[i][j].currentState = 2;
      }
    }
  }
}

//If mouse is dragged change colors
function mouseDragged(){
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (grid[x][y].currentState === 0){
  grid[x][y].currentState = 1;
  grid[x][y].whenPlanted = millis();
  } else if (grid[x][y].currentState === 2){
  grid[x][y].currentState = 0;
  }
}
