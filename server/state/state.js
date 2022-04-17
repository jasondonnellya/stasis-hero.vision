const state = (() => {
    const Chat = require('./chat.js'); 
    const users = {};
    const rooms = {};
    const chat = new Chat();
    return {
        getUsers: () => {
            return users;
        },
        userJoined: (user) => {
            /**
             * TODO: add user to users object
             */
        },
        userLeft: (user) => {
            /**
             * TODO: remove user from users object
             */
        },

        addAction: ({ user, action }) => {
            const room = this.getRoom(user);
            room.addAction({ user, action });
        },
        getRoom: (user) => {
            /**
             * TODO: return room by user
             */
        },
        createRoom: (options) => {
            /**
             * @options = { users }
             */
            const Room = require('./room.js');
            const room = new Room(options);
            return rooms.push(room)
        },
        removeRoom: (room) => {
            /**
             * @Room = {  }
             */
            /**
             * TODO: Find room in rooms and destroy
             */
        },
        addUsersToRoom: (users, room) => {
            /**
             * TODO: Add user to a room based on 
             */
        },
        removeUsersFromRoom: (users, room) => {
            room.removeUser(users);
        },

        message: (options) => {
            /**
             * @options = { string: '', user: '' }
             */
            return chat.push(options);
        }
    }
})()

module.exports = state;