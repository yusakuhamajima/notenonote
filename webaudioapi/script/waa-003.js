const audioCtx = new AudioContext();
const stream = navigator.mediaDevices
	.getUserMedia({ audio: true })
	.then(function (stream) {
		/* ストリームを使用 */
		const input = audioCtx.createMediaStreamSource(stream);
		const analyzer = audioCtx.createAnalyser();
		input.connect(analyzer);
		console.log(input);
		console.log(analyzer);
	})
	.catch(function (err) {
		/* エラーを処理 */
	});
