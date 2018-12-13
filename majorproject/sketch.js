// Schema To-Do List
// Ethan Church
// Start December 10, 2018

let toDoInput;

function setup() {
  toDoInput = [];
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function createForm(){
  let label = createElement("label",  "Add");
  label.parent("toDo");
}
