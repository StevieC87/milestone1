//...

const getProductsFromFile = cb => {
    //...
};

module.exports = class Product {
    //constructor functions here

    //fucntion get from file   

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}