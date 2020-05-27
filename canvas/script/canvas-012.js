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
		canvas = document.body.querySelector("#main_canvas");
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext("2d");
	}

	function render() {
		ctx.fillStyle = "#000";
		ctx.beginPath();
		ctx.moveTo(320, 10);
		ctx.lineTo(100, 167);
		ctx.lineTo(590, 295);
		ctx.fill();
	}
})();

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-012.png";
	link.click();
}
