# Node-examples
Some simple snippets

## NodeMailer Project
1) $ npm install
2) Open server.js and configure your email client.
3) $ npm start

Possible error for gmail
```{ Error: Invalid login: 534-5.7.9 Application-specific password required. Learn more at
534 5.7.9  https://support.google.com/mail/?p=InvalidSecondFactor g71sm4114259pgc.41 - gsmtp
    at SMTPConnection._formatError (/home/reginaldanthony/othersGithub/nodemailer-master/node_modules/nodemailer/lib/smtp-connection/index.js:557:19)
    at SMTPConnection._actionAUTHComplete (/home/reginaldanthony/othersGithub/nodemailer-master/node_modules/nodemailer/lib/smtp-connection/index.js:1253:34)
    at SMTPConnection._responseActions.push.str (/home/reginaldanthony/othersGithub/nodemailer-master/node_modules/nodemailer/lib/smtp-connection/index.js:340:26)
    at SMTPConnection._processResponse (/home/reginaldanthony/othersGithub/nodemailer-master/node_modules/nodemailer/lib/smtp-connection/index.js:706:20)
    at SMTPConnection._onData (/home/reginaldanthony/othersGithub/nodemailer-master/node_modules/nodemailer/lib/smtp-connection/index.js:509:14)
    at TLSSocket._socket.on.chunk (/home/reginaldanthony/othersGithub/nodemailer-master/node_modules/nodemailer/lib/smtp-connection/index.js:461:47)
    at emitOne (events.js:116:13)
    at TLSSocket.emit (events.js:211:7)
    at addChunk (_stream_readable.js:263:12)
    at readableAddChunk (_stream_readable.js:250:11)
  code: 'EAUTH',
  response: '534-5.7.9 Application-specific password required. Learn more at\n534 5.7.9  https://support.google.com/mail/?p=InvalidSecondFactor g71sm4114259pgc.41 - gsmtp',
  responseCode: 534,
  command: 'AUTH PLAIN' }
  ```

  >Solution

Steps:
1) Log in to your Google account
2) Go to My Account > Sign-in & Security > App Passwords
 (Sign in again to confirm it's you)
3) Scroll down to Select App (in the Password & sign-in method box) and choose Other (custom name)
4) Give this app password a name, e.g. "nodemailer"
5) Choose Generate
6) Copy the long generated password and paste it into your Node.js script instead of your actual Gmail password. (You don't need the spaces.)


## SendGrid Project

* This project uses sendgrid to send mails.
* Read for more details https://app.sendgrid.com/
* The mails sent by sendgrid will be in spam.
* If any error occours try replacing the ```process.env.SENDGRID_API_KEY``` with original generated key.

>Note

* Do not run the app directly.
* You can use my node app boiler plate only.
* Follow the website instructions to get the API KEY.

>To Run My App

* npm i
* Replace the api in routes>index.js
* npm start
* open localhost:3000



https://myaccount.google.com/lesssecureapps
