let noiseMax = 1;
let zoff = 0;

let ox, oy, ot;

let MAX;

let alpha = 100;

function setup() {
	let canvas = createCanvas(664, 335);
	canvas.parent('canvas');

	angleMode(DEGREES);

	ox = width / 2;
	oy = height;

	MAX = max(width, height);

	noFill();
	// background("#E7ECF2");
	background(0);
}

function draw() {
	blendMode(BLEND);
	// background(0, 3);

	if (frameCount % 10 == 0) {
		background(0, 15);
	}

	blendMode(SCREEN);

	ot = map(noise(zoff * 0.25), 0, 1, -360, 360);

	push();
	translate(ox, oy);
	rotate(ot);

	let gradientStroke = drawingContext.createLinearGradient(
		-width / 2,
		0,
		width / 2,
		0
	);

	gradientStroke.addColorStop(0, color(255, 0, 255, alpha));
	gradientStroke.addColorStop(0.5, color(255, 255, 0, alpha));
	gradientStroke.addColorStop(1, color(0, 255, 255, alpha));

	drawingContext.strokeStyle = gradientStroke;
	beginShape();
	for (let t = 0; t < 360; t++) {
		let xoff = map(cos(t), -1, 1, 0, noiseMax);
		let yoff = map(sin(t), -1, 1, 0, noiseMax);

		let n = noise(xoff, yoff, zoff);

		let r = map(n, 0, 1, 0, height * 1.5);
		let x = r * cos(t);
		let y = r * sin(t);

		// let c = lerpColor(ca, cb, n);

		vertex(x, y);
	}
	endShape(CLOSE);

	zoff += 0.005;
}
