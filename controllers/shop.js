const Product = require("../models/product");
const Wish = require("../models/wish");


exports.listProducts = (req, res, next) => {
    //function to get all products
    Product.find()
    .then(products => {
        // console.log(products);
        res.render('index', {
            pageTitle: 'List Products',
            path: '/',
            prods: products,
        });
    })
    .catch(err => {console.log(err)})
}

exports.addToWishlist = (req, res, next) => {
    const prodId = req.body.productId;
    console.log("prodid", prodId);
    Wish.addWish(prodId);
    // req.redirect('/wishlist');
    res.render('wishlist', {

    })
}

exports.spellingBee = (req, res, next) => {
    const word = 'chewing'
    const wordarray = word.split('');
    res.render('spelling2', {
        pageTitle: 'List Products',
        path: '/spelling',
        word: word,
        wordarray: wordarray,
    });
}