(() => {
	let canvas = null;
	let ctx = null;
	let ball = null;

	window.addEventListener(
		'load',
		() => {
			initialize();
			render();
		},
		false
	);

	function initialize() {
		canvas = document.querySelector('#main_canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		// background
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ball = {
			x: 200,
			y: 150,
			radius: 50,
			color: 'lightblue',
			draw: function () {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.fillStyle = this.color;
				ctx.fill();
			},
		};
		ball.draw();
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('#main_canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-015.png';
	link.click();
}
