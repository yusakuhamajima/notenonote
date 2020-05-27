// noteの記事見出し画像サイズ 1280×670px（半分は640×335px）

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const w = 640;
const h = 335;

ctx.fillStyle = "yellow";
ctx.fillRect(0, 0, w, h);

for (let i = 0; i < 300; i++) {
	var rnd_w = Math.floor(Math.random() * w);
	var rnd_h = Math.floor(Math.random() * h);
	ctx.fillStyle = "blue";
	ctx.fillRect(rnd_w, rnd_h, 10, 10);
}

function downloadCanvas() {
	let canvas = document.getElementById("canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-004.png";
	link.click();
}
