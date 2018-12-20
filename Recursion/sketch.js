// Fractal Triangle
// Ethan Church
// December 20, 2018

let startingPoints = [{x: 500, y: 50}, {x:100, y: 700}, {x: 900, y: 700}];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  sierpinski(startingPoints, 3); //Change this number and you get more fractals
}

function sierpinski(points, depth) {
  let theColors = ["black", "white", "yellow", "red"];
  noStroke();
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y,);
  if (depth > 0) {
    sierpinski([points[0],
      midPoint(points[0], points[1]),
      midPoint(points[0], points[2])],
    depth - 1);
    sierpinski([points[1],
      midPoint(points[0], points[1]),
      midPoint(points[1], points[2])],
    depth - 1);
    sierpinski([points[2],
      midPoint(points[1], points[2]),
      midPoint(points[0], points[2])],
    depth - 1);
  }
}

function midPoint(point1, point2) {
  let x = (point1.x + point2.x)/2;
  let y = (point1.y + point2.y)/2;
  return {x:x, y: y};
}
