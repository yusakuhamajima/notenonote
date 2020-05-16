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
		// Stroked triangle
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(125, 80);
		ctx.lineTo(200, 180);
		ctx.moveTo(150, 100);
		ctx.lineTo(200, 280);
		ctx.closePath();
		ctx.stroke();

		ctx.strokeStyle = "blue";
		ctx.beginPath();
		ctx.moveTo(400, 100);
		ctx.lineTo(300, 350);
		ctx.closePath();
		ctx.stroke();

		ctx.strokeStyle = "yellow";
		ctx.beginPath();
		ctx.moveTo(100, 150);
		ctx.lineTo(500, 300);
		ctx.closePath();
		ctx.stroke();
	}
})();

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-011.png";
	link.click();
}
