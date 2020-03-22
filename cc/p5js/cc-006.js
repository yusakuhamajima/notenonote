var myfont;

function preload() {
    myfont = loadFont('./font/Spartan/static/Spartan-Light.ttf');
}

function setup() {
    var canvas = createCanvas(640, 335, WEBGL);
    canvas.parent('canvas');
    colorMode(HSB, 360, 100, 100, 100);
    background(184, 49, 100, 100);

    // text
    fill(64, 100, 100, 100);
    textFont(myfont);
    textSize(40);
    text('cc-006', -290, -100);

    noStroke();
    for (let i = 1; i <= 200; i++) {
        translate(10, -40, -70);
        fill(random(64, 164), 13, 100, 100);
        rotateX(i * 12);
        rotateY(i * 12);
        rotateZ(i * random(6, 10));
        box(100, 90, i * 5);
    }
}

function keyPressed() {
    if (key === 's') {
        saveCanvas('cc-006', 'png');
    }
}
