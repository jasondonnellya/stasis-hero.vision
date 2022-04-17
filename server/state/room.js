let counter = 0

class Room {
    constructor({ users, optionsString }) {
        this.users = users;
        this.id = counter++;
        this.mobs = [];
        this.objs = [];
        this.tile = {};
        this.actions = [];
        this.turn = 0;

        /**
         * TODO: Add options config files for different 'campaigns'?
         */
        const options = {}
        this.options = options
        // temporary limit
        this.options.limit = 4;
        //
        this.optionsString = optionsString;
        this.generate();

        /**
         * TODO: Open WebSocket that links to frontend easily for each room?
         */
    }

    generate() {

    }

    loadRoom() {
        /**
         * TODO: Load next room
         */
    }

    addUsers(users) {
        /**
         * TODO: Add users based on limit
         */
    }
    removeUsers(users) {
        /**
         * TODO: Remove users
         */
        if(this.users.length <= 0) this.Destroy()
    }
    Destroy() {
        /**
         * ! deletes room from state
         */
        const state = require('./state.js')
        state.removeRoom(this);
        /**
         * TODO: Close web socket?
         */

    }
}

module.exports = Room;