//IMPORT SOME NODE / EXPRESS MODULES
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotetnv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const session = require('express-session');
var cron = require('node-cron');

const BeeController = require('./controllers/BeeController');

const MongoDBStore = require('connect-mongodb-session')(session);

const auth = require('./lib/auth');

//process.env.MONGODB_URI
// import module for 404 errors
const errorController = require('./controllers/error');

const app = express();

//IMPORT ROUTE MODULES
const BeeRoutes = require('./routes/BeeRoutes');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//SET TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.set('views', 'views');

//MONGOSTORE 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const store = new MongoDBStore({
    uri: process.env.MONGOSTORE,
    collection: 'sessions'
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
    }));

app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser);

// SET ROUTE FOR EACH PATHS (/admin or /, /user etc 
app.use('/', BeeRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

/* 404 error handling */
app.use(errorController.get404);

//cron job will add today's date 
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    //find game without date and set date to today
    //BeeController.cronjobMidnightGame();

  });
// app.listen(3000);

  mongoose.connect(
    //process.env.MONGOSTORE
    process.env.MONGOSTORE
)
    .then(result => {
        app.listen(3000);
    }
    )
    .catch(err => {
        console.log(err);
    }
    );


//OLD mongoose.connect(process.env.MONGOCONNECT)
/* mongoose.connect(process.env.MONGOCONNECT, {
    dbName: 'games'
})
    .then(app.listen(3000))
    .catch(err=> {
        console.log(err);
    });
 */

/* 
const fileUpload = require("express-fileupload");
app.use(fileUpload());
 */