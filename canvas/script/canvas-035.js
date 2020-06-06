// (() => {
// 	let canvas = null;
// 	let ctx = null;

// 	window.addEventListener(
// 		'load',
// 		() => {
// 			initial();
// 			render();
// 		},
// 		false
// 	);

// 	function initial() {
// 		canvas = document.body.querySelector('canvas');
// 		canvas.width = 640;
// 		canvas.height = 335;
// 		ctx = canvas.getContext('2d');

// 		ctx.fillStyle = 'blue';
// 		ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	}
// 	function render() {
// 		ctx.fillStyle = 'red';
// 		ctx.fillRect(10, 10, 100, 100);
// 	}
// })();

//
//
// var promise = navigator.mediaDevices.getUserMedia(constraints);
//
//

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
