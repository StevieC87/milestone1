const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
            console.log('no work');

        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(name, short_des, description, price, discount, selling_price, imageUrl, size, stock, categories) {
        this.name = name;
        this.short_des = short_des;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.selling_price = selling_price;
        this.imageUrl = imageUrl;
        this.size = size;
        this.stock = stock;
        this.categories = categories;
    }
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product)
        })
    }

};