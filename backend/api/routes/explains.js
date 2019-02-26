const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Explain = require('../models/explain');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,async(req,res,next)=>{
  await Explain.find()
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
	const explain = new Explain({
    _id: new mongoose.Types.ObjectId(),
    explain: req.body.explain,
		student_id:req.body.student_id
	});
  await explain.save().then(result=>{
    console.log(result);
    res.status(201).json({
      message:'Explain Created',
      createdExplain : result
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
  await Explain.find({ "student_id":student_id })
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
    Explain.update({ _id:id }, 
      { 
        $set:{
          "explain":req.body.explain
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