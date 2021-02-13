const daysEl = document.getElementById("dias");
const hoursEl = document.getElementById("horas");
const minutesEl = document.getElementById("minutos");
const secondsEl = document.getElementById("segundos");
const dataAlvo = "1 Jan 2022 00:00:00";

function countdown() {
  const data = new Date(dataAlvo);
  const hoje = new Date();

  const segundosTotal = (data - hoje) / 1000;

  const dias = Math.floor(segundosTotal / 3600 / 24);
  const horas = Math.floor((segundosTotal / 3600) % 24);
  const minutes = Math.floor(segundosTotal / 60) % 60;
  const segundos = Math.floor(segundosTotal) % 60;

  daysEl.innerHTML = formatDate(dias);
  hoursEl.innerHTML = formatDate(horas);
  minutesEl.innerHTML = formatDate(minutes);
  secondsEl.innerHTML = formatDate(segundos);

  //   console.log(daysEl);
  //   console.log(hoursEl);
  //   console.log(minutesEl);
  //   console.log(secondsEl);
  //   console.log(dias, horas, minutes, segundos);
}

function formatDate(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
