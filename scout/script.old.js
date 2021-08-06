'use strict';

// Defining variables

let activePlayer, scores, targets;
let civShoot, tangoShoot;
let tango0Shoot, tango1Shoot, tango2Shoot, tango3Shoot, tango4Shoot;

let newGameBtn = document.querySelector('.newgame');
let startBtn = document.querySelector('.newgame');

let scorePlayer1 = document.querySelector('#score0');
let scorePlayer2 = document.querySelector('#score1');
let player0active = document.querySelector('#player1');
let player1active = document.querySelector('#player2');

// All functions

const shuffleTargets = function () {  
    // targets = ['civ','tango','tango','tango','tango'];
    targets = ['civ','tango1','tango2','tango3','tango4'];
    targets.sort(() => Math.random() - 0.5); // Randomize the targets
    console.log(targets);

    for (let x = 0; x < 5; x++) {
        if (targets[x] === 'civ') {
            // Locates the Civilian
            civShoot.
            console.log(`Don't shoot ${targets.indexOf(targets[x])+1}`);
            document.querySelector(`#tango${targets.indexOf(targets[x])}`).id = 'civ';
            civShoot = document.querySelector('#civ');
            continue;
        } else {
            // Assigns the Bad guys
            tango0Shoot = document.querySelector(`#tango0`);
            tango1Shoot = document.querySelector(`#tango1`);
            tango2Shoot = document.querySelector(`#tango2`);
            tango3Shoot = document.querySelector(`#tango3`);
            tango4Shoot = document.querySelector(`#tango4`);
            continue;
        }
    }
}

/*
const shuffleTargets = function() {
    targets.sort(() => Math.random() - 0.5); // Randomize the targets
    console.log(targets);

    for (let x = 0; x < 5; x++) { // Assign randomized targets to the page elements
        if (targets[x] === 'civ') {
            // Locates the Civilian
            console.log(`Don't shoot ${targets.indexOf(targets[x])+1}`);
            document.querySelector(`#t${targets.indexOf(targets[x])}`).classList.remove('civ','tango');
            document.querySelector(`#t${targets.indexOf(targets[x])}`).classList.add('civ');
        } else {
            // Assigns the Bad guys
            document.querySelector(`#t${targets.indexOf(targets[x])}`).classList.remove('civ','tango');
            document.querySelector(`#t${targets.indexOf(targets[x])}`).classList.add('tango');
        }
    }
};
*/

const newGame = function () {
    scores = [0,0];
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    activePlayer = 0;
    shuffleTargets();
}

const init = function() {           // Starting conditionals  
    newGame();
    startBtn.classList.toggle('hidden');
}
const switchPlayer = function () {  // Switches the player from 2->1 : 1->2
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0active.classList.toggle('activeplayer');
    player1active.classList.toggle('activeplayer');
};

const playerScoreUp = function () {
    if (activePlayer = 1) {
        scorePlayer1.textContent ++;
    } else if (activePlayer = 2) {
        scorePlayer2.textContent ++;
    }
}

// TODO
// const hideTarget = function () {
//     if (this = 'bad') {
//         document.querySelector(this).classList.add('hidetarget');
//     }
// }

init();

// Event listeners TODO for Target Click

tangoShoot = function () {
    console.log(`Player ${activePlayer+1} shot a Tango`);
    scores[activePlayer] ++;
    document.querySelector(`#score${activePlayer}`).textContent = scores[activePlayer];
    console.log(scores);
    switchPlayer();
}

civShoot.addEventListener('click', function () {
    console.log(`Player ${activePlayer+1} shot the Civilian`);
    activePlayer = 0 ? (scorePlayer1 = 0) : (scorePlayer2 = 0);
    switchPlayer();
})

tango0Shoot.addEventListener('click', function () {
    tango0Shoot.classList('hidetarget').add;
    tangoShoot();
})
tango1Shoot.addEventListener('click', function () {
    tangoShoot();
})
tango2Shoot.addEventListener('click', function () {
    tangoShoot();
})
tango3Shoot.addEventListener('click', function () {
    tangoShoot();
})
tango4Shoot.addEventListener('click', function () {
    tangoShoot();
})

console.log(tango0Shoot);