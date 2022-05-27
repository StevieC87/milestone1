
//STANDARD STUFF HERE COPY/PASTE
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// for error pages:  routing, controller
const errorController = require('./controllers/error');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);


app.use(errorController.get404);

app.listen(3000);