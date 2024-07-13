import express from 'express'
const router = express.Router();
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/errors.js';
import { createHotel,getHotels,updateHotel,deleteHotel,getHotel,countByCity, countByType, getHotelRooms } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifytoken.js';

//create
router.post("/",verifyAdmin,createHotel);

//update
router.put("/:id",verifyAdmin,updateHotel)

//delete
router.delete("/:id",verifyAdmin,deleteHotel)

//Get hotel
router.get("/find/:id",getHotel)

//Get all
router.get("/",getHotels)

router.get("/countByCity",countByCity)
router.get("/countByType",countByType)
router.get("/room/:id" , getHotelRooms)
export default router