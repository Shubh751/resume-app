const mongoose=require('mongoose');

const teacherSchema = mongoose.Schema(
{
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type: String, required : true },
    email: { type: String , reuiqred : true, unique: true},
    password : { type: String, required: true }
}); 

module.exports = mongoose.model('Teacher',teacherSchema);