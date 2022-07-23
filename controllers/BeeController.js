const BeeModel = require("../models/BeeModel");
const Bee = require("../models/BeeModelgame");
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
//OLD OLD OLD OLD POST SAVE NEW GAME -- MONGO AFTER ACTUALLY  o
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

exports.howmanypangrams = (req, res, next) => {
  BeeModel.howmanypangrams(pangrams => {
    res.send({pangrams: pangrams.pangrams, total: pangrams.total});
    console.log(pangrams.total, 'total pangrams');
    console.log(pangrams, 'pangrams');
  })
}
 
//OFFICIAL ADD GAME
exports.addNewGame = (req, res, next) => {
 
    //CHECK IF WE ARE PULLING THE DATA 
    const word = req.body.hiddenword;
    const centreletter = req.body.hiddencentreletter;
    const matchingwords = req.body.hiddenwords;
    //MATCHING WORDS IS NOT AN ARRAY, IT'S A STRING, BECAUSE IT WAS IN THE FORM INPUT
    //SO SPLIT IT INTO AN ARRAY
    const matchingwordsarray = matchingwords.split(',');
    console.log(matchingwordsarray, 'matchingwordsarray!!!!*****!!!!!!!!!');
    const remaininglettersarray = req.body.hiddenarrayremaining;
    const remaininglettersarrayarray = remaininglettersarray.split(',');
    const pangrams = req.body.hiddenpangrams;
    const pangramsarray = pangrams.split(',');
    const testarray = ['hello', 'world', 'test'];
  console.log(word,'wordwordwordwordwordwordwordwordword');
  console.log(centreletter,'centrelettercentrelettercentrelettercentreletter');
  console.log(matchingwordsarray,'matchingwordsmatchingwordsmatchingwordsmatchingwordsmatchingwords!!!!!');


    const game = new Bee({
      word: word,
      centreletter: centreletter,
      remaininglettersarray: remaininglettersarrayarray,
      pangrams:pangramsarray,
      matchingwords2: matchingwordsarray,
    });
 
    
   
   
    let querystrings = req.query;
    const bodya = req.body;
    console.log(bodya,'bodya');
 
    let allmatchingwords = bodya.hiddenwords;
  
    let ourcenterletter = bodya.hiddencentreletter;
    let ourremaining = bodya.remaining;
    let remainingletterarray = bodya.hiddenarrayremaining;
    let remainingletterarraynew = remainingletterarray.split(',');
    const testArray = ['hello', 'world', 'test'];

     //try now get id of game
     game.save((err, gameid) => {
      console.log(gameid._id);
   //   res.redirect('/spelling2');
        res.render('spelling2', {
        querystrings: querystrings,
       // bodya: bodya,
        pageTitle: 'Play Spelling Bee',
        path: '/spelling',
        word: word,
        wordarray: remaininglettersarrayarray,
        remaining: ourremaining,
        centerletter: centreletter,
        allmatchingwordsa: matchingwordsarray,
        gameid: gameid._id
      });  
    })

 /*    game
      .save()
      .then(result => {
        //console.log('Create Product');
      res.redirect('/spelling2'); */
     
   /*      res.render('spelling2', {
        querystrings: querystrings,
       // bodya: bodya,
        pageTitle: 'New bee',
        path: '/spelling',
        word: word,
        wordarray: remaininglettersarrayarray,
        remaining: ourremaining,
        centerletter: centreletter,
        allmatchingwords: matchingwordsarray
      });   */
     
      
    //  })
     /*  .catch(err => {
        console.log(err);
      }) */

  };

exports.playGame = (req, res, next) => {
  const gameId = req.params.gameId;
  Bee.findById(gameId)
  .then(game => {
      //if error
      if(!game){
        console.log('no game with this id');
        return res.redirect('/');
      }
    let word = game.word;
    let centreletter = game.centreletter;
    let remaininglettersarray = game.remaininglettersarray;
    let pangrams = game.pangrams;
    let matchingwords2 = game.matchingwords2;
      console.log(word, 'GAME WORD GAME WORD GAME WORD');
      console.log(remaininglettersarray, 'remaininglettersarray)))))))))!!!!!!!!!!!!!!!"""""');

    res.render('spelling2', {
      pageTitle: 'Play Game',
      path: '/spelling2',
      word: word,
      centerletter: centreletter,
      wordarray : remaininglettersarray,
      pangrams: pangrams,
      allmatchingwordsa: matchingwords2
    });
  })
  .catch(err => console.log(err))
}