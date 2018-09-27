//
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let diameter, sliceWidth;
let x, y;
let targetColors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(220);
  x = width/2;
  y = height/2;
}

function draw() {
  diameter = 400;
  sliceWidth = diameter/10;
  for (let i = 0; i < 10; i++){
    fill(targetColors[i]);
    ellipse(x, y, diameter, diameter);
    diameter -= sliceWidth;
  }
}
