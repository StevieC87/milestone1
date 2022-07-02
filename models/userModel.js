/* const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');


module.exports = class User {

} */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 12;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        index: {unique: true},
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: {unique: true},
        minlength: 3,
       /*  validate: {
            validator: emailValidator.validate,
            message: props => `${props.value} is not a valid email`
        } */
    },
    password: {
        type: String,
        required: true,
        trim: true,
        index: {unique: true},
        minlength: 8,
    },

},
{
    timestamps: true,
});
UserSchema.pre('save', async function preSave(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const hash = await bcrypt.hash(user.password, saltRounds);
        user.password = hash;
        return next();
    }
    catch (err) {
        return next(err);
    }
});

UserSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);
