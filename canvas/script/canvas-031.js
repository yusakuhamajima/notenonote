(() => {
	let canvas = null;
	let ctx = null;
	let movePoint = [];
	let NUM = 200;

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
		ctx = canvas.getContext('2d');
	}

	function render() {
		canvas.addEventListener('mousemove', (e) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// background
			ctx.fillStyle = 'lightslategrey';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			var rect = e.target.getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			console.log(`${x}:${y}`);

			// rect
			ctx.fillStyle = 'limegreen';
			ctx.fillRect(10, 10, x, y);
		});
	}
})();

function downloadCanvas() {
	let canvas = document.body.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-031.png';
	atag.click();
}
