import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });
//  // hash the password before saving to database  
// userSchema.pre('save', function(next){
//   if(!this.isModified('password')){
//     return next();
//   }
//   bcrypt.hash(this.password, 8, (err, hash)=>{
//     if(err){
//       return next(err);
//     }
//     this.password=hash;
//     next();
//   });
// });
const User=mongoose.model('user', userSchema);
export default User;
