const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const { Router } = require('express');

router.get('/', shopController.listProducts);

router.post('/add-to-wishlist', shopController.addToWishlist);

 router.get('/spelling2', shopController.spellingBee);

module.exports = router;