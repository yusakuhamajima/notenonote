(() => {
	let canvas = null;
	let ctx = null;
	let locX = 0;
	let locY = 0;
	let velX = 5;
	let velY = 1;
	let graY = 1;
	let forceX;
	let forceY;
	let acceleration;
	let mass;
	let friction;

	window.addEventListener('load', () => {
		initialize();
		render();
	});

	function initialize() {
		canvas = document.body.querySelector('canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');
	}

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'crimson';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		velY = velY + graY;
		locX = locX + velX;
		locY = locY + velY;
		drawArc(locX, locY);

		if (locY > canvas.height) {
			velY = velY * -1;
		}

		window.requestAnimationFrame(render);
	}

	function drawArc(x, y) {
		ctx.beginPath();
		ctx.arc(locX, locY, 10, 0, Math.PI * 2, false);
		ctx.fillStyle = 'blue';
		ctx.fill();
	}
})();