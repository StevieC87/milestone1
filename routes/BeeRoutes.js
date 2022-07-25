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

//------------------- CREATE NEW BEE -------------------
router.get('/createbee', BeeController.newSpellingBeeform);
//OFFICIAL CREATE
router.post('/newgamepost?', BeeController.addNewGame);

router.get('/getwordsgenerate', BeeController.generate);
router.get('/getwordswithcenterletter', BeeController.centerlettermatch)
// router.post('/newgamepost?', BeeController.newgamepostmethod);

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

router.get('/cronjob', BeeController.cronjobMidnightGame);


//TODAY'S GAME
router.get('/',  BeeController.todaysgame);
   
    //WE NEED HERE THE DATA FROM THE DATABASE
    // we need the object from database with date today
    
  


router.get('/howmanypangrams', BeeController.howmanypangrams);

module.exports = router;