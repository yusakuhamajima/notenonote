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
		// background
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		setInterval(() => {
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			let radius = Math.floor(Math.random() * 40);
			drawArc(x, y, radius);
		}, 100);
	}

	function drawArc(x, y, radius) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = 'yellow';

		let distance = Math.hypot(canvas.width / 2 - x, canvas.height / 2 - y);
		console.log(distance);

		if (distance < 150) {
			ctx.fillStyle = 'blue';
			ctx.fill();
		} else {
			ctx.strokeStyle = 'blue';
			ctx.stroke();
		}
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-020.png';
	link.click();
}
