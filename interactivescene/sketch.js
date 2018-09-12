// Drawing Ellipses and Rectangles
// Ethan Church
// September 12, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(windowHeight, windowWidth);
    background(255);
}

function draw() {
  if (mouseIsPressed && keyIsPressed && key === "r"){
 	rect(mouseX, mouseY, 100, 75)
  }
  if (mouseIsPressed && keyIsPressed && key === "e"){
 	ellipse(mouseX, mouseY, 100, 75)
  }
}

function keyTyped(){
  if (key === "w"){
  	background(255);
  } else if (key === "b"){
    background(0);
  	}
}
