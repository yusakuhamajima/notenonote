(() => {
	let canvas = null;
	let ctx = null;
	let movePoint = [];
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
			movePoint[i] = new Mover();
		}
	}

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'lightyellow';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < NUM; i++) {
			movePoint[i].draw();
		}
		window.requestAnimationFrame(render);
	}

	class Mover {
		constructor() {
			this.x = canvas.width / 2;
			this.y = canvas.height / 2;
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
			ctx.fillStyle = 'blue';
			ctx.fill();
			this.x = this.x + getRandomArbitrary(-1, 1);
			this.y = this.y + getRandomArbitrary(-1, 1);
		}
	}

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
})();
