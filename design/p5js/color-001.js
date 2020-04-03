function setup() {
	var canvas = createCanvas(640, 335, P2D);
	canvas.parent("canvas");
	colorMode(HSB, 360, 100, 100, 100);
	background(215, 86, 47, 100);
	noStroke();

	fill(200, 96, 93, 100);
	rect(0, 0, width, 50);

	fill(29, 85, 96, 100);
	rect(0, 50, width, 50);

	fill(29, 55, 98, 100);
	rect(0, 100, width, 50);

	fill(352, 91, 92, 100);
	rect(0, 150, width, 50);
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("color-001", "png");
	}
}
