//IMPORT SOME NODE / EXPRESS MODULES
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotetnv = require('dotenv').config();

// import module for 404 errors
const errorController = require('./controllers/error');

const app = express();

//IMPORT ROUTE MODULES
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//SET TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.json()); //TRYING THIS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: 'my secret', //this is used to sign session to prevent tamperings// use random string
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: oneDay }
  //  resave: true, //wants session to stay active even if it wasn't changed
  //  saveUninitialized: false, //otherwise we would get a lot of empty objecst in our db
   // store: MongoStore.create({
      //   mongooseConnection: process.env.MONGOCONNECT }), //this is used to store session in mongodb
         /// mongoose.connection
          
 }));
 app.use(auth.initialize);
 app.use(auth.session);
app.use(auth.setUser);

 app.use(async (req, res, next) => {
    try {
     req.session.visits = req.session.visits + 1 || 1;
      // const names = await speakers.getNames();
      const names = [ 'stevie', 'james', 'patrick' ];
      res.locals.speakerNames = names;
      return next();
    } catch (err) {
      return next(err);
    }
  });

app.use(express.static(path.join(__dirname, 'public')));


// SET ROUTE FOR EACH PATHS (/admin or /shop /user etc 
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

/* 404 error handling */
app.use(errorController.get404);

/*  app.listen(3000); */

//mongoose.connect(process.env.MONGOCONNECT)
mongoose.connect(process.env.MONGOCONNECT, {
    dbName: 'games'
})
    .then(app.listen(3000))
    .catch(err=> {
        console.log(err);
    });


/* 
const fileUpload = require("express-fileupload");
app.use(fileUpload());
 */