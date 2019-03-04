const mongoose=require('mongoose');

const studentSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  name:{ type: String, required : true },
	email: { type: String , reuiqred : true, unique: true},
	phone: { type: Number, required: true },
  password : { type: String, required: true }
}); 

module.exports = mongoose.model('Student',studentSchema);