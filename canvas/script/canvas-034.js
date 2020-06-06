(() => {
	let canvas = null;
	let ctx = null;
	let locX;
	let locY;
	let velX;
	let velY;
	let graY;
	let RBall = [];
	let NUM = 100;

	window.addEventListener('load', () => {
		initialize();
		render();
	});

	function initialize() {
		canvas = document.body.querySelector('canvas');
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext('2d');

		// class
		for (let i = 0; i < NUM; i++) {
			velX = getRandom(-10, 10);
			velY = getRandom(-10, 10);
			graY = getRandom(0, 1);
			RBall[i] = new releaseBalls(velX, velY, graY);
		}
	}

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'limegreen';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < NUM; i++) {
			RBall[i].draw();
		}

		window.requestAnimationFrame(render);
	}

	class releaseBalls {
		constructor(velX, velY, graY) {
			this.locX = canvas.width / 2;
			this.locY = canvas.height / 3;
			this.velX = velX;
			this.velY = velY;
			this.graY = graY;
		}
		draw() {
			this.velY = this.velY + this.graY;
			this.locX = this.locX + this.velX;
			this.locY = this.locY + this.velY;

			ctx.beginPath();
			ctx.arc(this.locX, this.locY, 5, 0, Math.PI * 2, false);
			ctx.fillStyle = 'blue';
			ctx.fill();

			if (this.locY < 0 || this.locY > canvas.height) {
				this.velY = this.velY * -1;
			} else if (this.locX < 0 || this.locX > canvas.width) {
				this.velX = this.velX * -1;
			}
		}
	}

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	// function getRandom(min, max) {
	// 	min = Math.ceil(min);
	// 	max = Math.floor(max);
	// 	return Math.floor(Math.random() * (max - min)) + min;
	// }
})();

function downloadCanvas() {
	let canvas = document.body.querySelector('canvas');
	let atag = document.createElement('a');
	atag.href = canvas.toDataURL();
	atag.download = 'canvas-034.png';
	atag.click();
}
