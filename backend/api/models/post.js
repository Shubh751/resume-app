const mongoose=require('mongoose');

const postSchema = mongoose.Schema(
{
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    seen:[String],
    unseen:[String],
    completed:[String]
});

module.exports = mongoose.model('Post',postSchema);