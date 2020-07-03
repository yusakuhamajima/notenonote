function playSound() {
	const audioCtx = new AudioContext();

	const lfo = audioCtx.createOscillator();
	lfo.frequency.value = 1.0;

	const hfo = audioCtx.createOscillator();
	hfo.frequency.value = 440.0;

	const modulationGain = audioCtx.createGain();
	modulationGain.gain.value = 30;

	lfo.connect(modulationGain);
	modulationGain.connect(hfo.detune);
	hfo.connect(audioCtx.destination);
	hfo.start(0);
	lfo.start(0);
}

// function playSoundStop() {
// 	hfo.stop();
// 	lfo.stop();
// }
