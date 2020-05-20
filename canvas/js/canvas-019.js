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
		setInterval(() => {
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			drawArc(x, y, 10, 0, Math.PI * 2);
		}, 100);
	}

	function drawArc(x, y, radius, startRadian, endRadian) {
		ctx.beginPath();
		ctx.arc(x, y, radius, startRadian, endRadian, false);
		ctx.closePath();
		ctx.fill();
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-019.png';
	link.click();
}
