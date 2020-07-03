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
	background(0, 0, 100, 100);

	micLevel = mic.getLevel();
	console.log(micLevel);

	let y = height - micLevel * height * 10;
	// let y = 100;
	fill(343, 85, 92, 100);
	rect(width / 2, y, 10, height);
}
