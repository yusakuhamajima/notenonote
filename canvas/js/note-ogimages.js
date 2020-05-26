(() => {
	let canvas = null;
	let ctx = null;

	// let x, y, dx, dy;

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
		ctx.fillStyle = '#228D73';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// text
		drawText();
	}

	function drawText() {
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.font = '48px serif';
		ctx.fillText('notenonote', canvas.width / 2, canvas.height / 2);
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'note-ogimages.png';
	atag.click();
}
