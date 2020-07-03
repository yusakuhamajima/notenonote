let canvas = document.querySelector('canvas');
canvas.width = '640';
canvas.height = '335';
let ctx = canvas.getContext('2d');

// bg
let bg = [
	'black',
	'darkblue',
	'darkgreen',
	'darkred',
	'darkslateblue',
	'darkslategrey',
	'indigo',
	'midnightblue',
	'tomato',
];
let num = Math.floor(Math.random() * bg.length);
ctx.fillStyle = bg[num];
ctx.fillRect(0, 0, canvas.width, canvas.height);

// class
let Rect = function (x, y, w, color, a) {
	if (a !== null) {
		ctx.globalAlpha = a;
	}
	// ctx.fillStyle = color;
	// ctx.fillRect(x, y, w, w);
	ctx.strokeStyle = color;
	ctx.strokeRect(x, y, w, w);
};

for (let i = 0; i < 1000; i++) {
	let rndX = Math.floor(Math.random() * canvas.width);
	let rndY = Math.floor(Math.random() * canvas.height);
	let w = Math.floor(Math.random() * 100);
	let a = '1.0';
	let c = [
		'deeppink',
		'cadetblue',
		'BlueViolet',
		'Charteuse',
		'fuchsia',
		'greenyellow',
		'hotpink',
		'lawngreen',
		'lightseagreen',
	];
	let num = Math.floor(Math.random() * c.length);
	let r = new Rect(rndX, rndY, w, c[num], a);
}

function downloadImage() {
	canvas = document.querySelector('canvas');
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = 'cc-013.png';
	a.click();
}
