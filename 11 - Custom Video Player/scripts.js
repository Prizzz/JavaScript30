const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = "❚ ❚";
  } else {
    video.pause();
    toggle.textContent = "►";
  }
}

function skip() {
  video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  progressBar.style.flexBasis = (this.currentTime / this.duration) * 100 + "%";
}

function scrub(e) {
  const scrubTime = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
skipButtons.forEach((btn) => btn.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("input", handleRangeUpdate));
