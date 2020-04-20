// noteマガジンヘッダーサイズ　1600×568px

let canvas_w = 1600 / 2;
let canvas_h = 568 / 2;
let w, myfont;

function preload() {
	myfont = loadFont("./font/Spartan/static/Spartan-Light.ttf");
}

function setup() {
	var canvas = createCanvas(canvas_w, canvas_h, P2D);
	canvas.parent("canvas");

	colorMode(HSB, 360, 100, 100, 100);
	background(204, 77, 100, 100);

	// 泡
	noStroke();
	for (let i = 0; i < 1000; i++) {
		w = random(5, 60);
		fill(0, 0, 100, random(5, 25));
		ellipse(random(0, width), random(0, height), w, w);
	}

	text;
	c_text = color(204, 77, 100, 100);
	fill(c_text);
	textFont(myfont);
	textSize(40);
	text("Programming", 100, 130);
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("note-programming", "png");
	}
}
