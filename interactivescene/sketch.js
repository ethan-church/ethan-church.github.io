// Colour Matcher
// Ethan Church
// Sept 13
//
// Idea of the game is to click the coloured ellipse with the correct coloured
//
// Extra for Experts:
// - not expert yet....

	let colors;
	let colorChoosen;
	let colorPicked;
	let colorMade;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
	noStroke();
	colors = ['red', 'green', 'blue'];
 	colorChoosen = random(colors);
// TO BE USED CODE...	alert("Using the R, G, B keys, to switch color. Match the color picker box to the centre dot");
}

function draw() {
  centreDot();
	colorPicker();
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

//Create color picker
function colorPicker(){
	if (keyIsPressed && key === "r"){
		fill(255, 0, 0);
		colourPicked = 1;
	} else if (keyIsPressed && key === "70"){
		fill(0, 255, 0);
		colourPicked = 2;
	} else if (keyIsPressed && key === "66"){
		fill (0, 0, 255);
		colourPicked = 3;
	} else {
	fill(255);
		colourPicked = 0;

	}
	rect(width/15, height/15, width/10, width/10);
}

//Checking to see if the color they have picked is correct
function check(){
	if (mouseIsPressed && colorPicked === colorMade){

	}
}
