const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// to play or pause
function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// to update play or pause icon
function togglePlay() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// to update progress bar and time stamp
function toggleUpdate() {
  progress.value = (video.currentTime / video.duration) * 100;

  //   to get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  //  to get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

// to update setprogress
function setProgress() {
  video.currentTime = (parseInt(progress.value) * video.duration) / 100;
}

// to stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener("click", toggleVideo);
video.addEventListener("pause", togglePlay);
video.addEventListener("play", togglePlay);
video.addEventListener("timeupdate", toggleUpdate);

play.addEventListener("click", toggleVideo);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setProgress);
