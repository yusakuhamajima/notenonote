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
		canvas.width = 1280;
		canvas.height = 640;
		ctx = canvas.getContext('2d');
	}

	function render() {
		ctx.fillStyle = '#282D33';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// text
		ctx.fillStyle = 'Greenyellow';
		ctx.font = '48px Helvetica';
		ctx.fillText('Math', 550, 340);
	}
})();

function downloadImage() {
	let canvas = document.querySelector('canvas');
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = 'Math-cover.png';
	a.click();
}
