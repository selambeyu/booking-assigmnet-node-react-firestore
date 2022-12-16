const express=require('express')

const router=express.Router();
const bookingService=require('../service/booking')


router.post('/createEvent',bookingService.createEvent);
router.get('/freeSlots',bookingService.freeSlots);
router.get('/getEvents',bookingService.getEvent);

module.exports=router