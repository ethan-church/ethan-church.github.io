// World Star Golf
// Ethan & Mike
// November 21, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Ball{
  constructor(x,y,power,aim){
    this.x = x;
    this.y = y;
    this.dx = aim;
    this.dy = power;
    this.radius = 7;
    this.color = color(255);
    this.done = false;
  }
  show(){
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
  update(){
    if(!this.done){
      this.x += this.dx;
      this.y += this.dy;
      //decrease speed KEEP WORKING ON THIS
      if(aim > 0){
        if(this.dx < 0){
          this.dx = this.dx + 0.03;
        }
        else if(this.dx < 0){
          this.dx = this.dx - 0.03;
        }
        if(this.dy < 0 && !this.done){
          this.dy = this.dy + 0.03;
        }
        if(this.dy > 0){
          this.dy = 0;
          this.done = true;
        }
      }
      if(aim === 0){
        if(this.dy < 0 && !this.done){
          this.dy = this.dy + 0.03;
        }
        if(this.dy > 0){
          this.dy = 0;
          this.done = true;
        }
      }
      if(aim < 0){
        if(this.dx < 0){
          this.dx = this.dx + 0.03;
        }
        if(this.dy < 0 && !this.done){
          this.dy = this.dy + 0.03;
        }
        if(this.dy > 0){
          this.dy = 0;
          this.done = true;
        }
      }
    }
  }
}

//variables
let state;
let startMusic;
let homeScreen;
let startButton, startButtonDown, altitudeMode, godMode, modeSwitcher;

//just for topview
let ballArray = [];
let golfBall;
let aim = -1;
let power = -5;

//just for terrain

function preload(){
  //startMusic = loadSound(assets/nameofsonghere);
  altitudeMode = loadImage("assets/altitudeButton.png");
  godMode = loadImage("assets/godModeClicked.png");
  modeSwitcher = loadImage("assets/modeSwitcher.png");
  homeScreen = loadImage("assets/golfhomescreen.png");
  startButton = loadImage("assets/golfballlogo.png");
  startButtonDown = loadImage("assets/golfballlogodown.png");
  golfBackground = loadImage("assets/golfBackground.png");
}

function setup() {
  createCanvas(700, 700);
  state = 0;
}

//state relationships
//0,1,2,4,
//0,1,3,5,

function mousePressed(){
  if(state === 0 && mouseX >= 250 && mouseY >= 360 && mouseX <= 450 && mouseY <= 570){
      state = 1;
  } else if (state === 1 && mouseX < width/2){
    state = 2;
  }
  else if(state === 1 && mouseX > width/2){
    state = 3;
  }
  else if(state === 2){
    state = 4;
  }
  else if(state === 3){
    state = 5;
  }
  else if(state === 4 && mouseY > 600 && mouseX > 250 && mouseX < 450){
    //
    let someBall = new Ball(350,650,power,aim);
    ballArray.push(someBall);
  }
  else if(state === 5){
    //
  }
}

function keyPressed(){
  //if(state === 4 && keyCode)
}

function draw() {
  stateLord();
}

function stateLord(){
  if(state === 0){
    //startScreen
    startScreen();
    playStartMusic();
  }
  else if(state === 1){
    //pick gamemode
    pickMode();
  }
  else if(state === 2){
    //topview instructions
    instructions();
  }
  else if(state === 3){
    //terrain view instructions
    otherInstructions();
  }
  else if(state === 4){
    //topview start
    topView();
  }
  else if(state === 5){
    //terrain start
    terrain();
  }
}

function startScreen(){
  image(homeScreen, 0, 0, 700, 700);
  if (state === 0 && mouseX >= 250 && mouseY >= 360 && mouseX <= 450 && mouseY <= 570){
    image(startButtonDown, 250, 360, 200, 210);
  } else {
    image(startButton, 250, 360, 200, 210);
  }
}

//display to pick gamemode
function pickMode(){
  image(modeSwitcher, 0, 0, 700, 700);
  if (state === 1 && mouseX >= 50 && mouseY >= 450 && mouseX <= 650 && mouseY <= 650){
    image(altitudeMode, 45, 445, 612, 211);
  } else  if (state === 1 && mouseX >= 50 && mouseY >= 100 && mouseX <= 650 && mouseY <= 350){
    image(godMode, 45, 150, 612, 211);
  }
}

//instructions for topview mode
function instructions(){
  background(255,255,255);
}

//instructions for terrain mode
function otherInstructions(){
  background(0,255,0);
}

function topView(){
  image(golfBackground, 0, 0);
  for (let i=ballArray.length-1; i >= 0; i--){
    ballArray[i].update();
    ballArray[i].show();
  }
}

function terrain(){
  background(200,200,200);
  //
}

function playStartMusic(){
  //plays the music at the beginning of the game
}
