// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // The initial location of the enemy.
    this.x = '300';
    this.y = '200';

    // The speed the enemy moves each tick.
    this.speed = '30';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + this.speed) * dt;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.update = function() { };
    this.x = 2;
    this.y = 4;
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83 - 42);
};

// Move the player when one of the movement keys is released.
Player.prototype.handleInput = function(whichKey) {
    switch(whichKey) {
        case "up":
            if(player.y <= 1) {
                // The player reached the water!
                player.x = 2;
                player.y = 4;
            } else {
                player.y = player.y - 1;
            }
            player.render();
            break;
        case "down":
            // The down key was pressed.
            if(player.y < 5) {
                player.y = player.y + 1;
                player.render();
            }
            break;
        case "left":
            if(player.x > 0) {
                player.x = player.x - 1;
                player.render();
            }
            break;
        case "right":
             if(player.x < 4) {
                player.x = player.x + 1;
                player.render();
            }
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        87: 'up',
        65: 'left',
        83: 'down',
        68: 'right'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
