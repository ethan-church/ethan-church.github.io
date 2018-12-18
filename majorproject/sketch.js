// Frame Plannning Centre To-Do List
// Ethan Church
// Start December 10, 2018

let toDoInput;

function setup() {
  //Initializes Firebase
  var config = {
    apiKey: "AIzaSyC1f-4hcTNqkqkSwwGmwbwACqSNHGaXn9I",
    authDomain: "frame-planning-centre.firebaseapp.com",
    databaseURL: "https://frame-planning-centre.firebaseio.com",
    projectId: "frame-planning-centre",
    storageBucket: "frame-planning-centre.appspot.com",
    messagingSenderId: "239238211506"
  };
  firebase.initializeApp(config);

  //Start of Project
  toDoInput = [];
  createCanvas(windowWidth, windowHeight);
  toDoForm();
}

let database = firebase.database();
let ref = database.ref('add')

function draw() {

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
  submitButton.mousePressed();
  toDoInput.push(userInput);
}

 function submitButton(){
   let data = {
      added;
   }
 }
