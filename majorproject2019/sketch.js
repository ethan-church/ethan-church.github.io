// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

//Variables
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

//Submit Input using enter key
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
    due: "This is was suppost to come later",
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
      outputStyle.attribute("placeholder", outputName)
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

//Delete All function
function deleteAll(){
  for (let i = 0; i < localStorage.length + 1; i++){
    localStorage.clear();
  }
  //Reload Webpage
  window.location.reload(false);
}
