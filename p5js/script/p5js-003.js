function setup() {
	let canvas = createCanvas(640, 335, P2D);
	canvas.parent('canvas');
	background(255);
	noStroke();
	let step = 2;
	let noiseScale = 0.02;
	for (let j = 0; j < height; j += step) {
		for (let i = 0; i < width; i++) {
			let gray = noise(i * noiseScale, j * noiseScale) * 255;
			fill(gray);
			rect(i, j, step, step);
		}
	}
}

// function draw() {}

function keyPressed() {
	if (key === 's') {
		saveCanvas('p5js-003', 'png');
	}
}
