const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/userModel');
const userController = require('../controllers/usercontroller');
const { Router } = require('express');
const nodemailer = require('nodemailer');

router.get('/hello', function (req, res, next) {
   res.render('helloworld');
}
);

function redirectIfLoggedIn(req, res, next) {
   if (req.user) {
       return res.redirect('/users/account');
   } else {
     return next();
   }
}

router.get('/login', redirectIfLoggedIn, userController.login);

/* router.get('/logout', (req, res) => {
   req.logout();
   return res.redirect('/', () => {
       console.log('logout');
   })
}) */
router.get("/logout", (req, res) => {
   req.logout(req.user, err => {
     if(err) return next(err);
     res.redirect("/");
   });
 });

router.get('/signup', redirectIfLoggedIn, userController.signup);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login?error=true',
   
}));

router.post('/signup', async (req, res, next) => {
   try {

      //random string to send to user and to store in database
    const randomString = Math.random().toString(18).substring(2, 15) + Math.random().toString(18).substring(2, 15);

       const user = new UserModel({
           username: req.body.username,
           email: req.body.email,
           password: req.body.password,
           activated: false,
           activationrandomstring: randomString
        });
       const savedUser = await user.save();

         //send email with activation link
            const activationLink = `http://159.223.237.16/user/activate/${randomString}`;
        //and save activation link to user


       //then send email here 
       const emailData = {
        from: "info@200ok.eu", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
        to: req.body.email, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
        subject: "Activate Spelling Bee Account",
        text: ``,
        html: `<span>Click this link to activate your account</span> <a href="${activationLink}">${activationLink}</a>
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



       if (savedUser) return res.redirect('/user/signup?success=true');
       return next(new Error('Failed to save user for unknown reasons'));
   }
   catch (err) {
       return next(err);
   }

}
);

router.get('/activate/:randomString', userController.activateuser);



router.get('/account', (req, res, next) => {
   if (req.user) {
       return next();
       //return res.render('account', { user: req.user });
   }
       return res.status(401).end();  
}
,(req, res) => {
   res.render('/user/account', { user: req.user });
}
);


module.exports = router;