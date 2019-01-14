// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let task, items;
let inputs;
let itemNumber, itemInStorage;
let userInput;


function setup(){
  document.getElementById('add').addEventListener('click', store);
  display();
  itemNumber = 0;
  itemInStorage = true;
  newItem();
}

function keyPressed(){
  if (keyCode === 13){
    store();
  }
}

//Storing information
function store(){
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
      outputStyle = createElement("list-group", outputName);
      outputStyle.parent("output");
      outputStyle.class("list-group-item list-group-item-action");
      outputStyle.attribute("placeholder", outputName);
      outputStyle.doubleClicked(done);
    }
  } else {
    console.log("No inputs yet!");
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

function done() {
  console.log("It works");
  outputStyle.addClass("is-valid");
}
