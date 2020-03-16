// 500×312px
// noteの記事見出し画像サイズ 1280×670px（半分は640×335px）

var w_canvas, h_canvas;
w_canvas = 1280 / 2;
h_canvas = 670 / 2;
var c_bg, c_rect, c_text;
var myfont;

function preload() {
    myfont = loadFont('./font/Spartan/static/Spartan-Light.ttf');
}

function setup() {
    var canvas = createCanvas(w_canvas, h_canvas, P2D);
    canvas.parent('canvas');
    colorMode(HSB, 360, 100, 100, 100);
    // rectMode(CENTER, CENTER);
    c_bg = color(196, 70, 85, 100);
    c_rect = color(180, 70, 89, 100);
    c_rect2 = color(196, 70, 85, 100);
    c_text = color(180, 70, 89, 100);
    background(c_bg);

    // rect
    noStroke();
    fill(c_rect);
    rect(10, 10, w_canvas - 100, h_canvas - 100);
    fill(c_rect2);
    rect(20, 20, w_canvas - 200, h_canvas - 200);

    // text
    fill(c_text);
    textFont(myfont);
    textSize(40);
    var str = '11weeks2020';
    text(str, 40, 80);
}