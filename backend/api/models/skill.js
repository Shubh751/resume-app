const mongoose=require('mongoose');

const skillSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  skills:{ type: [String], required : true },
  student_id : { type: String, required: true }
});

module.exports = mongoose.model('Skill',skillSchema);