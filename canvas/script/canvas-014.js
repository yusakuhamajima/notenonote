(() => {
	let canvas = null;
	let ctx = null;

	window.addEventListener(
		"load",
		() => {
			initial();
			render();
		},
		false
	);

	function initial() {
		canvas = document.querySelector("#main_canvas");
		canvas.width = 640;
		canvas.height = 335;
		ctx = canvas.getContext("2d");
	}

	function render() {
		// background
		// ctx.fillRect(0, 0, canvas.width, canvas.height);

		drawText();
		// drawText("note", 100, 100);
	}

	function drawText() {
		// text1
		let text = "Canvas";
		let x = 100;
		let y = 100;
		ctx.font = "48px serif";
		ctx.fillStyle = "yellow";
		ctx.fillText(text, x, y);

		// text2
		let text1 = "JavaScript";
		let x1 = 200;
		let y1 = 200;
		ctx.font = "48px serif";
		ctx.fillStyle = "orange";
		ctx.fillText(text1, x1, y1);
	}
})();

function downloadCanvas() {
	let canvas = document.querySelector("#main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-014.png";
	link.click();
}
