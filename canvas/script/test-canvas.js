let canvas = document.body.querySelector('canvas');
let ctx = canvas.getContext('2d');

let isDrawing = false;
let x = 0;
let y = 0;

// ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// mousedown, mousemove, mouseup にイベントリスナーを追加
canvas.addEventListener('mousedown', (e) => {
	x = e.offsetX;
	y = e.offsetY;
	isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
	if (isDrawing === true) {
		drawLine(ctx, x, y, e.offsetX, e.offsetY);
		x = e.offsetX;
		y = e.offsetY;
	}
});

window.addEventListener('mouseup', (e) => {
	if (isDrawing === true) {
		drawLine(ctx, x, y, e.offsetX, e.offsetY);
		x = 0;
		y = 0;
		isDrawing = false;
	}
});

function drawLine(ctx, x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.closePath();
}
