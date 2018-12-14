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
  let submitButton = createElement("button", "Done");
  userInput.parent("toDo");
  userInput.class("form-control mb-3");
  userInput.attribute("placeholder", "Add new task");
  submitButton.parent("toDo");
  submitButton.class("btn btn-primary");
  toDoInput.push(userInput);
}
