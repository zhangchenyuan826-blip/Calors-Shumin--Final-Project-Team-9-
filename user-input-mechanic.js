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

// Create a ripple at the current mouse position.
    addRipple(x, y, strongRipple) {
        let ripple = new Ripple(x, y, strongRipple, this.mode);
        this.ripples.push(ripple);
    }

// Plant a new lily at the clicked position.
    addLily(x, y) {
        let lily = new Lily(x, y);
        this.lilies.push(lily);
    }

// Keyboard input changes the visual mode of future ripples.
    changeMode(inputKey) {
        if (inputKey === '1') {
            this.mode = "calm";
        } else if (inputKey === '2') {
            this.mode = "windy";
        } else if (inputKey === '3') {
            this.mode = "glowing";
        }
    }

// Update all animated objects every frame.
    update() {
        for (let ripple of this.ripples) {
            ripple.update();
        }
        
        for (let lily of this.lilies) {
            lily.update();
        }
        
        this.ripples = this.ripples.filter(function (ripple) {
            return ripple.isVisible();
        });
    }

// Draw all ripples and lilies on the canvas.
    display() {
        for (let ripple of this.ripples) {
            ripple.display();
        }
        
        for (let lily of this.lilies) {
            lily.display();
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

//Lily objects are planted by mouse clicks and grow smoothly with lerp().
class Lily {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 0;
        this.targetSize = random(35, 65);
        this.angle = random(TWO_PI);
        this.petalColour = color(random(230, 255), random(160, 210), random(210, 245));
    }
    
    update() {
        this.size = lerp(this.size, this.targetSize, 0.04);
        this.angle += 0.003;
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        noStroke();

        fill(45, 95, 55, 220);
        ellipse(0, 0, this.size * 1.3, this.size * 0.75);

        fill(this.petalColour);
        for (let i = 0; i < 6; i++) {
            ellipse(0, -this.size * 0.18, this.size * 0.45, this.size * 0.16);
            rotate(TWO_PI / 6);
        }
        fill(245, 220, 90);
        ellipse(0, 0, this.size * 0.16, this.size * 0.16);
        
        pop();
    }
}