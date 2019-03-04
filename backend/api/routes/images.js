const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../models/image');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
    // dest:'./uploads/'
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.get('/',checkAuth,(req,res,next)=>{
  Image.find()
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


router.post('/',checkAuth,upload.single('studentImage'), async (req,res,next)=>{
  console.log(req.file);
  const image = new Image({
    _id: new mongoose.Types.ObjectId(),
    student_image: req.file.path,
		student_id:req.body.student_id
	});
  await image.save().then(result=>{
    console.log(result);
    res.status(201).json({
      message:'Image Updated',
      createdImage : result
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
  Image.find({ "student_id":student_id })
  .exec()
  .then(doc=>{
    console.log("From database",doc);
    if(doc){
        res.status(200).json(doc);
    }else{
        res.status(400).json({message: "No valid entry Found for provided ID"});
    }
  })
  .catch(err=> {
    console.log(err)
    res.status(500).json({error:err})
  });
});


router.patch('/:imageId',upload.single('studentImage'),checkAuth,(req,res,next)=>{
  const id = req.params.imageId;
  Image.update({ _id:id },
    { 
      $set:{
        "student_image":req.file.path
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