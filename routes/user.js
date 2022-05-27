const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/usercontroller');
const { Router } = require('express');

 router.get('/login', userController.login);
 router.get('/signup', userController.signup);
// router.post('/add-to-wishlist', shopController.addToWishlist);

module.exports = router;