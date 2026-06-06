// Main sketch setup for Living Water Lilies.
// Student: Chenyuan Zhang
// This section loads the Water Lilies image and connects it with the User Input Mechanic. 
// It uses preload(), loadImage(), image(), windowWidth, windowHeight, and WindowResized()
// based on p5.js techniques from the IDEA9103 Week 7 and Week 9 tutorials.

let userInputMechanic;
let waterLiliesImage;

function preload() {
  waterLiliesImage = loadImage("assets/water-lilies.jpg"); // Ensure this image is in the project folder
  preloadTimeBased(); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  userInputMechanic = new UserInputMechanic();
  setupTimeBased();
}

function draw() {
  background(32, 58, 72);

  updateTimeCycle();

  let timeOverlay = getCurrentOverlay();
  let timeBrightness = getCurrentBrightness();
  drawImageWithEffect(timeOverlay, timeBrightness);

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

if (userInputMechanic.mode === "calm") {
// Calm mode: soft blue-green daylight.
  fill(20, 70, 80, 20);
} else if (userInputMechanic.mode === "windy") {
// Windy mode: stronger cold blue.
  fill(0, 75, 150, 85);
} else if (userInputMechanic.mode === "glowing") {
  fill(120, 30, 150, 95);
}
rect(0, 0, width, height);

if (userInputMechanic.mode === "calm") {
  fill(140, 190, 160, 30);
}else if (userInputMechanic.mode === "windy") {
  fill(180, 230, 255, 45);
}else if (userInputMechanic.mode === "glowing") {
  fill(255, 170, 230, 45);
  }

  ellipse(width * 0.25, height * 0.35, width * 0.45, height * 0.18);

  if (userInputMechanic.mode === "calm") {
    fill(80, 120, 150, 25);
  } else if (userInputMechanic.mode === "windy") {
    fill(40, 160, 255, 45);
  } else if (userInputMechanic.mode === "glowing") {
    fill(200, 120, 255, 50);
  }
 
  ellipse(width * 0.75, height * 0.65, width * 0.55, height * 0.2);
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateFit();
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