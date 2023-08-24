import jwt from "jsonwebtoken";




export const verifyToken = (req, res, next) => {
   const token = req.cookies.access_token
   if(!token){
    console.log('Error in access_token')
   }

   jwt.verify(token, process.env.JWT, (err, user) => {
    if (err){
        console.log('error in verifying token')
    }
    else{
    
        req.user = user

        next()
    }
   })
}
