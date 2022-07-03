const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/userModel');

const userController = require('../controllers/usercontroller');
const { Router } = require('express');

 router.get('/login', userController.login);
 router.get('/signup', userController.signup);
 
 router.post('/login', passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/user/login?error=true',
     failureFlash: false
}));

router.post('/signup', async (req, res, next) => {
    try {
        const user = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const savedUser = await user.save();
    
        if (savedUser) return res.redirect('/user/signup?success=true');
        return next(new Error('Failed to save user for unknown reasons'));
    }
    catch (err) {
        return next(err);
    }

}
);





// router.post('/add-to-wishlist', shopController.addToWishlist);

module.exports = router;