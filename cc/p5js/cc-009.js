var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;
// var myfont, fontsize;

// function preload() {
// 	myfont = loadFont("./font/Spartan/static/Spartan-Light.ttf");
// }

function setup() {
	var canvas = createCanvas(w_canvas, h_canvas, P2D);
	canvas.parent("canvas");
	colorMode(HSB, 360, 100, 100, 100);
	background(215, 86, 47, 100);

	noLoop();
	for (i = 0; i < w_canvas; i += 0.03) {
		var randomHeight = noise(i * 0.02) * h_canvas;
		stroke(352, 91, 92, 100);
		point(i, randomHeight);
		stroke(29, 85, 96, 100);
		point(i, random(h_canvas, randomHeight));
		stroke(200, 96, 93, 100);
		point(i, random(0, randomHeight));
	}

	// text
	// fill(62, 71, 94, 100);
	// textFont(myfont);
	// textSize(40);
	// text("cc-009", 20, 60);
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("cc-009", "png");
	}
}
