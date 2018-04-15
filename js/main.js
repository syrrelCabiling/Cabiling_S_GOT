(() =>{
  console.log('video stuff loaded');

  //custom function on object prototype
  String.prototype.capIt = function() {return this.replace(this.charAt(),
  this.charAt().toUpperCase()); }


  //variables come first
//  let sigils = document.querySelectorAll('.sigilContainer'),
//      lightbox = document.querySelector('.lightbox'),
//      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
//      vidPlayer = document.querySelector('video'),
//	  vidControls = document.querySelector('.controls'),
//	  imageBanner = document.querySelector('#houseImages'),
//	  //houseDef = document.querySelector('#house-info');
let sigils = document.querySelectorAll('.sigilContainer'),
                lightbox = document.querySelector('.lightbox'),
                closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
                vidPlayer = document.querySelector('video'),
                vidControls = document.querySelector('.controls'),
                imageBanner = document.querySelector('#houseImages'),
				houseText = document.querySelector('.house-info').value ;

	//Functions in the middle

	function scrollBanners(offset) {
			let moveIt = offset * 600 + "px";
		 	imageBanner.style.right = moveIt;
		scrollBanners(this.dataset.offset);
	}  
	
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
  scrollBanners(this.dataset.offset);

}
	

//houseText = document.querySelector('p').value 
	//var houseText = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//document.querySelector('p').textContent = `${houseText}`;
function houseDef(){
	houseText.classList.add('house-info');
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
	if (vidPlayer.paused == true) {
		vidPlayer.play();
		theButton.dataset.icon = "pause-circle";
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
imageBanner.addEventListener('click',scrollBanners);
houseText.addEventListener('click',scrollBanners);

})();

//So, add event listener first, then set up the function for each term.
