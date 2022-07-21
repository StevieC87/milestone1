const path = require('path');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


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
  //sendEmail();
  const emailData = {
    from: "info@200ok.eu", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
    to: "thestevieme@gmail.com", // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
    subject: "TEST NODEMAILER ",
    text: ``,
    html: `
       
    `,
  };
const transporter = nodemailer.createTransport({
  host: "mail.200ok.eu",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "info@200ok.eu",
    pass: "fakepassword2",
  },
    tls: {
        rejectUnauthorized: false
    }
});
  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message sent: ${info.response}`);
      return res.json({
        success: true,
      });
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
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