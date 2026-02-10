let song;
let font;
let fft;
let view = 0;

let avatarX = 0;
let avatarZ = 0;
let avatarSpeed = 5;

let floorTexture, backTexture, leftTexture, rightTexture, glassTexture;

function preload() {
  font = loadFont('/assets/helvetica.ttf'); // or any .ttf in your public/assets folder
  song = loadSound("audio/PASSIONFRUIT-JUSTICE-DER.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fft = new p5.FFT(0.8, 1024);
  textFont(font); // set font for WEBGL

  // COLORS
  let floorC1 = color(158, 114, 40);
  let floorC2 = color(230, 189, 119);

  let backC1 = color(102, 69, 12);
  let backC2 = color(145, 106, 38);

  let sideC1 = color(92, 71, 33);
  let sideC2 = color(166, 133, 73);

  let glassC1 = color(125, 166, 184);
  let glassC2 = color(176, 188, 194);

  // create textures
  floorTexture = createGraphics(400, 400);
  setGradient(floorTexture, floorC1, floorC2);

  backTexture = createGraphics(400, 400);
  setGradient(backTexture, backC1, backC2);

  leftTexture = createGraphics(400, 400);
  setGradient(leftTexture, sideC1, sideC2);

  rightTexture = createGraphics(400, 400);
  setGradient(rightTexture, sideC1, sideC2);


  glassTexture = createGraphics(400, 400);
  setGradient(glassTexture, glassC1, glassC2);
}

function draw() {
  background(255);

  orbitControl();

  handleMovement();
  drawAvatar();

  drawRoomNoGlass();

  // Draw the glass **after** the avatar but slightly behind
  drawGlass();
}

function drawAvatar() {
  push();
  translate(avatarX, 180, avatarZ); // 180 to sit above floor
  fill(255, 0, 0);
  noStroke();
  sphere(10);
  pop();
}

function handleMovement() {
  if (keyIsDown(87)) avatarZ -= avatarSpeed; // W
  if (keyIsDown(83)) avatarZ += avatarSpeed; // S
  if (keyIsDown(65)) avatarX -= avatarSpeed; // A
  if (keyIsDown(68)) avatarX += avatarSpeed; // D

  avatarX = constrain(avatarX, -200, 200);
  avatarZ = constrain(avatarZ, -200, 200);
}

function setGradient(g, c1, c2) {
  for (let y = 0; y < g.height; y++) {
    let inter = map(y, 0, g.height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    g.stroke(c);
    g.line(0, y, g.width, y);
  }
}


function drawRoomNoGlass() {
  // FLOOR
  push();
  translate(0, 200, 0);
  rotateX(HALF_PI);
  texture(floorTexture);
  plane(400, 400, 10, 10);
  pop();

  // BACK WALL
  push();
  translate(0, 0, -200);
  tint(255, 150);
  texture(backTexture);
  plane(400, 400, 10, 10);
  pop();

  // LEFT WALL
  push();
  translate(-200, 0, 0);
  rotateY(HALF_PI);
  tint(255, 150);
  texture(leftTexture);
  plane(400, 400, 10, 10);
  pop();

  // RIGHT WALL
  push();
  translate(200, 0, 0);
  rotateY(-HALF_PI);
  tint(255, 150);
  texture(rightTexture);
  plane(400, 400, 10, 10);
  pop();

  // TOP WALL
  push();
  translate(0, -200, 0);
  rotateX(-HALF_PI);
  tint(255, 150);
  texture(floorTexture);
  plane(400, 400, 10, 10);
  pop();
}

function drawGlass() {
  push();
  translate(0, 0, 200); // move it further back so avatar is in front
  tint(255, 150);
  texture(glassTexture);
  plane(400, 400, 10, 10);
  pop();
}