const winStatusElement = document.querySelector('#winStatus');
  const scoreCountElement = document.getElementById('scoreCount');
  let score=0
console.log(winStatusElement)
function processNumber(number) {
  const HolyGrail = Math.floor(Math.random()*10)
  if (number === HolyGrail) {
  winStatusElement.textContent = "You Win!";
    winStatusElement.style.color = "#4caf50";
    score++;
  console.log(score)
  } else {
    winStatusElement.textContent = `You Lose! The winning number was ${HolyGrail}.`;
    winStatusElement.style.color = "#f44336"; 
  }
  
  scoreCountElement.textContent=score
}
