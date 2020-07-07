// function setup() {
// 	let canvas = createCanvas(640, 335, P2D);
// 	canvas.parent('canvas');
// 	background(255);
// 	stroke(1);
// 	let step = 10;
// 	let noiseScale = 0.01;
// 	for (let j = 0; j < height; j += step) {
// 		for (let i = 0; i < width; i += step) {
// 			let angle = noise(i * noiseScale, j * noiseScale) * PI * 2.0;
// 			push();
// 			translate(i, j);
// 			rotate(angle);
// 			line(-step / 2.0, 0, step / 2.0, 0);
// 			pop();
// 		}
// 	}
// }

let names = ['a', 'b', 'c'];
names[3] = 'd';
console.log(names);
