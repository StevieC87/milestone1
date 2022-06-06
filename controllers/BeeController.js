const BeeModel = require("../models/BeeModel");
//const Wish = require("../models/wish");
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'miniwordlist.json');


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
exports.generate = (req, res, next) => {
  //const newfunction = () => {
    //FETCHALL WORKS
    BeeModel.findmin71(word => {
      console.log(word);
      res.send({word: word})
    //  res.send(word)
    })
   
   
   //   BeeModel.findmin71(word => {
    // console.log(word);
    //  console.log('helloooo');
    //  res.word = word;
      // res.send({word: word});
    //  res.send(word)
   // return word;
   //    next();
 //   });

}