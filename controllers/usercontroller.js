const UserModel = require("../models/userModel");


exports.login = (req, res, next) => {
    //function to get all products
    res.render('user/login', {
        pageTitle: 'Login Page',
        path: '/login',

    });
    
}
exports.signup = (req, res, next) => {
    //function to get all products
    res.render('user/signup', {
        pageTitle: 'Signup Page',
        path: '/signup',
    });
    
}

exports.activateuser = (req, res, next) => {
    //get the random string from the url
    const randomString = req.params.randomString;
    //find the user with the random string
    UserModel.findOne({ activationrandomstring: randomString })
    .then(user => {
        //check if exists
        if(!user){
            console.log('no user with this random string');
            return res.redirect('/');
        }
        //if exists, set activated to true
        user.activated = true;  
        user.save()
        .then(result => {
            console.log('user activated');
            return res.redirect('/user/login');
        })
        .catch(err => {
           console.log(err);
        })
    })
}


/* OLD DUNNO 
exports.registration = async (req, res, next) => {
    console.log('registration CONTRLLER HERE');
    
     try {
      //  const user = await UserModel.create(req.body);
    //    res.redirect('/login');
    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    const savedUser = await user.save();
    if(savedUser) {
     return res.redirect('/user/login?register=true');
   //   res.render('helloworld');
    }
    return next(new Error('Failed to save user unknown reason'));
    }
    catch (err) {
        console.log(err);
        return next(err);
    }
} */