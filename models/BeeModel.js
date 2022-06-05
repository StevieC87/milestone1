const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'littlewordlist.json');

const getwordsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class SpellingBee {
  constructor(word, centerletter, remaininglettersasArray, wordasArray, associatedwords, numberofwords) {
    //this.id = id; MAYBE but if save on mongoose i think 
    //it generates one BUT GOGOLE IT, BECAUSE I WANT INCREMENTAL
    this.word = word;
    this.centerletter = centerletter;
    this.remaininglettersasArray = remaininglettersasArray;
    this.wordasArray = wordasArray;
    this.associatedwords = associatedwords;
    this.numberofwords = numberofwords;
  }

  //dunno about the folliwingn - adapt to save 
  save() {
    getwordsFromFile(words => {
      
    /*   if(this.id){
       // console.log('hello id', this.id);
        const existingProductIndex = words.findIndex(
          prod => prod.id === this.id
        );
     console.log(existingProductIndex, 'existingProductIndex');
        const updatedProducts = [...words];
      //  console.log(updatedProducts,'updatedProducts');
        updatedProducts[existingProductIndex] = this;
        console.log(this, 'this');
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        })
      }
      else {
        this.id = Math.random().toString();
    //    getProductsFromFile(products => {
        words.push(this);
          fs.writeFile(p, JSON.stringify(words), err => {
            console.log(err);
         // });
        }); 
      } */
  })
  
 
  }

  static fetchAll(cb) {
    getwordsFromFile(cb);
  }
  static findById(id, cb) {
    getwordsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }
};
