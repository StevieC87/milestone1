//IMPORT SOME NODE / EXPRESS MODULES
const path = require('path');
const express = require('express');
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

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// SET ROUTE FOR EACH PATHS (/admin or /shop /user etc 
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

/* 404 error handling */
app.use(errorController.get404);

// app.listen(3000);

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