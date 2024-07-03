import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";
import bcrypt from "bcrypt";

const UserSchema = new Schema<User>({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
})

UserSchema.pre("save", async function (next) {
  if(!this.isModified('password')){ // Si el password ha sido modificado, se va al siguiente middleware
    return next()
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt) // se hashea el password con el salt generado
})

const UserModel = model<User>('users', UserSchema);
export default UserModel;