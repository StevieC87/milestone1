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
//POST SAVE NEW GAME -- MONGO AFTER ACTUALLY 
exports.newgamepostmethod = (req, res, next) => {

  let querystrings = req.query;
  const bodya = req.body;
  console.log(bodya,'bodya');
  let ourword = bodya.hiddenword;
  let allmatchingwords = bodya.hiddenwords;

  let ourcenterletter = bodya.hiddencentreletter;
  let ourremaining = bodya.remaining;
  let remainingletterarray = bodya.hiddenarrayremaining;
  let remainingletterarraynew = remainingletterarray.split(',');

  console.log(remainingletterarraynew,'remainingletterarray');
 //res.send({});
 
 
  res.render('spelling2', {
    querystrings: querystrings,
    bodya: bodya,
    pageTitle: 'New bee',
    path: '/spelling',
    word: ourword,
    wordarray: remainingletterarraynew,
    remaining: ourremaining,
    centerletter: ourcenterletter,
    allmatchingwords: allmatchingwords
  });  
  let word = req.body.hiddenword;
  let centreletter = req.body.hiddencentreletter;
  
  //console.log(word, 'word');
  //console.log(centreletter,'centreletter');
  

}

exports.generate = async (req, res, next) => {
   await BeeModel.generateword(word => {
    console.log(word);
  //  BeeModel.getuniqueletters(word,worduniqueletters => {
     // res.send({word,worduniqueletters}); //res.send({word, definition}); 
   // });
   res.send({word});
   })

}

exports.centerlettermatch = async (req, res, next) => {
  let word = req.query.word;
  let centerletter = req.query.centerletter;
 //res.send({hello: 'hello world'});
 //get request stuff herte to send along word and letter 
 await BeeModel.getwordswithcenterletter(word, centerletter, wordlistnew => {
   res.send({wordlistnew: wordlistnew});
   console.log(wordlistnew);
 })
}