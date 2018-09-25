// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let redLightDuration = 5000;
let yellowLightDuration = 2000;
let greenLightDuration = 7000;
let state = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  determineLight();
}

/*
function determineLight(){
  if (state === 1){
    fill(255, 0, 0);
    ellipse(width/2, height/2 - 65, 50, 50);
  } else if (state === 2){
    fill(125, 0, 125);
    ellipse(width/2, height/2, 50, 50);
  } else if (state === 3){
    fill(0, 255, 0);
    ellipse(width/2, height/2 + 65, 50, 50)
  }
}
*/

function determineLight(){
  if(millis() <= redLightDuration){
    fill(255, 0, 0);
    ellipse(width/2, height/2 - 65, 50, 50);
  } else if (millis() > redLightDuration && millis() <= greenLightDuration){
    fill(0, 255, 0);
    ellipse(width/2, height/2 + 65, 50, 50)
  } else if (millis() >= greenLightDuration){
    fill(125);
    ellipse(width/2, height/2, 50, 50);
  }
  console.log(millis());
  millis() === 0;
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
