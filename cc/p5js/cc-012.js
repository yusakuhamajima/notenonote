// noteマガジンヘッダーサイズ　1600×568px

let w, myfont;

function preload() {
	myfont = loadFont("./font/Spartan/static/Spartan-Light.ttf");
}

function setup() {
	var canvas = createCanvas(800, 284, P2D);
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
