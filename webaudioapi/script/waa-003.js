function playSound() {
	// step1
	var context = new AudioContext();
	var f = 440;
	var duration = 1;

	// step2
	var sampleRate = context.sampleRate;
	console.log(sampleRate);
	var dt = 1 / sampleRate;

	var buf = context.createBuffer(1, sampleRate * duration, sampleRate);

	var data = buf.getChannelData(0);
	for (var i = 0; i < sampleRate * duration; i++) {
		var t = i * dt;
		data[i] = Math.sin(2 * Math.PI * f * t);
	}

	// step3
	var src = context.createBufferSource();
	src.buffer = buf;
	src.connect(context.destination);
	src.start(0, 0, duration);
}
