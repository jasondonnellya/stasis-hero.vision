let counter = 0;

class Entity {
    constructor({ name }) {
        this.id = counter++;
        this.name = '';
    }
}

module.exports = Entity;