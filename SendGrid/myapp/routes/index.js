var express = require('express');
var router = express.Router();

const sgMail = require('@sendgrid/mail');
// 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
router.get('/', function(req, res, next) {
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'receiver@mailID.com',
  from: 'sender@gmail.com',
  subject: 'REgiNAld',
  text: 'ANthONy',
};
sgMail.send(msg)
res.send('OK')
});

module.exports = router;
