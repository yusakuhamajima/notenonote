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
		canvas = document.body.querySelector('canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		// background
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		// rect
		let linearGradient = ctx.createLinearGradient(50, 50, 50, 250);
		linearGradient.addColorStop(0, 'white');
		linearGradient.addColorStop(0.5, 'red');
		linearGradient.addColorStop(1.0, 'blue');
		ctx.fillStyle = linearGradient;
		ctx.fillRect(50, 50, 200, 200);

		// arc
		ctx.beginPath();
		let radialGradient = ctx.createRadialGradient(450, 150, 30, 450, 150, 100);
		radialGradient.addColorStop(0.0, 'yellow');
		radialGradient.addColorStop(0.5, 'orange');
		radialGradient.addColorStop(1.0, 'green');
		ctx.fillStyle = radialGradient;
		ctx.arc(450, 150, 100, 0, Math.PI * 2, false);
		ctx.fill();

		// http://www.htmq.com/canvas/createRadialGradient.shtml
		// createRadialGradient(x0, y0, r0, x1, y1, r1)
		// 最初の半径(x0, y0, r0)の内側は最初の色が入る。ここではyellow。
		// x1, y1, r1は外側の円
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-024.png';
	atag.click();
}
