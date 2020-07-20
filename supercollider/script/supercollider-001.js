let img, y, h;

function setup() {
	let canvas = createCanvas(640, 335, P2D);
	canvas.parent('canvas');

	colorMode(HSB, 360, 100, 100, 100);

	background(198, 54, 30, 100);
	noStroke();
	textAlign(CENTER, CENTER);
	textSize(40);
	text('SuperCollider', width / 2, height / 2);
}

// function draw() {}

function keyPressed() {
	if (key === 's') {
		saveCanvas('p5js-005', 'png');
	}
}
