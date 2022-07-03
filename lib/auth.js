const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField: 'email'}, async (username, password, done) => {
    try {
        //TRY TO LOAD THE USER
        //we want to look for the email address, which is given to us by passport in the username variable
         const user = await UserModel.findOne({email: username}).exec();
        //check if there is a user or not
        if (!user) {
            return done(null, false, {message: 'Invalid username or password.'});
        }
        //check if the password is correct
        const passwordOK = await user.comparePassword(password);
        if (!passwordOK) {
            return done(null, false, {message: 'Invalid username or password.'});
        }
        return done(null, user); //otherwise return user 
    }
       catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async(id, done) => {
    
    try {
        //try loading the user with the given id from the database
        const user = await UserModel.findById(id).exec();
        //.exec to get a promise back
        return done(null, user);
    }
    catch (err) {
        done(err);
    }
    
});


/*if (!await user.comparePassword(password)) {
                return done(null, false, {message: 'Incorrect password.'});
                }
               
                }
                ));
                passport.serializeUser((user, done) => {
                    done(null, user.id);
                    }
                    );
                    passport.deserializeUser(async (id, done) => {
                        const user = await User.findById(id);
                        done(null, user);
                        }
                        );
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
                    */

module.exports = {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req, res, next) => {
        res.locals.user = req.user;
        return next();
    },
}
