const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/UserModel');

passport.use(new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => { 
    try {
        const user = await UserModel.findOne({ email: username }).exec();
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }
    catch (err) {
        console.log(err);
        return done(err);
    }
 }));

    passport.serializeUser((user, done) => {
        return done(null, user._id);
    }
    );

module.exports = {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req, res, next) => {
        res.locals.user = req.user;
        return next();
    }

};