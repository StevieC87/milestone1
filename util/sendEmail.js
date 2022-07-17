const nodemailer = require('nodemailer');
const emailConfig = require('./mailConfig.js');



const sendEmail = async () => {
    const transporter = nodemailer.createTransport(emailConfig);
    
    let mailOptions = {
      from: 'walkieswalkiesdogwalking@gmail.com', // sender address
      to: "thestevieme@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    }
    
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });  
    

}

module.exports = sendEmail;