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
let farmGrid;
let cellSize;
let theWidth, theHeight;


function setup() {
  theWidth = windowWidth;
  theHeight = (9 / 16) * windowWidth;
  createCanvas(theWidth, theHeight);
  cellSize = theHeight / cols;
  farmGrid = createRandom2dArray(cols, rows);
}

function draw() {
  // createRandom2dArray();
  displayPlot();
}

function createRandom2dArray(cols, rows){
  let randomGrid = [];
  for (y = 0; y < rows; y++){
    randomGrid.push([]);
    for (let x = 0; x < cols; x++){
      randomGrid[y].push(1);
    }
  }
  return randomGrid;
}

//Creates Grid
function displayPlot(){
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      fill(139, 69, 19);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}
