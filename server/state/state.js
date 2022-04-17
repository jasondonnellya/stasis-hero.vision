const state = (() => {
    const Chat = require('./Chat.js'); 
    const users = {};
    const rooms = {};
    const chat = new Chat();
    return {
        getUsers: () => {
            return users;
        },
        userJoined: (user) => {
            users[user.name] = user;
        },
        userLeft: (user) => {
            delete users[user.name];
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
             * @options = { users: Object, optionsString: String }
             */
            const Room = require('./Room.js');
            const room = new Room(options);
            return rooms[room.id] = room
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

        message: (data) => {
            /**
             * @data = { message: String, user: [Object] }
             */
            return chat.add(data);
        }
    }
})()

module.exports = state;