import express from 'express'
import { deleteuser, getuser, getusers, updateuser } from '../controllers/user.js';
import { verifyToken,verifyUser,verifyAdmin } from '../utils/verifytoken.js';
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("hello user, you are logged in ")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send("hello user, you are logged in and you can delete it")
// })
// router.get("/checkAdmin/:id", verifyAdmin, (req,res,next) => {
//     res.send("hello user, you are logged in and you can delete it")
// })
//update
router.put("/:id",verifyUser,updateuser)

//delete
router.delete("/:id",deleteuser)

//Get hotel
router.get("/:id",verifyUser,getuser)

//Get all
router.get("/",getusers)

export default router