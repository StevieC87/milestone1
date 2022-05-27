const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'wishlist.json');

const getWishlistFromFile = cb => {
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

module.exports = class Wish {
    static addWish(id) {
        // console.log("addwish id", id);
        fs.readFile(p, (err, fileContent) => {
            //let wishlist = { wishes: [] };
            let wishlist = { wishes: [] };
            if (!err) {
                //if no error, parse JSONfile and assign it to 'wishlist' variable
                wishlist = JSON.parse(fileContent);
            }
            let message;
            let newwish;
            //console.log(wishlist);

            const checkifexists = wishlist.wishes.findIndex(item => item.id === id);
            console.log("checkifexists", checkifexists);

            if (checkifexists != -1) {
                message = 'Sorry Item already exists in wishlist';
                console.log(message);
            }
            else {
                //create a new object to insert
                newwish = { "id": id };
                //insert new object to aray
                wishlist.wishes = [...wishlist.wishes, newwish];
                console.log(wishlist.wishes);
            }
            fs.writeFile(p, JSON.stringify(wishlist), err => {
                //console.log(err);
            })


        })
    }
}