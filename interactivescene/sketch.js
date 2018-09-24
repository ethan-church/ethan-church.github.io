// Colour Matcher
// Ethan Church
// Sept 13
//
// Extra for Experts:
// My program stands out because I added a bell to the program if you get it right.

	let incorrectBell;
	let correctBell;
	let colors;
	let colorChoosen;
	let red = 1, green = 2, blue = 3;
	let colorPicked;

	function preload() {
	  correctBell = loadSound("assets/Bell.wav");
		incorrectBell = loadSound("assets/Incorrect.wav");
	}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
	noStroke();
	colors = [1, 2, 3];
 	colorChoosen = random(colors);
	console.log(colors);
//TO BE USED... alert("Using the R, G, B keys, to switch color. Match the color picker box to the centre dot, as many times as you can in 10 seconds");
}

function draw() {
  centreDot();
	colorPicker();
	check();
}

//Creating colour changing centre dot.
function centreDot() {
  if (colorChoosen === 1){
		fill(255, 0 ,0);
	} else if (colorChoosen === 2){
		fill(0, 255, 0);
	} else if (colorChoosen === 3){
		fill(0, 0, 255);
	}
	ellipse(width/2, height/2, width/3, width/3);
}

//Create color picker box and fills with color when keys are pressed
function colorPicker(){
	if (key === "r"){
		fill(255, 0, 0);
		colorPicked = 1;
	} else if (key === "g"){
		fill(0, 255, 0);
		colorPicked = 2;
	} else if (key === "b"){
		fill (0, 0, 255);
		colorPicked = 3;
	} else {
		fill(255);
	}
	rect(width/15, height/15, width/10, width/10);
}

function check(){
	if (mouseIsPressed && colorChoosen === colorPicked){
			colorChoosen = random(colors);
			correctBell.play();
	}
}
