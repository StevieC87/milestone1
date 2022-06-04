const Product = require("../models/product");

// const fileUpload = require("express-fileupload");

exports.addProductPage = (req, res, next) => {
    //function to get all products
    res.render('admin/admin-add-product', {
        pageTitle: 'Add New Product',
        path: '/',
    });

}

exports.testRoute = (req, res, next) => {
    console.log( req.body, 'body');
    console.log(req.files, 'files');
    console.log('heellooo');
    res.render('afteradd', {
        pageTitle: 'Add New Product',
        path: '/',
        data: req.body,
        files: req.files
    });
}
/* exports.test = (req, res, next) => {
    console.log('alkasdjflksajdalk');
    res.render('success', {
        pageTitle: 'success',
        path: '/success',
    });
} */
exports.addProductSave = (req, res, next) => {
    const name = req.body.name;
    const short_des = req.body.short_des;
    const description = req.body.description;
    const price = req.body.actualprice * 1;
    const discount = req.body.discount * 1;
    const selling_price = req.body.sellingprice  * 1;
    const imageUrl = req.body.img1;
    const size = req.body.size;
    const stock = req.body.stock * 1;
    const categories = req.body.categories;
    const files = req.files;
    const id = Math.random();

    const product = new Product({
        id: id,
        name: name,
        short_des: short_des,
        description: description,
        price: price,
        discount: discount,
        selling_price: selling_price,
        imageUrl: imageUrl,
        size: size,
        stock: stock,
        categories: categories,
        files: files,
    });

    //const product = new Product(id, name, short_des, description, price, discount, selling_price, imageUrl, size, stock, categories)

    product
        .save()
        .then(result => {
            res.render('success', {
                pageTitle: 'Success',
                path: 'success',
            });
        })
        .catch(err => {
            console.log(err);
        })

   
}


exports.getEditProduct = (req, res, next) => {
  
    //const editcreate = req.query.editcreate; //from inpujt
    const prodId = req.params.productId; //from url
    const intprod = parseInt(prodId);
    
    if(prodId) {
        console.log(prodId,'prodId');
        //then we are trying to edit the product
        Product.findById(intprod, product => {
             if(!product) {
                return res.redirect('/');
              //  console.log('fail');
              } 
             // else  console.log('sucesss');
            //  console.log(product,'product');
            res.render('admin/admin-edit-product', {
                pageTitle: 'Edit title',
                path: '/admin/edit-product', 
                editing: true, 
                product: product
            })
          });
         
    }
 
    }
    exports.postEditProduct = (req, res, next) => {
    

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