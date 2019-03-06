const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/',(req,res,next)=>{
  Student.find()
  .exec()
  .then(docs=>{
      console.log(docs);
       res.status(200).json(docs);
  }).catch(err=>{
      console.log(err); 
      res.status(500).json({
          error:err
      });
  });
    
});


router.post("/login",(req,res,next)=>{
  Student.find({ email: req.body.email })
  .exec()
  .then(user=>{
    if(user.length <1)
    {
      return res.status(401).json({
        message: "1 .Authntication failed"
      });
    }
    bcrypt.compare(req.body.password, user[0].password, (err,result)=>{
    if(err)
    {
      return res.status(401).json({
      	message: "2 .Authntication failed"
    	});
    }
    if(result)
    {
      console.log(user[0].name)
        const token = jwt.sign(
        {
            email: user[0].email,
            userId: user[0]._id
        }, 
        process.env.JWT_KEY,
        {
            expiresIn:"1d"
        }
        );
      return res.status(200).json({
        message: "Authentication succesful",
        token: token,
        email:req.body.email,
				name:user[0].name,
				phone:user[0].phone,
				id:user[0]._id,
				location:user[0].location
      });
    }
    res.status(401).json({
        message: "3. Authntication failed"
    });
  	});
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
  });
})


router.post('/signup',(req,res,next)=>{
  Student.find({ email:req.body.email })
  .exec()
  .then(user=>{
    if(user.length >= 1)
    {
        return res.status(409).json({
            message:"Mail exists"
        });
    }
    else
    {
      bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
          return res.status(500).json({
              error:err
          });
        }
        else
        {
          const user =new Student({
            _id: new mongoose.Types.ObjectId(),
            name:req.body.name,
						email: req.body.email,
						phone: req.body.phone,
						location:req.body.location,
            password: hash
          });
          user.save()
          .then(result=>{
            console.log(result);
            res.status(201).json({
                message:'User created'
            });
          })
          .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
          })
        }
      })
    }
  })   
});

router.patch("/editPhone/:studentId",(req,res,next)=>{
	const id = req.params.studentId;
  Student.update({ _id:id },
    { 
      $set:{
        "phone":req.body.phone
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
})

router.patch("/editEmail/:studentId",(req,res,next)=>{
	const id = req.params.studentId;
  Student.find({ email:req.body.email })
  .exec()
  .then(user=>{
    if(user.length >= 1)
    {
        return res.status(409).json({
            message:"Mail exists"
        });
    }else{
    Student.update({ _id:id },
      { 
        $set:{
          "email":req.body.email
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
  }
});
})

router.patch("/editLocation/:studentId",(req,res,next)=>{
	const id = req.params.studentId;
  Student.update({ _id:id },
    { 
      $set:{
        "location":req.body.location
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
})

router.delete("/:studentId",(req,res,next)=>{
  Student.remove({ _id: req.params.studentId })
  .exec()
  .then(result =>{
      res.status(200).json({
          message: "User Deleted"
      });
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json({
          error:err
      });
  });
});

router.get("/:studentId",(req,res,next)=>{
  Student.findOne({ _id:req.params.studentId })
  .exec()
  .then(result=>{
    console.log(result)
    if(result)
    {
        res.status(200).json({result})
    }
    else
    {
        res.status(400).json({message:"No entry found"});
    }
  }).catch(err=> {
    console.log(err)
    res.status(500).json({error:err})
  });
});

module.exports = router;