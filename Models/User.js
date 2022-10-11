const { Schema, model } = require("mongoose")

const userSchem = new Schema({
    user_name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v)
            },
            message: (prop) => `Invaid Email ${prop.value}`
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'password is too short']

    },
   
})

const User = model('User', userSchem)

module.exports = User


