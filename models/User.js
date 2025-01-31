import {model,models,Schema} from "mongoose"
const UserSchema=new Schema({
    email:{
        type:String,
        unique:[true,'email already exists'],
        required:[true,"email is required"]
    },
    username:{
        type:String,
        required:[true,"username is required"],
    },
    image:{
        type:String
    }
})
const User=models.User||model("User",UserSchema)
export default User