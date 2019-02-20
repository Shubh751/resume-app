const mongoose=require('mongoose');

const projectSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  title:{ type: String, required : true },
  start_date: { type: String },
  end_date : { type: String },
  member1 : { type: String },
  member2 : { type: String},
  member3 : { type: String},
  description : { type: String },
  location : { type: String },
	company_name : { type: String },
	student_id : { type: String }
}); 

module.exports = mongoose.model('Project',projectSchema);