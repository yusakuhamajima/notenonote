// color
// red 0-65-100
// yellow 43-64-98
// green 176-61-74
// deepgreen 182-91-38

function setup() {
  var canvas = createCanvas(320, 480, P2D);
  canvas.parent("canvas");
  colorMode(HSB, 360, 100, 100, 100);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(270, 0, 100, 100);
  noStroke();
  fill(182, 91, 38, 100);
  rect(10, 10, 300, 100);
  fill(176, 61, 74, 100);
  rect(10, 120, 300, 100);
  fill(43, 64, 98, 100);
  rect(10, 230, 300, 100);
  fill(0, 65, 100, 100);
  rect(10, 340, 300, 100);

  fill(100, 0, 100, 100);
  textSize(48);
  text("320×480", width / 2, height / 2 + 30);
}
