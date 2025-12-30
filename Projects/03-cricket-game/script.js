let userChoice;
let computerChoice;
let result;
let scoreLocal = localStorage.getItem('Score'); // score from LocalStorage
let score;
if (scoreLocal){ // if score already present in local
  score = JSON.parse(scoreLocal) // set score after parsing into object
}
else { // if does not exist
  score = { win: 0, lost: 0, tie: 0 } // set score object
}

function getComputerChoice(){
  random = Math.random() * 3 // random number (0,3)
  // [0,1) = Bat | [1,2] = Ball | (2,3] = Stump

  if (random>=0 && random<1){
    return 'Bat'
  }
  else if (random>=1 && random<=2){
    return 'Ball'
  }
  else if (random>2 && random<=3){
    return 'Stump'
  }
  else {
    return false
  }
}

function getResult(userChoice, computerChoice){
  localStorage.setItem('Score', JSON.stringify(score))
  if (userChoice===computerChoice){
    score.tie ++
    return "Tie"
  }
  else if (userChoice==='Bat' && computerChoice==='Ball'){
    score.win ++
    return "Win"
  }
  else if (userChoice==='Bat' && computerChoice==='Stump'){
    score.lost ++
    return "Lost"
  }
  else if (userChoice==='Ball' && computerChoice==='Bat'){
    score.lost ++
    return "Lost"
  }
  else if (userChoice==='Ball' && computerChoice==='Stump'){
    score.win ++
    return "Win"
  }
  else if (userChoice==='Stump' && computerChoice==='Bat'){
    score.win ++
    return "Win"
  }
  else if (userChoice==='Stump' && computerChoice==='Ball'){
    score.lost ++
    return "Lost"
  }
  else {
    return false
  }
}

function clearScore(){
  localStorage.clear();
  score = { win: 0, lost: 0, tie: 0 };
  userChoice = ''
  computerChoice = ''
  result = ''
  showResult();
}

function showResult(){
  divUser = document.getElementById('user');
  divComputer = document.getElementById('computer');
  divResult = document.getElementById('result');
  divScore = document.getElementById('score');

  userMsg = `<b>You:</b> ${userChoice}`;
  divUser.innerHTML = userChoice ? userMsg : '';

  computerMsg = `<b>Computer:</b> ${computerChoice}`;
  divComputer.innerHTML = computerChoice ? computerMsg : '';

  resultMsg = `<b>Match Result:</b> ${result}`
  divResult.innerHTML = result ? resultMsg : '';

  scoreMsg = `<b>Win:</b> ${score.win} <b>Lost:</b> ${score.lost } <b>Tie:</b> ${score.tie}`
  divScore.innerHTML = scoreMsg;
}
