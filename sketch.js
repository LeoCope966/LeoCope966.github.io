// Cannon simulation - press up arrow to fire.

let movers = [];

function setup() {
  createCanvas(550, 450);
 
  for (let i = 0; i < 10; i++) {
    movers.push(new Mover(0, 200, random(0.4, 4)));
  }
}

function keyPressed() {
  
  for (let i = 0; i < movers.length; i++) {
    movers[i].keyPressed(i);
  }
}

function draw() {
  background(220);
 
  for (let i = 0; i < movers.length; i++) {
    
     movers[i].applyForce(movers[i].gravForce);
     movers[i].update();
     movers[i].show();
  }
}