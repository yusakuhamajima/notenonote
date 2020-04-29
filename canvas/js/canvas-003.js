// noteの記事見出し画像サイズ 1280×670px（半分は640×335px）

const canvas = document.getElementById("canvas");
console.log(canvas);
var ctx = canvas.getContext("2d");
console.log(ctx);

const w = 640;
const h = 335;

for (let i = 0; i < 300; i++) {
	var rnd_w = Math.floor(Math.random() * w);
	var rnd_h = Math.floor(Math.random() * h);
	ctx.fillRect(rnd_w, rnd_h, 10, 10);
}

function downloadCanvas() {
	let canvas = document.getElementById("canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "canvas-003.png";
	link.click();
}
