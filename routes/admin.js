const path = require('path');
const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

 // router.get('/add-product', adminController.addProductPage);

 router.use('/add-product', adminController.addProductPage);
 router.post('/productsave', adminController.addProductSave);
// router.get('/edit-product/:productId', adminController.getEditProduct);
router.get('/edit-product/:productId?', adminController.getEditProduct);
//use question mark here to make the id optional
router.post('/productsave',  adminController.postEditProduct);
// router.post('/add-product', adminController.addProductSave);

module.exports = router;

