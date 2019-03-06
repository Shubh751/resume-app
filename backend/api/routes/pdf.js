const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const pdf = require('html-pdf');
const pdfTemplate = require('../documents');

router.get('/fetch-pdf',(req,res)=>{
  res.sendFile(`${__dirname}/result.pdf`)
});

router.post('/create-pdf',(req,res)=>{
  pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf',(err)=>{
    if(err){
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});


module.exports = router;