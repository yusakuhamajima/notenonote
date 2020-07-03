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
		ctx.fillStyle = '#282D33';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < 50; i++) {
			// arc
			let x = Math.floor(Math.random() * canvas.width);
			let y = Math.floor(Math.random() * canvas.height);
			let radius = Math.floor(Math.random() * 60);

			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2, false);
			ctx.strokeStyle = '#61DAFB';
			ctx.stroke();
		}

		// text
		ctx.fillStyle = '#61DAFB';
		ctx.font = '32px Futura';
		ctx.fillText('React 002', 235, 175);
	}
})();

function downloadImage() {
	let canvas = document.querySelector('canvas');
	let a = document.createElement('a');
	a.href = canvas.toDataURL();
	a.download = 'react-002.png';
	a.click();
}
