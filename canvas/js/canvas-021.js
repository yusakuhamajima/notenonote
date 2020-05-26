(() => {
	let canvas = null;
	let ctx = null;
	// let x, y;

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
		ctx.fillStyle = 'lightyellow';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let degrees = 0; degrees < canvas.width; degrees += 5) {
			let x = degrees;
			let radians = (Math.PI / 180) * degrees;
			let y = Math.floor(Math.sin(radians) * 100) + canvas.height / 2;
			console.log(y);
			drawArc(x, y);
		}
	}

	function drawArc(x, y) {
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.arc(x, y, 1, 0, Math.PI * 2, false);
		ctx.fill();
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-021.png';
	link.click();
}
