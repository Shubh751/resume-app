const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Skill = require('../models/skill.js');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,(req,res,next)=>{
  Skill.find()
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
	const skill = new Skill({
    _id: new mongoose.Types.ObjectId(),
    skills: req.body.skills,
		student_id:req.body.student_id
	});
  await skill.save().then(result=>{
    console.log(result);
    res.status(201).json({
      message:'Skill Created',
      createdSkill : result
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
  Skill.find({ "student_id":student_id }).sort({"end_date":-1})
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


router.patch('/:skillId',checkAuth,(req,res,next)=>{
  console.log("in skills edit request")
  const id = req.params.skillId;
  console.log("skills",req.body.skills)
  Skill.update({ _id:id },
    { 
      $set:{
        "skills":req.body.skills,
      }
    }
  )
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


// router.delete('/:postId',checkAuth,(req,res,next)=>{
//     const id = req.params.postId;
//     Post.remove({ _id:id }).exec()
//     .then(result=>{
//         res.status(200).json(result);
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         });
//     });
// });


module.exports = router;