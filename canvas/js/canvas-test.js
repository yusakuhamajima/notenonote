(() => {
	let canvas = null;
	let ctx = null;
	let x, y, dx, dy;
	let NUM = 100;
	let moveRect = new Array(NUM);

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
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < NUM; i++) {
			moveRect[i].drawRect();
		}
		// window.requestAnimationFrame(render);
	}

	class Mover {
		constructor() {
			this.x = Math.floor(Math.random() * canvas.width);
			this.y = Math.floor(Math.random() * canvas.height);
			this.dx = 5;
			this.dy = 5;
		}
		drawRect() {
			ctx.beginPath();
			ctx.fillStyle = 'blue';
			ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
			ctx.fill();

			if (this.x < 0 || this.x > canvas.width) {
				this.dx = this.dx * -1;
			}
			if (this.y < 0 || this.y > canvas.height) {
				this.dy = this.dy * -1;
			}
			this.x = this.x + 10 * this.dx;
			this.y = this.y + 10 * this.dy;
		}
	}
})();
