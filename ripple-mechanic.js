let img;

let ripples = [];
let lilyPads = [];

let rippleNoise = 0;

function preload() {
  img = loadImage("assets/water-lilies.jpg");
}

function setup() {
  createCanvas(800, 600);

  // create lily pads
  for (let i = 0; i < 20; i++) {
    lilyPads.push({
      x: random(width),
      y: random(height),

      noiseX: random(1000),
      noiseY: random(2000),

      size: random(20, 50),

      speed: random(0.005, 0.02)
    });
  }
}

function draw() {

  image(img, 0, 0, width, height);

  drawHighlights();

  createNoiseRipples();

  drawRipples();

  drawLilyPads();
}

function createNoiseRipples() {

  if (frameCount % 20 === 0) {

    let x = noise(rippleNoise) * width;
    let y = noise(rippleNoise + 1000) * height;

    rippleNoise += 0.05;

    ripples.push({
      x: x,
      y: y,

      r: random(8, 18),

      alpha: random(120, 220),

      speed: random(2, 5)
    });
  }
}

function drawRipples() {

  for (let i = ripples.length - 1; i >= 0; i--) {

    let p = ripples[i];

    noFill();

    stroke(255, 255, 255, p.alpha);
    strokeWeight(2);

    ellipse(p.x, p.y, p.r);

    stroke(180, 220, 255, p.alpha * 0.5);
    ellipse(p.x, p.y, p.r * 1.5);

    p.r += p.speed;

    p.alpha -= 3;

    if (p.alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
}

function drawLilyPads() {

  for (let pad of lilyPads) {

    pad.x += map(noise(pad.noiseX), 0, 1, -0.8, 0.8);
    pad.y += map(noise(pad.noiseY), 0, 1, -0.8, 0.8);

    pad.noiseX += pad.speed;
    pad.noiseY += pad.speed;

    noStroke();

    fill(130, 190, 120, 120);

    ellipse(
      pad.x,
      pad.y,
      pad.size,
      pad.size * 0.6
    );

    fill(220, 180, 220, 100);

    ellipse(
      pad.x,
      pad.y,
      pad.size * 0.3,
      pad.size * 0.2
    );
  }
}

function drawHighlights() {

  noStroke();

  for (let i = 0; i < 40; i++) {

    let x =
      noise(i * 0.1, frameCount * 0.005)
      * width;

    let y =
      noise(i * 0.1 + 100, frameCount * 0.005)
      * height;

    fill(255, 255, 255, 20);

    ellipse(x, y, 4, 2);
  }
}
