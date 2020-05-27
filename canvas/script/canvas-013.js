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
		// 円を書く
		drawArcHalf();
		drawArc();
		drawArcHalf2();
	}

	function drawArcHalf() {
		// 下部の半円
		ctx.beginPath();
		ctx.arc(100, 100, 50, 0, Math.PI);
		ctx.stroke();
	}

	function drawArc() {
		// 円
		ctx.beginPath();
		ctx.arc(280, 150, 80, 0, Math.PI * 2);
		ctx.stroke();
	}

	function drawArcHalf2() {
		// 上部の半円
		let degreesStart = 180;
		let degreesEnd = 360;
		let startAngle = (Math.PI / 180) * degreesStart;
		let endAngle = (Math.PI / 180) * degreesEnd;
		ctx.beginPath();
		ctx.arc(500, 250, 120, startAngle, endAngle);
		ctx.stroke();
	}
})();

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-014.png";
	link.click();
}
