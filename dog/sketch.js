// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Dog {
  // constructor() {
  //   this.name = "Fido";
  //   this.age = 0;
  // }

  constructor(name) {
    this.name = name;
    this.age = 0;
  }

  bark() {
    console.log("Woof! My name is " + this.name);
  }
}

let myDog = new Dog("Snoopy");
let otherDog = new Dog ("Fido");

function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark();
  otherDog.bark();
}

function draw() {

}
