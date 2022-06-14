const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },

    last_name: {
        type: String,
        require: true,
    },

    age: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        require: true,
    },

    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        require: true,
    },


},

/*Had to add collection here to specify. ./index.js "mongoose.connect(...)" was returning the entire database as a http response */
{
    collection: 'UserInfo'
}
    
)

const UserModel = mongoose.model("UserInfo", UserSchema)

module.exports = UserModel