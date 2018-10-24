// 2D Array Grid
// Ethan Church
// October 24, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cols = 5;
let rows = 5;
let grid;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = windowWidth / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
   background(255);
   displayGrid();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill(0);
      } else {
        fill(255);
      }
      rect(cellSize)
    }
  }
}

function createRandome2dArray(cols, rows){
  let randomGrid = [];
  for (let y = 0; y < rows; y++){
    randomGrid.push([]);
    for (let x = 0; x < cols; x++){
      if (random(100) < 50){
        randomGrid[y].push(1);
      } else {
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}
