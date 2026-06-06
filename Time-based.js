// Time-based Day/Night Pond
// Student Name: Manyu Lin
// This file contains the time-based lighting system for the Living Water Project.
// It uses p5.js tint(), lerp(), and frame-based state cycling
// based on techniques from the IDEA9103 Week 9 and Week 10 tutorials.

let img;
let fit = { x: 0, y: 0, w: 0, h: 0 };

const TIME_STATES = {
    MORNING: 0,
    DAY: 1,
    SUNSET: 2,
    NIGHT: 3
};

let currentState = TIME_STATES.DAY;
let stateProgress = 0;
let cycleDuration = 600;

const overlays = {
    morning: [250, 233, 222, 80],
    day: [250, 241, 222, 0],
    sunset: [226, 178, 89, 100],
    night: [97, 97, 127, 180]
};
   
const brightness = {
    morning: 0.9,
    day: 1.0,
    sunset: 0.7,
    night: 0.25
};

function preloadTimeBased() {
    img = loadImage("assets/water-lilies.jpg");
}

function setupTimeBased() {
    calculateFit();
}

function updateTimeCycle() {
    stateProgress += 1 / cycleDuration;
    
    if (stateProgress >= 1) {
        stateProgress = 0;
        currentState = (currentState + 1) % 4;
        
        let names = ['Morning', 'Day', 'Sunset', 'Night'];
        console.log("State changed to:", names[currentState]);
    }
}

function getCurrentOverlay() {
    let nextState = (currentState + 1) % 4;
    let names = ['morning', 'day', 'sunset', 'night'];
    let c1 = overlays[names[currentState]];
    let c2 = overlays[names[nextState]];
    let t = stateProgress;
    
    return [
        lerp(c1[0], c2[0], t),
        lerp(c1[1], c2[1], t),
        lerp(c1[2], c2[2], t),
        lerp(c1[3], c2[3], t)
    ];
}

function getCurrentBrightness() {
    let nextState = (currentState + 1) % 4;
    let names = ['morning', 'day', 'sunset', 'night'];
    return lerp(brightness[names[currentState]], brightness[names[nextState]], stateProgress);
}

function calculateFit() {
    let imgAspect = img.width / img.height;
    let canvasAspect = width / height;
    
    if (imgAspect > canvasAspect) {
        fit.w = width;
        fit.h = width / imgAspect;
        fit.x = 0;
        fit.y = (height - fit.h) / 2;
    } else {
        fit.h = height;
        fit.w = height * imgAspect;
        fit.x = (width - fit.w) / 2;
        fit.y = 0;
    }
}

function drawImageWithEffect(overlay, bright) {
    push();
    tint(255 * bright);
    image(img, fit.x, fit.y, fit.w, fit.h);
    noTint();
    
    fill(overlay[0], overlay[1], overlay[2], overlay[3]);
    noStroke();
    rect(fit.x, fit.y, fit.w, fit.h);
    pop();
}