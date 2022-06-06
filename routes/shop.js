const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const BeeController = require('../controllers/BeeController');
const { Router } = require('express');

router.get('/', shopController.listProducts);

router.post('/add-to-wishlist', shopController.addToWishlist);

router.get('/spelling2', BeeController.spellingBee);
router.get('/createbee', BeeController.newSpellingBeeform);
router.get('/getwordsgenerate', BeeController.generate);
router.get('/getwordswithcenterletter', BeeController.centerlettermatch)

module.exports = router;