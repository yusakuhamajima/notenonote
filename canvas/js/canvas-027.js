(() => {
	let canvas = null;
	let ctx = null;

	// let x, y, dx, dy;

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
		moveRect = new Mover();
	}

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// background
		ctx.fillStyle = 'lightyellow';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		moveRect.drawRect();
		window.requestAnimationFrame(render);
	}

	class Mover {
		constructor() {
			this.x = 100;
			this.y = 100;
			this.dx = 5;
			this.dy = 3;
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
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-027.png';
	atag.click();
}
