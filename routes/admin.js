const path = require('path');
const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

 // router.get('/add-product', adminController.addProductPage);

 router.use('/add-product', adminController.addProductPage);


// router.post('/add-product', adminController.addProductSave);
router.post('/add-productA', adminController.testRoute);

module.exports = router;

