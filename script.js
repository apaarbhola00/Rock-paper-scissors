function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice.toUpperCase()}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice.toUpperCase()}`;

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a DRAW. CHOOSE AGAIN";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You WON!";
  } else {
    result = "You LOST.";
  }

  document.getElementById('winner').textContent = result;
}
