const audioPlayer = document.querySelector('audio');

// event for audio
audioPlayer.addEventListener('play', () => {
	//AudioContext represents an audio-processing graph built from audio
	const contexteAudio = new AudioContext();
	//creates the connection between audio and audio context
	const src = contexteAudio.createMediaElementSource(audioPlayer);
	// to be able to manipulate the frequencies of audio
	const analyseur = contexteAudio.createAnalyser();

	//animation for audio
	const canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = 400;
	// view as 2dimension
	const ctx = canvas.getContext('2d');
	//connect to analyser to manipulate frequencies
	src.connect(analyseur);
	//connect to the devices sound
	analyseur.connect(contexteAudio.destination);
	//frequencies of audio
	analyseur.fftSize = 1024;
	//value of frequencies on canvas which takes the half of frequencies
	const frequencesAudio = analyseur.frequencyBinCount;
	console.log(frequencesAudio);
	// convert frequencies to an array to be able to manipulate each frequency
	const tableauFrequences = new Uint8Array(frequencesAudio);

	//  height/width of animation created
	const WIDTH = canvas.width;
	const HEIGHT = canvas.height;
	// width of the animation on the canvas
	const largeurBarre = WIDTH / tableauFrequences.length + 2;
	let hauteurBarre;
	let x;

	//represents each bar of aniamtion
	function retourneBarres() {
		requestAnimationFrame(retourneBarres);

		x = 0;

		analyseur.getByteFrequencyData(tableauFrequences);
		//background color of animation
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, WIDTH, HEIGHT);

		//colors for the frequencies
		for (let i = 0; i < frequencesAudio; i++) {
			hauteurBarre = tableauFrequences[i];

			let r = 250;
			let g = 50;
			let b = i;

			ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
			//this fills the canvas
			ctx.fillRect(x, HEIGHT, largeurBarre, -hauteurBarre);
			//to have each bar side by side
			x += largeurBarre + 1;
		}
	}
	retourneBarres();
});
