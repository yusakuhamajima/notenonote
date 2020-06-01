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
		let img = new Image();
		img.src = './images/canvas-025-photo.png';
		img.onload = function () {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

			// rect
			for (let i = 0; i < 7; i++) {
				let colors = [
					'red',
					'blue',
					'yellow',
					'orange',
					'green',
					'black',
					'gold',
				];
				let colorNum = Math.floor(Math.random() * colors.length);
				drawRect(i, colors[colorNum]);
			}
		};
	}

	function drawRect(x, color) {
		ctx.fillStyle = color;
		ctx.globalAlpha = '0.2';
		ctx.fillRect(x * 100, 120, 100, 100);
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-025.png';
	atag.click();
}
