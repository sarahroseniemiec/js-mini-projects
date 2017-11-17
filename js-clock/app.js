document.addEventListener("DOMContentLoaded", function () {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".second-hand");

  setInterval(function() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let secondDegrees = ((second / 60) * 360) + 90;
    let minuteDegrees = ((minute / 60) * 360) + 90;
    let hourDegrees = ((hour / 12) * 360) + 90;
    secHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  })

}, 1000);
