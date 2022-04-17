class Chat {
    constructor() {
        this.messages = []
    }

    add({ user, message }) {
        this.messages.push({ user, message });
    }
}

module.exports = Chat;