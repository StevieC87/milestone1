const UserModel = require("../models/userModel");
const WordsFound = require("../models/wordsFoundModel");

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
exports.updatewords = (req, res, next) => {

    //parse the body of the request
    const body = req.body;
    console.error(body, 'body');
    
    //get the user id from the body
    const userid = body.userid;
    //get the words found from the body
    const yourmatchedwords = body.yourmatchedwords;
    //get the game date from the body
    const gamedate = body.gamedate;

    //my own test variables
    /* const userid = '1234';
    const wordsFoundArray = ['hello', 'world', 'test'];
    const gamedate = '2020-01-01';
/*  */
  /*   const wordsFoundArray = req.body.wordsFoundArray;
    
    const gamedate = req.body.gamedate;
    const userid = req.body.userid;  */

    //first find if one exists , if so replace
    WordsFound.findOne({ userid: userid, gamedate: gamedate })
    .then(wordsFound => {
        if(wordsFound){
            wordsFound.wordsFoundArray = yourmatchedwords;
            wordsFound.save()
            .then(result => {
                console.log('words updated');
                //return res.redirect('/');
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            //if not, create a new one
            const wordsFound = new WordsFound({ 
                gamedate: gamedate,
                userid: userid,
                wordsFoundArray: yourmatchedwords
            });
            wordsFound.save()
        }
    })
   
    
     .then(result => {
        console.log('words found saved');
       // return res.redirect('/');
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