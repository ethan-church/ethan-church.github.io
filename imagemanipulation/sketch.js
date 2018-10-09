// Image Manipulation
// Ethan Church
// October 9 2018

let fish;
let grayfish;

function preload(){
  fish = loadImage("assets/fish.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(fish, 0, 0);
  grayFish = makeGreyScale(fish);
}

function draw() {

}

function makeGreyScale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < img.width; x++){
    for (let y = 0; y < img.height; y++){
      let thisPixel = sourceImage.get(x, y);

      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let average = (r + g + b) / 3;

      let newPixel = color(average, average, average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
