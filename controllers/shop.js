const Product = require("../models/product");
const Wish = require("../models/wish");

// products = ['hello', 'world'];
exports.listProducts = (req, res, next) => {
    //function to get all products
    Product.fetchAll(products => {
        res.render('index', {
            pageTitle: 'List Products',
            path: '/',
            prods: products,
        })
    })
}

exports.addToWishlist = (req, res, next) => {
    const prodId = req.body.productId;
    console.log("prodid", prodId);
    Wish.addWish(prodId);
    // req.redirect('/wishlist');
    res.render('wishlist', {

    })
}