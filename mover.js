class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = this.mass * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.gravForce = createVector(0, 0.004 * mass);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    strokeWeight(2);
    stroke(1);
    fill(127);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
  
   keyPressed(k) {
     
      if (keyCode === UP_ARROW & keyIsPressed) { 
         let gunForce = createVector(0.5, -0.5);
         movers[k].applyForce(gunForce);
      }
   }
}