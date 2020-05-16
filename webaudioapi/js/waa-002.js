let ctx, osc;

function playSound() {
	ctx = new AudioContext();
	osc = ctx.createOscillator();
	osc.connect(ctx.destination);
	osc.start(0);
}

function playSoundStop() {
	osc.stop();
}
