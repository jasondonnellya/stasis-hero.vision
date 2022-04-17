const Mob = require('./Mob.js');

class Player extends Mob {
    constructor({ name }) {
        super({ name });
        this.className = '';
    }
}

module.exports = Player;