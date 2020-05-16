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
	}

	function render() {
		setInterval(() => {
			const step = 20;
			for (let i = 0; i < canvas.width; i += step) {
				for (let j = 0; j < canvas.height; j += step) {
					drawRect(i, j, step, step);
				}
			}
		}, 1000);
	}

	function drawRect(x, y, w, h) {
		// maru
		let rnd_color;

		colors = [
			"#58b4ae",
			"#ffe277",
			"#ffb367",
			"#ffe2bc",
			"#eb6383",
			"#fa9191",
			"#ffe9c5",
			"#b4f2e1",
		];

		rnd_color = Math.floor(Math.random() * colors.length);
		console.log(rnd_color);
		color = colors[rnd_color];
		ctx.fillStyle = color;
		ctx.fillRect(x, y, w, h);
	}
})();

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-010.png";
	link.click();
}
