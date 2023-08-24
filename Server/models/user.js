import mongoose from "mongoose"
import validator from "validator"



const Schema = mongoose.Schema


const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
        validate:[validator.isEmail]
    },
    phone:{
        type:Number
    },
    avatar:{
        public_id:{
            type:String,
            defult:"7238642784"
        },
        url:{
            type:String,
            default:"hello.img"
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetpasswordtoken:{
        type:String,
    },
    resetpasswordexipre:{
        type:Date
    }
    
})

const user = mongoose.model("user", userSchema)

export default user