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
		canvas.width = 500;
		canvas.height = 500;
		ctx = canvas.getContext('2d');
	}

	function render() {
		// background
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < 80; i++) {
			// let colors = [
			// 	'red',
			// 	'blue',
			// 	'yellow',
			// 	'black',
			// 	'white',
			// 	'orange',
			// 	'green',
			// 	'skyblue',
			// 	'purple',
			// ];
			// let num = Math.floor(Math.random() * colors.length);
			let color = 'white';
			drawArc(
				getRandomArbitrary(-100, 100),
				getRandomArbitrary(-100, 100),
				color
			);
		}

		// drawText();
	}

	function drawArc(zureX, zureY, color) {
		ctx.globalAlpha = 0.6;
		ctx.beginPath();
		ctx.arc(
			canvas.width / 2 + zureX,
			canvas.height / 2 + zureY,
			200,
			0,
			Math.PI * 2,
			false
		);
		ctx.closePath();
		ctx.strokeStyle = color;
		ctx.stroke();
	}

	// function drawText() {
	// 	ctx.globalAlpha = 1;
	// 	ctx.fillStyle = 'white';
	// 	ctx.font = '24px serif';
	// 	ctx.textAlign = 'center';
	// 	ctx.fillText('hello', canvas.width / 2, canvas.height / 2);
	// }

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'profile-01.png';
	atag.click();
}
