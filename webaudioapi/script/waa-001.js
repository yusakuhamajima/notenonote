let ctx, osc;

function playSound() {
	// AudioContext を作成
	ctx = new AudioContext();

	// オシレータを作成
	osc = ctx.createOscillator();

	// オシレータを出力に接続
	osc.connect(ctx.destination);

	osc.start(0);
}

function playSoundStop() {
	osc.stop();
}
