const BeeModel = require("../models/BeeModel");
//const Wish = require("../models/wish");
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'miniwordlist.json');


const getWordsFromFile2 = () => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
      //  cb([]);
      console.log('error');
      
      } else {
        //console.log(JSON.parse(fileContent));
        let resultsa = JSON.parse(fileContent);
        return resultsa;
       
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
//async
exports.generate =  (req, res, next) => {
  //const newfunction = () => {
    BeeModel.fetchAll(products => {
      console.log(products);
    });


   /*  getWordsFromFile2().then(results => {
        console.log(results);
    })
     */
    /* result => {
      
     // result.filter(word => word.length > 6)
      
      
      console.log(result);
      console.log('hello');
    }); */
  //}
  
  
  //console.log(words, 'words');
 /*  getWordsFromFile(words => {
      words.filter(checkAdult);

    function checkAdult(word) {
      return word.key == 'aa';
    } */
     /*  var hello = [ 
        { id: 1, title: 'Apple', description: 'Description of post 1' }, 
        { id: 2, title: 'Orange', description: 'Description of post 2' }, 
        { id: 3, title: 'Guava', description: 'Description of post 3' }, 
        { id: 4, title: 'Banana', description: 'Description of post 4' }
      ]; */
     /*  hello.find(function(wordsfound, index) {
        if(words.key == 'abuser')
          return true;
      }); */
     
     //   console.log(words, 'words');
       
      //  const word = words[Math.floor(Math.random() * words.length)];
      
      
      
  //  })
    
  /*   try {
        const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
        const todoItems = response.data;
        console.log(`GET: Here's the list of todos`, todoItems);
    
        return todoItems;
      } catch (errors) {
        console.error(errors);
      } */

}