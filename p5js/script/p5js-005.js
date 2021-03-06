let img, y, h;

function setup() {
	let canvas = createCanvas(640, 335, P2D);
	canvas.parent('canvas');

	colorMode(HSB, 360, 100, 100, 100);
	background(198, 54, 30, 100);
	stroke(70, 42, 96, 100);

	h = 0.0;

	for (let i = 0; i < width; i++) {
		h = h + 0.02;
		y = noise(h) * height;
		point(i, y);
	}
}

// function draw() {}

function keyPressed() {
	if (key === 's') {
		saveCanvas('p5js-005', 'png');
	}
}
