// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let task, itmes;
let inputs;
let itemNumber, itemInStorage;


function setup(){
  display();
  itemNumber = 0;
  itemInStorage = true;
  newItem();
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
    due: "Tommorow",
  }

  //Saving to local storage
  items = JSON.stringify(task);
  localStorage.setItem(itemNumber, items);
  localDisplay();
}

//Displays input from local storage
function display(){
  for (let i = 0; i < localStorage.length; i++){
    output = JSON.parse(localStorage.getItem(1)).name;
    outputStyle = createElement("input", output);
    outputStyle.parent("output");
  }
}

function newItem(){
  while (itemInStorage) {
      if (localStorage.getItem(itemNumber) === null) {
          itemInStorage = false;
      }
      else {
          itemNumber += 1;
      }
  }
}
