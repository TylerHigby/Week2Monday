

let HomeScore = 0
let AwayScore = 0



function home1() {
  HomeScore += 1
  updateDomH()
}

function home2() {
  HomeScore += 2
  updateDomH()
}

function home3() {
  HomeScore += 3
  updateDomH()
}

function away1() {
  AwayScore += 1
  updateDomA()
}

function away2() {
  AwayScore += 2
  updateDomA()
}

function away3() {
  AwayScore += 3
  updateDomA()
}

function reset() {
  HomeScore = 0
  AwayScore = 0
  updateDomA()
  updateDomH()
}

function updateDomA() {
  let awayElm = document.getElementById('AwayScore')
  awayElm.innerText = AwayScore.toString()
}

function updateDomH() {
  let homeElm = document.getElementById('HomeScore')
  homeElm.innerText = HomeScore.toString()
}

// function saveScore() {
//   let hscore = document.getElementById('HomeScore')
//   hscore.innerText = HomeScore.toString()
//   let ascore = document.getElementById('AwayScore')
//   ascore = document.toString()
// }