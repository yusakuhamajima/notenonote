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
	ctx.fillStyle = "yellow";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	const w = 640;
	const h = 335;

	for (let i = 0; i < 300; i++) {
		var rnd_x = Math.floor(Math.random() * w);
		var rnd_y = Math.floor(Math.random() * h);
		if (i % 3 === 0 && i % 5 === 0) {
			ctx.fillStyle = "blue";
		} else if (i % 3 === 0) {
			ctx.fillStyle = "red";
		} else if (i % 5 === 0) {
			ctx.fillStyle = "green";
		} else {
			ctx.fillStyle = "purple";
		}
		ctx.fillRect(rnd_x, rnd_y, 10, 10);
	}
}

function downloadCanvas() {
	let canvas = document.getElementById("main_canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-005.png";
	link.click();
}
