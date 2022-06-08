const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand");

setInterval(() => {
  const date = new Date();

  second.style.transform = `rotate(${date.getSeconds() * 6 + 90}deg)`;
  minute.style.transform = `rotate(${date.getMinutes() * 6 + 90}deg)`;
  hour.style.transform = `rotate(${date.getHours() * 15 + 90}deg)`;
}, 1000);
