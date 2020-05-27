(() => {
	let canvas = null;
	let ctx = null;
	let x = 0;
	let d = -1;

	window.addEventListener(
		'load',
		() => {
			initialize();
			render();
		},
		false
	);

	function initialize() {
		canvas = document.querySelector('canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		loop();
	}

	function loop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// background
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// arrow
		ctx.strokeStyle = 'red';
		ctx.beginPath();
		// right
		ctx.moveTo(300, 115);
		ctx.lineTo(280, 105);
		ctx.moveTo(300, 115);
		ctx.lineTo(200, 115);
		ctx.moveTo(300, 115);
		ctx.lineTo(280, 125);
		// left
		ctx.moveTo(200, 135);
		ctx.lineTo(220, 125);
		ctx.moveTo(200, 135);
		ctx.lineTo(300, 135);
		ctx.moveTo(200, 135);
		ctx.lineTo(220, 145);
		ctx.closePath();
		ctx.stroke();

		// rect
		ctx.fillStyle = 'red';
		ctx.fillRect(x, 110, 30, 30);

		if (x < 0 || x > canvas.width) {
			d = d * -1;
		}
		x = x + 10 * d;

		window.requestAnimationFrame(loop);
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-023.png';
	atag.click();
}
