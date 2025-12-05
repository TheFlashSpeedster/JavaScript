let userChoice;
let computerChoice;
let score ={
  win: 0,
  lost: 0,
  tied: 0,
  displayScore(){
    return `<b>User:</b> ${userChoice}<br><b>Computer:</b> ${computerChoice}<br><b>Result:</b> ${winner}`
  }
};


// Get Computer Choice
function getComputerChoice() {
  rn = Math.random() * 3;
  if (rn >= 0 && rn < 1) {
    return 'Bat';
  }
  else if (rn >= 1 && rn < 2) {
    return 'Ball';
  }
  else {
    return 'Stump';
  }
}

// Compare computerChoice & userChoice => Then Get Winner
function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    score.tied += 1; // Update Score
    return 'Match Tied 😒';
  }
  else if (userChoice === 'Bat' && computerChoice === 'Ball') {
    score.win += 1; // Update Score
    return 'You Won 😍';
  }
  else if (userChoice === 'Bat' && computerChoice === 'Stump') {
    score.lost += 1; // Update Score
    return 'You Lost 😭';
  }
  else if (userChoice === 'Ball' && computerChoice === 'Bat') {
    score.lost += 1; // Update Score
    return 'You Lost 😭';
  }
  else if (userChoice === 'Ball' && computerChoice === 'Stump') {
    score.win += 1; // Update Score
    return 'You Won 😍';
  }
  else if (userChoice === 'Stump' && computerChoice === 'Bat') {
    score.win += 1; // Update Score
    return 'You Won 😍';
  }
  else if (userChoice === 'Stump' && computerChoice === 'Ball') {
    score.lost += 1; // Update Score
    return 'You Lost 😭';
  }
  else {
    return '';
  }
}

// Print Result Message
function resultMsg(userChoice, computerChoice, winner) {
  return score.displayScore()
}