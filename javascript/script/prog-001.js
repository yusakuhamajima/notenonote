// noteの記事見出し画像サイズ 1280×670px（半分は640×335px）

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 100);
ctx.strokeStyle = "red";
ctx.strokeRect(300, 200, 100, 100);

function downloadCanvas() {
	let canvas = document.getElementById("canvas");
	let link = document.getElementById("hiddenLink");
	link.href = canvas.toDataURL();

	document.getElementById("canvasImage").src = canvas.toDataURL();

	link.click();
}
