// Enemies our player must avoid
var yArray = [60, 145, 230];
var speedArray = [80, 100, 200];

var Enemy = function(x) {

    var yIndex;
    yIndex = Math.floor(Math.random() * yArray.length);
    console.log(yIndex);
    this.y = yArray[yIndex];

    var speedIndex;
    speedIndex = Math.floor(Math.random() * speedArray.length);
    console.log(speedIndex);
    this.speed = speedArray[speedIndex];
    console.log(this.speed);
    this.x = x;
    console.log("enemyX", this.x);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// dt parameter is multiplied with movements
// which ensures the game runs at the same speed for
// all computers.

Enemy.prototype.update = function(dt) {
    //    this.x = this.x + (this.speed * dt);
    this.x += this.speed * dt;
    if (this.x > 600)

    {
        var yIndex;
        yIndex = Math.floor(Math.random() * yArray.length);
        console.log(yIndex);
        this.y = yArray[yIndex];

        var speedIndex;
        speedIndex = Math.floor(Math.random() * speedArray.length);
        console.log(speedIndex);
        this.speed = speedArray[speedIndex];
        console.log(this.speed);
        this.x = -100;
    }
};

// Draw the enemy on the screen

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player class with an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';
};


Player.prototype.update = function() {};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {

    if (direction == 'left' && this.x > 40) {
        this.x = this.x - 101;
    }
    if (direction == 'up' && this.y > 40) {
        this.y = this.y - 83;
    }
    if (direction == 'right' && this.x < 400) {
        this.x = this.x + 101;
    }
    if (direction == 'down' && this.y < 400) {
        this.y = this.y + 83;
    }
};
/*
var xGemArray = [0, 101, 200, 300, 400];
var yGemArray = [83, 166, 250];

var Gem = function() {

    var xGemIndex;
    xGemIndex = Math.floor(Math.random() * xGemArray.length);
    //console.log(xGemIndex);
    this.x = xGemArray[xGemIndex];

    var yGemIndex;
    yGemIndex = Math.floor(Math.random() * yGemArray.length);
    //console.log(yGemIndex);
    this.y = yGemArray[yGemIndex];

    console.log("GemX", this.x,":", this.y);

    this.sprite = 'images/Gem-Blue.png';
};

Gem.prototype.update = function(dt) {

    this.x * (dt);
    this.y * (dt);
};

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
*/

var enemy1 = new Enemy(-100);
var enemy2 = new Enemy(-100);
var enemy3 = new Enemy(-100);
var enemy4 = new Enemy(-100);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];
var player = new Player(200, 400);
//var gem = new Gem();


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

console.log("allEnemies.length", allEnemies.length);

// Collision detection

function checkCollisions () {
allEnemies.forEach(function(enemy) {
         if(enemy.x < player.x + 50 &&
            enemy.x + 70 > player.x &&
            enemy.y < player.y + 50 &&
            enemy.y + 70 > player.y) {
                console.log('collision!');
                reset();
            }
});
}

//Resets game.

function reset() {
player.reset();
};

Player.prototype.reset = function() {
            this.x = 200;
            this.y = 400;
            collide = false;
        };

//function checkCollections () {
//         if(gem.x < player.x + 50 &&
//            gem.x + 70 > player.x &&
//            gem.y < player.y + 50 &&
//            gem.y + 70 > player.y) {
//                console.log('Gem collected!');
//                reset();
//            }
//};


//Resets game when player reaches water tiles
function checkWater () {
         if (player.y < 41){
            console.log('WIN!');
            player.reset();
        }
};



