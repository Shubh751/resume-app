const express  =require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const projectRoutes  =require('../api/routes/projects');
// const userRoutes = require('./api/routes/teachers');
const studentRoutes = require('../api/routes/students');


mongoose.connect(
  'mongodb://localhost:27017/resume-app',
  {useNewUrlParser:true}
);


app.use(morgan('dev'));
app.use(express.json());


// app.use('/teacher',userRoutes);
app.use('/student',studentRoutes);
app.use('/project',projectRoutes);

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