const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/userModel');

const userController = require('../controllers/usercontroller');
const { Router } = require('express');


function redirectIfLoggedIn(req, res, next) {
    if (req.user) {
        return res.redirect('/users/account');
    } else {
      return next();
    }
}

 router.get('/login', redirectIfLoggedIn, userController.login);

/* router.get('/logout', (req, res) => {
    req.logout();
    return res.redirect('/', () => {
        console.log('logout');
    })
}) */
router.get("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
  });

 router.get('/signup', redirectIfLoggedIn, userController.signup);
 
 router.post('/login', passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/user/login?error=true',
    
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

router.get('/account', (req, res, next) => {
    if (req.user) {
        return next();
        //return res.render('account', { user: req.user });
    }
        return res.status(401).end();  
}
 ,(req, res) => {
    res.render('/user/account', { user: req.user });
}
);






// router.post('/add-to-wishlist', shopController.addToWishlist);

module.exports = router;