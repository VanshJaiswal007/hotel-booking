import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability} from '../controllers/room.js';
const router = express.Router();
import { verifyAdmin } from '../utils/verifytoken.js';

//create
router.post("/:hotelid",verifyAdmin,createRoom);

//update
router.put("/:id",verifyAdmin,updateRoom)
router.put("/availability/:id",updateRoomAvailability)

//delete
router.delete("/:id",verifyAdmin,deleteRoom)

//Get hotel
router.get("/:id",getRoom)

//Get all
router.get("/",getRooms)

export default router