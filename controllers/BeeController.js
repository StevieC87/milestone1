const Product = require("../models/BeeModel");
//const Wish = require("../models/wish");
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'miniwordlist.json');


const getWordsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));        
      }
    });
  };

exports.spellingBee = (req, res, next) => {
    const word = 'CHEWING';
    const centerletter = 'C';
    const remaining = 'HEWING';
    const wordarray = remaining.split('');

    res.render('spelling2', {
        pageTitle: 'List Products',
        path: '/spelling',
        word: word,
        wordarray: wordarray,
        remaining: remaining,
        centerletter: centerletter,
    });
}
exports.newSpellingBeeform = (req, res, next) => {
    res.render('createbee', {
        pageTitle: 'List Products',
        path: '/createbee',
        /* word: word,
        wordarray: wordarray,
        remaining: remaining,
        centerletter: centerletter, */
    });
}

exports.generate = async (req, res, next) => {
    getWordsFromFile(words => {
    
        console.log(words, 'words');
       
        const word = words[Math.floor(Math.random() * words.length)];
      
        console.log(word, 'word');
      
    })
    
  /*   try {
        const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
        const todoItems = response.data;
        console.log(`GET: Here's the list of todos`, todoItems);
    
        return todoItems;
      } catch (errors) {
        console.error(errors);
      } */

}