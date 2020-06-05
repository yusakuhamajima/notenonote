const canvas = document.body.querySelector('canvas');
canvas.width = 640;
canvas.height = 335;
const ctx = canvas.getContext('2d');

// bg
ctx.fillStyle = '#aaa';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ---
let Zukei = function (x, y, w) {
	this.x = x;
	this.y = y;
	this.w = w;
};

Zukei.prototype.drawRect = function () {
	return ctx.fillRect(this.x, this.y, this.w, this.w);
};

Zukei.prototype.drawArc = function () {
	return ctx.arc(this.x, this.y, this.w, 0, Math.PI * 2, false);
};

// rect
let mem = new Zukei(100, 100, 200);
ctx.fillStyle = 'red';
mem.drawRect();

// arc
let mem1 = new Zukei(350, 200, 10);
ctx.beginPath();
mem1.drawArc();
ctx.fillStyle = 'green';
ctx.fill();