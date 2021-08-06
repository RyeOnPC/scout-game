'use strict';

// Defining variables

let activePlayer;
let userInput, maxScore;

let civNumber; // Random number
let playing = false;

let civShootEl = document.querySelector('.civ');
let targets = ['target0','target1','target2','target3','target4'];
// console.log(targets);

let target0El, target1El, target2El, target3El, target4El;

let startMsg = document.querySelector('.start-msg');
let tangoMsg = document.querySelector('.tango-msg');
let civMsg = document.querySelector('.civ-msg');
let winMsg = document.querySelector('.win-msg');
let newGameBtn = document.querySelector('#newgame');
let startBtn = document.querySelector('#startgame');

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let scorePlayer1El = document.querySelector('#score0');
let scorePlayer2El = document.querySelector('#score1');
let player0active = document.querySelector('#player1');
let player1active = document.querySelector('#player2');
let scores = [scorePlayer1,scorePlayer2];

// All functions

const shuffleTargets = function () {
    civNumber = Math.trunc(Math.random() * 5); // Random number
    for (let x = 0; x < targets.length; x++) {
        if (x !== civNumber) {
            targets[x] !== document.querySelector(`#target${x}`);
            targets[x] = document.querySelector(`#target${x}`);
            targets[x].removeEventListener('click', civShoot);
            targets[x].addEventListener('click', tangoShoot);
            targets[x].classList.remove('civ','invisible');
        } else {
            targets[x] !== document.querySelector(`#target${x}`);
            targets[x] = document.querySelector(`#target${x}`);
            targets[x].removeEventListener('click', tangoShoot);
            targets[x].addEventListener('click', civShoot);
            targets[x].classList.remove('civ','invisible');
            targets[x].classList.add('civ');
            }
    }
    // console.log(targets); // Creates a visual log to show the list of targets
}

const newGame = function () {
    userInput = prompt("Set the Winning Score", "");
    maxScore = Number(userInput);
    playing = true; 
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scorePlayer1El.textContent = 0;
    scorePlayer2El.textContent = 0;
    activePlayer = 0;
    player0active.classList.add('activeplayer');
    player1active.classList.remove('activeplayer');
    // Hide/show messages aka 'hit'
    civMsg.classList.add('hidden');
    tangoMsg.classList.add('hidden');
    winMsg.classList.add('hidden');
    startMsg.classList.remove('hidden');
    startMsg.classList.remove('invisible');
    // Hide/show buttons
    newGameBtn.classList.remove('hidden');
    startBtn.classList.add('hidden');
    shuffleTargets();
}
const hideStart = function () {
    startMsg.classList.remove('invisible'); // Removes invisible Start Message
    startMsg.classList.add('hidden'); // Hides the start Message
}
const civShoot = function() {
    if (playing) {
        hideStart();
        civMsg.classList.remove('hidden');
        tangoMsg.classList.add('hidden');
        civMsg.textContent = `PLAYER ${Number(activePlayer)+1} SHOT THE CIVILIAN`;
        clearScore();
        shuffleTargets();
        switchPlayer();
    }
};
const tangoShoot = function () {
    if (playing) {
        hideStart();
        playerScoreUp();
        this.classList.add('invisible');
        this.removeEventListener('click', tangoShoot);
        // Show tango message and hide civ message
    }
    if (playing) {
        civMsg.classList.add('hidden');
        tangoMsg.classList.remove('hidden');
        tangoMsg.textContent = `PLAYER ${Number(activePlayer)+1} SHOT A TANGO`;
        // Additional functions
    }
}

const playerScoreUp = function () {
    if (playing) {
        // console.log(`Player ${Number(activePlayer)+1} shot a Tango`);
        if (activePlayer === 0) {
            scorePlayer1 = scorePlayer1 + 1;
            scorePlayer1El.textContent = scorePlayer1;
            scores[0] = scorePlayer1;
            // console.log(scores);
            scores[0] === maxScore ? winGame() : switchPlayer();
        } else {
            scorePlayer2 = scorePlayer2 + 1
            scorePlayer2El.textContent = scorePlayer2;
            scores[1] = scorePlayer2;
            // console.log(scores);
            scores[1] === maxScore ? winGame() : switchPlayer();
        }
    }
}
const clearScore = function () {
    // console.log(`Player ${activePlayer+1} shot the Civilian`);
    activePlayer === 0 ? (scorePlayer1 = 0) : (scorePlayer2 = 0);
    activePlayer === 0 ? (scorePlayer1El.textContent = 0) : (scorePlayer2El.textContent = 0);
}
const switchPlayer = function () {  // Switches the player from 2->1 : 1->2
    player0active.classList.toggle('activeplayer');
    player1active.classList.toggle('activeplayer');
    activePlayer = activePlayer === 0 ? 1 : 0;
};


startBtn.addEventListener('click', function () {
    player0active.classList.add('activeplayer');
    player1active.classList.remove('activeplayer');
    newGame();
})

newGameBtn.addEventListener('click', newGame);

const winGame = function () {
    civMsg.classList.add('hidden');
    tangoMsg.classList.add('hidden');
    winMsg.classList.remove('hidden');
    winMsg.textContent = `PLAYER ${Number(activePlayer)+1} WINS`;
    playing = 0;
}