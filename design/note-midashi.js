// 500×312px
// noteの記事見出し画像サイズ 1280×670px（半分は640×335px）

var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;

function setup() {
    var canvas = createCanvas(w_canvas, h_canvas, P2D);
    canvas.parent('midashi');
    colorMode(HSB, 360, 100, 100, 100);
    background(100, 100, 100, 100);
    fill(200, 100, 100, 100);
    ellipse(width / 2, height / 2, 100, 100);
}

function draw() {
}

function keyPressed() {
    if (key === 's') {
        saveCanvas('generative-design', 'png');
    }
}