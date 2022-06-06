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
    centerletter: ourcenterletter 
  });  
  let word = req.body.hiddenword;
  let centreletter = req.body.hiddencentreletter;
  
  //console.log(word, 'word');
  //console.log(centreletter,'centreletter');
  

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
exports.generate = async (req, res, next) => {
  //const newfunction = () => {
    //FETCHALL WORKSZ
   await BeeModel.findmin71(word => {
      console.log(word);
     // res.send({word: word})
    // res.send(word);
    
    // res.send('word', {word: word});
    //  res.send(word)
    BeeModel.getwordsfromletters(word,matchingwords => {
   //   console.log(matchingwords);
      res.send({matchingwords, word });
    });
        
    // res.send({word});
//THEN BRING ALL WORDS THAT U CAN MAKE WITH THESE 7 LETTERS 
    


    
    //res.json(null)
    })
  // await BeeModel.getwordsfromletters(word,matchingwords => {

 //   });
    
   
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