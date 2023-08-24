import express from "express"
import { verifyToken } from "../verifyToken.js"
import {additems, allitems} from "../controllers/items.js"
import { admin } from "../controllers/auth.js"




const router = express.Router()





router.post('/additems',verifyToken, admin, additems)
router.get('/finditems', verifyToken, allitems)

// router.post('/addorder/:id', verifyToken, addorder)





export default router;