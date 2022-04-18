const state = (() => {
    const Chat = require('./Chat.js'); 
    const users = {};
    const rooms = {};
    const chat = new Chat();
    /**
     * TODO: Open web socket for all users to get state info
     */
    return {
        getUsers: () => {
            return users;
        },
        userJoined: (data) => {
            /**
             * TODO: Add web socket for when user disconnects
             */
            const User = require('./User.js');
            const user = new User(data);
            users[user.id] = user;
        },
        userLeft: (user) => {
            /**
             * TODO: If in room, then remove from room and send user datas
             */
            delete users[user.name];
        },
        addAction: ({ user, actions }) => {
            const room = this.getRoom(user);
            room.addAction({ user, actions });
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
            return rooms[room.id] = room;
        },
        removeRoom: (room) => {
            /**
             * @Room = {  }
             */
            /**
             * TODO: Find room in rooms and destroy
             */
            delete rooms[room.id];
        },
        addUsersToRoom: (users, room) => {
            /**
             * TODO: Add user to a room based on 
             */
        },
        kickUser: (user, userToKick) => {
            /**
             * TODO: Validate that user has this authority 
             */
            const room = '' //?
            this.removeUsersFromRoom(userToKick, room);
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