(() => {
	let canvas = null;
	let ctx = null;

	window.addEventListener(
		'load',
		() => {
			initial();
			render();
		},
		false
	);

	function initial() {
		canvas = document.querySelector('canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		ctx.fillStyle = 'crimson';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// rect
		for (let i = 0; i < 150; i++) {
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			let w = Math.floor(Math.random() * 80);

			ctx.globalAlpha = '0.2';
			ctx.strokeStyle = '#61DAFB';
			ctx.strokeRect(x, y, w, w);

			ctx.globalAlpha = '0.1';
			ctx.fillStyle = 'darkturquoise';
			ctx.fillRect(x, y, w, w);
		}

		// text
		ctx.globalAlpha = '1.0';
		ctx.fillStyle = '#61DAFB';
		ctx.font = '32px Futura';
		ctx.fillText('Web Design 001', 60, 80);
	}
})();

function downloadImage() {
	let canvas = document.querySelector('canvas');
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = 'webdesign-001.png';
	a.click();
}
