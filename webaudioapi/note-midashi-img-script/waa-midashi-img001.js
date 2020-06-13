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
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 0.4;

		for (let i = 0; i < canvas.height; i++) {
			ctx.beginPath();
			ctx.moveTo(0, i * 5);
			ctx.lineTo(canvas.width, i * 5);
			ctx.closePath();
			ctx.strokeStyle = 'Gainsboro';
			ctx.stroke();
		}

		ctx.fillStyle = 'MediumBlue';
		ctx.font = '48px Chalkduster';
		ctx.fillText('Web Audio API', 100, 160);
		ctx.fillText('001', 270, 220);
	}
})();

function downloadImage() {
	let canvas = document.querySelector('canvas');
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = 'waa-001.png';
	a.click();
}
