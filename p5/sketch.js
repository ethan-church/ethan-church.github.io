// Colour Matcher
// Ethan Church
// Sept 13
//
// Idea of the game is to click the coloured ellipse with the correct coloured
//
// Extra for Experts:
// - not expert yet....

let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  centreDot();
}

//Creating colour changing centre dot.
function centreDot() {
  fill(r, g, b);
	ellipse(width/2, height/2, width/4, width/4);
}
