var w_canvas, h_canvas;
w_canvas = 640;
h_canvas = 335;
var x = 0;
var d = -1;

function setup() {
	createCanvas(w_canvas, h_canvas);
}

function draw() {
	background(220);
	ellipse(x, 50, 80, 80);
	x = x + 10 * d;
	if (x < 0 || x > w_canvas) {
		d = d * -1;
	}
}

function keyPressed() {
	if (key === 's') {
		saveCanvas('p5js-001', 'png');
	}
}
