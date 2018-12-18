// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let itemCounter;

function setup() {
  //Initializes Firebase
  // let config = {
  //   apiKey: "AIzaSyC1f-4hcTNqkqkSwwGmwbwACqSNHGaXn9I",
  //   authDomain: "frame-planning-centre.firebaseapp.com",
  //   databaseURL: "https://frame-planning-centre.firebaseio.com",
  //   projectId: "frame-planning-centre",
  //   storageBucket: "frame-planning-centre.appspot.com",
  //   messagingSenderId: "239238211506"
  // };
  // firebase.initializeApp(config);
  // console.log(firebase);

//FireBase Stuff
// let userInputs = firebase.database();
// let ref = userInputs.ref('inputs');
// let data = {
//   name: "Ethan Church",
//   task: "Design"
// }
// ref.push(data);

//Start of Project
createCanvas(windowWidth, windowHeight);
toDoForm();
}

itemCounter = 0;

function draw(){
}

function toDoForm(){
  let submitButton = createElement("button", "Done");
  let label = createElement("label", "add");
  let userInput = createElement("input");
  userInput.parent("toDo");
  userInput.class("form-control mb-3");
  userInput.attribute("placeholder", "Add new task");
  submitButton.parent("toDo");
  submitButton.class("btn btn-primary");

  //Saving Information in Local Storage
  localStorage.setItem(itemCounter, "hello");
}
