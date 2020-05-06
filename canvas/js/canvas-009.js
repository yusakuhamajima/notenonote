// w=640, h=335

(() => {
	window.addEventListener(
		"load",
		() => {
			initialize();
			render();
		},
		false
	);

	let canvas, ctx;

	function initialize() {
		canvas = document.getElementById("main_canvas");
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext("2d");

		// background color
		ctx.fillStyle = "#aaa";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function render() {
		const step = 50;
		for (let i = 0; i < canvas.width; i += step) {
			for (let j = 0; j < canvas.height; j += step) {
				drawRect(i, j, step, step);
			}
		}
	}

	function drawRect(x, y, w, h) {
		// maru
		let rnd_color;

		colors = ["blue", "red", "yellow", "green", "purple"];
		setInterval(changeColor, 5000);
		function changeColor() {
			rnd_color = Math.floor(Math.random() * colors.length);
			console.log(rnd_color);
			color = colors[rnd_color];
			ctx.fillStyle = color;
			ctx.fillRect(x, y, w, h);
		}
	}
})();
