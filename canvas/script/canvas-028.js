(() => {
	let canvas = null;
	let ctx = null;

	let x, y;
	let moveRect = [];
	let NUM = 100;

	window.addEventListener(
		'load',
		() => {
			initialize();
			render();
		},
		false
	);

	function initialize() {
		canvas = document.body.querySelector('canvas');
		ctx = canvas.getContext('2d');

		for (let i = 0; i < NUM; i++) {
			moveRect[i] = new Mover();
		}
	}

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// background
		ctx.fillStyle = 'lightyellow';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < NUM; i++) {
			moveRect[i].drawRect();
		}
		window.requestAnimationFrame(render);
	}

	class Mover {
		constructor() {
			this.x = Math.floor(Math.random() * canvas.width);
			this.y = Math.floor(Math.random() * canvas.height);
			this.dx = getRandomInt(-5, 5);
			this.dy = getRandomInt(-5, 5);
		}
		drawRect() {
			ctx.beginPath();
			ctx.fillStyle = 'green';
			ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
			ctx.fill();

			if (this.x < 0 || this.x > canvas.width) {
				this.dx = this.dx * -1;
			}
			if (this.y < 0 || this.y > canvas.height) {
				this.dy = this.dy * -1;
			}
			this.x = this.x + this.dx;
			this.y = this.y + this.dy;
		}
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-028.png';
	atag.click();
}
