
    /*var audio = new Audio("../media/santa-esmeralda-dont-let-me-be-misunderstood-1977-official-video.mp3");
    function play() {
        audio.play();
      }
    function pause(){
        audio.pause();
    }  
var canvas = document.getElementById("canvas");*/


/*var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
var analyseur = contexteAudio.createAnalyser();

audio = contexteAudio.createMediaStreamSource(stream);
audio.connect(analyseur);

analyseur.fftSize = 2048;
var tailleMemoireTampon = analyseur.frequencyBinCount;
var tableauDonnees = new Uint8Array(tailleMemoireTampon);

contexteCanvas.clearRect(0, 0, LARGEUR, HAUTEUR);
function dessiner() {
    dessin = requestAnimationFrame(dessiner);
    */

   const audioPlayer = document.querySelector('audio');

   audioPlayer.addEventListener('play', () => {
   
   
       const contexteAudio = new AudioContext();
       const src = contexteAudio.createMediaElementSource(audioPlayer);
       const analyseur = contexteAudio.createAnalyser();
   
       const canvas = document.getElementById('canvas');
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       const ctx = canvas.getContext('2d');
   
       src.connect(analyseur);
       analyseur.connect(contexteAudio.destination);
   
       analyseur.fftSize = 1024;
   
       const frequencesAudio = analyseur.frequencyBinCount;
       console.log(frequencesAudio);
   
       const tableauFrequences = new Uint8Array(frequencesAudio);
   
       const WIDTH = canvas.width;
       const HEIGHT = canvas.height;
   
       const largeurBarre = (WIDTH / tableauFrequences.length) + 2;
       let hauteurBarre;
       let x;
   
       function retourneBarres(){
   
           requestAnimationFrame(retourneBarres)
   
           x = 0;
   
           analyseur.getByteFrequencyData(tableauFrequences);
   
           ctx.fillStyle = "#000"; 
           ctx.fillRect(0,0,WIDTH,HEIGHT);
   
           for(let i = 0; i < frequencesAudio; i++){
   
               hauteurBarre = tableauFrequences[i];
   
               let r = 250;
               let g = 50;
               let b = i;
   
               ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
               ctx.fillRect(x, HEIGHT, largeurBarre, -hauteurBarre)
   
               x += largeurBarre + 1;
   
           }
   
   
       }
       retourneBarres();
   
   })