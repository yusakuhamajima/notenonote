(() => {
	let canvas = null;
	let ctx = null;

	window.addEventListener('load', () => {
		initialize();
		render();
	});

	function initialize() {
		canvas = document.body.querySelector('canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		ctx.fillStyle = 'crimson';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		let RECT = function (x, y, w) {
			this.x = x;
			this.y = y;
			this.w = w;
		};

		RECT.prototype.drawRect = function () {
			return ctx.fillRect(this.x, this.y, this.w, this.w);
		};

		for (let i = 0; i < 20; i++) {
			let rect = new RECT(i * 20, i * 20, 10);
			ctx.fillStyle = 'goldenrod';
			rect.drawRect();
		}
	}
})();
