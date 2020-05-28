const FRAMERATE = 60;
let canvasParent = document.getElementById('canvasParent');
let canvas = document.getElementById('canvas');

let resize = () => {
	canvas.width = canvasParent.clientWidth;
	canvas.height = canvasParent.clientHeight;
};

let draw = () => {
	let context = canvas.getContext('2d');
	context.fillStyle = 'red';
	context.fillRect(100, 100, 80, 80);
	context.fillStyle = 'blue';
	context.fillRect(0, 0, canvas.width, canvas.height);
};

let world = () => {
	resize();
	draw();
};

setInterval(() => world(), 1000 / FRAMERATE);
