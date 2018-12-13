// Schema To-Do List
// Ethan Church
// Start December 10, 2018

let toDoInput;

function setup() {
  toDoInput = [];
  createCanvas(windowWidth, windowHeight);
  toDoForm();
}

function draw() {

}

function toDoForm(){
  let input = createElement("input");
  let submitButton = createElement("button", "Done");
  input.parent("toDo");
  input.class("form-control mb-3");
  input.attribute("placeholder", "Add new task");
  submitButton.parent("toDo");
  submitButton.class("btn btn-primary");
}
