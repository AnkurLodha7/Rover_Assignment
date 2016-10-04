function Rover(location, direction, grid, obstacles) {

    self = this;
    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.grid = (grid === undefined) ? [100, 100] : grid;
    this.obstacles = (obstacles === undefined) ? [] : obstacles;
    this.status = 'OK';

    this.commands = function (commands) {
        if (commands === undefined) { // Getter
            return this.commandsArray;
        } else { // Setter
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
