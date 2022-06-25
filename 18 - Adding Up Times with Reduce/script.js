const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => {
    const [mins, secs] = node.dataset.time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, sec) => total + sec);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(hours, mins, secondsLeft);
