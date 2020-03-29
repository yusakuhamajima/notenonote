var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;
var myfont, fontsize;

function preload() {
	myfont = loadFont("./font/Spartan/static/Spartan-Light.ttf");
}

function setup() {
	var canvas = createCanvas(w_canvas, h_canvas, P2D);
	canvas.parent("canvas");
	colorMode(HSB, 360, 100, 100, 100);
	background(268, 94, 60, 100);

	noLoop();
	for (i = 0; i < w_canvas; i += 0.03) {
		var randomHeight = noise(i * 0.02) * h_canvas;
		stroke(62, 71, 94, 100);
		point(i, randomHeight);
		stroke(299, 81, 87, 100);
		point(i, random(h_canvas, randomHeight));
		stroke(235, 77, 86, 100);
		point(i, random(0, randomHeight));
	}

	// text
	fill(62, 71, 94, 100);
	textFont(myfont);
	textSize(40);
	text("cc-008", 20, 60);
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("cc-008", "png");
	}
}
