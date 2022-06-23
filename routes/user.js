const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/usercontroller');
const { Router } = require('express');
const { clear } = require('console');

 router.get('/login', userController.login);
 router.post('/login', passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/login?error=true',
    // failureFlash: true
     }));
   router.get('/logout', (req, res, next) => {
       req.logout();
         res.redirect('/');
   }
   );

 router.get('/signup', userController.signup);
/* 
 router.get('/registration' , (req, res, next) => {
    res.render('user/login', {
 });
}   
 ); */
 router.post('/signup', userController.registration);
/* router.post('/signup', function (req, res, next) {
      console.log('registration CONTRLLER HERE');
      res.render('helloworld');
 
}); */
router.get('/hello', function (req, res, next) {
   res.render('helloworld');
}
);

// router.post('/add-to-wishlist', shopController.addToWishlist);

module.exports = router;clear