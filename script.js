// Important Dates
const loveStartDate = new Date("2023-11-12T23:00:00"); // Relationship start date

function updateAllCounters() {
  const now = new Date();
  
  // Update Love Duration
  updateLoveDuration(now);

}

function updateLoveDuration(now) {
  const difference = now - loveStartDate;
  
  // Calculate years
  const loveStartYear = loveStartDate.getFullYear();
  const currentYear = now.getFullYear();
  let years = currentYear - loveStartYear;
  
  // Adjust if birthday hasn't occurred yet this year
  const tempDate = new Date(loveStartDate);
  tempDate.setFullYear(currentYear);
  if (now < tempDate) {
    years--;
  }
  
  // Calculate days, hours, minutes, seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("love-years").textContent = years;
  document.getElementById("love-days").textContent = days;
  document.getElementById("love-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("love-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("love-seconds").textContent = seconds.toString().padStart(2, "0");
}

function updateNextAnniversary(now) {
  // Get next anniversary date (this year or next year)
  const nextAnniv = new Date(loveStartDate);
  nextAnniv.setFullYear(now.getFullYear());
  
  if (now > nextAnniv) {
    nextAnniv.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextAnniv - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("anniv-days").textContent = days;
  document.getElementById("anniv-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("anniv-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("anniv-seconds").textContent = seconds.toString().padStart(2, "0");
}

// Initialize and update every second
updateAllCounters();
setInterval(updateAllCounters, 1000);