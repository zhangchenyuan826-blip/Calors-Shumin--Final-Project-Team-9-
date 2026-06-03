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

    addRipple(x, y, strongRipple) {
        let ripple = new Ripple(x, y, strongRipple, this.mode);
        this.ripples.push(ripple);  
    }
    update() {
        for (let ripple of this.ripples) {
            ripple.update();
        }
        
        this.ripples = this.ripples.filter(function (ripple) {
            return ripple.isVisible();
        });
    }
    display() {
        for (let ripple of this.ripples) {
            ripple.display();
        }
        
        this.displayModeText();
    }
    displayModeText() {
        noStroke();
        fill(255, 230);
        textSize(14);
        text(
            "Mode: " + this.mode +" | Move mouse for ripples, click to plant lilies, press 1/2/3",
            20,
            30
        );
    }
}

//Ripple objects are created from mouse movement and mouse clicks.
class Ripple {
    constructor(x, y, strongRipple, mode) {
        this.x = x;
        this.y = y;
        this.radius = 8;
        this.alpha = 160;
        this.strongRipple = strongRipple;
        this.mode = mode;
    
        if (this.strongRipple) {
            this.growthSpeed = 3.2;
            this.strokeWeightValue = 2.5;
        } else {
            this.growthSpeed = 1.4;
            this.strokeWeightValue = 1;   
        }
    }
    update() {
        this.radius += this.growthSpeed;
        this.alpha -= 3;
    }
    
    display() {
        noFill();
        
        if (this.mode === "calm") {
            stroke(210, 235, 245, this.alpha);  
        } else if (this.mode === "windy") {
            stroke(170, 220, 255, this.alpha);
        } else if (this.mode === "glowing") {
            stroke(245, 220, 255, this.alpha);
        }
        
        strokeWeight(this.strokeWeightValue);
        ellipse(this.x, this.y, this.radius, this.radius * 0.55);

        if (this.strongRipple) {
            strokeWeight(1);
            ellipse(this.x, this.y, this.radius * 1.5, this.radius * 0.8);
        }
    }

    isVisible() {
        return this.alpha > 0;
    }
}
