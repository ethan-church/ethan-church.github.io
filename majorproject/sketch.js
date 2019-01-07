// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let tasks;
let mytask;
let task;
let inputs;

function setup(){
  createCanvas(windowWidth, windowHeight);
  formControl();
}

//Creating form and controls
function formControl(){
    let submitButton = createElement("button", "Done");
    userInput = createElement("input");
    userInput.parent("toDo");
    userInput.class("form-control mb-3");
    userInput.attribute("placeholder", "Add new task");
    submitButton.parent("toDo");
    submitButton.class("btn btn-primary");
   submitButton.mousePressed(store);
}

//Storing information
function store(){
  //Getting form values
  inputs = userInput.value();
  task = {
    name: inputs,
  }
  //Saving to local storage
  if (localStorage.getItem(task.name) === null){
    taskArray = [];
    taskArray.push(task.name);
    localStorage.setItem('task', (task.name));
  } else {
    myTasks = (localStorage.getItem('taskArray'));
    myTasks.push(taskArray);
    localStorage.setItem('task', myTasks);
  }
  display();
}

function display(){
  output = localStorage.getItem(task);
  outputFinal = createElement("label", output);
  outputFinal.parent("output");
  console.log(output);
}



// First Save

// let itemCounter;
// let userInput;
// let userOutput;
//
// function setup() {
// createCanvas(windowWidth, windowHeight);
// form();
// itemCounter = localStorage.getItem("itemNumber");
// tasks();
// }
//
// function form(){
//   let submitButton = createElement("button", "Done");
//   userInput = createElement("input");
//   userInput.parent("toDo");
//   userInput.class("form-control mb-3");
//   userInput.attribute("placeholder", "Add new task");
//   submitButton.parent("toDo");
//   submitButton.class("btn btn-primary");
//  submitButton.mousePressed(store);
// }
//
// function store() {
//   //Saving Information in Local Storage
//   localStorage.setItem(itemCounter, userInput.value());
//   localStorage.setItem("itemNumber", itemCounter);
//   itemCounter++;
//   getValues();
// }
//
// function getValues(){
//   for (let i = 0; i < localStorage.length; i++){
//   userOutput = createElement("label","milk");
//   userOutput.parent("output");
//   console.log(localStorage);
//   }
// }
