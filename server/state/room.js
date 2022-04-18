const handler = require('../game/handler.js');

let counter = 0

class Room {
    constructor({ users, optionsString }) {
        this.id = counter++;
        this.actions = [];

        /**
         * TODO: Add options config files for different 'campaigns'?
         */
        const options = {}
        this.options = options
        // temporary limit
        this.options.userLimit = 4;
        //
        this.optionsString = optionsString;
        //

        /**
         * * Generates map and mob data then adds users and creates their web sockets
         */
        this.generate();
        this.addUsers(users);
    }
    generate() {

    }
    addActions({ user, actions }) {
        /**
         * TODO: If every user has submitted actions then
         */
        handler()
    }
    addUsers(users) {
        /**
         * TODO: Add users based on limit
         */
        /**
         * TODO: Open WebSocket that links to frontend easily
         */
    }
    removeUsers(users) {
        /**
         * TODO: Remove users
         */
        /**
         * TODO: Send user back to home and remove WebSocket from user?
         */
        if(this.users.length <= 0) this.Destroy()
    }
    Destroy() {
        /**
         * ! deletes room from state
         */
        const state = require('./state.js')
        state.removeRoom(this);
    }
}

module.exports = Room;