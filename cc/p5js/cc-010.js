// 500×312px
// noteの記事見出し画像サイズ 1280×670px（半分は640×335px）

var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;
var c_bg, c_rect;

function setup() {
	var canvas = createCanvas(w_canvas, h_canvas, P2D);
	canvas.parent("canvas");
	colorMode(HSB, 360, 100, 100, 100);

	// color
	c_bg = color(200, 96, 93, 100);
	c_text = color(0, 0, 100, 100);

	background(c_bg);

	// main contents
	noLoop();
	for (i = 0; i < w_canvas; i += 0.07) {
		var randomHeight = noise(i * 0.02) * h_canvas;
		var randomHeight2 = noise(i * 0.03) * h_canvas * 0.5;
		stroke(200, 96, 93, 2);
		point(i, randomHeight);
		// kon
		stroke(215, 86, 47, 20);
		line(i, random(h_canvas, randomHeight), i, height);
		// orange
		fill(29, 85, 96, 50);
		var w = random(1, 10);
		ellipse(i, random(randomHeight2, randomHeight - random(-100, 20)), w, w);
	}
}

function draw() {}

function keyPressed() {
	if (key === "s") {
		saveCanvas("cc-010", "png");
	}
}
