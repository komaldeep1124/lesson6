let mongoose=require('mongoose');
//create a model class
let favSchema=mongoose.Schema({
name:String,
desc:String,

},
{
collection:"favThing"
});
module.exports=mongoose.model('komal',favSchema);