const express  =require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const projectRoutes  =require('../api/routes/projects');
const educationRoutes = require('../api/routes/educations');
const studentRoutes = require('../api/routes/students');
const explainRoutes = require('../api/routes/explains');
const certificateRoutes = require('../api/routes/certificates');
const imageRoutes = require('../api/routes/images');
const skillsRoutes = require('../api/routes/skills');
const pdfRoutes = require('../api/routes/pdf');



mongoose.connect(
  'mongodb://localhost:27017/resume-app',
  {useNewUrlParser:true}
);


app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
app.use(express.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use('/pdf',pdfRoutes)
app.use('/education',educationRoutes);
app.use('/student',studentRoutes);
app.use('/project',projectRoutes);
app.use('/explain',explainRoutes);
app.use('/certificate',certificateRoutes);
app.use('/image',imageRoutes);
app.use('/skills',skillsRoutes);




app.use((req,res,next)=>
{
  const error = new Error('Not found');
  error.status=404;
  next(error);
});

app.use((error,req,res,next)=>
{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  });
});

module.exports = app;