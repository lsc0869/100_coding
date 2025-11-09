const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let editedplayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsover = false;
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOuptputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editplayer1BtnElement = document.getElementById('edit-player-1-btn');
const editplayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameBoardElement = document.getElementById('game-board');
//const gameFieledElements = document.querySelectorAll('#game-board li');


editplayer1BtnElement.addEventListener('click', openPlayerConfig);
editplayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startnewGame);
// for(const gameFieledElement of gameFieledElements){
//     gameFieledElement.addEventListener('click',  selectGameField);
// }
gameBoardElement.addEventListener('click', selectGameField);