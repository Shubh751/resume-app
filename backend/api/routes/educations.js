const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Education = require('../models/education');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,async(req,res,next)=>{
  await Education.find()
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
	const education = new Education({
    _id: new mongoose.Types.ObjectId(),
    qualification: req.body.qualification,
    start_date:req.body.start_date,
		end_date:req.body.end_date,
		location:req.body.location,
		institute_name:req.body.institute_name,
		student_id:req.body.student_id
	});
  await education.save().then(result=>{
    console.log(result);
    res.status(201).json({
      message:'Education Created',
      createdEducation : result
    });
    }).catch(err=> {
      console.log(err);
      res.status(500).json({
        error:err
    	});
  	});
});


router.get('/:studentId',checkAuth,async(req,res,next)=>{
  const student_id = req.params.studentId;
  await Education.find({ "student_id":student_id })
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


router.patch('/:educationId',checkAuth,(req,res,next)=>{
  console.log("in education patch")
  const id = req.params.educationId;
    // const updateOps = {};
    // for(const ops of req.body){
    //     updateOps[ops.propName] = ops.value;
    // }
    Education.update({ _id:id }, 
      { 
        $set:{
          "qualification":req.body.qualification,
          "start_date":req.body.start_date,
          "end_date":req.body.end_date,
          "location":req.body.location,
          "institute_name":req.body.institute_name,
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