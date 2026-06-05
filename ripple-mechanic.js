let img;
let ripples = [];

function preload() {
  img = loadImage("assets/monet.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  image(img, 0, 0, width, height);

  if (frameCount % 40 === 0) {
    ripples.push({
      x: random(width),
      y: random(height),
      r: 10,
      alpha: 180
    });
  }

  for (let i = ripples.length - 1; i >= 0; i--) {
    let p = ripples[i];

    noFill();
    stroke(255, 255, 255, p.alpha);
    strokeWeight(2);
    ellipse(p.x, p.y, p.r);

    p.r += 3;
    p.alpha -= 3;

    if (p.alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
}
