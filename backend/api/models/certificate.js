const mongoose=require('mongoose');

const certificateSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  title:{ type: String, required : true },
  start_date: { type: String },
  end_date : { type: String },
  institute_name : { type: String },
	student_id : { type: String }
}); 

module.exports = mongoose.model('Certificate',certificateSchema);