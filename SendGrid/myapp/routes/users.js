var express=require('express');
var nodemailer = require("nodemailer");
var router = express.Router();

 router.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'anthony7jmj@gmail.com',
              pass: 'mgztjlvfwlyupqdi'
          }
      });
      let mailOptions = {
          from: '"Reginald Anthony" <anthony7jmj@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });

module.exports = router;


