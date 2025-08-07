// Chapter 3: Asteroids exercise - sketch.js

// Mover object
let ship;

function setup() {
  createCanvas(900, 450);
  ship = new Spaceship();
}

function draw() {
   background(250, 200, 200);

  // Apply gravity force
  ship.gravity();
  // Update position
  ship.update();
  // Wrape edges
  ship.wrapEdges();
  // Draw ship
  ship.show();

  // fill(0);
  // text("left right arrows to turn, z to thrust",10,height-5);

  // Turn or thrust the ship depending on what key is pressed
  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.03);
  } else if (keyIsDown(90)) {
    ship.thrust();
  }
}