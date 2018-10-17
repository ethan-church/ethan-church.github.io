function setup() {
  createCanvas(400, 400);
	angleMode(DEGREES)
}

function draw() {
  background(220);
	displayFace();
}

function displayFace(){
	//main circle of the clock
	translate(width/2, height/2);
	noFill();
	strokeWeight(4);
	ellipse(0, 0, 350, 350);

	//dot in the middle of the clock
	fill(0);
	ellipse(0, 0, 3, 3);

	//second tick marks
	for(let i = 0; i < 360; i ++){
	rotate(6);
	strokeWeight(1);
	line(150, 0,165, 0);
	}

	//hour tick marks
	for(let j = 0;j < 360; j++){
		rotate(360/12);
		strokeWeight(4);
		line(140, 0, 165, 0);
	}
}
