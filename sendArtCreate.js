var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

nodemailer.createTransport({
    host: "mail.paddywackgifts.com", //replace with your email provider
    port: 465,
    auth: {
      user: "webmaster@paddywackgifts.com", //replace with the email address
      pass: "T!ger7466" //replace with the password
    }
});

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});

router.post('/artCreateSend/', (req, res, next) => {
    var name = req.body.customerName
    var email = req.body.customerEmail
    var phone = req.body.customerPhone
    var subject = 'Somebody has requested a custom commission piece, Tiger!'
    var message = req.body.message
    var attachment = req.body.preview
    var content = `<h1>Somebody wants a custom commission piece!</h1><p>Hello Tiger!</p><p>Here is some information on a new custom commission piece request:</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone Number: ${phone}</p><p>Message: ${message}</p><p>Preview of what they want:</p><img src=${attachment} width="200" />`
    var mail = {
      from: email,
      to: 'tiger@paddywackgifts.com',
      subject: subject,
      html: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
})