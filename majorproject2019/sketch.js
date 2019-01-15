// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let task, items;
let inputs;
let itemNumber, itemInStorage;
let userInput;


function setup(){
  document.getElementById('add').addEventListener('click', store);
  document.getElementById('delete').addEventListener('click', deleteAll);
  display();
  itemNumber = 0;
  itemInStorage = true;
}

function keyPressed(){
  if (keyCode === 13){
    store();
  }
}

//Storing information
function store(){
  //Creates lowest key number
  newItem();

  //Getting form values
  inputs = document.getElementById('addItem').value;
  task = {
    name: inputs,
    due: "Tommorow",
  }

  //Saving to local storage
  items = JSON.stringify(task);
  localStorage.setItem(itemNumber, items);

  //Reload Webpage
  window.location.reload(false);
}

//Displays input from local storage
function display(){
  if (localStorage.length > 0){
    for (let i = 0; i < localStorage.length; i++){
      outputName = JSON.parse(localStorage.getItem(i)).name;
      outputStyle = createElement("input", outputName);
      outputStyle.parent("output");
      outputStyle.class("form-control");
      outputStyle.attribute("placeholder", outputName);
    }
  } else {
    console.log("No inputs yet!");
  }
}

//Checks to set lowest un used key value
function newItem(){
  while (itemInStorage) {
      if (localStorage.getItem(itemNumber) === null) {
        itemInStorage = false;
      }
      else {
        itemNumber += 1;
      }
  }
  itemInStorage = true;
}

function deleteAll(){
  for (let i = 0; i < localStorage.length + 1; i++){
    localStorage.clear();
  }
  //Reload Webpage
  window.location.reload(false);
}

function deleteItems() {

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
