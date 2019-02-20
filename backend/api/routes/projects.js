const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/project');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,(req,res,next)=>{
  Post.find()
  .select('_id title tags comments')
  .exec()
  .then(docs=>{
    console.log(docs)
    res.status(200).json(docs);
   }).catch(err=>{
    console.log(err); 
    res.status(500).json({
      error:err
    });
  });
});


router.post('/',checkAuth, async (req,res,next)=>{
	const project = new Project({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    start_date:req.body.start_date,
		end_date:req.body.end_date,
		member1:req.body.member1,
		member2:req.body.member2,
		member3:req.body.member3,
		description:req.body.description,
		location:req.body.location,
		company_name:req.body.company_name,
		student_id:req.body.student_id
	});
  await project.save().then(result=>{
    console.log(result);
    res.status(201).json({
      message:'Project Updated',
      createdProject : result
    });
    }).catch(err=> {
      console.log(err);
      res.status(500).json({
        error:err
    	});
  	});
});


router.get('/:studentId',checkAuth,(req,res,next)=>{
  const student_id = req.params.studentId;
  Project.find({ "student_id":student_id })
  .exec()
  .then(doc=>{
    console.log("From database",doc);
    if(doc){
        res.status(200).json(doc);
    }else{
        res.status(400).json({message: "No valuid entry Found for provided ID"});
    }
  })
  .catch(err=> {
    console.log(err)
    res.status(500).json({error:err})
  });
});


router.patch('/:projectId',checkAuth,(req,res,next)=>{
    const id = req.params.projectId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Project.update({ _id:id }, { $set: updateOps })
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


router.delete('/:postId',checkAuth,(req,res,next)=>{
    const id = req.params.postId;
    Post.remove({ _id:id }).exec()
    .then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


module.exports = router;