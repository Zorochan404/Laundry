import mongoose from "mongoose"


const Schema = mongoose.Schema


const orderschema = new Schema ({
    shippinginfo:{
        address:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        },
        pincode:{
            type: Number,
            required: true
        },
        phoneno:{
            type: Number,
            required: true
        }
    },
    totalamaount:{
        type: Number,
        default: 0
    },
    orderitems:[
        {
            name:{
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            },
            product:{
                type: mongoose.Schema.ObjectId,
                ref: "items",
                required: true
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    orderreceived:{
        type: String,
        default: "pending"
    },
    deliveredat: Date,
    createdat: {
        type: Date,
        default: Date.now
    }

})


const orders = mongoose.model("orders", orderschema)

export default orders