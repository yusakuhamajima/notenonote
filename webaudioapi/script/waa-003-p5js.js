let mic;

function setup() {
	let canvas = createCanvas(640, 335, P2D);
	canvas.parent('myContainer');

	colorMode(HSB, 360, 100, 100, 100);
	noStroke();

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	background(175, 96, 72, 100);

	micLevel = mic.getLevel();

	let w = micLevel * height * 5;
	fill(48, 81, 100, 100);
	ellipse(width / 2, height / 2, w, w);
}

function keyPressed() {
	if (key === 's') {
		playSound();
	}
}
