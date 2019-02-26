const express  =require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const projectRoutes  =require('../api/routes/projects');
const educationRoutes = require('../api/routes/educations');
const studentRoutes = require('../api/routes/students');
const explainRoutes = require('../api/routes/explains');



mongoose.connect(
  'mongodb://localhost:27017/resume-app',
  {useNewUrlParser:true}
);


app.use(morgan('dev'));
app.use(express.json());


app.use('/education',educationRoutes);
app.use('/student',studentRoutes);
app.use('/project',projectRoutes);
app.use('/explain',explainRoutes);


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