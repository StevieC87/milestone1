const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'samplenew.json');

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
  static fetchAll2 = cb => {
    let asdf = ['asf', 'asdf', 'asdf'];
   // console.log('adsflkjasld;jf');
      cb(asdf);
  }
    //static findmin72(cb) {
  static findmin72(cb) {
    /* getwordsFromFile(words => {
      const wordlist = words.find(p => p.length > 7);
      cb(wordlist);
    }) */
    let test = 'test';
    return test;
  }
  static findmin71(cb) {
    //findmin7(cb) => {
      getwordsFromFile(words => {
       let wordsa = words.words;
       const wordlist = wordsa.filter(p => p.length >= 7);
       let newarray = [];
       const wordlist2 = wordlist.filter(check2 => {
          const uniqueCount = new Set(check2).size;
          // console.log(uniqueCount);
          // const uniqueStr = [...new Set(uniqueCount)].join('');
          // const withoutSpaces = uniqueStr.replaceAll(' ', '');
            if(uniqueCount === 7) {
              newarray.push(check2);
            }
       });
       let rand = Math.floor(Math.random()*newarray.length);
       let rValue = newarray[rand];
       console.log(rValue, 'rValue');
       cb(rValue);
    
      })

  }
  
  /* static findmin7(cb) {
    getwordsFromFile(words => {
      const wordlist = words.find(p => p.length > 7);
      cb(wordlist);
    })
  } */
};
