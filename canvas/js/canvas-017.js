(() => {
	let canvas = null;
	let ctx = null;

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
		for (let i = 0; i < 60; i++) {
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			let radius = Math.floor(Math.random() * 100);
			let colors = ['red', 'blue', 'yellow'];
			let color_num = Math.floor(Math.random() * colors.length);
			drawMaru(x, y, radius, 0, Math.PI * 2, colors[color_num]);
		}
	}

	function drawMaru(x, y, radius, startRadian, endRadian, color) {
		ctx.beginPath();
		ctx.globalAlpha = 0.7;
		ctx.globalCompositeOperation = 'screen';
		ctx.arc(x, y, radius, startRadian, endRadian, false);
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-017.png';
	link.click();
}
