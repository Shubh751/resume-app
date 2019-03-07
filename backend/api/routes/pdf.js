const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const pdf = require('html-pdf');
const pdfTemplate = require('../documents/index');
// const cors = require('cors');

const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'shubhamjaiswar51@gmail.com',
         pass: 'Abc@12345678'
     }
 });

 const mailOptions = {
  from: 'shubhamjaiswar51@gmail.com', // sender address
  to: 'sjaiswar@bestpeers.com', // list of receivers
  subject: 'Resume', // Subject line
  html: '<p>Your html here</p>',// plain text body
  attachments:[{
    filename: 'result.pdf',
    path: './result.pdf',
    contentType: 'application/pdf'
  }]
};

router.get('/',(req,res)=>{
  console.log("in get request")
  res.sendFile(`${__dirname}/result.pdf`)
});

router.post('/',(req,res)=>{
  console.log("in post request")
  console.log("Body",res.body)
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) =>{
    if(err){
      res.send(Promise.reject());
    }
    else
    {
      transporter.sendMail(mailOptions,function (err, info) {
        if(err)
          console.log("error in mail-sent.....",err)
        else
          console.log("ingo of mail-sent",info);
      });
      res.send(Promise.resolve());
    }
  });
});

module.exports = router;