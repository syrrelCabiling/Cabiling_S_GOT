(() =>{
  console.log('video stuff loaded');

  //custom function on object prototype
  String.prototype.capIt = function() { return this.replace(this.charAt(),
  this.charAt().toUpperCase()); }


  //variables come first
  let sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
      vidPlayer = document.querySelector('video'),
	  vidControls = document.querySelector('controls');

//Functions in the middle
function showHouseVideo() {
  let houseName = this.className.split(' ')[1].capIt();
//split apart the class name on the element, grab the house from the result
  document.querySelector('h1').textContent = `House ${houseName}`;
  //debugger;
  lightbox.classList.add('show-lightbox');
  //make it play -->(take autoplay off in index.html)
  vidPlayer.src = `videos/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
  vidPlayer.load();
  vidPlayer.play();
}

function closeLightbox() {
  //debugger;
  lightbox.classList.remove('show-lightbox');
  //next stop video and rewind to 0
  vidPlayer.pause();
  vidPlayer.currentTime = 0;
}
	
function pausePlay(){
	//debugger;
	let theButton = this.firstElementChild;
	//flip the icon to "play"
	if (vidPlayer == true) {
		vidPlayer.play();
		theButton.data.icon = "pause-circle";
	}
	else {
		vidPlayer.pause();
		theButton.dataset.icon = "play-circle";
	}
	
}

//Event Handling at the bottom
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightbox);
vidPlayer.addEventListener('ended', closeLightbox);
vidControls.addEventListener('click',pausePlay);

})();

//So, add event listener first, then set up the function for each term.
