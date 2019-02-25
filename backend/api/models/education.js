const mongoose=require('mongoose');

const educationSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  qualification:{ type: String, required : true },
  start_date: { type: String },
  end_date : { type: String },
  location : { type: String },
  institute_name : { type: String },
	student_id : { type: String }
}); 

module.exports = mongoose.model('Education',educationSchema);