import orders from "../models/orders.js";
import items from "../models/items.js";
import user from "../models/user.js";





export const newOrder = async(req, res)=> {


    const {shippinginfo,orderitems, orderreceived } = req.body;
    let totalamaount = 0
    
    for (const orderItem of orderitems){
        totalamaount+= orderItem.price * orderItem.quantity
    }
    const user = req.user.id
    try {
        const order = new orders({
            shippinginfo,orderitems, orderreceived, totalamaount,
            user
        })
        const addorder = await order.save()
        res.status(200).json(addorder)
    } catch (error) {
        console.log(error)
    }
}



export const singleOrder = async(req, res) => {

    try {
        const order = await orders.findById(req.params.id).populate(
            "user",
            "name email"
        )

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}



export const myOrders = async(req, res) => {
  
    try {
        const order = await orders.find({user: req.user.id})

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}


export const pendingOrder = async(req, res) =>{
    try {
        const order = await orders.find({orderreceived: "pending"})
        

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}

export const updatependingOrder = async(req, res) =>{
    try {
        const order = await orders.findByIdAndUpdate(req.params.id,
            
                { orderreceived: 'received' },
                { new: true } 
            )
        

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}



export const receivedOrder = async(req, res) =>{
    try {
        const order = await orders.find({orderreceived: "received"})
        

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}

export const updatereceivedOrder = async(req, res) =>{
    try {
        const order = await orders.findByIdAndUpdate(req.params.id,
            
                { orderreceived: 'delivered' },
                { new: true } 
            )
        

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}



export const deliveredOrder = async(req, res) =>{
    try {
        const order = await orders.find({orderreceived: "delivered"})
        

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json(order)
    
    } catch (error) {
        console.log(error)
    }
}


export const cancelorder = async(req, res) =>{
    try {
        const order = await orders.findOneAndDelete({
            _id:req.params.id,
            user:req.user.id
        })
        

        if(!order){
        res.status(400).json("order not found")
        }
        res.status(200).json("order cancelled")
    
    } catch (error) {
        console.log(error)
    }
}




