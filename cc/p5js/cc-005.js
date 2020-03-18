var myfont;

function preload() {
    myfont = loadFont('./font/Spartan/static/Spartan-Light.ttf');
}

function setup() {
    var canvas = createCanvas(640, 335, WEBGL);
    canvas.parent('canvas');
    colorMode(HSB, 360, 100, 100, 100);
    background(265, 95, 65, 100);

    // box
    push();
    strokeWeight(0.3);
    for (let i = 0; i < 30; i++) {
        fill(329, 73, 100, random(5, 95));
        rotateX(i * 12);
        rotateY(i * 12);
        rotateZ(i * 12);
        box(150);
    }
    pop();

    //text
    translate(0, 0);
    fill(200, 100, 100, 100);
    textFont(myfont);
    textSize(32);
    text('cc-005', 0, 30);
}

function keyPressed() {
    if (key === 's') {
        saveCanvas('cc-005', 'png');
    }
}