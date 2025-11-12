// Data de início do relacionamento
const loveStartDate = new Date("2023-11-12T23:00:00");

function updateLoveDuration() {
  const now = new Date();
  const totalDiff = now - loveStartDate;

  // Calcula anos completos
  let years = now.getFullYear() - loveStartDate.getFullYear();
  const lastAnniversary = new Date(loveStartDate);
  lastAnniversary.setFullYear(loveStartDate.getFullYear() + years);

  // Corrige se o aniversário deste ano ainda não chegou
  if (now < lastAnniversary) {
    years--;
    lastAnniversary.setFullYear(loveStartDate.getFullYear() + years);
  }

  // Tempo desde o último aniversário
  const diffSinceLast = now - lastAnniversary;

  const days = Math.floor(diffSinceLast / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffSinceLast % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffSinceLast % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffSinceLast % (1000 * 60)) / 1000);

  // Atualiza elementos do HTML
  document.getElementById("love-years").textContent = years;
  document.getElementById("love-days").textContent = days;
  document.getElementById("love-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("love-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("love-seconds").textContent = seconds.toString().padStart(2, "0");
}

// Inicializa e atualiza a cada segundo
updateLoveDuration();
setInterval(updateLoveDuration, 1000);
