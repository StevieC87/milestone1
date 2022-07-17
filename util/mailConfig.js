const mailConfig = {
    host: "mail.200ok.eu",
    port: 587,
    secure: false, // true for 465, false for other ports
//service: 'Gmail',
    auth: {
      user: "info@200ok.eu", // generated ethereal user
      pass: "fakepassword2", // generated ethereal password
    },
  };

  module.export = mailConfig;