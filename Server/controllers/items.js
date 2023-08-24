import orders from '../models/items.js'


export const additems = async(req,res)=>{

    try {
        const order = new orders(req.body)
        const saveorder = await order.save()
        res.status(200).json("item added")
    
    } catch (error) {
        console.log(error)
    }

}

export const allitems = async(req, res) => {
    try {
        const item = await orders.find()
        res.status(200).json(item)
    } catch (error) {
        console.log(error)
    }
}




