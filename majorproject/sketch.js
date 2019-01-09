// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let tasks;
let mytask;
let task;
let inputs;
let itemNumber, itemInStorage;


function setup(){
  itemNumber = 0;
  itemInStorage = true;
  formControl();
  display();
  newItem();
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
    submitButton.keyPressed();
}

//Storing information
function store(){
  //Getting form values
  inputs = userInput.value();
  task = {
    name: inputs,
  }
  //Saving to local storage
  localStorage.setItem(itemNumber(), task);
  // if (localStorage.getItem(task.name) === null){
  //   taskArray = [];
  //   taskArray.push(task.name);
  //   localStorage.setItem('task', (task.name));
  // } else {
  //   myTasks = (localStorage.getItem('taskArray'));
  //   myTasks.push(taskArray);
  //   localStorage.setItem('task', myTasks);
  // }
  display();
}

function display(){
  for (let i = 0; i < localStorage.length; i++){
    output = localStorage.getItem(1);
    outputFinal = createElement("input", output);
    outputFinal.parent("output");
    outputFinal.class("form-check-input");
    console.log(output);
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

function keyPressed(){
  if (keyCode === Enter){
    store();
  } else if (keyCode === ){
    store();
  }
}


// let task = {name: "Buy Milk", due: "tomorrow", who: "me"}
// undefined
// task.due
// "tomorrow"
// task.name
// "Buy Milk"
// JSON.stringify(task)
// "{"name":"Buy Milk","due":"tomorrow","who":"me"}"
// let testingThing = JSON.stringify(task)
// undefined
// JSON.parse(testingThing).due
// "tomorrow"
// localStorage.setItem(6, testingThing);
// undefined
// localStorage.getItem(6)
// "{"name":"Buy Milk","due":"tomorrow","who":"me"}"
// JSON.parse(localStorage.getItem(6)).due
// "tomorrow"
// JSON.parse(localStorage.getItem(6)).name
// "Buy Milk"
// localStorage.has(0)



// token = 0;
// tokenInStorage = true;
// true
// while (tokenInStorage) {
//     if (localStorage.getItem(token) === null) {
//         tokenInStorage = false;
//     }
//     else {
//         token += 1;
//     }
// }
