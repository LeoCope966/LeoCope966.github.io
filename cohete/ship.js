// Chapter 3: Asteroids  - ship.js

class Spaceship {
  constructor() {
    // All of our regular motion stuff
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();

    // Arbitrary damping to slow down ship
    this.damping = 0.999;
    this.topspeed = 6;

    // Variable for heading!
    this.heading = 0;

    // Size
    this.r = 16;

    // Are we thrusting (to color boosters)
    this.thrusting = false;
    
    // Gravity force.
    this.gravityForce = createVector(0, 0.001);
  }

  // Standard Euler integration
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.damping);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  // Newton's law: F = M * A
  applyForce(force) {
    let f = force.copy();
    //f.div(mass); // ignoring mass right now
    this.acceleration.add(f);
  }

  // Turn changes angle
  turn(angle) {
    this.heading += angle;
  }

  // Apply a thrust force
  thrust() {
    // Offset the angle since we drew the ship vertically
    let angle = this.heading - PI / 2;
    let force = p5.Vector.fromAngle(angle);
    force.mult(0.01);
    this.applyForce(force);
    // To draw booster
    this.thrusting = true;
  }
  
  // Apply a gravity force
  gravity() {
    this.applyForce(this.gravityForce);
  }

  wrapEdges() {
    let buffer = this.r * 2;
    if (this.position.x > width + buffer) this.position.x = -buffer;
    else if (this.position.x < -buffer) this.position.x = width + buffer;
  //  if (this.position.y > height + buffer) this.position.y = -buffer;
    if (this.position.y > height - buffer - 8) { 
      this.acceleration.x = 0;
      this.velocity.x = 0; 
      this.acceleration.y = 0;
      this.velocity.y = 0;
      this.position.y = height  - 40; // + buffer
    }
    else if (this.position.y < -buffer) this.position.y = height + buffer;
  }

  // Draw the ship
  show() {
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y + this.r);
    rotate(this.heading);
    fill(175);
    if (this.thrusting) fill(255, 0, 0);
    // Booster rockets
    rectMode(CENTER);
    rect(-this.r / 2, this.r, this.r / 3, this.r / 2);
    rect(this.r / 2, this.r, this.r / 3, this.r / 2);
    fill(175);
    // A triangle
    beginShape();
    vertex(-this.r, this.r);
    vertex(0, -this.r);
    vertex(this.r, this.r);
    endShape(CLOSE);
    rectMode(CENTER);
    pop();

    this.thrusting = false;
  }
}