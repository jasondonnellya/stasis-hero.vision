const Entity = require('./Entity.js');

class Mob extends Entity {
    constructor({ name }) {
        super({ name });
        this.className = '';
    }
}

module.exports = Mob;