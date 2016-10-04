function Rover(location, direction, grid, obstacles) {

    self = this;
    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.grid = (grid === undefined) ? [100, 100] : grid;
    this.obstacles = (obstacles === undefined) ? [] : obstacles;
    this.status = 'OK';

    this.commands = function (commands) {
        if (commands === undefined) {
            return this.commandsArray;
        } else {
            for (var index = 0; index < commands.length; index++) {
                var command = commands[index];
                if (command === 'f' || command === 'b') {
                    if (!move(command)) break;
                } else if (command === 'l' || command === 'r') {
                    turn(command);
                }
            }
            resetLocation();
            this.commandsArray = commands;
        }
    };
}
function resetLocation() {
    self.location = [
        (self.location[0] + self.grid[0]) % self.grid[0],
        (self.location[1] + self.grid[1]) % self.grid[1]
    ]
}

function move(command) {
    var xIncrease = 0, yIncrease = 0;
    if (self.direction === 'N') {
        yIncrease = -1;
    } else if (self.direction === 'E') {
        xIncrease = 1;
    } else if (self.direction === 'S') {
        yIncrease = 1;
    } else if (self.direction === 'W') {
        xIncrease = -1;
    }
    if (command === 'b') {
        xIncrease *= -1;
        yIncrease *= -1;
    }

}


