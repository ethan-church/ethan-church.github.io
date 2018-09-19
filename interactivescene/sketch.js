// Colour Matcher
// Ethan Church
// Sept 13
//
// Idea of the game is to click the coloured ellipse with the correct coloured as many times as you can in 10 seconds
//
// Extra for Experts:
// - not expert yet....

	let colors;
	let colorChoosen;
	let colorPicked;
	let colorMade;
	let score;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
	noStroke();
	colors = ['red', 'green', 'blue'];
 	colorChoosen = random(colors);
	score = 0;
//TO BE USED... alert("Using the R, G, B keys, to switch color. Match the color picker box to the centre dot, as many times as you can in 10 seconds");
}

function draw() {
  centreDot();
	colorPicker();
	check();
}

//Creating colour changing centre dot.
function centreDot() {
  if (colorChoosen === 'red') {
		fill(255, 0 ,0);
		colorMade = 1;
	} else if (colorChoosen === 'green'){
		fill(0, 255, 0);
		colorMade = 2;
	} else {
		fill(0, 0, 255);
		colorMade = 3;
	}
	ellipse(width/2, height/2, width/3, width/3);
}

//Create color picker box and fills with color when keys are pressed
function colorPicker(){
	if (keyIsPressed && key === "r"){
		fill(255, 0, 0);
		colourPicked = 1;
		rect(width/15, height/15, width/10, width/10);
	} else if (keyIsPressed && key === "g"){
		fill(0, 255, 0);
		colourPicked = 2;
		rect(width/15, height/15, width/10, width/10);
	} else if (keyIsPressed && key === "b"){
		fill (0, 0, 255);
		colourPicked = 3;
		rect(width/15, height/15, width/10, width/10);
	} else {
	fill(255)
	rect(width/15, height/15, width/10, width/10);
	}
}

//Checking to see if the color they have picked is correct
function check(){
	if (mouseIsPressed && colorPicked === colorMade){
		score += 1;
	} else {
		score -= 1;
	}
}

//Creates score Board
function scoreBoard(){
	console.log(score);
}

//Creates Clock to race
function  clock(){
}
