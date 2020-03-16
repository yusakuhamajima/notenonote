var c_rect, c_text;
var myfont;

function preload() {
    myfont = loadFont('./font/Spartan/static/Spartan-Light.ttf');
}

function setup() {
    var canvas = createCanvas(640, 335, P2D);
    canvas.parent('canvas');
    colorMode(HSB, 360, 100, 100, 100);
    background(196, 70, 85, 100);

    c_rect = color(180, 70, 89, 100);
    c_rect2 = color(196, 70, 85, 100);
    c_text = color(180, 70, 89, 100);

    // rect
    noStroke();
    fill(c_rect);
    rect(10, 10, 640 - 100, 335 - 100);
    fill(c_rect2);
    rect(20, 20, 640 - 200, 335 - 200);

    // text
    fill(c_text);
    textFont(myfont);
    textSize(40);
    var str = 'cc-004';
    text(str, 40, 80);
}