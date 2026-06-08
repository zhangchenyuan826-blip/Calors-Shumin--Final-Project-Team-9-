let img, song, amp, fft, playButton;
let particles = [];
let ripples = [];

let lilyPoints = [
  { x: 170, y: 300 },
  { x: 260, y: 100 },
  { x: 320, y: 470 },
  { x: 620, y: 300 },
  { x: 700, y: 500 }
];

function preload() {
  img = loadImage("assets/water-lilies.jpg");
  song = loadSound("assets/music.mp3");
}

function setup() {
  createCanvas(800, 600);
  amp = new p5.Amplitude();
  fft = new p5.FFT();

  playButton = createButton("Play / Pause");
  playButton.position(20, 20);
  playButton.mousePressed(toggleSound);
}

function draw() {
  blendMode(BLEND);
  image(img, 0, 0, width, height);

  let level = amp.getLevel();

  fft.analyze();
  let bass = fft.getEnergy("bass");

  createEffect(level, bass);
  drawRipples();
  drawParticles();

  if (!song.isPlaying()) {
    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Click Play / Pause", width / 2, height / 2);
  }
}

function toggleSound() {
  userStartAudio();

  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

function createEffect(level, bass) {
  if (level > 0.012 && frameCount % 4 === 0) {
    let origin = random(lilyPoints);

    let palette = [
      color(120, 190, 255),
      color(210, 140, 255),
      color(255, 150, 210),
      color(255, 210, 120)
    ];

    for (let i = 0; i < 3; i++) {
      let angle = random(TWO_PI);
      let speed = random(0.8, 2.2);

      particles.push({
        x: origin.x + random(-55, 55),
        y: origin.y + random(-45, 45),
        vx: cos(angle) * speed,
        vy: sin(angle) * speed,
        size: random(4, 10),
        alpha: 240,
        glow: random(25, 45),
        c: random(palette)
      });
    }

    if (frameCount % 16 === 0) {
      ripples.push({
        x: origin.x,
        y: origin.y,
        r: 35,
        alpha: 120,
        speed: map(bass, 0, 255, 1.2, 3)
      });
    }
  }
}

function drawParticles() {
  blendMode(SCREEN);
  noStroke();

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];

    fill(red(p.c), green(p.c), blue(p.c), p.alpha * 0.65);
    ellipse(p.x, p.y, p.glow);

    fill(red(p.c), green(p.c), blue(p.c), p.alpha);
    ellipse(p.x, p.y, p.size);

    p.x += p.vx;
    p.y += p.vy;

    p.vx *= 0.98;
    p.vy *= 0.98;

    p.alpha -= 0.8;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }

  blendMode(BLEND);
}

function drawRipples() {
  blendMode(SCREEN);
  noFill();

  for (let i = ripples.length - 1; i >= 0; i--) {
    let r = ripples[i];

    stroke(255, 190, 230, r.alpha);
    strokeWeight(1.2);
    ellipse(r.x, r.y, r.r);

    stroke(140, 210, 255, r.alpha * 0.8);
    strokeWeight(0.9);
    ellipse(r.x, r.y, r.r * 1.6);

    r.r += r.speed;
    r.alpha -= 0.8;

    if (r.alpha <= 0) {
      ripples.splice(i, 1);
    }
  }

  blendMode(BLEND);
}
