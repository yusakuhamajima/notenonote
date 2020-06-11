(() => {
	let canvas = null;
	let ctx = null;
	let getRect;

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
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		let Rect = function (x, y, w) {
			this.x = x;
			this.y = y;
			this.radius = w;
			// this.createRect = function () {
			// 	return ctx.fillRect(this.x, this.y, this.radius, this.radius);
			// };
		};

		Rect.prototype.createRect = function () {
			return ctx.fillRect(this.x, this.y, this.radius, this.radius);
		};

		let colors = ['red', 'blue', 'yellow', 'green', 'orange'];

		for (let j = 0; j < canvas.height; j++) {
			for (let i = 0; i < canvas.width; i++) {
				getRect = new Rect(i * 10, j * 10, 6);
				ctx.fillStyle = colors[Math.floor(Math.random(-1, 1) * 10)];
				getRect.createRect();
			}
		}

		console.log(Math.floor(Math.random(-1, 1) * 10));
	}
})();
