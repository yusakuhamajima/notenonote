function preload() {
	img = loadImage('./source/IMG_3411.png');
}

function setup() {
	let canvas = createCanvas(640, 335, P2D);
	canvas.parent('canvas');
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
	background(343, 85, 92, 100);
	image(img, 10, 10, 640 - 20, 335 - 20);
}

function keyPressed() {
	if (key === 's') {
		saveCanvas('p5js-002', 'png');
	}
}
