
//IMPORT SOME NODE / EXPRESS MODULES
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// for error pages
const errorController = require('./controllers/error');

const app = express();
const fileUpload = require("express-fileupload");

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

/* SET ROUTERS FOR PATHS (e.g. router for all sites under mysite.com/admin or /shop  */
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

/* set controller method here  */
app.use(errorController.get404);

app.listen(3000);