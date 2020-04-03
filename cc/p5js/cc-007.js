var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;
var w;
// var myfont,
// 	fontsize = 40;

// function preload() {
// 	myfont = loadFont("./font/Spartan/static/Spartan-Light.ttf");
// }

function setup() {
	var canvas = createCanvas(w_canvas, h_canvas, WEBGL);
	canvas.parent("canvas");
	colorMode(HSB, 360, 100, 100, 100);
	background(265, 95, 65, 100);

	// text
	// fill(329, 73, 100, 90);
	// textFont(myfont);
	// textSize(40);
	// text("cc-007", -290, -100);

	strokeWeight(0.3);
	for (let i = 1; i <= 30; i++) {
		translate(10, -40, -70);
		fill(329, 73, 100, random(5, 95));
		rotateX(i * 12);
		rotateY(i * 12);
		rotateZ(i * random(1, 12));
		box(100, 90, i * 5);
	}
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("cc-007", "png");
	}
}
