let canvas, ctx;
let audioCtx, osc;

canvas = document.querySelector('canvas');
ctx = canvas.getContext('2d');
ctx.fillStyle = 'crimson';
ctx.fillRect(10, 10, 10, 10);

function playSound() {
	audioCtx = new AudioContext(); // AudioContext を作成

	// オシレータを作成
	osc = audioCtx.createOscillator();

	// オシレータを出力に接続
	osc.connect(audioCtx.destination);

	osc.start(0);
}

function playSoundStop() {
	osc.stop();
}
