var w_canvas, h_canvas;
w_canvas = 640;
h_canvas = 335;

function setup() {
	createCanvas(w_canvas, h_canvas);
}

function draw() {
	background(220);
	ellipse(50, 50, 80, 80);
	ellipse(200, 50, 80, 80);
}

function keyPressed() {
	if (key === 's') {
		saveCanvas('p5js-001', 'png');
	}
}
