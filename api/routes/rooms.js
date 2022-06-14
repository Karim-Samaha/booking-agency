const express = require("express");
const Hotel = require("../schema/Hotel");
const Room = require("../schema/Room")
const router = express.Router();
const { verfiyToken, verfiyUser, verifyAdmin } = require("./verfiyToken")


//Post 
router.post("/rooms/:hotelid", verifyAdmin, async (req, res, next) => {
    const hotelid = req.params.hotelid;
    const newRoom = await new Room(req.body)
    try {
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelid, { $push: { rooms: savedRoom._id } })
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
})

//Update
router.put("/rooms/:id", verifyAdmin, async (req, res, next) => {
    try {
        const specificRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.json(specificRoom)
    } catch (err) {
        next(err)
    }
})

//Delete
router.delete("/rooms/:id", verifyAdmin, async (req, res, next) => {
    try {
        await Room.findByIdAndRemove(req.params.id)
        res.status(200).send("Room Has Been Deleted")
    } catch (err) {
        next(err)
    }
})
//Get All
router.get("/rooms", async (req, res, next) => {
    try {
        const Rooms = await Room.find();
        res.status(200).json(Rooms)
    } catch (err) {
        next(err)
    }
})

//Get One Room 
router.get("/rooms/:id", async (req, res, next) => {
    try {
        const Rooms = await Room.findById(req.params.id);
        res.status(200).json(Rooms)
    } catch (err) {
        next(err)
    }
})

module.exports = router;