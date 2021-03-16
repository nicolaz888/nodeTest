const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true,
        unique: true
    }
}, {
    collection: 'users'
});


module.exports = model('User', UserSchema);






