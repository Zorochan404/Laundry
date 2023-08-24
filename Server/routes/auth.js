import express from "express"
import { login, logout, resetPass, resetPassword, signup } from "../controllers/auth.js";



const router = express.Router()





router.post('/auth/signup', signup)
router.post('/auth/login', login)
router.post('/auth/logout', logout)
router.post('/v1/password/reset', resetPassword)
router.get('/v1/password/reset/:token', resetPass).put(resetPass)



export default router;