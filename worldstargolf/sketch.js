// World Star Golf
// Ethan Church
// November 16 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class GolfBall(x,y) {
  constructor(){
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.color = (255);
  }
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
}

let theWidth, theHeight;


function setup() {
  theWidth = windowWidth;
  theHeight = (9 / 16) * windowWidth;
  createCanvas(theWidth, theHeight);
  background(107,142,35);
}

let golfBall = new GolfBall(theHeight/30, theWidth/2);

function draw() {
  golfBall.update();
  golfBall.display();
}
