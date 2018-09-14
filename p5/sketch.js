// Colour Matcher
// Ethan Church
// Sept 13
//
// Idea of the game is to click the coloured ellipse with the correct coloured
//
// Extra for Experts:
// - not expert yet....

	let colors;
	let colorChoise;
	let colorChoosen;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
	colors = ['red', 'green', 'blue'];
 	colorChoise = random(colors);
}

function draw() {
  centreDot();
	colorPicker();
}

//Creating colour changing centre dot.
function centreDot() {
  if (colorChoise === 'red') {
		fill(255, 0 ,0);
	} else if (colorChoise === 'green'){
		fill(0, 255, 0);
	} else {
		fill(0, 0, 255);
	}
	ellipse(width/2, height/2, width/3, width/3);
}

//Create color picker
function colorPicker(){
	if (keyIsPressed && key === "r"){
		fill(255, 0, 0);
	} else if (keyIsPressed && key === "g"){
		fill(0, 255, 0);
	} else {
		fill(0, 0, 255);
	}
	fill(255);
	rect(width/15, height/15, width/10, height/10);
}
