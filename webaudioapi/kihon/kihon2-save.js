var analyser, canvas, ctx;

window.onload = function () {
	canvas = document.createElement('canvas');
	canvas.width = 640;
	canvas.height = 335;
	document.body.appendChild(canvas);
	ctx = canvas.getContext('2d');

	setupWebAudio();
	draw();
};

function setupWebAudio() {
	var audio = document.createElement('audio');
	audio.src = 'sound1.mp3';
	audio.controls = 'true';
	document.body.appendChild(audio);
	audio.style.width = window.innerWidth + 'px';

	let audioContext = new AudioContext();
	analyser = audioContext.createAnalyser();
	let source = audioContext.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(audioContext.destination);
	audio.play();
}

function draw() {
	requestAnimationFrame(draw);
	var freqByteData = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(freqByteData);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < freqByteData.length; i += 10) {
		// var random = Math.random;
		// var red = (random() * 255) >> 0;
		// var green = (random() * 255) >> 0;
		// var blue = (random() * 255) >> 0;

		// ctx.fillStyle = 'rgb(' + red + ',' + blue + ')';
		ctx.fillStyle = 'red';
		ctx.fillRect(i, canvas.height - freqByteData[i], 10, canvas.height);
		ctx.strokeRect(i, canvas.height - freqByteData[i], 10, canvas.height);
	}
}
