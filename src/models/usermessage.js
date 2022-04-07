const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        minLength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already in use"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    profession: {
        type: String,
    },
    message: {
        type: String,
        required: true,
        minLength: 3,
    }

})
const User = new mongoose.model("Contact", userSchema);

module.exports = User;