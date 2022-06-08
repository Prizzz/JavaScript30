window.addEventListener("keyup", (e) => {
  const code = e.keyCode;
  const key = document.querySelector(`.key[data-key="${code}"]`);
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if (key) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
});

function removeTransition(e) {
  if (e.propertyName == "transform") {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
