function setup() {
	createCanvas(640, 335);
}

function draw() {
	background(220);
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
}
