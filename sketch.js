// Main sketch setup for Living Water Lilies.
// Student: Chenyuan Zhang
// This section loads the Water Lilies image and connects it with the User Input Mechanic. 
// It uses preload(), loadImage(), image(), windowWidth, windowHeight, and WindowResized()
// based on p5.js techniques from the IDEA9103 Week 7 and Week 9 tutorials.

let userInputMechanic;
let waterLiliesImage;

function preload() {
  waterLiliesImage = loadImage("assets/water-lilies.jpg"); // Ensure this image is in the project folder
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  userInputMechanic = new UserInputMechanic();
}

function draw() {
  background(32, 58, 72);

  drawImageCover (waterLiliesImage);
  drawPondColourOverlay();

  userInputMechanic.update();
  userInputMechanic.display();
}
function drawImageCover(inputImage) {
 let imageRatio = inputImage.width / inputImage.height;
 let canvasRatio = width / height;
 
 let drawWidth;
 let drawHeight;

 if (imageRatio > canvasRatio) {
   drawHeight = height;
   drawWidth = height * imageRatio;
 } else {
   drawWidth = width;
   drawHeight = width / imageRatio;
 }

 let x = (width - drawWidth) / 2;
 let y = (height - drawHeight) / 2;

 image(inputImage, x, y, drawWidth, drawHeight);
}

function drawPondColourOverlay() {
  noStroke();
  
  fill(20, 50, 70, 35);
  rect(0, 0, width, height);

  fill(120, 170, 160, 35);
  ellipse(width * 0.25, height * 0.35, width * 0.45, height * 0.18);

  fill(80, 110, 150, 35);
  ellipse(width * 0.75, height * 0.65, width * 0.55, height * 0.2);
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  userInputMechanic.addRipple(mouseX, mouseY, false);
}
function mousePressed() {
  userInputMechanic.addRipple(mouseX, mouseY, true);
  userInputMechanic.addLily(mouseX, mouseY);
}
function keyPressed() {
  userInputMechanic.changeMode(key);
}