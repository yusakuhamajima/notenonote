var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;
var c_bg, c_rect, c_text;

function setup() {
	var canvas = createCanvas(w_canvas, h_canvas, WEBGL);
	canvas.parent("canvas");
	colorMode(HSB, 360, 100, 100, 100);
	background(29, 85, 96, 100);
	// strokeWeight(0.3);
	noStroke();
	push();
	for (let i = 1; i <= 30; i++) {
		translate(10, -40, -70);
		fill(352, 91, 92, random(60, 95));
		rotateX(i * 12);
		rotateY(i * 12);
		rotateZ(i * random(1, 12));
		box(100, 90, i * 5);
	}
	pop();
	push();
	for (let i = 1; i <= 30; i++) {
		translate(10, -40, -70);
		fill(29, 55, 98, random(70, 95));
		rotateX(i * 12);
		rotateY(i * 12);
		rotateZ(i * random(1, 12));
		box(100, 90, i * 5);
	}
	pop();
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("15weeks2020", "png");
	}
}
