const mongoose=require('mongoose');

const imageSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  student_image: { type:String, required: true  },
	student_id : { type: String }
}); 

module.exports = mongoose.model('Image',imageSchema);