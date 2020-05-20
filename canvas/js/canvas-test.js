let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
let c = document.querySelector('canvas');
c.width = 640;
c.height = 335;
let ctx = c.getContext('2d');

ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 60; i++) {
	let x = Math.floor(Math.random() * canvas.width);
	let y = Math.floor(Math.random() * canvas.height);
	let radius = Math.floor(Math.random() * 100);
	let colors = ['red', 'blue', 'yellow'];
	let color_num = Math.floor(Math.random() * colors.length);
	drawMaru(x, y, radius, 0, Math.PI * 2, colors[color_num]);
}

function drawMaru(x, y, radius, startRadian, endRadian, color) {
	ctx.beginPath();
	ctx.globalAlpha = 0.7;
	ctx.globalCompositeOperation = 'screen';
	ctx.arc(x, y, radius, startRadian, endRadian, false);
	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}
