// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fish;
let scalar;


function preload() {
  fish = loadImage("assets/nemo.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scalar = 1.0;
}

function draw() {
  background(255);
  image(fish, mouseX, mouseY, fish.width * scalar, fish.height * scalar);
}

function mouseWheel(event) {
  if (event.delta > 0 && scalar > 0.2) {
    scalar*= 1.1;
  } else if (event.delta < 0 && scalar > 0.2) {
    scalar *= 0.9;
  }
  console.log(event);
}
