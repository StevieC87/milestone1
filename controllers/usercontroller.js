const User = require("../models/userModel");


exports.login = (req, res, next) => {
    //function to get all products
    res.render('user/login', {
        pageTitle: 'Login Page',
        path: '/login',

    });
    
}
exports.signup = (req, res, next) => {
    //function to get all products
    res.render('user/signup', {
        pageTitle: 'Signup Page',
        path: '/signup',

    });
    signup
}
