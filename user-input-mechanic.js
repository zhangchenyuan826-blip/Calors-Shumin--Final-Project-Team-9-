// User Input Mechanic: Interactive Ripple Garden
// Student Name: Chenyuan Zhang
// This file contains the mouse and keyboard input handling for the Interactive Ripple Garden project. 
// It uses p5.js mouseMoved(), mousePressed(), keyPressed(), arrays, classes, and lerp()
// based on techniques from the IDEA9103 Week 7, Week 8, and Week 10 tutorials.

class UserInputMechanic {
  constructor() {
    this.ripples = []; 
    this.lilies = [];
    this.mode = "calm";
    }

    displayModeText() {
        noStroke();
        fill(255, 230);
        textSize(16);
        text(
            "Mode: " + this.mode +" | Move mouse for ripples, click to plant lilies, press 1/2/3",
            20,
            30
        );
    }
}