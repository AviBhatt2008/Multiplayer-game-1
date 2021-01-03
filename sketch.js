var database;
var gameState = 0;
var playerCount = 0;
var form;
var player;
var game;

function setup()
{
    createCanvas(900,700);

    database = firebase.database();

    game = new Game();
    game.getState()
    game.start();
}

function draw()
{
    background("white");
}
