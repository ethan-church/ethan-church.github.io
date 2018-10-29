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
}

//Creates original array
function createRandom2dArray(cols, rows){
  let randomGrid = [];
  for (y = 0; y < rows; y++){
    randomGrid.push([]);
    for (let x = 0; x < cols; x++){
      randomGrid[y].push(
      whenPlanted: millis(),
      currentState: 0,);
    }
  }
  return randomGrid;
}

//Creates Grid
function displayPlot(){
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if (grid[i][j] === 0){
        fill(107,142,35);
      } else if (grid[i][j] === 1){
        fill(139, 69, 19);
      } else if (grid[i][j] === 2){
        fill(128,128,0);
      } else if (grid[i][j] === 3){
        fill(204,195,0);
      }
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

//changes individual cell change color if you click and plant a seed\
function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  if (grid[x][y] === 1) {
    grid[x][y] = 0;
  }
  else if (grid[x][y] === 0) {
    grid[x][y] = 1;
  }
}

//If mouse is dragged change colors
