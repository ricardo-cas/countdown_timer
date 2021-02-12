const dataAlvo = "1 Jan 2022";

function countdown() {
  const data = new Date(dataAlvo);
  const hoje = new Date();

  const segundosTotal = (data - hoje) / 1000;
  const dias = Math.floor(segundosTotal / 3600 / 24);
  const horas = Math.floor((segundosTotal / 3600) % 24);
  const minutos = Math.floor(segundosTotal / 60) % 60;
  const segundos = Math.floor(segundosTotal) % 60;

  console.log(dias, horas, minutos, segundos);
}

countdown();

setInterval(countdown, 1000);
