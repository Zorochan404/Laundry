import mongoose from "mongoose"


const Schema = mongoose.Schema


const itemSchema = new Schema ({
    item:{
        type: String,
    },
    price:{
        type:Number,
        default: 0
    }

})


const items = mongoose.model("items", itemSchema)

export default items