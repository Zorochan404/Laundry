import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import auth from "./routes/auth.js"
import items from "./routes/items.js"
import orders from "./routes/orders.js"
import cookieParser from "cookie-parser"


const app = express()
dotenv.config()




const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.mongo)
        console.log(`connected to ${mongoose.connection.host}`)
    }catch(err){
        console.log(err)
    }
}




app.use(express.json())
app.use(cookieParser())
app.use('/api', auth)
app.use('/api', items)
app.use('/api', orders)




connectdb()

 


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})


