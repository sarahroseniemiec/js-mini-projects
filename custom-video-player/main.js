document.addEventListener("DOMContentLoaded", function () {

  const player = document.querySelector('.player')
  const playButton = document.getElementById('play-button');
  const video = document.querySelector('.player__video');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');
  const fullScreen = document.getElementById('full');
  let mousedown = false;

  function togglePlayVideo() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function updateButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    playButton.textContent = icon;
  }

  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
  }

  function handleRangeUpdate() {
    video[this.name] = this.value;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  function makeFullScreen() {
    video.webkitRequestFullscreen();
  }


  video.addEventListener("click", togglePlayVideo);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handleProgress);
  playButton.addEventListener("click", togglePlayVideo);
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousedown", () => mousedown = true);
  progress.addEventListener("mouseup", () => mousedown = false);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  fullScreen.addEventListener("click", makeFullScreen);

  for(var i = 0; i < skipButtons.length; i++) {
    skipButtons[i].addEventListener("click", skip);
  }

  for(var j = 0; j < ranges.length; j++) {
    ranges[j].addEventListener("change", handleRangeUpdate);
    ranges[j].addEventListener("mousemove", handleRangeUpdate);
  }





});
