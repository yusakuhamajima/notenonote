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
		canvas.height = 670;
		ctx = canvas.getContext('2d');
	}
	function render() {
		ctx.fillStyle = 'crimson';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'thistle';
		ctx.font = '60px Futura';
		ctx.fillText('Web Design', 100, 330);
	}
})();

function downloadImage() {
	let canvas = document.querySelector('canvas');
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = 'webdesign-cover.png';
	a.click();
}
