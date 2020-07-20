let img, y, h;

function setup() {
	let canvas = createCanvas(640, 335, P2D);
	canvas.parent('canvas');

	colorMode(HSB, 360, 100, 100, 100);

	background(0, 0, 72, 100);

	noStroke();
	textAlign(CENTER, CENTER);
	textSize(42);
	textFont('Arial');
	text('SuperCollider 001', width / 2, height / 2);
}

// function draw() {}

function keyPressed() {
	if (key === 's') {
		saveCanvas('supercollider-midashi-img001', 'png');
	}
}
