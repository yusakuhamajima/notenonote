(() => {
	let canvas = null;
	let ctx = null;

	window.addEventListener(
		"load",
		() => {
			initialize();
			render();
		},
		false
	);

	function initialize() {
		canvas = document.getElementById("main_canvas");
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "#aaa";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function render() {
		setInterval(() => {
			drawRect(100, 100, 100, 100);
		}, 1000);
	}

	function drawRect(x, y, w, h) {
		let colors = [
			"red",
			"blue",
			"yellow",
			"black",
			"green",
			"purple",
			"orange",
		];
		let rnd_color = Math.floor(Math.random() * colors.length);
		console.log(rnd_color);
		ctx.fillStyle = colors[rnd_color];
		ctx.fillRect(x, y, w, h);
	}
})();

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-006.png";
	link.click();
}
