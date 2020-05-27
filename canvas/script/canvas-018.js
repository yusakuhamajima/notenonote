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
		// background
		ctx.fillStyle = '#aaa';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// rect
		ctx.fillStyle = 'red';
		ctx.fillRect(50, 50, 80, 80);

		// line
		ctx.strokeStyle = 'blue';
		ctx.beginPath();
		ctx.moveTo(150, 80);
		ctx.lineTo(250, 300);
		ctx.closePath();
		ctx.stroke();

		// maru
		ctx.fillStyle = 'yellow';
		let startRadian = 0;
		let endRadian = Math.PI * 2;
		ctx.beginPath();
		ctx.arc(300, 150, 60, startRadian, endRadian, false);
		ctx.fill();

		// sankaku
		ctx.fillStyle = 'green';
		ctx.beginPath();
		ctx.moveTo(400, 100);
		ctx.lineTo(350, 280);
		ctx.lineTo(450, 280);
		ctx.closePath();
		ctx.fill();

		// moji
		ctx.fillStyle = 'orange';
		ctx.font = '48px serif';
		ctx.fillText('Canvas', 450, 200);
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector('canvas');
	let link = document.createElement('a');
	link.href = canvas.toDataURL();
	link.download = 'canvas-018.png';
	link.click();
}
