import express from "express"
import { verifyToken } from "../verifyToken.js"
import {additems, allitems} from "../controllers/items.js"
import { admin } from "../controllers/auth.js"
import { cancelorder, deliveredOrder, myOrders, singleOrder, newOrder, pendingOrder, receivedOrder, updatependingOrder, updatereceivedOrder } from "../controllers/orders.js"




const router = express.Router()





router.post('/place/order',verifyToken, newOrder)
router.get('/single/order/:id',  verifyToken, singleOrder)
router.get("/my/orders", verifyToken, myOrders)
router.get("/pending/orders", verifyToken, admin,pendingOrder)
router.get("/received/orders", verifyToken, admin, receivedOrder)
router.get("/delivered/orders", verifyToken, admin,deliveredOrder)
router.put("/cancel/orders/:id", verifyToken, cancelorder)
router.put("/update/pending/toreceived/:id", verifyToken, admin, updatependingOrder)
router.put("/update/received/todelivery/:id", verifyToken, admin, updatereceivedOrder)




export default router;