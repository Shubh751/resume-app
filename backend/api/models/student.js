const mongoose=require('mongoose');

const studentSchema = mongoose.Schema(
{
  _id:mongoose.Schema.Types.ObjectId,
  name:{ type: String, required : true },
	email: { type: String , reuiqred : true, unique: true },
	phone: { type: String, required: true },
	location: { type: String, required: true },
  password : { type: String, required: true }
});

module.exports = mongoose.model('Student',studentSchema);