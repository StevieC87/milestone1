const User = require("../models/userModel");


exports.login = (req, res, next) => {
    //function to get all products
    res.render('user/login', {
        pageTitle: 'Login Page',
        path: '/login',
        //error: req.flash('error'),
        error: req.query.error,
    });
    
}
exports.signup = (req, res, next) => {
    //function to get all products
    res.render('user/signup', {
        pageTitle: 'Signup Page',
        path: '/signup',
        success: req.query.success,

    });

}
