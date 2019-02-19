const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');
const checkAuth = require('../middleware/check-auth');


router.get('/',checkAuth,(req,res,next)=>{
   Post.find()
   .select('_id title seen unssen completed')
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


router.post('/',checkAuth,(req,res,next)=>{
const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    seen:[''],
    unseen:[''],
    completed:['']
});
    post.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message:'Handling POST request to /products',
            createdPost : result
        });
    }).catch(err=> {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
  
});


router.get('/:postId',checkAuth,(req,res,next)=>{
    const id = req.params.postId;
    console.log(id);
    Post.findById(id)
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

router.patch('/:postId',checkAuth,(req,res,next)=>{
    const id = req.params.postId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Post.update({ _id:id }, { $set: updateOps })
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


router.patch('/unseen',checkAuth,(req,res,next)=>{
    // const id = req.params.postId;
    console.log("in update unseen")
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Post.updateMany({},{ $set: { updateOps } })
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            message: "error is here",
            error:err
        });
    });
});

module.exports = router;