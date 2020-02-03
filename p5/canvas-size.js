function setup() {
  var canvas = createCanvas(320, 480, P2D);
  canvas.parent("canvas");
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(270, 100, 100, 100);
  noStroke();
  fill(90, 100, 100, 100);
  rect(100, 100, 100, 100);
}
