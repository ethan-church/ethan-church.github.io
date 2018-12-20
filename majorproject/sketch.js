// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let itemCounter;
let userInput;
let userOutput;

function setup() {
createCanvas(windowWidth, windowHeight);
toDoForm();
itemCounter = localStorage.getItem("itemNumber");
}

function toDoForm(){
  let submitButton = createElement("button", "Done");
  let label = createElement("label", "add");
  userInput = createElement("input");
  userInput.parent("toDo");
  userInput.class("form-control mb-3");
  userInput.attribute("placeholder", "Add new task");
  submitButton.parent("toDo");
  submitButton.class("btn btn-primary");
  submitButton.mousePressed(saveInfo);
}

function saveInfo() {
  //Saving Information in Local Storage
  itemCounter++;
  localStorage.setItem(itemCounter, userInput.value());
  localStorage.setItem("itemNumber", itemCounter);
  tasks();
}

function tasks(){
  userOutput = createElement("label", localStorage.getItem("itemNumber"));
  userOutput.parent("output");
  console.log("it Worked");
}
