let mongoose = require("mongoose");
let passpostLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required"
    },
    /*taken out as passport will be encrypted by local
mongoose
passport:{
type: String,
default:'',
trim:true,
required:'password is required'
}*/

    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);
//configure options for the username
let options=({
missingPasswordError:"Wrong/ Missing Password"
});
userSchema.plugin(passportLocalMongoose,options);
module.exports.User=mongooose.model('User',userSchema);
