const mongoose=require('mongoose');

const explainSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  explain:{ type: String, required : true },
	student_id : { type: String }
}); 

module.exports = mongoose.model('Explain',explainSchema);