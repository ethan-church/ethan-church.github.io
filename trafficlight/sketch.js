// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

const redLightDuration = 3000;
const yellowLightDuration = 500;
const greenLightDuration = 4000;

let state;
let lastTimeSwitchedColor;

function setup() {
  createCanvas(600, 600);
  state = 3;
  lastTimeSwitchedColor = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkForStateChange();
  displayCorrectLight();
}

function checkForStateChange(){
  let elapsedTime = millis() - lastTimeSwitchedColor;
  if (state === 1 && elaspsedTime >= redLightDuration) {
    state === 2;
    lastTimeSwitchedColor = millis();
  } else if (state === 2 && elaspsedTime >= greenLightDuration) {
    state === 3;
    lastTimeSwitcheColor = millis();
  } else if (state ===3 && elaspesedTime >= yellowLightDuration) {
    state === 1;
    lastTimeSwitcheColor = millis();
  }
}

function displayCorrectLight(){
  if (state = 1){
    displayRedLight();
  } else if (state = 2) {
    displayGreenLight();
  } else if (state = 3) {
    displayYellowLight();
  }
}

function displayRedLight(){
  fill (255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50);
}

function displayYellowLight (){
  fill (255, 191, 0)
  ellipse(width/2, height/2, 50, 50);
}

function displayGreenLight(){
  fill (0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50);
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
