const path = require('path');
const express = require('express');
const router = express.Router();


const BeeController = require('../controllers/BeeController');
const { Router } = require('express');
const sendEmail = require('../util/sendEmail');

// router.get('/', shopController.listProducts);

//router.post('/add-to-wishlist', shopController.addToWishlist);

router.get('/spelling2', BeeController.spellingBee);
router.get('/createbee', BeeController.newSpellingBeeform);
router.get('/getwordsgenerate', BeeController.generate);
router.get('/getwordswithcenterletter', BeeController.centerlettermatch)
// router.post('/newgamepost?', BeeController.newgamepostmethod);
//OFFICIAL CREATE
router.post('/newgamepost?', BeeController.addNewGame);
router.get('/play/:gameId?', BeeController.playGame);


// HERE SEND EMAIL TEST
router.get('/sendEmail', (req, res) => {
  sendEmail();
   res.send('ok');
});



//HERE FOR LOCAL TEST

let word = 'basketball';
let centreletter = 'k';
let remaininglettersarray = ['b', 'a', 's', 'e', 't', 'l'];
let pangrams = ["basketball","bleakest"];
let matchingwordsarray = [
    "asks",
    "bake",
    "bakes",
    "bask",
    "basket",
    "basketball",
    "baskets",
    "basks",
    "beak",
    "beaks",
    "bleak",
    "bleakest",
    "elks",
    "kale",
    "kebab",
    "kebabs",
    "keel",
    "keels",
    "kelt",
    "kelts",
    "kettle",
    "kettles",
    "lake",
    "lakes",
    "leak",
    "leaks",
    "leek",
    "leeks",
    "sake",
    "sakes",
    "seek",
    "seeks",
    "skate",
    "skates",
    "skeletal",
    "slake",
    "sleek",
    "sleeks",
    "stake",
    "stakes",
    "stalk",
    "stalks",
    "steak",
    "steaks",
    "take",
    "takeable",
    "takes",
    "talk",
    "talks",
    "task",
    "tasks",
    "teak"
  ];

router.get('/', (req, res) => {
    res.render('spelling2', {
         pageTitle: 'Play local test Bee',
         path: '/spelling2a',
         word: word,
         wordarray: remaininglettersarray,
         centerletter: centreletter,
         allmatchingwordsa: matchingwordsarray,
         pangrams: pangrams
    });       
})


router.get('/howmanypangrams', BeeController.howmanypangrams);

module.exports = router;