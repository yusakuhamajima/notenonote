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
		for (let i = 0; i < 30; i++) {
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			let radius = Math.floor(Math.random() * 100);
			drawMaru(x, y, radius, 0, Math.PI * 2);
		}
	}

	function drawMaru(x, y, radius, startRadian, endRadian) {
		ctx.beginPath();
		ctx.globalAlpha = 0.5;
		ctx.arc(x, y, radius, startRadian, endRadian, false);
		ctx.closePath();
		ctx.fillStyle = 'lightblue';
		ctx.fill();
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('#canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-016.png';
	link.click();
}
