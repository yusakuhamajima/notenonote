(() => {
	window.addEventListener(
		"load",
		() => {
			initialize();
			render();
		},
		false
	);

	let canvas = null;
	let ctx = null;

	function initialize() {
		canvas = document.getElementById("main_canvas");
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext("2d");
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function render() {
		let step = 30;

		for (let i = 0; i < canvas.width / step; i++) {
			for (let j = 0; j < canvas.height / step; j++) {
				let colors = [
					"red",
					"blue",
					"yellow",
					"black",
					"green",
					"purple",
					"orange",
				];
				let rnd_color = Math.floor(Math.random(colors.length) * 10);
				ctx.fillStyle = colors[rnd_color];
				ctx.fillRect(i * step, j * step, step, step);
			}
		}
	}
})();

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-007.png";
	link.click();
}
