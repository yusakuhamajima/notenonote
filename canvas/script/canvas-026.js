(() => {
	let canvas = null;
	let ctx = null;
	let x = 630;
	let y = 335;
	let xd = -1;
	let yd = -1;

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
		loop();
	}

	function loop() {
		// clear
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// background
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// arc
		ctx.fillStyle = 'blue';
		ctx.beginPath();
		ctx.arc(x, y, 20, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();
		x = x + 5 * xd;
		if (x < 0 || x > canvas.width) {
			xd = xd * -1;
		}
		y = y + 5 * yd;
		if (y < 0 || y > canvas.height) {
			yd = yd * -1;
		}

		// animation
		window.requestAnimationFrame(loop);
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-026.png';
	atag.click();
}
