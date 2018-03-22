(() =>{
  console.log('video stuff loaded');
  //variables come first
  //grab the videos
  const vidPlayer = document.querySelector('video'),
      pauseButton = document.querySelectorAll('button')[0],
      playButton = document.querySelectorAll('button')[1],
      rewindButton = document.querySelectorAll('button')[2];

//Functions go in the middle!

function volOn() {
  vidPlayer.muted = false;
}

function volOff() {
  vidPlayer.muted = true;
}

function play() {
  //make the vid play
  vidPlayer.play();
}

function pause() {
  //make the vid pause
  vidPlayer.pause();
}

function rewind() {
  //make the vid rewind
  vidPlayer.currentTime = 0;
}

  vidPlayer.addEventListener('mouseover',volOn);
  vidPlayer.addEventListener('mouseout',volOff);
  playButton.addEventListener('click',play);
  pauseButton.addEventListener('click',pause);
  rewindButton.addEventListener('click',rewind);


})();

//So, add event listener first, then set up the function for each term.
