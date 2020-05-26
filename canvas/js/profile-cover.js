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
		canvas.width = 820;
		canvas.height = 312;
		ctx = canvas.getContext('2d');
	}

	function render() {
		// background
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < 150; i++) {
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			let radius = Math.floor(Math.random() * 50);
			drawArc(x, y, radius, 0, Math.PI * 2, false);
		}
	}

	function drawArc(x, y, radius, startRadian, endRadian) {
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(x, y, radius, startRadian, endRadian, false);
		ctx.closePath();
		ctx.fill();
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'profile-facebook.png';
	atag.click();
}
