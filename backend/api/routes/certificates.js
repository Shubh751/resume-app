const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Certificate = require('../models/certificate');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,async(req,res,next)=>{
  await Certificate.find()
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
	const certificate = new Certificate({
    _id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		start_date:req.body.start_date,
		end_date:req.body.end_date,
		institute_name:req.body.institute_name,
		student_id:req.body.student_id
	});
  await certificate.save().then(result=>{
    console.log(result);
    res.status(201).json({
      message:'Certificate Created',
      createdCertificate : result
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
  await Certificate.find({ "student_id":student_id }).sort({"end_date":-1})
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


router.patch('/:explainId',checkAuth,(req,res,next)=>{
  console.log("in explain patch")
  const id = req.params.explainId;
    // const updateOps = {};
    // for(const ops of req.body){
    //     updateOps[ops.propName] = ops.value;
    // }
    Certificate.update({ _id:id }, 
      { 
        $set:{
          "title": req.body.title,
					"start_date":req.body.start_date,
					"end_date":req.body.end_date,
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