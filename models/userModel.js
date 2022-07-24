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
    activated : {
        type: Boolean,
        default: false,
    },
    /*CHECK THIS
    activationToken: {
        type: String,
        default: null,
    }, */
    
    //user create date
    createdAt: {
        type: Date,
        default: Date.now,
    },
    roleXYZ24: {
        type: String,
        default: 'registered',
    }


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
