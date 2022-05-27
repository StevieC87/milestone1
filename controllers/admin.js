const Product = require("../models/product");

exports.addProductPage = (req, res, next) => {
    //function to get all products
    res.render('admin/admin-add-product', {
        pageTitle: 'Add New Product',
        path: '/',

    });

}

exports.addProductSave = (req, res, next) => {
    const name = req.body.name;
    const short_des = req.body.short_des;
    const description = req.body.description;
    const price = req.body.price;
    const discount = req.body.discount;
    const selling_price = req.body.sellingprice;
    const imageUrl = req.body.img1;
    // const imageUrl2 = req.body.img2;
    // const imageUrl3 = req.body.img3;
    // const imageUrl4 = req.body.img4;
    const size = req.body.size;
    const stock = req.body.stock;
    const categories = req.body.categories;

    const product = new Product(name, short_des, description, price, discount, selling_price, imageUrl, size, stock, categories)

    product.save();

    // console.log(req.body);

    res.render('admin/admin-add-product', {
        pageTitle: 'Add New Product',
        path: '/',
    });
}
/* 
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
  }; */